# Audio → Video

**Turn podcast audio into shareable videos.** Upload audio, generate subtitles with AI, and export YouTube-ready 1920×1080 MP4 videos with animated waveforms—all in your browser. No API keys, no backend required.

![Audio → Video](https://img.shields.io/badge/version-0.1.0-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## Purpose

Podcasters, creators, and marketers often need to turn audio into short-form video for YouTube, TikTok, Instagram, or LinkedIn. Tools like **Descript**, **Riverside**, **Headliner**, and **Wavve** make this easy—but they’re paid, require accounts, and sometimes upload your content to their servers.

Audio → Video is a **free, open-source alternative** that runs entirely in your browser. You get AI transcription, editable subtitles, animated waveforms, and branded video export—without subscriptions, API keys, or sending your audio anywhere.

## Features

- **Local transcription** – Whisper runs entirely in your browser (whisper-tiny or whisper-small). No API keys, no data leaves your device.
- **Editable subtitles** – Edit the generated SRT, remove filler words, apply changes before export.
- **20+ waveform styles** – Bars, dots, rings, waves, spectrum, orb, helix, and more.
- **Full branding control** – Logo, colors, custom background image, subtitle styling.
- **Progress bar** – Scrub through the preview to check subtitles at any timestamp.
- **YouTube-ready export** – 1920×1080 MP4 with H.264 video and AAC audio via FFmpeg.wasm.

## Quick Start

```bash
git clone https://github.com/thebondcompany/Audio2Video.git
cd audiogram
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How to Use

1. **Upload audio** – Drag & drop or click to upload (MP3, WAV, M4A).
2. **Generate subtitles** – Click "Generate Subtitles". First run downloads the Whisper model (~40MB for tiny, ~150MB for small). Check "Higher accuracy" for whisper-small if you want better transcription.
3. **Edit transcript** – Fix any mistakes in the SRT, remove fillers, click "Apply edits" to update the video.
4. **Customize branding** – Add a logo, set colors, pick a waveform style, optionally add a background image.
5. **Preview & export** – Use the progress bar to scrub through the video, then click "Download MP4" to export.

## Tech Stack

- **Next.js 14** – React framework
- **Whisper** – [@huggingface/transformers](https://github.com/huggingface/transformers.js) (runs in Web Worker)
- **FFmpeg.wasm** – [@ffmpeg/ffmpeg](https://github.com/ffmpeg/ffmpeg.wasm) for video encoding
- **Tailwind CSS** – Styling

## Project Structure

```
src/
├── app/                # Next.js app router
│   ├── api/            # API routes (if any)
│   ├── layout.tsx
│   └── page.tsx
├── components/         # React components
│   ├── AudioUploader.tsx
│   ├── BrandingEditor.tsx
│   ├── CircularWaveform.tsx
│   ├── TranscriptEditor.tsx
│   └── VideoPreview.tsx
├── lib/                # Core logic
│   ├── amplitudeCurve.ts   # Audio amplitude for waveform sync
│   ├── drawVideoFrame.ts   # Canvas rendering (waveforms, subtitles)
│   ├── srt.ts              # SRT parse/serialize, filler removal
│   └── transcribeClient.ts # Whisper client
├── types/
│   └── index.ts        # TypeScript types
└── workers/
    └── transcribe.worker.ts  # Whisper Web Worker
```

## Browser Support

- **Chrome, Edge, Firefox** – Full support (SharedArrayBuffer, Web Workers, FFmpeg.wasm)
- **Safari** – Limited (FFmpeg.wasm has known issues)

## Scripts

| Command       | Description                    |
|---------------|--------------------------------|
| `npm run dev` | Start dev server (localhost:3000) |
| `npm run build` | Production build              |
| `npm run start` | Run production server         |
| `npm run lint` | Run ESLint                    |

## 💙 Support this project

If this project saved you time or helped your work,  
you can support its continued development here:

👉 [Support on Stripe](https://buy.stripe.com/6oU14pcrK20N8hJ42I5Ne01)

## Contributing

Contributions are welcome. Please open an issue first to discuss larger changes, or submit a pull request for bug fixes and small improvements.

## License

MIT
