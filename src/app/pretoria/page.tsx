import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Phone } from "lucide-react";

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
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp Now
            </a>
            </Button>
        </div>
      </div>
    </div>
  );
}

    
