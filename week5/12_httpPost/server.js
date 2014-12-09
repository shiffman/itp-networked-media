// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Thanks Sam Lavigne and Shawn Van Every
// https://github.com/antiboredom/servi.js/wiki

// Use servi
var servi = require('servi');
// Make an app
var app = new servi(true);
// Set the port
port(3001);

// This is basically just like 'python -m SimpleHTTPServer'
// We are just serving up a directory of files
serveFiles("public");

// Now we are making a database
// This uses https://github.com/louischatriot/nedb behind the scenes
// It saves your data like JSON
var names = useDatabase("namesdb");

// A route for saving data
route('/save', saveData);

// Let's save the data
function saveData(request) {

  names.add(request.fields);
  
  // Now response with JSON
  names.getAll(gotData);

  function gotData(data) {
    // Specify the output as JSON
    request.header('application/json');
    // These second two arguments make it a little prettier to look at
    request.respond(JSON.stringify(data, null, 2));
  }

}

// Start the server!
start();


