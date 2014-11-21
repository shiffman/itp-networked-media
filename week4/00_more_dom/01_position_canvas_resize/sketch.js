// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Based on https://github.com/lmccart/itp-networked-media

// Keep track of the canvas
var canvas;

function setup() {
  // Create canvas, store a reference to it in canvas
  c = createCanvas(320, 240);
  // Position canvas in middle of screen
  c.position(windowWidth/2-width/2, windowHeight/2-height/2);

  // If we wanted to instead we could do the centering with CSS
  // c.parent('center');
}

// A simple animation
function draw() {
  background(51);
  stroke(255);
  line(frameCount % width, 0, frameCount % width, height);
}

// This is called automatically whenever the user resizes the window
function windowResized() {
  // Re-position canvas in middle of screen
  c.position(windowWidth/2-width/2, windowHeight/2-height/2);
}