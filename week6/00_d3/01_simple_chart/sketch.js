// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Based on http://alignedleft.com/tutorials/d3

var svg;
var w = 500;
var h = 100;

function setup() {
  noCanvas();

  var link = getElement("transition");
  link.mousePressed(newData);

  // Simulating a data source
  var dataset = [];
  for (var i = 0; i < 20; i++) {
    dataset.push(random(50));
  }

  var padding = 1;
  svg = d3.select("body")
    // Add an SVG element
    .append("svg")
    // Give it a width and height
    .attr("width", w)
    .attr("height", h);

  // Now let's make a bunch of rects in the SVG
  svg.selectAll("rect")
    // Bind to the data
    .data(dataset)
    // Each data point will be a rect
    .enter()
    .append("rect")
    // Here's its x-position
    .attr("x", function(d, i) {
      return i * (w / dataset.length);  // Bar width divided by number of data points
    })
    // Here's its y-position
    .attr("y", function(d) {
      return h - d;
    })
    // Here's its height
    .attr("height", function(d) {
      return d;  // Just the data value
    })
    // And the width of each one
    .attr("width", w / dataset.length - padding)
}

function newData() {
  // Let's change the data
  var newdata = [];
  for (var i = 0; i < 20; i++) {
    newdata.push(random(50));
  }
  svg.selectAll('rect')
    .data(newdata)
    .transition()
    .duration(1000)

    // Here's its y-position
    .attr("y", function(d) {
      return h - d;
    })
    // Here's its height
    .attr("height", function(d) {
      return d;  // Just the data value
    })
}

