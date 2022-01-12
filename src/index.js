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
  $(".custom-item").on("click" , function(){
    $(".custom-item").removeClass("active-bar") ; 
    $(this).addClass("active-bar") ; 
  })
  $(".custom-sort").on("click" , function(){
    $(".custom-sort").removeClass("active-categ") ; 
    $(this).addClass("active-categ") ; 
  })

  $("#signin").on("click" , function(){
    $(".register").modal("show")
  })
  $("#signup").on("click" , function(){
    $(".create").modal("show") ; 
  })

  $(".close-register").on("click" , function(){
    $(".register").modal("hide") ; 
  })

  $(".close-create").on("click" , function(){
    $(".create").modal("hide") ; 
  })

  $("#des .close a").on("click" , function(){
    $(this).parentsUntil("body").fadeOut(700 , function(){
      $(".modal-type-sort").modal("show") ; 
      $(".modal-type-sort .done").on("click" , function(){
        $(".modal-type-sort").modal("hide") ; 
        $(".modal-location").modal("show");
      })
    })
  })

  $(".modal-location .close img").on("click" , function(){
    $(".modal-location").modal("hide");
  })

  $(".modal-type-sort .content").on("click" , function(){
    $(".modal-type-sort .content").removeClass("active-content") ; 
    $(this).addClass("active-content") ; 
  })
  $(".common-products .btn").on("click" , function(){
    Swal.fire(
      "تم" , 
      'تم اضافة المنتج الى عربة الشراء',
      'success'
    ) ; 
  })
})










