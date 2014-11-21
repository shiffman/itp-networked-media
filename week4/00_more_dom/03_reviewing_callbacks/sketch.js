// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

var para;

function setup() {
  noCanvas();
  para = createP("Here I am.");
  para.style("font-size","64pt");


  para.mousePressed(change);

  // This is the native JS way
  // para.elt.addEventListener('click',change);
}

// This is a callback function
// It is "called back" whenever the mouse is pressed on
// the paragraph
function change() {
  para.html("There I go.");
}