import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Can you handle tree felling near O.R. Tambo International Airport?", answer: "Yes, we are experienced in working in the logistical and commercial zones around the airport. We adhere to all special regulations, height restrictions, and security requirements for the area, ensuring a compliant and safe tree removal process." },
    { question: "Do you provide large-scale vegetation clearing for industrial sites in Kempton Park?", answer: "Absolutely. Our services are ideal for preparing land for new logistics parks, warehouses, and factories. We can clear large tracts of land of all trees and vegetation, preparing it for earthworks and construction." },
    { question: "How quickly can you respond to an emergency call-out in Kempton Park?", answer: "As a key economic hub, we prioritize fast service in Kempton Park. For emergency situations like fallen trees blocking access to a commercial property, we offer a rapid response to ensure your business operations can resume as quickly as possible." }
];

export default function TreeFellingKemptonParkPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services Kempton Park</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects is a key service provider for Kempton Park's economic hub, offering expert tree felling for commercial, industrial, and residential projects. Our licensed teams have specialized experience working near O.R. Tambo International Airport and in busy logistics zones.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Site Assessment</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Commercial Quote</Link>
                </Button>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Tree Felling Services in Kempton Park</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Tree removal at a commercial property in Kempton Park" data-ai-hint="commercial tree removal" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Specialized tree services for a major logistics hub.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Commercial & Industrial Site Clearing:** Large-scale tree and vegetation removal for new developments.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Airport Zone Compliance:** Expert removal of trees subject to height and safety regulations near O.R. Tambo.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Tree Felling:** Safe and affordable tree removal for homes in Kempton Park's suburbs.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Kempton Park?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Airport Area Specialists</h4><p className="text-muted-foreground mt-2 text-sm">We are experienced in the regulations and logistics of working near O.R. Tambo.</p></div>
                <div><h4 className="font-semibold text-lg">Industrial & Commercial Focus</h4><p className="text-muted-foreground mt-2 text-sm">We have the heavy-duty fleet and expertise for large-scale site clearing projects.</p></div>
                <div><h4 className="font-semibold text-lg">Safety Certified</h4><p className="text-muted-foreground mt-2 text-sm">Our teams adhere to the strictest safety protocols for commercial and industrial work.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured</h4><p className="text-muted-foreground mt-2 text-sm">Our comprehensive insurance covers all projects, giving you total peace of mind.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Tree Felling in Kempton Park</h2>
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
            <p className="mt-2 text-muted-foreground">Covering the key East Rand commercial nodes.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/tree-felling-edenvale">Edenvale</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-boksburg">Boksburg</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-benoni">Benoni</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="A cleared site in Kempton Park ready for development" data-ai-hint="clean site kempton park" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Schedule Your Kempton Park Tree Removal</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact SIMA today for a professional quote on your commercial, industrial, or residential tree felling needs in Kempton Park.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call a Project Specialist</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/tree-felling-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Tree Felling Johannesburg</Link> | <Link href="/tree-felling-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
