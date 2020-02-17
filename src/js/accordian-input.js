const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
  HOME: 36,
  END: 35,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

function getTarget(target) {
  const $inputTarget = $(target);
  const collapseTarget = $inputTarget.attr('href');
  const $target = $(collapseTarget);

  return $target;
}

function toggleCollapse(target) {
  const $target = getTarget(target);
  $target.collapse('toggle');
}

function openCollapse(target) {
  const $target = getTarget(target);
  $target.collapse('show');
}

function closeCollapse(target) {
  const $target = getTarget(target);
  $target.collapse('hide');
}

function goToFirst(target) {
  const $target = getTarget(target);
  const $parent = $($target.data('parent'));
  const $first = $parent.find('.collapse').first();

  console.log($first);

  $first.focus();
}

function goToLast(target) {
  const $target = getTarget(target);
  const $parent = $($target.data('parent'));
  const $last = $parent.find('.collapse').last();

  console.log($last);

  $last.focus();
}

$('[data-toggle=collapse]').keydown((e) => {
  switch (e.which) {
    case KEYCODES.SPACE:
      e.preventDefault();
      toggleCollapse(e.target);
      break;
    case KEYCODES.RIGHT:
    case KEYCODES.DOWN:
      e.preventDefault();
      openCollapse(e.target);
      break;
    case KEYCODES.LEFT:
    case KEYCODES.UP:
      e.preventDefault();
      closeCollapse(e.target);
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
