import type NextConfig from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental'
  }
};
module.exports = {
  basePath: 'nextjs-dashboard'
}

export default nextConfig;
