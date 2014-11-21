// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman


function setup() {
  noCanvas();

  for (var i = 0; i < 5; i++) {
    var div = createDiv("Here I am.");
    div.style("font-size","32pt");

    // Using bind to bind the context of an object to a function!?!?!?!?!?
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
    div.mousePressed(change.bind(div));

    // This is the native JS way
    // div.elt.addEventListener('click',change);
  }

}

// This is a callback function
// It is "called back" whenever the mouse is pressed on
// the paragraph
function change() {
  // What's the context??
  // console.log(this);
  this.html("There I go.");

  // For use with div.elt.addEventListener()
  // this.innerHTML = "There I go.";
}