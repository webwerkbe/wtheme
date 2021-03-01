/**
 * @file
 * Code for custom js.
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.navigationToggle = {
    attach: function (context, settings) {

      // Mobile menu toggle
      $('.navigation-toggle').on('click', function(){
        $('body').toggleClass('mobile-menu-is-visible');
      });
      $(window).on('resize orientationchange', function(){
        // Close the mobile menu after resize beyond breakpoint
        if (window.outerWidth > 959.98) {
          $('body').removeClass('mobile-menu-is-visible');
        }
      });

    }
  };

})(jQuery, Drupal);