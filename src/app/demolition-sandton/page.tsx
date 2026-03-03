import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Are your demolition services available throughout Sandton?", answer: "Yes, we provide elite demolition services across all of Sandton's suburbs, from Morningside and Rivonia to Bryanston and the Sandhurst surrounds. We offer a discreet and professional service." },
    { question: "How do you handle demolitions in Sandton's exclusive, secure estates?", answer: "We are experts in working within high-security estates. We liaise directly with estate management to ensure full compliance with all rules regarding work hours, noise levels, and vehicle access, ensuring a smooth process." },
    { question: "Is your company insured for high-value properties?", answer: "Absolutely. We carry comprehensive public liability insurance designed for high-value residential properties to provide our clients with complete peace of mind during the demolition process." },
    { question: "What is your process for demolishing a luxury home?", answer: "Our process is meticulous. It involves careful site planning, protection of valuable landscaping, precision dismantling of the structure, and thorough site clearing, leaving the property pristine and ready for your new vision." }
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
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoHero');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Services in Sandton</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Sandton's Premier Luxury Home Demolition Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions provides a premium, specialized demolition service for Sandton's most exclusive properties. As the leading contractors in Johannesburg's wealthiest suburb, we understand the precision, discretion, and high standards required. We specialize in luxury home demolition, complex swimming pool removals, and immaculate site clearing for discerning homeowners, architects, and developers in areas like Morningside, Rivonia, and Sandhurst. Our expertise in managing City of Johannesburg permits and strict estate protocols is unparalleled.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Private Consultation</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Elite Demolition Services for Sandton</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card><CardHeader><CardTitle>Luxury Home Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Surgical dismantling of large and complex homes, with careful preservation of valuable trees and surrounding properties in Sandton's exclusive suburbs.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Architectural Pool Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Precision removal of swimming pools, tennis courts, and water features with minimal impact on established, high-value gardens.</p></CardContent></Card>
                    <Card className="sm:col-span-2"><CardHeader><CardTitle>Immaculate Site Clearing</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We leave your Sandton property pristine, perfectly prepared, and ready for your architect and construction team to begin work.</p></CardContent></Card>
                </div>
                <div className="lg:col-span-2">
                    {servicesImage && <Image src={servicesImage.imageUrl} alt="An elegant Sandton backyard after a pool has been removed" data-ai-hint="luxury garden" width={600} height={500} className="rounded-lg shadow-lg" />}
                </div>
            </div>
        </section>

        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Demolition experts reviewing blueprints for a luxury home project in Sandton" data-ai-hint="construction planning" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Your Trusted Demolition Partner in Sandton</h2>
                <p className="text-muted-foreground mb-4">Choosing SIMA Demolitions means partnering with a team that values safety, integrity, and customer satisfaction. We are committed to upholding the highest standards on every job, from small residential tasks to large commercial clearings. Our local knowledge of Sandton ensures your project runs smoothly and complies with all regulations.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Deep knowledge of City of Johannesburg requirements.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
                </ul>
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
            <h2 className="text-2xl font-semibold">Our Northern Suburbs Service Network</h2>
             <p className="mt-2 text-muted-foreground">We also provide expert demolition services in nearby areas.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Johannesburg Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-randburg">Demolition in Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-rosebank">Rosebank Services</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-bryanston">Bryanston Demolition</Link></Button>
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
