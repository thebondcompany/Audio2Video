"use client";

import { useEffect, useRef, useState } from "react";

interface WaveformVisualizerProps {
  audioUrl: string;
  color?: string;
  onReady?: (wavesurfer: import("wavesurfer.js").default) => void;
}

export default function WaveformVisualizer({ audioUrl, color = "#6366f1", onReady }: WaveformVisualizerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current || !audioUrl) return;

    setError(null);
    let ws: import("wavesurfer.js").default | null = null;

    const init = async () => {
      const WaveSurfer = (await import("wavesurfer.js")).default;
      ws = WaveSurfer.create({
        container: containerRef.current!,
        waveColor: color + "40",
        progressColor: color,
        cursorColor: color,
        height: 80,
        barWidth: 2,
        barGap: 1,
        barRadius: 2,
        normalize: true,
      });

      ws.on("ready", () => {
        onReady?.(ws!);
      });

      await ws.load(audioUrl).catch((err) => {
        console.error("Waveform load error:", err);
        setError("Could not load waveform. You can still generate subtitles and export.");
      });
    };

    init();

    return () => {
      if (ws) {
        ws.destroy();
      }
    };
  }, [audioUrl, color, onReady]);

  return (
    <div className="w-full rounded-lg overflow-hidden bg-black/20 p-4 min-h-[100px]">
      <div ref={containerRef} className="w-full" />
      {error && <p className="text-sm text-blue-500 mt-2">{error}</p>}
    </div>
  );
}
