import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Do you specialize in cleaning up after commercial strip-outs in Rosebank?",
        answer: "Yes, we are highly experienced in cleaning up after commercial interior strip-outs for offices, retail spaces, and restaurants in Rosebank's bustling commercial district. We efficiently prepare the space for the new tenant's installation."
    },
    {
        question: "How do you manage site cleaning in a busy area like Rosebank?",
        answer: "We implement strict site management plans, including controlled work hours and coordinated logistics to minimize disruption to surrounding businesses and traffic. Our teams work efficiently to load and remove debris, ensuring the area is left clean and safe."
    },
    {
        question: "Is your service suitable for residential cleanups in nearby suburbs like Parkwood?",
        answer: "Absolutely. We provide fast and affordable cleaning services for homeowners in all suburbs surrounding Rosebank, whether it's for post-renovation debris, garden refuse, or a general yard cleanup."
    }
];

export default function SiteCleaningRosebankPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Site Cleaning Services Rosebank</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions provides specialized site cleaning services for the dynamic, mixed-use environment of Rosebank. We excel in commercial cleanups for the area's bustling office and retail spaces, as well as precision residential cleanups in leafy neighboring suburbs.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Site Cleaning Services in Rosebank</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Cleaning a commercial renovation site in Rosebank" data-ai-hint="office cleaning rosebank" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Urban cleanup specialists.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Commercial & Retail Strip-Out Cleaning:** Fast cleanup of office, shop, and restaurant renovation debris.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Renovation Cleanups:** Servicing adjacent suburbs like Parkwood and Saxonwold with professional debris clearing.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Scheduled Contractor Support:** Reliable waste management for builders and developers in the Rosebank node.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Rosebank?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Urban Logistics Experts</h4><p className="text-muted-foreground mt-2 text-sm">We excel at managing cleanups in high-traffic, dense commercial areas.</p></div>
                <div><h4 className="font-semibold text-lg">Safety Focused</h4><p className="text-muted-foreground mt-2 text-sm">We implement safety plans to protect the public and your property.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured</h4><p className="text-muted-foreground mt-2 text-sm">Our insurance provides peace of mind for commercial and residential work.</p></div>
                <div><h4 className="font-semibold text-lg">Minimal Disruption</h4><p className="text-muted-foreground mt-2 text-sm">We work efficiently and can operate during off-peak hours to suit your business needs.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Site Cleaning in Rosebank</h2>
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
            <p className="mt-2 text-muted-foreground">Serving the central and northern suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/site-cleaning-sandton">Sandton</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-parkhurst">Parkhurst</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-greenside">Greenside</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine commercial space after cleaning in Rosebank" data-ai-hint="clean office rosebank" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Rosebank Site Professionally Cleaned</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For professional site cleaning for your Rosebank business or home, contact the urban experts at Apex Demolitions.</p>
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
