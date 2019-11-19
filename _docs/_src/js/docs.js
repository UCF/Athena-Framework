// =require ../../../dist/js/framework.min.js
// =require anchor-js/anchor.js
// =require clipboard/dist/clipboard.js
// =require holderjs/holder.js
// =require lunr/lunr.js

// =require search.js


/* !
 * JavaScript for Athena Framework's documentation, a derivative of
 * JavaScript for Bootstrap's docs by The Bootstrap Authors and Twitter, Inc.
 *
 * Used under and licensed under the Creative Commons Attribution 3.0 Unported
 * License (https://creativecommons.org/licenses/by/3.0/).
 */

/* global ClipboardJS, anchors, Holder */

(function ($) {

  $(() => {

    // Tooltip and popover demos
    $('.tooltip-demo').tooltip({
      selector: '[data-toggle="tooltip"]',
      container: 'body'
    });

    $('[data-toggle="popover"]').popover();

    // Demos within modals
    $('.tooltip-test').tooltip();
    $('.popover-test').popover();

    // Indeterminate checkbox example
    $('.afd-example-indeterminate [type="checkbox"]').prop('indeterminate', true);

    // Disable empty links in docs examples
    $('.afd-content [href="#"]').click((e) => {
      e.preventDefault();
    });

    // Modal relatedTarget demo
    $('#exampleModal').on('show.bs.modal', function (event) {
      const $button = $(event.relatedTarget); // Button that triggered the modal
      const recipient = $button.data('whatever'); // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      const $modal = $(this);
      $modal.find('.modal-title').text(`New message to ${recipient}`);
      $modal.find('.modal-body input').val(recipient);
    });

    // Activate animated progress bar
    $('.afd-toggle-animated-progress').on('click', function () {
      $(this).siblings('.progress').find('.progress-bar-striped').toggleClass('progress-bar-animated');
    });

    // Insert copy to clipboard button before .highlight
    $('.highlight').each(function () {
      const btnHtml = '<div class="afd-clipboard"><span class="btn-clipboard" title="Copy to clipboard">Copy</span></div>';
      $(this).before(btnHtml);
      $('.btn-clipboard').tooltip();
    });

    const clipboard = new ClipboardJS('.btn-clipboard', {
      target: function (trigger) {
        return trigger.parentNode.nextElementSibling;
      }
    });

    clipboard.on('success', (e) => {
      $(e.trigger)
        .attr('title', 'Copied!')
        .tooltip('_fixTitle')
        .tooltip('show')
        .attr('title', 'Copy to clipboard')
        .tooltip('_fixTitle');

      e.clearSelection();
    });

    clipboard.on('error', (e) => {
      const modifierKey = /Mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-';
      const fallbackMsg = `Press ${modifierKey} C to copy`;

      $(e.trigger)
        .attr('title', fallbackMsg)
        .tooltip('_fixTitle')
        .tooltip('show')
        .attr('title', 'Copy to clipboard')
        .tooltip('_fixTitle');
    });

  });

}(jQuery))

;(function () {
  anchors.options.placement = 'left';
  anchors.add('.afd-content > h1, .afd-content > h2, .afd-content > h3, .afd-content > h4, .afd-content > h5');

  Holder.addTheme('gray', {
    bg: '#777',
    fg: 'rgba(255,255,255,.75)',
    font: 'Helvetica',
    fontweight: 'normal'
  });
}());
