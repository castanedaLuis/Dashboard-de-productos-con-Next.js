/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: 'v1',
    NEXT_PUBLIC_API_VERSION:'https://api.escuelajs.co'
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
