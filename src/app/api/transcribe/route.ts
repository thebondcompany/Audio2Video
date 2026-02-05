import { NextResponse } from "next/server";

/**
 * Transcription now runs in the browser using Whisper (Transformers.js web build)
 * to avoid bundling onnxruntime-node in the server. Use the "Generate Subtitles"
 * button on the app page instead.
 */
export async function POST() {
  return NextResponse.json(
    {
      error: "Transcription runs in the browser. Use the Generate Subtitles button on the page.",
    },
    { status: 410 }
  );
}
