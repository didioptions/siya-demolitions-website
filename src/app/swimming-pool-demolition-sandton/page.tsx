import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How do you manage pool demolition in Sandton's secure, luxury estates?", answer: "We are specialists in working within Sandton's premier secure estates like Sandhurst and Morningside. Our process is defined by discretion and meticulous planning. We coordinate with estate management to adhere to all rules on noise, working hours, and access, and we use protective measures to ensure your property and its high-value landscaping are left untouched." },
    { question: "Is your team insured for work on high-value properties in Sandton?", answer: "Absolutely. We carry comprehensive public liability insurance specifically for high-value residential properties. This provides our Sandton clients with complete peace of mind, knowing their assets are fully protected throughout the entire pool removal process." },
    { question: "Can you remove a large, architecturally complex pool without damaging my home?", answer: "Yes. Many Sandton homes have custom-designed pools close to the main structure. We use precision breaking and cutting equipment, rather than heavy-impact methods, to carefully dismantle the pool shell without causing any vibrations or structural risk to your home. Safety and property preservation are our highest priorities." }
];

export default function SwimmingPoolDemolitionSandtonPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoWork');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Services Sandton</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions provides a premier pool demolition service for Sandton's most exclusive properties. We specialize in the discreet, safe, and precise removal of swimming pools from luxury homes and secure estates, protecting your property's value and aesthetic.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Consultation</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Free Quote</Link>
                </Button>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Pool Removal Services in Sandton</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Luxury swimming pool demolition in Sandton" data-ai-hint="luxury pool demolition" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Elite pool removal for Sandton's finest properties.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Luxury Home Pool Removal:** Surgical demolition with maximum protection for your manicured garden and home.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Full Demolition & Backfilling:** We remove the pool entirely and prepare the land for a new lawn, tennis court, or cottage.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Immaculate Site Cleanup:** Our service includes the complete removal of all rubble and a final tidy-up.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Sandton?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">High-End Property Specialists</h4><p className="text-muted-foreground mt-2 text-sm">We have proven experience working with care on luxury properties.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured for Peace of Mind</h4><p className="text-muted-foreground mt-2 text-sm">Our comprehensive insurance covers high-value properties.</p></div>
                <div><h4 className="font-semibold text-lg">Discreet & Professional</h4><p className="text-muted-foreground mt-2 text-sm">Our uniformed crews operate with the professionalism your neighborhood expects.</p></div>
                <div><h4 className="font-semibold text-lg">Meticulous Cleanup</h4><p className="text-muted-foreground mt-2 text-sm">We treat your property with respect, leaving it tidier than we found it.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Pool Demolition in Sandton</h2>
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
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-randburg">Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-bryanston">Bryanston</Link></Button>
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-fourways">Fourways</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine garden in Sandton after pool removal" data-ai-hint="clean garden sandton" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Schedule Your Sandton Pool Removal</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For a professional, discreet, and reliable pool demolition service in Sandton, contact the experts at Apex Demolitions.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Speak to a Specialist</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/swimming-pool-demolition-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Pool Demolition Johannesburg</Link> | <Link href="/swimming-pool-demolition-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
