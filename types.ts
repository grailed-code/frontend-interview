export type Category = "footwear" | "tops" | "bottoms" | "outerwear";

export type Product = {
  id: number;
  category: Category;
  color: string;
  designer: string;
  price: number;
  size: string;
  image: string;
  condition: string;
  popularity: number;
  created_at: string;
  rating: number;
  title: string;
};

export type Sort = "popular" | "rating" | "created" | "priceDesc" | "priceAsc";

export type Filter = {
  name: "category" | "color" | "designer" | "size" | "condition";
  value: string;
};

export type FilterOptions = Record<Filter["name"], Filter["value"][]>;

export type ProductsResponseData = {
  results: Product[];
  sort: Sort;
  filters: FilterOptions;
  count: number;
  page: number;
};
