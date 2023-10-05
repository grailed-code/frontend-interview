import { fakerEN } from "@faker-js/faker";

import { Product } from "@/types";

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomPrice(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateFakeProduct(id: number): Partial<Product> {
  const colors: string[] = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Black",
    "White",
    "Purple",
    "Pink",
    "Orange",
    "Gray",
  ];
  const designers: string[] = [
    "Nuke",
    "Suprime",
    "Bope",
    "Adibas",
    "Poma",
    "Qucci",
    "Calbin Clein",
    "Tommy Helfinger",
    "Lewi’s",
    "Versachi",
    "Burburry",
    "Dolce & Banana",
    "Armanee",
    "Praduh",
    "Chanelle",
    "Yeezyy",
    "Givenchill",
    "Balencogga",
    "Fendee",
    "Luis Vuotton",
  ];
  const sizes: string[] = ["S", "M", "L", "XL"];
  const conditions: string[] = ["New", "Like New", "Used", "Worn"];

  return {
    id,
    title: fakerEN.commerce.productName(),
    color: getRandomElement(colors),
    designer: getRandomElement(designers),
    price: getRandomPrice(10, 1000),
    size: getRandomElement(sizes),
    condition: getRandomElement(conditions),
    popularity: Math.floor(Math.random() * 100), // Assuming popularity is a percentage (0-100)
    rating: getRandomPrice(1, 10), // Assuming rating is an integer between 1 and 10
  };
}
