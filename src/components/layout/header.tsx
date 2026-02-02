"use client";

import Link from "next/link";
import { Menu, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
  { href: "/johannesburg", label: "Johannesburg" },
];

export function Header() {
  const pathname = usePathname();

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-4 lg:gap-6", className)}>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === link.href ? "text-primary" : "text-muted-foreground"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Wrench className="h-6 w-6 text-accent" />
          <span className="font-bold text-lg">Siya Demolitions</span>
        </Link>
        <div className="hidden md:flex flex-1 items-center justify-end gap-4">
          <NavLinks />
          <Button asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
        <div className="md:hidden flex flex-1 justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2">
                  <Wrench className="h-6 w-6 text-accent" />
                  <span className="font-bold">Siya Demolitions</span>
                </Link>
                <NavLinks className="flex-col items-start gap-4" />
                <Button asChild className="w-full">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
