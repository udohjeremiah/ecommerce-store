"use client";

import { ShoppingCartIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useCart } from "@/hooks/use-cart";
import { useMounted } from "@/hooks/use-mounted";
import Link from "next/link";

export default function Cart() {
  const cart = useCart();
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="relative rounded-full"
    >
      <Link href="/cart">
        <ShoppingCartIcon className="h-5 w-5" />
        <Badge
          variant="default"
          className="absolute -right-1 -top-1 z-10 rounded-full px-1 py-0"
        >
          {cart.items.length}
        </Badge>
      </Link>
    </Button>
  );
}
