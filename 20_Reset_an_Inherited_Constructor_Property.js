// Fix the code so duck.constructor and beagle.constructor return their respective constructors.

// function Animal() { }
// function Bird() { }
// function Dog() { }

// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);

// // Add your code below this line



// let duck = new Bird();
// let beagle = new Dog();

// ==================================================================

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line


let duck = new Bird();
Bird.prototype.constructor = Bird;
duck.constructor;
let beagle = new Dog();
Dog.prototype.constructor = Dog;
beagle.constructor;
