'use strict';

var controlsGap = 170;
var flexGap = 10;
var animationTime = 700;

$(document).ready(function () {
  $('#go_right').click(function () {
    if ($('.slider img').is(':animated')) {
      return;
    }

    var firstInRow1 = $('#row1 > img:first');
    var firstInRow2 = $('#row2 > img:first');

    firstInRow1.animate({ marginRight: -firstInRow1.width() - flexGap }, animationTime);
    firstInRow2.animate({ marginRight: -firstInRow2.width() - flexGap + controlsGap }, animationTime, function () {
      //shift only after animation
      firstInRow1.appendTo('#row2');
      firstInRow2.appendTo('#row1');
      firstInRow1.css('marginRight', '');
      firstInRow2.css('marginRight', '');
    });
  });
  $('#go_left').click(function () {
    if ($('.slider img').is(':animated')) {
      return;
    }

    $('#row2 > img').css('marginRight', '');

    //before shift  
    var lastInRow1 = $('#row1 > img:last-child');
    var lastInRow2 = $('#row2 > img:last-child');

    lastInRow1.insertAfter('#slider-controls');
    lastInRow2.prependTo('#row1');

    // after shift
    var firstInRow1 = $('#row1 > img:first');
    var firstInRow2 = $('#row2 > img:first');

    firstInRow1.css('marginRight', -firstInRow1.width() - flexGap);
    firstInRow1.animate({ marginRight: '' }, animationTime);
    firstInRow2.css('marginRight', -firstInRow2.width() - flexGap + controlsGap);
    firstInRow2.animate({ marginRight: controlsGap }, animationTime);
  });
});