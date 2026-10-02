import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
  async redirects() {
    return [
      // Short, shareable link for interviewers: /resume -> the generated PDF
      { source: "/resume", destination: "/resume.pdf", permanent: false },
    ];
  },
};

export default nextConfig;
