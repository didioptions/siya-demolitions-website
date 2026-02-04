import { HardHat, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  const services = [
    { href: "/services", label: "Demolition" },
    { href: "/rubble-removal", label: "Rubble Removal" },
    { href: "/site-cleaning", label: "Site Cleaning" },
    { href: "/tree-felling", label: "Tree Felling" },
    { href: "/swimming-pool-demolition", label: "Swimming Pool Demolition" },
    { href: "/plant-hire", label: "Plant Hire" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-card border-t text-muted-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col">
            <Link href="/" className="mb-4 flex items-center gap-3">
                <div className="bg-primary p-2 rounded-md">
                    <HardHat className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-lg uppercase tracking-wider text-foreground">Siya Demolitions</span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Projects & Services</span>
                </div>
            </Link>
            <p className="text-sm">
                Leading demolition and site clearing specialists in Gauteng. We provide professional services for residential and commercial projects.
            </p>
            <div className="mt-4 flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary"><Facebook size={20} /></a>
                <a href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></a>
                <a href="#" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(link => (
                  <li key={link.href}>
                      <Link href={link.href} className="text-sm hover:text-primary transition-colors">{link.label}</Link>
                  </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-foreground">Services</h4>
            <ul className="mt-4 space-y-2">
              {services.map(service => (
                  <li key={service.href}>
                      <Link href={service.href} className="text-sm hover:text-primary transition-colors">{service.label}</Link>
                  </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-foreground">Contact Info</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <a href="tel:0784292760" className="text-sm hover:text-primary transition-colors">078 429 2760</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@siyademolitions.co.za" className="text-sm hover:text-primary transition-colors">info@siyademolitions.co.za</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1" />
                <span className="text-sm">Serving all of Gauteng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-6 text-center text-sm">
          <p>&copy; {year} Siya Demolitions Projects. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
