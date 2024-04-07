import { Billboard } from "@/types/types";

if (!process.env.NEXT_PUBLIC_API_URL) {
  throw new Error("API_URL is not defined");
}

const URL = process.env.NEXT_PUBLIC_API_URL;

export async function getBillboard(billboardId: string): Promise<Billboard> {
  const response = await fetch(`${URL}/billboards/${billboardId}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { billboard } = await response.json();

  return billboard;
}
