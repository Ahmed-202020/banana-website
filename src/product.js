$(".quant").on("click" , function(){
    $(".quant").removeClass("active-quantity") ; 
    $(this).addClass("active-quantity") ; 
});


var counter1 =  $(".value-content-1").text() ; 
var hiddenTag1 = $(".hidden-tag-1").text() ; 
$(".add-1").on("click" , function(){
    counter1 = +counter1+ +hiddenTag1 ; 
    $(".value-content-1").text(counter1) ; 
})
$(".subtract-1").on("click" , function(){
    if(counter1 > 0.5){
        counter1 = +counter1- +hiddenTag1 ; 
        $(".value-content-1").text(counter1);
    }
})


var counter2 =  $(".value-content-2").text() ; 
var hiddenTag2 = $(".hidden-tag-2").text() ; 

$(".add-2").on("click" , function(){
    counter2 = +counter2+ +hiddenTag2 ; 
    $(".value-content-2").text(counter2)
})
$(".subtract-2").on("click" , function(){
    if(counter2 > 0.5){
        counter2 = +counter2- +hiddenTag2 ; 
        $(".value-content-2").text(counter2);
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


