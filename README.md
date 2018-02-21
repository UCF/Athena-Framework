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

- [Node.js](https://nodejs.org/en/download/)
- [gulp-cli](https://github.com/gulpjs/gulp/blob/v3.9.1/docs/getting-started.md#1-install-gulp-globally)
- [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [Bundler](http://bundler.io/#getting-started)

### Installation instructions

1. Clone the framework repository onto your machine:

   `git clone git@github.com:UCF/Athena-Framework.git`
2. Navigate to the root `Athena-Framework/` directory and install dependencies:

   `cd Athena-Framework/`

   `npm install`
3. Create a copy of `gulp-config.template.json`, modify settings as needed for your local development environment, and save as `gulp-config.json`.
4. Run an initial full build of the framework, which will fetch and place freshly-installed components, then build new copies of the framework's CSS and JS:

   `gulp default`
5. Navigate to the `_docs/` directory, install dependencies for the framework docs, and build a local copy of the docs:

   `cd docs_/`

   `bundle install`

   `gulp docs-local`

### Framework development workflow

The Athena Framework comes with an extensive set of gulp tasks, which we use as the primary means of automating repetitive tasks, such as minification, concatenation, and moving of files.

Your general workflow when working on the Athena Framework will look something like this:

1. Download + install the framework. Run `gulp default` and `gulp docs-local` at least once before running watch tasks for the first time.
2. Run `gulp watch` to watch changes to Sass and JS files in `src/`, and automatically perform CSS and JS build steps whenever changes are made.
3. When making changes to the docs, run `gulp docs-local` to watch changes to files in `_docs/` and rebuild your local copy of the documentation into `_site/`.

Gulp tasks are set up to save minified, distributable framework assets in `dist/`.  Whenever you're committing changes to the framework, **you should always include updated `dist/` files in your commits**.

However, documentation-related gulp tasks do not save distributable files to a tracked folder in the repo (`_site/` is intentionally included in the project's `.gitignore` file).  **Commits for documentation-related changes should only include changes to files in `_docs/`**; changes to production-ready documentation files (in `docs/`) are only made when new tags are released.

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
<td><code>sync</code></td>
<td><code>false</code></td>
<td>Whether or not BrowserSync should be initialized when <code>gulp watch</code> is run.

If you'd like to automatically spin up a virtual test server when <code>gulp watch</code> is run and auto-refresh your browser when changes are made, set this to <code>true</code>.</td>
</tr>
<tr>
<td><code>syncOptions</code></td>
<td><code>{}</code></td>
<td>Options to pass to BrowserSync when it is initialized during <code>gulp watch</code>. Will have no effect if <code>sync</code> is <code>false</code>.

See [BrowserSync's documentation](https://browsersync.io/docs/options) for available options. Function-based options are not supported.
</td>
</tr>
<tr>
<td><code>docSync</code></td>
<td><code>false</code></td>
<td>Whether or not BrowserSync should be initialized when <code>gulp docs-watch</code> is run.

If you'd like to automatically spin up a virtual test server when <code>gulp docs-watch</code> is run, set this to <code>true</code>.</td>
</tr>
<tr>
<td><code>docSyncOptions</code></td>
<td><code>{}</code></td>
<td>Options to pass to BrowserSync when it is initialized during <code>gulp docs-watch</code>. Will have no effect if <code>docSync</code> is <code>false</code>.

See [BrowserSync's documentation](https://browsersync.io/docs/options) for available options. Function-based options are not supported.</td>
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
<td><code>gulp default</code></td>
<td>The primary task for building out distributable framework assets.  Handles components (<code>gulp components</code>) and Sass and JS linting, compilation, and minification (<code>gulp css</code> and <code>gulp js</code>). Saves distributable files to <code>dist/</code>.</td>
</tr>
<tr>
<td><code>gulp watch</code></td>
<td>Watches changes to Sass files in <code>src/scss/</code> and JS files in <code>src/js/</code>, and runs <code>gulp css</code> or <code>gulp js</code>, respectively, when those files change.</td>
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
<td>The primary JS processing task for the framework.  Lints JS files in <code>src/js/</code>, processes and saves out Bootstrap's source JS files into <code>src/js/bootstrap/</code>, and then concatenates + minifies JS files in <code>src/js/</code>, saving distributable JS to <code>dist/js/</code>.  The framework's copyright header also gets prepended to the distributable JS during this step.</td>
</t>
<tr>
<td><code>gulp docs-local</code></td>
<td>The primary task for building out minified CSS and JS for the framework documentation, and for building a new local copy of the documentation site.
<br><br>
Due to the way our documentation project is set up, and how Jekyll performs new site builds, we actually create minified CSS and JS within <code>_docs/</code> (in <code>_docs/static/</code>) <b>before</b> building the local site, <b>not during</b> the <code>jekyll build</code> process.  This means that, whenever changes are made to the documentation's styles or scripts, the full <code>gulp docs-local</code> task should always be run, so that the generated minified files get copied to your local <code>_site/</code> directory for you to view and test the changes.</td>
</tr>
<tr>
<td><code>gulp docs-watch</code></td>
<td>Watches changes to all files in <code>_docs/</code> (except <code>_docs/static/</code>) and runs <code>gulp docs-local</code>) when changes are saved.</td>
</tr>
</tbody>
</table>


## Contributing

We highly encourage feedback and suggestions from the UCF web development community. If you'd like to submit a feature request or known bug, check out our [contributing guidelines](https://github.com/UCF/Athena-Framework/blob/master/CONTRIBUTING.md).

## License

The Athena Framework is released under the [MIT License](https://github.com/UCF/Athena-Framework/blob/master/LICENSE). Included third-party assets (such as webfonts and JavaScript libraries) may be released under separate licenses.

Documentation for the Athena Framework is released as a derivative of Bootstrap 4 alpha.6's documentation under [Creative Commons](https://github.com/UCF/Athena-Framework/blob/master/docs/LICENSE).
