import { withSilk } from '@sylphx/silk-nextjs';

const nextConfig = {
  // Use webpack instead of Turbopack (required for Silk plugin)
  turbopack: {},
};

export default withSilk(nextConfig, {
  outputFile: 'app/silk.css',
  babelOptions: {
    production: true,
    classPrefix: 'silk',
  },
  compression: {
    brotli: true,
    gzip: true,
  },
});
