$(".quant").on("click" , function(){
    $(".quant").removeClass("active-quantity") ; 
    $(this).addClass("active-quantity") ; 
});


$(".cash-payment input[type = 'radio']").on("click" , function(){
    $(".type-card").css({"display" : "none"}) ; 
    $(".type-card").css({"display" : "none"}) ; 
    $(".card-payment .form-group").css({"display" : "none"}) ; 
    $(".ask").css({"display" : "block"}) ; 
    $(".payed").css({"display" : "flex"}) ; 
})


$(".card-payment input[type = 'radio']").on("click" , function(){
    $(".ask").css({"display" : "none"}) ; 
    $(".payed").css({"display" : "none"}) ; 
    $(".type-card").css({"display" : "block"}) ; 
    $(".type-card").css({"display" : "block"}) ; 
    $(".card-payment .form-group").css({"display" : "block"}) ; 
});

$(".wallet-payment input[type = 'radio']").on("click" , function(){
    $(".ask").css({"display" : "none"}) ; 
    $(".payed").css({"display" : "none"}) ; 
    $(".type-card").css({"display" : "none"}) ; 
    $(".type-card").css({"display" : "none"}) ; 
    $(".card-payment .form-group").css({"display" : "none"}) ; 
})

$("select#target").on("change" , function(){
    if($('select#target option:checked').hasClass("false") ){
        $(".payed").hide() ;
    }else{
        $(".payed").show() ;
    }
}) ;    

var counter1 =  $(".value-content-1").text() ; 
var min1 = $(".value-content-1").text()  ; 
var hiddenTag1 = $(".hidden-tag-1").text() ; 
$(".add-1").on("click" , function(){
    counter1 = +counter1+ +hiddenTag1 ; 
    $(".value-content-1").text(counter1) ; 
})
$(".subtract-1").on("click" , function(){
    if(counter1 > min1){
        counter1 = +counter1- +hiddenTag1 ; 
        $(".value-content-1").text(counter1);
    }
})


var counter2 =  $(".value-content-2").text() ; 
var min2 = $(".value-content-2").text()  ; 
var hiddenTag2 = $(".hidden-tag-2").text() ; 

$(".add-2").on("click" , function(){
    counter2 = +counter2+ +hiddenTag2 ; 
    $(".value-content-2").text(counter2) ; 
})
$(".subtract-2").on("click" , function(){
    if(counter2 > min2){
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
});

$("#send-req").on("click" , function(){
    $(".successfull-req").modal("show") ; 
});

$('.payments .payment > label input[type="radio"]').on('change', function() {
    $('input[type="radio"]').not(this).prop('checked', false);
});        

$('.cash-payment .payed > label input[type="radio"]').on('change', function() {
    $('.cash-payment .payed > label input[type="radio"]').not(this).prop('checked', false);
});        

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

$(".related-products .btn").on("click" , function(){
    Swal.fire(
        "تم" , 
        'تم اضافة المنتج الى عربة الشراء',
        'success'
    ) ; 
})

