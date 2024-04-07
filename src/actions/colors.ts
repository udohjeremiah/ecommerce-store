import { Color } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL!}/colors`;

export async function getColor(colorId: string): Promise<Color> {
  const response = await fetch(`${URL}/${colorId}`);
  const { Color } = await response.json();

  return Color;
}

export async function getColors(): Promise<Color[]> {
  const response = await fetch(URL);
  const { colors } = await response.json();

  return colors;
}
