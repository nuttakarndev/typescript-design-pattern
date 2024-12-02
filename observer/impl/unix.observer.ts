import { Observer } from "../observer";

export class UnixObserver implements Observer {
  name: string;
  data: string = "";
  constructor() {
    this.name = UnixObserver.name + new Date().getTime().toString();
  }
  update(data: { data: string }): void {
    console.log(`unix changed: ${data.data}`);
  }
}
