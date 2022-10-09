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
     //icono uno
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
//

var cont1=0;
var cont2=0;


$(".megusta").click(function(){

  if(cont1 == 0){ 

        $(this).css({color:"red"});

  cont1=1;

  }else if(cont1 == 1){
      
       $(this).css({color:"darkred"});
  cont1=0; 

  }
      
}) 
})