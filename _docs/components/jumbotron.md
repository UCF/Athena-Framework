---
layout: docs
title: Jumbotron
description: Lightweight, flexible component for showcasing hero unit style content.
tags: components
---

A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.

## Example

{% example html %}
<div class="jumbotron">
  <h1 class="display-3">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
{% endexample %}

To make the jumbotron full width, add the `.jumbotron-fluid` modifier class and add a `.container` or `.container-fluid` within.

{% example html %}
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-3">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
{% endexample %}

Jumbotrons work great with many of Athena's utility classes. For instance, [text color]({{ '/utilities/colors' | url }}#text-color"), [background color]({{ '/utilities/colors' | url }}#background-colors), and [media background]({{ '/utilities/media-backgrounds' | url }}) utilities allow for quick and easy jumbotron customizations:

{% example html %}
<div class="jumbotron jumbotron-fluid bg-primary">
  <div class="container">
    <h1 class="display-3">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
<div class="jumbotron jumbotron-fluid bg-inverse text-primary">
  <div class="container">
    <h1 class="display-3">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
<div class="jumbotron jumbotron-fluid media-background-container">
  <img class="media-background object-fit-cover" src="//via.placeholder.com/800x400" alt="">
  <div class="container">
    <h1 class="display-3">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
{% endexample %}
