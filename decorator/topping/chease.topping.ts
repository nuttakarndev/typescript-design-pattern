import { Pizza } from "../pizza";
import { PizzaDecorator } from "../pizza.decorator";

export class CheeseTopping extends PizzaDecorator {
  constructor(pizza: Pizza) {
    super(pizza);
  }

  getDescription(): string {
    return this.pizza.getDescription() + ", Chease";
  }

  cost(): number {
    return this.pizza.cost() + 3.0;
  }
}
