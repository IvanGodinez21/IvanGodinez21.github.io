const dotenv = require('dotenv');

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'api.lanyard.rest'],
  },
};

module.exports = nextConfig;
