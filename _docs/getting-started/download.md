---
layout: docs-getting-started
title: Download
description: Download Athena's compiled CSS and JavaScript, source code, or include it with your favorite package manager.
group: getting-started
---

For [quick usage]({{ site.baseurl }}{% link getting-started/quick-start.md %}), the Athena Framework is hosted on UCF's CDN.  For those that want to utilize Athena's Sass variables and mixins directly, Athena can also be downloaded from [Github](https://github.com/{{ site.data.package.repository.url }}), or included in your project using npm or Bower.


## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


## Download Options

### Direct Download (.zip)
<a class="btn btn-outline-primary" href="https://github.com/{{ site.data.package.repository.url }}/archive/v{{ site.data.package.version }}.zip">
    <span class="fa fa-file-archive-o"></span> Download Athena Framework <span class="small muted">v{{ site.data.package.version }}</span>
</a>

### CDN
Skip the download and use CDN-hosted files to deliver Athena's compiled CSS and JS to your project.

{% highlight html %}
<link rel="stylesheet" href="{{ site.cdn }}v{{ site.data.package.version }}/css/framework.min.css">
<script src="{{ site.cdn }}v{{ site.data.package.version }}/js/framework.min.js"></script>
{% endhighlight %}

### Github
You can also clone a copy of the git project to your computer locally:

<pre><code>git clone <a href="https://github.com/{{ site.data.package.repository.url }}/">git@github.com:{{ site.data.package.repository.url }}.git</a></code></pre>

### npm
`npm install --save ucf-athena-framework`

### Bower
`bower install --save ucf-athena-framework`


## What's Included
The project folder will contain minified files (`/dist/`) as well as source code (`/src/`):

### Minified, pre-compiled assets
The framework download includes ready-to-use CSS, JavaScript, and webfont files in the `/dist/` folder. Projects that just need to include Athena without modifications can use the already-minified files in this folder.

<pre><code>├── dist/
   ├── css/
   │   └── framework.min.css
   ├── fonts/
   │   ├── tulia/…
   │   ├── ucf-condensed-alt/…
   │   └── ucf-sans-serif-alt/…
   └── js/
       └── framework.min.js
</code></pre>

{% callout warning %}
#### Relative font paths in `/dist/`
Keep in mind that Athena's minified CSS references font files relative to the folder structure in `/dist/`--meaning that, in projects using these files, this existing folder structure _must_ be maintained for fonts to load properly.

If you cannot store Athena's fallback fonts in a folder called `/fonts/` that exists one directory up from the minified framework CSS, you must use Athena's source Sass files, modify the `$athena-font-path` Sass variable, and minify the framework manually.
{% endcallout %}

### Source files

Source Sass files and other full, non-minified, files can be found in the `/src/` folder. Projects that need to extend Athena and/or reference Athena's Sass variables should utilize the source code files in this folder. For more information on working with these files directly, see our [build tools notes]({{ site.baseurl }}{% link getting-started/build-tools.md %}).

<pre><code>├── src/
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
