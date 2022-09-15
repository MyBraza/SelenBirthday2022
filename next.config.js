/** @type {import('next').NextConfig} */

const withImages = require('next-images')

const nextConfig = {
  ...withImages(),
  future: {
    webpack5: true
  },
  reactStrictMode: true,
  images: {
    domains: ['api.new.mentorama.com.br', 'api-service.mentorama.com.br'],
    disableStaticImages: true
  },
  experimental: {
    // concurrentFeatures: true,
    images: {
      allowFutureImage: true
    }
  }
}

module.exports = nextConfig
