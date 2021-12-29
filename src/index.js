let form = document.getElementById("frm") ; 
let img = document.getElementById("img") ; 
let sort = document.getElementById("sort") ;
let sorting = document.getElementById("sorting") ; 

form.addEventListener("focus" , function(){
  img.setAttribute("src" , "./assets/icons/Search-black.svg") ; 
});
form.addEventListener("blur" , function(){
  img.setAttribute("src" , "./assets/icons/Search.svg") ; 
});
form.addEventListener("focus" , function(){
  sort.setAttribute("src" , "./assets/icons/Icon material-sort-green.svg") ; 
});
form.addEventListener("blur" , function(){
  sort.setAttribute("src" , "./assets/icons/Icon material-sort.svg") ; 
});

$(function(){
    $("#sort").on("click" , function(){
      $("#sorting").fadeToggle() ; 

      $('input[type="checkbox"]').on('change', function() {
        $('input[type="checkbox"]').not(this).prop('checked', false);
     });
    }) ; 

    $(".common-products .btn").on("click" , function(){
      Swal.fire(
        "تم" , 
        'تم اضافة المنتج الى عربة الشراء',
        'success'
      ) ; 
    })
})


