<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
$( document ).ready(fucntion() {
	$.ajax({
		url: 'https://wind-bow.hyperdev.space/twitch-api/streams/freecodecamp?callback=?',
		type: 'GET',
		success: function(data){
			console.log(data);
		}
	});
});