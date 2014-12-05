// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// based on http://www.html5rocks.com/en/tutorials/file/dndfiles/

var images = [];

var container;

function setup() {
  setupFileSelector();
  createCanvas(600,400);
  container = createDiv('');
}

function draw() {
  background(100);
  for (var i = 0; i < images.length; i++) {
    tint(255,100);
    image(images[i],0,0,600,400);
  }
}

function gotImage(img) {
  images.push(img);
}

function setupFileSelector() {

  // Check for the various File API support.
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    console.log('Great success! All the File APIs are supported');
  } else {
    alert('The File APIs are not fully supported in this browser.');
  }


  //<input type="file" id="files" name="files[]" multiple />
  // Make the file input
  var fileInput = createInput();
  // Set attribute to file
  fileInput.attribute('type','file');
  // If we want to allow multiple files
  fileInput.attribute('multiple','');
  // If a file is selected this event will be triggered
  fileInput.elt.addEventListener('change', handleFileSelect, false);
   
  // For the list of files
  var list = createElement('ol','');

  // Function to handle when a file is selected
  function handleFileSelect(evt) {    
    
    // A FileList
    var files = evt.target.files;
    // Show some properties
    for (var i = 0; i < files.length; i++) {
      var f = files[i];
      var file = createElement('li',f.name + ' ' + f.type + ' ' + f.size + ' bytes');
      file.parent(list);
      
      // Read the file and process the result
      var reader = new FileReader();
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail
          var img = createImg(e.target.result);
          img.parent(container);
          img.class('thumb');
          
          loadImage(e.target.result, gotImage);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }
}
