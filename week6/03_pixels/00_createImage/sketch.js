// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman
 
var img;  // Declare variable 'img'.

function setup() {
  createCanvas(240, 180); 
  img = createImage(width, height);
  
  // A link to save the image
  var saveIt = createA('#','save image');
  saveIt.mousePressed(saveImage);

  // Stick it in a paragraph
  createP('').child(saveIt);
}

function draw() {
  background(0);
  img.loadPixels();

  // Look at every pixel
  for(var x = 0; x < img.width; x++) {
    for(var y = 0; y < img.height; y++) {
      // The array has four spots for each pixel: RGBA
      var index = (x + y * img.width)*4;
      img.pixels[index    ] = random(255);
      img.pixels[index + 1] = random(255);
      img.pixels[index + 2] = random(255);
      img.pixels[index + 3] = 255;      
    }
  }
  img.updatePixels();
  
  // Draw the image
  image(img,0,0);
}

// Save a file
function saveImage() {
  img.save('test.png');
}