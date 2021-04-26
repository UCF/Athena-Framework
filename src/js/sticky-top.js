//
// Applies a position: sticky polyfill to .sticky-top elements.
//

(function ($) {

  $.fn.stickyTop = function () {

    // Let the plugin determine whether polyfill logic is required
    this.Stickyfill();

    return this;

  };

  $('.sticky-top, .position-sticky-top').stickyTop();

}(jQuery));
