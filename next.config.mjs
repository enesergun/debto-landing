/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpile ESM modules for react-i18next and i18next
  transpilePackages: [
    'react-i18next',
    'i18next',
  ],
};

export default nextConfig;
