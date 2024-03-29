module.exports = function (eleventyConfig) {
  //
  // Eleventy configuration
  //
  eleventyConfig.setLiquidOptions({
    root: [
      '_includes'
    ],
    dynamicPartials: false
  });

  eleventyConfig.addWatchTarget('../src/scss/');
  eleventyConfig.addWatchTarget('../src/js/');

  eleventyConfig.setBrowserSyncConfig({
    startPath: '/Athena-Framework/examples',
    server: {
      baseDir: '../../'
    }
  });

  //
  // Build options
  //
  return {
    pathPrefix: '/Athena-Framework/examples',
    dir: {
      input: './', // Equivalent to Jekyll's source property
      output: '../examples', // Equivalent to Jekyll's destination property
      layouts: '_layouts'
    }
  };
};
