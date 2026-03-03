import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, Trash2, ShieldCheck, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Do you service all suburbs in Roodepoort and the West Rand?",
        answer: "Yes, our rubble removal services cover the entire Roodepoort area and the broader West Rand. From residential cleanups in Weltevreden Park and Helderkruin to supporting construction sites near Clearwater Mall, our teams are familiar with the region. We provide a fast, local, and reliable service to all communities, ensuring professional waste management is accessible across the West Rand."
    },
    {
        question: "What types of waste do you remove in Roodepoort?",
        answer: "We handle a comprehensive range of non-hazardous waste in Roodepoort. This includes construction rubble like bricks, concrete, and sand; waste from home renovations such as old tiles and drywall; and garden refuse like soil, branches, and stumps. Whether you have a small pile from a weekend project or require ongoing clearing for a large building site, our service is equipped to manage it all efficiently and in compliance with City of Johannesburg regulations."
    },
    {
        question: "Why is it important to use a licensed rubble remover in Roodepoort?",
        answer: "Using a licensed rubble removal company like SIMA Demolitions is crucial for protecting yourself and the environment. It guarantees that your waste will be disposed of at a registered, legal facility, not dumped illegally. This compliance with City of Johannesburg by-laws saves you from the risk of heavy fines. Furthermore, our professional and insured service ensures the job is done safely, without damage to your property, providing you with complete peace of mind."
    }
];

export default function RubbleRemovalRoodepoortPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal in Roodepoort, Johannesburg</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <ShieldCheck /> Your Trusted West Rand Site Clearing Partner
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Free Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for Quick Clearance</a>
                </Button>
            </div>
             {heroImage && <div className="mt-8 max-w-4xl mx-auto"><Image src={heroImage.imageUrl} alt="Rubble removal and site clearing in Roodepoort" data-ai-hint="rubble removal roodepoort" width={1200} height={600} className="rounded-lg shadow-lg" /></div>}
        </section>

        <section className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
                SIMA Demolitions Projects offers reliable and professional rubble removal services across Roodepoort and the West Rand. We are dedicated to helping homeowners and contractors maintain clean, safe, and productive sites. From clearing renovation debris in residential suburbs to managing waste on large construction projects, our licensed team ensures every job is handled efficiently. Trust us for compliant, affordable, and timely site clearing that prepares your Roodepoort property for whatever comes next.
            </p>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Roodepoort Site Clearing Services</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing construction debris in Roodepoort" data-ai-hint="site clearing roodepoort" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4">Complete Waste Management for the West Rand</h3>
                    <p className="text-muted-foreground mb-4">We provide a full range of rubble removal services for Roodepoort.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Home & Garden Cleanups:** Fast and affordable removal of debris from renovations, landscaping, and DIY projects.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Construction Site Clearing:** We support builders and developers with reliable, scheduled waste collections in Roodepoort.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Post-Demolition Waste:** As demolition experts, we seamlessly handle the cleanup after a structure is taken down.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose SIMA in Roodepoort?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">West Rand Specialists</h4><p className="text-muted-foreground mt-2 text-sm">Our teams are local to the West Rand, providing fast and knowledgeable service in Roodepoort.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Insured</h4><p className="text-muted-foreground mt-2 text-sm">We are fully compliant with all CoJ regulations, ensuring your peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable & Reliable</h4><p className="text-muted-foreground mt-2 text-sm">We offer competitive quotes and a service you can count on to be on time.</p></div>
                <div><h4 className="font-semibold text-lg">Safety-Focused</h4><p className="text-muted-foreground mt-2 text-sm">Our crews are trained to work safely, protecting your property and the public.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Roodepoort Rubble Removal FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Serving Roodepoort and Surrounding Areas</h2>
            <p className="mt-2 text-muted-foreground">Our network provides comprehensive coverage across the West Rand.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg">Rubble Removal Johannesburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-randburg">Randburg Site Clearing</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-soweto">Soweto Rubble Services</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-roodepoort">Roodepoort Demolition</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Cleared construction site in Roodepoort" data-ai-hint="clean site roodepoort" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Roodepoort Site Cleared Today</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                    Contact SIMA Demolitions for a fast and free quote on professional rubble removal in Roodepoort. Let us handle the mess.
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
