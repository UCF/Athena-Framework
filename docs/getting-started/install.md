---
layout: docs
title: Getting Started
subtitle: Installation instructions and a basic setup guide for Athena.
---

## Installation

Installing the Athena Framework is as simple as adding the CSS and JS files to your project.

___

## Minified Files

After <a href="{{ "/getting-started/download/" | prepend: site.baseurl }}">downloading and extracting the Athena-Framework,</a> add the CSS, JS and Font files from the `/dist/` directory to your project's static assets folder.

Include Athena's CSS in the <code>&lt;head&gt;</code> of your project, before any additional CSS files:

<pre><code>&lt;link rel="stylesheet" href="/css/framework.min.css"&gt;
</code></pre>

Athena's Javascript should be added before the closing <code>&lt;/body&gt;</code> tag. <a href="https://jquery.com/">jQuery</a> and <a href="http://tether.io/">Tether</a> are required dependencies for Athena, so be sure to include those before the Athena JS.

<pre><code>&lt;script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.slim.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="/js/framework.min.js"&gt;&lt;/script&gt;
</code></pre>

___

## Source Files

Athena's source files are available in the `/src/` folder

### NPM
If you are using <a href="https://www.npmjs.com/">NPM</a> with your project, you can add Athena as a dependency by running `npm install athena-framework --save` in the root of your project, or by adding Athena it to your package.json file and running `npm install`. Make sure you also include jQuery and Tether.

**package.json**
<pre><code>{
  &hellip;
  "dependencies": {
    "jquery": "^3.2.1",
    "tether": "^1.4.0"
    "athena-framework": "github:UCF/Athena-Framework"
  }
}</code></pre>

### Bower
If you are using the <a href="https://bower.io/">Bower</a> package manager, you can add Athena as a depency by running `bower install athena-framework --save` or by adding Athena to you `bower.json` file and running `bower install`. As with NPM, ensure you also include jQuery and Tether.

**bower.json**
<pre><code>{
  &hellip;
  "dependencies": {
    "jquery": ">=1.9.1",
    "tether": "^1.4.0",
    "git://github.com/UCF/Athena-Framework": "v1.0.0-alpha"
  }
}</code></pre>

___

## Adding to Existing Project Using Bootstrap

Athena is a complete replacement for Bootstrap. If you are already using Bootstrap on an existing project and want to use Athena instead, you should remove Bootstrap’s CSS and Javascript completely. Athena is designed to run as a completely standalone framework.

<pre><code><strike>&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"&gt;</strike>
<span class="highlight">&lt;link rel="stylesheet" href="/css/framework.min.css"&gt;</span>

&hellip;

&lt;script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.slim.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"&gt;&lt;/script&gt;
<strike>&lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"&gt;</strike>
<span class="highlight">&lt;script type="text/javascript" src="/js/framework.min.js"&gt;&lt;/script&gt;</span>
</code></pre>

___

## Webfonts &amp; Configuration

Athena is built to utilize premium fonts provided by the <a href="http://www.typography.com/cloud/welcome/">Cloud.typography service</a> by default, with webfont fallbacks (available in the `/src/fonts/` directory). If neither Cloud.Typography or webfont fallbacks are utilized, Athena will default to use appropriate system fonts.

### Included Fonts

To utilize fallback webfonts, copy the `/fonts/` directory (from the `/src/fonts/` in the project files) to the same `/src/` folder you added the CSS and JS files. The CSS is built to include webfonts from that directory.

<pre><code> ├── css/
<strong> ├── fonts/
 │   ├── tulia/
 │   ├── ucf-condensed-alt/
 │   └── ucf-sans-serif-alt/</strong>
 └── js/
</code></pre>

### Cloud.Typography Premium Font Configuration

The sans-serif font family used in Athena is **Gotham**. Gotham can be installed in your project via the <a href="http://www.typography.com/cloud/welcome/">Cloud.typography service.</a>

#### Gotham Licensing for the Web

Any existing print license for Gotham usage, whether purchased via the <a class="alert-link" href="https://cstore.ucf.edu/gotham/">UCF Computer Store</a> or separately, <a class="alert-link" href="https://www.typography.com/faq/question.php?faqID=15" target="_blank">does not cover usage of webfonts</a>.  To use Gotham on the web, ***you must register for the Cloud.typography service.***  Do not attempt to self-host Gotham font files online.

#### Base Configuration

For base support with Athena, your Cloud.typography project should be configured to include the following fonts/weights:

* Gotham ScreenSmart
  * Book
  * Book Italic
  * Bold
  * Bold Italic

#### Font Family Extras

To take advantage of the font family overrides available with Athena, the following fonts/weights can also be added to your Cloud.typography project *as needed&#42;*:

* Chronicle Text Grade 3 (for .font-serif support)
  * Roman
  * Italic
  * Bold
  * Bold Italic
* Archer (for .font-slab-serif support)
  * Book
  * Book Italic
  * Bold
  * Bold Italic
* Knockout Regular (for .font-condensed support)
  * Knockout 49, Lightweight

Because Athena does not support older browsers, enabling Legacy Support is not necessary and is not recommended.

More weights can be added as needed per-project, however, we don't recommend usage of most "thin" or "extra light" weights due to readability concerns.

*&#42;Avoid adding webfonts that aren't needed for your project; as the number of fonts in a project increases, the average load time for the font project increases.*

___


## CDN Coming Soon
**Looking for a CDN link?** The Athena Framework will be available through a CDN soon.
