$( document ).ready(function(){
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
   
    });
    //function to tweet
    $("#tweet-button").on("click", function(){
    //build a string for the twitter URL to post
    var twitterURL = 'https://twitter.com/intent/tweet?text=';
      //if quote, author, and punctiation is less than 140
      //assemble tweet
    if((splicedQuotes[splicedQuotes.length - 1].quote.length +               splicedQuotes[splicedQuotes.length - 1].author.length + 4) <= 140){
     twitterURL += "%E2%80%9C" + encodeURIComponent(splicedQuotes[splicedQuotes.length - 1].quote) + "%E2%80%9D -" + splicedQuotes[splicedQuotes.length - 1].author;
    }
      //if needed, truncate quote and add "..." to make room for the author
      else{
      twitterURL += "%E2%80%9C" + encodeURIComponent(splicedQuotes[splicedQuotes.length - 1].quote.slice(0, (140 - splicedQuotes[splicedQuotes.length - 1].author.length - 7))) + "...%E2%80%9C -" + splicedQuotes[splicedQuotes.length - 1].author;
      }
      window.open(twitterURL);
    });
  });