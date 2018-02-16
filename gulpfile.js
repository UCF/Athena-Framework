var browserSync = require('browser-sync').create(),
  gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  cleanCSS = require('gulp-clean-css'),
  include = require('gulp-include'),
  eslint = require('gulp-eslint'),
  isFixed = require('gulp-eslint-if-fixed'),
  babel = require('gulp-babel'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  scsslint = require('gulp-scss-lint'),
  uglify = require('gulp-uglify'),
  replace = require('gulp-replace'),
  runSequence = require('run-sequence'),
  merge = require('merge'),
  childProc = require('child_process'),
  header = require('gulp-header'),
  footer = require('gulp-footer'),
  gulpif = require('gulp-if'),
  gutil = require('gulp-util'),
  path = require('path'),
  jsonToYaml = require('gulp-json-to-yaml'),
  fs = require('fs');


var configLocal = require('./gulp-config.json'),
  configDefault = {
    src: {
      scssPath: './src/scss',
      jsPath: './src/js',
      fontPath: './src/fonts'
    },
    dist: {
      cssPath: './dist/css',
      jsPath: './dist/js',
      fontPath: './dist/fonts'
    },
    docs: {
      src: {
        scssPath: './_docs/_src/scss',
        jsPath: './_docs/_src/js'
      },
      dist: {
        cssPath: './_docs/static/css',
        fontPath: './_docs/static/fonts',
        jsPath: './_docs/static/js'
      },
      dataPath: './_docs/_data',
      srcPath: './_docs/_src',
      distPath: './_docs/static',
      rootPath: './_docs',
      deployPath: './docs'
    },
    packagesPath: './node_modules',
    bootstrap: {
      base: './node_modules/bootstrap',
      scss: './node_modules/bootstrap/scss',
      js: './node_modules/bootstrap/js/src'
    },
    pkg: getAthenaPackage(),
    prj: {
      yearRange: getAthenaYearRange(),
      header: getAthenaHeader()
    },
    sync: false,
    syncTarget: 'http://localhost/'
  },
  config = merge(configDefault, configLocal);


//
// Installation of components/dependencies
//

// Web font processing
gulp.task('move-components-font-sans-serif', function () {
  return gulp.src([
    config.src.fontPath + '/ucf-sans-serif-alt/*',
    '!' + config.src.fontPath + '/ucf-sans-serif-alt/generator_config.txt'
  ])
    .pipe(gulp.dest(config.dist.fontPath + '/ucf-sans-serif-alt'));
});

gulp.task('move-components-font-condensed', function () {
  return gulp.src([
    config.src.fontPath + '/ucf-condensed-alt/*',
    '!' + config.src.fontPath + '/ucf-condensed-alt/generator_config.txt'
  ])
    .pipe(gulp.dest(config.dist.fontPath + '/ucf-condensed-alt'));
});

gulp.task('move-components-font-slab-serif', function () {
  return gulp.src([
    config.src.fontPath + '/tulia/*',
    '!' + config.src.fontPath + '/tulia/generator_config.txt'
  ])
    .pipe(gulp.dest(config.dist.fontPath + '/tulia'));
});

gulp.task('move-components-fonts', [
  'move-components-font-sans-serif',
  'move-components-font-condensed',
  'move-components-font-slab-serif'
]);

// Copy Bootstrap scss files
gulp.task('move-components-bootstrap-scss', function () {
  return gulp.src(config.bootstrap.scss + '/**/*', { base: config.bootstrap.scss })
    .pipe(gulp.dest(config.src.scssPath + '/bootstrap'));
});

// Copy Bootstrap js files
gulp.task('move-components-bootstrap-js', function () {
  return gulp.src(config.bootstrap.js + '/*.js', { base: config.bootstrap.js })
    .pipe(gulp.dest(config.src.jsPath + '/bootstrap'));
});

// Copy Bootstrap's license block comment for css and save to a new file
gulp.task('move-components-bootstrap-license-css', function () {
  var sampleFile = fs.readFileSync(config.bootstrap.base + '/dist/css/bootstrap.min.css', { base: config.bootstrap.base }).toString(),
    comment = getLicenseComment(sampleFile);

  if (!comment) { return; }

  return fs.writeFileSync(config.src.scssPath + '/bootstrap/_bootstrap-license.css', comment);
});

// Copy Bootstrap's license block comment for js and save to a new file
gulp.task('move-components-bootstrap-license-js', function () {
  var sampleFile = fs.readFileSync(config.bootstrap.base + '/dist/js/bootstrap.min.js', { base: config.bootstrap.base }).toString();
  comment = getLicenseComment(sampleFile);

  if (!comment) { return; }

  return fs.writeFileSync(config.src.jsPath + '/bootstrap/_bootstrap-license.js', comment);
});

// Copy objectFitPolyfill js
gulp.task('move-components-objectfit', function () {
  return gulp.src(config.packagesPath + '/objectFitPolyfill/src/objectFitPolyfill.js', { base: config.packagesPath + '/objectFitPolyfill/src' })
    .pipe(gulp.dest(config.src.jsPath + '/objectFitPolyfill'));
});

// Copy Stickyfill js
gulp.task('move-components-stickyfill', function () {
  return gulp.src(config.packagesPath + '/Stickyfill/dist/stickyfill.js', { base: config.packagesPath + '/Stickyfill/dist' })
    .pipe(gulp.dest(config.src.jsPath + '/Stickyfill'));
});

// Run all component-related tasks
gulp.task('components', [
  'move-components-fonts',
  'move-components-bootstrap-scss',
  'move-components-bootstrap-js',
  'move-components-bootstrap-license-css',
  'move-components-bootstrap-license-js',
  'move-components-objectfit',
  'move-components-stickyfill'
]);


//
// Header/metadata appending
//

function getAthenaPackage() {
  return JSON.parse(fs.readFileSync('./package.json'));
}

function getAthenaYearRange() {
  var year = '',
    startYear = 2017,
    currentYear = new Date().getFullYear();
  if (startYear == currentYear) {
    year += startYear;
  }
  else {
    year += startYear + '-' + currentYear;
  }
  return year;
}

function getAthenaHeader() {
  return ['/*!',
    ' * Athena Framework v<%= config.pkg.version %> (<%= config.pkg.homepage %>)',
    ' * Copyright <%= config.prj.yearRange %> <%= config.pkg.author.name %>',
    ' * Licensed under <%= config.pkg.license %>',
    ' */',
    ''].join('\n');
}

function getLicenseComment(fileString) {
  var regex = /\/\*(\*(?!\/)|[^*])*\*\//,
    comment = regex.exec(fileString);

  if (!comment || !comment[0]) {
    return false;
  }
  else {
    return comment[0];
  }
}


//
// CSS
//

// Lint scss files
gulp.task('scss-lint', function () {
  return gulp.src(config.src.scssPath + '/*.scss')
    .pipe(scsslint({
      'maxBuffer': 400 * 1024  // default: 300 * 1024
    }));
});

// Compile scss files
function buildCSS(src, filename, dest, applyHeader, doBrowserSync) {
  dest = dest || config.dist.cssPath;
  appleHeader = applyHeader || false;
  doBrowserSync = doBrowserSync || false;

  return gulp.src(src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(autoprefixer({
      // Supported browsers added in package.json ("browserslist")
      cascade: false
    }))
    .pipe(gulpif(applyHeader, header(config.prj.header, { config: config })))
    .pipe(rename(filename))
    .pipe(gulp.dest(dest))
    .pipe(gulpif(doBrowserSync, browserSync.stream()));
}

gulp.task('scss-build-framework', function () {
  return buildCSS(config.src.scssPath + '/framework.scss', 'framework.min.css', config.dist.cssPath, true, true);
});

gulp.task('scss-build', ['scss-build-framework']);

// All css-related tasks
gulp.task('css', ['scss-lint', 'scss-build']);


//
// JavaScript
//

// Run eshint on js files in src.jsPath. Do not perform linting
// on vendor js files.
gulp.task('es-lint', function () {
  var files = [
    config.src.jsPath + '/*.js',
    '!' + config.src.jsPath + '/_bootstrap-*.js',
  ];
  return gulp.src(files)
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(isFixed(config.src.jsPath));
});

// Process Bootstrap js and saves it out to a single file. Handles various
// js-related steps Bootstrap performs via its gruntfile.
gulp.task('js-build-bootstrap', function () {
  return gulp.src(config.src.jsPath + '/bootstrap-plugins.js')
    .pipe(include())
    .on('error', console.log)
    .pipe(replace(/^(export|import).*/gm, ''))
    .pipe(babel())
    .pipe(header(fs.readFileSync(config.src.jsPath + '/bootstrap/_bootstrap-header.js')))
    .pipe(footer(fs.readFileSync(config.src.jsPath + '/bootstrap/_bootstrap-footer.js')))
    .pipe(rename('bootstrap.js'))
    .pipe(gulp.dest(config.src.jsPath + '/bootstrap'));
});

// Concat and uglify js files through babel
function buildJS(src, filename, dest, applyHeader, doBrowserSync, forceIncludePaths) {
  dest = dest || config.dist.jsPath;
  appleHeader = applyHeader || false;
  doBrowserSync = doBrowserSync || false;
  forceIncludePaths = forceIncludePaths || false;

  return gulp.src(src)
    .pipe(gulpif(
      forceIncludePaths,
      include({
        includePaths: [
          path.dirname(src),
          __dirname,
          config.packagesPath
        ]
      }),
      include()
    ))
    .on('error', console.log)
    .pipe(babel())
    .pipe(uglify({ output: { comments: /^(!|\---)/ } })) // try to preserve non-standard headers (e.g. from objectFitPolyfill)
    .pipe(gulpif(applyHeader, header(config.prj.header, { config: config })))
    .pipe(rename(filename))
    .pipe(gulp.dest(dest))
    .pipe(gulpif(doBrowserSync, browserSync.stream()));
}

gulp.task('js-build', function () {
  return buildJS(config.src.jsPath + '/framework.js', 'framework.min.js', config.dist.jsPath, true, true, false);
});

// All js-related tasks
gulp.task('js', function (callback) {
  return runSequence('es-lint', 'js-build-bootstrap', 'js-build', callback);
});


//
// GitHub Pages Build
//

// Generates a Jekyll config file based off of the project's package.json for
// the project docs.
// Allows us to not have to re-define values such as the project version number
// within Jekyll.
gulp.task('docs-config', function () {
  return gulp.src('./package.json')
    .pipe(jsonToYaml())
    .pipe(header("# THIS FILE IS GENERATED AUTOMATICALLY VIA THE `docs-config` GULP TASK. DO NOT OVERRIDE VARIABLES HERE; MODIFY package.json INSTEAD.\n\n"))
    .pipe(gulp.dest(config.docs.dataPath));
});

// Web font processing
gulp.task('docs-move-components-athena-fonts', function () {
  return gulp.src(config.dist.fontPath + '/**/*')
    .pipe(gulp.dest(config.docs.dist.fontPath));
});

// All component-related tasks for docs
gulp.task('docs-components', ['docs-move-components-athena-fonts']);

// Process scss files
gulp.task('docs-scss', function () {
  return buildCSS(config.docs.src.scssPath + '/docs.scss', 'docs.min.css', config.docs.dist.cssPath, true, false);
});

// Concat and uglify js files through babel
gulp.task('docs-js', function () {
  return buildJS(config.docs.src.jsPath + '/docs.js', 'docs.min.js', config.docs.dist.jsPath, true, false, true);
});

// Default task for docs.  Runs all preliminary docs-related tasks that do not
// actually build the docs.
gulp.task('docs-default', function (callback) {
  return runSequence('docs-config', 'docs-components', ['docs-scss', 'docs-js'], callback);
});

// Generates a new local build of the docs.
gulp.task('docs-local', ['docs-default'], function (callback) {
  process.chdir(__dirname + '/_docs');

  childProc.spawn('bundle', [
    'exec',
    'jekyll',
    'build'
  ], { stdio: 'inherit' })
    .on('error', (error) => gutil.log(gutil.colors.red(error.message)))
    .on('close', callback);
});

// Spins up a new environment for previewing changes to the docs.
// Watches for file changes.
gulp.task('docs-watch', function() {
  if (config.docSync.sync) {
    browserSync.init({
      proxy: {
        target: config.docSync.syncTarget
      }
    });
  }

  gulp.watch([
    config.docs.rootPath + '/**/*',
    '!' + config.docs.distPath + '/**/*'
  ], ['docs-local'], { dot: true });
});

// Runs all tasks necessary to generate production-ready (Github Pages)
// documentation.
gulp.task('gh-pages', ['docs-default'], function (callback) {
  process.chdir(__dirname + '/_docs');
  process.env.JEKYLL_ENV = 'production';

  childProc.spawn('bundle', [
    'exec',
    'jekyll',
    'build',
    '--config=_config.yml,_config_prod.yml'
  ], { stdio: 'inherit' })
    .on('error', (error) => gutil.log(gutil.colors.red(error.message)))
    .on('close', callback);
});


//
// Rerun tasks when files change
//
gulp.task('watch', function () {
  if (config.sync) {
    browserSync.init({
      proxy: {
        target: config.syncTarget
      }
    });
  }

  gulp.watch(config.src.scssPath + '/**/*.scss', ['css']).on('change', browserSync.reload);
  gulp.watch(config.src.jsPath + '/**/*.js', ['js']).on('change', browserSync.reload);
});


//
// Default task
//
gulp.task('default', function (callback) {
  // Make sure 'components' completes before 'css' or 'js' are allowed to run
  return runSequence('components', ['css', 'js'], callback);
});
