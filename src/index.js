let sorting = document.getElementById("sorting") ; 
$(function(){
  $("#frm").on("focus" , function(){
    $("#img path").css({"stroke" : "#2a2a2a"}) ;
    $("#sort path").css({"fill" : "#00963f "}) ;
  })
  $("#frm").on("blur" , function(){
    $("#img path").css({"stroke" : "#f2eacb"}) ;
    $("#sort path").css({"fill" : "#f2eacb "}) ;
  })
  $("#sort").on("mouseenter" , function(){
    $("#sort path").css({"fill" : "#00963f"}) ;
  })
  $("#sort").on("mouseleave" , function(){
    $("#sort path").css({"fill" : "#f2eacb "}) ;
  })
  

  $("#sort").on("click" , function(){
    $("#sorting").fadeToggle() ; 
    $('input[type="checkbox"]').on('change', function() {
      $('input[type="checkbox"]').not(this).prop('checked', false);
    });
  });

  $(".custom-item ").on("click" , function(){
    $(".custom-item ").removeClass("active-bar") ; 
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
  });


  $(".login-first").modal("show") ; 

  $(".login-first .custom-btn").on("click" , function(){
    $(".custom-modal-register").modal("show") ; 
    $(".login-first").modal("hide") ; 
  })

  $(".custom-categories .custom-item").on("click" , function(){
    if($(".custom-categories .custom-item").hasClass("active-bar")){
      var text =  $(this).text() ; 
      $("#title-products").text(text) ;
    }
  })
  
  $(".custom-sub-item-all").on("click" , function(){
    $(".custom-common-products .sub-products").css({display: "grid"}) ;
  })
  
  $(".common-products .btn").on("click" , function(){
    Swal.fire(
      "تم" , 
      'تم اضافة المنتج الى عربة الشراء',
      'success'
    ) ; 
  })
})













