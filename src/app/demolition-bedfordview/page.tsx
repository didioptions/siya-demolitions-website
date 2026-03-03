import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Are your demolition services insured for high-value properties in Bedfordview?", answer: "Yes, we carry comprehensive insurance suitable for high-value residential and commercial properties in Bedfordview to ensure your complete peace of mind." },
    { question: "How do you handle site access and logistics in exclusive areas like Senderwood?", answer: "Our team plans logistics meticulously, using appropriately sized vehicles and coordinating with estate management to ensure minimal disruption and a smooth process." },
    { question: "Can you demolish structures close to neighboring properties?", answer: "Yes, this is our specialty. We use precision demolition techniques and protective measures to ensure the safety of all adjacent structures, gardens, and properties." },
    { question: "What is your process for a partial demolition for a large-scale renovation?", answer: "We work closely with your architects and builders to precisely dismantle the specified sections while ensuring the structural integrity of the remaining building. This includes careful separation of services and support structures." }
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

export default function DemolitionBedfordviewPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoHero');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Services in Bedfordview</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Your Specialist for High-End Demolition in Bedfordview
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions offers a bespoke demolition service tailored for Bedfordview's exclusive properties. We understand the precision and care required for projects in areas like Senderwood and Bedford Park. As your local contractors, we specialize in luxury house demolition, pool removal, and meticulous site clearing for discerning homeowners and developers. Our expertise in navigating the City of Ekurhuleni's regulations, combined with a commitment to discretion and excellence, makes us the trusted choice for any Bedfordview demolition project.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Private Consultation</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Specialized Demolition for Bedfordview Properties</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card><CardHeader><CardTitle>Luxury Home Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Precision dismantling of large residences in upscale areas like Bedford Park, making way for new architectural visions.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Pool & Landscape Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Careful removal of pools, paving, and established gardens to reclaim or redesign your outdoor space.</p></CardContent></Card>
                    <Card className="sm:col-span-2"><CardHeader><CardTitle>Meticulous Site Clearing</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Complete site preparation, leaving your Bedfordview property immaculate and ready for the finest construction.</p></CardContent></Card>
                </div>
                <div className="lg:col-span-2">
                    {servicesImage && <Image src={servicesImage.imageUrl} alt="A clean backyard in Bedfordview after a swimming pool was removed" data-ai-hint="pool removal" width={600} height={500} className="rounded-lg shadow-lg" />}
                </div>
            </div>
        </section>

        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Demolition contractors reviewing blueprints for a Bedfordview project" data-ai-hint="construction planning" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Your Discerning Demolition Partner in Bedfordview</h2>
                <p className="text-muted-foreground mb-4">Choosing SIMA Demolitions means partnering with a team that values safety, integrity, and customer satisfaction. We are committed to upholding the highest standards on every job, from small residential tasks to large commercial clearings. Our local knowledge of Bedfordview ensures your project runs smoothly and complies with all regulations.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for high-value property protection.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Expertise in City of Ekurhuleni's planning and permit requirements.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent, detailed pricing.</span></li>
                </ul>
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Bedfordview Demolition FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Our Premier Service Network</h2>
             <p className="mt-2 text-muted-foreground">We also provide expert demolition services in nearby areas.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Johannesburg Demolition Services</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-edenvale">Edenvale Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-sandton">Sandton Demolition Experts</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-kempton-park">Kempton Park Projects</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Bedfordview</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us today to discuss your project. Our Bedfordview team is ready to provide a fast, competitive, and no-obligation quote.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
