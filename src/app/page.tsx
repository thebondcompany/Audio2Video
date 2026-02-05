"use client";

import { useCallback, useEffect, useState } from "react";
import AudioUploader from "@/components/AudioUploader";
import CircularWaveform from "@/components/CircularWaveform";
import BrandingEditor from "@/components/BrandingEditor";
import VideoPreview from "@/components/VideoPreview";
import TranscriptEditor from "@/components/TranscriptEditor";
import { computeAmplitudeCurve } from "@/lib/amplitudeCurve";
import { DEFAULT_BRANDING } from "@/types";
import type { BrandingTemplate } from "@/types";
import type { SubtitleSegment } from "@/types";

import type { AmplitudeCurve } from "@/lib/amplitudeCurve";

import Image from 'next/image'
import logo from './logo.png'
import defaultBg from './defaultbg.png'

export default function Home() {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [amplitudeCurve, setAmplitudeCurve] = useState<AmplitudeCurve | null>(null);
  const [branding, setBranding] = useState<BrandingTemplate>(() => ({
    ...DEFAULT_BRANDING,
    logoUrl: null,
    waveformColor: "#ffffff",
    videoBackgroundImageUrl: defaultBg.src,
    videoBackgroundBlur: 4,
    videoBackgroundOverlay: 70,
    waveformStyle: "bars",
    subtitleStyle: {
      ...DEFAULT_BRANDING.subtitleStyle,
      highlightColor: "#fbca04",
    },
  }));
  const [segments, setSegments] = useState<SubtitleSegment[]>([]);
  const [audioDuration, setAudioDuration] = useState<number | null>(null);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcribeProgress, setTranscribeProgress] = useState<string | null>(null);
  const [transcribePercent, setTranscribePercent] = useState<number>(0);
  const [transcribeError, setTranscribeError] = useState<string | null>(null);
  const [useSmallModel, setUseSmallModel] = useState(false);

  useEffect(() => {
    if (!audioUrl || isTranscribing) {
      if (!audioUrl) setAmplitudeCurve(null);
      return;
    }
    let cancelled = false;
    computeAmplitudeCurve(audioUrl, 30)
      .then((curve) => {
        if (!cancelled) setAmplitudeCurve(curve);
      })
      .catch(() => {
        if (!cancelled) setAmplitudeCurve(null);
      });
    return () => {
      cancelled = true;
    };
  }, [audioUrl, isTranscribing]);

  const handleFileSelect = useCallback((file: File) => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioFile(file);
    setAudioUrl(URL.createObjectURL(file));
    setSegments([]);
    setTranscribeError(null);
  }, [audioUrl]);

  const handleTranscribe = useCallback(async () => {
    if (!audioUrl) return;

    setIsTranscribing(true);
    setTranscribeError(null);
    setTranscribeProgress("Starting...");
    setTranscribePercent(0);
    setAmplitudeCurve(null);

    let durationSeconds: number | undefined;
    try {
      durationSeconds = await new Promise<number>((resolve, reject) => {
        const audio = new Audio(audioUrl);
        audio.onloadedmetadata = () => resolve(audio.duration);
        audio.onerror = () => reject(new Error("Could not load audio"));
      });
    } catch {
      durationSeconds = undefined;
    }

    try {
      const { transcribeAudio } = await import("@/lib/transcribeClient");
      const { segments: nextSegments } = await transcribeAudio(audioUrl, {
        durationSeconds,
        useSmallModel,
        onProgress: (p) => {
          setTranscribeProgress(p.label);
          setTranscribePercent(p.percent);
        },
      });
      setSegments(nextSegments);
    } catch (err) {
      setTranscribeError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsTranscribing(false);
      setTranscribeProgress(null);
      setTranscribePercent(0);
    }
  }, [audioUrl, useSmallModel]);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8 md:p-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center space-y-3 pb-2">
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-white">
              Audio → Video
            </h1>
          </div>
          <p className="text-zinc-400 text-xl max-w-lg mx-auto">
            Convert podcast audio into YouTube-ready videos with waveforms and auto-generated subtitles
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 shadow-xl">
            <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">
              1. Upload Audio
            </h2>
            <AudioUploader
              onFileSelect={handleFileSelect}
              isProcessing={isTranscribing}
            />
          </section>

          {audioUrl && (
            <section className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 shadow-xl">
              <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">
                2. Waveform &amp; Transcription
              </h2>
              <div className="space-y-5">
                <CircularWaveform
                  audioUrl={audioUrl}
                  color={branding.waveformColor ?? branding.primaryColor}
                />
                <div className="flex flex-col gap-4">
                  <label className="flex items-center gap-2 text-sm text-zinc-400 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={useSmallModel}
                      onChange={(e) => setUseSmallModel(e.target.checked)}
                      disabled={isTranscribing}
                      className="rounded border-zinc-600 bg-zinc-800 text-indigo-500 focus:ring-indigo-500"
                    />
                    Higher accuracy (whisper-small, slower)
                  </label>
                  <button
                    onClick={handleTranscribe}
                    disabled={isTranscribing}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors w-fit disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-indigo-600 shadow-lg shadow-indigo-500/20"
                  >
                    {isTranscribing
                      ? "Transcribing..."
                      : "Generate Subtitles (Local Whisper)"}
                  </button>
                  {isTranscribing && transcribeProgress && (
                    <div className="space-y-2">
                      <p className="text-sm text-zinc-400">
                        {transcribeProgress}
                        {transcribePercent > 0 && transcribePercent < 100 && (
                          <span className="text-zinc-300 font-medium ml-1">
                            ({transcribePercent}%)
                          </span>
                        )}
                      </p>
                      <div className="h-2 w-full max-w-sm rounded-full bg-zinc-800 overflow-hidden">
                        <div
                          className="h-full bg-indigo-500 rounded-full transition-[width] duration-300"
                          style={{ width: `${transcribePercent}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                {transcribeError && (
                  <p className="text-sm text-red-400">{transcribeError}</p>
                )}
                {segments.length > 0 && (
                  <div className="space-y-4">
                    <div className="px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-400">
                      {segments.length} subtitle segment{segments.length !== 1 ? "s" : ""} generated
                    </div>
                    <TranscriptEditor
                      segments={segments}
                      onChange={setSegments}
                      audioDuration={audioDuration}
                    />
                  </div>
                )}
              </div>
            </section>
          )}
        </div>

        {audioUrl && (
          <>
            <section className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 shadow-xl">
              <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">
                3. Preview &amp; Export Video
              </h2>
              <div className="space-y-4">
                <VideoPreview
                  audioUrl={audioUrl}
                  segments={segments}
                  branding={branding}
                  amplitudeCurve={amplitudeCurve}
                  onLayoutChange={(layout) => setBranding((b) => ({ ...b, layout }))}
                  onDurationLoaded={setAudioDuration}
                />
              </div>
            </section>

            <section className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 shadow-xl">
              <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">
                4. Branding &amp; Video Settings
              </h2>
              <BrandingEditor branding={branding} onChange={setBranding} />
            </section>
          </>
        )}
      </div>
    </main>
  );
}
