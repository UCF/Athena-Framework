---
layout: docs
title: Float
group: utilities
---

Toggle floats on any element, across any breakpoint, using our responsive float utilities.


## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


## Overview

These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the [CSS float property](https://developer.mozilla.org/en-US/docs/Web/CSS/float). `!important` is included to avoid specificity issues. These use the same viewport breakpoints as our grid system.


## Classes


{% example html %}
<div class="float-left">Float left on all viewport sizes</div><br>
<div class="float-right">Float right on all viewport sizes</div><br>
<div class="float-none">Don't float on all viewport sizes</div>
{% endexample %}


## Mixins

Floats can also be toggled using Sass mixins:

{% highlight scss %}
.element {
  @include float-left;
}
.another-element {
  @include float-right;
}
.one-more {
  @include float-none;
}
{% endhighlight %}


## Responsive classes

Responsive variations also exist for each `float` value.

{% example html %}
<div class="float-sm-right">Float right on viewports sized -sm (small) or wider</div><br>
<div class="float-md-right">Float right on viewports sized -md (medium) or wider</div><br>
<div class="float-lg-right">Float right on viewports sized -lg (large) or wider</div><br>
<div class="float-xl-right">Float right on viewports sized -xl (extra-large) or wider</div>
{% endexample %}

All available support classes are listed below:

{% for bp in breakpoints %}
- `.float{{ bp.abbr }}-left`
- `.float{{ bp.abbr }}-right`
- `.float{{ bp.abbr }}-none`{% endfor %}
