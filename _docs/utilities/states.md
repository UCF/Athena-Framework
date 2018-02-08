---
layout: docs-utilities
title: States
group: utilities
---

The Athena Framework provides utility classes for defining unique style changes on hover, focus, and active element states. These utility classes make it easy to develop complex interactive components on-the-fly, without the need for additional CSS.

Despite the names starting with just `.hover-`, these style adjustments are applied to hover, active, *and* focus states.


## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


## Basic state utilities

### Show/hide (opacity)

{% example html %}
<a href="#" class="hover-show">Shown on hover</a>
<a href="#" class="hover-hide">Hidden on hover</a>
{% endexample %}

Show/hide states can be combined with Athena's `.fade` class for a smoother transition:

{% example html %}
<a href="#" class="hover-show fade">Shown on hover (with fade)</a>
<a href="#" class="hover-hide fade">Hidden on hover (with fade)</a>
{% endexample %}

### Scale up/down

{% example html %}
<a href="#" class="d-inline-block hover-scale-up">Zooms in on hover (scale+)</a>
<a href="#" class="d-inline-block hover-scale-down">Zooms out on hover (scale-)</a>
{% endexample %}

### Color Transitions

{% example html %}
<a href="#" class="hover-text-white">Transitions to white on hover</a>
<a href="#" class="hover-text-black">Transitions to black on hover</a>
{% endexample %}

### Filters

Athena's [available filters]({{ site.baseurl }}{% link utilities/filters.md %}) also have their own set of state classes, which apply filter effects on hover/active/focus:

{% example html %}
<img src="https://unsplash.it/100/100" class="hover-filter-sepia">
<img src="https://unsplash.it/100/100" class="hover-filter-grayscale">
<img src="https://unsplash.it/100/100" class="hover-filter-brightness">
<img src="https://unsplash.it/100/100" class="hover-filter-blur">
{% endexample %}

To _disable_ a filter on hover, use the `.hover-filter-none` class:

{% example html %}
<img src="https://unsplash.it/100/100" class="hover-filter-none filter-sepia">
{% endexample %}


## Parent + child state utilities

Want to apply state changes to a child element when its parent's state changes? No problem: use our parent and child state utilities to establish the needed relationship between both elements.

### How to use
Parent + child state classes are easy to use: simply apply the `.hover-parent` class to the parent element that should trigger effects when interacted with, and apply a `.hover-child-*` class to the child element.  Available child classes are listed below.

Hover over the blue backgrounds in the examples below, and you'll see the child element change:

### Show/hide (opacity)

{% example html %}
<div class="hover-parent bg-info mb-1">
  <p class="hover-child-show p-2 d-inline-block bg-default">Shown on hover</p>
</div>

<div class="hover-parent bg-info mb-1">
  <p class="hover-child-hide p-2 d-inline-block bg-default">Hidden on hover</p>
</div>

<div class="hover-parent bg-info mb-1">
  <p class="hover-child-show fade p-2 d-inline-block bg-default">Shown on hover (with fade)</p>
</div>

<div class="hover-parent bg-info mb-1">
  <p class="hover-child-hide fade p-2 d-inline-block bg-default">Hidden on hover (with fade)</p>
</div>
{% endexample %}

### Scale up/down

{% example html %}
<div class="hover-parent bg-info mb-1">
  <p class="hover-child-scale-up p-2 d-inline-block bg-default">Zooms in on hover (scale+)</p>
</div>

<div class="hover-parent bg-info mb-1">
  <p class="hover-child-scale-down p-2 d-inline-block bg-default">Zooms out on hover (scale-)</p>
</div>
{% endexample %}

### Color Transitions

{% example html %}
<div class="hover-parent bg-info mb-1">
  <p class="hover-child-text-white text-primary p-2 d-inline-block bg-default">Transitions to white on hover</p>
</div>

<div class="hover-parent bg-info mb-1">
  <p class="hover-child-text-black p-2 d-inline-block bg-default">Transitions to black on hover</p>
</div>
{% endexample %}

### Filters

{% example html %}
<div class="hover-parent bg-info mb-1 pt-5">
    <img src="https://unsplash.it/100/100" class="hover-child-filter-sepia">
</div>

<div class="hover-parent bg-info mb-1 pt-5">
    <img src="https://unsplash.it/100/100" class="hover-child-filter-grayscale">
</div>

<div class="hover-parent bg-info mb-1 pt-5">
    <img src="https://unsplash.it/100/100" class="hover-child-filter-brightness">
</div>

<div class="hover-parent bg-info mb-1 pt-5">
    <img src="https://unsplash.it/100/100" class="hover-child-filter-blur">
</div>
{% endexample %}

### Pointer events

Depending on the complexity of the element you're using parent + child state utilities with, you may also need to apply pointer event adjustments to the parent or child element.  See our [pointer event utility class]({{ site.baseurl }}{% link utilities/pointer-events.md %}) docs for more information.
