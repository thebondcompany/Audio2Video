/******/ (function() { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "static/chunks/" + ({"72":"adda3502","946":"037f3a08"}[chunkId] || chunkId) + "." + {"72":"549597875ece03a7","606":"32a267ba3cc30f05","946":"4be1a3991dcaeb19"}[chunkId] + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/relative url */
/******/ 	!function() {
/******/ 		__webpack_require__.U = function RelativeURL(url) {
/******/ 			var realUrl = new URL(url, "x:/");
/******/ 			var values = {};
/******/ 			for (var key in realUrl) values[key] = realUrl[key];
/******/ 			values.href = url;
/******/ 			values.pathname = url.replace(/[?#].*/, "");
/******/ 			values.origin = values.protocol = "";
/******/ 			values.toString = values.toJSON = function() { return url; };
/******/ 			for (var key in values) Object.defineProperty(this, key, { enumerable: true, configurable: true, value: values[key] });
/******/ 		};
/******/ 		__webpack_require__.U.prototype = URL.prototype;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	!function() {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = function() {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScriptURL: function(url) { return url; }
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script url */
/******/ 	!function() {
/******/ 		__webpack_require__.tu = function(url) { return __webpack_require__.tt().createScriptURL(url); };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/_next/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			372: 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = function(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.tu(__webpack_require__.p + __webpack_require__.u(chunkId)));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/**
 * Web Worker: runs Whisper transcription off the main thread to prevent browser freeze/crash.
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
function postProgress(stage, label, percent) {
    self.postMessage({
        type: "progress",
        stage,
        label,
        percent
    });
}
self.onmessage = async (e)=>{
    if (e.data.type !== "start") return;
    const { audioUrl, useSmallModel } = e.data;
    const model = useSmallModel ? "Xenova/whisper-small.en" : "Xenova/whisper-tiny.en";
    try {
        postProgress("loading", "Loading Whisper...", 0);
        await new Promise((r)=>setTimeout(r, 50));
        const { pipeline } = await Promise.all(/* import() */[__webpack_require__.e(946), __webpack_require__.e(72), __webpack_require__.e(606)]).then(__webpack_require__.bind(__webpack_require__, 760));
        postProgress("loading-model", "Loading ".concat(useSmallModel ? "small" : "tiny", " model (first time may take a minute)..."), 5);
        await new Promise((r)=>setTimeout(r, 50));
        const transcriber = await pipeline("automatic-speech-recognition", model, {
            device: "wasm"
        });
        postProgress("transcribing", "Transcribing audio...", 15);
        await new Promise((r)=>setTimeout(r, 50));
        const output = await transcriber(audioUrl, {
            chunk_length_s: 15,
            stride_length_s: 3,
            return_timestamps: true,
            force_full_sequences: true
        });
        const segments = parseWhisperOutput(output);
        self.postMessage({
            type: "done",
            segments
        });
    } catch (err) {
        self.postMessage({
            type: "error",
            message: err instanceof Error ? err.message : String(err)
        });
    }
};


}();
_N_E = __webpack_exports__;
/******/ })()
;