---
layout: docs
title: Media Backgrounds
group: utilities
---

Media backgrounds are an easy way of applying large images or video as a background.  They behave similarly to an image applied to an element using `background-image`, but with the advantage of being able to utilize `srcset` and `<picture> <source>`s for automated responsive switchouts of images.  For videos, media backgrounds provide a consistent, responsive option for full-screen scaling and stretching without requiring additional JavaScript.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## How it works

- Media backgrounds require a parent element, `.media-background-container`, and one or more `.media-background` child elements.
- `.media-background-container` can be any element, as long as it is capable of being relatively-positioned.  The parent element wraps the media background and any content that should be overlaid on top of the media background.  The media background is absolutely positioned within the parent, and sized using an `object-fit` utility class.
- Because the media background is absolutely positioned within the parent element, it will not affect the parent element's height–similarly to a standard background image.  You may wish to apply a `min-height` value to the parent element if you want to force a certain amount of the background image to always be shown.
- Because media backgrounds rely on the `object-fit` property, which isn't supported in IE or Edge, Athena includes the objectFitPolyfill.js library out-of-the-box for consistent functionality cross-browser.

## Usage

Media backgrounds can be `<img>`, `<picture>` or `<video>` elements.  However, the `.media-background` and `object-fit` classes are applied differently depending on the element:

### Image

Apply directly to the element:

<div class="media-background-container">
  <img class="media-background object-fit-cover" src="//placehold.it/600x300/" alt="">
  <div class="p-5">
    Your content here...
  </div>
</div>

{% highlight html %}
<div class="media-background-container">
  <img class="media-background object-fit-cover" srcset="..." src="..." alt="">
  Your content here...
</div>
{% endhighlight %}

### Picture

Apply to the inner `<source>` and `<img>` elements:

<div class="media-background-container">
  <picture>
    <source class="media-background object-fit-cover" srcset="//placehold.it/800x300" media="(min-width: 768px)">
    <source class="media-background object-fit-cover" srcset="//placehold.it/767x300" media="(min-width: 576px)">
    <source class="media-background object-fit-cover" srcset="//placehold.it/575x300" media="(max-width: 575px)">
    <img class="media-background object-fit-cover" src="//placehold.it/800x300" alt="">
  </picture>
  <div class="p-5">
    Your content here...
  </div>
</div>

{% highlight html %}
<div class="media-background-container">
  <picture>
    <source class="media-background object-fit-cover" srcset="..." media="..."></source>
    <source class="media-background object-fit-cover" srcset="..." media="..."></source>
    <img class="media-background object-fit-cover" src="..." alt="">
  </picture>
  Your content here...
</div>
{% endhighlight %}

### Video

Apply directly to the element (do not apply to `<source>`s):

<div class="media-background-container">
  <video class="media-background object-fit-cover">
    <source src="https://www.ucf.edu/wp-content/uploads/2017/01/Vignette-One-02.mp4">
  </video>
  <div class="p-5 text-white">
    Your content here...
  </div>
</div>

{% highlight html %}
<div class="media-background-container">
  <video class="media-background object-fit-cover">
    <source src="...">
  </video>
  Your content here...
</div>
{% endhighlight %}

### Object-fit

An `object-fit` utility class is **required** for the media background to scale properly.  The following options are available; for more information on how they behave, see [https://css-tricks.com/almanac/properties/o/object-fit/](https://css-tricks.com/almanac/properties/o/object-fit/):
- `.object-fit-contain`
- `.object-fit-cover`
- `.object-fit-fill`
- `.object-fit-none` (unsets an existing object-fit rule)
- `.object-fit-scale-down`

### Object-position

Custom `object-position` values are supported by media backgrounds, but for full cross-browser support, they must also be added to the media background elements using the `data-object-position` attribute (so that the polyfill can apply them in IE/Edge).  See the [polyfill documentation](https://github.com/constancecchen/object-fit-polyfill#usage) for more information.

{% highlight html %}
<img class="media-background object-fit-contain" style="object-position: 0 50%;" data-object-position="0 50%">
{% endhighlight %}

## Dynamic media background insertion

Any media backgrounds added to the DOM after the page has finished loading will need to re-trigger the object-fit polyfill by using Athena's mediaBackground plugin.  After dynamically inserting the new element into the dom, simply call:

{% highlight javascript %}
$('#my-media-background').mediaBackground();
{% endhighlight %}

...where `$('#my-media-background')` is a valid element with class `.media-background`.

## Picture elements and `srcset`

Note that IE 10 and 11 do not support the `<picture>` element and its `<source>` children natively: [http://caniuse.com/#search=picture](http://caniuse.com/#search=picture).  In addition, because the `srcset` attribute is also not supported in IE nor Edge, make sure you always include an `<img>` as the last child element within any `<picture>`, and that that image uses the `src` attribute to define the url.

For better cross-browser handling of the `<picture>` element and srcset attribute, you may wish to incorporate a polyfill into your project, such as [Picturefill](http://scottjehl.github.io/picturefill/).  Note that polyfills such as Picturefill have their own usage guidelines that may differ from what's noted above.
