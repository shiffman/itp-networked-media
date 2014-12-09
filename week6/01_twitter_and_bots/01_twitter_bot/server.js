// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// No server though there could be one

// Create an Twitter object to connect to Twitter API
// npm install twit
var Twit = require('twit');
var T = new Twit({
  consumer_key:         '_', 
  consumer_secret:      '_',
  access_token:         '_',
  access_token_secret:  '_'
});


//setInterval(function() {
  var status = 'I am random number bot: ' + Math.random(1);
  postTweet(status);
//}, 100000);


function postTweet(statement) {
  // Post that tweet!
  T.post('statuses/update', { status: statement}, function(err, reply) {
    // If there was an error let's respond with that error
    if (err !== null) {
      console.log(err);
    // Otherwise let's respond back that it worked ok!
    } else {
      console.log(reply);
    }
  });
}
