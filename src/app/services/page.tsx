import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore the wide range of demolition services offered by Siya Demolitions Projects, including residential, commercial, and industrial demolition.",
};

const services = [
  {
    title: "Residential Demolition",
    description: "Full or partial demolition of houses, garages, and other residential structures. We handle all aspects, from planning and permits to site cleanup.",
    imageId: "residentialDemolition"
  },
  {
    title: "Commercial Demolition",
    description: "Expert demolition of office buildings, retail spaces, warehouses, and more. We work on tight schedules to minimize disruption.",
    imageId: "commercialDemolition"
  },
  {
    title: "Industrial Demolition",
    description: "Specialized services for dismantling factories, power plants, and other large-scale industrial facilities with a focus on safety and environmental compliance.",
    imageId: "industrialDemolition"
  },
  {
    title: "Site Clearing & Preparation",
    description: "We clear and level your land after demolition, removing all debris and preparing the site for its next phase of development.",
    imageId: "siteClearing"
  },
  {
    title: "Concrete Breaking & Removal",
    description: "Efficient breaking and removal of concrete slabs, foundations, driveways, and other structures using advanced equipment.",
    imageId: "concreteBreaking"
  },
  {
    title: "Asbestos Removal",
    description: "Safe and compliant removal and disposal of asbestos-containing materials by our certified professionals, protecting both people and the environment.",
    imageId: "asbestosRemoval"
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Our Demolition Services</h1>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
          Comprehensive solutions for every demolition need.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const image = PlaceHolderImages.find(p => p.id === service.imageId);
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
    </div>
  );
}
