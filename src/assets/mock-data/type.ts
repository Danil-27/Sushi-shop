export interface CatalogItem {
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
  imgUrl: string;
  title: string;
  weight: string;
  price: number;
}
