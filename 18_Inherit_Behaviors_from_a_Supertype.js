// Use Object.create to make two instances of Animal named duck and beagle.

// function Animal() { }

// Animal.prototype = {
//   constructor: Animal, 
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// // Add your code below this line

// let duck; // Change this line
// let beagle; // Change this line

// duck.eat(); // Should print "nom nom nom"
// beagle.eat(); // Should print "nom nom nom" 
// ==============================================================
function Animal() { }

Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};

// Add your code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom" 