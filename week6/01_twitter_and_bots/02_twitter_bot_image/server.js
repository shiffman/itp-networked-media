// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// No server though there could be one

// We'll use this to post to twitter directly without
// the Twit library (doesn't support media posts)
var request = require('request');

// var fs = require('fs');
// fs.readFile('test.png', 
//   function(err, data) {
//     var buffer = new Buffer(data, 'base64');  
//     tweetImage('This is a test of tweeting an image', buffer);   
//   }
// );

// Some cooky node-canvas stuff
var Canvas = require('canvas');
var Image = Canvas.Image;
var canvas = new Canvas(600,400);
var ctx = canvas.getContext('2d');
ctx.fillStyle = "pink";
ctx.fillRect(0,0,600,400);
ctx.strokeStyle = 'rgba(0,0,0,0.5)';
ctx.beginPath();
ctx.lineTo(0, 0);
ctx.lineTo(600, 400);
ctx.stroke();
// This is what we're tweeting
tweetImage('Ooops, Another line and some more pink.', canvas.toBuffer());


// A status update and some data for an image
function tweetImage(status, buffer) {
  // Using request to post
  var r = request.post({
    url: "https://api.twitter.com/1.1/statuses/update_with_media.json",
    
    // Twitter account data
    oauth: {
      consumer_key:     '',
      consumer_secret:  '',
      token:            '',
      token_secret:     ''
    }    
  }, 
  function(err, response, body) {
     return console.log(err, body);
  });

  // Now put the stuff in the post
  var form = r.form();
  form.append('status', status);
  form.append('media[]', buffer);
}

