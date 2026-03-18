import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Do you offer affordable pool demolition for homeowners in Soweto?", answer: "Yes, providing affordable and reliable pool demolition is a key part of our service in Soweto. We offer competitive pricing and free, no-obligation quotes to ensure our services are accessible to all residents." },
    { question: "Is your pool demolition service available throughout all of Soweto?", answer: "Absolutely. We serve all neighborhoods in Soweto, from Orlando and Pimville to Diepkloof. We are proud to be a local contractor supporting community members in reclaiming their yard space." },
    { question: "What happens to the rubble after you demolish a pool in Soweto?", answer: "Our service is all-inclusive. We load and transport all rubble and debris to a licensed City of Johannesburg disposal facility, ensuring your site is left completely clean and that all waste is handled responsibly." }
];

export default function SwimmingPoolDemolitionSowetoPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoWork');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Services Soweto</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions is proud to offer professional, safe, and affordable swimming pool demolition services across Soweto. Reclaim your garden and add value to your property by removing an old or unwanted pool.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Pool Removal Services in Soweto</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="A swimming pool being demolished in a Soweto yard" data-ai-hint="pool demolition soweto" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Affordable pool removal for the Soweto community.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Affordable Pool Removal:** Cost-effective demolition of concrete, gunite, and fibreglass pools.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Complete Site Preparation:** We backfill and compact the area, leaving it ready for a new lawn, garden, or extension.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Full Rubble Cleanup:** Our service includes the complete removal of all demolition debris.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Soweto?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Community Focused</h4><p className="text-muted-foreground mt-2 text-sm">We are committed to providing an accessible and reliable service for the people of Soweto.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable Pricing</h4><p className="text-muted-foreground mt-2 text-sm">Our rates are competitive to ensure professional service is within everyone's reach.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Insured</h4><p className="text-muted-foreground mt-2 text-sm">Our service is fully insured and compliant with all CoJ regulations.</p></div>
                <div><h4 className="font-semibold text-lg">Local Soweto Knowledge</h4><p className="text-muted-foreground mt-2 text-sm">Our teams know the area well, allowing for fast, efficient, and respectful service.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Pool Demolition in Soweto</h2>
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
            <p className="mt-2 text-muted-foreground">Serving Soweto and its neighbours.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-roodepoort">Roodepoort</Link></Button>
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-johannesburg-south">Johannesburg South</Link></Button>
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-alberton">Alberton</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine yard after pool removal in Soweto" data-ai-hint="clean yard soweto" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get a Free Pool Demolition Quote in Soweto</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact Apex Demolitions for a free quote on affordable and professional pool demolition in Soweto. We're here to help our community.</p>
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
