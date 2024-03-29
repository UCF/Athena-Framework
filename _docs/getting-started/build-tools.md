---
layout: docs
title: Build tools
description: Details on how to compile custom Athena builds and more.
tags: getting-started
date: 2020-01-03 # for ordering purposes only
---

If you choose to utilize Athena's source files in your project, they should be included using whatever build tools best suit your project, such as [Grunt](http://gruntjs.com/) or [Gulp](http://gulpjs.com/). However, regardless of the build tools you choose, they will need to build your project's front-end assets in such a way that preserves Athena's core code while applying your overrides in a non-destructive way. We've outlined some examples below using Gulp.


## Contents

{:toc}


## Tooling Setup

To utilize Athena's source files in your project, we recommend picking a set of build tools that automates the process of:
1. Downloading Athena (and any other third-party packages for your project)
2. Copying Athena's font files from Athena into your project
3. Processing Sass and JS:
  - Processing Sass and generating a minified CSS file
  - Processing and generating a minified JavaScript file, or copying Athena's minified JavaScript into your project

We'll be using npm for downloading packages and Gulp for processing files in the rest of the examples below.

The rest of these examples will assume you have basic knowledge of setting up your tool(s) of choice.

## Running Tasks

Assuming a basic project structure that looks something like this:
<pre><code class="nohighlight"> ├── dist/
 ├── src/
 │   └── scss/
 │       ├── my-project.scss
 │       ├── _my-project-variables.scss
 │       └── _my-project-styles.scss
 ├── gulpfile.js
 └── package.json
</code></pre>

...a sample Gulp file that copies Athena's font files and minified JS, and generates a single, minified CSS file, might look like this:

{% highlight 'js' %}
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

// Config
let config = {
  src: {
    scssPath: './src/scss'
  },
  dist: {
    cssPath:  './static/css',
    jsPath:   './static/js',
    fontPath: './static/fonts'
  },
  packagesPath: './node_modules'
};

// Fonts
gulp.task('fonts', () => {
  return gulp.src(`${config.packagesPath}/ucf-athena-framework/dist/fonts/**/*`)
    .pipe(gulp.dest(config.dist.fontPath));
});

// CSS
gulp.task('css', () => {
  return gulp.src(`${config.src.scssPath}/my-project.scss`)
    .pipe(sass({
      includePaths: [config.src.scssPath, config.packagesPath]
    })
      .on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename('my-project.min.css'))
    .pipe(gulp.dest(config.dist.cssPath));
});

// JS
gulp.task('js', () => {
  return gulp.src(`${config.packagesPath}/ucf-athena-framework/dist/js/framework.min.js`)
    .pipe(gulp.dest(config.dist.jsPath));
});

// Default
gulp.task('default', gulp.series('fonts', 'css', 'js'));

{% endhighlight %}

With this setup, you could automate the process of setting up your front-end assets by:
- running `npm install` to install all the packages in your `package.json` file (which should include `ucf-athena-framework`, `gulp`, `gulp-clean-css`, `gulp-rename`, and `gulp-sass` as dependencies),
- then running `gulp-default` to perform all the file processing tasks in the gulpfile.

After running those build steps, your project would look something like:

<pre><code class="nohighlight"> ├── dist/
 │   ├── css/
 │   │   └── my-project.min.css
 │   ├── js/
 │   │   └── framework.min.js
 │   └── fonts/
 │       ├── tulia/
 │       ├── ucf-condensed-alt/
 │       └── ucf-sans-serif-alt/
 ├── node_modules/
 ├── src/
 │   └── scss/
 │       ├── my-project.scss
 │       ├── _my-project-variables.scss
 │       └── _my-project-styles.scss
 ├── gulpfile.js
 └── package.json
</code></pre>

The generated files in your project's `/dist/` directory would then be ready to include in your project's templates (assuming `my-project.scss` [imports Athena's Sass files](#sass)).

You could easily extend this sample gulpfile with extra steps that watch changes to your project's files, perform linting/sanitization, and more, depending on your project's needs.

## Sass

To utilize Athena's Sass files in your project, your workflow must include Sass processing. Projects utilizing Athena's Sass should also be written entirely with Sass (not Less or vanilla CSS).

To have access to Athena's variables and mixins within your Sass files, you'll need to use a specific import order in your project's main Sass file:
1. Your project's variables (including Athena variable overrides)
2. Athena assets
3. Your project's styles

Your project's variables _must_ be included before anything else to ensure they override Athena's variables properly.

### Including all Athena styles in your project

The following sample Sass file imports _all_ of Athena's styles into the project's stylesheet:

{% highlight 'scss' %}
// Project-specific variables
@import 'my-project-variables';

// Package assets
@import './ucf-athena-framework/src/scss/framework';
// @import './some-other-vendor-package/some-stylesheet';

// Project styles
@import 'my-project-styles';
{% endhighlight %}

### Including _just_ Athena variables and mixins in your project

If you want to keep Athena contained to an individual file, but still have access to its variables and mixins, you'll need to import Athena's variable and mixin files into your stylesheet individually.

{% highlight 'scss' %}
// Project-specific variables
@import 'my-project-variables';

// Package assets
@import './ucf-athena-framework/src/scss/variables';
@import './ucf-athena-framework/src/scss/mixins';

// Project styles
@import 'my-project-styles';
{% endhighlight %}

{% callout 'danger' %}
#### Importing Bootstrap variables/mixins prior to v1.0.2
Prior to v1.0.2, these instructions recommended importing additional files from Athena's copy of Bootstrap when attempting to port in Athena's variables and mixins into your project.  **This is no longer recommended** and will result in Sass warnings being thrown when imported.  In v1.0.2 onward, you should only import the files as shown under "Package assets" in the example above.
{% endcallout %}
