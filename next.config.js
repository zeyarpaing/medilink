/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['unsplash.com', 'images.unsplash.com', 'source.unsplash.com', 'img.freepik.com', 'example.com'],
  },
  experimental: {
    serverActions: true,
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
