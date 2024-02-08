/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Add the following rule to handle .gz files
    config.module.rules.push({
      test: /\.gz$/,
      use: 'gzip-loader',
    });

    return config;
  },
};

export default nextConfig;

