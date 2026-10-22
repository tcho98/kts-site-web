import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 86400,
  },
  async headers() {
    const immutableCache = "public, max-age=31536000, immutable";

    return [
      {
        source: "/video/noi-720p-v1.mp4",
        headers: [{ key: "Cache-Control", value: immutableCache }],
      },
    ];
  },
};

export default nextConfig;
