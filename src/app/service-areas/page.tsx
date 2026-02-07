import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Phone, MessageSquare } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas | SIMA Demolitions Projects Gauteng",
  description: "SIMA Demolitions Projects provides demolition, rubble removal, site cleaning, tree felling, and construction services across all Gauteng areas.",
};

const serviceAreas = [
  "Johannesburg", "Pretoria", "Soweto", "Sandton", "Randburg", "Midrand", "Kempton Park",
  "Roodepoort", "Centurion", "Germiston", "Tembisa", "Alberton",
  "Boksburg", "Benoni", "Orange Farm", "Lenasia"
];

export default function ServiceAreasPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Our Service Areas in Gauteng</h1>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
          We proudly serve an extensive list of areas throughout Gauteng. If your location isn't listed below, please contact us as we may still be able to assist.
        </p>
      </div>

      <Card className="max-w-5xl mx-auto shadow-lg">
        <CardContent className="p-6 md:p-8">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
            {serviceAreas.map((area) => (
              <li key={area} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                {area === 'Johannesburg' ? (
                  <Link href="/johannesburg" className="font-medium text-primary hover:underline">{area}</Link>
                ) : area === 'Pretoria' ? (
                  <Link href="/pretoria" className="font-medium text-primary hover:underline">{area}</Link>
                ) : (
                  <span className="font-medium">{area}</span>
                )}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold">Is Your Area Not Listed?</h2>
        <p className="mt-2 text-muted-foreground">
          No problem! We are flexible and our service area is always expanding. Contact us to confirm availability.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
            <a href="tel:0784292760">
                <Phone />
                Call Now
            </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
            <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">
                <MessageSquare />
                WhatsApp Now
            </a>
            </Button>
        </div>
      </div>
    </div>
  );
}
