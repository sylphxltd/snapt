import { withSilk } from '@sylphx/silk-nextjs';

const nextConfig = {
  turbopack: {},
};

export default withSilk(nextConfig, {
  outputFile: 'silk.css',
  babelOptions: {
    production: true,
    classPrefix: 'silk',
  },
  compression: {
    brotli: true,
    gzip: true,
  },
});
