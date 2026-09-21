import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 only allows the qualities listed here. 90 is used for the big
    // project cover banners so they stay sharp; everything else uses 75.
    qualities: [75, 90],
    // In `npm run dev`, serve images straight from /public. The optimizer keeps
    // saved copies keyed by filename, so replacing a picture with the same name
    // would otherwise keep showing the old one. Production is still optimized.
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
