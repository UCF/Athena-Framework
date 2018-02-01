//
// Applies necessary data attributes to media background elements and
// re-triggers the object-fit polyfill.
//

(function ($) {

  function _assignDataAttrs($bg) {
    if ($bg.hasClass('object-fit-contain')) {
      $bg.attr('data-object-fit', 'contain');
    } else if ($bg.hasClass('object-fit-fill')) {
      $bg.attr('data-object-fit', 'fill');
    } else if ($bg.hasClass('object-fit-none')) {
      $bg.attr('data-object-fit', 'none');
    } else if ($bg.hasClass('object-fit-scale-down')) {
      $bg.attr('data-object-fit', 'scale-down');
    } else {
      // .object-fit-cover/default
      $bg.attr('data-object-fit', 'cover');
    }

    return $bg;
  }


  $.fn.mediaBackground = function () {

    // Loop through each media background and assign required data attributes
    // for the object-fit polyfill plugin.
    this.each(function () {
      const $bg = $(this);
      _assignDataAttrs($bg);
    });

    // Re-trigger the object-fit polyfill plugin after all the data attributes
    // have been assigned.
    objectFitPolyfill(this);

    return this;

  };

  $('.media-background').mediaBackground();

}(jQuery));
