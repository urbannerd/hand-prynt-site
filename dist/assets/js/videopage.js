$(document).ready(function(){
    var play = $('#video_screen');
    var video = $('#video_page_player');
    play.click(function(){
        video.get(0).play();
        $("#video_screen").hide();
    })

});

