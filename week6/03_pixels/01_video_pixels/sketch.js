// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Camera
var cam;
// Divs
var divs;
// Scale of video to grid
var videoScale = 10;

// Width and height
var w = 320;
var h = 240;

// Columns and rows
var cols = w / vidScale;
var rows = h / vidScale;

// A slider
var slider;

function setup() {
  createCanvas(w, h); 

  // Load the video then hide the DOM element
  fingers = createVideo('fingers.mov');
  fingers.loop();
  fingers.hide();
  
  // a slider
  slider = createSlider(0,255,127);
  
  // A container for all the DIVS
  var container = createDiv('');
  
  // Make a crazy grid of checkboxes
  divs = [];
  for (var j = 0; j < rows; j++) {
    createDiv('<br/>').style('display','inline').parent(container);
    for (var i = 0; i < cols; i++) {
      var div = createInput('');
      div.attribute('type','checkbox');
      div.style('display','inline');
      div.parent(container);
      divs[i + j * cols] = div;
    }
  }
}

function draw() {
  background(0);
  // A threshold
  var threshold = slider.value();
  
  // Read the video file
  image(fingers,0,0, width,height);
  fingers.loadPixels();

  // Look at all the pixels and check a box or not
  for(var i = 0; i < cols; i++) {
    for(var j = 0; j < rows; j++) {
      var x = i * vidScale;
      var y = j * vidScale;
      var index = x + y * width;
      var col = fingers.pixels[index*4];
      if (col > threshold) {
        divs[i + j * cols].elt.checked = true;
      } else {
        divs[i + j * cols].elt.checked = false;  
      }
    }
  }
}
