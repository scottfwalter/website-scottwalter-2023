const pluginCSS = require('eleventy-postcss-extension');
const eleventyHelmetPlugin = require('eleventy-plugin-helmet');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPlugin(pluginCSS);
  eleventyConfig.addPlugin(eleventyHelmetPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy({ './content/fonts': './fonts' });
  eleventyConfig.addPassthroughCopy({ './content/images': './images' });
  eleventyConfig.addPassthroughCopy({ './content/static': './static' });

  eleventyConfig.addWatchTarget('./_tmp/js/');
  eleventyConfig.addPassthroughCopy({ './_tmp/js': './js' });

  return {
    dir: {
        input: 'content',
        output: 'public',
    }
  };
};