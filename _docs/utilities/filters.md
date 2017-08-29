---
layout: docs
title: Filters
group: utilities
---

Apply unique effects to images using Athena's built-in filter classes.

{% callout warning %}
## Not Compatible with IE10, 11
Note that these filters are not compatible with IE10 or 11.
{% endcallout %}

## Base Filters

### Sepia

{% example html %}
<img src="https://unsplash.it/255/255" class="img-fluid filter-sepia">
{% endexample %}

### Grayscale

{% example html %}
<img src="https://unsplash.it/255/255" class="img-fluid filter-grayscale">
{% endexample %}

### Brightness

{% example html %}
<img src="https://unsplash.it/255/255" class="img-fluid filter-brightness">
{% endexample %}

### Blur

{% example html %}
<img src="https://unsplash.it/255/255" class="img-fluid filter-blur">
{% endexample %}

## Hover State Filter Overrides

By combining a filter and hover class, you can transition between filters on hover.

### Filter to No Filter

{% example html %}
<img src="https://unsplash.it/255/255" class="img-fluid hover-filter-none filter-sepia">
{% endexample %}

### No Filter to Filter

{% example html %}
<img src="https://unsplash.it/255/255" class="img-fluid hover-filter-sepia">
{% endexample %}
