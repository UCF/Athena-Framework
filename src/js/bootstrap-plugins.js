/*!
 * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
}

(function ($) {
  /* eslint-disable no-magic-numbers */
  const version = $.fn.jquery.split(' ')[0].split('.');
  if (
    version[0] < 2 && version[1] < 9
    || version[0] === 1 && version[1] === 9 && version[2] < 1
    || version[0] >= 4
  ) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
  }
  /* eslint-enable no-magic-numbers */
}(jQuery));


(function () {

  //
  // Specifies which Bootstrap js plugins should be included within Athena.
  //
  // Note: Wrapper code is appended and prepended around Bootstrap's compiled js
  // after it is processed; this is handled in our gulpfile, not here.
  //
  // DO NOT MODIFY THE ORDER OF INCLUDED FILES BELOW--IT MUST MATCH THE ORDER
  // USED IN BOOTSTRAP'S GRUNTFILE.
  //

  // =require ./bootstrap/util.js
  // =require ./bootstrap/alert.js
  // =require ./bootstrap/button.js

  // NOTE: Athena intentionally does not include Bootstrap's carousel component.

  // =require ./bootstrap/collapse.js
  // =require ./bootstrap/dropdown.js
  // =require ./bootstrap/modal.js
  // =require ./bootstrap/scrollspy.js
  // =require ./bootstrap/tab.js
  // =require ./bootstrap/tooltip.js
  // =require ./bootstrap/popover.js

}());
