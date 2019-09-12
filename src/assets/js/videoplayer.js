$(document).ready(function () {
/**
 * Element.requestFullScreen() polyfill
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!Element.prototype.requestFullscreen) {
	Element.prototype.requestFullscreen = Element.prototype.mozRequestFullscreen || Element.prototype.webkitRequestFullscreen || Element.prototype.msRequestFullscreen;
}

// Listen for clicks
document.addEventListener('click', function (event) {

	// Check if clicked element is a video thumbnail
	var videoId = event.target.getAttribute('data-video');
	if (!videoId) return;

	// Create iframe
	var iframe = document.createElement('div');
	iframe.innerHTML = '<p>x</p><iframe width="auto" height="315" src="//clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
	var video = iframe.childNodes[1];

	// Replace the image with the video
	event.target.parentNode.replaceChild(video, event.target);

	// Enter fullscreen mode
	video.requestFullscreen();
	
}, false);


$(function(){
    var $img       = $("#my_image17")
    $img.on("click", function() {
      $img.remove();
      $container.removeClass().removeAttr("id");
    });
  });
}); // End of use strict

