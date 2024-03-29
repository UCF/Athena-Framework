---
layout: subpage
title: Migrating to Athena from Bootstrap 3
---

The most notable changes between Bootstrap 3 and Athena are summarized immediately below, followed by more specific class and behavioral changes to relevant components.


## Contents

{:toc}


## Summary

Here are the big ticket items you'll want to be aware of when moving from Bootstrap 3 to Athena.

### Browser support

- Dropped IE 8, IE 9, and IE 10. Athena only supports the [latest 2 versions of major browsers and IE 11]({{ '/getting-started/browsers-devices' | url }}#supported-browsers).

### Global changes

- **Flexbox is enabled by default.** In general this means a move away from floats and more across components.
- Switched from [Less](http://lesscss.org/) to [Sass](http://sass-lang.com/) for source CSS files.
- Switched from `px` to `rem` as the primary CSS unit, though pixels are still used for media queries and grid behavior as viewports are not affected by type size.
- Global font-size changed from `14px` to `.875rem` by default, and `1rem` at the `-md` breakpoint and up.
- Revamped grid tiers to add a fifth option (addressing smaller devices at `576px` and below) and removed the `-xs` infix from those classes. Example: `.col-6.col-sm-4.col-md-3`.
- Non-responsive usage of the framework is not supported.
- Added dozens of new utility classes for common CSS property-value pairs and margin/padding spacing shortcuts.

### Grid system

- **Moved to flexbox.**
  - Added support for flexbox in the grid mixins and predefined classes.
  - As part of flexbox, included support for vertical and horizontal alignment classes.
- **Updated grid class names and added a new grid tier.**
  - Added a new `sm` grid tier below `768px` for more granular control. We now have `xs`, `sm`, `md`, `lg`, and `xl`. This also means every tier has been bumped up one level (so `.col-md-6` in Bootstrap 3 is `.col-lg-6` in Athena).
  - `xs` grid classes have been modified to not require the infix to more accurately represent that they start applying styles at `min-width: 0` and not a set pixel value. Instead of `.col-xs-6`, it’s now `.col-6`. All other grid tiers require the infix (e.g., `sm`).
- **Updated grid sizes, mixins, and variables.**
  - Grid gutters now have a Sass map so you can specify specific gutter widths at each breakpoint.
  - Updated grid mixins to utilize a `make-col-ready` prep mixin and a `make-col` to set the `flex` and `max-width` for individual column sizing.
  - Changed grid system media query breakpoints and container widths to account for new grid tier and ensure columns are evenly divisible by `12` at their max width.
  - Grid breakpoints and container widths are now handled via Sass maps (`$grid-breakpoints` and `$container-max-widths`) instead of a handful of separate variables. These replace the `@screen-*` variables entirely and allow you to fully customize the grid tiers.
  - Media queries have also changed. Instead of repeating our media query declarations with the same value each time, we now have `@include media-breakpoint-up/down/only`. Now, instead of writing `@media (min-width: @screen-sm-min) { ... }`, you can write `@include media-breakpoint-up(sm) { ... }`.

### Content

#### Style resets

Athena includes a combination of opinionated element style resets and [Reboot](https://v4-alpha.getbootstrap.com/content/reboot/), a new stylesheet from Bootstrap 4 that builds on Normalize with somewhat opinionated reset styles. Selectors appearing in this file only use elements—there are no classes here. This isolates our reset styles from our component styles for a more modular approach. Some of the most important resets this includes are the `box-sizing: border-box` change, moving from `em` to `rem` units on many elements, link styles, and many form element resets.

#### Typography

- Dropped `.page-header` as, aside from the border, all its styles can be applied via utilities.
- `.dl-horizontal` has been dropped. Instead, use `.row` on `<dl>` and use grid column classes (or mixins) on its `<dt>` and `<dd>` children.
- Custom `<blockquote>` styling has moved to classes—`.blockquote` and the `.blockquote-reverse` modifier.
- `.list-inline` now requires that its children list items have the new `.list-inline-item` class applied to them.

#### Images

- Renamed `.img-responsive` to `.img-fluid`.
- Renamed `.img-rounded` to `.rounded`.
- Renamed `.img-circle` to `.rounded-circle`.

#### Tables

- Nearly all instances of the `>` selector have been removed from table styles, meaning nested tables will now automatically inherit styles from their parents. This greatly simplifies our selectors and potential customizations.
- Responsive tables no longer require a wrapping element. Instead, just put the `.table-responsive` right on the `<table>`.
- Renamed `.table-condensed` to `.table-sm` for consistency.
- Added a new `.table-inverse` option.
- Added table header modifiers: `.thead-default` and `.thead-inverse`.
- Renamed contextual classes to have a `.table-`-prefix. Hence `.active`, `.success`, `.warning`, `.danger` and `.table-info` to `.table-active`, `.table-success`, `.table-warning`, `.table-danger` and `.table-info`.

### Utilities

- **Display, hidden, and more:**
  - Made display utilities responsive (e.g., `.d-none` and `d-{sm,md,lg,xl}-none`).
  - Added `.float-{sm,md,lg,xl}-{left,right,none}` classes for responsive floats and removed `.pull-left` and `.pull-right` since they're redundant to `.float-left` and `.float-right`.
- **Type:**
  - Added responsive variations to our text alignment classes `.text-{sm,md,lg,xl}-{left,center,right}`.
- **Alignment and spacing:**
  - Added new [responsive margin and padding utilities]({{ '/utilities/spacing' | url }}) for all sides, plus vertical and horizontal shorthands.
  - Added lots of [flexbox utilities]({{ '/utilities/flexbox' | url }}).
  - Dropped `.center-block` for the new `.mx-auto` class.

#### Vendor prefix mixins
Bootstrap 3's [vendor prefix](http://webdesign.about.com/od/css/a/css-vendor-prefixes.htm) mixins, which were deprecated in v3.2.0, have been removed in Athena. Since we use [Autoprefixer](https://github.com/postcss/autoprefixer), they're no longer necessary.

Removed the following mixins: `animation`, `animation-delay`, `animation-direction`, `animation-duration`, `animation-fill-mode`, `animation-iteration-count`, `animation-name`, `animation-timing-function`, `backface-visibility`, `box-sizing`, `content-columns`, `hyphens`, `opacity`, `perspective`, `perspective-origin`, `rotate`, `rotateX`, `rotateY`, `scale`, `scaleX`, `scaleY`, `skew`, `transform-origin`, `transition-delay`, `transition-duration`, `transition-property`, `transition-timing-function`, `transition-transform`, `translate`, `translate3d`, `user-select`

#### Responsive utilities

All `@screen-` variables have been removed in Athena. Use the `media-breakpoint-up()`, `media-breakpoint-down()`, or `media-breakpoint-only()` Sass mixins or the `$grid-breakpoints` Sass map instead.

The responsive utility classes have also been overhauled.

- The `.hidden` and `.show` classes have been removed because they conflicted with jQuery's `$(...).hide()` and `$(...).show()` methods. Instead, try toggling the `[hidden]` attribute, use inline styles like `style="display: none;"` and `style="display: block;"`, or toggle the `.invisible` class.
- The old classes (`.hidden-xs` `.hidden-sm` `.hidden-md` `.hidden-lg` `.visible-xs-block` `.visible-xs-inline` `.visible-xs-inline-block` `.visible-sm-block` `.visible-sm-inline` `.visible-sm-inline-block` `.visible-md-block` `.visible-md-inline` `.visible-md-inline-block` `.visible-lg-block` `.visible-lg-inline` `.visible-lg-inline-block`) are gone.
- They have been replaced by `.hidden-xs-up` `.hidden-xs-down` `.hidden-sm-up` `.hidden-sm-down` `.hidden-md-up` `.hidden-md-down` `.hidden-lg-up` `.hidden-lg-down`.
- The `.hidden-*-up` classes hide the element when the viewport is at the given breakpoint or larger (e.g. `.hidden-md-up` hides an element on medium, large, and extra-large devices).
- The `.hidden-*-down` classes hide the element when the viewport is at the given breakpoint or smaller (e.g. `.hidden-md-down` hides an element on extra-small, small, and medium devices).

Rather than using explicit `.visible-*` classes, you make an element visible by simply not hiding it at that screen size. You can combine one `.hidden-*-up` class with one `.hidden-*-down` class to show an element only on a given interval of screen sizes (e.g. `.hidden-sm-down.hidden-xl-up` shows the element only on medium and large devices).

Note that the changes to the grid breakpoints in Athena means that you'll need to go one breakpoint larger to achieve the same results (e.g. `.hidden-md` is more similar to `.hidden-lg-down` than to `.hidden-md-down`). The new responsive utility classes don't attempt to accommodate less common cases where an element's visibility can't be expressed as a single contiguous range of viewport sizes; you will instead need to use custom CSS in such cases.

### Components

- **Dropped panels, thumbnails, and wells** for a new all-encompassing component, [cards]({{ '/link components/card' | url }}).
- **Dropped the Glyphicons icon font.** If you need icons, we recommend including [Font Awesome](http://fontawesome.io/) or another icon library in your project as needed.
- **Dropped the Affix jQuery plugin.** Use the [`.sticky-top` utility class]({{ '/utilities/position' | url }}#sticky-top) instead.
  - If you were using Affix to apply additional, non-`position` styles, `.sticky-top` might not support your use case. One option for such uses is the third-party [ScrollPos-Styler](https://github.com/acch/scrollpos-styler) library.
- **Dropped the pager component** as it was essentially slightly customized buttons.
- **Refactored nearly all components** to use more un-nested classes instead of children selectors.


---


## By component

This list highlights key changes by component between Bootstrap v3.x.x and Athena.

### Breadcrumbs

- An explicit class, `.breadcrumb-item`, is now required on the descendants of `.breadcrumb`s.

### Buttons

- Dropped the `.btn-xs` class entirely.
- The [stateful button](https://getbootstrap.com/docs/3.3/javascript/#buttons-stateful) feature of Bootstrap's `button.js` jQuery plugin has been dropped. This includes the `$().button(string)` and `$().button('reset')` methods. We advise using a tiny bit of custom JavaScript instead, which will have the benefit of behaving exactly the way you want it to.
  - Note that the other features of the plugin (button checkboxes, button radios, single-toggle buttons) have been retained in Athena.

### Button group

- Rewrote component with flexbox.
- Removed `.btn-group-justified`. As a replacement you can use `<div class="btn-group d-flex" role="group"></div>` as a wrapper around elements with `.w-100`.
- Dropped the `.btn-group-xs` class entirely given the removal of `.btn-xs`.
- Removed explicit spacing between button groups in button toolbars; use margin utilities now.
- Improved documentation for use with other components.

### Carousel

- Carousels are intentionally not included in Athena.  If you [still _really_ need a carousel](http://shouldiuseacarousel.com/), use a third-party JavaScript plugin that is responsive, provides adequate touch device support, and is accessible.

### Dropdowns

- Switched from parent selectors to singular classes for all components, modifiers, etc.
- Simplified dropdown styles to no longer ship with upward or downward facing arrows attached to the dropdown menu.
- Dropdowns can be built with `<div>`s or `<ul>`s now.
- Rebuilt dropdown styles and markup to provide easy, built-in support for `<a>` and `<button>` based dropdown items.
- Renamed `.divider` to `.dropdown-divider`.
- Dropdown items now require `.dropdown-item`.
- Dropdown toggles no longer require an explicit `<span class="caret"></span>`; this is now provided automatically via CSS's `::after` on `.dropdown-toggle`.

### Forms

- Renamed `.control-label` to `.form-control-label`.
- Renamed `.input-lg` and `.input-sm` to `.form-control-lg` and `.form-control-sm`, respectively.
- Dropped `.form-group-*` classes for simplicity's sake. Use `.form-control-*` classes instead now.
- Dropped `.help-block` and replaced it with `.form-text` for block-level help text. For inline help text and other flexible options, use utility classes like `.text-muted`.
- Horizontal forms overhauled:
  - Dropped the `.form-horizontal` class requirement.
  - `.form-group` no longer applies styles from the `.row` via mixin, so `.row` is now required for horizontal grid layouts (e.g., `<div class="form-group row">`).
  - Added new `.form-control-label` class to vertically center labels with `.form-control`s.
- Added custom forms support (for checkboxes, radios, selects, and file inputs).

### Labels and badges

- Merged `.label` into a single `.badge` component to disambiguate from the `<label>` element.

### List groups

- Rewrote component with flexbox.
- Replaced `a.list-group-item` with an explicit class, `.list-group-item-action`, for styling link and button versions of list group items.
- Added `.list-group-flush` class for use with cards.

### Modal

- Rewrote component with flexbox.
- Given move to flexbox, alignment of dismiss icons in the header is likely broken as floats are no longer used. Floated content comes first, but with flexbox that's no longer the case. Update your dismiss icons to come after modal titles to fix.
- The `remote` option (which could be used to automatically load and inject external content into a modal) and the corresponding `loaded.bs.modal` event were removed. We recommend instead using client-side templating or a data binding framework, or calling [jQuery.load](https://api.jquery.com/load/) yourself.

### Navs

- Rewrote component with flexbox.
- Dropped nearly all `>` selectors for simpler styling via un-nested classes.
- Instead of HTML-specific selectors like `.nav > li > a`, we use separate classes for `.nav`s, `.nav-item`s, and `.nav-link`s. This makes your HTML more flexible while bringing along increased extensibility.

### Navbar

The navbar has been entirely rewritten in flexbox with improved support for alignment, responsiveness, and customization.

- Responsive navbar behaviors are now applied to the `.navbar` class via the `.navbar-toggleable-{breakpoint}` where you choose where to collapse the navbar. Previously this was a Less variable modification and required recompiling.
- `.navbar-default` is now `.navbar-light`, though `.navbar-inverse` remains the same. **One of these is required on each navbar.** However, these classes no longer set `background-color`s; instead they essentially only affect `color`.
- Navbars now require a background declaration of some kind. Choose from our background utilities (`.bg-*`) or set your own with the light/inverse classes above.
- Given flexbox styles, navbars can now use flexbox utilities for easy alignment options.
- `.navbar-toggle` is now `.navbar-toggler` and has different styles and inner markup (no more three `<span>`s).
- Dropped the `.navbar-form` class entirely. It's no longer necessary; instead, just use `.form-inline` and apply margin utilities as necessary.
- Navbars no longer include `margin-bottom` or `border-radius` by default. Use utilities as necessary.
- All examples featuring navbars have been updated to include new markup.

### Pagination

- Rewrote component with flexbox.
- Explicit classes (`.page-item`, `.page-link`) are now required on the descendants of `.pagination`s
- Dropped the `.pager` component entirely as it was little more than customized outline buttons.

### Panels, thumbnails, and wells

Dropped entirely for the new [card component]({{ '/components/card' | url }}).

#### Panels

- `.panel` to `.card`, now built with flexbox.
- `.panel-default` removed and no replacement.
- `.panel-group` removed and no replacement. `.card-group` is not a replacement, it is different.
- `.panel-heading` to `.card-header`
- `.panel-title` to `.card-title`. Depending on the desired look, you may also want to use [heading elements or classes]({{ '/content/typography' | url }}#headings) (e.g. `<h3>`, `.h3`) or bold elements or classes (e.g. `<strong>`, `<b>`, [`.font-weight-bold`]({{ '/utilities/typography' | url }}#font-weight-and-italics)). Note that `.card-title`, while similarly named, produces a different look than `.panel-title`.
- `.panel-body` to `.card-block`
- `.panel-footer` to `.card-footer`
- `.panel-primary` to `.card-primary` and `.card-inverse` (or use `.bg-primary` on `.card-header`)
- `.panel-success` to `.card-success` and `.card-inverse` (or use `.bg-success` on `.card-header`)
- `.panel-info` to `.card-info` and `.card-inverse` (or use `.bg-info` on `.card-header`)
- `.panel-warning` to `.card-warning` and `.card-inverse` (or use `.bg-warning` on `.card-header`)
- `.panel-danger` to `.card-danger` and `.card-inverse` (or use `.bg-danger` on `.card-header`)

### Progress

- Replaced contextual `.progress-bar-*` classes with `.bg-*` utilities. For example, `class="progress-bar progress-bar-danger"` becomes `class="progress-bar bg-danger"`.
- Replaced `.active` for animated progress bars with `.progress-bar-animated`.

### Tooltips and Popovers

- Removed support for `auto` placement options.

