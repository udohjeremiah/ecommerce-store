"use client";

import { CldImage } from "next-cloudinary";
import { XIcon } from "lucide-react";
import { toast } from "sonner";

import EmptyCartsPlaceholder from "@/components/EmptyCartsPlaceholder";
import Summary from "@/components/Summary";
import { Button } from "@/components/ui/button";

import { useCart } from "@/hooks/use-cart";
import { useMounted } from "@/hooks/use-mounted";

import { cn } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem } = useCart();
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <main className="flex-1">
      <div
        className={cn("container flex flex-col gap-4 py-4", "md:gap-8 md:py-8")}
      >
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        <div className={cn("grid gap-12", "lg:grid-cols-12 lg:items-start")}>
          <div className={cn("lg:col-span-7")}>
            {items.length === 0 && <EmptyCartsPlaceholder />}
            <ul>
              {items.map((cart, index) => (
                <li key={index} className="flex border-b py-6">
                  <div className="relative h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
                    <CldImage
                      src={cart.Image[0].imagePublicId}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="absolute right-0 top-0 z-10">
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => removeItem(cart.id)}
                      >
                        <XIcon className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="relative grid gap-6 pr-9 sm:grid-cols-2 sm:pr-0">
                      <div className="flex justify-between">
                        <p className="text-lg font-semibold">{cart.name}</p>
                      </div>
                      <div className="mt-1 flex text-sm">
                        <p className="text-muted-foreground">
                          {cart.Color.name}
                        </p>
                        <p className="ml-4 border-l pl-4 text-muted-foreground">
                          {cart.Size.name}
                        </p>
                      </div>
                      <p>
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(Number(cart.price))}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Summary />
        </div>
      </div>
    </main>
  );
}
