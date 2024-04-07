"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { useMediaQuery } from "@/hooks/use-media-query";

import { cn } from "@/lib/utils";

import { Category } from "@/types/types";

interface DesktopNavProps {
  categories: Category[];
}

export default function DesktopNav({ categories }: DesktopNavProps) {
  const pathName = usePathname();

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const routes = categories.map((category) => ({
    href: `/category/${category.id}`,
    label: category.name,
    active: pathName === `/category/${category.id}`,
  }));

  if (!isDesktop) {
    return null;
  }

  return (
    <nav
      className={cn(
        "flex flex-row items-center gap-5 text-sm font-medium",
        "lg:gap-6",
      )}
    >
      {routes.map(({ href, label, active }, index) => (
        <Link
          key={index}
          href={href}
          className={cn(
            "text-muted-foreground transition-colors",
            "hover:text-foreground",
            active && "text-foreground",
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
