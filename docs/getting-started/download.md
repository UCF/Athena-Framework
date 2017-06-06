---
layout: docs
title: Download
description: Download Athena's compiled CSS and JavaScript, source code, or include it with your favorite package manager.
group: getting-started
---

The Athena Framework is available to download in a few ways. The framework is [hosted on Github](https://github.com/{{ site.data.package.repository.url }}) as an open-source project under the MIT license. Additionally, a zipped archive of the latest release is available below.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Download Options

<h3 class="mt-3" id="direct-download">Direct Download (.zip)</h3>
<a href="https://github.com/{{ site.data.package.repository.url }}/archive/v{{ site.data.package.version }}.zip">Download Athena Framework <span class="badge badge-secondary">v{{ site.data.package.version }}</span></a>

<h3 class="mt-3" id="cdn">CDN</h3>
{% callout info %}
<strong>CDN Coming Soon:</strong> Looking for a CDN link? The Athena Framework will be available through a CDN soon.
{% endcallout %}

<h3 class="mt-3" id="github">Github</h3>
You can also clone a copy of the git project to your computer locally:

<pre><code>git clone <a href="https://github.com/{{ site.data.package.repository.url }}/">git@github.com:{{ site.data.package.repository.url }}.git</a></code></pre>

<h3 class="mt-3" id="package-managers">Package Managers</h3>

<h4 class="mt-2" id="npm">npm</h4>

`npm install --save ucf-athena-framework`

<h4 class="mt-3" id="bower">bower</h4>
`bower install --save ucf-athena-framework`

___

## What's Included
The project folder will contain minified files (`/dist/`) as well as source code (`/src/`).

Projects that need to extend Athena and/or reference Athena's Sass variables should utilize the source code files in `/src/`. Projects that just need to include Athena without modifications can use the already-minified files in `/dist/`. See the <a href="{{ "/getting-started/install/" | prepend: site.baseurl }}">Installation instructions</a> for more details.

### Minified, pre-compiled assets
The framework download includes ready-to-use CSS, JavaScript, and webfont files. These can be found in the `/dist/` folder.

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

### Source files

Source Sass files and other full, non-minified, files can be found in the `/src/` folder.

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

