---
layout: docs-utilities
title: Close icon
group: utilities
---

Use a generic close icon for dismissing content like modals and alerts. **Be sure to include text for screen readers**, as we've done with `aria-label`.

{% example html %}
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
{% endexample %}

Use text color utility overrides against alternate background colors for greater visibility:

<div class="row">
  <div class="col-md-12">
    <div class="card card-inverse">
      <div class="card-block">
        <button type="button" class="close text-inverse" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<button type="button" class="close text-inverse" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
{% endhighlight %}
