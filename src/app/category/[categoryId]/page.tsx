import type { Metadata } from "next";

import { getCategory } from "@/actions/categories";
import { getColors } from "@/actions/colors";
import { getProducts } from "@/actions/products";
import { getSizes } from "@/actions/sizes";

import Billboard from "@/components/Billboard";
import Product from "@/components/Product";
import EmptyProductsPlaceholder from "@/components/EmptyProductsPlaceholder";
import Filter from "@/components/Filter";

import { cn } from "@/lib/utils";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    sizeId: string;
    colorId: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: { categoryId: string };
}): Promise<Metadata> {
  const category = await getCategory(params.categoryId);

  return {
    title: `${category.name} Category | E-Commerce Store`,
    description: `Explore the products in the ${category.name} category from our e-commerce store.`,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const category = await getCategory(params.categoryId);

  const sizes = await getSizes();

  const colors = await getColors();

  const products = await getProducts({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId,
  });

  return (
    <main className="flex-1">
      <div
        className={cn("container flex flex-col gap-4 py-4", "md:gap-8 md:py-8")}
      >
        <Billboard billboard={category.Billboard} />
        <div className={cn("grid gap-8", "lg:grid-cols-5")}>
          <div className="space-y-8">
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            <Filter valueKey="colorId" name="Colors" data={colors} />
          </div>
          <div className={cn("lg:col-span-4")}>
            {products.length === 0 ? (
              <EmptyProductsPlaceholder />
            ) : (
              <ul
                className={cn(
                  "grid grid-cols-1 gap-4",
                  "sm:grid-cols-2",
                  "md:grid-cols-3",
                )}
              >
                {products.map((product, index) => (
                  <li key={index}>
                    <Product product={product} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
