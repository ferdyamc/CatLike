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


})