---
layout: docs
title: Introduction
description: Get started with Bootstrap using the Bootstrap CDN and a template starter page.
group: getting-started
redirect_from: "/getting-started/"
---

The Athena Framework is a front-end framework built and used by the <a href="//brand.ucf.edu">UCF Marketing Team</a> to create responsive websites and web applications for <a href="//ucf.edu">UCF</a>. Based on <a href="//v4-alpha.getbootstrap.com">Bootstrap 4,</a> the framework includes most of the functionality developers and content editors have come to expect of Bootstrap. In addition, base Bootstrap styles have been updated to conform to the UCF Brand by default, with additional variants for flexibility.

___

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## A Note about Bootstrap

Athena is a complete replacement for <a class="alert-link" href="https://getbootstrap.com/">Bootstrap</a>.  If you are already using Bootstrap on an existing project and want to use Athena instead, you should remove Bootstrap's CSS and Javascript completely.  Athena is designed to run as a completely standalone framework.

<!-- Read more about the <a href="{{ "/getting-started/differences/" | prepend: site.baseurl }}">differences between Athena and Bootstrap here.</a> -->
___

## Quick Start

To quickly add all of Athena's features to your project, add the following to your pages:

### Add stylesheets

Add your Cloud.typography CSS key and the Athena stylesheet before all other stylesheets. The Cloud.typography CSS key should go immediately before the Athena stylesheet.

{% highlight html %}
<link rel="stylesheet" type="text/css" href="https://cloud.typography.com/xxxxxx/xxxxxx/css/fonts.css">
<link rel="stylesheet" href="/css/framework.min.css">
{% endhighlight %}

___

**Note: Cloud.typography fonts are optional.** If Cloud.typography is not utilized, fallback fonts provided by Athena will be used. See the <a href="{{ "/getting-started/install/" | prepend: site.baseurl }}#webfonts--configuration">webfont configuration</a> section for information on setting up a Cloud.typography project for use with Athena.

___

### Add JavaScript

Add our JavaScript plugins, jQuery, and Tether near the end of your pages, right before the closing `</body>` tag. Be sure to place jQuery and Tether first, as our code depends on them. While we use jQuery's slim build in our docs, the full version is also supported.

{% highlight html %}
<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="/css/framework.min.css"></script>
{% endhighlight %}

___

## CDN Coming Soon
**Looking for a CDN link?** The Athena Framework will be available through a CDN soon.
