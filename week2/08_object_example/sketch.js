// Daniel Shiffman
// Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media

// Ported by Lauren McCarthy from Learning Processing
// Example 8-1: A Car class and a Car object

// Declare car object as a global variable.
var myCar; 

function setup() {
  createCanvas(600,400);
  // Initialize Car object
  myCar = new Car();
}

function draw() {
  background(39, 120, 255);
  myCar.display();
  myCar.move();
}

// This is a constructor function and it works
// kind of like a class even though there are no classes in JS
function Car() {
  this.c = 175;
  this.xpos = width/2;
  this.ypos = height/2;
  this.xspeed = 1;

  this.display  = function() {
    rectMode(CENTER);
    stroke(0);
    fill(this.c);
    rect(this.xpos, this.ypos, 100, 50);
  };

  this.move = function() {
    this.xpos += this.xspeed;
    if (this.xpos > width + 50) {
      this.xpos = -50;
    }
  };
}

