import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, MapPin, Quote, Waves } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    { question: "How much does it cost to demolish a swimming pool in Johannesburg?", answer: "The cost of swimming pool demolition in Johannesburg depends on several factors: the pool's size, the material (gunite, concrete, or fibreglass), ease of access for machinery, and whether you choose full or partial removal. We provide a free, detailed, on-site assessment to give you a transparent and accurate quote with no hidden costs." },
    { question: "Do I need municipal approval for pool demolition in Johannesburg?", answer: "In most cases, yes. The City of Johannesburg requires plans and approval for pool demolitions to ensure they are done safely and correctly, especially regarding compaction and drainage. As part of our service, we can guide you through and assist with this entire approval process to ensure your project is fully compliant." },
    { question: "How long does the pool demolition process take?", answer: "A standard residential pool demolition in Johannesburg typically takes between 2 to 4 days. This includes breaking up the structure, removing the debris, backfilling, and compacting the area. We provide a clear timeline with our quote so you know exactly what to expect." },
    { question: "Do you remove all the rubble after the demolition?", answer: "Yes, our service is a complete, all-in-one solution. We handle the demolition, load all the rubble and debris, and transport it to a licensed and environmentally responsible disposal facility. We leave your site clean, level, and ready for its next purpose." },
    { question: "Can the space be used for new construction after the pool is removed?", answer: "Absolutely. When we perform a full pool demolition and use engineered backfilling techniques with proper compaction, the land is stabilized and suitable for new construction, such as a home extension, a cottage, or a new entertainment area. We can advise on the best demolition method based on your future plans for the space." }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Swimming Pool Demolition",
    "provider": {
        "@type": "LocalBusiness",
        "name": "SIMA Demolitions Projects"
    },
    "areaServed": {
        "@type": "City",
        "name": "Johannesburg"
    },
    "description": "Professional swimming pool demolition, removal, and site preparation services in Johannesburg. We handle concrete, gunite, and fibreglass pools, including all rubble removal and backfilling.",
    "url": "https://siya-demolitions-website--siya-demolitions-projects.europe-west4.hosted.app/swimming-pool-demolition-johannesburg"
};

export default function SwimmingPoolDemolitionJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'poolDemoHero');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoWork');
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Professional Swimming Pool Demolition in Johannesburg</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <Waves /> Your Trusted Pool Removal Contractors
            </p>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Reclaim your backyard with expert swimming pool demolition in Johannesburg from SIMA Demolitions Projects. An old, damaged, or unused pool can be a liability and an eyesore. Our professional pool demolition contractors provide a safe, fast, and affordable solution for swimming pool removal across all Johannesburg suburbs. Whether you are in Sandton, Randburg, Roodepoort or Soweto, we handle everything from breaking and removal to backfilling and site preparation, transforming your garden and adding value to your property.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Swimming Pool Removal Services in Johannesburg</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card><CardHeader><CardTitle>Full Pool Demolition</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Complete removal of the pool shell (concrete, gunite, fibreglass) and all plumbing.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Partial Demolition & Fill-In</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">A cost-effective option where the shell is broken up and used for engineered backfill.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Complete Rubble Removal</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We load and transport all demolition debris to licensed disposal facilities.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Site Preparation</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We compact and level the area, leaving it ready for lawn, paving, or new construction.</p></CardContent></Card>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us for Pool Demolition in Johannesburg?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Experienced & Insured</h3><p className="text-sm text-muted-foreground">Our teams are experts in all types of pool removal, and our work is fully insured.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">All-Inclusive Service</h3><p className="text-sm text-muted-foreground">We handle everything from the initial breaking to final cleanup and rubble disposal.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Property Protection</h3><p className="text-sm text-muted-foreground">We use techniques and equipment that protect your home, garden, and paving during the project.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Fast Turnaround</h3><p className="text-sm text-muted-foreground">Most residential pool demolition projects in Johannesburg are completed in just 2-4 days.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Transparent Pricing</h3><p className="text-sm text-muted-foreground">Our free, on-site quotes are detailed and have no hidden costs.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Johannesburg-Wide Coverage</h3><p className="text-sm text-muted-foreground">We serve all suburbs, from the northern estates to the south of Johannesburg.</p></div></div>
            </div>
        </section>
        
        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Johannesburg Pool Demolition Process</h2>
                    <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Inspection & Quote:</span> We assess your pool, access, and provide a detailed quote.</li>
                        <li><span className="font-semibold text-foreground">Draining & Disconnection:</span> We safely drain the pool and disconnect all electrical and plumbing lines.</li>
                        <li><span className="font-semibold text-foreground">Controlled Demolition:</span> Using specialized equipment, we break up the pool shell and paving.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal:</span> All debris is loaded and transported off your property.</li>
                        <li><span className="font-semibold text-foreground">Backfilling & Compaction:</span> We fill the cavity with soil/aggregate and compact it in layers to prevent future sinking.</li>
                        <li><span className="font-semibold text-foreground">Final Site Cleanup:</span> The area is graded and left neat, tidy, and ready for its new purpose.</li>
                    </ol>
                </div>
                 <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A clean, green lawn where a swimming pool used to be in Johannesburg" data-ai-hint="green lawn backyard" fill className="rounded-lg object-cover" /></div>}
                </div>
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
    </>
  );
}
