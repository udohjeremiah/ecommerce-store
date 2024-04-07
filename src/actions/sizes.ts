import { Size } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL || ""}/sizes`;

export async function getSize(sizeId: string): Promise<Size> {
  const response = await fetch(`${URL}/${sizeId}`);
  const { Size } = await response.json();

  return Size;
}

export async function getSizes(): Promise<Size[]> {
  const response = await fetch(URL);
  const { sizes } = await response.json();

  return sizes;
}
