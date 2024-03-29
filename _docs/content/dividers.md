---
layout: docs
title: Dividers
description: Documentation and examples for customizing dividers in Athena.
tags: content
---

Athena provides utility classes for styling `<hr>` elements with alternate thicknesses, colors, and orientation.


## Contents

{:toc}


## Thickness

Modify the weight of a divider using the `.hr-2` or `.hr-3` classes. The weight of these dividers is set via the `$border-width-thicker` and `$border-width-thickest` Sass variables, respectively.

{% example html %}
<hr>
<hr class="hr-2">
<hr class="hr-3">
{% endexample %}


## Color

Use the `.hr-black`, `.hr-white`, or `.hr-primary` classes to modify the color of the divider.

{% example html %}
<hr class="hr-black">
<hr class="hr-white">
<hr class="hr-primary">
{% endexample %}


## Vertical Orientation

You can modify a divider to be oriented vertically using the `.hr-vertical` class. Vertical dividers are best used within columns (or some other block-level parent element) to help define how tall the divider should be.

{% example html %}
<div class="row">
  <div class="col">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra felis vel nisl aliquet vehicula. Curabitur suscipit neque risus, id semper purus elementum nec. Proin commodo gravida lectus ac tincidunt. Vestibulum eleifend, lectus in ornare elementum, purus nisl tincidunt ligula, congue sodales neque felis at nisi. Sed elementum ut purus vel egestas. Nunc eget ultricies arcu. Nam eget elit id ligula euismod imperdiet. Fusce faucibus lectus quis tincidunt sagittis. Integer volutpat interdum libero, non bibendum ante rhoncus non.
  </div>
  <div class="col-auto">
    <hr class="hr-vertical">
  </div>
  <div class="col">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra felis vel nisl aliquet vehicula. Curabitur suscipit neque risus, id semper purus elementum nec. Proin commodo gravida lectus ac tincidunt.
  </div>
</div>
{% endexample %}

Like standard dividers, vertical dividers can take advantage of thickness and color overrides:

{% example html %}
<div class="row">
  <div class="col">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </div>
  <div class="col-auto">
    <hr class="hr-vertical hr-2">
  </div>
  <div class="col">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </div>
  <div class="col-auto">
    <hr class="hr-vertical hr-primary hr-3">
  </div>
  <div class="col">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </div>
</div>
{% endexample %}

Vertical dividers can also be used with flex, height, and margin utility classes for advanced positioning adjustments:

{% example html %}
<div class="row">
  <div class="col-3">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra felis vel nisl aliquet vehicula. Curabitur suscipit neque risus, id semper purus elementum nec. Proin commodo gravida lectus ac tincidunt.
  </div>
  <div class="col-auto d-flex align-items-center">
    <hr class="hr-vertical h-75">
  </div>
  <div class="col-2">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </div>
  <div class="col-2">
    <hr class="hr-vertical mx-auto">
  </div>
  <div class="col-3">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra felis vel nisl aliquet vehicula. Curabitur suscipit neque risus, id semper purus elementum nec. Proin commodo gravida lectus ac tincidunt.
  </div>
</div>
{% endexample %}

### Responsive Orientation

A divider can transition between horizontal and vertical orientations using responsive class variants:

{% example html %}
<div class="row">
  <div class="col-12 col-lg">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra felis vel nisl aliquet vehicula. Curabitur suscipit neque risus, id semper purus elementum nec. Proin commodo gravida lectus ac tincidunt.
  </div>
  <div class="col-12 col-lg-auto">
    <hr class="hr-lg-vertical">
  </div>
  <div class="col-12 col-lg">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra felis vel nisl aliquet vehicula. Curabitur suscipit neque risus, id semper purus elementum nec. Proin commodo gravida lectus ac tincidunt.
  </div>
</div>
{% endexample %}

You can additionally use the `.hr-horizontal` class and responsive variants to reset a vertical divider to horizontal:

{% example html %}
<div class="row">
  <div class="col col-lg-12">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra felis vel nisl aliquet vehicula. Curabitur suscipit neque risus, id semper purus elementum nec. Proin commodo gravida lectus ac tincidunt.
  </div>
  <div class="col-auto col-lg-12">
    <hr class="hr-vertical hr-lg-horizontal">
  </div>
  <div class="col col-lg-12">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra felis vel nisl aliquet vehicula. Curabitur suscipit neque risus, id semper purus elementum nec. Proin commodo gravida lectus ac tincidunt.
  </div>
</div>
{% endexample %}

Available responsive class variants for vertical and horizontal dividers include:
- `.hr-vertical`
- `.hr-sm-vertical`
- `.hr-md-vertical`
- `.hr-lg-vertical`
- `.hr-xl-vertical`
- `.hr-horizontal`
- `.hr-sm-horizontal`
- `.hr-md-horizontal`
- `.hr-lg-horizontal`
- `.hr-xl-horizontal`
