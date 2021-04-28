---
layout: docs
title: Typography
tags: utilities
---

The following utilities can be used to add additional styles to text.


## Contents

{:toc}


## Text alignment

Easily realign text to components with text alignment classes.

{% example html %}
<p class="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
{% endexample %}

{% example html %}
<div class="card w-50">
  <div class="card-block text-nowrap">
    Curabitur blandit tempus ardua ridiculus sed magna.
  </div>
</div>
{% endexample %}

For left, right, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.

{% example html %}
<p class="text-left">Left aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-right">Right aligned text on all viewport sizes.</p>

<p class="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p>
{% endexample %}


## Text transform

Transform text in components with text capitalization classes.

{% example html %}
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
<p class="text-uppercase"><span class="text-transform-none">Reset transform text.</span></p>
{% endexample %}

Note how `text-capitalize` only changes the first letter of each word, leaving the case of any other letters unaffected.


## Font weight and italics

Quickly change the weight (boldness) of text or italicize text.

Note that `.font-weight-black` and `.font-weight-light` will only take effect on font stacks that provide those explicit weight styles.

{% example html %}
<p class="font-weight-black">Black weight text.</p>
<p class="font-weight-bold">Bold text.</p>
<p class="font-weight-normal">Normal weight text.</p>
<p class="font-weight-light">Light weight text.</p>
<p class="font-italic">Italic text.</p>
{% endexample %}


## Font family

Use `font-family` utility classes to quickly change the font family on an element.  These classes are optimized for use with [headings]({{ '/content/typography' | url }}#with-font-family-overrides), [`.lead` text]({{ '/content/typography' | url }}#with-font-family-overrides-1), and [`.blockquote` text]({{ '/content/typography' | url }}#with-font-family-overrides-2).

Note that `.font-condensed` is only optimized for heading usage due to readability concerns.

{% example html %}
<p class="font-sans-serif">Sans serif</p>
<p class="font-serif">Serif</p>
<p class="font-slab-serif">Slab serif</p>
<p class="font-condensed">Condensed</p>
{% endexample %}


## Letter spacing

Athena includes a set of letter spacing classes, which can be modified via the `$letter-spacing` Sass variable.

{% example html %}
<p class="text-uppercase letter-spacing-0">Ambitioni dedisse scripsisse iudicaretur</p>
<p class="text-uppercase letter-spacing-1">Ambitioni dedisse scripsisse iudicaretur</p>
<p class="text-uppercase letter-spacing-2">Ambitioni dedisse scripsisse iudicaretur</p>
<p class="text-uppercase letter-spacing-3">Ambitioni dedisse scripsisse iudicaretur</p>
<p class="text-uppercase letter-spacing-4">Ambitioni dedisse scripsisse iudicaretur</p>
<p class="text-uppercase letter-spacing-5">Ambitioni dedisse scripsisse iudicaretur</p>
{% endexample %}


## Line height

Adjust line height on the fly with line height classes.  Available classes and their line-height values can be modified via the `$line-height` Sass variable.

{% example html %}
<p class="line-height-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin congue dictum. Fusce a turpis non libero euismod blandit. Cras porta ipsum vel massa faucibus pulvinar.
</p>
<p class="line-height-1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin congue dictum. Fusce a turpis non libero euismod blandit. Cras porta ipsum vel massa faucibus pulvinar.
</p>
<p class="line-height-2">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin congue dictum. Fusce a turpis non libero euismod blandit. Cras porta ipsum vel massa faucibus pulvinar.
</p>
<p class="line-height-3">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin congue dictum. Fusce a turpis non libero euismod blandit. Cras porta ipsum vel massa faucibus pulvinar.
</p>
<p class="line-height-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin congue dictum. Fusce a turpis non libero euismod blandit. Cras porta ipsum vel massa faucibus pulvinar.
</p>
<p class="line-height-5">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin congue dictum. Fusce a turpis non libero euismod blandit. Cras porta ipsum vel massa faucibus pulvinar.
</p>
<p class="line-height-6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin congue dictum. Fusce a turpis non libero euismod blandit. Cras porta ipsum vel massa faucibus pulvinar.
</p>
{% endexample %}
