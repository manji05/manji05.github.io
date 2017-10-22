$(document).ready(function(){
    $(".menu>li").hover(function(){
    $(this).children("ul").stop(true, false, true).fadeToggle("400");
         });
             });
