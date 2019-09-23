$(document).ready(function () {
  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });
   $('#overlay li').on('click', function(){
    $("#overlay").hide();
    $("#toggle").removeClass("active");
});
}); // End of use strict

