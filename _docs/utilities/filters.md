---
layout: docs
title: Filters
group: utilities
---

Apply unique effects to images using Athena's built-in filter classes.

{% callout warning %}
## Not compatible with IE 11
Note that CSS filters are not compatible with and will have no effect in IE 11.
{% endcallout %}


## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


## Base Filters

### Sepia

{% example html %}
<img src="https://unsplash.it/255/255" class="filter-sepia">
{% endexample %}

### Grayscale

{% example html %}
<img src="https://unsplash.it/255/255" class="filter-grayscale">
{% endexample %}

### Brightness

{% example html %}
<img src="https://unsplash.it/255/255" class="filter-brightness">
{% endexample %}

### Blur

{% example html %}
<img src="https://unsplash.it/255/255" class="filter-blur">
{% endexample %}


## State Change Filter Overrides

By combining a filter and [state classes]({{ '/utilities/states' | url }}), you can transition between filters on hover, active, and focus. Filter changes on state change (including parent/child element state changes) are documented in further detail in our [state class documentation]({{ '/utilities/states' | url }}).
