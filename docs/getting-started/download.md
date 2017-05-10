---
layout: docs
title: Getting Started
subtitle: Installation instructions and a basic setup guide for Athena.
---

## Download
The Athena Framework is available to download in a few ways. We host our code on github, so it is available under the TODO license. A zipped archive of the latest release is available below.

### Latest Release
<a href="https://github.com/UCF/Athena-Framework/archive/v1.0.0-alpha.zip">Download Athena Framework v1.0.0-alpha</a> <span class="badge badge-primary">alpha</span>

### Github
You can also clone a copy of the git project to your local computer:

<pre><code>git clone <a href="https://github.com/UCF/Athena-Framework/">git@github.com:UCF/Athena-Framework.git</a></code></pre>

___

## Contents
The project folder will contain minified files as well as source code (Athena is open-source).

Projects that need to extend Athena and/or reference Athena's Sass variables should utilize the source code files in /src/. Projects that just need to include Athena without modifications can use the already-minified files in /dist/. See the <a href="{{ "/getting-started/install/" | prepend: site.baseurl }}">Installation instructions</a> for more details.

### Minified, pre-compiled, assets
The download includes ready-to-use CSS, Javascript, and webfont files. These can be found in the <code>/dist/</code> folder.

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

Source Sass files and other full, non-minified, files can be found in the <code>/src/</code> folder.

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

___

### CDN Coming Soon
**Looking for a CDN link?** The Athena Framework will be available through a CDN soon.