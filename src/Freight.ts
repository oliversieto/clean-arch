import Item from "./Item";

export default class Freight {
  private total: number;
  private DISTANCE = 1000;
  private FREIGHT_MINIMUM = 10;
  
  constructor() {
    this.total = 0;
  }

  addItem(item: Item, quantity: number) {
    this.total += (item.getVolume() * this.DISTANCE * (item.getDensity() / 100)) * quantity;
  }

  getTotal(): number {
    if (this.total < this.FREIGHT_MINIMUM) {
      return this.FREIGHT_MINIMUM;
    }
    return this.total;
  }
}