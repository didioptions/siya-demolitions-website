import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Do you service all suburbs in Roodepoort and the West Rand?",
        answer: "Yes, our rubble removal services cover the entire Roodepoort area and the broader West Rand, from Weltevreden Park and Helderkruin to supporting construction sites near Clearwater Mall. Our teams are local and provide a fast, reliable service."
    },
    {
        question: "What types of waste do you remove in Roodepoort?",
        answer: "We handle a comprehensive range of non-hazardous waste. This includes construction rubble like bricks and concrete, waste from home renovations, and garden refuse like soil and branches. Whether it's a small pile from a weekend project or ongoing clearing for a large building site, we can manage it."
    },
    {
        question: "Why is it important to use a licensed rubble remover in Roodepoort?",
        answer: "Using a licensed company like SIMA Demolitions guarantees that your waste will be disposed of legally at a registered facility, not dumped illegally. This compliance with City of Johannesburg by-laws saves you from the risk of heavy fines and ensures the job is done safely and professionally."
    }
];

export default function RubbleRemovalRoodepoortPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal Services Roodepoort</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects offers reliable rubble removal across Roodepoort and the West Rand. We help homeowners and contractors maintain clean and safe sites by efficiently clearing construction debris, garden refuse, and renovation waste.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Rubble Removal Services in Roodepoort</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing construction site in Roodepoort" data-ai-hint="site clearing roodepoort" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Complete waste management for the West Rand.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Home & Garden Cleanups:** Fast and affordable removal of debris from renovations, landscaping, and DIY projects.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Construction Site Clearing:** Reliable, scheduled waste collections for builders and developers in Roodepoort.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garage and Yard Clean-Up:** We help you reclaim your space by removing general clutter and junk.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Roodepoort?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">West Rand Specialists</h4><p className="text-muted-foreground mt-2 text-sm">Our teams are local, providing fast and knowledgeable service in Roodepoort.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Insured</h4><p className="text-muted-foreground mt-2 text-sm">We are fully compliant with all CoJ regulations, ensuring your peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable & Reliable</h4><p className="text-muted-foreground mt-2 text-sm">We offer competitive quotes and a service you can count on to be on time.</p></div>
                <div><h4 className="font-semibold text-lg">Safety-Focused</h4><p className="text-muted-foreground mt-2 text-sm">Our crews are trained to work safely, protecting your property and the public.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Rubble Removal in Roodepoort</h2>
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
            <p className="mt-2 text-muted-foreground">Our network provides comprehensive coverage across the West Rand.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-randburg">Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-soweto">Soweto</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-northcliff">Northcliff</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after rubble removal in Roodepoort" data-ai-hint="clean site roodepoort" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Roodepoort Site Cleared</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact SIMA Demolitions for a fast and free quote on professional rubble removal in Roodepoort. Let us handle the mess.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Pickup</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/rubble-removal-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Rubble Removal Johannesburg</Link> | <Link href="/rubble-removal-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
