/* eslint no-sync: "off", no-console: "off" */

const childProcess = require('child_process');
const fs           = require('fs');
const gulp         = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const babel        = require('gulp-babel');
const cleanCSS     = require('gulp-clean-css');
const eslint       = require('gulp-eslint');
const isFixed      = require('gulp-eslint-if-fixed');
const header       = require('gulp-header');
const gulpif       = require('gulp-if');
const include      = require('gulp-include');
const rename       = require('gulp-rename');
const replace      = require('gulp-replace');
const sass         = require('gulp-sass');
const sassLint     = require('gulp-sass-lint');
const uglify       = require('gulp-uglify');
const lunr         = require('lunr');
const merge        = require('merge');
const path         = require('path');


let config = {
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
    rootPath: './_docs'
  },
  docsLocalPath: './docs-local',
  ghPagesPath: './docs',
  examplesPath: './_examples',
  packagesPath: './node_modules',
  pkg: getAthenaPackage(),
  prj: {
    yearRange: getAthenaYearRange(),
    header: getAthenaHeader()
  },
  sync: false,
  syncOptions: {},
  examplesCSSKey: '',
  examplesBaseURL: '/examples',
  docSync: false,
  docSyncOptions: {},
  docBaseURL: '/docs-local'
};

if (fs.existsSync('./gulp-config.json')) {
  const overrides = JSON.parse(fs.readFileSync('./gulp-config.json'));
  config = merge(config, overrides);
}


//
// Helper functions
//

// Base scss linting function
// NOTE: see global linter rules and excluded files in .sass-lint.yml
function lintSCSS(src) {
  return gulp.src(src)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
}

// Compile scss files
function buildCSS(src, filename, dest, applyHeader) {
  dest = dest || config.dist.cssPath;
  applyHeader = applyHeader || false;

  return gulp.src(src)
    .pipe(sass({
      includePaths: [config.src.scssPath, config.packagesPath]
    })
      .on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(autoprefixer({
      // Supported browsers added in package.json ("browserslist")
      cascade: false
    }))
    .pipe(gulpif(applyHeader, header(config.prj.header, {
      config: config
    })))
    // Remove charset rule (if present) and add to the first
    // line of the stylesheet (@charset must be on the first line)
    .pipe(replace('@charset "UTF-8";', ''))
    .pipe(header('@charset "UTF-8";\n'))
    .pipe(rename(filename))
    .pipe(gulp.dest(dest));
}

// Base JS linting function (with eslint). Fixes problems in-place.
// NOTE: see global linter rules in .eslintrc.json and excluded files
// in .eslintignore
function lintJS(src, dest) {
  dest = dest || config.src.jsPath;

  return gulp.src(src)
    .pipe(eslint({
      fix: true
    }))
    .pipe(eslint.format())
    .pipe(isFixed(dest));
}

// Concat and uglify js files through babel
function buildJS(src, filename, dest, applyHeader, forceIncludePaths) {
  dest = dest || config.dist.jsPath;
  applyHeader = applyHeader || false;
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
    .on('error', console.log) // eslint-disable-line no-console
    .pipe(babel())
    .pipe(uglify({
      output: {
        // try to preserve non-standard headers (e.g. from objectFitPolyfill)
        comments: /^(!|---)/
      }
    }))
    .pipe(gulpif(applyHeader, header(config.prj.header, {
      config: config
    })))
    .pipe(rename(filename))
    .pipe(gulp.dest(dest));
}

// Generates a search index for the documentation.
function buildDocsIndex(dataPath, indexPath, done) {
  dataPath = dataPath || `${config.docsLocalPath}/search-data.json`;
  indexPath = indexPath || `${config.docsLocalPath}/search-index.json`;

  const documents = JSON.parse(fs.readFileSync(dataPath));

  // Generate index
  const idx = lunr(function () {
    this.ref('id');
    this.field('title');

    documents.forEach(function (doc) {
      this.add(doc);
    }, this);
  });

  const searchIndex = JSON.stringify(idx);

  // Save search index
  fs.writeFileSync(indexPath, searchIndex);

  done();
}


//
// Header/metadata appending
//

function getAthenaPackage() {
  return JSON.parse(fs.readFileSync('./package.json'));
}

function getAthenaYearRange() {
  let year = '';
  const startYear = 2017;
  const currentYear = new Date().getFullYear();
  if (startYear === currentYear) {
    year += startYear;
  } else {
    year += `${startYear}-${currentYear}`;
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


//
// Installation of components/dependencies
//

// Web font processing
gulp.task('move-components-font-sans-serif', () => {
  return gulp.src([
    `${config.src.fontPath}/ucf-sans-serif-alt/*`,
    `!${config.src.fontPath}/ucf-sans-serif-alt/generator_config.txt`
  ])
    .pipe(gulp.dest(`${config.dist.fontPath}/ucf-sans-serif-alt`));
});

gulp.task('move-components-font-condensed', () => {
  return gulp.src([
    `${config.src.fontPath}/ucf-condensed-alt/*`,
    `!${config.src.fontPath}/ucf-condensed-alt/generator_config.txt`
  ])
    .pipe(gulp.dest(`${config.dist.fontPath}/ucf-condensed-alt`));
});

gulp.task('move-components-font-slab-serif', () => {
  return gulp.src([
    `${config.src.fontPath}/tulia/*`,
    `!${config.src.fontPath}/tulia/generator_config.txt`
  ])
    .pipe(gulp.dest(`${config.dist.fontPath}/tulia`));
});

gulp.task('move-components-fonts', gulp.parallel(
  'move-components-font-sans-serif',
  'move-components-font-condensed',
  'move-components-font-slab-serif'
));

// Run all component-related tasks
gulp.task('components', gulp.parallel('move-components-fonts'));


//
// CSS
//

// Lint scss files. Do not perform linting on vendor scss files.
gulp.task('scss-lint', () => {
  return lintSCSS(`${config.src.scssPath}/**/*.scss`);
});

// Compile framework scss files
gulp.task('scss-build', () => {
  return buildCSS(`${config.src.scssPath}/framework.scss`, 'framework.min.css', config.dist.cssPath, true);
});

// All css-related tasks
gulp.task('css', gulp.series('scss-lint', 'scss-build'));


//
// JavaScript
//

// Run eslint on js files in src.jsPath. Do not perform linting
// on vendor js files. See .eslintignore for globally ignored files.
gulp.task('es-lint', () => {
  return lintJS(`${config.src.jsPath}/*.js`, config.src.jsPath);
});

// Concat and uglify framework js files through babel
gulp.task('js-build', () => {
  return buildJS(`${config.src.jsPath}/framework.js`, 'framework.min.js', config.dist.jsPath, true, true);
});

// All js-related tasks
gulp.task('js', gulp.series('es-lint', 'js-build'));


//
// GitHub Pages Build
//

// Generates a Jekyll config file based off of the project's package.json for
// the project docs.
// Allows us to not have to re-define values such as the project version number
// within Jekyll.
gulp.task('docs-config', () => {
  return gulp.src('./package.json')
    .pipe(gulp.dest(config.docs.dataPath));
});

// Web font processing
gulp.task('docs-move-components-athena-fonts', () => {
  return gulp.src(`${config.dist.fontPath}/**/*`)
    .pipe(gulp.dest(config.docs.dist.fontPath));
});

// All component-related tasks for docs
gulp.task('docs-components', gulp.series('docs-move-components-athena-fonts'));

// Process scss files
gulp.task('docs-scss', () => {
  return buildCSS(`${config.docs.src.scssPath}/docs.scss`, 'docs.min.css', config.docs.dist.cssPath, true);
});

// Concat and uglify js files through babel
gulp.task('docs-js', () => {
  return buildJS(`${config.docs.src.jsPath}/docs.js`, 'docs.min.js', config.docs.dist.jsPath, false, true);
});

// Default task for docs.  Runs all preliminary docs-related tasks that do not
// actually build the docs.
gulp.task('docs-default', gulp.series('docs-config', 'docs-components', gulp.parallel('docs-scss', 'docs-js')));

// Generates a new local build of the docs.
gulp.task('docs-local-build', gulp.series(
  gulp.series('docs-default'),
  () => {
    return childProcess.exec(
      'ELEVENTY_ENV=development npx @11ty/eleventy',
      {
        cwd: `${__dirname}/_docs`
      }
    ).stdout.on('data', (data) => {
      console.log(data);
    });
  }
));

// Generates a search index for the documentation's search feature.
gulp.task('docs-local-index', (done) => {
  return buildDocsIndex(`${config.docsLocalPath}/search-data.json`, `${config.docsLocalPath}/search-index.json`, done);
});

// Run all local documentation-related tasks.
gulp.task('docs-local', gulp.series('docs-local-build', 'docs-local-index'));

// Spins up a new environment for previewing changes to the docs.
// Watches for file changes.
gulp.task('docs-watch', () => {
  gulp.watch(`${config.docs.src.scssPath}/**/*.scss`, gulp.series('docs-scss'));
  gulp.watch(`${config.docs.src.jsPath}/**/*.js`, gulp.series('docs-js'));

  // TODO make optional with gulp-config setting?
  return childProcess.exec(
    'npx @11ty/eleventy --serve',
    {
      cwd: `${__dirname}/_docs`
    }
  ).stdout.on('data', (data) => {
    console.log(data);
  });
});

// Generates a new production-ready build of the docs.
gulp.task('gh-pages-build', gulp.series(
  'docs-default',
  () => {
    return childProcess.exec(
      'ELEVENTY_ENV=production npx @11ty/eleventy',
      {
        cwd: `${__dirname}/_docs`
      }
    ).stdout.on('data', (data) => {
      console.log(data);
    });
  }
));

// Generates a search index for production-ready documentation.
gulp.task('gh-pages-index', (done) => {
  buildDocsIndex(`${config.ghPagesPath}/search-data.json`, `${config.ghPagesPath}/search-index.json`, done);
});

// Runs all tasks necessary to generate production-ready (Github Pages)
// documentation.
gulp.task('gh-pages', gulp.series('gh-pages-build', 'gh-pages-index'));


//
// Local examples build
//

// Generates a custom local config file for the example files.
gulp.task('examples-config', (done) => {
  const localConfig = [
    '{',
    `"cloud_typography_key": "${config.examplesCSSKey}"`,
    '}'
  ].join('\n');

  fs.writeFileSync(`${config.examplesPath}/_data/config.json`, localConfig);
  done();
});

// Generates a new local build of example files.
gulp.task('examples-build', () => {
  return childProcess.exec(
    'npx @11ty/eleventy',
    {
      cwd: `${__dirname}/_examples`
    }
  ).stdout.on('data', (data) => {
    console.log(data);
  });
});

// All examples-related tasks.
gulp.task('examples', gulp.series('examples-config', 'examples-build'));


//
// Rerun tasks when files change.
//

gulp.task('watch', () => {
  gulp.watch(`${config.src.scssPath}/**/*.scss`, gulp.series('css'));
  gulp.watch(`${config.src.jsPath}/**/*.js`, gulp.series('js'));

  // TODO make optional with gulp-config setting?
  return childProcess.exec(
    'npx @11ty/eleventy --serve',
    {
      cwd: `${__dirname}/_examples`
    }
  ).stdout.on('data', (data) => {
    console.log(data);
  });
});


//
// Default task
//

gulp.task('default', gulp.series('components', 'css', 'js'));


//
// Initial setup task for the project
//

gulp.task('setup', gulp.series('default', 'docs-local', 'examples'));
