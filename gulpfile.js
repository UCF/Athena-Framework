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
    concat = require('gulp-concat'),
    addsrc = require('gulp-add-src');


var configLocal = require('./gulp-config.json'),
    configDefault = {
      src: {
        scssPath: './src/scss',
        jsPath:   './src/js',
        fontPath: './src/fonts'
      },
      dist: {
        cssPath:  './dist/css',
        jsPath:   './dist/js',
        fontPath: './dist/fonts'
      },
      packagesPath: './node_modules',
      bootstrap: {
        scss: './node_modules/bootstrap/scss',
        js:   './node_modules/bootstrap/js/src'
      },
      sync: false,
      syncTarget: 'http://localhost/'
    },
    config = merge(configDefault, configLocal);


//
// Installation of components/dependencies
//

// Web font processing
gulp.task('move-components-font-sans-serif', function() {
  return gulp.src([
    config.src.fontPath + '/ucf-sans-serif-alt/*',
    '!' + config.src.fontPath + '/ucf-sans-serif-alt/generator_config.txt'
  ])
    .pipe(gulp.dest(config.dist.fontPath + '/ucf-sans-serif-alt'));
});

gulp.task('move-components-font-condensed', function() {
  return gulp.src([
    config.src.fontPath + '/ucf-condensed-alt/*',
    '!' + config.src.fontPath + '/ucf-condensed-alt/generator_config.txt'
  ])
    .pipe(gulp.dest(config.dist.fontPath + '/ucf-condensed-alt'));
});

gulp.task('move-components-font-slab-serif', function() {
  return gulp.src([config.src.fontPath + '/tulia/*'])
    .pipe(gulp.dest(config.dist.fontPath + '/tulia'));
});

gulp.task('move-components-fonts', [
  'move-components-font-sans-serif',
  'move-components-font-condensed',
  'move-components-font-slab-serif'
]);

// Copy Bootstrap scss files
gulp.task('move-components-bootstrap-scss', function() {
  return gulp.src(config.bootstrap.scss + '/**/*', {base: config.bootstrap.scss})
    .pipe(gulp.dest(config.src.scssPath + '/bootstrap'));
});

// Copy Bootstrap js files
gulp.task('move-components-bootstrap-js', function() {
  return gulp.src(config.bootstrap.js + '/*.js', {base: config.bootstrap.js})
    .pipe(gulp.dest(config.src.jsPath + '/bootstrap'));
});

// Copy objectFitPolyfill js
gulp.task('move-components-objectfit', function() {
  return gulp.src(config.packagesPath + '/objectFitPolyfill/src/objectFitPolyfill.js', {base: config.packagesPath + '/objectFitPolyfill/src'})
    .pipe(gulp.dest(config.src.jsPath + '/objectFitPolyfill'));
});

// Copy Stickyfill js
gulp.task('move-components-stickyfill', function() {
  return gulp.src(config.packagesPath + '/Stickyfill/dist/stickyfill.js', {base: config.packagesPath + '/Stickyfill/dist'})
    .pipe(gulp.dest(config.src.jsPath + '/Stickyfill'));
});

// Run all component-related tasks
gulp.task('components', [
  'move-components-fonts',
  'move-components-bootstrap-scss',
  'move-components-bootstrap-js',
  'move-components-objectfit',
  'move-components-stickyfill'
]);


//
// CSS
//

// Lint scss files
gulp.task('scss-lint', function() {
  return gulp.src(config.src.scssPath + '/*.scss')
    .pipe(scsslint({
      'maxBuffer': 400 * 1024  // default: 300 * 1024
    }));
});

// Compile scss files
function buildCSS(src, filename, dest) {
  dest = dest || config.dist.cssPath;

  return gulp.src(src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(autoprefixer({
      // Supported browsers added in package.json ("browserslist")
      cascade: false
    }))
    .pipe(rename(filename))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
}

gulp.task('scss-build-webfont-base', function() {
  return buildCSS(config.src.scssPath + '/webfonts-base.scss', 'webfonts-base.min.css');
});

gulp.task('scss-build-webfont-extended-sans', function() {
  return buildCSS(config.src.scssPath + '/webfonts-extended-sans.scss', 'webfonts-extended-sans.min.css');
});

gulp.task('scss-build-webfont-extended', function() {
  return buildCSS(config.src.scssPath + '/webfonts-extended.scss', 'webfonts-extended.min.css');
});

gulp.task('scss-build-webfont-all', function() {
  return buildCSS(config.src.scssPath + '/webfonts-all.scss', 'webfonts-all.min.css');
});

gulp.task('scss-build-framework', function() {
  return buildCSS(config.src.scssPath + '/framework.scss', 'framework.min.css');
});

gulp.task('scss-build', [
  'scss-build-webfont-base',
  'scss-build-webfont-extended-sans',
  'scss-build-webfont-extended',
  'scss-build-webfont-all',
  'scss-build-framework'
]);

// All css-related tasks
gulp.task('css', ['scss-lint', 'scss-build']);


//
// JavaScript
//

// Run eshint on js files in src.jsPath. Do not perform linting
// on vendor js files.
gulp.task('es-lint', function() {
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
gulp.task('js-build-bootstrap', function() {
  return gulp.src(config.src.jsPath + '/bootstrap-plugins.js')
    .pipe(include())
      .on('error', console.log)
    .pipe(replace(/^(export|import).*/gm, ''))
    .pipe(babel())
    .pipe(addsrc.prepend(config.src.jsPath + '/_bootstrap-header.js'))
    .pipe(addsrc.append(config.src.jsPath + '/_bootstrap-footer.js'))
    .pipe(concat('bootstrap.js'))
    .pipe(gulp.dest(config.src.jsPath + '/bootstrap'));
});

// Concat and uglify js files through babel
gulp.task('js-build', function() {
  return gulp.src(config.src.jsPath + '/framework.js')
    .pipe(include())
      .on('error', console.log)
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename('framework.min.js'))
    .pipe(gulp.dest(config.dist.jsPath));
});

// All js-related tasks
gulp.task('js', function() {
  runSequence('es-lint', 'js-build-bootstrap', 'js-build');
});


//
// Rerun tasks when files change
//
gulp.task('watch', function() {
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
gulp.task('default', function() {
  // Make sure 'components' completes before 'css' or 'js' are allowed to run
  runSequence('components', ['css', 'js']);
});
