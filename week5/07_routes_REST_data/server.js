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

// Create an internal variable users to hold some data
// Later we'll see how this might live in a database
var users = {
  chester: {
    fullname: 'Chester Angus',
    about: 'We are dedicated to helping leverage highly effective solutions for today\'s knowledge-driven eCompanies.',
    age: 19
  },
  gayle: {
    fullname: 'Gayle Ehmann',
    about: 'We are continually evolving, helping to provide web-enabled eBusiness solutions for today\'s Scandinavian virtual companies.',
    age: 30
  },
  dede: {
    fullname: 'Dede Zuehlke',
    about: 'We are continually evolving, helping to enable integrated eTraining portals for today\'s knowledge-driven market leaders.',
    age: 52
  }    
};

// set up routes
route('/', home);
route('/profile/:userid', profile);

// Define route handler functions
function home(request){
  request.serveFile("index.html");
}

// Requesting a profile
function profile(request){
  // What name was requested
  var name = request.params.userid;
  // Does this name exist?
  if (users.hasOwnProperty(name)) {
    // If so display the data
    var fullname = users[name].fullname;
    var about = users[name].about;
    var age = users[name].age;
    var content = "<h1>" + fullname + "</h1>";
    content += "<p>" + about + "</p>";
    content += "<p>I am " + age + " years old.</p>";
    request.respond(content);
  } else {
    // If not say we couldn't find it
    request.respond("<p>Could not find the user " + name + ".</p>");
  }
}

// start the server
start();




