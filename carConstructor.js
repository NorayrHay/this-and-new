'use strict'

function Car(model, mpg) {
  this.model = model;
  this.milesPerGallon = mpg;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function (gallons) {
  this.tank = this.tank + gallons;
}
Car.prototype.drive = function (dist) {
  const drivableMiles = this.tank * this.milesPerGallon;
  if (dist <= drivableMiles) {
    this.odometer = this.odometer + dist;
    this.tank = this.tank - (dist / this.milesPerGallon)
  } else {
    this.odometer = this.odometer + drivableMiles;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`
  }
}