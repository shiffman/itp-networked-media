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
// Set the port, needs to be before start()
port(3001);

// Default route
route('/', requestHandler);

// A simple reply
function requestHandler(request) {
  // Just spitting back some text
  request.respond("Hi!");
}

// Start the server
start();