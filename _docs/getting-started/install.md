---
layout: docs-getting-started
title: Installation
description: Download Athena's compiled CSS and JavaScript, source code, or include it with your favorite package manager.
group: getting-started
---

In most cases, installing the Athena Framework is as simple as adding the CSS, JS, and font files to your project.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Installing Minified Files

After <a href="{{ "/getting-started/download/" | prepend: site.baseurl }}">downloading and extracting the Athena-Framework,</a> add the CSS, JS and font files from the `/dist/` directory to somewhere within your project. You'll need to maintain the directory structure of the `/dist/` folder's contents, since fallback font includes are imported using a relative, fixed path; see the [Included Fonts](#included-fallback-fonts) section for more information.

For more information on embedding Athena's styles and scripts into your project's templates, or for instructions on installing CDN assets, see the [Quick Start]({{ "/getting-started/quickstart" | prepend: site.baseurl }}) instructions.

___

## Using Source Files

Athena's source files are available in the `/src/` folder. We recommend using Athena's source files instead of pre-minified files for projects that need to extend or build off of Athena, and/or in cases where you wish to take advantage of Athena's predefined variables and mixins.

See the [Build Tools instructions]({{ "/getting-started/build-tools/" | prepend: site.baseurl }}) for more information on how to utilize these files in your workflow.

___

## Adding to Existing Project Using Bootstrap

Athena is a complete replacement for Bootstrap. If you are already using Bootstrap on an existing project and want to use Athena instead, you should remove Bootstrap's CSS and JavaScript completely. Athena is designed to run as a completely standalone framework.

If you're upgrading from Bootstrap 3, be sure to check out the [Migration Guide]({{ "/migration" | prepend: site.baseurl }}) for the full list of differences between Bootstrap and Athena.

<pre><code><strike>&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"&gt;</strike>
<span class="highlight-code">&lt;link rel="stylesheet" href="{{ site.cdn }}v{{ site.data.package.version }}/css/framework.min.css"&gt;</span>

&hellip;

&lt;script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.slim.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"&gt;&lt;/script&gt;
<strike>&lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"&gt;</strike>
<span class="highlight-code">&lt;script type="text/javascript" src="{{ site.cdn }}v{{ site.data.package.version }}/js/framework.min.js"&gt;&lt;/script&gt;</span>
</code></pre>

___

## Webfonts &amp; Configuration

Athena is built to utilize premium fonts provided by the <a href="http://www.typography.com/cloud/welcome/">Cloud.typography service</a> by default, with webfont fallbacks (available in the `/dist/fonts/` directory). If neither Cloud.typography or webfont fallbacks are utilized, Athena will default to use appropriate system fonts.

### Included Fallback Fonts

To utilize fallback webfonts, copy the `/fonts/` directory (from the `/dist/fonts/` in the framework's files) to the same folder in your project that you added the framework's CSS and JS files to. The framework's CSS is built to include webfonts from that directory. Alternatively, you can pick a custom location for the fallback fonts directory within your project, as long as you modify the `$athena-font-path` Sass variable and recompile.

<pre><code> ├── css/
<strong> ├── fonts/
 │   ├── tulia/
 │   ├── ucf-condensed-alt/
 │   └── ucf-sans-serif-alt/</strong>
 └── js/
</code></pre>

### Cloud.typography Premium Font Configuration

While Athena provides fallback webfonts out-of-the-box, the preferred font families for Athena are only available via the <a href="http://www.typography.com/cloud/welcome/">Cloud.typography service</a>. Athena users are responsible for creating their own Cloud.typography accounts and maintaining their subscriptions to the service.

The sans-serif font family used in Athena is **Gotham**.

{% callout danger %}
#### Gotham Licensing for the Web
Any existing _print_ license for Gotham usage, whether purchased via the [UCF Computer Store](https://cstore.ucf.edu/gotham/) or separately, [does not cover usage of webfonts](https://www.typography.com/faq/question.php?faqID=15).

To use Gotham on the web, _you must register for the Cloud.typography service._

**Do not attempt to self-host Gotham font files** that are not provided by Cloud.typography for production font projects.
{% endcallout %}

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

{% callout info %}
<strong>*Note:</strong> Avoid adding webfonts that aren't needed for your project; as the number of fonts in a project increases, the average load time for the font project increases.
{% endcallout %}
