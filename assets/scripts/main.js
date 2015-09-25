/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

var $ = jQuery;

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };


  // Load Events
  $(document).ready(UTIL.loadEvents);




})($); // Fully reference jQuery after this point.


$(function() {
  $('img').each(function(){
  $(this).removeAttr('width')
    $(this).removeAttr('height');
  });
  $('figure').each(function() {
    $(this).removeAttr('style');
  });
});

$(function() {
  /**
   * Slider JavaScript
   */

  //jQuery Element Definitions
  var $slider = $('.slider');
  var $sliderButtonLeft = $('.slider-button-left');
  var $sliderButtonRight = $('.slider-button-right');

  // Functions
  var timerFunction = function() {
    return setInterval(function() {
      slideLeft();
    }, 5000);
  };

  var fadeIn = function() {
    $(this).animate({opacity: 1});
  };

  var fadeOut = function() {
    $(this).animate({opacity: 0.3});
  };

  var slideLeft = function() {
    var $slides = $slider.children();
    var $firstSlide = $slides.first();
    var slideWidth = $firstSlide.width();
    $slides.animate({right: slideWidth}, function() {
      $slider.append($firstSlide);
      $slides.css('right', 0);
    });
  };

  var slideRight = function() {
    var $slides = $slider.children();
    var $lastSlide = $slides.last();
    var slideWidth = $lastSlide.width();
    $slider.prepend($lastSlide);
    $slides.css('right', slideWidth);
    $slides.animate({right: 0}, function() {
    });
  };

  var buttonLeft = function() {
    slideLeft();
    clearInterval(timer);
    timer = timerFunction();
  };

  var buttonRight = function() {
    slideRight();
    clearInterval(timer);
    timer = timerFunction();
  };

  // Event Listeners
  $sliderButtonLeft.on('mouseenter', fadeIn);
  $sliderButtonLeft.on('mouseleave', fadeOut);
  $sliderButtonLeft.on('click', buttonLeft);
  $sliderButtonRight.on('mouseenter', fadeIn);
  $sliderButtonRight.on('mouseleave', fadeOut);
  $sliderButtonRight.on('click', buttonRight);

  // Start the timer
  var timer = timerFunction();



});
