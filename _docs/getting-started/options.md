---
layout: docs
title: Customization options
description: Customize Athena with Sass variables, easily toggling global preferences with a quick recompile.
tags: getting-started
---

Customize Athena's CSS with Sass variables, easily toggling global preferences with a quick recompile.

## Customizing variables

Unlike Bootstrap 4, Athena doesn't provide a `_custom.scss` file; instead, Athena's source files are expected to be included into projects that require manual builds using [properly-ordered .scss and .js file imports]({{ '/getting-started/build-tools' | url }}).

To apply your own custom overrides to Athena, copy and paste relevant lines from Athena's `_variables.scss` into your project's unique `_variables.scss` file, modify the values, and recompile your Sass to change our default values. **Be sure to remove the `!default` flag from override values.**

For example, to change out the `background-color` and `color` for the `<body>`, you'd do the following:

{% highlight 'scss' %}
// my-project's _variables.scss

$body-bg:    $gray-dark;
$body-color: $gray-light;
{% endhighlight %}

Do the same for any variable you need to override, including the global options listed below.

Note that Athena provides other additional variables not provided by Bootstrap.  See Athena's `_variables.scss` for the full list of variables; any variables unique to Athena will be marked with a `custom` comment.

## Global options

While Athena utilizes most of the global Sass options [inherited from Bootstrap](https://v4-alpha.getbootstrap.com/getting-started/options/#global-options), you shouldn't need to change them--they are already configured to build components and utilities that best reflect UCF's brand.

Global options that we recommend reviewing/editing on a per-project basis are noted below:

| Variable                    | Values                             | Description                                                                            |
| --------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------- |
| `$athena-font-path`         | '../fonts/' (default)              | Modifies the relative path where fallback font files are stored. Note that this path is relative to the _compiled css directory_. |

