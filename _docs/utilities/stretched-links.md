---
layout: docs
title: Stretched Links
description: Make whole HTML elements and components clickable by "stretching" a nested link with Athena's stretched link utility.
tags: utilities
---

Stretched links are a screenreader-friendly alternative to wrapping entire components or chunks of content in a link for the sake of making everything clickable.

Add `.stretched-link` to a link to make its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block) clickable via a `::after` pseudo element. In most cases, this means that an element with `position: relative;` that contains a link with the `.stretched-link` class is clickable. Please note that given [how CSS `position` works](https://www.w3.org/TR/CSS21/visuren.html#propdef-position), `.stretched-link` cannot be mixed with most table elements.

Multiple links and tap targets are not recommended with stretched links. However, some `position` and `z-index` styles can help should this be required.


## Contents

{:toc}


## Examples

### Cards
Cards have `position: relative` by default in Athena, so in this case you can safely add the `.stretched-link` class to a link in the card without any other HTML changes.

{% example html %}
<div class="card" style="width: 18rem;">
    <img src="//via.placeholder.com/250x150/" class="card-img-top" alt="">
    <div class="card-block">
        <strong class="card-title d-block">Card with stretched link</strong>
        <p class="card-text">
            This entire card should be clickable thanks to the stretched link below.
        </p>
        <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
    </div>
</div>
{% endexample %}

### With rows and columns
Note that columns have `position: relative` by default in Athena, so a stretched link included within a column will be limited to stretching within that column (assuming the link isn't additionally wrapped in another containing block).

To make an entire component containing rows/columns clickable, the column(s) containing the stretched link will need their `position` to be reset to `static`, and the desired top-most element in the component should be made the containing block (e.g. by using the [`.position-relative` utility class]({{ '/utilities/position/' | url }}).

{% example html %}
<div class="row mt-4 position-relative">
    <div class="col-3">
        <img src="//via.placeholder.com/250x150/" class="img-fluid" alt="">
    </div>
    <div class="col-9 position-static">
        <strong class="d-block mb-2">
            <a href="#" class="stretched-link">Columns with stretched link</a>
        </strong>
        <p>
            In this example, all content within the row is clickable because we've manually adjusted <code>position</code> on the outer row and inner column containing the link.
        </p>
    </div>
</div>
{% endexample %}


## Identifying the containing block
If the stretched link doesn’t seem to work, the [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block) will probably be the cause. The following CSS properties will make an element the containing block:

<ul>
    <li>A <code>position</code> value other than <code>static</code></li>
    <li>A <code>transform</code> or <code>perspective</code> value other than <code>none</code></li>
    <li>A <code>will-change</code> value of <code>transform</code> or <code>perspective</code></li>
    <li>A <code>filter</code> value other than <code>none</code> or a <code>will-change</code> value of <code>filter</code> (only works on Firefox)</li>
</ul>

{% example html %}
<div class="card" style="width: 18rem;">
    <img src="//via.placeholder.com/250x150/" class="card-img-top" alt="">
    <div class="card-block">
        <strong class="card-title">Card with stretched links</strong>
        <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <p class="card-text">
            <a href="#" class="stretched-link text-danger" style="position: relative;">
                Stretched link will not work here, because <code>position: relative</code> is added to the link
            </a>
        </p>
        <p class="card-text bg-faded" style="transform: rotate(0);">
            This <a href="#" class="text-warning stretched-link">stretched link</a> will not spread because a transform is applied to the parent <code>&lt;p&gt;</code>.
        </p>
    </div>
</div>
{% endexample %}

