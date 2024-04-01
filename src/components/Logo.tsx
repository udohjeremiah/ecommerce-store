import Link from "next/link";

import { ShoppingBagIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export default function Logo() {
  return (
    <h1>
      <Link href="/" className="flex items-center gap-2">
        <div className="rounded-full bg-primary p-2 text-background">
          <ShoppingBagIcon className="h-6 w-6" />
        </div>
        <span className={cn("hidden font-bold", "sm:inline-block")}>
          E-Commerce Store
        </span>
      </Link>
    </h1>
  );
}
