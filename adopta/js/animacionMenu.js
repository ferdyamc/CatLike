$(document).ready(function(){

var pos=0;
	$(".logo").click(function(){
if(pos == 0){
		 $(".navegador .flechad").css({"opacity":"1"});
        $(".navegador .flechai").css({"opacity":"1"});
		$(".ui li").animate({marginRight:"-1950px"},"slow");

		$(".ud li").animate({marginLeft:"-1980px"},"slow");
		pos=1;
	}else if(pos == 1){
        $(".navegador .flechad").css({"opacity":"0"});
        $(".navegador .flechai").css({"opacity":"0"});
		$(".ui li").animate({marginRight:0},"slow");

		$(".ud li").animate({marginLeft:0},"slow");
		 pos=0;
	}
	
	   
	})

//opacidad iconos menu

	$(".ui li").mouseover(function(){
    	$(this).animate({opacity:1},"fast");
    	
    })
        $(".ui li").mouseleave(function(){
    	$(this).animate({opacity:0.5},"fast");
    })



     $(".ud li").mouseover(function(){
    	$(this).animate({opacity:1},"fast");
    })
     $(".ud li").mouseleave(function(){
    	$(this).animate({opacity:0.5},"fast");
    })

//animacion mouseover para añadir estilos a iconos del footer
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



//animacion mouseover en flechas de informacion

     //flecha uno

   $("#flechauno").mouseover(function(){
      $(this).css({"opacity":"0"});
        $(this).css({"z-index":"1"});
    $("#uno").css({"transform":"scaleY(1)"});
    $("#uno").css({"opacity":"1"});

  //$(".link_gall").css({"opacity":"1"});
  // $(".link_gall").css({"z-index":"2"});
   
   })


    $("#flechauno").mouseleave(function(){
      $(this).css({"opacity":"1"});
   //    $(this).css({"z-index":"2"});
    $("#uno").css({"transform":"scaleY(0)"});
      $("#uno").css({"opacity":"0"});
    //  $(".link_gall").css({"opacity":"0"});
     // $(".link_gall").css({"z-index":"1"});
     
   })
    //flecha dos

   $("#flechados").mouseover(function(){
      $(this).css({"opacity":"0"});
    $("#dos").css({"transform":"scaleY(1)"});
      $("#dos").css({"opacity":"1"});
   
   })


    $("#flechados").mouseleave(function(){
      $(this).css({"opacity":"1"});
    $("#dos").css({"transform":"scaleY(0)"});
      $("#dos").css({"opacity":"0"});
     
   })
   //flecha tres

   $("#flechatres").mouseover(function(){
      $(this).css({"opacity":"0"});
    $("#tres").css({"transform":"scaleY(1)"});
      $("#tres").css({"opacity":"1"});
   
   })


    $("#flechatres").mouseleave(function(){
      $(this).css({"opacity":"1"});
    $("#tres").css({"transform":"scaleY(0)"});
      $("#tres").css({"opacity":"0"});
     
   })


})