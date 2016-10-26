$(document).ready(function() {
	$.ajax({
		url: 'https://wind-bow.hyperdev.space/twitch-api/streams/freecodecamp?callback=?',
		type: 'GET',
		success: function(data){
			console.log(data);
		}
	});
});