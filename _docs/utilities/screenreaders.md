---
layout: docs
title: Screenreaders
tags: utilities
---

## Screenreader-only content
Hide an element to all devices **except screen readers** with `.sr-only`.

`.sr-only` usage is critical for adding additional context to components that rely on inaccessible methods of conveying meaning, such as color, non-crawlable graphics and icons, or grouping/positioning of content that only makes sense to sighted users.

{% example html %}
<a class="btn btn-primary" href="#">
  Profile <span class="badge badge-pill badge-secondary">4</span><span class="sr-only"> notifications</span>
</a>
{% endexample %}


## Keyboard-focusable screenreader content

Combine `.sr-only` with `.sr-only-focusable` to show the element again when it's focused (e.g. by a keyboard-only user). Can also be used as mixins.

{% highlight html %}
<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
{% endhighlight %}

{% highlight scss %}
// Usage as a mixin
.skip-navigation {
  @include sr-only;
  @include sr-only-focusable;
}
{% endhighlight %}
