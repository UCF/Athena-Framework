---
layout: docs
title: Dividers
description: Documentation and examples for customizing dividers in Athena.
group: content
---

Athena provides extra utility classes for styling `<hr>` elements that are not provided in Bootstrap.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
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
