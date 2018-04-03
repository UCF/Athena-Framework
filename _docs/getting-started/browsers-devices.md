---
layout: docs
title: Browsers and devices
description: Learn which browsers and devices are supported by Athena.
group: getting-started
---

Athena supports a wide variety of modern browsers and devices, and some older ones. See which exact ones below, as well as detailed information on known quirks and bugs.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Supported browsers

Athena supports the **latest two stable releases** of all major browsers and platforms, listed below, as well as [Internet Explorer 11*](#internet-explorer).

### Mobile browser support

<table class="table table-bordered table-responsive">
  <thead class="thead-default">
    <tr>
      <td></td>
      <th>Chrome</th>
      <th>Firefox</th>
      <th>Safari</th>
      <th>Android Browser &amp; WebView</th>
      <th>Microsoft Edge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Android</th>
      <td class="text-success-aw">Supported</td>
      <td class="text-success-aw">Supported</td>
      <td>N/A</td>
      <td class="text-success-aw">Android v5.0+ supported</td>
      <td>N/A</td>
    </tr>
    <tr>
      <th scope="row">iOS</th>
      <td class="text-success-aw">Supported</td>
      <td class="text-success-aw">Supported</td>
      <td class="text-success-aw">Supported</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

### Desktop browser support

<table class="table table-bordered table-responsive">
  <thead class="thead-default">
    <tr>
      <td></td>
      <th>Chrome</th>
      <th>Firefox</th>
      <th>Internet Explorer</th>
      <th>Microsoft Edge</th>
      <th>Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Mac</th>
      <td class="text-success-aw">Supported</td>
      <td class="text-success-aw">Supported</td>
      <td>N/A</td>
      <td>N/A</td>
      <td class="text-success-aw">Supported</td>
    </tr>
    <tr>
      <th scope="row">Windows</th>
      <td class="text-success-aw">Supported</td>
      <td class="text-success-aw">Supported</td>
      <td class="text-success-aw">Supported, IE 11</td>
      <td class="text-success-aw">Supported</td>
      <td class="text-danger-aw">Not supported</td>
    </tr>
  </tbody>
</table>

### Internet Explorer

Internet Explorer 11 is supported; IE 10 and older are not. Please be aware that some CSS3 properties and HTML5 elements are not fully supported in IE 11, or require prefixed properties for full functionality. Visit [Can I use...](http://caniuse.com/) for details on browser support of CSS3 and HTML5 features.

### Other browsers
Alternative browsers which use the latest version of WebKit, Blink, or Gecko, whether directly or via the platform's web view API, are not explicitly supported. However, Athena should (in most cases) display and function correctly in these browsers as well.

Unofficially, Athena should look and behave well enough in Chromium and Chrome for Linux and Firefox for Linux, though they are not officially supported.

Note that proxy browsers (such as Opera Mini, Opera Mobile's Turbo mode, UC Browser Mini, Amazon Silk) are not supported.


## Cross-browser quirks

General notes regarding cross-browser oddities and lack of support are noted below, most of which are inherited directly from Bootstrap 4.  We recommend referencing [Bootstrap's wall of browser bugs](https://getbootstrap.com/docs/4.0/browser-bugs/) for the most up-to-date list of browser quirks you may encounter when using Athena.

### Modals and dropdowns on mobile

#### Overflow and scrolling

Support for `overflow: hidden;` on the `<body>` element is quite limited in iOS and Android. To that end, when you scroll past the top or bottom of a modal in either of those devices' browsers, the `<body>` content will begin to scroll. See [Chrome bug #175502](https://bugs.chromium.org/p/chromium/issues/detail?id=175502) (fixed in Chrome v40) and [WebKit bug #153852](https://bugs.webkit.org/show_bug.cgi?id=153852).

#### iOS text fields and scrolling

As of iOS 9.2, while a modal is open, if the initial touch of a scroll gesture is within the boundary of a textual `<input>` or a `<textarea>`, the `<body>` content underneath the modal will be scrolled instead of the modal itself. See [WebKit bug #153856](https://bugs.webkit.org/show_bug.cgi?id=153856).

#### Navbar Dropdowns

The `.dropdown-backdrop` element isn't used on iOS in the nav because of the complexity of z-indexing. Thus, to close dropdowns in navbars, you must directly click the dropdown element (or [any other element which will fire a click event in iOS](https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile)).

### Validators

In order to provide the best possible experience to old and buggy browsers, Athena uses [CSS browser hacks](http://browserhacks.com) in several places to target special CSS to certain browser versions in order to work around bugs in the browsers themselves. These hacks understandably cause CSS validators to complain that they are invalid. In a couple places, we also use bleeding-edge CSS features that aren't yet fully standardized, but these are used purely for progressive enhancement.

These validation warnings don't matter in practice since the non-hacky portion of our CSS does fully validate and the hacky portions don't interfere with the proper functioning of the non-hacky portion, hence why we deliberately ignore these particular warnings.

Our HTML docs likewise have some trivial and inconsequential HTML validation warnings due to our inclusion of a workaround for [a certain Firefox bug](https://bugzilla.mozilla.org/show_bug.cgi?id=654072).
