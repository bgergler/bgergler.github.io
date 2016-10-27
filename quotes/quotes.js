$( document ).ready(function(){
	var twitterURL = ""; 
	function setQuote(quote, author){
    //set html on page
		$("#quote").html("\"" + quote + "\"");
    	$("#author").html("-" + author);
	    //if quote, author, and punctiation is less than 140
	    //assemble tweet URL
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
  	$.ajax("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=?",{
      cache: false,
      sucess: function(data){
    setQuote(data[0].content, data[0].title);
      }
    });
  }
  getQuote();

  $("#getQuote").on("click", function(){
  	getQuote();
  });

  $("#tweet-button").on("click", function(){
      	window.open(twitterURL);
  });
});