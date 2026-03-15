import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "My property in Linden is old. Are there special considerations?", answer: "Many Linden homes have a classic charm. We take great care during demolition to protect adjacent structures and mature trees. If your property is particularly old, we can advise on whether any heritage considerations with the City of Johannesburg might apply before we begin." },
    { question: "How do you manage demolition on a busy street in Linden?", answer: "Safety and minimal disruption are key. We use clear signage, secure the site perimeter, and manage logistics to avoid blocking traffic where possible. Our team works efficiently and adheres to all municipal by-laws regarding work hours and noise to respect the neighborhood." },
    { question: "Do you also remove the foundation of the old house?", answer: "Yes, we offer foundation removal as part of our comprehensive site clearing service. After the main structure is demolished, we can break up and remove the concrete foundation and footings, leaving your Linden plot completely level and ready for new construction." }
];

export default function DemolitionLindenPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Contractors Linden</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Safe & Reliable Demolition in Linden
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions provides expert demolition services for the leafy suburb of Linden, Johannesburg. As local contractors, we specialize in residential demolition, helping homeowners clear old properties to make way for modern renovations and new builds. We operate with respect for Linden's community feel, ensuring every project is safe, clean, and fully compliant with City of Johannesburg regulations.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Professional Demolition Services in Linden</h2>
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
                <Card><CardHeader><CardTitle>House Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Complete and safe removal of houses on large stands, preparing your property for a new dream home or subdivision.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Partial Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Surgical removal of walls, extensions, or outbuildings for large-scale renovation projects.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Pool Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Efficiently remove old swimming pools to create more garden space or prepare for an extension.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Site Clearing & Rubble Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We ensure your Linden property is left immaculate, with all demolition debris legally and responsibly removed.</p></CardContent></Card>
            </div>
        </section>
        
        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Demolition Contractors?</h2>
                <p className="text-muted-foreground mb-4">Our respect for established suburbs and our commitment to safety make us the ideal partner for your Linden project.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Expertise in residential demolitions and renovations.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Careful planning to protect mature trees and gardens.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for complete peace of mind.</span></li>
                </ul>
            </div>
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Demolition contractors planning a project in Linden" data-ai-hint="construction planning" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Nearby Areas</h2>
             <p className="mt-2 text-muted-foreground text-center max-w-2xl mx-auto">Our services cover all adjacent suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-randburg">Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-greenside">Greenside</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-parkhurst">Parkhurst</Link></Button>
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Demolition in Linden</h2>
            <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Linden</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Planning a project in Linden? Contact us for a detailed, no-obligation quote from a trusted local contractor.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
        
        <div className="mt-12 text-center">
            <Link href="/demolition-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Demolition Johannesburg</Link> | <Link href="/demolition-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
      </div>
  );
}
