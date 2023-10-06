import { generateFakeProduct } from "@/lib/utils/generateFakeProduct";

describe("generateFakeProduct", () => {
  it("should return an object with the correct keys", () => {
    const product = generateFakeProduct(1);
    expect(product).toHaveProperty("id");
    expect(product).toHaveProperty("title");
    expect(product).toHaveProperty("color");
    expect(product).toHaveProperty("designer");
    expect(product).toHaveProperty("price");
    expect(product).toHaveProperty("size");
    expect(product).toHaveProperty("condition");
    expect(product).toHaveProperty("popularity");
    expect(product).toHaveProperty("rating");
  });

  it("should return an object with the correct id", () => {
    const product = generateFakeProduct(1);
    expect(product.id).toBe(1);
  });

  it("should return an object with a price between 10 and 1000", () => {
    const product = generateFakeProduct(1);
    expect(product.price).toBeGreaterThanOrEqual(10);
    expect(product.price).toBeLessThanOrEqual(1000);
  });

  it("should return an object with a popularity between 0 and 100", () => {
    const product = generateFakeProduct(1);
    expect(product.popularity).toBeGreaterThanOrEqual(0);
    expect(product.popularity).toBeLessThanOrEqual(100);
  });

  it("should return an object with a rating between 1 and 10", () => {
    const product = generateFakeProduct(1);
    expect(product.rating).toBeGreaterThanOrEqual(1);
    expect(product.rating).toBeLessThanOrEqual(10);
  });

  // Add more tests as needed
});
