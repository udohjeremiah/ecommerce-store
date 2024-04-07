import { Category } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL!}/categories`;

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
