import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Do you have experience working in Bryanston's secure estates?", answer: "Yes, a significant portion of our work is within Bryanston's secure lifestyle and golf estates. We are highly experienced in adhering to strict HOA rules for access, noise, and site tidiness." },
    { question: "How do you protect landscaping and adjacent structures during demolition?", answer: "We use precision techniques and protective barriers to safeguard valuable trees, established gardens, and neighboring properties. Our planning phase includes a full risk assessment to protect your assets." },
    { question: "Is your team insured for work on high-value Bryanston properties?", answer: "Absolutely. We carry comprehensive insurance coverage specifically for high-value residential projects, giving you complete confidence and peace of mind." },
    { question: "What is the process for obtaining demolition permits in Bryanston?", answer: "As part of our full-service offering, we manage the entire permit application process with the City of Johannesburg. We handle all paperwork and inspections to ensure your project is fully compliant." }
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

export default function DemolitionBryanstonPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoHero');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Services in Bryanston</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Bryanston's Premier Luxury Demolition Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions is the contractor of choice for high-end demolition projects throughout Bryanston. Our service is defined by precision, discretion, and an intimate understanding of the standards expected in Johannesburg's northern suburbs. We specialize in the careful dismantling of luxury homes, complex pool removals, and immaculate site clearing for discerning homeowners, architects, and developers, especially for properties near landmarks like the Bryanston Country Club. We manage every detail, from City of Johannesburg permits to estate approvals, ensuring a seamless and superior result.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Elite Demolition Services for Bryanston</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2">
                    {servicesImage && <Image src={servicesImage.imageUrl} alt="Careful demolition of a swimming pool in a Bryanston garden" data-ai-hint="pool demolition garden" width={600} height={500} className="rounded-lg shadow-lg" />}
                </div>
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card><CardHeader><CardTitle>Luxury Home Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Surgical dismantling of large homes, preserving mature trees and adjacent structures for high-end rebuilds.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Architectural & Pool Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Precision removal of swimming pools, tennis courts, and outbuildings with minimal impact on the surrounding landscape.</p></CardContent></Card>
                    <Card className="sm:col-span-2"><CardHeader><CardTitle>Immaculate Site Clearing</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We leave your Bryanston property pristine, perfectly prepared, and ready for your architect and construction team.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Your Trusted Demolition Partner in Bryanston</h2>
                <p className="text-muted-foreground mb-4">Choosing SIMA Demolitions means partnering with a team that values safety, integrity, and customer satisfaction. We are committed to upholding the highest standards on every job, from small residential tasks to large commercial clearings. Our local knowledge of Bryanston ensures your project runs smoothly and complies with all regulations.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Deep knowledge of City of Johannesburg requirements.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
                </ul>
            </div>
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Demolition experts discussing a high-end project in Bryanston" data-ai-hint="construction planning" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Bryanston Demolition FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Our Northern Suburbs Service Network</h2>
             <p className="mt-2 text-muted-foreground">We also provide expert demolition services in nearby areas.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Johannesburg Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-sandton">Sandton Demolition Services</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-randburg">Explore Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-fourways">Fourways Demolition</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Bryanston</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us today to discuss your project. Our Bryanston team is ready to provide a fast, competitive, and no-obligation quote.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
