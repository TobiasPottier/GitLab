export const calculateTotal = (items) => {
    return items.reduce((sum, item) => {
      return sum + item.calculatePrice() * (1 + getTaxRate());
    }, 0);
  };