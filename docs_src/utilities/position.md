---
layout: docs
title: Position
group: utilities
---

Position utilities are helpful for quickly placing a component outside the normal document flow. Choose from a handful of fixed or sticky position classes as needed.

### Fixed top

Position an element at the top of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add aditional CSS.

{% highlight html %}
<div class="fixed-top">...</div>
{% endhighlight %}

### Fixed bottom

Position an element at the bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add aditional CSS.

{% highlight html %}
<div class="fixed-bottom">...</div>
{% endhighlight %}

### Sticky top

Position an element at the top of the viewport, from edge to edge, but only after you scroll past it.

{% callout warning %}
**Polyfill notes:** The `.sticky-top` utility uses CSS's `position: sticky`, which is polyfilled in Athena using Stickyfill for full cross-browser support; however, we still recommend testing its usage thoroughly in [browsers that require the polyfill](http://caniuse.com/#search=sticky) to ensure it behaves properly.
{% endcallout %}

{% highlight html %}
<div class="sticky-top">...</div>
{% endhighlight %}

#### Dynamic `.sticky-top` insertion

For any `.sticky-top` element inserted into the document after it has finished loading, or for elements whose `.sticky-top` class was added to an element on-the-fly, you'll need to use Athena's stickyTop plugin to initialize polyfill support for that element:

{% highlight javascript %}
$('#my-sticky-elem').stickyTop();
{% endhighlight %}

...where `#my-sticky-elem` is a valid element with the class `.sticky-top`.
