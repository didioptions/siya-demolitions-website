import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Can you handle demolitions on small, tightly packed properties in Melville?", answer: "Yes, this is our specialty. We use compact machinery and precision dismantling techniques to safely demolish structures on small stands with minimal disruption to neighbors. We ensure the protection of adjacent properties, a key concern in dense areas like Melville." },
    { question: "Do we need to consider heritage regulations for older homes in Melville?", answer: "Potentially, yes. Melville has many older homes with historical character. We can help assess if your property might be subject to heritage considerations by the City of Johannesburg. If so, we can work with heritage consultants to ensure any demolition is done compliantly and sensitively." },
    { question: "How do you manage noise and dust in a busy suburb like Melville?", answer: "We are committed to being good neighbors. We strictly adhere to municipal work hours, use modern dust suppression techniques like water misting, and maintain a clean, organized site to minimize our impact on the surrounding community." }
];

export default function DemolitionMelvillePage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Contractors Melville</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Sensitive Demolition for Melville's Unique Character
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions provides specialized demolition services for the historic and vibrant suburb of Melville, Johannesburg. We understand the unique challenges of working with older properties on smaller stands. Our licensed teams offer careful residential and commercial demolition, ensuring projects are completed safely, with respect for the area's heritage and minimal disruption to the community.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Professional Demolition Services in Melville</h2>
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
                <Card><CardHeader><CardTitle>Residential Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Careful dismantling of older homes, extensions, and outbuildings, making way for modern renovations while preserving the suburb's charm.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Commercial Strip-Outs</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Interior demolition for restaurants, shops, and businesses on 7th Street and beyond, preparing spaces for new tenants.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Pool & Garden Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Removal of old pools, paving, and garden structures to help you reimagine your outdoor space.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Rubble Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Full site cleanup to remove all demolition debris, leaving your Melville property tidy and compliant.</p></CardContent></Card>
            </div>
        </section>
        
        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Demolition Contractors?</h2>
                <p className="text-muted-foreground mb-4">Our experience in dense, historic suburbs makes us the right choice for your Melville project.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Expertise in handling demolitions on small or tight-access properties.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Awareness of potential heritage considerations.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Commitment to minimizing disruption in busy residential areas.</span></li>
                </ul>
            </div>
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Demolition contractors planning a project in Melville" data-ai-hint="construction planning" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Nearby Areas</h2>
             <p className="mt-2 text-muted-foreground text-center max-w-2xl mx-auto">We are active throughout the surrounding suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-northcliff">Northcliff</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-parkhurst">Parkhurst</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-greenside">Greenside</Link></Button>
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Demolition in Melville</h2>
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
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Melville</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact our expert team to discuss your Melville demolition project. We provide detailed, no-obligation quotes.</p>
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
