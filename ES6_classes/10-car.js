// 10-car.js

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Define species to the Car class
  static get [Symbol.species]() {
    return this;
  }

  // Clone method
  cloneCar() {
    // Use the constructor defined in Symbol.species
    return new this.constructor[Symbol.species]();
  }
}
