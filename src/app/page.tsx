import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Building, Check, Recycle, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: <Building className="h-8 w-8 text-accent" />,
    title: "Residential & Commercial",
    description: "Complete and partial demolition for homes and businesses.",
  },
  {
    icon: <Wrench className="h-8 w-8 text-accent" />,
    title: "Industrial Demolition",
    description: "Specialized services for factories, plants, and large structures.",
  },
  {
    icon: <Recycle className="h-8 w-8 text-accent" />,
    title: "Site Clearing & Earthworks",
    description: "Preparing your site for new construction from the ground up.",
  },
];

const features = [
  "Safety First Approach",
  "Experienced & Certified Team",
  "Eco-Friendly Practices",
  "On-Time Project Completion",
  "Competitive Pricing",
  "Fully Insured",
];

const homeHeroImage = PlaceHolderImages.find(p => p.id === 'homeHero');

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white">
        {homeHeroImage && (
          <Image
            src={homeHeroImage.imageUrl}
            alt={homeHeroImage.description}
            data-ai-hint={homeHeroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Leading Demolition Experts in Gauteng
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
            Safe, efficient, and reliable demolition services for any project size.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Request a Free Quote</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/services">Our Services <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Core Services</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
              We offer a comprehensive range of demolition and site preparation services.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Why Choose Siya Demolitions?</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
              Our commitment to excellence sets us apart.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full p-2">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{feature}</h3>
                  <p className="text-sm text-muted-foreground">Placeholder text about this feature.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
          <p className="mt-2 max-w-xl mx-auto">
            Contact us today for a no-obligation consultation and free quote.
          </p>
          <Button variant="secondary" size="lg" className="mt-6" asChild>
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
