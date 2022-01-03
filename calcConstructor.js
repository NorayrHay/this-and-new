"use strict";

function Calculator() {}

Calculator.prototype.add = function (a, b) {
  return a + b;
};
Calculator.prototype.diff = function (a, b) {
  return a - b;
};
Calculator.prototype.mult = function (a, b) {
  return a * b;
};
Calculator.prototype.div = function (a, b) {
  return a / b;
};

const calculator = new Calculator();
console.log(calculator.add(1, 2));
