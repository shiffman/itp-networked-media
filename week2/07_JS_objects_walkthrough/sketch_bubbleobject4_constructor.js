// Daniel Shiffman
// Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media

// Demonstrating some JS object stuff

var bubble1;
var bubble2;

// A constructor function can make an object
function Bubble() {
  // You've got to have "this" to tie this data to this object
  this.x = 300;
  this.y = height;
  this.w = 100;
  this.move = function() {
    this.x = this.x + random(-1,1);
    this.y = this.y - 1;
  };
}

function setup() {
  createCanvas(600,400);
  
  // Make an object, this looks like Java/Processing
  bubble1 = new Bubble(); 

  // And another one
  bubble2 = new Bubble(); //Object.create(bubble1);
  bubble2.x = 100;

  /*bubble2 = {
  	x : 100,
  	y : height,
  	w : 100,
    move : function() {
    	this.x = this.x + random(-1,1);
    	this.y = this.y - 1;
    }
  };*/

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



