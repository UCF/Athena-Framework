// Provides access to the current build environment
// in templates (via {{ build.environment }})
module.exports = {
  environment: process.env.ELEVENTY_ENV
};
