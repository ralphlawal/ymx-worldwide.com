import type { NextConfig } from "next";

const config: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "i.scdn.co", pathname: "/image/**" }],
  },
};

export default config;
