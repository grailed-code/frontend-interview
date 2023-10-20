import { ProductsResponseData, Product } from '@/types';

export async function getProducts(): Promise<ProductsResponseData> {
  const response = await fetch('/api/products');
  return response.json();
}

export async function getProduct(id: number): Promise<Product> {
  const response = await fetch(`/api/products/${id}`);
  return response.json();
}
