import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/dashcam-policy',
        destination: '/samsara',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
