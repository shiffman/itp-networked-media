// Daniel Shiffman
// Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media

// Ported by Lauren McCarthy from Learning Processing
// Example 9-11 ported to p5.js

// This is a constructor function and it works
// kind of like a class even though there are no classes in JS
function Ball(tempX, tempY, tempW) {
  this.x = tempX;
  this.y = tempY;
  this.w = tempW;
  this.speed = 0;

  this.gravity = function() {
    // Add gravity to speed
    this.speed = this.speed + gravity;    
  }

  this.move = function() {
    // Add speed to y location
    this.y = this.y + this.speed;
    // If square reaches the bottom
    // Reverse speed
    if (this.y > height) {
      this.speed = this.speed * -0.95;
      this.y = height;
    }    
  }

  this.display = function() {
    // Display the circle
    fill(101);
    stroke(255);
    ellipse(this.x,this.y,this.w,this.w);
  }
}