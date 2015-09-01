$(function() {

  'use strict';


});


//[>FUNCTIONS<]

////function to advance tiles to the left
//function slideLeft() {
    //var elementToMove = $(".sliderTileSection").children().filter(".tile").first();
    //var styleReset = elementToMove.attr("style");
    //elementToMove.animate({width:0}, function(){
        //$(".sliderTileSection").children().last().after($(this));
        //$(this).attr("style",styleReset);
        //$(this).removeClass("tileWide");
    //});
    //$(".sliderTileSection").children().filter(".tile").eq(1).addClass("tileWide");
//}

////function to advance tile to the right
//function slideRight() {
    //var elementToMove = $(".sliderTileSection").children().filter(".tile").last();
    //var styleReset = elementToMove.attr("style");
    //elementToMove.css({width:0});
    //$(".sliderTileSection").children().filter(".tile").first().before(elementToMove);
    //elementToMove.next().removeClass("tileWide");
    //elementToMove.addClass("tileWide");
    //elementToMove.animate({width:370}, function(){
        //elementToMove.attr("style",styleReset);
    //});
//}

////function to set the slider timer
//function sliderTimer() {
    //return setInterval(function(){$(".sliderButtonRight").click();},5000);
//}

//[>EVENT LISTENERS<]

////Slider Left Button
//$(".sliderButtonLeft").on("click",function(){
    //slideRight();
    //clearInterval(timer);
    //timer = sliderTimer();
//});

////Slider Right Button
//$(".sliderButtonRight").on("click",function(){
    //slideLeft();
    //clearInterval(timer);
    //timer = sliderTimer();
//});

////Set slider timer
//timer = sliderTimer();

////Slider button hovers
//$(".sliderButtonLeft").mouseenter(function(){
    //$(this).animate({opacity:1},200);
//});

//$(".sliderButtonLeft").mouseleave(function(){
    //$(this).animate({opacity:0.25},200);
//});

//$(".sliderButtonRight").mouseenter(function(){
    //$(this).animate({opacity:1},200);
//});

//$(".sliderButtonRight").mouseleave(function(){
    //$(this).animate({opacity:0.25},200);
//});
