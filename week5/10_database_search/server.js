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

// Here are a bunch of routes
route('/', showAll);            // homepage
route('/add/:person', addName); // adding to database
route('/view/:id', getById);    // viewing record from database
route('/search', search);     // a search

// Add new name to database
// This works from a URL, but we could use a form instead
// as the search function does below 
function addName(request){
  // Current data
  var d = new Date();
  // Turn into a human-readable string 
  var dateToday = d.toString();

  var data = {
    name:       request.params.person,
    date_added: dateToday
    // We could access more parameters
    // and put more here like city, email address, favorite color, etc.
    // city: request.params.city
  };

  namesDB.add(data);

  request.respond('Added ' + request.params.person);
}

// Show all the names
function showAll(request){
  // This gets all the data
  // Have to wait for a callback
  namesDB.getAll(gotNames);
  
  // Now we've got all the data
  function gotNames(names){
    // Put together some text
    var output = '';
    if (names.length > 0){
      for (i = 0; i < names.length; i++) {
        // Create a link like: <a href='/view/1DlDQu55m85dqNQJ'>Joe</a><br/>
        output += '<a href="/view/' + names[i]._id + '">' + names[i].name + '</a><br/>';
      }
    } else {
      output = 'No people in the database yet.';
    }
    
    var footer = '<hr/><p><a href="/search">Search</a>';
    request.respond(output + footer);
  } 
}

// Showing info for a single ID
function getById(request){
  var id = request.params.id;
  // Get via the id (id is created automatically by servi)
  // resulting data is in callback
  namesDB.getOne(id, displayPerson);
  
  // Respond with the result
  function displayPerson(person){
    var content = '<h1>My name is ' + person.name + '</h1>';
    content    += '<p>Joined ' + person.date_added + '</p>';
    request.respond(content);
  }
}

function search(request){
  // If there are no params the form must not have been submitted
  // so serve the file.
  if (typeof request.params.submit === 'undefined'){
    request.serveFile('search.html');
  } else {
    // The search term
    var searchTerm = request.params.searchname;
     
    // Search in the database
    namesDB.search('name', searchTerm, found);
    
    // Function when the result comes back
    function found(data) {
      // The output
      var output = '';
      // If we found something
      if (data.length > 0){
        output = 'We found:<br/>';
        // Loop through everything we found
        for (var i = 0; i < data.length; i++){
          output += '<li>' + data[i].name + '</li>';
        }
      } else {
        output = 'No results found'; 
      }
      request.respond(output);
    }
  }
}

start();