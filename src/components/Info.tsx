"use client";

import { ShoppingCartIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";

import { Product } from "@/types/types";

interface InfoProps {
  product: Product;
}

export default function Info({ product }: InfoProps) {
  return (
    <div className={cn("order-1 space-y-4", "md:order-none")}>
      <div className="text-2xl font-bold">
        <h2>{product.name}</h2>
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(Number(product.price))}
        </p>
      </div>
      <Separator />
      <div className="space-y-2">
        <div className="grid grid-cols-2">
          <h3 className="font-medium">Size</h3>
          <p>
            {product.Size.name} ({product.Size.value})
          </p>
        </div>
        <div className="grid grid-cols-2">
          <h3 className="font-medium">Color</h3>
          <p className="flex items-center gap-2">
            {product.Color.name}
            <span
              className="h-6 w-6 rounded-full border shadow"
              style={{ backgroundColor: product.Color.value }}
            ></span>
          </p>
        </div>
      </div>
      <Button>
        <ShoppingCartIcon className="mr-2 h-4 w-4" />
        Add to cart
      </Button>
    </div>
  );
}
