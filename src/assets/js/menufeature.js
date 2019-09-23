$(document).ready(function () {
  $('#toggle-mobile').click(function() {
    $('#overlay').toggleClass('open');  
   });
  
  $('#toggle').click(function() {
    $('#overlay').toggleClass('open'); 
   });

   $('#overlay li').on('click', function(){
    $("#overlay").hide();
    $("#toggle").removeClass("active");
});



}); // End of use strict

