---
layout: docs
title: JavaScript
description: Learn about Bootstrap's JavaScript—how to include it, our data and programmatic API options, and more.
group: getting-started
---

Bootstrap includes a handful of JavaScript to help bring some of our components to life. Learn more about how to include it, our data and programmatic API options, and more.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Dependencies

Athena depends on [jQuery](https://jquery.com/) and [Tether](http://tether.io/). This means jQuery and Tether must be included **before** any Athena files. [Consult our `package.json`](https://github.com/UCF/Athena-Framework/blob/master/package.json) to see which versions of jQuery and Tether are supported.

## Data attributes

Nearly all Bootstrap plugins can be enabled and configured through HTML alone with data attributes (our preferred way of using JavaScript functionality). Be sure to **only use one set of data attributes on a single element** (e.g., you cannot trigger a tooltip and modal from the same button.)

However, in some situations it may be desirable to disable this functionality. To disable the data attribute API, unbind all events on the document namespaced with `data-api` like so:

{% highlight js %}
$(document).off('.data-api')
{% endhighlight %}

Alternatively, to target a specific plugin, just include the plugin's name as a namespace along with the data-api namespace like this:

{% highlight js %}
$(document).off('.alert.data-api')
{% endhighlight %}

## Events

Bootstrap provides custom events for most plugins' unique actions. Generally, these come in an infinitive and past participle form - where the infinitive (ex. `show`) is triggered at the start of an event, and its past participle form (ex. `shown`) is triggered on the completion of an action.

All infinitive events provide [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) functionality. This provides the ability to stop the execution of an action before it starts.

{% highlight js %}
$('#myModal').on('show.bs.modal', function (e) {
  if (!data) return e.preventDefault() // stops modal from being shown
})
{% endhighlight %}

## Programmatic API

We also believe you should be able to use all Bootstrap plugins purely through the JavaScript API. All public APIs are single, chainable methods, and return the collection acted upon.

___

**Note: Programmatic API applies to Bootstrap plugins only.** Athena plugins (`mediaBackground` and `stickyTop`) don't currently expose a constructor, `noConflict` method, custom events, version number or have any configurable options.

___

{% highlight js %}
$('.btn.danger').button('toggle').addClass('fat')
{% endhighlight %}

All methods should accept an optional options object, a string which targets a particular method, or nothing (which initiates a plugin with default behavior):

{% highlight js %}
$('#myModal').modal()                      // initialized with defaults
$('#myModal').modal({ keyboard: false })   // initialized with no keyboard
$('#myModal').modal('show')                // initializes and invokes show immediately
{% endhighlight %}

Each plugin also exposes its raw constructor on a `Constructor` property: `$.fn.popover.Constructor`. If you'd like to get a particular plugin instance, retrieve it directly from an element: `$('[rel="popover"]').data('popover')`.

### Asynchronous functions and transitions

All programmatic API methods are **asynchronous** and returns to the caller once the transition is started but **before it ends**.

In order to execute an action once the transition is complete, you can listen to the corresponding event.
{% highlight js %}
$('#myCollapse').on('shown.bs.collapse', function (e) {
  // Action to execute once the collapsible area is expanded
})
{% endhighlight %}

In addition a method call on a **transitioning component will be ignored**.
{% highlight js %}
$('#myCarousel').on('slid.bs.carousel', function (e) {
  $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

$('#myCarousel').carousel('1') // Will start sliding to the slide 1 and returns to the caller
$('#myCarousel').carousel('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!
{% endhighlight %}

### Default settings
You can change the default settings for a plugin by modifying the plugin's `Constructor.Default` object:

{% highlight js %}
$.fn.modal.Constructor.Default.keyboard = false // changes default for the modal plugin's `keyboard` option to false
{% endhighlight %}

### No conflict

Sometimes it is necessary to use Bootstrap plugins with other UI frameworks. In these circumstances, namespace collisions can occasionally occur. If this happens, you may call `.noConflict` on the plugin you wish to revert the value of.

{% highlight js %}
var bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.bootstrapBtn = bootstrapButton            // give $().bootstrapBtn the Bootstrap functionality
{% endhighlight %}

### Version numbers

The version of each of Bootstrap's jQuery plugins can be accessed via the `VERSION` property of the plugin's constructor. For example, for the tooltip plugin:

{% highlight js %}
$.fn.tooltip.Constructor.VERSION // => "{{ site.current_version }}"
{% endhighlight %}

## No special fallbacks when JavaScript is disabled

Bootstrap's plugins don't fall back particularly gracefully when JavaScript is disabled. If you care about the user experience in this case, use [`<noscript>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) to explain the situation (and how to re-enable JavaScript) to your users, and/or add your own custom fallbacks.

{% callout warning %}
#### Third-party libraries

**Bootstrap does not officially support third-party JavaScript libraries** like Prototype or jQuery UI. Despite `.noConflict` and namespaced events, there may be compatibility problems that you need to fix on your own.
{% endcallout %}

## Util

All Athena Javascript depend on `util.js`, which is compiled in Athena's minified Javascript by default. `util.js` includes utility functions and a basic helper for `transitionEnd` events as well as a CSS transition emulator. It's used by the other plugins to check for CSS transition support and to catch hanging transitions.