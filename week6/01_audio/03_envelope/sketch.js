// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Based on https://github.com/shiffman/LearningProcessing
// Thanks to Jason Sigal and p5.sound
// https://github.com/therewasaguy/p5.sound 


var osc;
var envelope;

var thescale = [ 
  60, 62, 64, 65, 67, 69, 71, 72
]; 

var divs = [];


var note = 0;
var pnote = thescale.length-1;
function setup() {
  noCanvas();
  osc = new p5.SinOsc();
  osc.start();
  osc.amp(0);
  envelope = new p5.Env(0.01, 0.5, 1, 0.5);
  
  for (var i = 0; i < thescale.length; i++) {
    var div = createDiv(thescale[i]);
    div.style('display','inline');
    div.style('padding','10px');
    divs.push(div);
  }

  setInterval(function() {
    var val = thescale[note];
    osc.freq(midiToFreq(val));
    envelope.play(osc);
    divs[note].style("background-color","green");
    divs[pnote].style("background-color","white");
    pnote = note;
    note = (note + 1) % thescale.length;
  },800);
}
