// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Adapted from https://github.com/robynitp/networkedmedia
// and https://github.com/lmccart/itp-networked-media

// Every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// Set the port (defaults to 3000 if you leave out this line)
port(3001);

// Set up a database
// The server will look for a file called 'people.db'
// If it doesn't exist it will make one.
var namesDB = useDatabase('people'); 

// Set up the main route
route('/', showAll);

// Show all the names
function showAll(request){
  // This gets all the data
  // Have to wait for a callback
  namesDB.getAll(gotNames);
  
  // Now we've got all the data
  function gotNames(names){
    // Put together some text
    var namestext = '';
    for (i =0; i < names.length; i++) {
      namestext += names[i].name + '<br/>';
    }
    
    // Send out the data
    request.respond(namestext);
  }
}
 
// Here will will use a route to add to the database
// For example: http://123.com/add/Jane
// The name Jane will be added to the database
// Notice the flow of events and data:
// 1. Define a route, '/add/:person', where ':person' is a variable 
// 2. User visits that URL, as in http://123.com/add/Jane
// 3. Grab the variable used in place of ':person', using 'request.params.person'. 
// In this example, 'request.params.person' is equal to 'Jane'

route('/add/:person',addName);

function addName(request){
  // Get the name
  var personName = request.params.person;
  // Add to database
  namesDB.add({ name: personName } );
  // Added the 
  request.respond('Added ' + personName);
}

start();