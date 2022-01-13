$(".quant").on("click" , function(){
    $(".quant").removeClass("active-quantity") ; 
    $(this).addClass("active-quantity") ; 
});
var counter = 0.5
$(".add-1").on("click" , function(){
    counter = +counter+0.5 ; 
    $(".value-content-1").text(counter)
})
$(".subtract-1").on("click" , function(){
    if(counter > 0.5){
        counter = +counter-0.5 ; 
        $(".value-content-1").text(counter)
    }
})

$(".add-2").on("click" , function(){
    counter = +counter+0.5 ; 
    $(".value-content-2").text(counter)
})
$(".subtract-2").on("click" , function(){
    if(counter > 0.5){
        counter = +counter-0.5 ; 
        $(".value-content-2").text(counter)
    }
})


$(".hearty").on("click" , function(){
    $(this).toggleClass("active-fav");
})

$(".delete-order").on("click" , function(){
    $(this).parentsUntil(".current-orders").fadeOut(200) ; 
})

$(".modal-confirm").on("click" , function(){
    $(".modal-addresses").modal("show") ; 
})

$(".modal-edit").on("click" , function(){
    $(".modal-edit-address").modal("show") ;
        $(".modal-addresses").modal("hide") ; 
})

$(".another-address").on("click" , function(){
    $(".modal-add-address").modal("show") ; 
    $(".modal-addresses").modal("hide") ;
})

$(".delete").on("click" , function(){
    $(this).parentsUntil(".addresses").fadeOut() ; 
})
$("#send-req").on("click" , function(){
    $(".successfull-req").modal("show") ; 
});
  
    $('input[type="radio"]').on('change', function() {
        $('input[type="radio"]').not(this).prop('checked', false);
    });        
    $(".payment .payed span").on("click" , function(){
        $(".payment .payed span").removeClass("active-pay") ;
        $(this).addClass("active-pay") ; 
    })

    $(".payment .type-card img").on("click" , function(){
        $(".payment .type-card img").removeClass("active-card") ;
        $(this).addClass("active-card") ; 
    }) ; 

$(".add-to-cart").on("click" , function(){
    Swal.fire(
        "تم" , 
        'تم اضافة المنتج الى عربة الشراء',
        'success'
    ) ; 
})


