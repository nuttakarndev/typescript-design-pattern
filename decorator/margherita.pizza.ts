import { Pizza } from "./pizza";

export class MargheritaPizza implements Pizza {
  getDescription(): string {
    return "This is MargheritaPizza";
  }

  cost(): number {
    return 5.3;
  }
}
