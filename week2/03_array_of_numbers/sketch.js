// Daniel Shiffman
// Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media

// Fundamentals of programming in JS (arrays)

// Adapted from Getting Started with Processing
// from Lauren McCarthy


// An empty array!
var x = [];

function setup() {

  createCanvas(600, 400);

  // How to fill an array
  for (var i = 0; i < 100; i++) {
    x.push(random(0, width));
    // x[i] = random(0, width); // This is also ok
  }
}

function draw() {

  background(126, 138, 162);

  noStroke();
  fill(255, 152, 0);
  // Looping through the array
  for (var i = 0; i < x.length; i++) {
    x[i] = x[i] + 1;
    if (x[i] > width + 5) {
      x[i] = -5;
    }
    ellipse (x[i], i*5, 10, 10);
  }
}
