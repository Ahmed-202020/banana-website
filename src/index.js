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
  }) ; 
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

  if($(".fruits-vegetables").hasClass("active-bar")){
    $(".custom-common-products .fruits-vegetables").css({display: "grid"}) ;
    $(".custom-common-products .drinks").hide() ;
    $(".custom-common-products .sweets").hide() ;
    $(".custom-common-products .bakeries").hide() ;
    $(".custom-common-products .dairies").hide() ;
    $(".custom-common-products .meates").hide() ;

    $(".custom-sub-item-1").text("فواكه") ;
    $(".custom-sub-item-2").text("خضروات") ;
  }
  $(".custom-categories .fruits-vegetables").on("click" , function(){
    if($(".fruits-vegetables").hasClass("active-bar")){
        $(".custom-common-products .fruits-vegetables").css({display: "grid"}) ;
        $(".custom-common-products .drinks").hide() ;
        $(".custom-common-products .sweets").hide() ;
        $(".custom-common-products .bakeries").hide() ;
        $(".custom-common-products .dairies").hide() ;
        $(".custom-common-products .meates").hide() ;

        $(".custom-sub-item-1").text("فواكه") ;
        $(".custom-sub-item-2").text("خضروات") ;
    }
  });

 $(".custom-categories .drinks").on("click" , function(){
  if($(".drinks").hasClass("active-bar")){
      $(".custom-common-products .drinks").css({display: "grid"}) ;
      $(".custom-common-products .fruits-vegetables").hide() ;
      $(".custom-common-products .sweets").hide() ;
      $(".custom-common-products .bakeries").hide() ;
      $(".custom-common-products .dairies").hide() ;
      $(".custom-common-products .meates").hide() ;

      $(".custom-sub-item-1").text("بيبسي") ;
      $(".custom-sub-item-2").text("كولا") ;
    }
  });
  
 $(".custom-categories .sweets").on("click" , function(){
  if($(".sweets").hasClass("active-bar")){
      $(".custom-common-products .sweets").css({display: "grid"}) ;
      $(".custom-common-products .fruits-vegetables").hide() ;
      $(".custom-common-products .drinks").hide() ;
      $(".custom-common-products .bakeries").hide() ;
      $(".custom-common-products .dairies").hide() ;
      $(".custom-common-products .meates").hide() ;

      $(".custom-sub-item-1").text("شرقية") ;
      $(".custom-sub-item-2").text("غربية") ;
    }
  });
  
 $(".custom-categories .bakeries").on("click" , function(){
  if($(".bakeries").hasClass("active-bar")){
      $(".custom-common-products .bakeries").css({display: "grid"}) ;
      $(".custom-common-products .fruits-vegetables").hide() ;
      $(".custom-common-products .sweets").hide() ;
      $(".custom-common-products .drinks").hide() ;
      $(".custom-common-products .dairies").hide() ;
      $(".custom-common-products .meates").hide() ;

      $(".custom-sub-item-1").text("شرقية") ;
      $(".custom-sub-item-2").text("غربية") ;
    }
  });
  
 $(".custom-categories .dairies").on("click" , function(){
  if($(".dairies").hasClass("active-bar")){
      $(".custom-common-products .dairies").css({display: "grid"}) ;
      $(".custom-common-products .fruits-vegetables").hide() ;
      $(".custom-common-products .sweets").hide() ;
      $(".custom-common-products .bakeries").hide() ;
      $(".custom-common-products .drinks").hide() ;
      $(".custom-common-products .meates").hide() ;

      $(".custom-sub-item-1").text("خالي الدسم") ;
      $(".custom-sub-item-2").text("كامل الدسم") ;
    }
  });
  
 $(".custom-categories .meates").on("click" , function(){
  if($(".meates").hasClass("active-bar")){
      $(".custom-common-products .meates").css({display: "grid"}) ;
      $(".custom-common-products .fruits-vegetables").hide() ;
      $(".custom-common-products .sweets").hide() ;
      $(".custom-common-products .bakeries").hide() ;
      $(".custom-common-products .dairies").hide() ;
      $(".custom-common-products .drinks").hide() ;

      $(".custom-sub-item-1").text("مثلجة") ;
      $(".custom-sub-item-2").text("بلدي") ;
    }
  });

  if($(".custom-sub-item-all").hasClass("active-categ")){
    $(".custom-common-products product-1").css({display: "block"}) ;
    $(".custom-common-products product-2").css({display: "block"}) ;
  }
  if($(".custom-sub-item-1").hasClass("active-categ")){
    $(".custom-common-products product-1").css({display: "block"}) ;
    $(".custom-common-products product-2").hide() ;
  }
  if($(".custom-sub-item-2").hasClass("active-categ")){
    $(".custom-common-products product-2").css({display: "block"}) ;
    $(".custom-common-products product-1").hide() ;
  }
  $(".custom-sub-item-all").on("click" , function(){
    $(".custom-common-products .product-1").css({display: "block"}) ;
    $(".custom-common-products .product-2").css({display: "block"}) ;
  })
  $(".custom-sub-item-1").on("click" , function(){
    $(".custom-common-products .product-1").css({display: "block"}) ;
    $(".custom-common-products .product-2").hide() ;
 
  })
  $(".custom-sub-item-2").on("click" , function(){
    $(".custom-common-products .product-2").css({display: "block"}) ;
    $(".custom-common-products .product-1").hide() ;
  })
  
  $(".common-products .btn").on("click" , function(){
    Swal.fire(
      "تم" , 
      'تم اضافة المنتج الى عربة الشراء',
      'success'
    ) ; 
  })
})













