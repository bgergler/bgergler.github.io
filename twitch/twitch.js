$(document).ready(function() {
$.getJSON("TwitchAPIResults.json", function(json) {
$(".message").html(JSON.stringify(json));
});
});