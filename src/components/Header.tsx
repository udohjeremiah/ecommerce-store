import { getCategories } from "@/actions/categories";

import Cart from "@/components/Cart";
import DesktopNav from "@/components/DesktopNav";
import MobileNav from "@/components/MobileNav";
import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";

import { cn } from "@/lib/utils";

export default async function Header() {
  const categories = await getCategories();

  return (
    <header className="sticky top-0 z-50 border-b bg-background backdrop-blur">
      <div
        className={cn(
          "container flex items-center justify-between gap-4 p-4",
          "md:px-6",
        )}
      >
        <div className="flex items-center gap-2">
          <MobileNav categories={categories} />
          <Logo />
        </div>
        <DesktopNav categories={categories} />
        <div className="flex gap-4">
          <ThemeSwitcher />
          <Cart />
        </div>
      </div>
    </header>
  );
}
