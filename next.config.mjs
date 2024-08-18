import withNextIntl from 'next-intl/plugin';
import './src/lib/env.mjs';


/** @type {import('next').NextConfig} */
const nextConfig = { 
  output: "standalone",
};

const withNextIntlConfig = withNextIntl('./src/i18n.ts');
export default withNextIntlConfig(nextConfig);
