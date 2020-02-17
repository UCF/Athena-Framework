---
layout: docs
title: Accessibility
description: A brief overview of Athena's features and limitations for the creation of accessible content.
tags: getting-started
---

The Athena Framework provides a rich suite of tools for building accessible websites and applications--but it's important that developers and content editors understand how to implement these tools to meet Section 508 compliance and <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0 AA requirements.

{% callout 'info' %}
## Accessibility Basics
The Athena Framework provides utilities and pre-styled components that are designed to be accessible, but **it is the responsibility of the developers and content editors using the framework to implement them appropriately**.

Please see our [Additional Resources](#additional-resources) section for further reading on accessibility requirements.
{% endcallout %}


## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


## Overview and limitations

The overall accessibility of any project built with Athena depends in large part on the author's markup, additional styling, and scripting they've included. However, provided that these have been implemented correctly, websites and applications using Athena should be able to fulfill WCAG 2.0 AA and Section 508 accessibility requirements.

### Structural markup

Athena's styling and layout can be applied to a wide range of markup structures. Athena's documentation aims to provide developers with best practice examples to demonstrate the use of Athena itself and illustrate appropriate semantic markup, including ways in which potential accessibility concerns can be addressed.

### Interactive components

Athena's interactive components—such as modal dialogs, dropdown menus and custom tooltips—are designed to work for touch, mouse and keyboard users. Through the use of relevant [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/WAI/intro/aria) roles and attributes, these components should also be understandable and operable using assistive technologies (such as screen readers).

Because Athena's components are purposely designed to be fairly generic, authors may need to include further <abbr title="Accessible Rich Internet Applications">ARIA</abbr> roles and attributes, as well as JavaScript behavior, to more accurately convey the precise nature and functionality of their component. This is usually noted in the documentation.

### Color contrast

Colors in Athena have been modified from Bootstrap's defaults to ensure they meet [WCAG 2.0 AA color contrast requirements](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) (color contrast ratio of at least 4.5 to 1). In addition, most components include overrides unique to Athena that apply accessible text colors out-of-the-box. However, projects that apply custom color overrides should be tested on a per-case basis to ensure they still meet color contrast requirements.

### Visually hidden content

Content which should be visually hidden, but remain accessible to assistive technologies such as screen readers, can be styled using the `.sr-only` class. This can be useful in situations where additional visual information or cues (such as meaning denoted through the use of color) need to also be conveyed to non-visual users.

{% highlight html %}
<p class="text-danger">
  <span class="sr-only">Danger: </span>
  This action is not reversible
</p>
{% endhighlight %}

For visually hidden interactive controls, such as traditional "skip" links, `.sr-only` can be combined with the `.sr-only-focusable` class. This will ensure that the control becomes visible once focused (for sighted keyboard users).

{% highlight html %}
<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
{% endhighlight %}


## Additional resources

### Further reading
- [The A11Y Project](http://a11yproject.com/)
- [The Section 508 Refresh and What It Means for Higher Education](https://er.educause.edu/articles/2017/12/the-section-508-refresh-and-what-it-means-for-higher-education)
- [MDN accessibility documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### Accessibility validation tools
- [WAVE accessibility evaluation tool (browser extensions available)](https://wave.webaim.org/)
- [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [ChromeVox (free screenreader extension for Chrome)](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en)
- [Accessibility Developer Tools (provides accessibility auditing tools to Chrome Developer Tools)](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb)
- [NoCoffee vision impairment simulator (Chrome extension)](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl?hl=en-US)
- ["HTML Codesniffer" bookmarklet for identifying accessibility issues](https://github.com/squizlabs/HTML_CodeSniffer)
