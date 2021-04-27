---
layout: docs
title: Position
tags: utilities
---

Position utilities are helpful for quickly placing a component outside the normal document flow, or for adjusting/defining the containing block for things like [stretched links](./../stretched-links/).


## Contents

{:toc}


## Static

Assign `position: static` to an element.  Note that directional position values previously set on the element (`top`, `right`, `bottom`, `left`) and `z-index` will have no effect.

{% highlight 'html' %}
<div class="position-static">...</div>
{% endhighlight %}

Responsive variations also exist for `.position-static`:

- `.position-static`
- `.position-sm-static`
- `.position-md-static`
- `.position-lg-static`
- `.position-xl-static`


## Relative

Assign `position: relative` to an element.  This utility class also unsets any previously-set directional position values on the element (`top`, `right`, `bottom`, `left`), and `z-index` is reset (via `z-index: auto`).

{% highlight 'html' %}
<div class="position-relative">...</div>
{% endhighlight %}

Responsive variations also exist for `.position-relative`:

- `.position-relative`
- `.position-sm-relative`
- `.position-md-relative`
- `.position-lg-relative`
- `.position-xl-relative`


## Absolute

Position an element at the top or bottom of its [containing block](./../stretched-links/#identifying-the-containing-block), from edge to edge. Keep in mind that an absolutely-positioned element without a containing block will be positioned relative to the document.

Note that `z-index` is reset with this class (via `z-index: auto`); if you need to adjust z-index stacking, you'll need custom CSS.

### Absolute Top

{% highlight 'html' %}
<div class="position-absolute-top">...</div>
{% endhighlight %}

Responsive variations also exist for `.position-absolute-top`:

- `.position-absolute-top`
- `.position-sm-absolute-top`
- `.position-md-absolute-top`
- `.position-lg-absolute-top`
- `.position-xl-absolute-top`

### Absolute Bottom

{% highlight 'html' %}
<div class="position-absolute-bottom">...</div>
{% endhighlight %}

Responsive variations also exist for `.position-absolute-bottom`:

- `.position-absolute-bottom`
- `.position-sm-absolute-bottom`
- `.position-md-absolute-bottom`
- `.position-lg-absolute-bottom`
- `.position-xl-absolute-bottom`


## Fixed

Position an element at the top or bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add aditional CSS.

### Fixed Top

{% highlight 'html' %}
<div class="position-fixed-top">...</div>
{% endhighlight %}

You can also use the alias `.fixed-top` for backward compatibility with previous versions of Athena.

Responsive variations also exist for `.position-fixed-top`/`.fixed-top`:

- `.position-fixed-top`
- `.position-sm-fixed-top`
- `.position-md-fixed-top`
- `.position-lg-fixed-top`
- `.position-xl-fixed-top`
- `.fixed-top`
- `.fixed-sm-top`
- `.fixed-md-top`
- `.fixed-lg-top`
- `.fixed-xl-top`

### Fixed Bottom

{% highlight 'html' %}
<div class="position-fixed-bottom">...</div>
{% endhighlight %}

You can also use the alias `.fixed-bottom` for backward compatibility with previous versions of Athena.

Responsive variations also exist for `.position-fixed-bottom`/`.fixed-bottom`:

- `.position-fixed-bottom`
- `.position-sm-fixed-bottom`
- `.position-md-fixed-bottom`
- `.position-lg-fixed-bottom`
- `.position-xl-fixed-bottom`
- `.fixed-bottom`
- `.fixed-sm-bottom`
- `.fixed-md-bottom`
- `.fixed-lg-bottom`
- `.fixed-xl-bottom`


## Sticky top

Position an element at the top of the viewport, from edge to edge, but only after you scroll past it.

{% highlight 'html' %}
<div class="position-sticky-top">...</div>
{% endhighlight %}

You can also use the alias `.sticky-top` for backward compatibility with previous versions of Athena.

{% callout 'warning' %}
### Not compatible with other position utilities
Note that responsive variants for the sticky top utility are currently not available, and the sticky top utility is not compatible with Athena's other position utilities.
{% endcallout %}

{% callout 'warning' %}
### Polyfill for `position: sticky`
The sticky top utility uses CSS's `position: sticky`, which is polyfilled in Athena using Stickyfill for full cross-browser support; however, we still recommend testing its usage thoroughly in [browsers that require the polyfill](http://caniuse.com/#search=sticky) to ensure it behaves properly.
{% endcallout %}

### Dynamic `.position-sticky-top` insertion

For any sticky top element inserted into the document after it has finished loading, or for elements whose sticky top class was added to an element on-the-fly, you'll need to use Athena's stickyTop plugin to initialize polyfill support for that element:

{% highlight 'javascript' %}
$('#my-sticky-elem').stickyTop();
{% endhighlight %}

...where `#my-sticky-elem` is a valid element with the class `.position-sticky-top` or `.sticky-top`.
