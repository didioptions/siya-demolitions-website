import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, MapPin, Quote, Waves } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const suburbs = [
    { name: "Sandton", href: "/swimming-pool-demolition-sandton" }, { name: "Randburg", href: "/swimming-pool-demolition-randburg" },
    { name: "Roodepoort", href: "/swimming-pool-demolition-roodepoort" }, { name: "Midrand", href: "/swimming-pool-demolition-midrand" },
    { name: "Fourways", href: "/swimming-pool-demolition-fourways" }, { name: "Soweto", href: "/swimming-pool-demolition-soweto" },
    { name: "Alberton", href: "/swimming-pool-demolition-alberton" }, { name: "Germiston", href: "/swimming-pool-demolition-germiston" },
    { name: "Boksburg", href: "/swimming-pool-demolition-boksburg" }, { name: "Benoni", href: "/swimming-pool-demolition-benoni" },
    { name: "Kempton Park", href: "/swimming-pool-demolition-kempton-park" }, { name: "Bedfordview", href: "/swimming-pool-demolition-bedfordview" },
    { name: "Edenvale", href: "/swimming-pool-demolition-edenvale" }, { name: "Bryanston", href: "/swimming-pool-demolition-bryanston" },
    { name: "Rosebank", href: "/swimming-pool-demolition-rosebank" }, { name: "Northcliff", href: "/swimming-pool-demolition-northcliff" },
    { name: "Melville", href: "/swimming-pool-demolition-melville" }, { name: "Linden", href: "/swimming-pool-demolition-linden" },
    { name: "Parkhurst", href: "/swimming-pool-demolition-parkhurst" }, { name: "Greenside", href: "/swimming-pool-demolition-greenside" },
];

const faqs = [
    { question: "How much does it cost to demolish a swimming pool in Johannesburg?", answer: "The cost varies depending on the pool's size, material (concrete, fibreglass), and site access. We provide a free, detailed quote for every project." },
    { question: "How long does pool demolition take?", answer: "A standard residential pool demolition in Johannesburg typically takes 1-3 days, including rubble removal and backfilling." },
    { question: "Do you remove all the rubble?", answer: "Yes, our service is all-inclusive. We break up the pool, remove all debris, and transport it to a licensed disposal facility." },
    { question: "Can you fill in the pool instead of removing it completely?", answer: "Yes, we offer both full removal and partial demolition with engineered backfilling. We can advise on the best option for your property and future plans." },
    { question: "Is your team insured for this type of work?", answer: "Absolutely. We are fully insured for all demolition work, protecting your property against any unforeseen circumstances." }
];

export default function SwimmingPoolDemolitionJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'poolDemoHero');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoWork');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Services in Johannesburg</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Reclaim your yard with professional swimming pool demolition services in Johannesburg from SIMA Demolitions Projects. We are the leading pool removal contractors Johannesburg residents trust for safe, efficient, and affordable solutions.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Free Quote</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Site Visit</Link>
                </Button>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Pool Removal Services Johannesburg</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Swimming pool demolition in Johannesburg" data-ai-hint="pool demolition" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Waves className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Full Pool Demolition:** Complete removal of concrete, gunite, or fibreglass pools.</span></li>
                        <li className="flex items-start gap-3"><Waves className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Partial Demolition & Backfilling:** A cost-effective option where the pool is broken up and used as fill.</span></li>
                        <li className="flex items-start gap-3"><Waves className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Rubble Removal:** All demolition debris is cleared from your site.</span></li>
                        <li className="flex items-start gap-3"><Waves className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Site Preparation:** We leave the area compacted, level, and ready for lawn, paving, or a new structure.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us for Pool Demolition in Johannesburg?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Experienced & Insured</h3><p className="text-sm text-muted-foreground">Our teams are experts in pool removal, and we're fully insured.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">All-Inclusive Service</h3><p className="text-sm text-muted-foreground">We handle everything from breaking to cleanup and disposal.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Property Protection</h3><p className="text-sm text-muted-foreground">We use techniques that protect your home, garden, and paving.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Fast Turnaround</h3><p className="text-sm text-muted-foreground">Most residential projects are completed in 1-3 days.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Transparent Pricing</h3><p className="text-sm text-muted-foreground">Our free quotes are detailed and have no hidden costs.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Johannesburg-Wide Coverage</h3><p className="text-sm text-muted-foreground">We serve all suburbs, from Sandton to Soweto.</p></div></div>
            </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Pool Demolition Services Across Johannesburg Suburbs</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                We offer localized pool removal services across Johannesburg. Click on your suburb to learn more, or visit our <Link href="/swimming-pool-demolition-services-johannesburg" className="text-primary hover:underline">main services hub</Link>.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                {suburbs.map(suburb => (
                    <Button key={suburb.name} variant="outline" asChild>
                        <Link href={suburb.href}><MapPin className="mr-2" /> {suburb.name}</Link>
                    </Button>
                ))}
            </div>
      </section>

        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">FAQ – Swimming Pool Demolition Johannesburg</h2>
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
          <h2 className="text-3xl font-bold">Get a Free Pool Demolition Quote in Johannesburg</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Ready to reclaim your backyard? Contact SIMA Demolitions for a professional, no-obligation quote on your pool removal project.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                  <a href="tel:0784292760"><Phone />Call for a Fast Quote</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link href="/contact"><Mail />Request a Free Quote</Link>
              </Button>
          </div>
        </section>
    </div>
  );
}
