import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, Trash2, ShieldCheck, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How do you handle rubble removal in Midrand's secure lifestyle estates like Waterfall?",
        answer: "We are specialists in operating within Midrand's premier secure estates. Our service is defined by professionalism and strict adherence to all Homeowners' Association (HOA) rules regarding access, work hours, noise levels, and vehicle standards. We coordinate directly with estate management to ensure a seamless process. Our teams take exceptional care to protect high-end landscaping, paving, and neighboring properties, providing a discreet and efficient service that meets the high standards of these communities."
    },
    {
        question: "Do you offer ongoing rubble removal for large development projects in Midrand?",
        answer: "Yes, we are a key partner for developers and principal contractors across Midrand. We provide reliable, scheduled rubble removal services to keep large-scale residential and commercial development sites clean, safe, and productive. By managing waste flow consistently, we help prevent delays and ensure your site remains compliant with all safety and environmental regulations. Our service is scalable to match the pace of your project, from initial earthworks to final cleanup."
    },
    {
        question: "Are you licensed for construction waste removal in Midrand?",
        answer: "Absolutely. SIMA Demolitions Projects is fully licensed by the City of Johannesburg for the collection and transportation of construction and demolition waste. We ensure that 100% of the rubble collected from your Midrand site is taken to a registered and compliant disposal or recycling facility. This protects you from any legal liability associated with improper waste disposal and demonstrates a commitment to responsible, sustainable development practices."
    }
];

export default function RubbleRemovalMidrandPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal in Midrand, Johannesburg</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <ShieldCheck /> Estate, Commercial & Construction Site Clearing
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Free Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for Quick Clearance</a>
                </Button>
            </div>
             {heroImage && <div className="mt-8 max-w-4xl mx-auto"><Image src={heroImage.imageUrl} alt="Rubble removal and site clearing in a Midrand estate" data-ai-hint="rubble removal midrand" width={1200} height={600} className="rounded-lg shadow-lg" /></div>}
        </section>

        <section className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
                In the fast-growing hub of Midrand, efficient and professional site management is key. SIMA Demolitions Projects provides expert rubble removal services tailored for Midrand's unique mix of secure lifestyle estates, commercial developments, and residential properties. Whether you're a developer near the Mall of Africa, a homeowner in Waterfall Estate, or a contractor building new offices, our licensed team ensures your site is cleared quickly, safely, and in full compliance with all City of Johannesburg regulations.
            </p>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Midrand Site Clearing Services</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing a construction site in Midrand" data-ai-hint="site clearing midrand" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4">Tailored Solutions for a Dynamic Area</h3>
                    <p className="text-muted-foreground mb-4">We cover all aspects of rubble removal in Midrand.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Secure Estate Rubble Removal:** We specialize in working within the strict rules of estates like Waterfall, Kyalami, and Carlswald.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Developer & Construction Support:** Scheduled, large-scale clearing for new residential and commercial developments.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential & Garden Cleanups:** Fast, affordable removal of renovation debris and garden refuse for Midrand homeowners.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose SIMA in Midrand?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Estate Specialists</h4><p className="text-muted-foreground mt-2 text-sm">Unmatched experience in complying with the high standards of Midrand's secure lifestyle estates.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Compliant</h4><p className="text-muted-foreground mt-2 text-sm">We are fully licensed by the City of Johannesburg, ensuring legal and responsible waste disposal.</p></div>
                <div><h4 className="font-semibold text-lg">Developer's Partner</h4><p className="text-muted-foreground mt-2 text-sm">We provide reliable, scalable services to keep large development projects on schedule.</p></div>
                <div><h4 className="font-semibold text-lg">Local & Responsive</h4><p className="text-muted-foreground mt-2 text-sm">Our teams are based nearby, ensuring fast and efficient service across the Midrand area.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Midrand Rubble Removal FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Serving the Corridor Between Johannesburg and Pretoria</h2>
            <p className="mt-2 text-muted-foreground">Our service network connects the major northern hubs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg">Rubble Removal Johannesburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-sandton">Sandton Site Clearing</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-centurion">Centurion Rubble Removal</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-midrand">Midrand Demolition Services</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Cleared development site in Midrand" data-ai-hint="clean site midrand" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Midrand Site Cleared Today</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                    Contact SIMA Demolitions for a professional quote on rubble removal for your Midrand estate, development, or commercial property.
                </p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Quote className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Pickup</a></Button>
                </div>
            </div>
        </section>
      </div>
    </>
  );
}
