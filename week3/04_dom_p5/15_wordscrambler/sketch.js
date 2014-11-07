// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Let's look an example that messes with user input text
// A ton more here!  https://github.com/shiffman/Programming-from-A-to-Z-F14

// The scrambled text
var scrambled = "";

// The user input
var input;

function setup() {
  noCanvas();

  input = getElement("input");
  // A link that when clicked applies the generate() function
  var go = getElement("button");
  go.mousePressed(generate);
  
  // An HTML Element for the resulting text
  scrambled = createP("");
}

function generate() {
  // Clear the scrambled text
  var scrambledtext = "";

  // What has the user entered?
  var text = input.value();
  // Check to see if they entered something
  var len = text.length;
  if (text.length == '0') {
    alert("Enter something!");
  } else {
    // If they did, scramble up the text using string parsing
    for (var i = 0; i < len; i++) {
      var which = floor(random(text.length));
      scrambledtext += text.charAt(which);
      text = text.substring(0,which) + text.substring(which+1,text.length);
    }
    // Update the HTML Element
    scrambled.html(scrambledtext);
  }
}
