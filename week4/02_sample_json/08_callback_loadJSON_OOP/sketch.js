// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Thanks to Lauren McCarthy
// https://github.com/lmccart/itp-networked-media


// Fill an array
var people = [];

// Boolean to track if the data is loaded
var ready = false;

function setup() {
  createCanvas(600, 400);
  loadJSON("data.json", loadData);
}

function draw() {
  background(120, 180, 200);

  // Show something while loading
  if (people.length === 0) {
    textAlign(CENTER);
    fill(255);
    noStroke();
    textSize(20);
    text("LOADING", width/2,height/2);
  } else {
    for (var i = 0; i < people.length; i++) {
      people[i].display();
      people[i].update();
    }
  }
}

function loadData(data) {
  // Go through the JSON array and make some objects
  for (var i = 0; i < data.length; i++) {
    people[i] = new Person(data[i]);
  }
}

// This is awkward but I'm copying all of the JSON
// properties into an object of this type
function Person(data) {
  this.x = random(width);
  this.y = random(height);
  for (var prop in data) {
    // Just in case its some irrelevant property inherited by something else
    if (data.hasOwnProperty(prop)) {
      this[prop] = data[prop];
    }
  }

  // and now adding a method
  this.update = function() {
    this.x += random(-2,2);
  };

  this.display = function() {
    noStroke();
    fill(155, 30, 180, 180);
    ellipse(this.x, this.y, this.age * 5, this.age * 5);
    fill(255);
    textSize(20);
    textAlign(CENTER);
    text(this.name, this.x, this.y);
  };

}


