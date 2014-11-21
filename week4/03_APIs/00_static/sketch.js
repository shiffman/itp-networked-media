function setup() {
  noCanvas();
  loadJSON('student_urls.json', doStuff);   
}

/* The parameter "data" is the content of the json file, as a Javascript object.
   loadJSON() takes care of sending the object to your function --
   you just have to give it a name. Here, it's called "data", but could be anything.
*/
function doStuff(data){
  // Debug: inspect the json object
  console.log(data);

  // loop through the array of names and URLs
  for (var i = 0; i < data.length; i++){
  
    // each element of the array is an object.
    // just to make that point, i'm storing each temporarily in a variable called personObject
    var personObject = data[i];

    // Debug: see what's in each object
    console.log(personObject);
    //console.log(personObject.name);

    // create a new <p> with the person's name
    createP(personObject.name);


  }
}
