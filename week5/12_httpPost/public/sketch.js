// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman


// Some DOM stuff
var input;
var numput;

// Just a setup
function setup() {
  
  // No canvas
  noCanvas();
  
  // like a form but not actually a form
  input = getElement('name');
  numput = getElement('number');

  // Here's our submit button
  var submit = getElement('post');
  submit.mousePressed(postIt);  

  // To show stuff
  
}

// This function posts to the server
function postIt() {
  var data = {
    name: input.value(),
    num: numput.value(),
  }
  // Post the data to a route and also a callback
  httpPost('/save', data, getResponse);
}

// We get the data back as a response
// This is fancier than we need to be
function getResponse(res) {
  // The response comes in as raw text so we have to
  // convert it to an object
  var data = JSON.parse(res.response);

  createDiv('data saved!');

  // we could make some DIVs or do something
  console.log(data);
  
}