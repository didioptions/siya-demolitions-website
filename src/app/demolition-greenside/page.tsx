import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How do you protect the large, established trees during demolition in Greenside?", answer: "We recognize that the beautiful, mature trees are a key feature of Greenside. Before any work begins, we collaborate with you to mark and protect any trees that need to be preserved. We use protective barriers and employ careful, controlled demolition techniques to ensure no damage occurs to root systems or branches." },
    { question: "My property is adjacent to the golf course. Do you take special precautions?", answer: "Absolutely. For properties bordering the Parkview Golf Club, we implement enhanced safety and containment measures. This includes using higher debris nets and careful monitoring to ensure no material or dust drifts onto the course, respecting the club and its members." },
    { question: "Can you handle the demolition of old, reinforced concrete structures?", answer: "Yes. Many older homes in Greenside feature robust, reinforced concrete. Our teams are equipped with heavy-duty breakers and cutting tools specifically for this purpose. We have the expertise to dismantle these strong structures safely and efficiently." }
];

export default function DemolitionGreensidePage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Contractors Greenside</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Expert Demolition for Greenside's Leafy Suburbs
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions offers professional, licensed demolition services for the prestigious suburb of Greenside, Johannesburg. We specialize in residential projects on large stands, working with care to preserve the area's lush, established character. Whether you're clearing an old property for a modern masterpiece or renovating a classic home, our team ensures a safe, clean, and compliant demolition process.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Professional Demolition Services in Greenside</h2>
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
                <Card><CardHeader><CardTitle>Full House Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Safe and complete removal of existing homes on large plots, making way for new architectural designs.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Partial Demolition for Renovations</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Selective removal of walls, wings, and outbuildings for high-end renovation and extension projects.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Swimming Pool Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Reclaim vast amounts of garden space by removing outdated or unused swimming pools.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Site & Rubble Clearing</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Complete cleanup and removal of all demolition debris, leaving your Greenside property pristine.</p></CardContent></Card>
            </div>
        </section>
        
        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Demolition Contractors?</h2>
                <p className="text-muted-foreground mb-4">Our approach is perfect for the unique environment of Greenside.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Commitment to preserving mature trees and landscaping.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Experience working alongside high-end architects and builders.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Licensed, insured, and focused on safety and compliance.</span></li>
                </ul>
            </div>
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Demolition contractors planning a project in Greenside" data-ai-hint="construction planning" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Nearby Areas</h2>
             <p className="mt-2 text-muted-foreground text-center max-w-2xl mx-auto">Our demolition services are available across all neighboring suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-parkhurst">Parkhurst</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-linden">Linden</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-rosebank">Rosebank</Link></Button>
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Demolition in Greenside</h2>
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
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Greenside</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Planning a project in Greenside? Contact us for a detailed, no-obligation quote from the local demolition specialists.</p>
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
