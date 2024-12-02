import { Observer } from "../observer";

export class DisplayObserver implements Observer {
  name: string;
  data: string = "";
  constructor() {
    this.name = DisplayObserver.name + new Date().getTime().toString();
  }
  update(data: { data: string }): void {
    console.log(`display changed: ${data.data}`);
  }
}
