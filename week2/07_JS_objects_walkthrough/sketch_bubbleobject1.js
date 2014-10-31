// Daniel Shiffman
// Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media

// Demonstrating some JS object stuff

//var x,y;

// An variable
var bubble;

function setup() {
  createCanvas(600,400);
  //x = width/2;
  //y = height;
  
  // An object literal in JS, this is totally normal!
  // Oh, this looks just like JSON.  It is JSON!
  bubble = {
  	x : width/2,
  	y : height,
  	w : 100
  };
}

function draw() {
  background(50);

  // Do stuff with the object
  fill(125);
  stroke(255);
  ellipse(bubble.x,bubble.y,bubble.w,bubble.w);

  bubble.y = bubble.y - 1;
  bubble.x = bubble.x + random(-1,1);
}



