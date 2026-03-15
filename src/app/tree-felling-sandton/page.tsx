import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How do you manage tree felling in Sandton's dense, leafy suburbs?", answer: "We specialize in complex removals in areas like Sandhurst and Morningside. Using sectional dismantling, we carefully lower branches and logs with ropes to avoid any damage to your home, luxury vehicles, manicured gardens, and neighboring properties. Precision and care are our top priorities." },
    { question: "Are your teams insured for work on high-value properties in Sandton?", answer: "Absolutely. SIMA Demolitions Projects carries comprehensive public liability insurance specifically for high-value properties. This provides our clients with complete peace of mind, knowing their assets are fully protected throughout the tree felling process." },
    { question: "What is your process for working within Sandton's secure estates?", answer: "We are highly experienced in working within Sandton's secure estates. We liaise directly with estate management to schedule work, adhere to all rules regarding noise and operating hours, and ensure our teams are professional and discreet. Our goal is a seamless, hassle-free experience for residents." }
];

export default function TreeFellingSandtonPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services Sandton</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                 SIMA Demolitions Projects provides premier tree felling services for Sandton's exclusive residential and commercial properties. We specialize in the safe and precise removal of large, complex, or hazardous trees with minimal disruption to your property and neighborhood.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Tree Felling Services in Sandton</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Safe tree felling with ropes in Sandton" data-ai-hint="tree cutting sandton" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Our elite services are tailored for Sandton properties.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Complex & Large Tree Removal:** Sectional dismantling of large trees in confined spaces near luxury homes.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Stump Grinding & Removal:** We leave your lawn pristine by grinding stumps well below the surface.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Emergency Tree Services:** Fast response for storm-damaged or fallen trees that pose a risk to your property.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Sandton?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">High-Value Property Specialists</h4><p className="text-muted-foreground mt-2 text-sm">We have proven experience working with extreme care on luxury properties and in secure estates.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured for Peace of Mind</h4><p className="text-muted-foreground mt-2 text-sm">Our comprehensive insurance is designed to cover high-value properties.</p></div>
                <div><h4 className="font-semibold text-lg">Discreet & Professional</h4><p className="text-muted-foreground mt-2 text-sm">Our uniformed crews operate with the professionalism and discretion your neighborhood expects.</p></div>
                <div><h4 className="font-semibold text-lg">Immaculate Cleanup</h4><p className="text-muted-foreground mt-2 text-sm">We leave your property spotless, removing all logs, branches, and sawdust.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Tree Felling in Sandton</h2>
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
                <Button variant="outline" asChild><Link href="/tree-felling-bryanston">Bryanston</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-randburg">Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-rosebank">Rosebank</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine lawn after tree felling in Sandton" data-ai-hint="clean lawn sandton" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Schedule Your Sandton Tree Service</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For a professional, discreet, and reliable tree felling service in Sandton, contact the experts at SIMA Demolitions.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Speak to a Specialist</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/tree-felling-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Tree Felling Johannesburg</Link> | <Link href="/tree-felling-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
