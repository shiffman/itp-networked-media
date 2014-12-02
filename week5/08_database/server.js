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

// Add some people to the db
namesDB.add({ name: 'Alejandro', age: 19 });
namesDB.add({ name: 'Mimi',      age: 20 });
namesDB.add({ name: 'Gregor',    age: 85 });
namesDB.add({ name: 'Ramie',     age: 9} );

// Each of these lines could also be written:
// var person = {
//   name: 'Alexjandro',
//   age: 19
// };
// namesDB.add(person);


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
      namestext += names[i].name + ' ' + names[i].age + '<br/>';
    }
    
    // Send out the data
    request.respond(namestext);
  }
  
}

start();