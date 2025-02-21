class Product {
    calculatePrice() {
      return this.basePrice + this.getTax();
    }
    
    getTax() {
      return this.basePrice * this.taxRate;
    }
  }