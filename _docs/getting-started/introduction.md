---
layout: docs
title: Introduction
description: Get started with Athena using the Athena CDN and a template starter page.
group: getting-started
redirect_from: "/getting-started/"
---

The Athena Framework is a front-end framework built and used by the <a href="//www.ucf.edu/brand/">UCF Marketing Team</a> to create responsive websites and web applications for <a href="//www.ucf.edu">UCF</a>. Based on <a href="//v4-alpha.getboostrap.com">Bootstrap 4,</a> the framework includes most of the functionality developers and content editors have come to expect of Bootstrap. In addition, base Bootstrap styles have been updated to conform to the UCF brand by default, with additional variants for flexibility.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

___

## A Note about Bootstrap

Athena is a complete replacement for <a href="https://getbootstrap.com/">Bootstrap</a>.  If you are already using Bootstrap on an existing project and want to use Athena instead, you should remove Bootstrap's CSS and JavaScript completely.  Athena is designed to run as a completely standalone framework.

Read more about the <a href="{{ "/migration/" | prepend: site.baseurl }}">differences between Athena and Bootstrap here.</a>

___

## Quick Start

To quickly add all of Athena's features to your project, add the following CDN assets to your pages:

### Add stylesheets

Add the Athena stylesheet before all other stylesheets in your document `<head>`. If you're using Cloud.typography**, your CSS key should go immediately before the Athena stylesheet.

{% highlight html %}
<link rel="stylesheet" type="text/css" href="https://cloud.typography.com/xxxxxx/xxxxxx/css/fonts.css">
<link rel="stylesheet" href="{{ site.cdn }}v{{ site.data.package.version }}/css/framework.min.css">
{% endhighlight %}

{% callout info %}
<strong>**Note: Cloud.typography fonts are optional.</strong> If Cloud.typography is not utilized, fallback fonts provided by Athena will be used. See the <a href="{{ "/getting-started/install/" | prepend: site.baseurl }}#webfonts--configuration">webfont configuration</a> section for information on setting up a Cloud.typography project for use with Athena.
{% endcallout %}

### Add JavaScript

Add jQuery, Tether, and Athena's JavaScript near the end of your pages, right before the closing `</body>` tag. Be sure to place jQuery and Tether first, as our code depends on them. While we use jQuery's slim build in our docs, the full version is also supported.

{% highlight html %}
<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="{{ site.cdn }}v{{ site.data.package.version }}/js/framework.min.js"></script>
{% endhighlight %}

___

## Starter template

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Athena CSS -->
    <link rel="stylesheet" href="{{ site.cdn }}v{{ site.data.package.version }}/css/framework.min.css">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- jQuery first, then Tether, then Athena JS. -->
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="{{ site.cdn }}v{{ site.data.package.version }}/js/framework.min.js"></script>
  </body>
</html>
{% endhighlight %}

That's all you need for overall page requirements. Visit the [Layout docs]({{ site.baseurl }}/layout/overview/) to start laying out your site's content and components.

___

## Important globals

Athena employs a handful of important global styles and settings that you'll need to be aware of when using it, all of which are almost exclusively geared towards the *normalization* of cross browser styles. Let's dive in.

### HTML5 doctype

Bootstrap requires the use of the HTML5 doctype. Without it, you'll see some funky incomplete styling, but including it shouldn't cause any considerable hiccups.

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  ...
</html>
{% endhighlight %}

### Responsive meta tag

Bootstrap is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{% endhighlight %}

You can see an example of this in action in the [starter template](#starter-template).

### Box-sizing

For more straightforward sizing in CSS, we switch the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

{% highlight scss %}
.selector-for-some-widget {
  box-sizing: content-box;
}
{% endhighlight %}

With the above snippet, nested elements—including generated content via `:before` and `:after`—will all inherit the specified `box-sizing` for that `.selector-for-some-widget`.

Learn more about [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).

### Reboot

For improved cross-browser rendering, we use [Reboot]({{ site.baseurl }}/content/reboot/) to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.

___

## Community

Stay up to date on the development of the Athena Framework and reach out to the community with these helpful resources.

- Join [the official Slack channel]({{ site.slack }}).
- Submit new issues/bugs and track the framework's development process on [Github](https://github.com/{{ site.data.package.repository.url }}).
