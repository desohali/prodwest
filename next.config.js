/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', 'images.pexels.com'], // Agrega 'via.placeholder.com' como dominio permitido
  },
}

module.exports = nextConfig
