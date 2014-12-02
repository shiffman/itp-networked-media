// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Adapted from https://github.com/robynitp/networkedmedia

// Every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// Set the port (defaults to 3000 if you leave out this line)
port(3001);

// set up a database
// looks for a file called "people.db" or creates one if it doesn't exist
var namesDB = useDatabase("people"); 

// set up the routes
route('/', showAll);
route('/add/:person',addName);
route('/view/:id',getById);
route('/search',doSearch);

// Add new name to database
// this works from a URL, but could use a form instead, as the search function does below 
function addName(request){
  var d = new Date(); // get the current date 
  var dateToday = d.toString(); // turn it to a human-readable string
  namesDB.add(
    {
      name:request.params.person,
      date_added: dateToday
      // using a form, you could access more than one parameter 
      // and put more info into this object
      // for example, include city, email address, favorite color, etc.
      //   city: request.params.city 
    });
  request.respond("Added "+request.params.person);
}

// show all the names
function showAll(request){
  namesDB.getAll(gotNames);
  function gotNames(names){
    namesText = "";
    if (names.length > 0){
      for (i =0; i < names.length; i++) {
        // create a link like: <a href="/view/1DlDQu55m85dqNQJ">Joe</a><br/>
        namesText += '<a href="/view/' + names[i]._id + '">' + names[i].name + "</a><br/>";
      }
    } else {
      namesText = "No people in the database yet.";
    }
    
    //console.log(namesText);
    var footerText = '<hr/><p><a href="/search">Search</a>';
    request.respond( namesText + footerText);
  } 
}

function getById(request){
  var id = request.params.id;
  // get via the built-in _id and send result to displayPerson function
  namesDB.getOne(id, displayPerson);

  function displayPerson(personObj){
    console.log(personObj); //the object returned
    var content = '<h1>My name is ' + personObj.name + '</h1>';
    content += '<p>Joined ' + personObj.date_added + '</p>';
    request.respond(content);
  }
}

function doSearch(request){
  // if the form has not been submitted, show the form
  if (typeof request.params.submit === 'undefined'){
    // no params present, so this must be a new search -- show the form.
    request.serveFile('search.html');
  } else {
    var searchTerm = request.params.searchname;

    namesDB.search('name', searchTerm, foundIt);

    function foundIt(data) {
      var responseText = '';
      // if records were found
        if (data.length > 0){
          responseText = 'We found:<br/>';
          // loop through the records and print results
          for (i=0; i < data.length; i++){
            responseText += '<li>' + data[i].name + '</li>';
          }
        } else {
          responseText = "No results found"; 
        }
        request.respond(responseText);
    }
  }
}

start();