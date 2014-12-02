// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// adapted from https://github.com/robynitp/networkedmedia

// Every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// Set the port (defaults to 3000 if you leave out this line)
port(3001);

// Create an internal variable users to hold some data
var users = {
  Joe: {
    about: "I like cats and kittens.",
    age: 19
  },
  Jane: {
    about: "I live in Alberta and like to code.",
    age: 30
  },
  Morgan: {
    about: "Craft beer and pickles and kale!",
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

function profile(request){
  var name = request.params.userid;
  if (users.hasOwnProperty(name)) {
    var about = users[name].about;
    var age = users[name].age;
    var content = "<h1>" + name + "</h1>";
    content += "<p>" + about + "</p>";
    content += "<p>I am " + age + " years old.</p>";
    request.respond(content);
  } else {
    request.respond("<p>Could not find the user " + name + ".</p>");
  }
}

// start the server
start();




