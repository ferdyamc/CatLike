$(document).ready(function(){
    $("#botonC1").click(function(){
    $(".CajaInfo1").css({display:"block"});
    $(".cerrar").css({display:"block"});
    $("body").css({overflow:"hidden"});
})
    $(".cerrar").click(function(){
        $(".CajaInfo1").css({display:"none"});
        $(".cerrar").css({display:"none"});
        $("body").css({overflow:"auto"});
    })
    
    
    $("#botonC2").click(function(){
        $(".CajaInfo2").css({display:"block"})
        $(".cerrar").css({display:"block"})
        $("body").css({overflow:"hidden"});
    })
    
    $(".cerrar").click(function(){
        $(".CajaInfo2").css({display:"none"})
        $(".cerrar").css({display:"none"})
        $("body").css({overflow:"auto"});
    })
    
    $("#botonC3").click(function(){
        $(".CajaInfo3").css({display:"block"});
        $(".cerrar").css({display:"block"});
        $("body").css({overflow:"hidden"});
    })
    $(".cerrar").click(function(){
        $(".CajaInfo3").css({display:"none"})
        $(".cerrar").css({display:"none"})
        $("body").css({overflow:"auto"});
    })
    
    $("#botonC4").click(function(){
        $(".CajaInfo4").css({display:"block"});
        $(".cerrar").css({display:"block"});
        $("body").css({overflow:"hidden"});
    })
    
    $(".cerrar").click(function(){
        $(".CajaInfo4").css({display:"none"})
        $(".cerrar").css({display:"none"})
        $("body").css({overflow:"auto"});
    })
})

