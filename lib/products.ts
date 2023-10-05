import { ProductsResponseData } from "@/types";

export async function getProducts(): Promise<ProductsResponseData> {
  const response = await fetch("/api/products");
  return response.json();
}
