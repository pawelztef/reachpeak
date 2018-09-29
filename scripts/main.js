$(document).ready(function(){

  $('[data-toggle="tooltip"]').tooltip();

  $(window).on('scroll', function(){ 
    let screenRes = $(window).width();
    if(screenRes > 832 && $(window).scrollTop() >= 35 ) {
      $('.navbar-default').addClass('navbar-fixed');
    } else {
      $('.navbar-default').removeClass('navbar-fixed');
    }
  });
});
