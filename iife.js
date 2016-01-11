(function() {
  'use strict';
  console.log("Presumably, this function will be executed automatically");
  var x = 1000;
  console.log(x);

}());

//this attempt to log the value of x will fail because x was declared inside the above function
console.log(x);
