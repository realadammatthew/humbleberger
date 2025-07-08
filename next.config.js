module.exports = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self'",
          },
        ],
      },
    ];
  },
};
