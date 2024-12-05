/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GA_ID: process.env.GA_ID,
  },
};

export default nextConfig;
