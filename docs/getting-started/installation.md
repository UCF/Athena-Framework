---
layout: docs
title: Getting Started
subtitle: An overview of Athena, including how to download and use it, some basic templates and examples, and more.
---

# Installation

<hr>

## Minified files
Installing the Athena Framework is as simple as adding the CSS and JS files to your project.

After <a href="{{ "/getting-started/download/" | prepend: site.baseurl }}">downloading and extracting the Athena-Framework,</a> add the CSS, JS and Font files to your project's static assets folder.

Add Athena's CSS in the <code>&lt;head&gt;</code> of your project, before any additional CSS files:

<pre><code>&lt;link rel="stylesheet" href="/css/framework.min.css"&gt;
</code></pre>

Athena's Javascript should be added before the closing <code>&lt;/body&gt;</code> tag. <a href="https://jquery.com/">jQuery</a> and <a href="http://tether.io/">Tether</a> are required dependencies for Athena, so be sure to include those before the Athena JS.

<pre><code>&lt;script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.slim.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="/js/framework.min.js"&gt;&lt;/script&gt;
</code></pre>

<hr>
## CDN Coming Soon
**Looking for a CDN link?** The Athena Framework will be available through a CDN soon.
<hr>

## Source Files
### NPM
If you are using NPM with your project, you can add Athena as a dependency by running <code>npm install athena-framework --save</code> in the root of your project, or by adding Athena it to your package.json file and running <code>npm install</code>.

**package.json**
<pre><code>{
  "athena-framework": "github:UCF/Athena-Framework"
}</code></pre>