import { Button } from "@/components/ui/button";
import { Check, Phone, Mail, MapPin, Construction, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const suburbs = [
    { name: "Sandton", href: "/swimming-pool-demolition-sandton" },
    { name: "Randburg", href: "/swimming-pool-demolition-randburg" },
    { name: "Roodepoort", href: "/swimming-pool-demolition-roodepoort" },
    { name: "Midrand", href: "/swimming-pool-demolition-midrand" },
    { name: "Fourways", href: "/swimming-pool-demolition-fourways" },
    { name: "Soweto", href: "/swimming-pool-demolition-soweto" },
    { name: "Alberton", href: "/swimming-pool-demolition-alberton" },
    { name: "Germiston", href: "/swimming-pool-demolition-germiston" },
    { name: "Boksburg", href: "/swimming-pool-demolition-boksburg" },
    { name: "Benoni", href: "/swimming-pool-demolition-benoni" },
    { name: "Kempton Park", href: "/swimming-pool-demolition-kempton-park" },
    { name: "Bedfordview", href: "/swimming-pool-demolition-bedfordview" },
    { name: "Edenvale", href: "/swimming-pool-demolition-edenvale" },
    { name: "Bryanston", href: "/swimming-pool-demolition-bryanston" },
    { name: "Rosebank", href: "/swimming-pool-demolition-rosebank" },
    { name: "Northcliff", href: "/swimming-pool-demolition-northcliff" },
    { name: "Melville", href: "/swimming-pool-demolition-melville" },
    { name: "Linden", href: "/swimming-pool-demolition-linden" },
    { name: "Parkhurst", href: "/swimming-pool-demolition-parkhurst" },
    { name: "Greenside", href: "/swimming-pool-demolition-greenside" },
];

const services = [
    "Full Demolition of Concrete & Gunite Pools",
    "Removal of Fibreglass & Liner Pools",
    "Partial Demolition & Backfilling",
    "Pool Paving & Decking Removal",
    "Complete Rubble & Debris Removal",
    "Site Leveling & Compaction",
];

const faqs = [
    { question: "How much does pool demolition cost in Johannesburg?", answer: "The cost depends on the pool's size, material, and site accessibility. We provide free, detailed quotes to give you a clear and accurate price." },
    { question: "Do you remove all the rubble after demolition?", answer: "Yes, our service is all-inclusive. We demolish the pool and remove all associated debris from your property, leaving it clean." },
    { question: "Do I need municipal approval for pool demolition?", answer: "In most cases, yes. We guide our clients through the City of Johannesburg's requirements to ensure every project is fully compliant." },
    { question: "How long does the demolition process take?", answer: "A standard residential pool can typically be demolished and cleared within 2-4 days, depending on the scope of the project." },
    { question: "Can the space be used for new construction afterwards?", answer: "Yes. With proper, engineered backfilling and compaction, which we provide, the ground is stabilized and suitable for building on." }
];

export default function SwimmingPoolDemolitionServicesJohannesburgPage() {
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Comprehensive Swimming Pool Demolition Services Across Johannesburg</h1>
        <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <Construction /> Your One-Stop Solution for Pool Removal
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Apex Demolitions offers a complete range of professional swimming pool demolition and removal services for every suburb of Johannesburg. Our licensed and insured teams are equipped to handle any job, from removing old residential pools to clearing multiple units for developers. We are your reliable partner for reclaiming valuable land, ensuring all work is done safely, efficiently, and with a thorough cleanup.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Free Assessment</a></Button>
          <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
        </div>
      </section>

      <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
          <div className="md:col-span-3">
              <h2 className="text-3xl font-bold mb-6">Johannesburg's Trusted Pool Demolition Team</h2>
              <p className="text-muted-foreground mb-4">Choosing Apex for your pool removal needs means partnering with a team that values safety, efficiency, and client satisfaction. We are committed to upholding the highest standards on every job.</p>
              <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your complete protection.</span></li>
                  <li className="flex items-center gap-3"><Check className="text-accent" /><span>Decades of experience in safe pool demolition across Johannesburg.</span></li>
                  <li className="flex items-center gap-3"><Check className="text-accent" /><span>Commitment to thorough site cleanup and legal rubble disposal.</span></li>
                   <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent, competitive pricing.</span></li>
              </ul>
          </div>
          <div className="md:col-span-2">
             {partnerImage && <Image src={partnerImage.imageUrl} alt="Team of pool demolition contractors in Johannesburg" data-ai-hint="construction team" width={600} height={500} className="rounded-lg shadow-lg" />}
          </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Pool Demolition Services in Johannesburg</h2>
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
            Our teams provide fast and professional pool removal services to every suburb of Johannesburg. Click on your area to learn more.
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
            <h2 className="text-3xl font-bold text-center mb-8">Our Johannesburg Pool Demolition Process</h2>
            <ol className="space-y-4 max-w-2xl mx-auto text-muted-foreground">
                <li className="flex gap-4"><strong className="text-accent">1. Consultation:</strong> We provide a free on-site assessment and a detailed, transparent quote.</li>
                <li className="flex gap-4"><strong className="text-accent">2. Draining & Prep:</strong> The pool is drained and all services are safely disconnected.</li>
                <li className="flex gap-4"><strong className="text-accent">3. Demolition:</strong> Our expert team performs a controlled demolition of the pool structure.</li>
                <li className="flex gap-4"><strong className="text-accent">4. Rubble Removal:</strong> All debris is loaded and removed from your property.</li>
                <li className="flex gap-4"><strong className="text-accent">5. Backfilling & Compaction:</strong> We fill the area and compact it properly to ensure stability.</li>
            </ol>
        </section>

        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </section>

      <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
        <h2 className="text-3xl font-bold">Get a Free Pool Removal Quote Anywhere in Johannesburg</h2>
        <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
          No matter where you are in Johannesburg, we're ready to help you reclaim your yard. Contact us for a fast, competitive, and professional quote.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
          <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
        </div>
      </section>
    </div>
  );
}
