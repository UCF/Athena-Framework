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
    merge = require('merge');


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
gulp.task('move-components-fonts', function() {
  // TODO add custom fonts from components?
  // CREATE SEPARATE TASK THAT RETURNS A STREAM:
  // return gulp.src(config.packagesPath + '/path/to/component/fonts/*/*')
  //   .pipe(gulp.dest(config.dist.fontPath));

  // TODO add custom fonts from src directory?
  // CREATE SEPARATE TASK THAT RETURNS A STREAM:
  // return gulp.src(config.src.fontPath + '/path/to/fonts/*')
  //   .pipe(gulp.dest(config.dist.fontPath + '/font-name'));
  return;
});

// Copy Bootstrap scss files
gulp.task('move-components-bootstrap-scss', function() {
  return gulp.src(config.bootstrap.scss + '/**/*', {base: config.bootstrap.scss})
    .pipe(gulp.dest(config.src.scssPath + '/bootstrap'));
});

// Copy Bootstrap js files. Strip all import/export statements (similarly to
// Bootstrap's grunt js build task)
gulp.task('move-components-bootstrap-js', function() {
  return gulp.src(config.bootstrap.js + '/*.js', {base: config.bootstrap.js})
    .pipe(replace(/^(export|import).*/gm, ''))
    .pipe(gulp.dest(config.src.jsPath + '/bootstrap'));
});

// Copy objectFitPolyfill js
gulp.task('move-components-objectfit', function() {
  return gulp.src(config.packagesPath + '/objectFitPolyfill/src/objectFitPolyfill.js', {base: config.packagesPath + '/objectFitPolyfill/src'})
    .pipe(gulp.dest(config.src.jsPath + '/objectFitPolyfill'));
});

// Run all component-related tasks
gulp.task('components', ['move-components-fonts', 'move-components-bootstrap-scss', 'move-components-bootstrap-js', 'move-components-objectfit']);


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
gulp.task('scss-build', function() {
  return gulp.src(config.src.scssPath + '/framework.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(autoprefixer({
      // Supported browsers added in package.json ("browserslist")
      cascade: false
    }))
    .pipe(rename('framework.min.css'))
    .pipe(gulp.dest(config.dist.cssPath))
    .pipe(browserSync.stream());
  });

// All css-related tasks
gulp.task('css', ['scss-lint', 'scss-build']);


//
// JavaScript
//

// Run eshint on all js files in src.jsPath. Don't perform linting on vendor
// package files.
gulp.task('es-lint', function() {
  var files = [
    '!' + config.src.jsPath + '/objectFitPolyfill/objectFitPolyfill.js',
    '!' + config.src.jsPath + '/bootstrap/*',
    config.src.jsPath + '/*.js',
  ];

  return gulp.src(files)
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(isFixed(config.src.jsPath));
});

// Concat and uglify js files through babel
gulp.task('js-build', function() {
  return gulp.src(config.src.jsPath + '/framework.min.js')
    .pipe(include())
      .on('error', console.log)
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename('framework.min.js'))
    .pipe(gulp.dest(config.dist.jsPath));
})

// All js-related tasks
gulp.task('js', ['es-lint', 'js-build']);


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
