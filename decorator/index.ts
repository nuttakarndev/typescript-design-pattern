import { MargheritaPizza } from "./margherita.pizza";
import { Pizza } from "./pizza";
import { CheeseTopping } from "./topping/chease.topping";
import { OlivesTopping } from "./topping/olives.topping";
function main() {
  let pizza: Pizza = new MargheritaPizza();
  console.log(pizza.getDescription() + " | Cost: $" + pizza.cost());

  pizza = new CheeseTopping(pizza);
  console.log(pizza.getDescription() + " | Cost: $" + pizza.cost());

  pizza = new OlivesTopping(pizza);
  console.log(pizza.getDescription() + " | Cost: $" + pizza.cost());
}

main();
