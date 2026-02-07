/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Static export has no Image Optimization API; use unoptimized images.
  images: { unoptimized: true },
  // Headers for FFmpeg.wasm (SharedArrayBuffer) are set in public/_headers for static hosts (e.g. Cloudflare Pages)

  // ONNX Runtime (used by @huggingface/transformers for Whisper) uses import.meta; Terser breaks it when minifying.
  // Disabling minification allows static export to succeed. Bundle size will be larger.
  webpack: (config, { dev }) => {
    if (!dev) {
      config.optimization.minimize = false;
    }
    return config;
  },
};

module.exports = nextConfig;
