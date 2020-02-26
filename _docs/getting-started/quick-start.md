---
layout: docs
title: Quick start
description: Get started with Athena using these quick setup steps.
tags: getting-started
date: 2020-01-01 # for ordering purposes only
---

It's easy to get started with the Athena Framework. The steps below outline the minimum requirements for getting Athena set up using CDN assets.

{% callout 'info' %}

## A Note about Bootstrap

Athena is a complete replacement for <a href="https://getbootstrap.com/">Bootstrap</a>.  If you are already using Bootstrap on an existing project and want to use Athena instead, you should [remove Bootstrap's CSS and JavaScript completely]({{ '/getting-started/download-install' | url }}#adding-to-existing-project-using-bootstrap).  Athena is designed to run as a completely standalone framework.

Read more about the <a href="{{ migration | url }}">differences between Athena and Bootstrap here.</a>

{% endcallout %}


## Contents

{:toc}


## 1. Add required document metadata

### HTML5 doctype

Athena requires the use of the HTML5 doctype. Make sure you've included it at the very top of your document.

{% highlight 'html' %}
<!DOCTYPE html>
<html lang="en">
  ...
</html>
{% endhighlight %}

### Responsive meta tag

Athena is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.

{% highlight 'html' %}
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
{% endhighlight %}

You can see an example of this in action in the [starter template](#starter-template).


## 2. Add stylesheets

Add the Athena stylesheet before all other stylesheets in your document `<head>`. If you're [using Cloud.typography]({{ '/getting-started/download-install' | url }}#webfont-configuration), your CSS key should go immediately before the Athena stylesheet.

### Using fallback fonts only (no Cloud.typography fonts)

{% highlight 'html' %}
<link rel="stylesheet" href="{{ site.cdn }}v{{ package.version }}/css/framework.min.css" />
{% endhighlight %}

### Using Cloud.typography fonts
{% highlight 'html' %}
<link rel="stylesheet" type="text/css" href="https://cloud.typography.com/xxxxxx/xxxxxx/css/fonts.css" />
<link rel="stylesheet" href="{{ site.cdn }}v{{ package.version }}/css/framework.min.css" />
{% endhighlight %}


## 3. Add JavaScript

Add jQuery, Tether, and Athena's JavaScript near the end of your pages, right before the closing `</body>` tag. Be sure to place jQuery and Tether first, as our code depends on them. While we use jQuery's full build in our docs, the slim version is also supported.

{% highlight 'html' %}
{{ site.jquery_script }}
{{ site.tether_script }}
<script src="{{ site.cdn }}v{{ package.version }}/js/framework.min.js"></script>
{% endhighlight %}


## Starter template

Following the steps above, a basic starter template would look something like this:

{% highlight 'html' %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Athena CSS -->
    <link rel="stylesheet" href="{{ site.cdn }}v{{ package.version }}/css/framework.min.css" />
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- jQuery first, then Tether, then Athena JS. -->
    {{ site.jquery_script }}
    {{ site.tether_script }}
    <script src="{{ site.cdn }}v{{ package.version }}/js/framework.min.js"></script>
  </body>
</html>
{% endhighlight %}

That's all you need for overall page requirements. Visit the [Layout docs]({{ '/layout/overview' | url }}) to start laying out your site's content and components.
