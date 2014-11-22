// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Thanks to Lauren McCarthy
// https://github.com/lmccart/itp-networked-media


var jsonString;
var jsonObject;

function setup() {
  // An JavaScript object
  var person = {
    name: "Elias",
    age: 6
  };

  // Let's look at it in console
  println(person);

  // Make it a String
  jsonString = JSON.stringify(person);
  println(jsonString);

  noCanvas();
  noLoop();
}


function mousePressed() {
  // Parse it back into an object
	jsonObject = JSON.parse(jsonString);
	print(jsonObject);
}





