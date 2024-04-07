import { Color } from "@/types/types";

export async function getColor(colorId: string): Promise<Color> {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("API_URL is not defined");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/colors/${colorId}`,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { color } = await response.json();

  return color;
}

export async function getColors(): Promise<Color[]> {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("API_URL is not defined");
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/colors`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { colors } = await response.json();

  return colors;
}
