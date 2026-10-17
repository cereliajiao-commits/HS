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
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/images/products/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/images/company/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=2592000' }],
      },
    ];
  },
};

module.exports = nextConfig;
