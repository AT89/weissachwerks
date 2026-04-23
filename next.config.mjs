const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  // ADD THIS BLOCK:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;