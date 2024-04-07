import type { Metadata } from "next";

import { getProduct, getProducts } from "@/actions/products";

import Gallery from "@/components/Gallery";
import { Separator } from "@/components/ui/separator";

import Info from "@/components/Info";
import Products from "@/components/Products";

import { cn } from "@/lib/utils";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const product = await getProduct(params.productId);
  const productName = product?.name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${productName} | E-Commerce Store`,
    description: `Shop the ${product?.name} product from our e-commerce store.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.Category?.id,
  });

  return (
    <main className="flex-1">
      <section
        className={cn("container flex flex-col gap-4 py-4", "md:gap-8 md:py-8")}
      >
        <div
          className={cn("grid grid-cols-1 gap-4", "md:grid-cols-2 md:gap-8")}
        >
          <Gallery images={product.Image} />
          <Info product={product} />
        </div>
        <Separator />
        <Products title="Related Products" products={suggestedProducts} />
      </section>
    </main>
  );
}
