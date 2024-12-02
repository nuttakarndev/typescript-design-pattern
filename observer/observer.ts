export interface Observer {
  name: string;
  update(data: { data: string }): void;
}
