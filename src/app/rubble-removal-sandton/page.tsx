import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How do you manage rubble removal in Sandton's secure estates?",
        answer: "Our teams are highly experienced in operating within Sandton's exclusive residential estates like Bryanston and Morningside. We liaise directly with estate management to ensure full compliance with their rules regarding work hours, noise levels, and vehicle access. We use protective measures to safeguard landscaping and paving, providing a discreet and professional service."
    },
    {
        question: "Can you provide fast rubble removal for a small renovation project in Sandton?",
        answer: "Yes, we specialize in rapid and affordable service for homeowners. Whether you're clearing debris from a kitchen renovation, a garden cleanup, or a small DIY project, we can typically schedule a same-day or next-day collection. No job is too small, and our pricing is based on the volume of rubble."
    },
     {
        question: "What is involved in a garage clean-up service in Sandton?",
        answer: "Our garage clean-up service is a complete solution to reclaim your space. Our team will sort through items, load all unwanted junk, old furniture, broken appliances, and general clutter onto our trucks, and sweep the area clean. We handle all the heavy lifting and responsible disposal, leaving you with a tidy, usable garage."
    }
];

export default function RubbleRemovalSandtonPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal Services Sandton</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects provides premier rubble removal services in Sandton. We specialize in discreet and efficient waste clearing for high-value residential properties, secure estates, and commercial sites. From garden refuse removal in Bryanston to construction debris in the CBD, our licensed teams ensure your property is left immaculate and compliant.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Rubble Removal Services in Sandton</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Pristine garden in Sandton after rubble removal" data-ai-hint="clean garden sandton" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">We offer a full spectrum of services for Sandton properties.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Estate & Residential Clean-ups:** Discreet removal of renovation debris, garden refuse, and general waste.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garden & Garage Clean-Up:** We handle everything from soil and branches to old furniture and clutter.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Commercial & Construction Debris:** Reliable support for builders and developers in Sandton's business hubs.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Sandton?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Estate Specialists</h4><p className="text-muted-foreground mt-2 text-sm">Experienced in complying with the high standards of Sandton's secure estates.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured</h4><p className="text-muted-foreground mt-2 text-sm">Comprehensive insurance to protect your high-value property.</p></div>
                <div><h4 className="font-semibold text-lg">Discreet & Professional</h4><p className="text-muted-foreground mt-2 text-sm">Our teams work with minimal disruption and maximum respect for your privacy.</p></div>
                <div><h4 className="font-semibold text-lg">Eco-Friendly Disposal</h4><p className="text-muted-foreground mt-2 text-sm">We guarantee responsible and legal disposal of all waste.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Rubble Removal in Sandton</h2>
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
            <p className="mt-2 text-muted-foreground">Our network covers the entire Northern Johannesburg area.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-randburg">Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-fourways">Fourways</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-bryanston">Bryanston</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-rosebank">Rosebank</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after rubble removal in Sandton" data-ai-hint="clean site sandton" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Sandton Property Cleared</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For a professional, discreet, and reliable rubble removal service in Sandton, contact the experts at SIMA Demolitions.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Speak to a Specialist</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/rubble-removal-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Rubble Removal Johannesburg</Link> | <Link href="/rubble-removal-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
