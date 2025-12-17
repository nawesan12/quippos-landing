import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  compress: true,
};

export default nextConfig;
