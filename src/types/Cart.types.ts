export interface IProduct {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
  quantity: number;
}

export interface ICounter {
  initialValue: number;
  onChange?: (value: number) => void;
}
