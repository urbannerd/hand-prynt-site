$(document).ready(function () {
  $('#toggle-mobile').click(function() {
    $('#overlay').toggleClass('open'); 
   });
  
  $('#toggle').click(function() {
    $('#overlay').toggleClass('open'); 
   });

   $('#overlay li').on('click', function(){
    $(".open").removeClass('open');
    setTimeout(function(){window.location = window.location}, 3);
    
});
}); // End of use strict

