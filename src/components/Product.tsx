"use client";

import Link from "next/link";

import { CldImage } from "next-cloudinary";
import { ShoppingCartIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { useCart } from "@/hooks/use-cart";

import { cn } from "@/lib/utils";

import { Product as ProductType } from "@/types/types";

interface ProductProps {
  product: ProductType;
}

export default function Product({ product }: ProductProps) {
  const cart = useCart();

  return (
    <Card>
      <CardContent className="p-0">
        <CldImage
          src={product.Image[0].imagePublicId}
          alt=""
          width="960"
          height="640"
          priority
          className="aspect-square rounded-b-none rounded-t-xl object-contain"
        />
      </CardContent>
      <CardFooter className="flex-col items-start p-4">
        <div className="flex w-full items-start justify-between gap-4">
          <div>
            <p className="font-semibold">{product.name}</p>
            <p className="text-sm text-muted-foreground">
              {product.Category.name}
            </p>
          </div>
          <p className="ml-auto font-semibold">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(Number(product.price))}
          </p>
        </div>
        <div className={cn("mt-4 grid w-full gap-4", "lg:grid-cols-2")}>
          <Button asChild variant="outline" className="w-full">
            <Link href={`/product/${product.id}`}>View product</Link>
          </Button>
          <Button onClick={() => cart.addItem(product)} className="w-full">
            <ShoppingCartIcon className="mr-2 h-4 w-4" />
            Add to cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
