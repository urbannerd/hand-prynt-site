$(document).ready(function () {
  var $nav = $(".navbar-fixed-top");

  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $nav.toggleClass('noscroll');
    $('#overlay').toggleClass('open'); 
   });


   $('#overlay li overlay-menu').on('click', function(){
    $("#overlay").hide();
    $("#toggle").removeClass("active");
    
});


$(document).scroll(function () {
  var $nav = $(".navbar-fixed-top");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});
}); // End of use strict

