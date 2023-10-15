/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'unsplash.com',
      'images.unsplash.com',
      'source.unsplash.com',
      'img.freepik.com',
      'play-lh.googleusercontent.com',
    ],
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
