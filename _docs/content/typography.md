---
layout: docs
title: Typography
description: Documentation and examples for Athena typography, including global settings, headings, body text, lists, and more.
tags: content
---

Athena includes simple and easily customized typography for headings, body text, lists, and more. When more control is needed, check out the [textual utility classes]({{ '/utilities/typography' | url }}).


## Contents

{:toc}


## Global settings

Athena sets basic global display, typography, and link styles. Specifically, we:

- Use an [opinionated font stack]({{ '/content/resets' | url }}#font-stack) that sets UCF's preferred sans-serif font stack globally.
- For a more inclusive and accessible type scale, we assume the browser default root `font-size` (typically 16px) so visitors can customize their browser defaults as needed.
- Use the `$font-family-base`, `$font-size-base`, `$font-size-base-md`, and `$line-height-base` attributes as our typographic base applied to the `<body>`.
- Set the global link color via `$link-color` and apply link underlines only on `:hover`.
- Use `$body-bg` to set a `background-color` on the `<body>` (`#fff` by default).

These styles can be found in both Bootstrap's `_reboot.scss` and Athena's `type.scss`.


## Headings

All HTML headings, `<h1>` through `<h6>`, are available.

<div class="afd-example afd-example-type">
  <table class="table">
    <tbody>
      <tr>
        <td><h1>h1. Bootstrap heading</h1></td>
        <td class="type-info">Semibold 2.5rem (40px)</td>
      </tr>
      <tr>
        <td><h2>h2. Bootstrap heading</h2></td>
        <td class="type-info">Semibold 2rem (32px)</td>
      </tr>
      <tr>
        <td><h3>h3. Bootstrap heading</h3></td>
        <td class="type-info">Semibold 1.75rem (28px)</td>
      </tr>
      <tr>
        <td><h4>h4. Bootstrap heading</h4></td>
        <td class="type-info">Semibold 1.5rem (24px)</td>
      </tr>
      <tr>
        <td><h5>h5. Bootstrap heading</h5></td>
        <td class="type-info">Semibold 1.25rem (20px)</td>
      </tr>
      <tr>
        <td><h6>h6. Bootstrap heading</h6></td>
        <td class="type-info">Semibold 1rem (16px)</td>
      </tr>
    </tbody>
  </table>
</div>

{% highlight 'html' %}
<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>
{% endhighlight %}

`.h1` through `.h6` classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.

{% example html %}
<p class="h1">h1. Bootstrap heading</p>
<p class="h2">h2. Bootstrap heading</p>
<p class="h3">h3. Bootstrap heading</p>
<p class="h4">h4. Bootstrap heading</p>
<p class="h5">h5. Bootstrap heading</p>
<p class="h6">h6. Bootstrap heading</p>
{% endexample %}

### Customizing headings

Use the included utility classes to recreate the small secondary heading text from Bootstrap 3.

{% example html %}
<h3>
  Fancy display heading
  <small class="text-muted">With faded secondary text</small>
</h3>
{% endexample %}

### With font family overrides

When combined with [font family utility classes]({{ '/utilities/typography' | url }}#font-family), heading font sizes are adjusted slightly to help achieve balance of size between each available font family.

<div class="afd-example afd-example-type">
  <table class="table">
    <tbody>
      <tr>
        <td>
          <h1 class="font-serif">Heading 1</h1>
          <h2 class="font-serif">Heading 2</h2>
          <h3 class="font-serif">Heading 3</h3>
          <h4 class="font-serif">Heading 4</h4>
          <h5 class="font-serif">Heading 5</h5>
          <h6 class="font-serif">Heading 6</h6>
        </td>
      </tr>
      <tr>
      <td>
        <h1 class="font-slab-serif">Heading 1</h1>
        <h2 class="font-slab-serif">Heading 2</h2>
        <h3 class="font-slab-serif">Heading 3</h3>
        <h4 class="font-slab-serif">Heading 4</h4>
        <h5 class="font-slab-serif">Heading 5</h5>
        <h6 class="font-slab-serif">Heading 6</h6>
      </td>
      </tr>
      <tr>
      <td>
        <h1 class="font-condensed">Heading 1</h1>
        <h2 class="font-condensed">Heading 2</h2>
        <h3 class="font-condensed">Heading 3</h3>
        <h4 class="font-condensed">Heading 4</h4>
        <h5 class="font-condensed">Heading 5</h5>
        <h6 class="font-condensed">Heading 6</h6>
      </td>
      </tr>
    </tbody>
  </table>
</div>

{% highlight 'html' %}
<h1 class="font-serif">Heading 1</h1>
<h2 class="font-serif">Heading 2</h2>
<h3 class="font-serif">Heading 3</h3>
<h4 class="font-serif">Heading 4</h4>
<h5 class="font-serif">Heading 5</h5>
<h6 class="font-serif">Heading 6</h6>

<h1 class="font-slab-serif">Heading 1</h1>
<h2 class="font-slab-serif">Heading 2</h2>
<h3 class="font-slab-serif">Heading 3</h3>
<h4 class="font-slab-serif">Heading 4</h4>
<h5 class="font-slab-serif">Heading 5</h5>
<h6 class="font-slab-serif">Heading 6</h6>

<h1 class="font-condensed">Heading 1</h1>
<h2 class="font-condensed">Heading 2</h2>
<h3 class="font-condensed">Heading 3</h3>
<h4 class="font-condensed">Heading 4</h4>
<h5 class="font-condensed">Heading 5</h5>
<h6 class="font-condensed">Heading 6</h6>
{% endhighlight %}

### Display headings

Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a **display heading**—a larger, slightly more opinionated heading style.

Display headings use fluid font sizing (`vw` units) at the `-xs` breakpoint to ensure they scale to fit smaller screens while staying as large as possible.

<div class="afd-example afd-example-type">
  <table class="table">
    <tbody>
      <tr>
        <td><span class="display-1">Display 1</span></td>
      </tr>
      <tr>
      <td><span class="display-2">Display 2</span></td>
      </tr>
      <tr>
      <td><span class="display-3">Display 3</span></td>
      </tr>
      <tr>
      <td><span class="display-4">Display 4</span></td>
      </tr>
    </tbody>
  </table>
</div>

{% highlight 'html' %}
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
{% endhighlight %}

### Underline headings

Applies a stylized partial underline to a heading. Available in two styles: gold (`.heading-underline`) and white, for use against gold backgrounds (`.heading-underline-inverse`).

Note that this class is opinionated and forces some specific styles, including a sans-serif font family, uppercase text, and block-level display.

{% example html %}
<h2 class="heading-underline">Heading 2</h2>
<div class="bg-primary mt-4 p-2">
  <h2 class="heading-underline-inverse">Heading 2</h2>
</div>
{% endexample %}


## Lead

Make a paragraph stand out by adding `.lead`.

{% example html %}
<p class="lead">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>
{% endexample %}

### With font family overrides

When combined with [font family utility classes]({{ '/utilities/typography' | url }}#font-family), lead text font sizes are adjusted slightly to help achieve balance of size between each available font family. Note that `.font-condensed` is _not_ a supported font family with `.lead` due to readability issues.

{% example html %}
<p class="lead font-serif">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>
<p class="lead font-slab-serif">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>
{% endexample %}


## Inline text elements

Styling for common inline HTML5 elements.

{% example html %}
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
{% endexample %}

`.mark` and `.small` classes are also available to apply the same styles as `<mark>` and `<small>` while avoiding any unwanted semantic implications that the tags would bring.


## Text utilities

Change text alignment, transform, style, weight, and color with our [text utilities]({{ '/utilities/typography' | url }}#text-alignment).


## Abbreviations

Stylized implementation of HTML's `<abbr>` element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.

Add `.initialism` to an abbreviation for a slightly smaller font-size.

{% example html %}
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
{% endexample %}


## Blockquotes

For quoting blocks of content from another source within your document. Wrap `<blockquote class="blockquote">` around any <abbr title="HyperText Markup Language">HTML</abbr> as the quote.

{% example html %}
<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
{% endexample %}

### With font family overrides
When combined with [font family utility classes]({{ '/utilities/typography' | url }}#font-family), blockquote font sizes are adjusted slightly to help achieve balance of size between each available font family. Note that `.font-condensed` is _not_ a supported font family with `.blockquote` due to readability issues.

{% example html %}
<blockquote class="blockquote font-serif">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
<blockquote class="blockquote font-slab-serif">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
{% endexample %}

### Naming a source

Add a `<footer class="blockquote-footer">` for identifying the source. Wrap the name of the source work in `<cite>`.

{% example html %}
<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endexample %}

### Reverse layout

Add `.blockquote-reverse` for a blockquote with right-aligned content.

{% example html %}
<blockquote class="blockquote blockquote-reverse">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endexample %}

### Stylized quotation blockquotes
Apply a large blockquote icon to the left of a blockquote using `.blockquote-quotation` or `.blockquote-quotation-inverse`.  Available in two styles: gold (`.blockquote-quotation`) and white, for use against gold backgrounds (`.blockquote-quotation-inverse`).

{% example html %}
<blockquote class="blockquote blockquote-quotation">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
<blockquote class="blockquote blockquote-reverse blockquote-quotation">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>

<div class="bg-primary mt-4 p-2">
  <blockquote class="blockquote blockquote-quotation-inverse">
    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
  <blockquote class="blockquote blockquote-reverse blockquote-quotation-inverse">
    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
</div>
{% endexample %}


## Lists

### Unstyled

Remove the default `list-style` and left margin on list items (immediate children only). **This only applies to immediate children list items**, meaning you will need to add the class for any nested lists as well.

{% example html %}
<ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
{% endexample %}

### Inline

Remove a list's bullets and apply some light `margin` with a combination of two classes, `.list-inline` and `.list-inline-item`.

{% example html %}
<ul class="list-inline">
  <li class="list-inline-item">Lorem ipsum</li>
  <li class="list-inline-item">Phasellus iaculis</li>
  <li class="list-inline-item">Nulla volutpat</li>
</ul>
{% endexample %}

### Description list alignment

Align terms and descriptions horizontally by using our grid system's predefined classes (or semantic mixins). For longer terms, you can optionally add a `.text-truncate` class to truncate the text with an ellipsis.

{% example html %}
<dl class="row">
  <dt class="col-sm-3">Description lists</dt>
  <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

  <dt class="col-sm-3">Euismod</dt>
  <dd class="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
  <dd class="col-sm-9 offset-sm-3">Donec id elit non mi porta gravida at eget metus.</dd>

  <dt class="col-sm-3">Malesuada porta</dt>
  <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

  <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
  <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

  <dt class="col-sm-3">Nesting</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
    </dl>
  </dd>
</dl>
{% endexample %}


## Responsive typography

We do _not_ recommend using a [responsive typography](https://v4-alpha.getbootstrap.com/content/typography/#responsive-typography) technique with Athena-based projects, since Athena attempts to define any breakpoint-specific overrides per-element/component using `rem`s.
