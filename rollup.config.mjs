import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'code/app.js',
  output: {
    dir: '_tmp/js/',
    format: 'es'
  },
  plugins: [nodeResolve()]
};
