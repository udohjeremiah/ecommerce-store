import { Category } from "@/types/types";

export async function getCategory(categoryId: string): Promise<Category> {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("API_URL is not defined");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}`,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { category } = await response.json();

  return category;
}

export async function getCategories(): Promise<Category[]> {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("API_URL is not defined");
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { categories } = await response.json();

  return categories;
}
