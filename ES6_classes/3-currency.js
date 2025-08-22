// 3-currency.js
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter / Setter pour code
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // Getter / Setter pour name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // Méthode pour afficher la devise complète
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
