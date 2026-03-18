import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How long does it take to remove a pool in Randburg?", answer: "A standard residential pool demolition in Randburg usually takes 2 to 4 days. This includes the breaking of the pool shell, removal of all debris, backfilling, and compacting the ground, leaving your property clean and ready." },
    { question: "Is your pool demolition service insured for work in Randburg?", answer: "Yes, absolutely. Apex Demolitions is fully insured for all operations. This gives our Randburg clients complete peace of mind that their property is fully protected during the demolition process." },
    { question: "What is the cost of demolishing a pool in Randburg?", answer: "The cost is very competitive and depends on the pool size, material, and site access. We provide free, no-obligation quotes to give you a clear and accurate price upfront, with no hidden costs." }
];

export default function SwimmingPoolDemolitionRandburgPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoWork');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Services Randburg</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions provides fast, reliable, and professional swimming pool demolition throughout Randburg. From Ferndale to Northcliff, we help homeowners reclaim their gardens and add value to their properties by safely removing old or unwanted pools.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Pool Removal Services in Randburg</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="A residential swimming pool being demolished in Randburg" data-ai-hint="pool demolition randburg" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Complete solutions for any Randburg property.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Pool Removal:** Safe demolition of pools in suburbs like Blairgowrie, Ferndale, and Linden.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**All Pool Types:** We handle concrete, gunite, fibreglass, and vinyl liner pools.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Full Site Cleanup:** Our all-inclusive service means we remove all rubble and leave your site level.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Randburg?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Fast Local Teams</h4><p className="text-muted-foreground mt-2 text-sm">Our Randburg-based crews ensure a rapid response for your project.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable Pricing</h4><p className="text-muted-foreground mt-2 text-sm">We offer competitive pricing for jobs of all sizes across Randburg.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Insured</h4><p className="text-muted-foreground mt-2 text-sm">We are fully compliant with CoJ regulations, ensuring your peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Professional & Reliable</h4><p className="text-muted-foreground mt-2 text-sm">We pride ourselves on a dependable, hassle-free service from start to finish.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Pool Demolition in Randburg</h2>
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
            <p className="mt-2 text-muted-foreground">Serving the greater Northern and Western Suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-sandton">Sandton</Link></Button>
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-roodepoort">Roodepoort</Link></Button>
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-fourways">Fourways</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="A clean, green garden in Randburg after a pool was removed" data-ai-hint="clean garden randburg" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Reclaim Your Randburg Garden</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact Apex Demolitions for a fast, free, and no-obligation quote on licensed pool demolition in Randburg. Let's clear your space.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Removal</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/swimming-pool-demolition-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Pool Demolition Johannesburg</Link> | <Link href="/swimming-pool-demolition-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
