/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      'unsplash.com',
      'images.unsplash.com',
      'source.unsplash.com',
      'img.freepik.com',
      'example.com',
      'play-lh.googleusercontent.com',
    ],
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
