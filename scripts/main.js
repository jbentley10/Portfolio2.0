$(document).ready(function() {

  //Cache reference to window and animation items
  var $animationElement = $('.animation-element');
  var $window = $(window);

  $window.on('scroll', checkIfInView);

  $window.on('scroll resize', checkIfInView);

  $window.trigger('scroll');

  function checkIfInView2 ($element1, $element2) {
    var element1Height = $element1.outerHeight();
    var element1TopPosition = $element1.offset().top;
    var element1BottomPosition = (element1TopPosition + element1Height);

    var element2Height = $element2.outerHeight();
    var element2TopPosition = $element2.offset().top;
    var element2BottomPosition = (element2TopPosition + element2Height);

    //check to see if this current container is within viewport
    if ((element2BottomPosition >= element1TopPosition) &&
        (element2TopPosition <= element1BottomPosition)) {
          return true;
    } else {
      return false;
    }
  }

  function checkIfInView () {
    var window_height = $(window).height();
    var window_top_position = $(window).scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animationElement, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {

            if ($element.hasClass('type1')) {
              $element.addClass('type-1-animation');
            }

            if ($element.hasClass('type2')) {
              $element.addClass('type-2-animation');
            }

            if ($element.hasClass('card')) {
              $element.addClass('animated');
              $element.addClass('bounceInRight');
            }
      }
    });
  }
});
