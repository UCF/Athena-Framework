---
layout: docs
title: Images
description: Documentation and examples for styling images with Athena.
tags: content
---

Opt your images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes.


## Contents

{:toc}


## Responsive images

Responsive behavior for images in Athena is opt-in, via the `.img-fluid` class. `max-width: 100%;` and `height: auto;` are applied to the image so that it scales with the parent element.

<div class="afd-example">
  <img data-src="holder.js/100px250" class="img-fluid" alt="Generic responsive image">
</div>

{% highlight 'html' %}
<img src="..." class="img-fluid" alt="Responsive image">
{% endhighlight %}


## Image thumbnails

In addition to our [border-radius utilities]({{ '/utilities/borders' | url }}), you can use `.img-thumbnail` to give an image a rounded 1px border appearance.

<div class="afd-example afd-example-images">
  <img data-src="holder.js/200x200" class="img-thumbnail" alt="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera">
</div>

{% highlight 'html' %}
<img src="..." alt="..." class="img-thumbnail">
{% endhighlight %}


## Aligning images

Align images with the [helper float classes]({{ '/utilities/float' | url }}#responsive-floats) or [text alignment classes]({{ '/utilities/typography' | url }}#text-alignment). `block`-level images can be centered using [the `.mx-auto` margin utility class]({{ '/utilities/spacing' | url }}#horizontal-centering).

<div class="afd-example afd-example-images">
  <img data-src="holder.js/200x200" class="rounded float-left" alt="A generic square placeholder image with rounded corners">
  <img data-src="holder.js/200x200" class="rounded float-right" alt="A generic square placeholder image with rounded corners">
</div>

{% highlight 'html' %}
<img src="..." class="rounded float-left" alt="...">
<img src="..." class="rounded float-right" alt="...">
{% endhighlight %}

<div class="afd-example afd-example-images">
  <img data-src="holder.js/200x200" class="rounded mx-auto d-block" alt="A generic square placeholder image with rounded corners">
</div>

{% highlight 'html' %}
<img src="..." class="rounded mx-auto d-block" alt="...">
{% endhighlight %}

<div class="afd-example afd-example-images">
  <div class="text-center">
    <img data-src="holder.js/200x200" class="rounded" alt="A generic square placeholder image with rounded corners">
  </div>
</div>

{% highlight 'html' %}
<div class="text-center">
  <img src="..." class="rounded" alt="...">
</div>
{% endhighlight %}


## Picture elements

If you are using the `<picture>` element to specify multiple `<source>` elements for a specific `<img>`, make sure to add the `.img-*` classes to the `<img>` and not to the `<picture>` tag.

{% highlight 'html' %}
​<picture>
  <source srcset="...">
  <img src="..." class="img-fluid img-thumbnail" alt="...">
</picture>
{% endhighlight %}
