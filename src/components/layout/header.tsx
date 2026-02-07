"use client";

import Link from "next/link";
import { Menu, HardHat, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import * as React from "react";

const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
];

const serviceNavLinks = [
  { href: "/demolition-services", label: "Demolition" },
  { href: "/rubble-removal", label: "Rubble Removal" },
  { href: "/site-cleaning", label: "Site Cleaning" },
  { href: "/tree-felling", label: "Tree Felling" },
  { href: "/swimming-pool-demolition", label: "Swimming Pool Demolition" },
  { href: "/plant-hire", label: "Plant Hire" },
];

const otherNavLinks = [
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const isServicesActive = serviceNavLinks.some(link => pathname === link.href) || pathname === '/services';

  const DesktopNav = () => (
    <nav className="hidden md:flex items-center gap-6">
      {mainNavLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === link.href ? "text-primary" : "text-foreground/80"
          )}
        >
          {link.label}
        </Link>
      ))}

      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none",
            isServicesActive ? "text-primary" : "text-foreground/80"
          )}
        >
          Services
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {serviceNavLinks.map((link) => (
            <DropdownMenuItem key={link.href} asChild>
              <Link
                href={link.href}
                className={cn(
                  "w-full text-left",
                  pathname === link.href ? "font-semibold text-primary" : ""
                )}
              >
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {otherNavLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === link.href ? "text-primary" : "text-foreground/80"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  const MobileNav = () => (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between border-b pb-4">
        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-md">
            <HardHat className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
              <span className="font-bold text-base uppercase tracking-wider text-foreground">SIMA Demolitions</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Projects & Services</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-4 mt-6 flex-grow">
        {[...mainNavLinks, ...serviceNavLinks, ...otherNavLinks].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className={cn(
              "text-lg font-medium transition-colors hover:text-primary",
              pathname === link.href ? "text-primary" : "text-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Button asChild className="w-full mt-auto" size="lg" onClick={() => setMobileMenuOpen(false)}>
        <Link href="/contact">FREE QUOTE</Link>
      </Button>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container flex h-20 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center gap-3">
          <div className="bg-primary p-2 rounded-md">
            <HardHat className="h-8 w-8 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg uppercase tracking-wider text-foreground">SIMA Demolitions</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Projects & Services</span>
          </div>
        </Link>
        
        <div className="hidden md:flex flex-1 items-center justify-end gap-6">
          <DesktopNav />
          <Button asChild size="lg">
            <Link href="/contact">FREE QUOTE</Link>
          </Button>
        </div>

        <div className="md:hidden flex flex-1 justify-end">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
