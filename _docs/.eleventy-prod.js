const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPairedShortcode('callout', function (content, callout_type) {
    return `<div class="afd-callout afd-callout-${callout_type}">${content}</div>`;
  });

  return {
    dir: {
      input: "./", // Equivalent to Jekyll's source property
      output: "../docs", // Equivalent to Jekyll's destination property
      layouts: "_layouts",
      pathPrefix: "/Athena-Framework/"
    }
  };
};
