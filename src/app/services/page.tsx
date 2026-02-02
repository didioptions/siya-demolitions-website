import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Siya Demolitions Projects Gauteng",
  description: "Siya Demolitions Projects offers demolition, rubble removal, site cleaning, tree felling, and construction services across Gauteng. Call 078 429 2760.",
};

const services = [
  {
    title: "Demolition Services",
    description: "Comprehensive demolition for residential, commercial, and industrial structures. We prioritize safety and efficiency on every project.",
    imageId: "homeHero"
  },
  {
    title: "Rubble Removal",
    description: "Fast and efficient removal of construction debris, rubble, and waste from your site, ensuring a clean and safe environment.",
    imageId: "rubbleRemoval"
  },
  {
    title: "Site Cleaning",
    description: "Thorough cleaning and preparation of your site after demolition, getting it ready for the next phase of your project.",
    imageId: "siteClearing"
  },
  {
    title: "Tree Felling",
    description: "Professional and safe tree felling services to clear your land for construction or remove potentially hazardous trees.",
    imageId: "treeFelling"
  },
  {
    title: "Construction Services",
    description: "We provide foundational construction services to get your new project started on the right foot after site clearing.",
    imageId: "constructionServices"
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Our Services</h1>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
          From demolition to construction, we offer a complete range of services to meet your project's needs.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const image = PlaceHolderImages.find(p => p.id === service.imageId);
          // The original list has 6 items, the new one has 5. I will combine a few.
          const newServices = services.filter(s => s.title !== "Concrete Breaking & Removal" && s.title !== "Asbestos Removal");
          if (service.title === "Demolition Services") {
            service.description = "Comprehensive demolition services for residential, commercial, and industrial properties. We handle projects of all sizes with a focus on safety and efficiency.";
          }
          if (service.title === "Site Cleaning") {
            service.description = "Thorough cleaning and clearing of sites post-demolition or construction. We ensure your site is spotless and prepared for future development.";
          }
          
          return (
            <Card key={service.title} className="overflow-hidden flex flex-col shadow-lg hover:scale-[1.02] transition-transform duration-300">
              {image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold">Ready to Start Your Project?</h2>
        <p className="mt-2 text-muted-foreground">Contact us today for a free consultation and quote.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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