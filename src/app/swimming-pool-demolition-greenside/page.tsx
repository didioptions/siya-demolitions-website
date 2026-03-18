import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How do you protect established gardens during pool demolition in Greenside?", answer: "We understand the value of Greenside's leafy, established gardens. Our teams work with great care, using protective measures for lawns and plants, and plan our work to have the least possible impact on your beautiful garden." },
    { question: "My property is adjacent to Parkview Golf Club. Do you take special precautions?", answer: "Absolutely. For properties bordering the golf course, we implement enhanced safety and containment measures. We ensure no debris, dust, or machinery interferes with the course, showing full respect for the club and its members." },
    { question: "What can I do with the space after my pool is removed?", answer: "The possibilities are endless! By removing an old pool, you can create a larger lawn for kids to play, build a new entertainment patio or boma, install a modern, low-maintenance splash pool, or even build a garden cottage." }
];

export default function SwimmingPoolDemolitionGreensidePage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoWork');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Services Greenside</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions offers careful, professional pool demolition services for the leafy suburb of Greenside. We specialize in working on properties with large gardens and those adjacent to the Parkview Golf Club, ensuring every job is done with precision.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Pool Removal Services in Greenside</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Demolishing a pool in a large, leafy Greenside garden" data-ai-hint="pool demolition greenside" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Pool removal that respects your property.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garden-Friendly Pool Removal:** We work meticulously to protect your established trees and landscaping.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Golf Course Adjoining Properties:** We are experts in working on properties bordering Parkview Golf Club with zero disruption.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Complete Site Preparation:** Full rubble removal, backfilling, and compaction included.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Greenside?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Garden Protection Specialists</h4><p className="text-muted-foreground mt-2 text-sm">We take special care to preserve the mature, leafy character of your property.</p></div>
                <div><h4 className="font-semibold text-lg">Golf Course Experience</h4><p className="text-muted-foreground mt-2 text-sm">We know how to work on properties bordering golf courses with care and discretion.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Insured</h4><p className="text-muted-foreground mt-2 text-sm">All our work is fully insured, giving you complete peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Local & Reliable</h4><p className="text-muted-foreground mt-2 text-sm">Our teams are familiar with the area and provide a dependable, neighborly service.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Pool Demolition in Greenside</h2>
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
            <p className="mt-2 text-muted-foreground">We serve all the surrounding suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-parkhurst">Parkhurst</Link></Button>
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-linden">Linden</Link></Button>
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-rosebank">Rosebank</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="A beautiful garden in Greenside after pool demolition" data-ai-hint="beautiful garden" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get a Free Pool Demolition Quote in Greenside</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us for a detailed, no-obligation quote from a trusted local contractor that respects the beauty and character of Greenside.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for a Consultation</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/swimming-pool-demolition-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Pool Demolition Johannesburg</Link> | <Link href="/swimming-pool-demolition-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
