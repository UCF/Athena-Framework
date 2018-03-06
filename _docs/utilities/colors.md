---
layout: docs
title: Colors
group: utilities
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Text colors

Style text with brand-specific colors with a handful of emphasis utility classes. These may also be applied to links and will darken on hover just like our default link styles.

{% callout warning %}
### Color contrast

Keep in mind that most of Athena's text utilities do _not_ meet WCAG 2.0 AA color contrast requirements against white or other light backgrounds.  If you're looking to apply color to text against a white background, please use our [accessible-over-white utility classes](#accessible-over-white-colors).
{% endcallout %}

{% example html %}
<p class="text-default">Etiam porta sem malesuada ultricies vehicula.</p>
<p class="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
<p class="text-secondary">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-complementary">Etiam porta sem malesuada ultricies vehicula.</p>
<p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
<p class="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
<p class="text-inverse">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-muted">Etiam porta sem malesuada ultricies vehicula.</p>
<p class="text-white">Etiam porta sem malesuada magna mollis euismod.</p>
{% endexample %}

### Extended brand colors

Athena provides an extended set of color utility classes, listed below:

{% example html %}
<p class="text-primary-darkest">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
<p class="text-primary-darker">Etiam porta sem malesuada ultricies vehicula.</p>
<p class="text-primary-lighter">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
<p class="text-primary-lightest">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-metallic-darkest">Etiam porta sem malesuada ultricies vehicula.</p>
<p class="text-metallic-darker">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
<p class="text-metallic">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
<p class="text-metallic-lighter">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-metallic-lightest">Donec ullamcorper nulla non metus auctor fringilla.</p>
{% endexample %}

### Accessible-over-white colors

Athena also provides a unique set of text color classes, using the `-aw` suffix, that are specifically intended for text used over white backgrounds for adequate contrast:

{% example html %}
<p class="text-default-aw">Etiam porta sem malesuada ultricies vehicula.</p>
<p class="text-primary-aw">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
<p class="text-secondary-aw">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-complementary-aw">Etiam porta sem malesuada ultricies vehicula.</p>
<p class="text-success-aw">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
<p class="text-info-aw">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
<p class="text-warning-aw">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-danger-aw">Donec ullamcorper nulla non metus auctor fringilla.</p>
<p class="text-inverse-aw">Etiam porta sem malesuada magna mollis euismod.</p>
{% endexample %}

### On links

Contextual text classes also work well on anchors with the provided hover and focus states.

{% example html %}
<a href="#" class="text-default">Default color link</a>
<a href="#" class="text-primary">Primary link</a>
<a href="#" class="text-secondary">Secondary link</a>
<a href="#" class="text-complementary">Complementary link</a>
<a href="#" class="text-success">Success link</a>
<a href="#" class="text-info">Info link</a>
<a href="#" class="text-warning">Warning link</a>
<a href="#" class="text-danger">Danger link</a>
<a href="#" class="text-inverse">Inverse link</a>
<a href="#" class="text-muted">Muted link</a>
<a href="#" class="text-white">White link</a>
{% endexample %}


## Background colors

Similar to the contextual text color classes, easily set the background of an element to any contextual class.

Note that Athena's background utilities **do set text `color`**, so `.text-*` utilities are not required for accessible text contrast out-of-the-box. However, link colors are still opt-in with `.bg-<color>-link` utilities, so that we don't override stylized link components (such as buttons) unintentionally.

Note that `.bg-secondary` and `.bg-faded` do _not_ have their own custom link color class.

{% example html %}
<div class="bg-default">
  Donec ullamcorper nulla non metus auctor fringilla.
  <a class="bg-default-link" href="#">Styled link.</a>
</div>
<div class="bg-primary">
  Nullam id dolor id nibh ultricies vehicula ut id elit.
  <a class="bg-primary-link" href="#">Styled link.</a>
</div>
<div class="bg-secondary">
  Donec ullamcorper nulla non metus auctor fringilla.
  <a href="#">Unstyled link.</a>
</div>
<div class="bg-complementary">
  Cras mattis consectetur purus sit amet fermentum.
  <a class="bg-complementary-link" href="#">Styled link.</a>
</div>
<div class="bg-success">
  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  <a class="bg-success-link" href="#">Styled link.</a>
</div>
<div class="bg-info">
  Maecenas sed diam eget risus varius blandit sit amet non magna.
  <a class="bg-info-link" href="#">Styled link.</a>
</div>
<div class="bg-warning">
  Etiam porta sem malesuada magna mollis euismod.
  <a class="bg-warning-link" href="#">Styled link.</a>
</div>
<div class="bg-danger">
  Donec ullamcorper nulla non metus auctor fringilla.
  <a class="bg-danger-link" href="#">Styled link.</a>
</div>
<div class="bg-inverse">
  Cras mattis consectetur purus sit amet fermentum.
  <a class="bg-inverse-link" href="#">Styled link.</a>
</div>
<div class="bg-faded">
  Cras mattis consectetur purus sit amet fermentum.
  <a href="#">Unstyled link.</a>
</div>
{% endexample %}

### Extended colors

Like with text colors, an extended set of background utility colors is available in Athena:

{% example html %}
<div class="bg-primary-darkest">
  Donec ullamcorper nulla non metus auctor fringilla.
  <a class="bg-primary-darkest-link" href="#">Styled link.</a>
</div>
<div class="bg-primary-darker">
  Nullam id dolor id nibh ultricies vehicula ut id elit.
  <a class="bg-primary-darker-link" href="#">Styled link.</a>
</div>
<div class="bg-primary-lighter">
  Donec ullamcorper nulla non metus auctor fringilla.
  <a class="bg-primary-lighter-link" href="#">Styled link.</a>
</div>
<div class="bg-primary-lightest">
  Cras mattis consectetur purus sit amet fermentum.
  <a class="bg-primary-lightest-link" href="#">Styled link.</a>
</div>
<div class="bg-metallic-darkest">
  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  <a class="bg-metallic-darkest-link" href="#">Styled link.</a>
</div>
<div class="bg-metallic-darker">
  Maecenas sed diam eget risus varius blandit sit amet non magna.
  <a class="bg-metallic-darker-link" href="#">Styled link.</a>
</div>
<div class="bg-metallic">
  Etiam porta sem malesuada magna mollis euismod.
  <a class="bg-metallic-link" href="#">Styled link.</a>
</div>
<div class="bg-metallic-lighter">
  Donec ullamcorper nulla non metus auctor fringilla.
  <a class="bg-metallic-lighter-link" href="#">Styled link.</a>
</div>
<div class="bg-metallic-lightest">
  Cras mattis consectetur purus sit amet fermentum.
  <a class="bg-metallic-lightest-link" href="#">Styled link.</a>
</div>
{% endexample %}

### Transparent variants

Add the `-t-<level>` suffix to pretty much any background utility class to create a semi-transparent version of that background color.

The available transparency levels are adjustable via the `$bg-transparencies` Sass variable; by default, `-t-1`, `-t-2`, and `-t-3` suffixes are available.

Note that transparent variants are not available for `.bg-faded`.

<div class="bg-inverse p-4">
  <div class="bg-primary p-2 mb-3">
    Nullam id dolor id nibh ultricies vehicula ut id elit.
    <a class="bg-primary-link" href="#">Styled Link.</a>
  </div>
  <div class="bg-primary-t-1 p-2 mb-3">
    Nullam id dolor id nibh ultricies vehicula ut id elit.
    <a class="bg-primary-link" href="#">Styled Link.</a>
  </div>
  <div class="bg-primary-t-2 p-2 mb-3">
    Nullam id dolor id nibh ultricies vehicula ut id elit.
    <a class="bg-primary-link" href="#">Styled Link.</a>
  </div>
  <div class="bg-primary-t-3 p-2">
    Nullam id dolor id nibh ultricies vehicula ut id elit.
    <a class="bg-primary-link" href="#">Styled Link.</a>
  </div>
</div>

{% highlight html %}
<div class="bg-primary">
  Nullam id dolor id nibh ultricies vehicula ut id elit.
  <a class="bg-primary-link" href="#">Styled Link.</a>
</div>
<div class="bg-primary-t-1">
  Nullam id dolor id nibh ultricies vehicula ut id elit.
  <a class="bg-primary-link" href="#">Styled Link.</a>
</div>
<div class="bg-primary-t-2">
  Nullam id dolor id nibh ultricies vehicula ut id elit.
  <a class="bg-primary-link" href="#">Styled Link.</a>
</div>
<div class="bg-primary-t-3">
  Nullam id dolor id nibh ultricies vehicula ut id elit.
  <a class="bg-primary-link" href="#">Styled Link.</a>
</div>
{% endhighlight %}

{% callout info %}
#### Dealing with specificity

Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element's content in a `<div>` with the class.
{% endcallout %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}
