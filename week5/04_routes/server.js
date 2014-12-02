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

// This is basically just like 'python -m SimpleHTTPServer'
// We are just serving up a directory of files
serveFiles("public");

// A specific route
route('/about', aboutPage);

function aboutPage(request) {
  var html  = '<h1>Dynamically Generated Header</h2>';
  html     += '<p>Look!  A random number: ' + Math.random() * 100 + '</p>';
  request.respond(html);
}

// Another route
route('/sketch', sketchPage);

// We can serve up an individual file
function sketchPage(request) {
  request.serveFile('public/sketch.html');
}

// Start the server
start();



