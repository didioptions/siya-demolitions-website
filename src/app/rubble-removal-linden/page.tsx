import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "My property in Linden is old. Do you take special care during removal?",
        answer: "Yes, we have great respect for the character of Linden's homes. Our teams take extra care to protect established gardens, walls, and paving during the rubble removal process. We work carefully to avoid any unnecessary damage to your property."
    },
    {
        question: "How do you manage rubble removal on a busy street in Linden?",
        answer: "Safety and minimal disruption are key. We use clear signage, secure the loading area, and manage our logistics to avoid blocking traffic where possible. Our team works efficiently and adheres to all municipal by-laws to respect the neighborhood."
    },
    {
        question: "What's the most common type of rubble you remove in Linden?",
        answer: "In Linden, we frequently handle a mix of garden refuse from the beautiful, large gardens, and building rubble from the many popular home renovations and extensions in the area. We are equipped to handle both types of waste efficiently."
    }
];

export default function RubbleRemovalLindenPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal Services Linden</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects offers expert rubble removal for the leafy suburb of Linden. We specialize in clearing waste from residential renovations, garden clean-ups, and garage decluttering, operating with respect for Linden's established community feel.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Rubble Removal Services in Linden</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing a garden in Linden" data-ai-hint="garden clearing linden" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Solutions for Linden's residential properties.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Renovation & Building Rubble:** Efficient removal of bricks, tiles, concrete, and drywall from your home improvement project.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garden Refuse Removal:** We clear soil, branches, leaves, and other organic waste from large gardens.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garage & General Clean-Ups:** We help you declutter by removing old furniture, appliances, and general junk.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Linden?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Careful & Respectful</h4><p className="text-muted-foreground mt-2 text-sm">We take great care to protect your established gardens and property during clean-ups.</p></div>
                <div><h4 className="font-semibold text-lg">Locally Focused</h4><p className="text-muted-foreground mt-2 text-sm">Our teams know Linden and provide a friendly, reliable, and neighborly service.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Legal</h4><p className="text-muted-foreground mt-2 text-sm">We are fully compliant with CoJ regulations for your peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable for Homeowners</h4><p className="text-muted-foreground mt-2 text-sm">We offer competitive rates for residential jobs of all sizes.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Rubble Removal in Linden</h2>
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
            <p className="mt-2 text-muted-foreground">Our services cover all adjacent suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-randburg">Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-greenside">Greenside</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-parkhurst">Parkhurst</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after rubble removal in Linden" data-ai-hint="clean site linden" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Linden Property Cleared</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us for a detailed, no-obligation quote from a trusted local rubble removal contractor in Linden.</p>
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
