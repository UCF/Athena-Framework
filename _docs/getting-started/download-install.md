---
layout: docs
title: Download & install
description: Download Athena's compiled CSS and JavaScript, source code, or include it with your favorite package manager.
tags: getting-started
---

For [quick usage]({{ '/getting-started/quick-start' | url }}), the Athena Framework is hosted on UCF's CDN.  For those that want to utilize Athena's Sass variables and mixins directly, Athena can also be downloaded from [Github](https://github.com/{{ package.repository.url }}), or included in your project using npm or Bower.


## Contents

{:toc}


## Download Options

### Direct Download (.zip)
<a class="btn btn-outline-primary" href="https://github.com/{{ package.repository.url }}/archive/v{{ package.version }}.zip">
    <span class="fa fa-file-archive-o"></span> Download Athena Framework <span class="small muted">v{{ package.version }}</span>
</a>

### CDN
Skip the download and use CDN-hosted files to deliver Athena's compiled CSS and JS to your project.

{% highlight 'html' %}
<link rel="stylesheet" href="{{ site.cdn }}v{{ package.version }}/css/framework.min.css">
<script src="{{ site.cdn }}v{{ package.version }}/js/framework.min.js"></script>
{% endhighlight %}

### Github
You can also clone a copy of the git project to your computer locally:

<pre><code>git clone <a href="https://github.com/{{ package.repository.url }}/">git@github.com:{{ package.repository.url }}.git</a></code></pre>

### npm
`npm install --save ucf-athena-framework`

### Bower
`bower install --save ucf-athena-framework`


## What's Included
The project folder will contain minified files (`/dist/`) as well as source code (`/src/`):

### Minified, pre-compiled assets
The framework download includes ready-to-use CSS, JavaScript, and webfont files in the `/dist/` folder. Projects that just need to include Athena without modifications can use the already-minified files in this folder; see the [Installing Minified Files section](#installing-minified-files) for more information.

<pre><code class="nohighlight">├── dist/
   ├── css/
   │   └── framework.min.css
   ├── fonts/
   │   ├── tulia/…
   │   ├── ucf-condensed-alt/…
   │   └── ucf-sans-serif-alt/…
   └── js/
       └── framework.min.js
</code></pre>

### Source files

Source Sass files and other full, non-minified, files can be found in the `/src/` folder. Projects that need to extend Athena and/or reference Athena's Sass variables should utilize the source code files in this folder. For more information on working with these files directly, see our [build tools notes]({{ '/getting-started/build-tools' | url }}).

<pre><code class="nohighlight">├── src/
   ├── fonts/…
   ├── js/…
   └── scss/
   │   ├── …
   │   ├── _alert.scss
   │   ├── _badge.scss
   │   ├── _breadcrumb.scss
   │   ├── _buttons.scss
   │   ├── _card.scss
   │   ├── …
   │   └── framework.scss
</code></pre>


## Installation

### Installing Minified Files

After downloading and extracting the Athena-Framework, add the CSS, JS and font files from the `/dist/` directory to somewhere within your project. **You'll need to maintain the directory structure of the `/dist/` folder's contents**, since fallback font includes are imported using a relative, fixed path. See the [Included Fonts](#included-fallback-fonts) section for more information.

For more information on embedding Athena's styles and scripts into your project's templates, or for instructions on installing CDN assets, see the [Quick Start]({{ '/getting-started/quick-start' | url }}) instructions.

{% callout 'warning' %}
#### Relative font paths in `/dist/`
Keep in mind that Athena's minified CSS references font files relative to the folder structure in `/dist/`--meaning that, in projects using these files, this existing folder structure _must_ be maintained for fonts to load properly.

If you cannot store Athena's fallback fonts in a folder called `/fonts/` that exists one directory up from the minified framework CSS, you must [use Athena's source Sass files](#source-files), modify the `$athena-font-path` Sass variable, and minify the framework manually.
{% endcallout %}

### Adding to Existing Project Using Bootstrap

Athena is a complete replacement for Bootstrap. If you are already using Bootstrap on an existing project and want to use Athena instead, you should remove Bootstrap's CSS and JavaScript completely. Athena is designed to run as a completely standalone framework.

If you're upgrading from Bootstrap 3, be sure to check out the [Migration Guide]({{ migration | url }}) for the full list of differences between Bootstrap and Athena.

<pre><code><strike>&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"&gt;</strike>
<span class="highlight-code">&lt;link rel="stylesheet" href="{{ site.cdn }}v{{ package.version }}/css/framework.min.css"&gt;</span>

&hellip;

{{ site.jquery_script | escape }}
{{ site.tether_script | escape }}
<strike>&lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"&gt;</strike>
<span class="highlight-code">&lt;script type="text/javascript" src="{{ site.cdn }}v{{ package.version }}/js/framework.min.js"&gt;&lt;/script&gt;</span>
</code></pre>


## Webfont Configuration

Athena is built to utilize premium fonts provided by the [Cloud.typography service](http://www.typography.com/cloud/welcome/) by default, with webfont fallbacks (available in the `/dist/fonts/` directory). Using premium fonts with Athena is preferred, but not required.

### Included Fallback Fonts

If you're loading Athena from UCF's CDN, fallback fonts will be used without any additional steps.

To utilize fallback webfonts in a manual installation, copy the `/fonts/` directory (from the `/dist/fonts/` in the framework's files) to the same folder in your project that you added the framework's CSS and JS files to. The framework's CSS is built to include webfonts from that directory.

<pre><code class="nohighlight"> ├── css/
<strong> ├── fonts/
 │   ├── tulia/
 │   ├── ucf-condensed-alt/
 │   └── ucf-sans-serif-alt/</strong>
 └── js/
</code></pre>

Alternatively, you can pick a custom location for the fallback fonts directory within your project, as long as you modify the `$athena-font-path` Sass variable and recompile.

### Cloud.typography Premium Font Configuration

While Athena provides fallback webfonts out-of-the-box, the preferred font families for Athena are only available via the [Cloud.typography service](http://www.typography.com/cloud/welcome/). Athena Framework users are responsible for creating their own Cloud.typography accounts and maintaining their subscriptions to the service.

#### Base Configuration

For base support with Athena, your Cloud.typography project should be configured to include the following fonts/weights:

* Gotham ScreenSmart
  * Book
  * Book Italic
  * Bold
  * Bold Italic

{% callout 'danger' %}
#### Gotham Licensing for the Web
Any existing _print_ license for Gotham usage, whether purchased via the [UCF Computer Store](https://cstore.ucf.edu/gotham/) or separately, [does not cover usage of webfonts](https://www.typography.com/faq/question.php?faqID=15).

To use Gotham on the web, _you must register for the Cloud.typography service._

**Do not attempt to self-host Gotham font files** that are not provided by Cloud.typography for production font projects.
{% endcallout %}

#### Font Family Extras

To take advantage of the [font family overrides available with Athena]({{ '/utilities/typography' | url }}#font-family), the following fonts/weights can also be added to your Cloud.typography project *as needed&#42;*:

* Chronicle Text Grade 3 (for `.font-serif` support)
  * Roman
  * Italic
  * Bold
  * Bold Italic
* Archer (for `.font-slab-serif` support)
  * Book
  * Book Italic
  * Bold
  * Bold Italic
* Knockout Regular (for `.font-condensed` support)
  * Knockout 49, Lightweight

Because Athena does not support older browsers, enabling Legacy Support is not necessary and is not recommended.

More weights can be added as needed per-project, however, we don't recommend usage of most "thin" or "extra light" weights due to readability concerns.

{% callout 'info' %}
<strong>*Note:</strong> Avoid adding webfonts that aren't needed for your project; as the number of fonts in a project increases, the average load time for the font project increases.
{% endcallout %}
