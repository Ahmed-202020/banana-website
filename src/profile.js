$(function(){
    $(".delete").on("click" , function(){
        $(this).parentsUntil(".addresses").fadeOut() ; 
    })
    $(".edition").on("click" , function(){
        $(".orders").remove() ; 
        $(this).text("حفظ") ;
        $(this).css(({backgroundColor : "#ff3003"}))
    })
}) ;

