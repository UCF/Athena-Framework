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
    fs = require('fs');


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
      docs: {
        cssPath: './docs/res/css',
        fontPath: './docs/res/fonts',
        jsPath: './docs/res/js',
        scssPath: './docs/_src/scss'
      },
      packagesPath: './node_modules',
      bootstrap: {
        base: './node_modules/bootstrap',
        scss: './node_modules/bootstrap/scss',
        js:   './node_modules/bootstrap/js/src'
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
gulp.task('move-components-bootstrap-scss', function() {
  return gulp.src(config.bootstrap.scss + '/**/*', {base: config.bootstrap.scss})
    .pipe(gulp.dest(config.src.scssPath + '/bootstrap'));
});

// Copy Bootstrap js files
gulp.task('move-components-bootstrap-js', function() {
  return gulp.src(config.bootstrap.js + '/*.js', {base: config.bootstrap.js})
    .pipe(gulp.dest(config.src.jsPath + '/bootstrap'));
});

<<<<<<< HEAD
<<<<<<< HEAD
// Copy Bootstrap's license block comment for css and save to a new file
gulp.task('move-components-bootstrap-license-css', function() {
  var sampleFile = fs.readFileSync(config.bootstrap.base + '/dist/css/bootstrap.min.css', {base: config.bootstrap.base}).toString(),
      comment = getLicenseComment(sampleFile);

  if (!comment) { return; }

  return fs.writeFileSync(config.src.scssPath + '/bootstrap/_bootstrap-license.css', comment);
});

// Copy Bootstrap's license block comment for js and save to a new file
gulp.task('move-components-bootstrap-license-js', function() {
  var sampleFile = fs.readFileSync(config.bootstrap.base + '/dist/js/bootstrap.min.js', {base: config.bootstrap.base}).toString();
      comment = getLicenseComment(sampleFile);

  if (!comment) { return; }

  return fs.writeFileSync(config.src.jsPath + '/bootstrap/_bootstrap-license.js', comment);
=======
// Copy Bootstrap license
gulp.task('move-components-bootstrap-license', function() {
  return gulp.src(config.bootstrap.base + '/LICENSE', {base: config.bootstrap.base})
    .pipe(gulp.dest(config.src.jsPath + '/bootstrap'))
    .pipe(gulp.dest(config.src.scssPath + '/bootstrap'));
>>>>>>> Added license for framework and docs; added bootstrap license in relevant src/ directories; added docs attribution to footer template
});

=======
>>>>>>> Removed bootstrap license document copying in favor of updating minifiers to include important comments
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
<<<<<<< HEAD
<<<<<<< HEAD
  'move-components-bootstrap-license-css',
  'move-components-bootstrap-license-js',
=======
  'move-components-bootstrap-license',
>>>>>>> Added license for framework and docs; added bootstrap license in relevant src/ directories; added docs attribution to footer template
=======
>>>>>>> Removed bootstrap license document copying in favor of updating minifiers to include important comments
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
<<<<<<< HEAD
<<<<<<< HEAD
  return ['/*!',
=======
  return ['/**',
>>>>>>> Added license for framework and docs; added bootstrap license in relevant src/ directories; added docs attribution to footer template
=======
  return ['/*!',
>>>>>>> Removed bootstrap license document copying in favor of updating minifiers to include important comments
  ' * Athena Framework <%= config.pkg.version %> (<%= config.pkg.homepage %>)',
  ' * Copyright <%= config.prj.yearRange %> <%= config.pkg.author.name %>',
  ' * Licensed under <%= config.pkg.license %>',
  ' */',
  ''].join('\n');
}

<<<<<<< HEAD
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

=======
>>>>>>> Added license for framework and docs; added bootstrap license in relevant src/ directories; added docs attribution to footer template

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
<<<<<<< HEAD
function buildCSS(src, filename, dest, applyHeader, doBrowserSync) {
  dest = dest || config.dist.cssPath;
  appleHeader = applyHeader || false;
  doBrowserSync = doBrowserSync || false;
=======
function buildCSS(src, filename, dest, applyHeader) {
  dest = dest || config.dist.cssPath;
  appleHeader = applyHeader || false;
>>>>>>> Added license for framework and docs; added bootstrap license in relevant src/ directories; added docs attribution to footer template

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

gulp.task('scss-build-framework', function() {
<<<<<<< HEAD
  return buildCSS(config.src.scssPath + '/framework.scss', 'framework.min.css', config.dist.cssPath, true, true);
=======
  return buildCSS(config.src.scssPath + '/framework.scss', 'framework.min.css', config.dist.cssPath, true);
>>>>>>> Added license for framework and docs; added bootstrap license in relevant src/ directories; added docs attribution to footer template
});

gulp.task('scss-build', ['scss-build-framework']);

// All css-related tasks
gulp.task('css', ['scss-lint', 'scss-build']);


//
// GitHub Pages Build
//

gulp.task('scss-gh-pages', function() {
<<<<<<< HEAD
  return buildCSS(config.docs.scssPath + '/style.scss', 'style.min.css', config.docs.cssPath, true, false);
=======
  gulp.src(config.docs.scssPath + '/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(autoprefixer({
      // Supported browsers added in package.json ("browserslist")
      cascade: false
    }))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(config.docs.cssPath));
>>>>>>> Missing semicolon
});

gulp.task('files-gh-pages', function() {
  gulp.src(config.dist.fontPath + '/**/*')
    .pipe(gulp.dest(config.docs.fontPath));

  gulp.src(config.dist.jsPath + '/**/*')
    .pipe(gulp.dest(config.docs.jsPath));
});

gulp.task('gh-pages', ['scss-gh-pages', 'files-gh-pages']);

gulp.task('jekyll-serve', function() {
  gulp.watch(config.docs.scss + '/**/*.scss', ['scss-gh-pages']);

  process.chdir('./docs');

  const jekyll = childProc.spawn('jekyll', [
    'serve',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('JekyllL ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});


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
<<<<<<< HEAD
    .pipe(header(fs.readFileSync(config.src.jsPath + '/bootstrap/_bootstrap-header.js')))
    .pipe(footer(fs.readFileSync(config.src.jsPath + '/bootstrap/_bootstrap-footer.js')))
=======
    .pipe(header(fs.readFileSync(config.src.jsPath + '/_bootstrap-header.js')))
    .pipe(footer(fs.readFileSync(config.src.jsPath + '/_bootstrap-footer.js')))
>>>>>>> Updated js-build-bootstrap to use gulp-header, gulp-footer
    .pipe(rename('bootstrap.js'))
    .pipe(gulp.dest(config.src.jsPath + '/bootstrap'));
});

// Concat and uglify js files through babel
gulp.task('js-build', function() {
  return gulp.src(config.src.jsPath + '/framework.js')
    .pipe(include())
      .on('error', console.log)
    .pipe(babel())
<<<<<<< HEAD
<<<<<<< HEAD
    .pipe(uglify( { output: { comments: /^(!|\---)/ } } )) // try to preserve headers from objectFitPolyfill
=======
    .pipe(uglify())
>>>>>>> Added license for framework and docs; added bootstrap license in relevant src/ directories; added docs attribution to footer template
=======
    .pipe(uglify( { output: { comments: /^(!|\---)/ } } )) // try to preserve headers from objectFitPolyfill
>>>>>>> Removed bootstrap license document copying in favor of updating minifiers to include important comments
    .pipe(header(config.prj.header, { config: config }))
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

gulp.task('watch-jekyll', ['watch', 'jekyll-serve']);

//
// Default task
//
gulp.task('default', function() {
  // Make sure 'components' completes before 'css' or 'js' are allowed to run
  runSequence('components', ['css', 'js']);
});
