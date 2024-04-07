import queryString from "query-string";

import { Product, Query } from "@/types/types";

export async function getProduct(productId: string): Promise<Product> {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("API_URL is not defined");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { product } = await response.json();

  return product;
}

export async function getProducts(query: Query): Promise<Product[]> {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("API_URL is not defined");
  }

  const url = queryString.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_API_URL}/products`,
    query: {
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      colorId: query.colorId,
      isFeatured: query.isFeatured,
    },
  });

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { products } = await response.json();

  return products;
}
