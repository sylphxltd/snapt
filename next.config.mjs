import { withSilk } from '@sylphx/silk-nextjs';

const nextConfig = {
  // Silk requires webpack (not supported in Turbopack)
  // Silence Turbopack warning - we explicitly use webpack via --webpack flag
  turbopack: {},
};

export default withSilk(nextConfig, {
  // Don't specify outputFile - let Silk handle it automatically
  inject: true, // Auto-inject CSS into HTML
  babelOptions: {
    production: true,
    classPrefix: 'silk',
  },
  compression: {
    brotli: true,
    gzip: true,
  },
});
