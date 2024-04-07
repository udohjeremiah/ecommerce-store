import { Category } from "@/types/types";

if (!process.env.NEXT_PUBLIC_API_URL) {
  throw new Error("API_URL is not defined");
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export async function getCategory(categoryId: string): Promise<Category> {
  const response = await fetch(`${URL}/${categoryId}`);
  const { category } = await response.json();

  return category;
}

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(URL);
  const { categories } = await response.json();

  return categories;
}
