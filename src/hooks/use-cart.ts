import { toast } from "sonner";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types/types";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        set({ items: [...get().items, data] });
        toast.success("Item added to cart.");
      },
      removeItem: (id: string) => {
        const updatedItems = [...get().items];
        const indexToRemove = updatedItems.findIndex((item) => item.id === id);

        if (indexToRemove !== -1) {
          updatedItems.splice(indexToRemove, 1);
          set({ items: updatedItems });
          toast.success("Item removed from the cart.");
        } else {
          toast.error("Item not found in the cart.");
        }
      },
      removeAll: () => set({ items: [] }),
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) },
  ),
);
