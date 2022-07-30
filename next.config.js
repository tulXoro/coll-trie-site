/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
