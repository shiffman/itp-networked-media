// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Based on http://alignedleft.com/tutorials/d3

function setup() {

  // D3 has its own DOM manipulation stuff much like p5
  // Make the body black
  d3.select("body").style("background-color", "white");
  
  // What is special about D3 is how you can bind things to a dataset
  // Let's simulate a data set with an array
  // We could do this with a JSON file or CSV
  var dataset = ['robyn','lauren','shawn','dan'];
  // Start by selecting some elements
  // even if they don't exist yet!
  d3.select("body").selectAll('div')
    // Then bind some data
    .data(dataset)
    // Enter each data point
    .enter()
    // Make a DIV
    .append("div")
    .style("color","pink")
    // Give it some text
    .text(function(d) { return d; });
}

function mousePressed() {
  // D3 has lots of things built in also like transitions
  d3.select("body").transition()
    .duration(3000)
    .style("background-color", "black");  
}

