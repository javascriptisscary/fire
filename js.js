"use strict";
$( document ).ready(function() {
   
   
   function landscape() {
    if ($(window).height() <=654) {
       return $("#fire").css("font-size", "4em");
    }
   }
   
   
   
   
   
   

   
   
  if  ($(window).width() < 1100) {
      $("#intro").css("background", "black no-repeat scroll left top / cover");
      $("#fire").css("font-size", "10em");
          if ($(window).width() <= 767) {
        $("#intro").css("background", "black no-repeat scroll left top / cover");
      $("#fire").css("font-size", "6em");
      
    }
    }
    
    
    landscape();
    
});