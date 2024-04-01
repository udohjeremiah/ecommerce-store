"use client";

import { ShoppingCartIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useMounted } from "@/hooks/use-mounted";

export default function Cart() {
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <Button variant="outline" size="icon" className="relative rounded-full">
      <ShoppingCartIcon className="h-5 w-5" />
      <Badge
        variant="default"
        className="absolute -right-1 -top-1 z-10 rounded-full px-1 py-0"
      >
        0
      </Badge>
    </Button>
  );
}
