export interface User {
  name: string;
  age: number;
  id: string;
  favorites: Favorite[]
}

export interface Favorite {
  productName: string;
  productId: number;
  selectedOn?: Date;
  ordered: boolean;
}
