// Daniel Shiffman
// Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media

// Demonstrating some JS object stuff

var bubble;

function setup() {
  createCanvas(600,400);

  // An object literal with a function!
  bubble = {
  	x : width/2,
  	y : height,
  	w : 100,
    move : function() {
    	this.x = this.x + random(-1,1);
    	this.y = this.y - 1;
    }
  };

}

function draw() {
  background(50);

  fill(125);
  stroke(255);
  ellipse(bubble.x,bubble.y,bubble.w,bubble.w);
  
  bubble.move();

  // Function above instead of:
  // bubble.y = bubble.y - 1;
  // bubble.x = bubble.x + random(-1,1);
}



