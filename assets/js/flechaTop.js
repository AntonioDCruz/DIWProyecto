$(document).ready(function(){
    $("#toTop").css("display", "none");
       $(window).scroll(function(){
           if($(window).scrollTop() > 500){
               $("#toTop").fadeIn("slow");
           }
           else {
               $("#toTop").fadeOut("slow");
           }
       });
    $("#toTop").click(function() { 
        $('html, body').animate({scrollTop:0}, 'slow');
    });
});