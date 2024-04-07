"use client";

import { useEffect, useState } from "react";

import { LoaderIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { useCart } from "@/hooks/use-cart";

export default function Summary() {
  const [checkingOut, setCheckingOut] = useState(false);

  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      toast.success("Order placed! You will receive an email confirmation.");
      removeAll();
    }

    if (query.get("canceled")) {
      toast.error(
        "Order canceled -- continue to shop around and checkout when you're ready.",
      );
    }
  }, [removeAll]);

  const totalPrice = items.reduce(
    (total, item) => total + Number(item.price),
    0,
  );

  const onCheckout = async () => {
    try {
      setCheckingOut(true);

      if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error("API_URL is not defined");
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            productIds: items.map((item) => item.id),
          }),
        },
      );

      setCheckingOut(false);
      const { url } = await response.json();
      window.location = url;

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      setCheckingOut(false);
      console.error(error);
      toast.error("💔 Something went wrong.");
    }
  };

  return (
    <div className="space-y-4 rounded-lg bg-card px-4 py-6 sm:p-6 lg:col-span-5 lg:p-8">
      <h2 className="text-lg font-medium">Order Summary</h2>
      <Separator />
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="font-medium">Order Items</div>
          <p>{items.length}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="font-medium">Order Total</div>
          <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(Number(totalPrice))}
          </p>
        </div>
      </div>
      <Button
        disabled={items.length === 0 || checkingOut}
        onClick={onCheckout}
        className="mt-6 w-full"
      >
        {checkingOut && <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />}
        Checkout
      </Button>
    </div>
  );
}
