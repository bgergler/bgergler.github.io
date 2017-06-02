$(document).ready(function() {
$.getJSON("TwitchAPIResults.json", function(json) {
$(".message").html(JSON.stringify(json));
});
var activeDisplay = displayAll;
      $('.displayOptions').bind('mouseenter', 
        function(event){ 
           $(event.target).css('width', '50px');
      });
      $('.displayOptions').bind('mouseleave', 
        function(event){ 
           $(event.target).css('width', '10px');
      });
      $('.displayOptions').click(function(event){
      	if(event.target != activeDisplay){
      	$(activeDisplay).css('width', '10px;');
      	$(event.target).css('width', '50px');
}
      })

});