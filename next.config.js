/** @type {import('next').NextConfig} */
const nextConfig = {
  // 不使用静态导出，保留服务端能力
  // output: 'export' 已被禁用
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // 允许本地图片优化
    unoptimized: false,
  },
};

module.exports = nextConfig;
