$( document ).ready(function(){
	//function to set html (call inside getQuote)
	//set onClick value of tweet button (move logic here to build URL)
	var twitterURL = ""; 
	function setQuote(quote, author){
		$("#quote").html("\"" + quote + "\"");
    	$("#author").html("-" + author);
	    //if quote, author, and punctiation is less than 140
	    //assemble tweet
	    twitterURL = 'https://twitter.com/intent/tweet?text=';
	    if((quote.length + author.length + 4) <= 140){
		     twitterURL += "%E2%80%9C" + encodeURIComponent(quote) + "%E2%80%9D -" + author;
		}
		     //if needed, truncate quote and add "..." to make room for the author
		else{
		     twitterURL += "%E2%80%9C" + encodeURIComponent(quote.slice(0, (140 - author.length - 7))) + "...%E2%80%9C -" + author;
		}
	}

function getQuote(){
	$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",function(data){
	setQuote(data.quoteText,	data.quoteAuthor);
		});
}
getQuote();

$("#getQuote").on("click", function(){
	getQuote();
});
/* var quotes = [];
//choose a random number between 0 and size of quotes array
  var quoteIndex = Math.floor((Math.random()*quotes.length));
  var splicedQuotes = [];
  //initialize page with a random quote
    $("#quote").html("\"" + quotes[quoteIndex]["quote"] + "\"");
    $("#author").html("-" + quotes[quoteIndex]["author"]);
  //remove the quote we used and put it in a separate array
  splicedQuotes.push(quotes.splice(quoteIndex,1)[0]);
  //on click, choose a new random number
  $("#getQuote").on("click", function(){
    quoteIndex = Math.floor((Math.random()*quotes.length));
    //use random number as index to choose a random quote
    //place quote and author in respective header fields
    $("#quote").html("\"" + quotes[quoteIndex]["quote"] + "\"");
    $("#author").html("-" + quotes[quoteIndex]["author"]);
    //move quote to our splicedQuotes array
    splicedQuotes.push(quotes.splice(quoteIndex,1)[0]);
    //if no more quotes left, reset the quotes array
    if(quotes.length == 0){
      quotes = splicedQuotes;
      splicedQuotes = [];
      //remove the currently displayed quote
      splicedQuotes.push(quotes.pop());
        }
   
    }); */
    //function to tweet
    $("#tweet-button").on("click", function(){
    	window.open(twitterURL);
    });
});