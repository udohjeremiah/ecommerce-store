import { Color } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL!}/colors`;

export async function getColor(colorId: string): Promise<Color> {
  const response = await fetch(`${URL}/${colorId}`);
  const { color } = await response.json();

  return color;
}

export async function getColors(): Promise<Color[]> {
  const response = await fetch(URL);
  const { colors } = await response.json();

  return colors;
}
