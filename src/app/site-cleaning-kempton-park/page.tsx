import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Can you provide site cleaning for logistics and warehousing sites in Kempton Park?",
        answer: "Yes, this is a core specialty. We are experienced in cleaning large-scale commercial and industrial sites, including logistics parks and warehouses, especially in the areas surrounding O.R. Tambo International Airport."
    },
    {
        question: "Are your operations compliant with regulations for working near O.R. Tambo Airport?",
        answer: "Absolutely. We are fully aware of and compliant with the special regulations required for working in the vicinity of O.R. Tambo. Our teams are professional, and we coordinate with all necessary authorities to ensure our operations are conducted safely and legally."
    },
    {
        question: "What is your turnaround time for a site cleaning job in Kempton Park?",
        answer: "We pride ourselves on providing a fast and reliable service. We can typically offer same-day or next-day service for standard cleanups. For larger, ongoing projects, we work with you to establish a regular collection schedule that suits your timeline."
    }
];

export default function SiteCleaningKemptonParkPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Site Cleaning Services Kempton Park</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions is a key service provider for Kempton Park's economic hub, offering expert site cleaning for commercial, industrial, and residential projects. Our licensed teams have specialized experience working near O.R. Tambo International Airport and in busy logistics zones.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Site Cleaning Services in Kempton Park</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Cleaning a logistics site in Kempton Park" data-ai-hint="logistics site kempton park" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Cleaning solutions for a major logistics hub.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Logistics & Warehouse Cleaning:** We manage waste for logistics parks and industrial properties.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Commercial & Retail Cleanup:** Efficient cleaning for shop and office renovations in Kempton Park's business centers.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Site Cleaning:** Fast and affordable service for homeowners in suburbs like Birchleigh and Glen Marais.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Kempton Park?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Airport Area Specialists</h4><p className="text-muted-foreground mt-2 text-sm">Experienced in the regulations and logistics of working near O.R. Tambo.</p></div>
                <div><h4 className="font-semibold text-lg">Ekurhuleni Compliant</h4><p className="text-muted-foreground mt-2 text-sm">As a licensed carrier, we ensure your waste disposal is 100% legal and responsible.</p></div>
                <div><h4 className="font-semibold text-lg">Industrial & Commercial Focus</h4><p className="text-muted-foreground mt-2 text-sm">We have the fleet and expertise for large-scale site clearing projects.</p></div>
                <div><h4 className="font-semibold text-lg">Reliable & On-Time</h4><p className="text-muted-foreground mt-2 text-sm">We understand project timelines and pride ourselves on providing punctual service.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Site Cleaning in Kempton Park</h2>
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
                <Button variant="outline" asChild><Link href="/site-cleaning-edenvale">Edenvale</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-boksburg">Boksburg</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-benoni">Benoni</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after cleaning in Kempton Park" data-ai-hint="clean site kempton park" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Schedule Your Kempton Park Site Cleaning</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact Apex today for a professional quote on your commercial, industrial, or residential site cleaning needs in Kempton Park.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call a Project Specialist</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/site-cleaning" className="text-sm text-muted-foreground hover:text-primary">Back to Site Cleaning Johannesburg</Link>
        </div>
    </div>
  );
}
