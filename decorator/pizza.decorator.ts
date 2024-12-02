import { Pizza } from "./pizza";

export class PizzaDecorator {
  protected pizza: Pizza;
  constructor(pizza: Pizza) {
    this.pizza = pizza;
  }
  getDescription() {
    return this.pizza.getDescription();
  }
  cost() {
    return this.pizza.cost();
  }
}
