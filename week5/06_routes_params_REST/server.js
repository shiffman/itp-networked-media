// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Thanks Sam Lavigne and Shawn Van Every
// https://github.com/antiboredom/servi.js/wiki

// Use servi 
// npm install servi
var servi = require('servi');
// Make an app
var app = new servi(true);
// Set the port
port(3001);

route('/thing/:name/:num', doThing);

function doThing(request) {
  var name = request.params.name;
  var num = request.params.num;
  var output = '';
  for (var i = 0; i < num; i++) {
    output += "Thanks for doing your thing, " + name + '.<br/>';
  }
  request.respond(output);
}

start();


