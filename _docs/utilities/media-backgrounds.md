---
layout: docs
title: Media Backgrounds
group: utilities
---

Media backgrounds are an easy way of applying large images or video as a background.  They behave similarly to an image applied to an element using `background-image`, but with the advantage of being able to utilize `srcset` and `<picture> <source>`s for automated responsive switchouts of images.  For videos, media backgrounds provide a consistent, responsive option for full-screen scaling, stretching, and positioning.


## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


## How it works

- Media backgrounds require a parent element, `.media-background-container`, and one or more `.media-background` child elements.
- `.media-background-container` can be any element, as long as it is capable of being relatively-positioned.  The parent element wraps the media background and any content that should be overlaid on top of the media background.  The media background is absolutely positioned within the parent, and sized using an `object-fit` utility class.
- Because the media background is absolutely positioned within the parent element, it will not affect the parent element's height–similarly to a standard background image.  You may wish to apply a `min-height` value to the parent element if you want to force a certain amount of the background image to always be shown.
- Because media backgrounds rely on the `object-fit` property, which isn't supported in IE or Edge, Athena includes the objectFitPolyfill.js library out-of-the-box for consistent functionality cross-browser.


## Usage

Media backgrounds can be `<img>`, `<picture>` or `<video>` elements.  However, the `.media-background` and `.object-fit-*` classes are applied differently depending on the element:

### Image

Apply `.media-background` and your `.object-fit-*` class directly to the `<img>` element:

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

Apply `.media-background` and your `.object-fit-*` class to the inner `<img>` element (do not apply to `<source>`s):

<div class="media-background-container">
  <picture>
    <source srcset="//placehold.it/800x300" media="(min-width: 768px)">
    <source srcset="//placehold.it/767x300" media="(min-width: 576px)">
    <source srcset="//placehold.it/575x300" media="(max-width: 575px)">
    <img class="media-background object-fit-cover" src="//placehold.it/800x300" alt="">
  </picture>
  <div class="p-5">
    Your content here...
  </div>
</div>

{% highlight html %}
<div class="media-background-container">
  <picture>
    <source srcset="..." media="..."></source>
    <source srcset="..." media="..."></source>
    <img class="media-background object-fit-cover" src="..." alt="">
  </picture>
  Your content here...
</div>
{% endhighlight %}

{% callout info %}
#### Picture elements and `srcset`

Note that IE 10 and 11 [do not support the `<picture>` element and its `<source>` children](http://caniuse.com/#search=picture) natively.  In addition, because the `srcset` attribute is also not supported in IE nor Edge, make sure you always include an `<img>` as the last child element within any `<picture>`, and that that image uses the `src` attribute to define the url.

For better cross-browser handling of the `<picture>` element and srcset attribute, you may wish to incorporate a polyfill into your project, such as [Picturefill](http://scottjehl.github.io/picturefill/).  Note that polyfills such as Picturefill have their own usage guidelines that may differ from what's noted above.
{% endcallout %}

### Video

Apply `.media-background` and your `.object-fit-*` class directly to the `<video>` element (do not apply to `<source>`s).

Note that media background videos must be included using the `<video>` element.  Embedded YouTube videos (and most other video embed services) are not supported due to their usage of iframes.

<div class="media-background-container">
  <video class="media-background object-fit-cover" muted playsinline>
    <source src="https://www.ucf.edu/wp-content/uploads/2017/01/Vignette-One-02.mp4">
  </video>
  <div class="p-5 text-white">
    Your content here...
  </div>
</div>

{% highlight html %}
<div class="media-background-container">
  <video class="media-background object-fit-cover" muted playsinline>
    <source src="...">
  </video>
  Your content here...
</div>
{% endhighlight %}

{% callout danger %}
#### Mute your video!

**Never include sound on media background videos.** Ensure the `muted` attribute is _always_ present when using a video as a media background!
{% endcallout %}

{% callout warning %}
#### Media background video accessibility

[For accessibility reasons](https://www.w3.org/TR/WCAG20/#time-limits-pause), **videos that play automatically and run for more than 5 seconds should be pauseable by the user**.  Athena does not include a means of doing this out of the box, but we suggest utilizing [button toggling]({{ site.baseurl }}{% link components/buttons.md %}#toggle-states) with some custom JavaScript that toggles video playback on click.  Whatever playback toggler you implement should be **visible for all users**, **positioned somewhere relative to the video**, and **work via keyboard input**.  Remember that media backgrounds are absolutely-positioned within their container, so native controls (using the `controls` attribute) won't work well to satisfy this requirement.

Additionally, be mindful of the type of video content you use as a media background--flashing lights, fast cuts (transitions between scenes), and fast-moving imagery are not appropriate for use behind your site's content. Slow-moving vignettes with minimal cuts are ideal.
{% endcallout %}

{% callout warning %}
#### Media background videos on mobile devices

Keep in mind that iOS Safari and Chrome for Android have stricter requirements for allowing autoplaying videos to load than most desktop browsers.  See [this document on Webkit `<video>` policies](https://webkit.org/blog/6784/new-video-policies-for-ios/) and [this document on Autoplay policies in Chrome](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes) for more information.

The best way to ensure your videos work as expected on mobile devices is to always include the `muted` and `playsinline` attributes on your `<video>` elements.  Additionally, we strongly recommend providing a [`poster` image](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attr-poster) to accommodate devices that enable "data saving" features (such as [Chrome for Android's Data Saver setting](https://developer.chrome.com/multidevice/data-compression), which will not display video at all when enabled, but will still show poster images).  Poster images are also good to have on desktop browsers, to use as a placeholder until the video finishes loading in.

Finally, **be mindful of your video's filesize**--excessively large media background videos will slow down your website, which is harmful to the user experience, hurts SEO, and drains your users' device battery and data usage.  Make sure your video file is optimized for web; compression tools such as [ffmpeg](https://www.ffmpeg.org/) can help reduce your video's filesize significantly when used properly.  If you have the ability to use a static image instead of video on mobile devices, we encourage you to do so.
{% endcallout %}

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
