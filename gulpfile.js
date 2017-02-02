var gulp = require('gulp'),
    configLocal = require('./gulp-config.json'),
    merge = require('merge'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    bower = require('bower'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    jshintStylish = require('jshint-stylish'),
    scsslint = require('gulp-scss-lint'),
    autoprefixer = require('gulp-autoprefixer'),
    browserify = require('browserify'),
    browserSync = require('browser-sync').create();


var configDefault = {
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
// Bower
//

gulp.task('bower', function() {
  return bower.commands.update()
    .on('end', function() {

      // TODO add custom fonts from components?
      // gulp.src(config.bowerPath + '/path/to/component/fonts/*/*')
      //   .pipe(gulp.dest(config.dist.fontPath));

      // TODO add custom fonts from src directory?
      // gulp.src(config.src.fontPath + '/path/to/fonts/*')
      //   .pipe(gulp.dest(config.dist.fontPath + '/font-name'));

    });
});


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
gulp.task('scss', function() {
  return gulp.src(config.src.scssPath + '/framework.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(autoprefixer({
      // Supported browsers added in package.json ("browserslist")
      cascade: false
    }))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(config.dist.cssPath))
    .pipe(browserSync.stream());
});

// All css-related tasks
gulp.task('css', ['scss-lint', 'scss']);


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

// Concat (with Browserify) and uglify js files.
gulp.task('js', function() {
  return browserify(config.src.jsPath + '/framework.js')
    .bundle()
    .pipe(source('framework.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.dist.jsPath))
    .pipe(browserSync.stream());
});

// All js-related tasks
gulp.task('js', ['js-lint', 'js']);


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
gulp.task('default', ['bower', 'css', 'js']);
