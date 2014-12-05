// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// No server though there could be one

var request = require('request');

// var fs = require('fs');
// fs.readFile('test.png', 
//   function(err, data) {
//     var buffer = new Buffer(data, 'base64');  
//     tweetImage('This is a test of tweeting an image', buffer);   
//   }
// );

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

tweetImage('Ooops, Another line and some more pink.', canvas.toBuffer());


function tweetImage(status, buffer) {
  var r = request.post({
    url: "https://api.twitter.com/1.1/statuses/update_with_media.json",

    oauth: {
      consumer_key:     'ja9A00KdXm4Xz7Cc8NCgte7To',
      consumer_secret:  'Szu9nrefnjkaF6FClqIugCGV5WD0YUYjru0wtNvzAhIGr723Ex',
      token:            '2799041194-tl1f5kFOkkaARwsRkDYTSmYu9qjEXvESPGTFP9M',
      token_secret:     'Kp94cdnMH6IFv0AGBthFmNjcPsuFhtFGlTLL94zFVHTzX'
    }
  }, function(err, response, body) {
     return console.log(err, body);
  });
  var form = r.form();
  form.append('status', status);
  form.append('media[]', buffer);
}

