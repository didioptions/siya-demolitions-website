import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Can you remove trees on small, tightly packed properties in Melville?", answer: "Yes, this is our area of expertise. We use specialized equipment and precision dismantling techniques to safely remove trees from small stands with minimal disruption to neighbors. We ensure the full protection of adjacent properties, which is critical in a dense suburb like Melville." },
    { question: "Do you need to consider heritage regulations for older trees in Melville?", answer: "Melville has many historic properties, and some large, old trees can have significance. We can help assess if your tree might be subject to any protections by the City of Johannesburg and advise on the correct procedure, ensuring all work is done compliantly." },
    { question: "How do you manage noise and disruption in a busy suburb like Melville?", answer: "We are committed to being considerate contractors. We adhere strictly to municipal work hours, use modern equipment to reduce noise where possible, and maintain a clean site to minimize our impact on the community." }
];

export default function TreeFellingMelvillePage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services Melville</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects provides specialized tree felling for the historic and vibrant suburb of Melville. We understand the unique challenges of working on older properties and small stands, offering careful, insured, and professional tree removal services.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Tree Felling Services in Melville</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Removing a tree from a small property in Melville" data-ai-hint="small yard tree felling" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Tree removal with respect for Melville's character.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Small Stand Tree Removal:** Expert felling in tight spaces, protecting your home and neighbors' properties.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Stump Grinding:** We remove stumps to help you maximize your garden space.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Full Cleanup Service:** We clear all wood and garden refuse associated with the job.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Melville?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Experts in Tight Spaces</h4><p className="text-muted-foreground mt-2 text-sm">We specialize in the challenges of dense, urban suburbs with limited access.</p></div>
                <div><h4 className="font-semibold text-lg">Heritage Aware</h4><p className="text-muted-foreground mt-2 text-sm">We work carefully around older properties and can advise on protected trees.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured</h4><p className="text-muted-foreground mt-2 text-sm">Our insurance protects your property for complete peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable & Fast</h4><p className="text-muted-foreground mt-2 text-sm">We offer competitive rates and a responsive service for jobs of all sizes.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Tree Felling in Melville</h2>
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
                <Button variant="outline" asChild><Link href="/tree-felling-northcliff">Northcliff</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-parkhurst">Parkhurst</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-greenside">Greenside</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="A clean yard in Melville after a tree removal" data-ai-hint="clean yard melville" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Melville Tree Removed Professionally</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact our expert team to discuss your Melville tree felling project. We provide detailed, no-obligation quotes.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Removal</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/tree-felling-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Tree Felling Johannesburg</Link> | <Link href="/tree-felling-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
