class CoinBalance {

  constructor(attributes) {
    this.currency = attributes.Currency;
    this.balance = attributes.Balance;
    this.available = attributes.Available;
    this.pending = attributes.Pending;
    this.last = 0.0;
  }
}

export default CoinBalance;