import { Size } from "@/types/types";

if (!process.env.NEXT_PUBLIC_API_URL) {
  throw new Error("API_URL is not defined");
}

const URL = process.env.NEXT_PUBLIC_API_URL;

export async function getSize(sizeId: string): Promise<Size> {
  const response = await fetch(`${URL}/sizes/${sizeId}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { size } = await response.json();

  return size;
}

export async function getSizes(): Promise<Size[]> {
  const response = await fetch(`${URL}/sizes`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { sizes } = await response.json();

  return sizes;
}
