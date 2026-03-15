import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Can you handle large-scale tree clearing for industrial sites in Germiston?", answer: "Yes, this is one of our key services in Germiston. We are fully equipped to handle large-scale vegetation and tree clearing to prepare industrial sites for expansion, new construction, or improved access. We have the heavy machinery and experienced crews to get the job done efficiently." },
    { question: "Are your tree felling services insured for commercial and industrial work?", answer: "Absolutely. We carry comprehensive public liability insurance that covers our work on all types of properties, including high-risk industrial and commercial sites. This protects your business and ours, ensuring all work is done with complete financial security." },
    { question: "What is your process for removing trees near commercial buildings or power lines?", answer: "Safety is paramount. For trees in high-risk areas, we use advanced rigging techniques and sectional dismantling. This involves carefully cutting and lowering sections of the tree to the ground, ensuring no damage to nearby structures, power lines, or other assets. We also coordinate with relevant authorities if needed." }
];

export default function TreeFellingGermistonPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services Germiston</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                In the industrial heart of the East Rand, SIMA Demolitions Projects provides expert tree felling and site clearing services for Germiston's commercial, industrial, and residential properties. Our licensed and insured teams are equipped to handle any challenge, safely and efficiently.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Site Assessment</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Free Quote</Link>
                </Button>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Tree Felling Services in Germiston</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Industrial site clearing and tree felling in Germiston" data-ai-hint="site clearing germiston" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Specialized solutions for Germiston's landscape.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Industrial & Commercial Site Clearing:** Large-scale removal of trees and vegetation for factory yards and new developments.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Hazardous Tree Removal:** Safe felling of trees near power lines, buildings, and public spaces.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Tree Felling:** Professional and affordable tree removal for homeowners in Germiston's suburbs.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Germiston?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Industrial Expertise</h4><p className="text-muted-foreground mt-2 text-sm">We have the right equipment and safety protocols for industrial environments.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured</h4><p className="text-muted-foreground mt-2 text-sm">Our comprehensive insurance covers all commercial and industrial projects.</p></div>
                <div><h4 className="font-semibold text-lg">Local East Rand Crew</h4><p className="text-muted-foreground mt-2 text-sm">We are based locally, ensuring a fast and efficient service for Germiston.</p></div>
                <div><h4 className="font-semibold text-lg">Compliance Focused</h4><p className="text-muted-foreground mt-2 text-sm">We adhere to all municipal and environmental regulations for your peace of mind.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Tree Felling in Germiston</h2>
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
            <p className="mt-2 text-muted-foreground">Serving the entire East Rand industrial basin.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/tree-felling-alberton">Alberton</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-boksburg">Boksburg</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-kempton-park">Kempton Park</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="A cleared industrial site in Germiston" data-ai-hint="clean site germiston" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Germiston Site Cleared Safely</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact SIMA Demolitions for a professional assessment and quote for your industrial, commercial or residential tree felling needs in Germiston.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get a Project Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Speak to a Specialist</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/tree-felling-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Tree Felling Johannesburg</Link> | <Link href="/tree-felling-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
