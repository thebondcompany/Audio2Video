import type { SubtitleSegment } from "@/types";

/** Parse SRT format back to segments */
export function srtToSegments(srt: string): SubtitleSegment[] {
  const blocks = srt.trim().split(/\n\n+/).filter(Boolean);
  const segments: SubtitleSegment[] = [];
  for (const block of blocks) {
    const lines = block.split("\n").filter(Boolean);
    if (lines.length < 2) continue;
    const timeLine = lines[1];
    const match = timeLine.match(
      /(\d{2}):(\d{2}):(\d{2})[,.](\d{3})\s*-->\s*(\d{2}):(\d{2}):(\d{2})[,.](\d{3})/
    );
    if (!match) continue;
    const start =
      parseInt(match[1], 10) * 3600 +
      parseInt(match[2], 10) * 60 +
      parseInt(match[3], 10) +
      parseInt(match[4], 10) / 1000;
    const end =
      parseInt(match[5], 10) * 3600 +
      parseInt(match[6], 10) * 60 +
      parseInt(match[7], 10) +
      parseInt(match[8], 10) / 1000;
    const text = lines.slice(2).join(" ").trim();
    if (text) segments.push({ text, start, end });
  }
  return segments;
}

export function segmentsToSrt(segments: SubtitleSegment[]): string {
  const toSrtTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = Math.floor(s % 60);
    const ms = Math.round((s % 1) * 1000);
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")},${String(ms).padStart(3, "0")}`;
  };
  return segments
    .map(
      (seg, i) =>
        `${i + 1}\n${toSrtTime(seg.start)} --> ${toSrtTime(seg.end)}\n${seg.text.trim()}\n`
    )
    .join("\n");
}

const FILLER_PATTERN = /\b(um|uh|umm|uhh|ah|ahem|er|erm|you know|i mean)\b/gi;

/** Remove common filler words from segment text */
export function removeFillersFromSegments(segments: SubtitleSegment[]): SubtitleSegment[] {
  return segments.map((seg) => ({
    ...seg,
    text: seg.text
      .replace(FILLER_PATTERN, " ")
      .replace(/\s+/g, " ")
      .trim(),
  })).filter((seg) => seg.text.length > 0);
}
