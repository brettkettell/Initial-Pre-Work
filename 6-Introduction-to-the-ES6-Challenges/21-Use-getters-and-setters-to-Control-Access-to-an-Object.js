// I learned to use class syntax to define a construtor function

class Vegetable {
  constructor(name){
    this.name = name;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot
