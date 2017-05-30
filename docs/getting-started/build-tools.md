---
layout: docs
title: Build tools
description: Details on how to use compile custom Athena builds and more.
group: getting-started
---

TODO: This entire page needs to be revamped to properly document how we expect the framework to be utilized for custom builds (we generally expect users to copy Athena files into their projects, unmodified, and build them into their projects using whatever build tools they prefer).  However, we should provide examples of custom build setups (e.g. gulp with fallback font file copying steps, scss building with autoprefixer, and js importing and uglifying)

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## TODO

TODO

Example Sass setup:

{% highlight scss %}
// Project-specific variables
@import 'my-project-variables';

// Vendor assets
@import './athena-framework/src/scss/framework';
// @import './some-other-vendor-package/some-stylesheet';

// Project styles
@import 'my-project-styles';
{% endhighlight %}
