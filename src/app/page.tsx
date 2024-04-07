import { getBillboard } from "@/actions/billboards";
import { getProducts } from "@/actions/products";

import Billboard from "@/components/Billboard";
import Products from "@/components/Products";

import { cn } from "@/lib/utils";

export default async function RootPage() {
  const billboard = await getBillboard(
    process.env.NEXT_PUBLIC_HOME_BILLBOARD_ID || "",
  );
  const products = await getProducts({ isFeatured: true });

  return (
    <main className="flex-1">
      <div
        className={cn("container flex flex-col gap-4 py-4", "md:gap-8 md:py-8")}
      >
        <Billboard billboard={billboard} />
        <Products title="Featured Products" products={products} />
      </div>
    </main>
  );
}
