ITP Networked Media Fall 2014
=============================

Fridays 12:10 - 2:40pm, Oct 24 - Dec 12 (7 weeks)

The network is one of our most fundamental mediums for interactivity. It makes possible our interaction with machines, data, and, most importantly, other people. Though the base interaction it supports is simple, a client sends a request to a server, which replies; an incredible variety of systems can be and have been built on top of it. In this course, students will utilize JavaScript as both a client and server side programming language to build creative network systems. Additionally, HTML and CSS will be used to define the structure and look. 

* [main Networked Media google group](https://groups.google.com/a/itp.nyu.edu/forum/#!forum/networkedmedia) - this is for questions.
* [Friday section google group](https://groups.google.com/a/nyu.edu/forum/#!forum/networked-media-shiffman-2014-group) - this is for announcements related to our section only.
* [Office Hours](https://itp.nyu.edu/inwiki/Signup/Shiffman)
* [Resident office hours](https://itp.nyu.edu/inwiki/)
* Help Sessions: Thursdays from 2:00 - 3:00 in room 15
* [Assignments page](https://github.com/shiffman/itp-networked-media/wiki)


## Syllabus

### Week 1 (10/24): Intro, HTML, CSS, client-server

* What is "networked media"?
* Getting Started
    * [Github student developer pack](https://education.github.com/pack) - includes Digital Ocean $100 credit and more.
    * Download a code editor like [TextWrangler](http://www.barebones.com/products/textwrangler/) or [Sublime Text](http://www.sublimetext.com/).
    * We'll be using the command line regularly in this class. Nothing too fancy; just the basics. Get familiar, at the very least, with the commands `ls`, `cd`, and `mkdir`. [Basic unix commands](http://www.webmonkey.com/2010/02/learn_enough_unix_for_your_resume/#Basic_Commands).
* [Intro to HTML and CSS](https://github.com/lmccart/p5.js/wiki/Intro-to-HTML-and-CSS)
* Server setup
    * [Digital Ocean setup](https://github.com/robynitp/networkedmedia/wiki/Digital-Ocean-Set-up)
    * [Setting up a web server with Servi](https://github.com/robynitp/networkedmedia/wiki/Web-Servers-with-Servi)
* [Shawn's notes](http://itp.nyu.edu/~sve204/commlabnetworkedmedia_fall2014/week1.html)
* [Robyn's notes](https://github.com/robynitp/networkedmedia/wiki/Week-1-Notes)
    * [Intro to HTML](https://github.com/robynitp/networkedmedia/wiki/Intro-to-HTML)
    * [Intro to CSS](https://github.com/robynitp/networkedmedia/wiki/Intro-to-CSS)
* [Assignment 1 (DUE 11/4)](https://github.com/shiffman/itp-networked-media/wiki/Week-1-Homework)

### Week 2 (10/31): JavaScript basics
* [Intro to JS basics](https://github.com/lmccart/p5.js/wiki/JavaScript-basics)
* Intro to [p5.js](http://p5js.org) and canvas
  * [Download p5.js](http://p5js.org/download/). The download comes with a copy of p5.js, you can also use a statically hosted version from the [CDN](http://cdnjs.com/libraries/p5.js), more info on that [here](http://p5js.org/get-started/#file-setup).
  * [Getting started with p5.js](http://p5js.org/get-started/)
  * [Processing <> p5.js transition](https://github.com/lmccart/p5.js/wiki/Processing-transition)
  * Since we have [servi.js](https://github.com/antiboredom/servi.js) up and running we can host and test our p5 sketches that way. However, another option since we are focusing this week more on client-side is to set up a [local web server with python or apache](https://github.com/lmccart/p5.js/wiki/Local-server). 
* [FYI: HTML5Canvas without p5.js](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
* [Shawn's notes for this week](http://itp.nyu.edu/~sve204/commlabnetworkedmedia_fall2014/week2.html)
* [Robyn's notes](https://github.com/robynitp/networkedmedia/wiki/Week-2-Notes)
* [Assignment 2 (DUE 11/7)](https://github.com/shiffman/itp-networked-media/wiki/Week-2-Homework)

### Week 3 (11/7): DOM Manipulation
* [Intro to DOM manipulation and events](https://github.com/lmccart/p5.js/wiki/Intro-to-DOM-manipulation-and-events) - Use JS to manipulate the HTML page and make it react to events (mouse, keyboard, touch, page load). 
  * [Reference for all DOM events](https://developer.mozilla.org/en-US/docs/Web/Events)
  * [DOM manipulation with no libraries examples](https://github.com/shiffman/itp-networked-media/tree/master/week3/02_dom_pure_js)
* [Tutorial: p5.dom library](https://github.com/lmccart/p5.js/wiki/Beyond-the-canvas) - You can also use the p5.dom library to handle HTML manipulation and events.
  * [p5.dom.js reference](http://p5js.org/reference/#/libraries/p5.dom)
  * [p5.dom.js examples](https://github.com/shiffman/itp-networked-media/tree/master/week3/04_dom_p5)
* [JQuery](http://jquery.com/) is (probably the most) popular JS Library for client-side stuff.  We won't use it much in our examples, but it's work examining and thinking about.
  * [Quick and dirty hello world DOM manipulation with JQuery](https://github.com/shiffman/itp-networked-media/blob/master/week3/03_dom_jquery/sketch.js)
* [Intro to CSS and layouts](https://github.com/lmccart/p5.js/wiki/Intro-to-HTML-and-CSS#css).  This week might be a good time to start working with external stylesheets.
* [Some more notes from Shawn](http://itp.nyu.edu/~sve204/commlabnetworkedmedia_fall2014/week3.html)
* [Assignment 3 (DUE 11/21)](https://github.com/shiffman/itp-networked-media/wiki/Week-3-Homework)

### No class Friday, 11/14!

### Week 4 (11/21): Consuming Data
* Review of DOM elements from last week
   * [resizing the window](https://github.com/shiffman/itp-networked-media/blob/master/week4/00_more_dom/01_position_canvas_resize/sketch.js)
* Events and callbacks
   * [callbacks with binding the context](https://github.com/shiffman/itp-networked-media/blob/master/week4/00_more_dom/05_same_callback_many_eelements/sketch.js)
* [Loading local files](https://github.com/shiffman/itp-networked-media/tree/master/week4/01_loading_files)
* Query strings
* Web services: AJAX, JSON, and APIs
  * [Simple JSON examples](https://github.com/shiffman/itp-networked-media/tree/master/week4/02_sample_json)
  * [API examples](https://github.com/shiffman/itp-networked-media/tree/master/week4/03_APIs)
  * [p5.js notes: Loading-external-files:-AJAX,-XML,-JSON](https://github.com/lmccart/p5.js/wiki/Loading-external-files:-AJAX,-XML,-JSON)
  * [Robyn's notes on AJAX and APIs](https://github.com/robynitp/networkedmedia/wiki/AJAX%2C-JSON%2C-APIs)
  * [Robyn's Instagram API How To](https://github.com/robynitp/networkedmedia/wiki/Instagram-API-How-to)
* [Assignment 4 (DUE 12/2)](https://github.com/shiffman/itp-networked-media/wiki/Week-4-Homework)

### Thanksgiving Break

### Week 5 (12/2): Write your own API (Note this new make-up date!)
* Server-side JavaScript writing basic HTTP servers with Servi and Node.js
* Data storage
* Query strings, GET vs. POST

### Week 6 (12/5): Catchup and Review
* TBA

### Week 7 (12/12): Final Projects
* Final project presentations


## Additional Resources

### Lynda.com

For step-by-step tutorials, we have access to Lynda.com training courses via the NYU Library. If you're new to HTML and/or CSS, I highly recommend watching these.

[Request a Lynda.com account](http://nyu.libguides.com/digitalstudio/appointments).  (It’s in the "Make an Appointment" form, but you don’t actually make an appointment. On the form, check "Instructional Video Modules". It may take a day or two to get approved.)

### p5.js
* [p5.js reference](http://p5js.org/reference)
* [p5.js forum](http://forum.processing.org/two/)
* [p5.js on GitHub](https://github.com/lmccart/p5.js)
* [p5.js CDN](http://cdnjs.com/libraries/p5.js)

### Servi.js
* [servi.js documentation](https://github.com/antiboredom/servi.js/wiki)

### JS Learning / Intro
* [CodeAcademy: JavaScript](http://www.codecademy.com/tracks/javascript)
* [How to learn JavaScript properly](http://javascriptissexy.com/how-to-learn-javascript-properly/)
* [JavaScript the right way](http://www.jstherightway.org/)
* [Code School](https://www.codeschool.com/paths/javascript)
* [JavaScript garden](http://bonsaiden.github.io/JavaScript-Garden/)
* [A re-introduction to JS by Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
* [JavaScript 101 from JQuery](https://learn.jquery.com/javascript-101/)
* [JavaScript: The Definitive Guide](http://shop.oreilly.com/product/9780596000486.do)
* [Eloquent JavaScript](http://eloquentjavascript.net/contents.html), Marijn Haverbeke
* [Beginning JavaScript](http://www.amazon.com/Beginning-JavaScript-Paul-Wilton/dp/0470525932), Paul Wilton and Jeremy McPeak
* [HTML & CSS book](http://www.htmlandcssbook.com/)
* [JavaScript book](http://www.javascriptbook.com/)

### Tools
* [Github student developer pack](https://education.github.com/pack) - includes Digital Ocean $100 credit and more!
* Checking code: [JSLint](http://www.jslint.com/) / [JSHint](http://www.jshint.com)
* Browser debugging: Chrome Developer Tools ([tutorial](https://developer.chrome.com/extensions/tut_debugging)) / Firebug ([tutorial](http://www.developerfusion.com/article/139949/debugging-javascript-with-firebug/))
* Mobile debugging [http://jsconsole.com](http://jsconsole.com)
* Sharing code snippets (useful for asking questions): [http://gist.github.com](http://gist.github.com)

## Requirements
* You are required to attend all class meetings and submit all weekly assignments and a final project.  It is expected that everyone in the class will create and maintain a blog for their assignments.

* Grading (pass/fail) will be based on a combination of factors:
    - Attendance, participation in class discussion, and engagement in other students' projects (40%)
    - Quality of weekly assignments (40%) 
    - Final Project (20%)
    - Personal progress; how much did you advance from your initial state in this class.

## Laptops and WiFi
Laptops and WiFi available are valuable tools for use in the classroom. Unfortunately, they can very easily be a distraction as well. Since this class is technical in nature and we’ll likely be trying code and looking at online resources laptops use will likely be very useful. We should though be courteous to one another and during discussion or student presentations laptops use should be curtailed.
