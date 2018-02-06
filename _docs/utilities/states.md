---
layout: docs-utilities
title: States
group: utilities
---

The Athena Framework provides various utility classes for defining unique hover/focus/active states, separate from an element's default state.

## Basic Hover Utilities

### Sepia

{% example html %}
<img src="https://unsplash.it/255/255" class="img-fluid hover-filter-sepia">
{% endexample %}

### Grayscale

{% example html %}
<img src="https://unsplash.it/255/255" class="img-fluid hover-filter-grayscale">
{% endexample %}

### Brightness

{% example html %}
<img src="https://unsplash.it/255/255" class="img-fluid hover-filter-brightness">
{% endexample %}

### Blur

{% example html %}
<img src="https://unsplash.it/255/255" class="img-fluid hover-filter-blur">
{% endexample %}

## Parent + Child Hover Utilities

The following markup and classes demonstrate how to use the state filters when the hover event occurs on the parent.

### Sepia

_Hover over the gray background, and the child image will transition_

{% example html %}
<div class="hover-parent bg-default mb-1 pt-5">
    <img src="https://unsplash.it/255/255" class="img-fluid hover-child-filter-sepia">
</div>
{% endexample %}

### Grayscale

{% example html %}
<div class="hover-parent bg-default mb-1 pt-5">
    <img src="https://unsplash.it/255/255" class="img-fluid hover-child-filter-grayscale">
</div>
{% endexample %}

### Brightness

{% example html %}
<div class="hover-parent bg-default mb-1 pt-5">
    <img src="https://unsplash.it/255/255" class="img-fluid hover-child-filter-brightness">
</div>
{% endexample %}

### Blur

{% example html %}
<div class="hover-parent bg-default mb-1 pt-5">
    <img src="https://unsplash.it/255/255" class="img-fluid hover-child-filter-blur">
</div>
{% endexample %}

