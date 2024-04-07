"use client";

import { useState } from "react";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { MenuIcon, ShoppingBagIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { useMediaQuery } from "@/hooks/use-media-query";

import { cn } from "@/lib/utils";

import { Category } from "@/types/types";

interface MobileNavProps {
  categories: Category[];
}

export default function MobileNav({ categories }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  const pathName = usePathname();

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const routes = categories.map((category) => ({
    href: `/category/${category.id}`,
    label: category.name,
    active: pathName === `/category/${category.id}`,
  }));

  if (isDesktop) {
    return null;
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="mt-4 grid gap-6 text-lg font-medium">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={cn(
              "flex w-max items-center gap-2 text-lg font-bold",
              "md:text-base",
            )}
          >
            <div className="rounded-full bg-primary p-2 text-background">
              <ShoppingBagIcon className="h-6 w-6" />
            </div>
            E-Commerce Store
          </Link>
          {routes.map(({ href, label, active }, index) => (
            <Link
              key={index}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                "w-max text-muted-foreground transition-colors",
                "hover:text-foreground",
                active && "text-foreground",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
