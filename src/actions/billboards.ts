import { Billboard } from "@/types/types";

export async function getBillboard(billboardId: string): Promise<Billboard> {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("API_URL is not defined");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/billboards/${billboardId}`,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { billboard } = await response.json();

  return billboard;
}
