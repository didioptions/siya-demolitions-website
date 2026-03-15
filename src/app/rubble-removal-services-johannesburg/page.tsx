import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Phone, Mail, MapPin, ShieldCheck, Construction } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const suburbs = [
    { name: "Sandton", href: "/rubble-removal-sandton" },
    { name: "Randburg", href: "/rubble-removal-randburg" },
    { name: "Roodepoort", href: "/rubble-removal-roodepoort" },
    { name: "Midrand", href: "/rubble-removal-midrand" },
    { name: "Fourways", href: "/rubble-removal-fourways" },
    { name: "Soweto", href: "/rubble-removal-soweto" },
    { name: "Alberton", href: "/rubble-removal-alberton" },
    { name: "Germiston", href: "/rubble-removal-germiston" },
    { name: "Boksburg", href: "/rubble-removal-boksburg" },
    { name: "Benoni", href: "/rubble-removal-benoni" },
    { name: "Kempton Park", href: "/rubble-removal-kempton-park" },
    { name: "Bedfordview", href: "/rubble-removal-bedfordview" },
    { name: "Edenvale", href: "/rubble-removal-edenvale" },
    { name: "Bryanston", href: "/rubble-removal-bryanston" },
    { name: "Rosebank", href: "/rubble-removal-rosebank" },
    { name: "Northcliff", href: "/rubble-removal-northcliff" },
    { name: "Melville", href: "/rubble-removal-melville" },
    { name: "Linden", href: "/rubble-removal-linden" },
    { name: "Parkhurst", href: "/rubble-removal-parkhurst" },
    { name: "Greenside", href: "/rubble-removal-greenside" },
];

const services = [
    "General Rubble & Waste Removal",
    "Garden Refuse & Yard Clean-ups",
    "Garage & Storage Unit Clearance",
    "Construction Debris Removal",
    "Office & Warehouse Waste Disposal",
    "Post-Demolition Site Clearing",
];

export default function RubbleRemovalServicesJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Comprehensive Rubble Removal Services Across Johannesburg</h1>
        <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <Construction /> Your One-Stop Solution for Waste & Debris Clearing
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions Projects offers a complete range of rubble removal and site clearing services for every corner of Johannesburg. Our licensed and insured teams are equipped to handle any job, big or small, with professionalism and efficiency. We are your reliable partner for clearing construction sites, cleaning up garden refuse, or decluttering garages, ensuring all waste is handled responsibly and in line with city regulations.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
          <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
        </div>
      </section>

      <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
          <div className="md:col-span-3">
              <h2 className="text-3xl font-bold mb-6">Johannesburg's Trusted Rubble Removal Team</h2>
              <p className="text-muted-foreground mb-4">Choosing SIMA for your rubble removal needs means partnering with a team that values safety, integrity, and customer satisfaction. We are committed to upholding the highest standards on every job.</p>
              <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                  <li className="flex items-center gap-3"><Check className="text-accent" /><span>Deep knowledge of City of Johannesburg waste disposal requirements.</span></li>
                  <li className="flex items-center gap-3"><Check className="text-accent" /><span>Decades of experience on residential and commercial sites.</span></li>
                   <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
              </ul>
          </div>
          <div className="md:col-span-2">
             {partnerImage && <Image src={partnerImage.imageUrl} alt="Team of rubble removal contractors in Johannesburg" data-ai-hint="construction team" width={600} height={500} className="rounded-lg shadow-lg" />}
          </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Rubble Removal Services in Johannesburg</h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
            {services.map((service) => (
                <div key={service} className="flex items-center gap-3 bg-card p-4 rounded-lg">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="font-medium">{service}</span>
                </div>
            ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Areas We Serve Across Johannesburg</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
            Our teams provide fast and efficient rubble removal to every suburb of Johannesburg. Click on your area to learn more about our specialized local services.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
            {suburbs.map(suburb => (
                <Button key={suburb.name} variant="outline" asChild>
                    <Link href={suburb.href}>
                       <MapPin className="mr-2" /> {suburb.name}
                    </Link>
                </Button>
            ))}
        </div>
      </section>

       <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Our Johannesburg Rubble Removal Process</h2>
            <ol className="space-y-4 max-w-2xl mx-auto text-muted-foreground">
                <li className="flex gap-4"><strong className="text-accent">1. Consultation:</strong> We assess your needs and provide a clear, transparent quote.</li>
                <li className="flex gap-4"><strong className="text-accent">2. Scheduling:</strong> We arrange a convenient time for collection, often on the same day.</li>
                <li className="flex gap-4"><strong className="text-accent">3. Loading:</strong> Our professional team safely loads all debris and waste.</li>
                <li className="flex gap-4"><strong className="text-accent">4. Disposal:</strong> We transport all waste to a licensed and eco-friendly facility.</li>
                <li className="flex gap-4"><strong className="text-accent">5. Cleanup:</strong> We sweep the area, leaving your site clean and tidy.</li>
            </ol>
        </section>

      <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
        <h2 className="text-3xl font-bold">Get a Free Rubble Removal Quote Anywhere in Johannesburg</h2>
        <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
          No matter where you are in Johannesburg, we're ready to help. Contact us for a fast, competitive, and professional quote for your rubble removal project.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
          <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
        </div>
      </section>
    </div>
  );
}
