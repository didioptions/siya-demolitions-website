import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, Trash2, ShieldCheck, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Do you provide industrial rubble removal for sites in Nigel?",
        answer: "Yes, we are well-equipped to handle industrial rubble removal throughout Nigel. Our teams have the experience and equipment necessary to clear heavy debris from factory sites, warehouses, and other industrial properties. We manage everything from concrete and scrap metal to general construction waste, ensuring your site is left clean, safe, and ready for its next operational phase. All disposal is handled in strict compliance with environmental and municipal regulations."
    },
    {
        question: "How does your pricing work for rubble removal in Nigel?",
        answer: "We aim to provide the most affordable and transparent pricing for rubble removal in Nigel. Our costs are primarily based on the volume of rubble (measured in truckloads) and the type of material being removed. We provide a free, no-obligation quote before any work begins, so you know the exact cost upfront. There are no hidden fees. Our goal is to deliver professional, licensed service at a price that is accessible to homeowners, contractors, and industrial clients alike."
    },
    {
        question: "How quickly can you get a team out to my property in Nigel?",
        answer: "As a company with a strong presence across the East Rand, we pride ourselves on our responsiveness. For most standard rubble removal jobs in Nigel, we can typically schedule a collection within 1-2 business days. For urgent needs, we do our best to accommodate same-day service depending on our schedule. We recommend calling us directly to discuss your timeline so we can arrange the fastest possible service for you."
    }
];

export default function RubbleRemovalNigelPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'industrialDemolition');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal in Nigel, Gauteng</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <ShieldCheck /> Licensed Industrial & Residential Site Clearing
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Free Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for Fast Clearance</a>
                </Button>
            </div>
             {heroImage && <div className="mt-8 max-w-4xl mx-auto"><Image src={heroImage.imageUrl} alt="Industrial rubble removal in Nigel" data-ai-hint="industrial site nigel" width={1200} height={600} className="rounded-lg shadow-lg" /></div>}
        </section>

        <section className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
                SIMA Demolitions Projects is your trusted local partner for professional rubble removal in Nigel. We provide essential site clearing services for the area's diverse industrial, commercial, and residential properties. Whether you're clearing a factory yard, cleaning up after a construction project, or removing garden refuse from your home, our licensed team ensures the job is done safely, affordably, and in full compliance with all City of Ekurhuleni waste disposal regulations.
            </p>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Site Clearing Services in Nigel</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing a site in Nigel" data-ai-hint="site clearing nigel" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4">Debris Management for Nigel's Needs</h3>
                    <p className="text-muted-foreground mb-4">We handle all types of waste removal to support Nigel's community and industry.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Industrial Waste Clearing:** We specialize in removing heavy debris from Nigel's industrial zones, including scrap and construction rubble.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Rubble Removal:** An affordable solution for homeowners in Nigel clearing out renovation waste or garden refuse.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Contractor & Builder Support:** Reliable and scheduled collections to keep building projects in Nigel clean and on track.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose SIMA in Nigel?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Local East Rand Operator</h4><p className="text-muted-foreground mt-2 text-sm">We provide responsive and reliable service to the Nigel community.</p></div>
                <div><h4 className="font-semibold text-lg">Industrial Expertise</h4><p className="text-muted-foreground mt-2 text-sm">We have the right equipment and experience for heavy-duty industrial site clearing.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable & Transparent</h4><p className="text-muted-foreground mt-2 text-sm">Get a fair, upfront price with no hidden costs for your rubble removal.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Compliant</h4><p className="text-muted-foreground mt-2 text-sm">We are licensed and ensure all waste is disposed of legally, protecting you from fines.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Nigel Rubble Removal FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Covering the Far East Rand</h2>
            <p className="mt-2 text-muted-foreground">Our service area includes all key towns in the region.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg">Rubble Removal Johannesburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-springs">Springs Site Clearing</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-brakpan">Brakpan Rubble Removal</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Full Demolition Services</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Cleared industrial site in Nigel" data-ai-hint="clean site nigel" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Nigel Site Cleared Professionally</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                    For licensed, affordable, and reliable rubble removal in Nigel, trust the local experts. Contact SIMA Demolitions for your free quote.
                </p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Quote className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Pickup</a></Button>
                </div>
            </div>
        </section>
      </div>
    </>
  );
}
