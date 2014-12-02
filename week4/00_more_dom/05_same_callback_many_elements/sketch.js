// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman


function setup() {
  noCanvas();

  for (var i = 0; i < 5; i++) {
    var div = createDiv("<a href='#'>Here I am.</a>");
    div.style("font-size","32pt");

    div.mousePressed(change);

    // This is the native JS way
    // div.elt.addEventListener('click',change);
  }

}

// This is a callback function
// It is "called back" whenever the mouse is pressed on the elemnt
function change() {
  // The context for this function is automatically bound by p5 the the DOM element
  this.html("There I go.");

  // For use with div.elt.addEventListener()
  // this.innerHTML = "There I go.";
}