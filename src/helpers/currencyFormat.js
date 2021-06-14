class CurrencyFormat {
  constructor(a) {
    this.amount = Math.floor(a / 100);
    this.decimal = a - this.amount * 100;
  }
  toString() {
    return `${`${this.amount}.${this.decimal}`}`;
  }
}

export default CurrencyFormat;
