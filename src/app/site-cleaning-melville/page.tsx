import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Can you handle site cleaning on small, tightly packed properties in Melville?",
        answer: "Yes, this is our specialty. We use smaller equipment and manual clearing techniques to safely clean up sites on small stands with minimal disruption to neighbors. Protecting adjacent properties is a key concern in a dense suburb like Melville."
    },
    {
        question: "How do you manage dust and noise during a cleanup in a busy suburb like Melville?",
        answer: "We are committed to being considerate contractors. We adhere strictly to municipal work hours and maintain a clean, organized site to minimize our impact on the surrounding community. We also use methods to dampen dust where possible."
    },
    {
        question: "What's the best way to get a quote for a small post-renovation cleanup in Melville?",
        answer: "For small jobs, the quickest way is often to send us a few photos of the debris on WhatsApp. This allows us to estimate the volume and give you a fast, accurate, and affordable quote without needing an initial site visit."
    }
];

export default function SiteCleaningMelvillePage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Site Cleaning Services Melville</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions provides specialized site cleaning for the historic and vibrant suburb of Melville. We understand the unique challenges of working on older properties and small stands, offering careful and efficient clearing of renovation debris, garden refuse, and general junk.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Site Cleaning Services in Melville</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Cleaning up a small yard in Melville" data-ai-hint="yard cleaning melville" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Cleanup with respect for Melville's character.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Post-Renovation Cleaning:** Perfect for clearing waste from kitchen, bathroom, and home extension projects on small stands.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Yard & Garden Cleanup:** We clear away soil, branches, and other organic waste to help you reclaim your garden space.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Commercial & Restaurant Cleanup:** Supporting businesses on 7th Street and beyond with efficient waste management.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Melville?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Experts in Tight Spaces</h4><p className="text-muted-foreground mt-2 text-sm">We specialize in logistics for dense, urban suburbs with limited access.</p></div>
                <div><h4 className="font-semibold text-lg">Heritage Aware</h4><p className="text-muted-foreground mt-2 text-sm">We work carefully around older properties and established neighborhoods.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Compliant</h4><p className="text-muted-foreground mt-2 text-sm">We ensure all waste is disposed of legally, protecting you and the community.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable & Fast</h4><p className="text-muted-foreground mt-2 text-sm">We offer competitive rates and a responsive service for jobs of all sizes.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Site Cleaning in Melville</h2>
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
                <Button variant="outline" asChild><Link href="/site-cleaning-northcliff">Northcliff</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-parkhurst">Parkhurst</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-greenside">Greenside</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after cleaning in Melville" data-ai-hint="clean site melville" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Melville Property Cleaned</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact our expert team to discuss your Melville site cleaning project. We provide detailed, no-obligation quotes.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Cleanup</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/site-cleaning" className="text-sm text-muted-foreground hover:text-primary">Back to Site Cleaning Johannesburg</Link>
        </div>
    </div>
  );
}
