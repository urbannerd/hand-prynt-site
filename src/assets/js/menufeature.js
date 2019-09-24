$(document).ready(function () {
  $('#toggle-mobile').click(function() {
    $('#overlay').toggleClass('open');  
   });
  
  $('#toggle').click(function() {
    $('#overlay').toggleClass('open'); 
   });

   $('#overlay li').on('click', function(){
    $(".open").removeClass('open');
    
});




}); // End of use strict

