import withNextIntl from 'next-intl/plugin';
import './src/lib/env.mjs';


/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

const withNextIntlConfig = withNextIntl('./src/i18n.ts');
export default withNextIntlConfig(nextConfig);
