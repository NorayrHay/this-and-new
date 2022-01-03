'use strict'

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat = function (edible) {
  if (typeof(edible) === 'string' && this.stomach.length < 10) {
    this.stomach.push(edible);
  }
}
Person.prototype.poop = function () {
  this.stomach = [];
}
Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`
}

const human1 = new Person('Jhon', 22);

console.log(human1.toString());