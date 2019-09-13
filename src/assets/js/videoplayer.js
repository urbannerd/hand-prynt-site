$(document).ready(function () {
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
	iframe.innerHTML = '<p>x</p><iframe width="500" height="300" src="https://videocel.s3.amazonaws.com/City.mp4" type="video/mp4" src="https://videocel.s3.amazonaws.com/City.webm" type="video/webm" src="https://videocel.s3.amazonaws.com/City.ogg" type="video/ogg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>';
	var video = iframe.childNodes[1];

	// Replace the image with the video
	event.target.parentNode.replaceChild(video, event.target);

	// Enter fullscreen mode
	video.requestFullscreen();
	
	$("iframe").css({
		'position' : 'absolute',
		'width' : '100%',
		'height' : '100%',
		'top' : '0',
		'left' : '0',
	 });

	  
}, false);
}); // End of use strict

