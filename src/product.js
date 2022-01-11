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


$(".add-to-cart").on("click" , function(){
    Swal.fire(
        "تم" , 
        'تم اضافة المنتج الى عربة الشراء',
        'success'
    ) ; 
})
