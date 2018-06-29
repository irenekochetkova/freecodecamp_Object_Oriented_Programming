// ChildObject.prototype = Object.create(ParentObject.prototype);
// ChildObject.prototype.methodName = function() {...};

// -----------------------------------------------------------------------------
// Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."

// function Bird() { }

// Bird.prototype.fly = function() { return "I am flying!"; };

// function Penguin() { }
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;

// // Add your code below this line



// // Add your code above this line

// let penguin = new Penguin();
// console.log(penguin.fly());
// =================================================

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line
Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
}


// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());