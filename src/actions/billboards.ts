import { Billboard } from "@/types/types";

if (!process.env.NEXT_PUBLIC_API_URL) {
  throw new Error("API_URL is not defined");
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export async function getBillboard(billboardId: string): Promise<Billboard> {
  const response = await fetch(`${URL}/${billboardId}`);
  const { billboard } = await response.json();

  return billboard;
}
