import { Pizza } from "../pizza";
import { PizzaDecorator } from "../pizza.decorator";

export class OlivesTopping extends PizzaDecorator {
  constructor(pizza: Pizza) {
    super(pizza);
  }

  getDescription(): string {
    return this.pizza.getDescription() + ", Olives";
  }

  cost(): number {
    return this.pizza.cost() + 2.0;
  }
}
