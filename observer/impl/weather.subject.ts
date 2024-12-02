import { Observer } from "../observer";
import { Subject } from "../subject";

export class WeatherSubject implements Subject {
  private observers: Observer[];
  constructor() {
    this.observers = [];
  }
  changed(data: string): void {
    this.observers.forEach((observer) => {
      observer.update({
        data,
      });
    });
  }
  register(observer: Observer): void {
    console.log(`${observer.name} registered`);
    
    this.observers.push(observer);
  }
  remove(observer: Observer): void {
    const index = this.observers.findIndex((o) => o.name === observer.name);
    this.observers.splice(index, 1);
  }
}
