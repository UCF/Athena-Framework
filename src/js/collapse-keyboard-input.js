//
// Adds keyboard navigation logic for collapse components not present in Bootstrap.
//
(function ($) {
  const KEYCODES = {
    ENTER: 13,
    SPACE: 32,
    HOME: 36,
    END: 35,
    UP: 38,
    DOWN: 40
  };

  function getTarget(target) {
    const $inputTarget = $(target);
    const collapseTarget = $inputTarget.attr('href');
    const $target = $(collapseTarget);

    return $target;
  }

  function getParent(target) {
    const $target = getTarget(target);
    return $($target.data('parent'));
  }

  function getSiblings(target) {
    const $parent = getParent(target);
    return $parent.find('[data-toggle=collapse]');
  }

  function toggleCollapse(target) {
    const $target = getTarget(target);
    if ($target.attr('role') === 'tabpanel') {
      $target.collapse('toggle');
    }
  }

  function goToNext(target) {
    const $siblings = getSiblings(target);
    const index = $siblings.index(target);

    // If we're not on the last one,
    // change focus
    if (index + 1 < $siblings.length) {
      $siblings[index + 1].focus();
    }
  }

  function goToPrevious(target) {
    const $siblings = getSiblings(target);
    const index = $siblings.index(target);

    // If we're not on the first one,
    // change focus
    if (index - 1 > -1) {
      $siblings[index - 1].focus();
    }
  }

  function goToFirst(target) {
    const $first = getSiblings(target).first();
    $first.focus();
  }

  function goToLast(target) {
    const $last = getSiblings(target).last();
    $last.focus();
  }

  $('[data-toggle=collapse]').keydown((e) => {
    switch (e.which) {
      case KEYCODES.SPACE:
        e.preventDefault();
        toggleCollapse(e.target);
        break;
      case KEYCODES.DOWN:
        e.preventDefault();
        goToNext(e.target);
        break;
      case KEYCODES.UP:
        e.preventDefault();
        goToPrevious(e.target);
        break;
      case KEYCODES.HOME:
        e.preventDefault();
        goToFirst(e.target);
        break;
      case KEYCODES.END:
        e.preventDefault();
        goToLast(e.target);
        break;
      default:
        return;
    }
  });
}(jQuery));
