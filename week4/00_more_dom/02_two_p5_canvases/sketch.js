// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Based on https://github.com/lmccart/itp-networked-media

// Create first sketch
// It's a function that receives an argument
var s0 = function(p) {
  
  // Variables we don't need anywhere else can just be var
  var x = 0;

  // Everything related to p5 is attached to the argument
  p.setup = function() {
    p.createCanvas(200, 200);
  }
  
  p.draw = function() {
    p.background(51);
    p.stroke(255);
    p.line(x, 0, x, p.height);
    x = x + 1;
    if (x > p.width) {
      x = 0;
    }
  }
};

// Create second sketch
var s1 = function(p) {

  // If I want access to a variable elsewhere attach it to p
  p.x = 0;

  p.setup = function() {
    p.createCanvas(200, 200);
  }

  p.draw = function() {
    p.background(151);
    p.stroke(0);
    p.line(p.x, 0, p.x, p.height);
    p.x = p.x + 2;
    if (p.x > p.width) {
      p.x = 0;
    }
  }
};

// Make a p5 objects and send in s0 and s1!
// This makes the skethes actually appear on the page
var thesketch0 = new p5(s0);
var thesketch1 = new p5(s1);

function resetIt() {
  console.log("test");
  thesketch1.x = 0;
}

