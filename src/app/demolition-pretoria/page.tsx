import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Do you handle demolition permits with the City of Tshwane?", answer: "Yes, we do. Navigating municipal permits is a key part of our service. We manage the entire application process with the City of Tshwane on your behalf, ensuring your Pretoria demolition project is fully compliant with all local by-laws before any work begins." },
    { question: "Can you perform demolitions in Pretoria's busy commercial areas like Hatfield or Menlyn?", answer: "Absolutely. We are experienced in managing projects in high-traffic commercial zones. We implement comprehensive safety and traffic management plans, and often schedule work during off-peak hours to minimize disruption to surrounding businesses and the public." },
    { question: "What is your experience with demolishing older buildings in Pretoria?", answer: "We have extensive experience with older structures common in areas like Sunnyside and Arcadia. We conduct thorough structural assessments and can work with heritage consultants if required, using careful techniques to dismantle buildings safely while protecting adjacent properties." },
    { question: "Do you offer rubble removal as part of your Pretoria demolition service?", answer: "Yes, our service is all-inclusive. Every demolition project in Pretoria includes a complete site cleanup and rubble removal. We ensure all waste is transported to licensed City of Tshwane disposal and recycling facilities, leaving your property clean and ready for its next phase." }
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

export default function DemolitionPretoriaPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'commercialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteClearing');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Services in Pretoria</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Pretoria's Leading Residential & Commercial Demolition Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Apex Demolitions is a premier demolition contractor serving the entire Pretoria region, from the bustling CBD to the suburbs of Waterkloof and Garsfontein. We provide comprehensive, licensed, and insured demolition services for residential, commercial, and industrial projects. As experts in the City of Tshwane's regulations, we deliver safe, efficient, and fully compliant site clearing solutions, paving the way for Pretoria's future developments.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Pretoria Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Specialized Demolition for Pretoria</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card><CardHeader><CardTitle>Commercial Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Expert demolition of office buildings, retail centers, and commercial properties throughout Pretoria's business districts.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Residential Home Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Safe and efficient removal of houses in suburbs like Lynnwood and Moreleta Park to make way for new homes or developments.</p></CardContent></Card>
                    <Card className="sm:col-span-2"><CardHeader><CardTitle>Full Site Clearing & Rubble Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We manage the entire cleanup process, ensuring your Pretoria property is left immaculate and ready for construction.</p></CardContent></Card>
                </div>
                 <div className="lg:col-span-2">
                    {servicesImage && <Image src={servicesImage.imageUrl} alt="An excavator clearing a demolition site in Pretoria" data-ai-hint="site clearing pretoria" width={600} height={500} className="rounded-lg shadow-lg" />}
                </div>
            </div>
        </section>

        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Our team of contractors planning a Pretoria demolition project" data-ai-hint="construction planning pretoria" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Your Trusted Demolition Partner in Pretoria</h2>
                <p className="text-muted-foreground mb-4">Choosing Apex Demolitions means partnering with a team that values safety, integrity, and client satisfaction. We are committed to upholding the highest standards on every job. Our intimate knowledge of Pretoria and City of Tshwane regulations ensures your project runs smoothly, safely, and is fully compliant, giving you complete peace of mind.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Deep knowledge of City of Tshwane requirements.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
                </ul>
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Pretoria Demolition FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Our Gauteng Service Network</h2>
             <p className="mt-2 text-muted-foreground">We also provide expert demolition services in nearby cities.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Johannesburg Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-centurion">Demolition in Centurion</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-midrand">Midrand Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-kempton-park">Kempton Park Projects</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Pretoria</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us today to discuss your project. Our Pretoria team is ready to provide a fast, competitive, and no-obligation quote.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
