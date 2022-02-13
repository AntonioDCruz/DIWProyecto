$(document).ready(function(){

    $("#link1").click(function() { 
		var posicion = $(".act8").offset();
        $('html, body').animate({scrollTop:posicion.top - 100}, 'slow');
    });

    $("#link2").click(function() { 
		var posicion = $(".articulos").offset();
        $('html, body').animate({scrollTop:posicion.top - 100}, 'slow');
    });

    $("#link3").click(function() { 
		var posicion = $("#Act6").offset();
        $('html, body').animate({scrollTop:posicion.top - 80}, 'slow');
    });

    $("#link4").click(function() { 
		var posicion = $(".video").offset();
        $('html, body').animate({scrollTop:posicion.top - 100}, 'slow');
    });

    $("#link5").click(function() { 
		var posicion = $(".controlVideo").offset();
        $('html, body').animate({scrollTop:posicion.top - 100}, 'slow');
    });

    $("#link6").click(function() { 
		var posicion = $(".animaciones").offset();
        $('html, body').animate({scrollTop:posicion.top - 100}, 'slow');
    });

    $("#link7").click(function() { 
		var posicion = $(".audios").offset();
        $('html, body').animate({scrollTop:posicion.top - 100}, 'slow');
    });

});