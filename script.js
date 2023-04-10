
const animal = new Animal("unknown");
console.log(animal.species); // "unknown"
animal.makeSound(); // "The unknown makes a sound"

const cat = new Cat("cat");
console.log(cat.species); // "cat"
cat.makeSound(); // "The cat makes a sound"
cat.purr(); // "purr"

const dog = new Dog("dog");
console.log(dog.species); // "dog"
dog.makeSound(); // "The dog makes a sound"
dog.bark(); // "woof"


class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("The " + this.species + " makes a sound");
  }
}



class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
