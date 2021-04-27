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
- `.w-25-sm`
- `.w-25-md`
- `.w-25-lg`
- `.w-25-xl`
- `.w-50`
- `.w-50-sm`
- `.w-50-md`
- `.w-50-lg`
- `.w-50-xl`
- `.w-75`
- `.w-75-sm`
- `.w-75-md`
- `.w-75-lg`
- `.w-75-xl`
- `.w-100`
- `.w-100-sm`
- `.w-100-md`
- `.w-100-lg`
- `.w-100-xl`
- `.w-auto`
- `.w-auto-sm`
- `.w-auto-md`
- `.w-auto-lg`
- `.w-auto-xl`


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
- `.h-25-sm`
- `.h-25-md`
- `.h-25-lg`
- `.h-25-xl`
- `.h-50`
- `.h-50-sm`
- `.h-50-md`
- `.h-50-lg`
- `.h-50-xl`
- `.h-75`
- `.h-75-sm`
- `.h-75-md`
- `.h-75-lg`
- `.h-75-xl`
- `.h-100`
- `.h-100-sm`
- `.h-100-md`
- `.h-100-lg`
- `.h-100-xl`
- `.h-auto`
- `.h-auto-sm`
- `.h-auto-md`
- `.h-auto-lg`
- `.h-auto-xl`


## Max-width



{% example html %}
<img class="mw-100" src="//via.placeholder.com/1000x100?text=Max-width:+100%" alt="Max-width 100%">
<img class="ml-0 mw-none" src="//via.placeholder.com/1000x100?text=Max-width:+none" alt="Max-width none">
{% endexample %}

Responsive variants also exist for max-width:
- `.mw-100`
- `.mw-100-sm`
- `.mw-100-md`
- `.mw-100-lg`
- `.mw-100-xl`
- `.mw-none`
- `.mw-none-sm`
- `.mw-none-md`
- `.mw-none-lg`
- `.mw-none-xl`


## Max-height

{% example html %}
<div style="height: 100px; background-color: rgba(255,0,0,0.1);">
  <div class="d-inline-block mh-100" style="width: 100px; height: 130px; background-color: rgba(0,0,255,0.1);">Max-height 100%</div>
  <div class="d-inline-block mh-none" style="width: 100px; height: 130px; background-color: rgba(0,0,255,0.1);">Max-height none</div>
</div>
{% endexample %}

Responsive variants also exist for max-height:
- `.mh-100`
- `.mh-100-sm`
- `.mh-100-md`
- `.mh-100-lg`
- `.mh-100-xl`
- `.mh-none`
- `.mh-none-sm`
- `.mh-none-md`
- `.mh-none-lg`
- `.mh-none-xl`
