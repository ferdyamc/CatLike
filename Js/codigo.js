$(document).ready(function(){



//siguiente menu formulario (registro)
    $(".nombre").click(function(){

       	$(".formudos").animate({right:"10%"},"slow");

    	  $(".ingreso").animate({opacity:"0"},"slow");
    })

//regresar menu formulario (ingreso)
    $(".return").click(function(){

        $(".formudos").animate({right:"-185%"},"slow");

        $(".ingreso").animate({opacity:"1"},"slow");
    })


//animacion activar y desacticvar lightbox 
//activar
$("#seccion1 ul li img").click(function(){

	var atributo= $(this).attr("Src");

		  $("#lightbox").fadeIn("fast");

		  $("#lightbox").html('<img Src=" ' + atributo + ' "><div id="cerrar">X</div>');

		  $("#lightbox img").animate({top: "-30%"},"fast");
      
	    $("#lightbox #cerrar").animate({opacity: 1},"fast");
//desactivar
  $("#lightbox #cerrar").click(function(){

      $("#lightbox").fadeOut("fast");
    
  })
	
})


//animacion a botones para mover slider
//izquierda
$(".izquierda").click(function(){

    $(this).css({"background":"maroon"});

    $(this).css({"transform":"scale(0.8)"});

    $(".carrusel ul").animate({left:"-100%"},"slow");
       
})
//derecha
$(".btnderecha").click(function(){

    $(this).css({"background":"maroon"});

    $(this).css({"transform":"scale(0.8)"});

    $(".carrusel ul").animate({left:"0%"},"slow");
 
})


//animacion mouseover para botones slider
//derecha
$(".btnderecha").mouseover(function(){

    $(this).css({"transform":"scale(1.1)"});
     
})

$(".btnderecha").mouseleave(function(){

    $(this).css({"background":"#b33939"});

    $(this).css({"transform":"scale(1)"});
   
})
//izquierda
$(".izquierda").mouseover(function(){

    $(this).css({"transform":"scale(1.1)"});
 
})

$(".izquierda").mouseleave(function(){

    $(this).css({"background":"#b33939"});

    $(this).css({"transform":"scale(1)"});

})


//animacion mouseover a iconos footer
      $("footer .cajaiconos").mouseover(function(){
         $(this).css({"transform":"scale(1.1)"});

             $(this).css({"opacity":"1"});
      })
           $("footer .cajaiconos").mouseout(function(){
         $(this).css({"transform":"scale(1)"});

          $(this).css({"opacity":"0.3"});
      })
//animacion mouseover aparaecer parrafos en footer


     $("footer #cajaiuno").mouseover(function(){


      $("footer .cajap  #fotpuno").animate({left:"10%"},"fast");
     })  

     $("footer #cajaiuno").mouseleave(function(){
      $("footer .cajap #fotpuno").animate({left:"-100%"},"fast");
     })  
     // icono dos
         $("footer #cajaidos").mouseover(function(){


      $("footer .cajap  #fotpdos").animate({left:"10%"},"fast");
     })  

     $("footer #cajaidos").mouseleave(function(){
      $("footer .cajap #fotpdos").animate({left:"-100%"},"fast");
     })  
     //icono tres 
         $("footer #cajaitres").mouseover(function(){


      $("footer .cajap  #fotptres").animate({left:"10%"},"fast");
     })  

     $("footer #cajaitres").mouseleave(function(){
      $("footer .cajap #fotptres").animate({left:"-100%"},"fast");
     })  


//animacion mouseover imagenes galeria (rotate)
   $(".ima li").mouseover(function(){
   
      $(this).css({"transform":"translateY(-10px)","border":"4px solid #4A0004","opacity":"0.8"});
   })

   $(".ima li").mouseleave(function(){
   
      $(this).css({"transform":"translate(0px)","border":"4px solid #fc5957","opacity":"1"});
   })



})