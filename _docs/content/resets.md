---
layout: docs
title: Resets
description: Athena includes various cross-browser style resets to provide an elegant, consistent, and simple baseline to build upon.
tags: content
---

Part of Athena's job is to provide an elegant, consistent, and simple baseline to build upon. We use a combination of our own opinionated resets and [Bootstrap's Reboot](https://v4-alpha.getbootstrap.com/content/reboot/), a collection of element-specific CSS changes in a single file, to kickstart that.

Reboot builds upon [Normalize](https://necolas.github.io/normalize.css/), providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, we reboot some `<table>` styles for a simpler baseline and later provide `.table`, `.table-bordered`, and more.


## Contents

{:toc}


## Approach

Listed below are guidelines and reasons for resetting element styles in Athena:

- Update some browser default values to use `rem`s instead of `em`s for scalable component spacing.
- Avoid `margin-top`. Vertical margins can collapse, yielding unexpected results. More importantly though, a single direction of `margin` is a simpler mental model.
- For easier scaling across device sizes, block elements should use `rem`s for `margin`s.
- Keep declarations of `font`-related properties to a minimum, using `inherit` whenever possible.


## Page defaults

The `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:

- The `box-sizing` is globally set on every element—including `*:before` and `*:after`, to `border-box`. This ensures that the declared width of element is never exceeded due to padding or border.
- No base `font-size` is declared on the `<html>`, but `16px` is assumed (the browser default).
  - Note that Athena applies different font sizes on `<body>` at different breakpoints: `.875rem` by default, and `1rem` at the `-md` breakpoint and up. Font size adjustments are applied on the `<body>` using `rem` units for easy responsive type-scaling via media queries while respecting user preferences and ensuring a more accessible approach.
  - Athena intentionally does not utilize or recommend a [responsive typography](https://v4-alpha.getbootstrap.com/content/typography/#responsive-typography) approach due to the need for fine-tuned font size customizations across the framework, and the fact that this method makes browser-level font size adjustments less flexible.
- The `<body>` also sets a global `font-family` and `line-height`. This is inherited later by some form elements to prevent font inconsistencies.
- For safety, the `<body>` has a declared `background-color`, defaulting to `#fff`.
- Global `<a>` and `<button>` transitions are applied when $enable-transitions is true.


## Font stack

Unlike Bootstrap 4, Athena provides an opinionated font stack and does not rely on system fonts unless no other font libraries can be loaded. Athena's base font family is its sans-serif stack:

{% highlight 'scss' %}
$font-family-sans-serif: 'UCF Sans Serif Alt', 'Helvetica Neue', Arial, sans-serif;
{% endhighlight %}

This `font-family` is applied to the `<body>` and automatically inherited globally throughout Athena.


## Headings and paragraphs

All heading elements—e.g., `<h1>`—and `<p>` are reset to have their `margin-top` removed. Headings have `margin-bottom: .5rem` added and paragraphs `margin-bottom: 1rem` for easy spacing.

Like with the base `<body>` font size, all headings increase in size at the `-md` breakpoint in Athena.

{% example %}
<h1>h1 heading</h1>
<p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>

<h2>h2 heading</h2>
<p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>

<h3>h3 heading</h3>
<p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>

<h4>h4 heading</h4>
<p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>

<h5>h5 heading</h5>
<p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>

<h6>h6 heading</h6>
<p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
{% endexample %}


## Lists

All lists—`<ul>`, `<ol>`, and `<dl>`—have their `margin-top` removed and a `margin-bottom: 1rem`. Nested lists have no `margin-bottom`.

{% example %}
<ul>
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

<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit</li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ol>
{% endexample %}

For simpler styling, clear hierarchy, and better spacing, description lists have updated `margin`s. `<dd>`s reset `margin-left` to `0` and add `margin-bottom: .5rem`. `<dt>`s are **bolded**.

{% example %}
<dl>
  <dt>Description lists</dt>
  <dd>A description list is perfect for defining terms.</dd>
  <dt>Euismod</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem.</dd>
  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
  <dt>Malesuada porta</dt>
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
</dl>
{% endexample %}


## Preformatted text

The `<pre>` element is reset to remove its `margin-top` and use `rem` units for its `margin-bottom`.

{% example %}
<pre>
.example-element {
  margin-bottom: 1rem;
}
</pre>
{% endexample %}


## Tables

Tables are slightly adjusted to style `<caption>`s, collapse borders, and ensure consistent `text-align` throughout. Additional changes for borders, padding, and more come with [the `.table` class]({{ '/content/tables' | url }}).

<div class="afd-example">
  <table>
    <caption>
      This is an example table, and this is its caption to describe the contents.
    </caption>
    <thead>
      <tr>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </table>
</div>


## Forms

Various form elements have been rebooted for simpler base styles. Here are some of the most notable changes:

- `<fieldset>`s have no borders, padding, or margin so they can be easily used as wrappers for individual inputs or groups of inputs.
- `<legend>`s, like fieldsets, have also been restyled to be displayed as a heading of sorts.
- `<label>`s are set to `display: inline-block` to allow `margin` to be applied.
- `<input>`s, `<select>`s, `<textarea>`s, and `<button>`s are mostly addressed by Normalize, but Reboot removes their `margin` and sets `line-height: inherit`, too.
- `<textarea>`s are modified to only be resizable vertically as horizontal resizing often "breaks" page layout.
- `<button>`s, `<input>`s, `<optgroup>`s, `<select>`s, and `<textarea>`s have `$font-family-base` explicitly applied to them in Athena.

These changes, and more, are demonstrated below.

<form class="afd-example">
  <fieldset>
    <legend>Example legend</legend>

    <p>
      <label for="input">Example input</label>
      <input type="text" id="input" placeholder="Example input">
    </p>

    <p>
      <label for="select">Example select</label>
      <select id="select">
        <option value="">Choose...</option>
        <optgroup label="Option group 1">
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </optgroup>
        <optgroup label="Option group 2">
          <option value="">Option 4</option>
          <option value="">Option 5</option>
          <option value="">Option 6</option>
        </optgroup>
      </select>
    </p>

    <p>
      <label>
        <input type="checkbox" value="">
        Check this checkbox
      </label>
    </p>

    <p>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
        Option one is this and that
      </label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
        Option two is something else that's also super long to demonstrate the wrapping of these fancy form controls.
      </label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
        Option three is disabled
      </label>
    </p>

    <p>
      <label for="textarea">Example textarea</label>
      <textarea id="textarea" rows="3"></textarea>
    </p>

    <p>
      <label for="time">Example temporal</label>
      <input type="datetime-local" id="time">
    </p>

    <p>
      <label for="output">Example output</label>
      <output name="result" id="output">100</output>
    </p>

    <p>
      <button type="submit">Button submit</button>
      <input type="submit" value="Input submit button">
      <input type="button" value="Input button">
    </p>

    <p>
      <button type="submit" disabled>Button submit</button>
      <input type="submit" value="Input submit button" disabled>
      <input type="button" value="Input button" disabled>
    </p>
  </fieldset>
</form>


## Misc elements

### Address

The `<address>` element is updated to reset the browser default `font-style` from `italic` to `normal`. `line-height` is also now inherited, and `margin-bottom: 1rem` has been added. `<address>`s are for presenting contact information for the nearest ancestor (or an entire body of work). Preserve formatting by ending lines with `<br>`.

<div class="afd-example">
  <address>
    <strong>Twitter, Inc.</strong><br>
    1355 Market St, Suite 900<br>
    San Francisco, CA 94103<br>
    <abbr title="Phone">P:</abbr> (123) 456-7890
  </address>

  <address>
    <strong>Full Name</strong><br>
    <a href="mailto:#">first.last@example.com</a>
  </address>
</div>

### Blockquote

The default `margin` on blockquotes is `1em 40px`, so we reset that to `0 0 1rem` for something more consistent with other elements.

`<cite>` elements have forced unitalicized text in Athena.

<div class="afd-example">
  <blockquote class="blockquote">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
</div>

### Inline elements

The `<abbr>` element receives basic styling to make it stand out amongst paragraph text.

<div class="afd-example">
  Nulla <abbr title="attribute">attr</abbr> vitae elit libero, a pharetra augue.
</div>

## HTML5 `[hidden]` attribute

HTML5 adds [a new global attribute named `[hidden]`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden), which is styled as `display: none` by default. Borrowing an idea from [PureCSS](https://purecss.io), we improve upon this default by making `[hidden] { display: none !important; }` to help prevent its `display` from getting accidentally overridden.

{% highlight 'html' %}
<input type="text" hidden>
{% endhighlight %}

{% callout 'warning' %}
#### jQuery incompatibility

`[hidden]` is not compatible with jQuery's `$(...).hide()` and `$(...).show()` methods. Therefore, we don't currently especially endorse `[hidden]` over other techniques for managing the `display` of elements.
{% endcallout %}

To merely toggle the visibility of an element, meaning its `display` is not modified and the element can still affect the flow of the document, use [the `.invisible` class]({{ '/utilities/visibility-property' | url }}) instead.
