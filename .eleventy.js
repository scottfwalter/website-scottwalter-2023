const pluginCSS = require('eleventy-postcss-extension');
const eleventyHelmetPlugin = require('eleventy-plugin-helmet');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const purgeCssPlugin = require("eleventy-plugin-purgecss");

const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPlugin(pluginCSS);
  eleventyConfig.addPlugin(eleventyHelmetPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(purgeCssPlugin, {
    // Optional: Specify the location of your PurgeCSS config
    config: './purgecss.config.js',

    // Optional: Set quiet: true to suppress terminal output
    quiet: false,
  });

  eleventyConfig.addPassthroughCopy({ './content/fonts': './fonts' });
  eleventyConfig.addPassthroughCopy({ './content/images': './images' });
  eleventyConfig.addPassthroughCopy({ './content/static': './static' });

  eleventyConfig.addWatchTarget('./_tmp/js/');
  eleventyConfig.addPassthroughCopy({ './_tmp/js': './js' });

  eleventyConfig.addShortcode("currentDate", (date = DateTime.now()) => {
    return date;
  });

  return {
    dir: {
        input: 'content',
        output: 'public',
    }
  };
};