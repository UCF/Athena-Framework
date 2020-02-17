const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.setLiquidOptions({
    root: [
      '_includes'
    ]
  });

  // TODO handle watch logic?
  // eleventyConfig.addWatchTarget('../static/css/');

  eleventyConfig.addPairedShortcode('callout', function (content, callout_type) {
    return `<div class="afd-callout afd-callout-${callout_type}">${content}</div>`;
  });

  eleventyConfig.addPairedShortcode('example', function (content) {
    return `<div class="afd-example">${content}</div>`;
  });

  return {
    dir: {
      input: "./", // Equivalent to Jekyll's source property
      output: "../docs-local", // Equivalent to Jekyll's destination property
      layouts: "_layouts",
      pathPrefix: "/Athena-Framework/"
    }
  };
};
