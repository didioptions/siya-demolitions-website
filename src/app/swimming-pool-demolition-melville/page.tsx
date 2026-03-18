import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Can you remove a pool on a small property in Melville?", answer: "Yes, this is our specialty. We use compact equipment and careful techniques to safely demolish and remove pools from small stands with minimal disruption to neighbors. Protecting adjacent properties is critical in a dense suburb like Melville." },
    { question: "Do you need to consider heritage regulations for older pools in Melville?", answer: "It's possible. Melville has many historic homes, and we can advise if your property might require a consultation with heritage authorities before removal. We ensure all our work is compliant with City of Johannesburg regulations." },
    { question: "How do you manage noise and disruption in a busy suburb like Melville?", answer: "We are committed to being good neighbors. We adhere strictly to municipal work hours, use modern equipment to reduce noise, and maintain a clean site to minimize our impact on the community." }
];

export default function SwimmingPoolDemolitionMelvillePage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoWork');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Services Melville</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions offers specialized pool demolition for the unique properties of Melville. We understand the challenges of working on small stands and with older homes, providing a careful, insured, and professional service.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Quote</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Free Quote</Link>
                </Button>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Pool Removal Services in Melville</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Demolishing a pool in a small Melville yard" data-ai-hint="pool demolition melville" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Pool removal with respect for Melville's character.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Small Stand Pool Removal:** Expert demolition in tight spaces, protecting your home and your neighbors.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Full Demolition & Backfill:** We remove the pool and prepare your garden for a new lawn, patio, or studio.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**All Rubble Removed:** We handle the complete cleanup and legal disposal of all waste.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Melville?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Experts in Tight Spaces</h4><p className="text-muted-foreground mt-2 text-sm">We specialize in the logistics of dense, urban suburbs with limited access.</p></div>
                <div><h4 className="font-semibold text-lg">Heritage Aware</h4><p className="text-muted-foreground mt-2 text-sm">We work carefully around older properties and can advise on heritage compliance.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Insured</h4><p className="text-muted-foreground mt-2 text-sm">Our insurance protects your property for complete peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable & Fast</h4><p className="text-muted-foreground mt-2 text-sm">We offer competitive rates and a responsive service for jobs of all sizes.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Pool Demolition in Melville</h2>
            <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </section>

        <section className="mb-16 text-center">
            <h2 className="text-2xl font-semibold">Nearby Areas We Serve</h2>
            <p className="mt-2 text-muted-foreground">Active throughout the surrounding suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-northcliff">Northcliff</Link></Button>
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-parkhurst">Parkhurst</Link></Button>
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-greenside">Greenside</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="A clean garden in Melville after a pool removal" data-ai-hint="clean garden melville" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Reclaim Your Melville Garden</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact our expert team to discuss your Melville pool demolition project. We provide detailed, no-obligation quotes.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Removal</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/swimming-pool-demolition-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Pool Demolition Johannesburg</Link> | <Link href="/swimming-pool-demolition-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
