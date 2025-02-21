class Product {
    calculatePrice() {
      return this.basePrice - this.getDiscount();
    }
    
    getDiscount() {
      return this.basePrice * this.discountRate;
    }
  }