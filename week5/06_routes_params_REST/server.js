// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Thanks Sam Lavigne and Shawn Van Every
// https://github.com/antiboredom/servi.js/wiki

// Use servi 
// npm install servi
var servi = require('servi');
// Make an app
var app = new servi(true);
// Set the port
port(3001);

// Now we are defining a route with parameters
// The parameters are like variables passed into the request
route('/thing/:name/:num', doThing);

// This function is triggered whenever the route is requested
function doThing(request) {
  // Grabbing the values of teh variables
  var name = request.params.name;
  var num = request.params.num;
  // Using them to generate some content
  var output = '';
  for (var i = 0; i < num; i++) {
    output += "Thanks for doing your thing, " + name + '.<br/>';
  }
  request.respond(output);
}

start();


