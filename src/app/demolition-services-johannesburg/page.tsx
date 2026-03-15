import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Phone, Mail, MapPin, ShieldCheck, Construction } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const suburbs = [
    { name: "Sandton", href: "/demolition-sandton" },
    { name: "Randburg", href: "/demolition-randburg" },
    { name: "Roodepoort", href: "/demolition-roodepoort" },
    { name: "Midrand", href: "/demolition-midrand" },
    { name: "Fourways", href: "/demolition-fourways" },
    { name: "Soweto", href: "/demolition-soweto" },
    { name: "Alberton", href: "/demolition-alberton" },
    { name: "Germiston", href: "/demolition-germiston" },
    { name: "Boksburg", href: "/demolition-boksburg" },
    { name: "Benoni", href: "/demolition-benoni" },
    { name: "Kempton Park", href: "/demolition-kempton-park" },
    { name: "Bedfordview", href: "/demolition-bedfordview" },
    { name: "Edenvale", href: "/demolition-edenvale" },
    { name: "Bryanston", href: "/demolition-bryanston" },
    { name: "Rosebank", href: "/demolition-rosebank" },
    { name: "Northcliff", href: "/demolition-northcliff" },
    { name: "Melville", href: "/demolition-melville" },
    { name: "Linden", href: "/demolition-linden" },
    { name: "Parkhurst", href: "/demolition-parkhurst" },
    { name: "Greenside", href: "/demolition-greenside" },
];

const services = [
    "House & Residential Demolition",
    "Commercial Building Demolition",
    "Industrial Demolition & Site Clearing",
    "Interior Strip-Outs & Selective Demolition",
    "Swimming Pool Demolition & Removal",
    "Concrete Breaking & Foundation Removal",
    "Complete Rubble Removal & Site Cleanup",
];

export default function DemolitionServicesJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'constructionServices');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Services Across Johannesburg</h1>
        <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <Construction /> Full Coverage for All Demolition Projects
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions Projects is your comprehensive provider of expert demolition services in Johannesburg. Our licensed and insured teams offer a complete suite of solutions for any project, big or small, across every suburb of this vibrant city. We combine decades of experience with modern equipment and a commitment to safety to deliver reliable, efficient, and fully compliant demolition and site clearing services. From residential homes to large industrial sites, we have the expertise to get the job done right.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
          <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
        </div>
      </section>

      <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
          <div className="md:col-span-3">
              <h2 className="text-3xl font-bold mb-6">Johannesburg Demolition Contractors You Can Trust</h2>
              <p className="text-muted-foreground mb-4">Choosing SIMA Demolitions means partnering with a team that values safety, integrity, and customer satisfaction. We are committed to upholding the highest standards on every job. Our intimate knowledge of Johannesburg and its diverse suburbs ensures your project runs smoothly and complies with all regulations.</p>
              <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                  <li className="flex items-center gap-3"><Check className="text-accent" /><span>Deep knowledge of City of Johannesburg requirements.</span></li>
                  <li className="flex items-center gap-3"><Check className="text-accent" /><span>Decades of experience on residential and commercial sites.</span></li>
                   <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
              </ul>
          </div>
          <div className="md:col-span-2">
             {partnerImage && <Image src={partnerImage.imageUrl} alt="Team of demolition contractors planning a project in Johannesburg" data-ai-hint="construction team" width={600} height={500} className="rounded-lg shadow-lg" />}
          </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Demolition Services in Johannesburg</h2>
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
            Our teams are strategically located to provide fast and efficient demolition services to every corner of Johannesburg. Click on your suburb to learn more about our specialized local services.
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
            <h2 className="text-3xl font-bold text-center mb-8">Our Johannesburg Demolition Process</h2>
            <ol className="space-y-4 max-w-2xl mx-auto text-muted-foreground">
                <li className="flex gap-4"><strong className="text-accent">1. Consultation:</strong> We assess your site and provide a detailed, transparent quote.</li>
                <li className="flex gap-4"><strong className="text-accent">2. Permits:</strong> We manage all council applications to ensure full compliance.</li>
                <li className="flex gap-4"><strong className="text-accent">3. Site Prep:</strong> We secure the site and handle all safety prerequisites.</li>
                <li className="flex gap-4"><strong className="text-accent">4. Demolition:</strong> Our expert team performs a controlled, safe demolition.</li>
                <li className="flex gap-4"><strong className="text-accent">5. Cleanup:</strong> We remove all rubble and leave the site clean and build-ready.</li>
            </ol>
        </section>

      <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
        <h2 className="text-3xl font-bold">Get a Free Demolition Quote Anywhere in Johannesburg</h2>
        <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
          No matter where you are in Johannesburg, we're ready to help. Contact us for a fast, competitive, and professional quote for your demolition project.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
          <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
        </div>
      </section>
    </div>
  );
}
