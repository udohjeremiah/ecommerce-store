"use client";

import EmptyProductsPlaceholder from "@/components/EmptyProductsPlaceholder";
import Product from "@/components/Product";

import { cn } from "@/lib/utils";

import { Product as ProductType } from "@/types/types";

interface ProductsProps {
  title: string;
  products: ProductType[];
}

export default function Products({ title, products }: ProductsProps) {
  return (
    <section className="flex flex-col gap-y-8">
      <div className="space-y-4">
        <h3 className={cn("text-lg font-semibold", "md:text-2xl")}>{title}</h3>
        {products?.length === 0 && <EmptyProductsPlaceholder />}
        <ul
          className={cn(
            "grid grid-cols-1 items-center justify-center gap-4",
            "sm:grid-cols-2",
            "md:grid-cols-3",
            "lg:grid-cols-4",
          )}
        >
          {products.map((product, index) => (
            <li key={index} className="w-full space-y-2">
              <Product product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
