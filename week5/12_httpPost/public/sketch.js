// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman


// Some DOM stuff
var input;
var numput;
var results;

// Just a setup
function setup() {
  
  // No canvas
  noCanvas();
  
  // like a form but not actually a form
  input = createInput('type in a name');
  numput = createInput('00');

  // Here's our submit button
  var submit = createA('#','post the data');
  submit.mousePressed(postIt);  

  // To show stuff
  results = createDiv('');
  
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
  var data = JSON.parse(res.response);
  
  // Make some divs with the data
  results.remove();
  results = createDiv('');
    for (var i = 0; i < data.length; i++) {
    var record = createDiv(data[i].name + ',' + data[i].num);
    record.parent(results);
  }
}