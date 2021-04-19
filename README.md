# Athena Framework

A front-end web framework for UCF websites and applications.  Developed and maintained by [UCF Web Communications](https://www.ucf.edu/brand/contact-us/).


## Quick Links

- [**Framework Documentation**](https://ucf.github.io/Athena-Framework/)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## Development

_These instructions are for installation and development of the project for core development of the Athena Framework. If you're looking for instructions for installing and using the framework in your project, [see our documentation](https://ucf.github.io/Athena-Framework/)._

### Installation requirements

- [Node.js 5.6.0+](https://nodejs.org/en/download/)
- [gulp-cli 2.0.0+](https://github.com/gulpjs/gulp/blob/v3.9.1/docs/getting-started.md#1-install-gulp-globally)

### Installation instructions

1. Clone the framework repository onto your machine:

   `git clone git@github.com:UCF/Athena-Framework.git`
2. Navigate to the root `Athena-Framework/` directory and install dependencies:

   `cd Athena-Framework/`

   `npm install`
3. (Optional) Create a copy of `gulp-config.template.json`, modify settings as needed for your local development environment ([available options are listed below](#gulp-config-options)), and save as `gulp-config.json`.
4. Run an initial full build of the framework, documentation, and examples:

   `gulp setup`

That's it! Once you've finished all those steps, the root directory of the repo should look like this:

```
 ├── _docs/
 ├── _examples/
 ├── dist/
 ├── docs/
 ├── docs-local/
 ├── examples/
 ├── node_modules/
 ├── src/
 └── ...
```

(We're excluding git-related files in this example, as well as your `gulp-config.json` and the top-level config files that should have been cloned down from the project on Github, such as `gulpfile.js` and `package.json`).

Here's a rundown of what's in each of these directories:

#### _docs/

Contains source files for the framework's documentation.  Athena's docs are built on [11ty](https://www.11ty.dev/), a Node-based static site generator, meaning that they consist primarily of Markdown files.

Documentation files get built to one of two locations: `docs-local/` or `docs/`.  `docs/` contains production-ready files intended to be served via Github Pages, and requires some unique options that we can't use for local testing.  Because of this, the documentation site will only get built to `docs/` when Athena's maintainers publish a new tag.  If you're working on updates to Athena's documentation, you'll always build changes to `docs-local/`.

#### _examples/

Contains source files for local example pages that you can use to test changes to the framework against.  Like the framework docs, these framework pages are built on 11ty (but they are totally separate 11ty instances.)

The examples site will get built to `examples/`.

#### dist/

Contains distributable framework files, including fallback fonts, minified CSS, and minified JS.

#### docs/

Contains production-ready documentation files to be served on Github Pages.  These files should never be edited directly or be included in commits to the repo--they'll only ever get changed by Athena's maintainers when a new release of the framework is published.

#### docs-local/

Contains your local copy of the built-out documentation site.

This directory is included in our `.gitignore`, so only changes to the source files (in `_docs/`) are tracked via git.

#### examples/

Contains built-out static site files for Athena's example pages, which are intended to be used for testing changes to the framework's core CSS and JS.

The `examples/` directory is included in our `.gitignore`, so the examples site will never be committed to the main repo--the site exists strictly for local testing.

#### node_modules/

Contains project dependencies installed via npm.

#### src/

Contains the primary source files for the framework, including font files, Sass, and JavaScript.

### Framework development workflow

The Athena Framework comes with an extensive set of gulp tasks, which we use as the primary means of automating repetitive tasks, such as minification, concatenation, and moving of files.

Your general workflow when working on the Athena Framework will look something like this:

1. Download + install the framework. Run `gulp setup` once before running watch tasks for the first time.
2. Run `gulp watch` to watch changes to Sass and JS files in `src/`, and automatically perform CSS and JS build steps whenever changes are made.  Changes to example pages are also watched with this task.
3. When making changes to the docs, run `gulp docs-watch` to watch changes to files in `_docs/` and rebuild your local copy of the documentation into `docs-local/`.

Gulp tasks are set up to save minified, distributable framework assets in `dist/`.  Whenever you're committing changes to the framework, **you should always include updated `dist/` files in your commits**.

However, documentation-related gulp tasks do not save distributable files to a tracked folder in the repo (`docs-local/` is intentionally included in the project's `.gitignore` file).  **Commits for documentation-related changes should only include changes to files in `_docs/`**; changes to production-ready documentation files (in `docs/`) are only made when new tags are released.

### Gulp config options

Some key settings used in the framework's gulpfile are configurable via your `gulp-config.json` file.  Available settings and their default values are listed below:

<table>
<thead>
<tr>
<th>Option</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>examplesCSSKey</code></td>
<td><code>""</code></td>
<td>If you'd like to enable premium webfonts on your local examples files, you can specify the URL of a Cloud.Typography CSS key here (e.g. <code>https://cloud.typography.com/000000/000000/css/fonts.css</code>).</td>
</tr>
</tbody>
</table>

### Gulp tasks

Our gulpfile contains a lot of functions and tasks--however, you likely won't (and probably shouldn't) use most of them directly.  Listed below are the tasks you'll need to know about when working on the framework:

<table>
<thead>
<tr>
<th>Task</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>gulp setup</code></td>
<td>Runs a full build of the project--specifically, this task runs <code>gulp default</code>, <code>gulp docs-local</code>, and <code>gulp examples</code>.</td>
</tr>
<tr>
<td><code>gulp default</code></td>
<td>The primary task for building out distributable framework assets.  Handles components (<code>gulp components</code>) and Sass and JS linting, compilation, and minification (<code>gulp css</code> and <code>gulp js</code>). Saves distributable files to <code>dist/</code>.</td>
</tr>
<tr>
<td><code>gulp watch</code></td>
<td>Watches changes to Sass files in <code>src/scss/</code> and JS files in <code>src/js/</code>, and runs <code>gulp css</code> or <code>gulp js</code>, respectively, when those files change. Also watches changes to files in <code>_examples/</code>.</td>
</tr>
<tr>
<td><code>gulp components</code></td>
<td>Copies over required files from third-party components out of <code>node_modules/</code> into designated places within the project.</td>
</tr>
<tr>
<td><code>gulp css</code></td>
<td>The primary CSS processing task for the framework.  Lints and compiles Sass files in <code>src/scss/</code>, and saves minified distributable CSS to <code>dist/css/</code>.  The framework's copyright header also gets prepended to the distributable CSS during this step.</td>
</tr>
<tr>
<td><code>gulp js</code></td>
<td>The primary JS processing task for the framework.  Lints (most) JS files in <code>src/js/</code>, and then concatenates + minifies JS files in <code>src/js/</code>, saving distributable JS to <code>dist/js/</code>.  The framework's copyright header also gets prepended to the distributable JS during this step.</td>
</t>
<tr>
<td><code>gulp docs-local</code></td>
<td>The primary task for building out minified CSS and JS for the framework documentation, and for building a new local copy of the documentation site. The static documentation site will be built from <code>_docs/</code> and saved to <code>docs-local/</code>.
<br><br>
Due to the way our documentation project is set up, we create minified CSS and JS within <code>_docs/</code> (in <code>_docs/static/</code>) <b>before</b> building the local site, <b>not during</b> the 11ty build process.  This means that, whenever changes are made to the documentation's styles or scripts, the full <code>gulp docs-local</code> task should always be run, so that the generated minified files get copied to your local <code>docs-local/</code> directory for you to view and test the changes.</td>
</tr>
<tr>
<td><code>gulp docs-watch</code></td>
<td>Watches changes to all files in <code>_docs/</code> (except <code>_docs/static/</code>) and runs <code>gulp docs-local</code>) when changes are saved.</td>
</tr>
<td><code>gulp examples</code></td>
<td>The primary task for building a local set of example files to test the framework against. Files from <code>_examples/</code> will be built out as a static site and saved to <code>examples/</code>.</td>
</tr>
</tbody>
</table>


## Contributing

We highly encourage feedback and suggestions from the UCF web development community. If you'd like to submit a feature request or known bug, check out our [contributing guidelines](https://github.com/UCF/Athena-Framework/blob/master/CONTRIBUTING.md).

## License

The Athena Framework is released under the [MIT License](https://github.com/UCF/Athena-Framework/blob/master/LICENSE). Included third-party assets (such as webfonts and JavaScript libraries) may be released under separate licenses.

Documentation for the Athena Framework is released as a derivative of Bootstrap 4 alpha.6's documentation under [Creative Commons](https://github.com/UCF/Athena-Framework/blob/master/docs/LICENSE).
