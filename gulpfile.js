var bower = require('bower'),
    browserSync = require('browser-sync').create(),
    gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    include = require('gulp-include'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    scsslint = require('gulp-scss-lint'),
    uglify = require('gulp-uglify'),
    jshintStylish = require('jshint-stylish'),
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
      bowerPath: './bower_components/',
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

// Run all component-related tasks
gulp.task('components', ['bower', 'fonts']);


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

// Run jshint on all js files in src.jsPath
gulp.task('js-lint', function() {
  return gulp.src([config.src.jsPath + '/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

// Concat and uglify js files.
function jsBuild() {
  return gulp.src(config.src.jsPath + '/framework.js')
    .pipe(include())
      .on('error', console.log)
    .pipe(uglify())
    .pipe(rename('framework.min.js'))
    .pipe(gulp.dest(config.dist.jsPath))
    .pipe(browserSync.stream());
}
gulp.task('js-build', jsBuild); // to be run on `gulp watch`; does not require update of Bower packages
gulp.task('js-build-default', ['components'], jsBuild); // to be run on `gulp default`; requires update of Bower packages before running

// All js-related tasks
gulp.task('js', ['js-lint', 'js-build']);
gulp.task('js-default', ['js-lint', 'js-build-default']);


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
