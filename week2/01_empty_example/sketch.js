var hex1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  hex1 = new Hexagram (100, 100, 20);

}



function draw() {
  background (0);
  hex1.display();
  if (mouseIsPressed == true) {
    background(random(0, 200));
  } 
}



function mouseReleased() {
  hex1.change(); 

}



function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}





//HEXAGRAM CLASS

function Hexagram (pivotX, pivotY, lineWeight) {



  this.pivotX = pivotX;

  this.pivotY = pivotY;

  this.lineWeight = lineWeight;

  this.randomizer = []; //randomizer is an array of 6 integers

  this.spacing = lineWeight*2;



  for (i = 0; i < 7; i++) { //THINK THERE ARE BUGS IN THIS THAT WILL BREAK IT

      this.randomizer[i] = int(random(0, 2));

    }



  this.ichingLine = function (pivotX, pivotY, lineLength, broken) {

  //ichingLine is a function for drawing a SINGLE line that is either broken or unbroken

  //this then gets passed into the display function to make an entire hexagram

  

    //line styling\

    if (broken == 0) {

      line (pivotX, pivotY, pivotX+lineLength, pivotY);

    } 

    if (broken == 1) {

      //first line

      line (pivotX, pivotY, pivotX+lineLength/2 - this.spacing, pivotY);



      //second line

      line (pivotX+lineLength/2 +this.spacing, pivotY, pivotX+lineLength, pivotY);

    }

  }



  this.display = function () {

    //display the line -- includes all styling

    lineLength = (this.lineWeight*6) + (this.spacing*4);



    //draw the hexagram 

    strokeCap (SQUARE);

    stroke (255);

    strokeWeight (this.lineWeight);



    //setting the configuration of broken and unbroken lines randomly

    for (i = 0; i < 6; i++) {

      this.ichingLine(pivotX, pivotY+i*this.spacing, lineLength, this.randomizer[i]);

    }

  }



  this.change = function() {

  //change the hexagram configuration when you click the mouse using the randomizer array

    for (i = 0; i < 7; i++) {

      this.randomizer[i] = round(random(0, 2));

    }

  }

}