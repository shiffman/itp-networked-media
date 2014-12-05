// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Based on https://github.com/shiffman/LearningProcessing
// Thanks to Jason Sigal and p5.sound
// https://github.com/therewasaguy/p5.sound 


var osc;


var volumeSlider;
var speedSlider;

function setup() {
  
  osc = new p5.SinOsc();

  var button = createButton("toggle play");
  button.mousePressed(function() {
    osc.start();
    osc.amp(1);
  });
  createP('').child(button);

  freqSlider = createSlider(0,880,440);

  noCanvas();
}

function draw() {
  // Set the volume to a range between 0 and 1.0
  osc.freq(freqSlider.value());
}