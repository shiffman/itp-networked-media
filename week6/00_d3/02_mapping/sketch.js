// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Citi data from https://github.com/deremer/Cities/

var cities;

function preload() {
  cities = loadJSON('cities.json');
}


function setup() {
  noCanvas();
  
  var w = 900;
  var h = 600;
  var projection = d3.geo.albersUsa();
  projection.scale(w);
  projection.translate([w/2,h/2]);

  var svg = d3.select("body").append("svg");
  svg.attr("width", w);
  svg.attr("height",h);
  svg.append('rect')
      .attr("width", w)
      .attr("height", h)
      .attr("stroke","#AAAAAA")
      .attr("stroke-width",1)
      .attr("fill","#FFFFFF");
      
  svg.selectAll("circle")
    // Bind to the data
    .data(cities)
    // Each data point will be a rect
    .enter()
    .append("circle")
    .attr("cx",function(d) { 
      var longlat = d.ll.split(',');
      longlat.reverse();
      var xy = projection(longlat);
      return xy[0]; 
    })
    .attr("cy",function(d) { 
      var longlat = d.ll.split(',');
      longlat.reverse();
      var xy = projection(longlat);
      return xy[1]; 
    })
    .attr("r", 2);
}

