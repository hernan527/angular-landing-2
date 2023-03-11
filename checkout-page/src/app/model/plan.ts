export interface Plan {
  name: string;
  users?: number;
  month?: number;
  year?: number;
  description: Array<string>;
  items: Array<string>;
}
