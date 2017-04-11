var bower = require('bower'),
    browserSync = require('browser-sync').create(),
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
      bowerPath: './bower_components',
      bootstrap: {
        scss: './bower_components/bootstrap/scss',
        js:   './bower_components/bootstrap/js/src'
      },
      sync: false,
      syncTarget: 'http://localhost/'
    },
    config = merge(configDefault, configLocal);


//
// Installation of components/dependencies
//

// Bower
gulp.task('bower', function() {
  return bower.commands.install()
    .pipe(gulp.dest(config.bowerPath));
});

// Web font processing
gulp.task('fonts', ['bower'], function() {
  // TODO add custom fonts from components?
  // gulp.src(config.bowerPath + '/path/to/component/fonts/*/*')
  //   .pipe(gulp.dest(config.dist.fontPath));

  // TODO add custom fonts from src directory?
  // gulp.src(config.src.fontPath + '/path/to/fonts/*')
  //   .pipe(gulp.dest(config.dist.fontPath + '/font-name'));
  return;
});

gulp.task('move-components', ['bower'], function() {
  // Bootstrap
  gulp.src(config.bootstrap.scss + '/**/*', {base: config.bootstrap.scss})
    .pipe(gulp.dest(config.src.scssPath + '/bootstrap'));

  gulp.src(config.bootstrap.js + '/*.js', {base: config.bootstrap.js})
    .pipe(gulp.dest(config.src.jsPath + '/bootstrap'));

  // Object fit polyfill
  gulp.src(config.bowerPath + '/objectFitPolyfill/src/objectFitPolyfill.js', {base: config.bowerPath + '/objectFitPolyfill/src'})
    .pipe(gulp.dest(config.src.jsPath + '/objectFitPolyfill'));

  // Copy eslint and babel configuration files.
  gulp.src([
    config.bootstrap.js + '/../.babelrc',
    config.bootstrap.js + '/../.eslintrc.json'
  ]).pipe(gulp.dest(config.src.jsPath));
});

// Run all component-related tasks
gulp.task('components', ['bower', 'fonts', 'move-components']);


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
function scssBuild() {
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
}
gulp.task('scss-build', scssBuild); // to be run on `gulp watch`; does not require update of Bower packages
gulp.task('scss-build-default', ['components'], scssBuild); // to be run on `gulp default`; requires update of Bower packages before running

// All css-related tasks
gulp.task('css', ['scss-lint', 'scss-build']);
gulp.task('css-default', ['scss-lint', 'scss-build-default']);


//
// JavaScript
//

// Run eshint on all js files in src.jsPath
gulp.task('es-lint', function() {
  var files = [
    '!' + config.src.jsPath + '/objectFitPolyfill/objectFitPolyfill.js',
    config.src.jsPath + '/**/*.js',
  ];

  return gulp.src(files)
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(isFixed(config.src.jsPath));
});

// Concat and uglify js files through babel
var babelBuild = function() {
  return gulp.src(config.src.jsPath + '/framework.js')
    .pipe(include())
      .on('error', console.log)
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(config.dist.jsPath));
};

gulp.task('js-build', babelBuild); // to be run on `gulp watch`; does not require update of Bower packages
gulp.task('js-build-default', ['components'], babelBuild); // to be run on `gulp default`; requires update of Bower packages before running

// All js-related tasks
gulp.task('js', ['es-lint', 'js-build']);
gulp.task('js-default', ['es-lint', 'js-build-default']);


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
gulp.task('default', ['components', 'css-default', 'js-default']);
