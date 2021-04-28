---
layout: docs
title: Sizing
tags: utilities
---

Easily make an element as wide or as tall (relative to its parent) with our width and height utilities. Includes support for `25%`, `50%`, `75%`, `100%`, and `auto` by default.

Max-width and max-height utilities are also available; `100%` and `none` max-values are supported out-of-the-box.

Width and height utilities are generated from the `$sizes` Sass map in `_variables.scss`. Modify those values as you need to generate different utilities here.


## Contents

{:toc}


## Width

{% example html %}
<div class="w-25 p-3" style="background-color: #eee;">Width 25%</div>
<div class="w-50 p-3" style="background-color: #eee;">Width 50%</div>
<div class="w-75 p-3" style="background-color: #eee;">Width 75%</div>
<div class="w-100 p-3" style="background-color: #eee;">Width 100%</div>
<div class="w-auto p-3" style="background-color: #eee;">Width auto</div>
{% endexample %}

Responsive variants also exist for width modifiers:
- `.w-25`
- `.w-sm-25`
- `.w-md-25`
- `.w-lg-25`
- `.w-xl-25`
- `.w-50`
- `.w-sm-50`
- `.w-md-50`
- `.w-lg-50`
- `.w-xl-50`
- `.w-75`
- `.w-sm-75`
- `.w-md-75`
- `.w-lg-75`
- `.w-xl-75`
- `.w-100`
- `.w-sm-100`
- `.w-md-100`
- `.w-lg-100`
- `.w-xl-100`
- `.w-auto`
- `.w-sm-auto`
- `.w-md-auto`
- `.w-lg-auto`
- `.w-xl-auto`


## Height

{% example html %}
<div style="height: 100px; background-color: rgba(255,0,0,0.1);">
  <div class="h-25 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 25%</div>
  <div class="h-50 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 50%</div>
  <div class="h-75 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 75%</div>
  <div class="h-100 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 100%</div>
  <div class="h-auto d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height auto</div>
</div>
{% endexample %}

Responsive variants also exist for height modifiers:
- `.h-25`
- `.h-sm-25`
- `.h-md-25`
- `.h-lg-25`
- `.h-xl-25`
- `.h-50`
- `.h-sm-50`
- `.h-md-50`
- `.h-lg-50`
- `.h-xl-50`
- `.h-75`
- `.h-sm-75`
- `.h-md-75`
- `.h-lg-75`
- `.h-xl-75`
- `.h-100`
- `.h-sm-100`
- `.h-md-100`
- `.h-lg-100`
- `.h-xl-100`
- `.h-auto`
- `.h-sm-auto`
- `.h-md-auto`
- `.h-lg-auto`
- `.h-xl-auto`


## Max-width



{% example html %}
<img class="mw-100" src="//via.placeholder.com/1000x100?text=Max-width:+100%" alt="Max-width 100%">
<img class="ml-0 mw-none" src="//via.placeholder.com/1000x100?text=Max-width:+none" alt="Max-width none">
{% endexample %}

Responsive variants also exist for max-width:
- `.mw-100`
- `.mw-sm-100`
- `.mw-md-100`
- `.mw-lg-100`
- `.mw-xl-100`
- `.mw-none`
- `.mw-sm-none`
- `.mw-md-none`
- `.mw-lg-none`
- `.mw-xl-none`


## Max-height

{% example html %}
<div style="height: 100px; background-color: rgba(255,0,0,0.1);">
  <div class="d-inline-block mh-100" style="width: 100px; height: 130px; background-color: rgba(0,0,255,0.1);">Max-height 100%</div>
  <div class="d-inline-block mh-none" style="width: 100px; height: 130px; background-color: rgba(0,0,255,0.1);">Max-height none</div>
</div>
{% endexample %}

Responsive variants also exist for max-height:
- `.mh-100`
- `.mh-sm-100`
- `.mh-md-100`
- `.mh-lg-100`
- `.mh-xl-100`
- `.mh-none`
- `.mh-sm-none`
- `.mh-md-none`
- `.mh-lg-none`
- `.mh-xl-none`
