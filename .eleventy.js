const pluginCSS = require('eleventy-postcss-extension');
const eleventyHelmetPlugin = require('eleventy-plugin-helmet');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginCSS);
  eleventyConfig.addPlugin(eleventyHelmetPlugin);

  eleventyConfig.addPassthroughCopy({ './content/fonts': './fonts' });
  eleventyConfig.addPassthroughCopy({ './content/images': './images' });
  eleventyConfig.addPassthroughCopy({ './content/static': './static' });

  eleventyConfig.addWatchTarget('./_tmp/js');
  eleventyConfig.addPassthroughCopy({ './_tmp/js': './js' });

  return {
    dir: {
        input: 'content',
        output: 'public',
    }
  };
};