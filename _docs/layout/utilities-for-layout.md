---
layout: docs-layout
title: Utilities for layout
description: Use any of our dozens of responsive utility classes for showing, hiding, aligning, and spacing content.
group: layout
---

For faster mobile-friendly and responsive development, Athena includes dozens of utility classes for showing, hiding, aligning, and spacing content. Below is a primer on what's included in Athena and how these utilities can help you with layout.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Changing `display`

Use our [display utilities]({{ site.baseurl }}{% link utilities/display-property.md %}) for responsively toggling common values of the `display` property. Mix it with our grid system, content, or components to show or hide them across specific viewports.

## Flexbox options

Athena is built with flexbox, but not every element's `display` has been changed to `display: flex` as this would add many unnecessary overrides and unexpectedly change key browser behaviors. Most of our components are built with flexbox enabled.

Should you need to add `display: flex` to an element, do so with `.d-flex` or one of the responsive variants (e.g., `.d-sm-flex`). You'll need this class or `display` value to allow the use of our extra [flexbox utilities]({{ site.baseurl }}{% link utilities/flexbox.md %}) for sizing, alignment, spacing, and more.

## Margin and padding

Use the `margin` and `padding` [spacing utilities]({{ site.baseurl }}{% link utilities/spacing.md %}) to control how elements and components are spaced and sized. Athena includes a five-level scale for spacing utilities, based on a `1rem` value default `$spacer` variable. Choose values for all viewports (e.g., `.mr-3` for `margin-right: 1rem`), or pick responsive variants to target specific viewports (e.g., `.mr-md-3` for `margin-right: 1rem` starting at the `md` breakpoint).

## Toggle `visibility`

When toggling `display` isn't needed, you can toggle the `visibility` of an element with our [visibility utilities]({{ site.baseurl }}{% link utilities/invisible-content.md %}). Invisible elements will still affect the layout of the page, but are visually hidden from visitors.
