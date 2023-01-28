/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: 'https://api.escuelajs.co',
    NEXT_PUBLIC_API_VERSION:'v1',
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
