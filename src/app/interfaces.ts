export interface ProdItem {
  id: number;
  picture: string;
  prodName: string;
  price: number;
  owner: string;
  description: string;
}

export interface FilterItem {
  filterName: string;
  children?: FilterItem[];
}
