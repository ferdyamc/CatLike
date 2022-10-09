$(document).ready(function(){

var pos=0;	
//animacion menus  desplegables a partir del logo
	$(".logo").click(function(){

	
         if(pos == 0){
           $(".navegador .flechad").css({"opacity":"0"});
            $(".navegador .flechai").css({"opacity":"0"}); 
		   $(".ui li").animate({marginRight:0},"slow");

		   $(".ud li").animate({marginLeft:0},"slow");
        
            pos=1;	  

         }else if(pos == 1){
 
            $(".navegador .flechad").css({"opacity":"1"});
            $(".navegador .flechai").css({"opacity":"1"});
		   $(".ui li").animate({marginRight:"-550px"},"slow");
           
	       $(".ud li").animate({marginLeft:"-600px"},"slow");
         
            pos=0;
         }

     })


 

//animacion opacidad iconos menus desplegables
// li  - lista izquierda
	$(".ui li").mouseover(function(){
    	$(this).animate({opacity:1},"fast");
    	
    })
        $(".ui li").mouseleave(function(){
    	$(this).animate({opacity:0.5},"fast");
    })


// li  - lista derecha
     $(".ud li").mouseover(function(){
    	$(this).animate({opacity:1},"fast");
    })
     $(".ud li").mouseleave(function(){
    	$(this).animate({opacity:0.5},"fast");
    })
    

//animacion mouseover informacion siguiente menu    
    $(".nombre").mouseover(function(){
           $(this).css({"color":"rgba(200, 87, 89,1)"});

    })
    $(".nombre").mouseleave(function(){
           $(this).css({"color":"white"});
    })
//inputs stilos en focus  y en blur
      $(".formudos input").focus(function(){
        $(this).css({"border":"2px solid #fc5957"});
        $(this).css({"color":"#fc5957"});
    })
          $(".formudos input").blur(function(){
        $(this).css({"border":"none"});
        $(this).css({"color":"#fc5957"});
    })
        $(".formu input").focus(function(){
        $(this).css({"border":"2px solid #fc5957"});
        $(this).css({"color":"#fc5957"});
    })
          $(".formu input").blur(function(){
        $(this).css({"border":"none"});
        $(this).css({"color":"#fc5957"});
    })

})