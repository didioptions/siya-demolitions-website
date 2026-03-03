import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Building, Trash2, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Are your demolition services available throughout Sandton?", answer: "Yes, we serve all neighborhoods in Sandton, from Morningside to Rivonia. We provide fast, local service across the area." },
    { question: "What kind of projects do you handle in Sandton?", answer: "We handle everything from luxury home demolition and pool removals to site clearing for new commercial developments near Sandton City." },
    { question: "How do you manage dust and noise during demolition?", answer: "We use dust suppression techniques like water spraying and adhere to municipal work hours to minimize disruption to your Sandton neighbors." },
    { question: "Do I need a permit for demolition in Sandton?", answer: "Yes, a permit from the City of Johannesburg is required. We manage the entire permit process for you as part of our service." }
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

export default function DemolitionSandtonPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Services in Sandton</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Your Local, Licensed Sandton Demolition Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions provides expert demolition services across Sandton. As your local contractors, we specialize in safe house demolition, pool removal, and complete site clearing for homeowners and developers. We know Sandton's regulations and are committed to delivering compliant, hassle-free projects.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Specialized Demolition for Sandton Properties</h2>
            <div className="grid md:grid-cols-3 gap-6">
                <Card><CardHeader><CardTitle>Luxury Home Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Safe removal of large homes to make way for new builds or subdivisions in Sandton's exclusive suburbs.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Pool Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Reclaim your yard space by removing old or unused swimming pools. We manage the breaking, removal, and backfilling.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Site Clearing & Rubble Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Complete site preparation, including removing all demolition debris and waste, leaving your Sandton property ready for construction.</p></CardContent></Card>
            </div>
        </section>

        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center">
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Your Trusted Demolition Partner in Sandton</h2>
                <p className="text-muted-foreground mb-4">Choosing SIMA Demolitions means partnering with a team that values safety, integrity, and customer satisfaction. We are committed to upholding the highest standards on every job, from small residential tasks to large commercial clearings. Our local knowledge of Sandton ensures your project runs smoothly and complies with all regulations.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Deep knowledge of City of Johannesburg requirements.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
                </ul>
            </div>
            <div className="md:col-span-2">
               {heroImage && <Image src={heroImage.imageUrl} alt={heroImage.description} data-ai-hint={heroImage.imageHint} width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Sandton Demolition FAQs</h2>
            <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
        
        <section className="mb-16 text-center">
            <h2 className="text-2xl font-semibold">Our Service Network</h2>
             <p className="mt-2 text-muted-foreground">We also provide expert demolition services in nearby areas.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Johannesburg Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-randburg">Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-roodepoort">Roodepoort</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-bryanston">Bryanston</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Sandton</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us today to discuss your project. Our Sandton team is ready to provide a fast, competitive, and no-obligation quote.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
