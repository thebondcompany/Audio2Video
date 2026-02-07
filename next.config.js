/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Static export has no Image Optimization API; use unoptimized images.
  images: { unoptimized: true },
  // COOP/COEP for FFmpeg.wasm (SharedArrayBuffer): set in public/_headers for Cloudflare Pages.

  // ONNX/transformers use import.meta; Terser breaks it when minifying. Disable for static build.
  webpack: (config, { dev }) => {
    if (!dev) {
      config.optimization.minimize = false;
    }
    return config;
  },
};

module.exports = nextConfig;
