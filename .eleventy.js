const pluginCSS = require('eleventy-postcss-extension');
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginCSS);

  return {
    dir: {
        input: 'content',
        output: 'public',
    }
  };
};