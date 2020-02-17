const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.setLiquidOptions({
    root: [
      '_includes'
    ]
  });

  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPassthroughCopy('LICENSE');
  eleventyConfig.addPassthroughCopy('static');

  eleventyConfig.addPairedShortcode('callout', function (content, callout_type) {
    // Render content as markdown first; otherwise
    // it gets parsed as HTML and markdown isn't translated
    content = md.render(content);
    return `<div class="afd-callout afd-callout-${callout_type}">${content}</div>`;
  });

  eleventyConfig.addPairedShortcode('example', function (content) {
    return `<div class="afd-example">${content}</div>`;
  });

  return {
    pathPrefix: '/Athena-Framework',
    dir: {
      input: './', // Equivalent to Jekyll's source property
      output: '../docs', // Equivalent to Jekyll's destination property
      layouts: '_layouts',
    }
  };
};
