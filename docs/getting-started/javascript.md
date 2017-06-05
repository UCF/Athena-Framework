---
layout: docs
title: JavaScript
description: Learn about Athena's JavaScript—how to include it, our data and programmatic API options, and more.
group: getting-started
---

Athena includes a handful of JavaScript to help bring some of our components to life. Learn more about how to include it, our data and programmatic API options, and more.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Dependencies

Athena depends on [jQuery](https://jquery.com/) and [Tether](http://tether.io/). This means jQuery and Tether must be included **before** Athena's JavaScript file. [Consult our `package.json`](https://github.com/UCF/Athena-Framework/blob/master/package.json) to see which versions of jQuery and Tether are supported.

Note that Athena provides some additional polyfills out-of-the-box ([Stickyfill](https://github.com/wilddeer/stickyfill), [objectFitPolyfill](https://github.com/constancecchen/object-fit-polyfill)) to ensure cross-browser compatibility across all components. These polyfills should not be included in your projects separately to avoid potential naming conflicts.

## Data attributes

Nearly all Athena plugins can be enabled and configured through HTML alone with data attributes (our preferred way of using JavaScript functionality). Be sure to **only use one set of data attributes on a single element** (e.g., you cannot trigger a tooltip and modal from the same button.)

However, in some situations it may be desirable to disable this functionality. To disable the data attribute API, unbind all events on the document namespaced with `data-api` like so:

{% highlight js %}
$(document).off('.data-api')
{% endhighlight %}

Alternatively, to target a specific plugin, just include the plugin's name as a namespace along with the data-api namespace like this:

{% highlight js %}
$(document).off('.alert.data-api')
{% endhighlight %}

## Events

Athena provides custom events for most plugins' unique actions. Generally, these come in an infinitive and past participle form - where the infinitive (ex. `show`) is triggered at the start of an event, and its past participle form (ex. `shown`) is triggered on the completion of an action.

All infinitive events provide [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) functionality. This provides the ability to stop the execution of an action before it starts.

{% highlight js %}
$('#myModal').on('show.bs.modal', function (e) {
  if (!data) return e.preventDefault() // stops modal from being shown
})
{% endhighlight %}

## Programmatic API

We also believe you should be able to use all Athena plugins purely through the JavaScript API. All public APIs are single, chainable methods, and return the collection acted upon.

{% callout info %}
<strong>Note: Programmatic API applies to plugins ported from Bootstrap only.</strong> Athena-specific plugins (`mediaBackground` and `stickyTop`) don't currently expose a constructor, `noConflict` method, custom events, version number or have any configurable options.
{% endcallout %}

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

### Default settings
You can change the default settings for a plugin by modifying the plugin's `Constructor.DEFAULTS` object:

{% highlight js %}
$.fn.modal.Constructor.DEFAULT.keyboard = false // changes default for the modal plugin's `keyboard` option to false
{% endhighlight %}

### No conflict

Sometimes it is necessary to use Athena plugins with other UI frameworks. In these circumstances, namespace collisions can occasionally occur. If this happens, you may call `.noConflict` on the plugin you wish to revert the value of.

{% highlight js %}
var AthenaButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.AthenaBtn = AthenaButton            // give $().AthenaBtn the Athena functionality
{% endhighlight %}

### Version numbers

The version of each of Athena's jQuery plugins can be accessed via the `VERSION` property of the plugin's constructor. For example, for the tooltip plugin:

{% highlight js %}
$.fn.tooltip.Constructor.VERSION // => "{{ site.data.package.version }}"
{% endhighlight %}

## No special fallbacks when JavaScript is disabled

Athena's plugins don't fall back particularly gracefully when JavaScript is disabled. If you care about the user experience in this case, use [`<noscript>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) to explain the situation (and how to re-enable JavaScript) to your users, and/or add your own custom fallbacks.

{% callout warning %}
#### Third-party libraries

**Athena does not officially support third-party JavaScript libraries** like Prototype or jQuery UI. Despite `.noConflict` and namespaced events, there may be compatibility problems that you need to fix on your own.
{% endcallout %}

## Transitions

Transition.js, already included in Athena's framework.min.js, is a basic helper for `transitionEnd` events as well as a CSS transition emulator. It's used by the other plugins to check for CSS transition support and to catch hanging transitions.
