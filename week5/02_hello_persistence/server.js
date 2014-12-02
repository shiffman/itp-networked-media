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
// Set the port, needs to be before start()
port(3001);

// Default route
route('/', requestHandler);

var counter = 0;

// A simple reply
function requestHandler(request) {
  // This variable will store a value across all requests from any clients as long as the
  // server is running.  Later we'll see how to store data in a database so that it
  // is saved even if we restart the server.
  counter++;
  var txt = "I have received " + counter + " request";
  if (counter > 1) {
    txt += "s";
  } 
  txt += ".";
  request.respond(txt);
}

// Start the server
start();