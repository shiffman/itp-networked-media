// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Based on https://github.com/shiffman/LearningProcessing
// Thanks to Jason Sigal and p5.sound
// https://github.com/therewasaguy/p5.sound 

var mic, fft;

function setup() {
   createCanvas(710,400);
   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
}

function draw() {
  background(51);

  var spectrum = fft.analyze();

  strokeWeight(1);
  noFill();
  stroke(200);
  for (var i = 0; i < spectrum.length; i++) {
    // The result of the FFT is normalized to a range between 0 and 1
    var y = map(spectrum[i], 0, 255, height, height/2);
    line(i, height, i, y);
  }
  

  // We can also draw a waveform!
  var waveform = fft.waveform();
  
  noFill();
  stroke(255);
  for (var i = 0; i < waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], 0, 256, height/2, 0);
    vertex(x, y);
  }
  endShape();

}