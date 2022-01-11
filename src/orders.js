$(function(){
    $(".item").on("click" , function(){
        $(".item").removeClass("active-orders") ; 
        $(this).addClass("active-orders") ; 
    })
    $(function(){
        $(".delete-order").on("click" , function(){
            $(this).parentsUntil(".orders").fadeOut(200) ; 
        })

        $(".current-orders-item").on("click" , function(){
            if($(".current-orders-item").hasClass("active-orders")){
                $(".current-orders").show() ; 
                $(".prev-orders").css({display: "none"}) ; 
            }
        });
        $(".prev-orders-item").on("click" , function(){
            if($(".prev-orders-item").hasClass("active-orders")){
                $(".current-orders").css({display: "none"}) ; 
                $(".prev-orders").show() ; 
            }
        });
    }) ;
});