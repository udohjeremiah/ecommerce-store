// Next
import Link from "next/link";

// Dependencies
import { StoreIcon, ShoppingCartIcon } from "lucide-react";

// Components
import { Button } from "@/components/ui/button";

export default function EmptyCartsPlaceholder() {
  return (
    <div className="flex h-[430px] items-center justify-center rounded-md border border-dashed p-4">
      <div className="mx-auto flex flex-col items-center justify-center text-center">
        <ShoppingCartIcon className="h-12 w-12" />
        <h3 className="mt-4 text-lg font-semibold">No items added to cart</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          You have not added any items to the cart. Please visit the store to do
          so.
        </p>

        <Button asChild variant="default" className="flex items-center">
          <Link href="/">
            <StoreIcon className="mr-2 h-4 w-4" />
            Store
          </Link>
        </Button>
      </div>
    </div>
  );
}
