// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// From https://github.com/lmccart/itp-creative-js

var red = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  noStroke();
  fill(255, 255, 255);
}

function draw() {
  background(red, 0, 255);
  rect(300, 200, 200, 600); // simulated button

  if((touchX > 300) && (touchX < 500) && (touchY > 200) && (touchY < 800)){ // if touch inside rectangle
    red = 255;
  } else {
    red = 0;
  }
}