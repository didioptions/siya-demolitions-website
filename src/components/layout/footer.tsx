import Link from 'next/link';
import { Wrench, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Wrench className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold">Siya Demolitions</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for safe and efficient demolition services in Gauteng.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-md font-semibold">Quick Links</h3>
            <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Services</Link>
            <Link href="/service-areas" className="text-sm text-muted-foreground hover:text-primary">Service Areas</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link>
            <Link href="/johannesburg" className="text-sm text-muted-foreground hover:text-primary">Johannesburg Services</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-md font-semibold">Contact Info</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>078 429 2760</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Gauteng, South Africa</span>
            </div>
            <div className="flex gap-4 mt-2">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {year} Siya Demolitions Projects. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
