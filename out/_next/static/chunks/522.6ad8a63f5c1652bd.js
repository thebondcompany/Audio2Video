"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[522],{

/***/ 9522:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transcribeAudio: function() { return /* binding */ transcribeAudio; }
/* harmony export */ });
/**
 * Client-side Whisper transcription. Runs in a Web Worker when possible
 * to avoid freezing/crashing the browser. Falls back to main thread with yields.
 */ /** Merge word-level chunks into phrase-level segments (~2.5s or ~10 words) for readable subtitles. */ function mergeWordChunksToPhrases(chunks) {
    const filtered = chunks.filter((c)=>{
        var _c_text;
        return (_c_text = c.text) === null || _c_text === void 0 ? void 0 : _c_text.trim();
    });
    if (filtered.length === 0) return [];
    const TARGET_DURATION = 2.5;
    const MAX_WORDS = 12;
    const GAP_THRESHOLD = 0.6;
    const segments = [];
    var _filtered__timestamp_, _filtered__timestamp_1;
    let group = {
        words: [],
        start: (_filtered__timestamp_ = filtered[0].timestamp[0]) !== null && _filtered__timestamp_ !== void 0 ? _filtered__timestamp_ : 0,
        end: (_filtered__timestamp_1 = filtered[0].timestamp[1]) !== null && _filtered__timestamp_1 !== void 0 ? _filtered__timestamp_1 : 0
    };
    for (const c of filtered){
        var _c_timestamp_;
        const s = (_c_timestamp_ = c.timestamp[0]) !== null && _c_timestamp_ !== void 0 ? _c_timestamp_ : 0;
        var _c_timestamp_1;
        const e = (_c_timestamp_1 = c.timestamp[1]) !== null && _c_timestamp_1 !== void 0 ? _c_timestamp_1 : 0;
        const text = c.text.trim();
        const gap = s - group.end;
        const duration = e - group.start;
        const shouldBreak = group.words.length >= MAX_WORDS || duration >= TARGET_DURATION || gap > GAP_THRESHOLD && group.words.length > 0;
        if (shouldBreak && group.words.length > 0) {
            segments.push({
                text: group.words.join(" ").trim(),
                start: group.start,
                end: group.end
            });
            group = {
                words: [],
                start: s,
                end: e
            };
        }
        group.words.push(text);
        group.end = e;
        if (group.words.length === 1) group.start = s;
    }
    if (group.words.length > 0) {
        segments.push({
            text: group.words.join(" ").trim(),
            start: group.start,
            end: group.end
        });
    }
    return segments;
}
function parseWhisperOutput(output) {
    var _output_text;
    if (output.chunks && Array.isArray(output.chunks)) {
        const filtered = output.chunks.filter((c)=>{
            var _c_text;
            return (_c_text = c.text) === null || _c_text === void 0 ? void 0 : _c_text.trim();
        });
        if (filtered.length === 0) return [];
        const first = filtered[0];
        const last = filtered[filtered.length - 1];
        var _last_timestamp_, _first_timestamp_;
        const avgDuration = last && first ? (((_last_timestamp_ = last.timestamp[1]) !== null && _last_timestamp_ !== void 0 ? _last_timestamp_ : 0) - ((_first_timestamp_ = first.timestamp[0]) !== null && _first_timestamp_ !== void 0 ? _first_timestamp_ : 0)) / filtered.length : 0;
        const isWordLevel = avgDuration < 1.5 && filtered.length > 10;
        if (isWordLevel) {
            return mergeWordChunksToPhrases(filtered);
        }
        return filtered.map((c)=>{
            var _c_timestamp_, _c_timestamp_1;
            return {
                text: c.text.trim(),
                start: (_c_timestamp_ = c.timestamp[0]) !== null && _c_timestamp_ !== void 0 ? _c_timestamp_ : 0,
                end: (_c_timestamp_1 = c.timestamp[1]) !== null && _c_timestamp_1 !== void 0 ? _c_timestamp_1 : 0
            };
        });
    }
    if ((_output_text = output.text) === null || _output_text === void 0 ? void 0 : _output_text.trim()) {
        return [
            {
                text: output.text.trim(),
                start: 0,
                end: 999999
            }
        ];
    }
    return [];
}
function runInWorker(audioUrl, opts) {
    const { onProgress, durationSeconds } = opts;
    return new Promise((resolve, reject)=>{
        let worker;
        try {
            worker = new Worker(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(372), __webpack_require__.b)), {
                type: undefined
            });
        } catch (e) {
            reject(new Error("Worker not supported"));
            return;
        }
        // Let the worker report its own coarse stages (0,5,15,100) to avoid
        // pretending we have fine‑grained progress that we can't compute.
        worker.onmessage = (e)=>{
            if (e.data.type === "progress") {
                onProgress === null || onProgress === void 0 ? void 0 : onProgress({
                    stage: e.data.stage,
                    label: e.data.label,
                    percent: e.data.percent
                });
            } else if (e.data.type === "done") {
                worker.terminate();
                resolve({
                    segments: e.data.segments
                });
            } else if (e.data.type === "error") {
                worker.terminate();
                reject(new Error(e.data.message));
            }
        };
        worker.onerror = ()=>{
            worker.terminate();
            reject(new Error("Transcription worker failed"));
        };
        worker.postMessage({
            type: "start",
            audioUrl,
            useSmallModel: opts.useSmallModel
        });
    });
}
async function runOnMainThread(audioUrl, opts) {
    const { onProgress, durationSeconds, useSmallModel } = opts;
    const model = useSmallModel ? "Xenova/whisper-small.en" : "Xenova/whisper-tiny.en";
    const report = (stage, label, percent)=>{
        onProgress === null || onProgress === void 0 ? void 0 : onProgress({
            stage,
            label,
            percent
        });
    };
    report("loading", "Loading Whisper...", 0);
    await new Promise((r)=>setTimeout(r, 100));
    const { pipeline } = await Promise.all(/* import() */[__webpack_require__.e(946), __webpack_require__.e(72), __webpack_require__.e(606)]).then(__webpack_require__.bind(__webpack_require__, 760));
    report("loading-model", "Loading model (first time may take a minute)...", 5);
    await new Promise((r)=>setTimeout(r, 100));
    const transcriber = await pipeline("automatic-speech-recognition", model, {
        device: "wasm"
    });
    report("transcribing", "Transcribing audio...", 15);
    await new Promise((r)=>setTimeout(r, 50));
    const output = await transcriber(audioUrl, {
        chunk_length_s: 15,
        stride_length_s: 3,
        return_timestamps: true,
        force_full_sequences: true
    });
    report("transcribing", "Done", 100);
    const segments = parseWhisperOutput(output);
    return {
        segments
    };
}
async function transcribeAudio(audioUrl, onProgressOrOptions) {
    const opts = typeof onProgressOrOptions === "function" ? {
        onProgress: onProgressOrOptions
    } : onProgressOrOptions !== null && onProgressOrOptions !== void 0 ? onProgressOrOptions : {};
    try {
        return await runInWorker(audioUrl, opts);
    } catch (e) {
        return runOnMainThread(audioUrl, opts);
    }
}


/***/ })

}]);