// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Based on https://github.com/shiffman/LearningProcessing
// Thanks to Jason Sigal and p5.sound
// https://github.com/therewasaguy/p5.sound 

var input;
var analyzer;

function setup() {
  createCanvas(400, 400);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();
  fill(0);
  stroke(0);

  // Draw an ellipse with height based on volume
  var r = map(vol, 0, 1, 0, width/2);
  ellipse(width/2, height / 2, r*2, r*2);
}