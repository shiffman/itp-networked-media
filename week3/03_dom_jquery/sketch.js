// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Let's look quickly at some JQuery for comparison
$(document).ready(function() {
   console.log("the dom is loaded!");
  $('#stuff').css('background-color','pink');
  $('#stuff').css('width','50%');
  $('#stuff').css('padding','10px');
  $('#clicky').mousedown(function() {
    console.log("clickedme!");
    $('h1').html('You clicked it!');
  });
});