// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Thanks to Lauren McCarthy
// https://github.com/lmccart/p5.js/wiki/Loading-external-files:-AJAX,-XML,-JSON

function setup() {
  createCanvas(600, 400);

  // Load some JSON
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=NewYork,USA', drawWeather); 
}

function drawWeather(weather) {
  // The data is in weather
  console.log(weather); // inspect the weather JSON
  
  // Grabbing one piece of data: humidity
  var humidity = weather.main.humidity; 

  background(40, 90, 200);
  // Humidity is the alpha
  fill(0, 255, 255, humidity); 
  for (var i = 0; i < 50; i++) {
    ellipse(random(width), random(height), 30, 30);
  }
}