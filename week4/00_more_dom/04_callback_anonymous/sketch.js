// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

var para;

function setup() {
  noCanvas();
  para = createP("Here I am.");
  para.style("font-size","64pt");

  para.mousePressed(function() {
    para.html("There I go");
  });

  // This is the native JS way
  // para.elt.addEventListener('click',
  //   function() {
  //     this.innerHTML = 'test';
  //   }
  // );
}
