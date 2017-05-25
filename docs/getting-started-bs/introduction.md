---
layout: docs
title: Introduction
description: Get started with Bootstrap using the Bootstrap CDN and a template starter page.
group: getting-started
---

Athena is a complete replacement for <a class="alert-link" href="https://getbootstrap.com/">Bootstrap</a>.  If you are already using Bootstrap on an existing project and want to use Athena instead, you should remove Bootstrap's CSS and Javascript completely.  Athena is designed to run as a completely standalone framework.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

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

<!--

___

## Quick start

Looking to quickly add Bootstrap to your project? Use the Bootstrap CDN, provided for free by the folks at MaxCDN. Using a package manager or need to download the source files? [Head to the downloads page.]({{ site.baseurl }}/getting-started/download/)

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

{% highlight html %}
<link rel="stylesheet" href="{{ site.cdn.css }}" integrity="{{ site.cdn.css_hash }}" crossorigin="anonymous">
{% endhighlight %}

Add our JavaScript plugins, jQuery, and Popper.js near the end of your pages, right before the closing `</body>` tag. Be sure to place jQuery and Popper.js first, as our code depends on them. While we use [jQuery's slim build](https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/) in our docs, the full version is also supported.

{% highlight html %}
<script src="{{ site.cdn.jquery }}" integrity="{{ site.cdn.jquery_hash }}" crossorigin="anonymous"></script>
<script src="{{ site.cdn.popper }}" integrity="{{ site.cdn.popper_hash }}" crossorigin="anonymous"></script>
<script src="{{ site.cdn.js }}" integrity="{{ site.cdn.js_hash }}" crossorigin="anonymous"></script>
{% endhighlight %}

And that's it—you're on your way to a fully Bootstrapped site. If you're at all unsure about the general page structure, keep reading for an example page template.

## Important globals

Bootstrap employs a handful of important global styles and settings that you'll need to be aware of when using it, all of which are almost exclusively geared towards the *normalization* of cross browser styles. Let's dive in.

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

## Community

Stay up to date on the development of Bootstrap and reach out to the community with these helpful resources.

- Follow [@getbootstrap on Twitter](https://twitter.com/getbootstrap).
- Read and subscribe to [The Official Bootstrap Blog]({{ site.blog }}).
- Join [the official Slack room]({{ site.slack }}).
- Chat with fellow Bootstrappers in IRC. On the `irc.freenode.net` server, in the `##bootstrap` channel.
- Implementation help may be found at Stack Overflow (tagged [`bootstrap-4`](https://stackoverflow.com/questions/tagged/bootstrap-4)).
- Developers should use the keyword `bootstrap` on packages which modify or add to the functionality of Bootstrap when distributing through [npm](https://www.npmjs.com/browse/keyword/bootstrap) or similar delivery mechanisms for maximum discoverability.

You can also follow [@getbootstrap on Twitter](https://twitter.com/getbootstrap) for the latest gossip and awesome music videos.
-->