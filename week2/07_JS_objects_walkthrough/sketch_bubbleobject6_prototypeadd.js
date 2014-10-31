// Daniel Shiffman
// Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media

// Demonstrating some JS object stuff

var bubble1;
var bubble2;

// A constructor function
var Bubble = function (x_) {
  this.x = x_;
  this.y = height;
  this.w = 100;
}

// You can add data or functions to all objects made
// from the constructor function after the fact through
// the "prototype"
Bubble.prototype.move = function() {
  this.x = this.x + random(-1,1);
  this.y = this.y - 1;
};

function setup() {
  createCanvas(600,400);
  bubble1 = new Bubble(300); 
  bubble2 = new Bubble(100); //Object.create(bubble1);
}

function draw() {
  background(50);
  fill(125);
  stroke(255);
  ellipse(bubble1.x,bubble1.y,bubble1.w,bubble1.w);
  bubble1.move();
  ellipse(bubble2.x,bubble2.y,bubble2.w,bubble2.w);
  bubble2.move();
}



