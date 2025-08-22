// 4-pricing.js
import Currency from './3-currency.js';

export default class Pricing {
  // Constructor
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter et Setter pour amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  // Getter et Setter pour currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  // Méthode displayFullPrice
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Méthode statique convertPrice
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
