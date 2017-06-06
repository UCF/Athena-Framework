---
layout: docs
title: Customization options
description: Customize Athena with Sass variables, easily toggling global preferences with a quick recompile.
group: getting-started
---

Customize Athena's CSS with Sass variables, easily toggling global preferences with a quick recompile.

## Customizing variables

Unlike Bootstrap 4, Athena doesn't provide a `_custom.scss` file; instead, Athena's source files are expected to be included into projects that require manual builds using [properly-ordered .scss and .js file imports]({{ "/getting-started/build-tools" | prepend: site.baseurl }}).

To apply your own custom overrides to Athena, copy and paste relevant lines from Athena's `_variables.scss` into your project's unique `_variables.scss` file, modify the values, and recompile your Sass to change our default values. **Be sure to remove the `!default` flag from override values.**

For example, to change out the `background-color` and `color` for the `<body>`, you'd do the following:

{% highlight scss %}
// my-project's _variables.scss

$body-bg:    $gray-dark;
$body-color: $gray-light;
{% endhighlight %}

Do the same for any variable you need to override, including the global options listed below.

Note that Athena provides other additional variables not provided by Bootstrap; particularly, Athena allows for greater component-specific customization of border-radius values.  See Athena's `_variables.scss` for the full list of variables; any variables unique to Athena will be marked with a `custom` comment.

## Global options

You can find and customize these variables for key global options in our `_variables.scss` file.

| Variable                    | Values                             | Description                                                                            |
| --------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------- |
| `$spacer`                   | `1rem` (default), or any value > 0 | Specifies the default spacer value to programmatically generate our [spacer utilities](/utilities/spacing/). |
| `$enable-rounded`           | `true` (default) or `false`        | Enables predefined `border-radius` styles on various components.                       |
| `$enable-shadows`           | `true` or `false` (default)        | Enables predefined `box-shadow` styles on various components.                          |
| `$enable-gradients`         | `true` or `false` (default)        | Enables predefined gradients via `background-image` styles on various components.      |
| `$enable-transitions`       | `true` (default) or `false`        | Enables predefined `transition`s on various components.                                |
| `$enable-hover-media-query` | `true` or `false` (default)        | ...                                                                                    |
| `$enable-grid-classes`      | `true` (default) or `false`        | Enables the generation of CSS classes for the grid system (e.g., `.container`, `.row`, `.col-md-1`, etc.).     |
| `$enable-print-styles`      | `true` (default) or `false`        | Enables styles for optimizing printing.                                |
| `$athena-font-path`         | '../fonts/' (default)              | Modifies the relative path where fallback font files are stored. Note that this path is relative to the _compiled css directory_. |
