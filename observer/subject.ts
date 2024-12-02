import { Observer } from "./observer";

export interface Subject {
  register(observer: Observer): void;
  changed(data: string): void;
  remove(observer: Observer): void;
}
