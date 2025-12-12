/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // BU SATIRLARI SİL veya BOŞ BIRAK:
  // basePath: '',     ← BU SATIR OLMAMALI VEYA BOŞ OLMALI
  // assetPrefix: '',  ← BU SATIR OLMAMALI VEYA BOŞ OLMALI
  trailingSlash: true,
}

module.exports = nextConfig
