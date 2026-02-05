"use client";

import { useCallback } from "react";

const ACCEPTED_TYPES = ["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/mp4", "audio/x-m4a"];
const ACCEPTED_EXTENSIONS = [".mp3", ".wav", ".m4a"];

function isAcceptedFile(file: File): boolean {
  if (ACCEPTED_TYPES.includes(file.type)) return true;
  const name = file.name?.toLowerCase() ?? "";
  return ACCEPTED_EXTENSIONS.some((ext) => name.endsWith(ext));
}

interface AudioUploaderProps {
  onFileSelect: (file: File) => void;
  isProcessing?: boolean;
}

export default function AudioUploader({ onFileSelect, isProcessing }: AudioUploaderProps) {
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      if (isProcessing) return;
      const file = e.dataTransfer.files[0];
      if (file && isAcceptedFile(file)) {
        onFileSelect(file);
      }
    },
    [onFileSelect, isProcessing]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file && isAcceptedFile(file)) {
        onFileSelect(file);
      }
    },
    [onFileSelect]
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <label
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className={`
        flex flex-col items-center justify-center w-full min-h-[12rem] border-2 border-dashed rounded-xl
        cursor-pointer transition-all duration-200
        ${isProcessing
          ? "opacity-60 cursor-not-allowed border-zinc-700/40 bg-zinc-800/20"
          : "border-zinc-600/60 hover:border-indigo-500/50 hover:bg-indigo-500/5 bg-zinc-800/30"}
      `}
    >
      <input
        type="file"
        accept=".mp3,.wav,.m4a,audio/mpeg,audio/wav,audio/mp4"
        onChange={handleChange}
        disabled={isProcessing}
        className="hidden"
      />
      <svg
        className="w-11 h-11 mb-3 text-indigo-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
        />
      </svg>
      <span className="text-sm text-zinc-400 mb-1 font-medium">
        {isProcessing ? "Processing..." : "Drop audio file here or click to upload"}
      </span>
      <span className="text-xs text-zinc-500">MP3, WAV, or M4A</span>
    </label>
  );
}
