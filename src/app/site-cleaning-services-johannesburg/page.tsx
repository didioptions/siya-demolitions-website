import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Phone, Mail, MapPin, ShieldCheck, Construction } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const suburbs = [
    { name: "Sandton", href: "/site-cleaning-sandton" },
    { name: "Randburg", href: "/site-cleaning-randburg" },
    { name: "Roodepoort", href: "/site-cleaning-roodepoort" },
    { name: "Midrand", href: "/site-cleaning-midrand" },
    { name: "Fourways", href: "/site-cleaning-fourways" },
    { name: "Soweto", href: "/site-cleaning-soweto" },
    { name: "Alberton", href: "/site-cleaning-alberton" },
    { name: "Germiston", href: "/site-cleaning-germiston" },
    { name: "Boksburg", href: "/site-cleaning-boksburg" },
    { name: "Benoni", href: "/site-cleaning-benoni" },
    { name: "Kempton Park", href: "/site-cleaning-kempton-park" },
    { name: "Bedfordview", href: "/site-cleaning-bedfordview" },
    { name: "Edenvale", href: "/site-cleaning-edenvale" },
    { name: "Bryanston", href: "/site-cleaning-bryanston" },
    { name: "Rosebank", href: "/site-cleaning-rosebank" },
    { name: "Northcliff", href: "/site-cleaning-northcliff" },
    { name: "Melville", href: "/site-cleaning-melville" },
    { name: "Linden", href: "/site-cleaning-linden" },
    { name: "Parkhurst", href: "/site-cleaning-parkhurst" },
    { name: "Greenside", href: "/site-cleaning-greenside" },
];

const services = [
    "Post-Construction Site Cleaning",
    "Post-Demolition Debris Removal",
    "Residential Renovation Cleanup",
    "Commercial & Industrial Site Maintenance",
    "Pre-Handover Final Cleaning",
    "Hazardous Debris & Waste Clearing",
];

export default function SiteCleaningServicesJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Comprehensive Site Cleaning Services Across Johannesburg</h1>
        <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <Construction /> Your One-Stop Solution for a Clean & Safe Worksite
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions Projects offers a complete range of professional site cleaning services for any project, big or small, across every suburb of Johannesburg. Our licensed and insured teams are equipped to handle everything from post-construction debris to ongoing site maintenance, ensuring your worksite remains productive, safe, and compliant. We are your reliable partner for a spotless finish.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
          <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
        </div>
      </section>

      <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
          <div className="md:col-span-3">
              <h2 className="text-3xl font-bold mb-6">Johannesburg's Trusted Site Cleaning Team</h2>
              <p className="text-muted-foreground mb-4">Choosing SIMA for your site cleaning needs means partnering with a team that values safety, efficiency, and customer satisfaction. We are committed to upholding the highest standards on every job.</p>
              <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                  <li className="flex items-center gap-3"><Check className="text-accent" /><span>Deep knowledge of City of Johannesburg waste disposal requirements.</span></li>
                  <li className="flex items-center gap-3"><Check className="text-accent" /><span>Experienced in residential, commercial, and industrial environments.</span></li>
                   <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
              </ul>
          </div>
          <div className="md:col-span-2">
             {partnerImage && <Image src={partnerImage.imageUrl} alt="Team of site cleaning contractors in Johannesburg" data-ai-hint="construction team" width={600} height={500} className="rounded-lg shadow-lg" />}
          </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Site Cleaning Services in Johannesburg</h2>
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
            Our teams provide fast and efficient site cleaning to every suburb of Johannesburg. Click on your area to learn more about our specialized local services.
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
            <h2 className="text-3xl font-bold text-center mb-8">Our Johannesburg Site Cleaning Process</h2>
            <ol className="space-y-4 max-w-2xl mx-auto text-muted-foreground">
                <li className="flex gap-4"><strong className="text-accent">1. Consultation:</strong> We assess your site's cleaning needs and provide a clear, detailed quote.</li>
                <li className="flex gap-4"><strong className="text-accent">2. Scheduling:</strong> We arrange a one-off or recurring cleaning schedule that fits your project timeline.</li>
                <li className="flex gap-4"><strong className="text-accent">3. Execution:</strong> Our professional team safely sorts, collects, and removes all specified debris.</li>
                <li className="flex gap-4"><strong className="text-accent">4. Final Sweep:</strong> We perform a thorough final cleanup, leaving the area tidy and hazard-free.</li>
                <li className="flex gap-4"><strong className="text-accent">5. Disposal:</strong> All waste is transported to a licensed and eco-friendly facility.</li>
            </ol>
        </section>

      <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
        <h2 className="text-3xl font-bold">Get a Free Site Cleaning Quote Anywhere in Johannesburg</h2>
        <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
          No matter where your project is in Johannesburg, we're ready to help keep it clean. Contact us for a fast, competitive, and professional quote.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
          <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
        </div>
      </section>
    </div>
  );
}
