---
layout: docs
title: Getting Started
subtitle: Installation instructions and a basic setup guide for Athena.
---

## A Note about Bootstrap

Athena is a complete replacement for <a class="alert-link" href="https://getbootstrap.com/">Bootstrap</a>.  If you are already using Bootstrap on an existing project and want to use Athena instead, you should remove Bootstrap's CSS and Javascript completely.  Athena is designed to run as a completely standalone framework.

___

## Quick Start

To quickly add all of Athena's features to your project, add the following to your pages:

### Add stylesheets

Add your Cloud.typography CSS key and the Athena stylesheet before all other stylesheets. The Cloud.typography CSS key should go immediately before the Athena stylesheet.

See the webfont configuration section for information on setting up a Cloud.typography project for use with Athena.

<pre><code>&lt;link rel="stylesheet" type="text/css" href="https://cloud.typography.com/xxxxxx/xxxxxx/css/fonts.css"&gt;
&lt;link rel="stylesheet" href="/css/framework.min.css"&gt;</code></pre>

### Add JavaScript

Add our JavaScript plugins, jQuery, and Tether near the end of your pages, right before the closing `</body>` tag. Be sure to place jQuery and Tether first, as our code depends on them. While we use jQuery's slim build in our docs, the full version is also supported.

<pre><code>&lt;script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"&gt;&lt;/script&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"&gt;&lt;/script&gt;
&lt;script src="/css/framework.min.css"&gt;&lt;/script&gt;</code></pre>

___

## CDN Coming Soon
**Looking for a CDN link?** The Athena Framework will be available through a CDN soon.