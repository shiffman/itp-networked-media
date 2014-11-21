// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// These are adapted from https://github.com/lmccart/itp-creative-js
var text;

function setup() {
  noCanvas();
  text = createDiv("Test Div.");
  text.id("blah");

  text.style("background-color","#AAAAAA");
  text.style("text-align","center");
  //text.style("position","fixed");
  text.style("margin-top","50%");
  text.style("margin-bottom","0%");
  text.style("margin-right","0%");
  text.style("margin-left","0%");


}

