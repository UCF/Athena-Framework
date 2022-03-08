---
layout: docs
title: Badges
description: Documentation and examples for badges, our small count and labeling component.
tags: components
---

Small and adaptive tag for adding context to just about any content.


## Contents

{:toc}


## Example

Badges scale to match the size of the immediate parent element. A minimum font size is enforced to ensure badge text is readable.

{% callout 'info' %}
### IE11 badge sizes
Note that as of v1.1.1 of the Athena Framework, badge sizes do _not_ scale up in IE11 (due to lack of support for the `max()` CSS function.)
{% endcallout %}

{% example html %}
<h1>Example heading <span class="badge badge-default">New</span></h1>
<h2>Example heading <span class="badge badge-default">New</span></h2>
<h3>Example heading <span class="badge badge-default">New</span></h3>
<h4>Example heading <span class="badge badge-default">New</span></h4>
<h5>Example heading <span class="badge badge-default">New</span></h5>
<h6>Example heading <span class="badge badge-default">New</span></h6>
{% endexample %}


## Contextual variations

Add any of the below mentioned modifier classes to change the appearance of a badge.

{% example html %}
<span class="badge badge-default">Default</span>
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-complementary">Complementary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-inverse">Inverse</span>
{% endexample %}

{% include callout-warning-color-assistive-technologies.md %}


## Pill badges

Use the `.badge-pill` modifier class to make badges more rounded (with a larger `border-radius` and additional horizontal `padding`).

{% example html %}
<span class="badge badge-pill badge-default">Default</span>
<span class="badge badge-pill badge-primary">Primary</span>
<span class="badge badge-pill badge-secondary">Secondary</span>
<span class="badge badge-pill badge-complementary">Complementary</span>
<span class="badge badge-pill badge-success">Success</span>
<span class="badge badge-pill badge-info">Info</span>
<span class="badge badge-pill badge-warning">Warning</span>
<span class="badge badge-pill badge-danger">Danger</span>
<span class="badge badge-pill badge-inverse">Inverse</span>
{% endexample %}


## Links

Using the `.badge` classes with the `<a>` element quickly provide _actionable_ badges with hover and focus states.

{% example html %}
<a href="#" class="badge badge-default">Default</a>
<a href="#" class="badge badge-primary">Primary</a>
<a href="#" class="badge badge-secondary">Secondary</a>
<a href="#" class="badge badge-complementary">Complementary</a>
<a href="#" class="badge badge-success">Success</a>
<a href="#" class="badge badge-info">Info</a>
<a href="#" class="badge badge-warning">Warning</a>
<a href="#" class="badge badge-danger">Danger</a>
<a href="#" class="badge badge-inverse">Inverse</a>
{% endexample %}
