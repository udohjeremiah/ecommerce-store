import queryString from "query-string";

import { Product, Query } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL || ""}/products`;

export async function getProduct(productId: string): Promise<Product> {
  const response = await fetch(`${URL}/${productId}`);
  const { product } = await response.json();

  return product;
}

export async function getProducts(query: Query): Promise<Product[]> {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      colorId: query.colorId,
      isFeatured: query.isFeatured,
    },
  });
  const response = await fetch(url);
  const { products } = await response.json();

  return products;
}
