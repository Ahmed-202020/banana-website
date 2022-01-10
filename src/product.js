$(".quant").on("click" , function(){
    $(".quant").removeClass("active-quantity") ; 
    $(this).addClass("active-quantity") ; 
});
var counter = $(".value-content").text() ;  
$(".add").on("click" , function(){
    counter = +counter+0.5 ; 
    $(".value-content").text(counter)
})
$(".subtract").on("click" , function(){
    if(counter > 0.5){
        counter = +counter-0.5 ; 
        $(".value-content").text(counter)
    }
})

$(".hearty").on("click" , function(){
    $(this).toggleClass("active-fav");
})
$(".add-to-cart").on("click" , function(){
    Swal.fire(
        "تم" , 
        'تم اضافة المنتج الى عربة الشراء',
        'success'
    ) ; 
})
