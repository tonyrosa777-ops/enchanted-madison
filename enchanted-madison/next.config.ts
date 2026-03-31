import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve WebP and AVIF for supported browsers
    formats: ["image/avif", "image/webp"],
    // Device breakpoints aligned with design-system.md mobile-first breakpoints
    deviceSizes: [390, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimum cache TTL: 7 days for generated images
    minimumCacheTTL: 604800,
  },
  // Compress all responses
  compress: true,
};

export default nextConfig;
