// Modify the code so that instances of Dog inherit from Animal.

// function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// function Dog() { }

// // Add your code below this line


// let beagle = new Dog();
// beagle.eat();  // Should print "nom nom nom"
// ===============================================================

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"