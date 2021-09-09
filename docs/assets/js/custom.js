  $(document).on('click', '.toggle', function(event) {
  event.preventDefault();
  
  var target = $(this).data('target');
  $('#' + target).toggleClass('hide');
});





   $(".menu_btn").click(function () {
       $(this).toggleClass("on");
        $(".nav-primary").slideToggle();
    });



//sticky bar//  

$(window).scroll(function () {
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

//sticky bar end //  

$(".faq-point-box-title").click(function() {
  $(this).toggleClass('active');
  $(this).next().slideToggle();
  $('.faq-point-box-title').not($(this)).removeClass('active');
  $('.faq-point-box-description').not($(this).next()).slideUp();
});


// banner slider end //
