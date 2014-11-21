// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Thanks to Robyn Overstreet
// jsfiddle version: http://jsfiddle.net/rover/bnz198Lv/

function setup() {
    noCanvas();
    // Call the API with a callback
    loadJSON('http://api.openweathermap.org/data/2.5/weather?q=New+York&units=imperial', doWeather);   
}

function doWeather(data){
  // Everything is in data
  console.log(data);
  console.log(data.weather); // The weather "array"

  // One piece of data
  createP(data.weather[0].description);
}