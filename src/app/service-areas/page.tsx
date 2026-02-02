import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas",
  description: "Siya Demolitions Projects proudly serves Johannesburg, Pretoria, and the entire Gauteng province.",
};

const areas = [
  { name: "Johannesburg", description: "All suburbs including Sandton, Randburg, and Roodepoort.", href: "/johannesburg" },
  { name: "Pretoria", description: "Covering Centurion, Pretoria East, and northern suburbs." },
  { name: "Ekurhuleni", description: "Serving areas like Boksburg, Benoni, and Kempton Park." },
  { name: "West Rand", description: "Including Krugersdorp, Mogale City, and surrounding areas." },
  { name: "Sedibeng", description: "Covering Vereeniging, Vanderbijlpark, and the Vaal Triangle." },
  { name: "And more...", description: "Contact us to confirm service availability in your specific location within Gauteng." },
];

export default function ServiceAreasPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Serving All of Gauteng</h1>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
          We provide expert demolition services across the major metropolitan areas of Gauteng, South Africa.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {areas.map((area) => (
          <Card key={area.name}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <MapPin className="h-8 w-8 text-accent" />
                <div>
                  <h3 className="text-xl font-semibold">{area.name}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                  {area.href && (
                    <Button variant="link" asChild className="p-0 h-auto mt-2">
                       <Link href={area.href}>Learn More</Link>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold">Not Sure If We Cover Your Area?</h2>
        <p className="mt-2 text-muted-foreground">Give us a call and we'll be happy to assist.</p>
        <Button asChild className="mt-4">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
