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


     
//animaciion over iconos footer


      $("footer .cajaiconos").mouseover(function(){
         $(this).css({"transform":"scale(1.1)"});

             $(this).css({"opacity":"1"});
      })
           $("footer .cajaiconos").mouseout(function(){
         $(this).css({"transform":"scale(1)"});

          $(this).css({"opacity":"0.3"});
      })



//animacion parrafo footer


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






//animacion panel config

$(".config").click(function(){
  $(".panel1").css({opacity:"0"});
  $(".panel1").css({display:"none"});
  $(".panel2").css({opacity:"1"});
  $(".panel2").css({display:"flex"});

})

$(".config2").click(function(){
  $(".panel1").css({opacity:"1"});
  $(".panel1").css({display:"flex"});
  $(".panel2").css({opacity:"0"});
  $(".panel2").css({display:"none"});

})

//animcaion caja2: fotos




$(".pfotos").click(function(){
  $(".public").css({opacity:"0"});
  $(".icono_volver").css({opacity:"1"});
  $(".icono_volver").css({cursor:"pointer"});
})


//animcaion caja2: fvideos




$(".pvideos").click(function(){
  $(".public").css({opacity:"0"});
  $(".icono_volver").css({opacity:"1"});
  $(".icono_volver").css({cursor:"pointer"});
})


$(".icono_volver").click(function(){
 $(".public").css({opacity:"1"});
 $(".icono_volver").css({opacity:"0"});
 $(".icono_volver").c({cursor:"none"});
})


//color active a megusta 
var cont1=0;
var cont2=0;


$(".megusta").click(function(){

  if(cont1 == 0){ 

        $(this).css({color:"darkred"});

  cont1=1;

  }else if(cont1 == 1){
      
       $(this).css({color:"white"});
  cont1=0; 

  }
      
}) 


//color active a coment 
var cont3=0;
var cont4=0;


$(".coment").click(function(){

  if(cont3 == 0){ 

        $(this).css({color:"cornflowerblue"});

  cont3=1;

  }else if(cont3 == 1){
      
       $(this).css({color:"white"});
  cont3=0; 

  }
      
}) 




//




})