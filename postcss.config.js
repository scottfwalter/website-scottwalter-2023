const postcssNesting = require('postcss-nesting');
const postcssImport = require('postcss-import');

module.exports = {
  plugins: [
    postcssNesting,
    postcssImport
  ]
};