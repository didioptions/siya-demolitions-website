import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Phone, MessageSquare } from "lucide-react";

const pretoriaServices = [
  "Demolition Services",
  "Rubble Removal",
  "Site Cleaning",
  "Tree Felling",
  "Construction Services",
];

const pretoriaAreas = [
    "Pretoria CBD",
    "Sunnyside",
    "Arcadia",
    "Hatfield",
    "Menlyn",
    "Brooklyn",
    "Lynnwood",
    "Waterkloof",
    "Garsfontein",
    "Moreleta Park",
];

export default function PretoriaPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Demolition & Construction Services in Pretoria</h1>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
          Siya Demolitions Projects offers reliable services throughout Pretoria. We handle residential, commercial, and industrial projects with a focus on safety and efficiency.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="shadow-lg h-full">
          <CardHeader>
            <CardTitle>Our Services in Pretoria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pretoriaServices.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{service}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg h-full">
          <CardHeader>
            <CardTitle>Areas Covered in Pretoria</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
              {pretoriaAreas.map((area) => (
                <li key={area} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{area}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold">Ready to Discuss Your Pretoria Project?</h2>
        <p className="mt-2 text-muted-foreground">
          Contact us today for a free, no-obligation quote.
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

    
