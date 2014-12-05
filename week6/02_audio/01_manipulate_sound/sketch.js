// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Based on https://github.com/shiffman/LearningProcessing
// Thanks to Jason Sigal and p5.sound
// https://github.com/therewasaguy/p5.sound 

var song;

var volumeSlider;
var speedSlider;

function preload() {
  // Load a sound file
  song = loadSound("lucky_dragons_-_power_melody.mp3");  
}

function setup() {
  
  
  var button = createButton("toggle play");
  button.mousePressed(function() {
    if (song.isPlaying()) {
      song.stop();
    } else {
      song.loop();
    }
  });
  createP('').child(button);

  volumeSlider = createSlider(0,200,100);
  speedSlider = createSlider(1,400,100);

  noCanvas();
}

function draw() {
  // Set the volume to a range between 0 and 1.0
  if (song.isPlaying()) {
    song.amp(volumeSlider.value()/100.0);
  }
  // Set the rate to a range between 0.1 and 4
  // Changing the rate alters the pitchf
  if (song.isPlaying()) {
    song.rate(speedSlider.value()/100.0);
  }
}