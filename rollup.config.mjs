import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'code/app.js',
  output: {
    file: '_tmp/js/app.js',
    format: 'es'
  },
  plugins: [nodeResolve()]
};
