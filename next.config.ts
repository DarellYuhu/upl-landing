import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: process.env.NEXT_PUBLIC_HOSTNAME ?? "" }],
  },
};

export default nextConfig;
