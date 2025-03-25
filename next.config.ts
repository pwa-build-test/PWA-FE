/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // 개발 환경에서는 PWA 비활성화
});

const nextConfig = withPWA({
  reactStrictMode: true,
});

module.exports = nextConfig;
