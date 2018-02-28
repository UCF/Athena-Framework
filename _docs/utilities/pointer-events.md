---
layout: docs
title: Pointer Events
group: utilities
---

Disabling [pointer events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) can be particularly useful when combining media backgrounds and certain [hover state]({{ site.baseurl }}{% link utilities/states.md %}) setups.

{% example html %}
<a href="#">
  <div class="pointer-events-none">This is a child object within a link</div>
</a>
{% endexample %}

You can also reset the `pointer-events` value to the default `auto` using the `.pointer-events-auto` class:

{% example html %}
<a href="#">
  <div class="pointer-events-auto">This is a child object within a link</div>
</a>
{% endexample %}
