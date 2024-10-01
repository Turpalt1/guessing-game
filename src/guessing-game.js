class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;
    this.med = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
    this.med = Math.round((this.min + this.max) / 2);
  }
  
  guess() {
    return this.med;
  }

  lower() {
    this.max = this.med;
    this.med = Math.round((this.min + this.max) / 2);
    return this.med;
  }

  greater() {
    let cur = this.root;
    this.min = this.med;
    this.med = Math.round((this.min + this.max) / 2);
    return this.med;
  }
}

module.exports = GuessingGame;
