import { Category } from "@/types/types";

if (!process.env.NEXT_PUBLIC_API_URL) {
  throw new Error("API_URL is not defined");
}

const URL = process.env.NEXT_PUBLIC_API_URL;

export async function getCategory(categoryId: string): Promise<Category> {
  const response = await fetch(`${URL}/categories/${categoryId}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { category } = await response.json();

  return category;
}

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${URL}/categories`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { categories } = await response.json();

  return categories;
}
