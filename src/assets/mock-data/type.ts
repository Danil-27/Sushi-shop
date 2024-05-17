export interface CatalogItem {
  id: number;
  imgUrl: string;
  title: string;
  weight: string;
  description?: string;
  price: number;
  isSpicy?: boolean;
  isVegan?: boolean;
  isLactoseFree?: boolean;
  ingridients?: string[];
  category?: string[];
}

export interface CatalogItemNapitok {
  id: number;
  imgUrl: string;
  title: string;
  weight: string;
  price: number;
}
