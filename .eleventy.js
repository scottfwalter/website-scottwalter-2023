const pluginCSS = require('eleventy-postcss-extension');
const eleventyHelmetPlugin = require('eleventy-plugin-helmet');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginCSS);
  eleventyConfig.addPlugin(eleventyHelmetPlugin);

  eleventyConfig.addPassthroughCopy({ './content/fonts': './fonts' });
  eleventyConfig.addPassthroughCopy({ './content/images': './images' });
  eleventyConfig.addPassthroughCopy({ './content/static': './static' });

  return {
    dir: {
        input: 'content',
        output: 'public',
    }
  };
};