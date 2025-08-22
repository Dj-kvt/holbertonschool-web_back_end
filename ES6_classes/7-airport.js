// 7-airport.js

export default class Airport {
  constructor(name, code) {
    this._name = name;   // store name with underscore
    this._code = code;   // store code with underscore
  }

  // Override default string description
  toString() {
    return `[object ${this._code}]`;
  }
}
