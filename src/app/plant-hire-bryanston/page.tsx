import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How do you operate machinery in Bryanston's secure estates?", answer: "We are highly experienced in adhering to the strict HOA rules of Bryanston's secure estates. Our operators are professional and discreet, and we coordinate all work with estate management to ensure compliance with rules on noise, access, and working hours." },
    { question: "Can you hire a machine for landscaping a large garden in Bryanston?", answer: "Yes, our TLB and Bobcat hire services are perfect for large-scale landscaping projects. Our operators can assist with site leveling, moving soil, clearing vegetation, and preparing areas for new features like pools or patios, saving you weeks of manual labour." },
    { question: "Is your plant hire team insured for work on high-value properties?", answer: "Absolutely. We carry comprehensive insurance coverage specifically for high-value residential properties, giving you complete confidence and peace of mind when our machinery is operating on your Bryanston property." }
];

export default function PlantHireBryanstonPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'plantHireResidential');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant Hire Services Bryanston</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions provides a premier plant hire service for Bryanston, defined by precision, discretion, and the high standards expected in Johannesburg's northern suburbs. We specialize in providing machinery for luxury home builds and renovations.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Plant Hire Fleet in Bryanston</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Bobcat at a luxury home renovation in Bryanston" data-ai-hint="bobcat hire bryanston" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Elite equipment for Bryanston's finest properties.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**TLB & Bobcat Hire:** For landscaping, foundation digging, and site preparation for new builds and extensions.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Mini-Excavators:** Ideal for precision digging for pools and utilities with minimal garden disruption.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Tipper Trucks:** For the discreet and efficient removal of all soil and rubble.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Bryanston?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Estate Specialists</h4><p className="text-muted-foreground mt-2 text-sm">We are experts at working respectfully and efficiently within secure estates.</p></div>
                <div><h4 className="font-semibold text-lg">Property Protection</h4><p className="text-muted-foreground mt-2 text-sm">We take extreme care to protect your valuable landscaping and home.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured</h4><p className="text-muted-foreground mt-2 text-sm">Our high-value insurance policy gives you complete peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Discreet & Professional</h4><p className="text-muted-foreground mt-2 text-sm">Our uniformed operators work with minimal disruption to you and your neighbors.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Plant Hire in Bryanston</h2>
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
            <p className="mt-2 text-muted-foreground">Serving the greater Northern Suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/plant-hire-sandton">Sandton</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-fourways">Fourways</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-randburg">Randburg</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Luxury home under construction in Bryanston" data-ai-hint="construction bryanston" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Bryanston Project Properly Equipped</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For a discreet, insured, and professional plant hire service in Bryanston, contact the experts at Apex Demolitions.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for a Consultation</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/plant-hire-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Plant Hire Johannesburg</Link> | <Link href="/plant-hire-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
