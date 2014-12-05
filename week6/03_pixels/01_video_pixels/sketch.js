// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

var cam;

var divs;

var videoScale = 10;

var w = 320;
var h = 240;

var vidScale = 10;

var cols = w / vidScale;
var rows = h / vidScale;

var slider;

function setup() {
  createCanvas(w, h); 
  fingers = createVideo('fingers.mov');
  fingers.loop();
  fingers.hide();
  //cam.size(w,h);

  var container = createDiv('');
  //container.style('line-height','12px');

  slider = createSlider(0,255,127);


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
  var threshold = slider.value();

  image(fingers,0,0, width,height);
  fingers.loadPixels();
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
