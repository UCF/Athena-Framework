---
layout: docs
title: Breadcrumb
description: Indicate the current page's location within a navigational hierarchy.
tags: components
---

Indicate the current page's location within a navigational hierarchy. Separators are automatically added in CSS through [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content).


## Examples

{% example html %}
<ol class="breadcrumb" role="navigation" aria-label="breadcrumb">
  <li class="breadcrumb-item active" aria-current="page">Home</li>
</ol>
<ol class="breadcrumb" role="navigation" aria-label="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item active" aria-current="page">Library</li>
</ol>
<ol class="breadcrumb" role="navigation" aria-label="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item"><a href="#">Library</a></li>
  <li class="breadcrumb-item active" aria-current="page">Data</li>
</ol>
{% endexample %}

Similar to our navigation components, breadcrumbs work fine with or without the usage of list markup.

{% example html %}
<nav class="breadcrumb" aria-label="breadcrumb">
  <a class="breadcrumb-item" href="#">Home</a>
  <a class="breadcrumb-item" href="#">Library</a>
  <a class="breadcrumb-item" href="#">Data</a>
  <span class="breadcrumb-item active" aria-current="page">Bootstrap</span>
</nav>
{% endexample %}


## Accessibility

Since breadcrumbs provide a navigation, it’s a good idea to add a meaningful label such as `aria-label="breadcrumb"` to describe the type of navigation provided in the `<nav>` element, as well as applying an `aria-current="page"` to the last item of the set to indicate that it represents the current page.

For more information, see the [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).
