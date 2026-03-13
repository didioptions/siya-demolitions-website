import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, Trash2, ShieldCheck, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How do you handle rubble removal with care for high-value properties in Bedfordview?",
        answer: "We specialize in serving high-end residential areas like Bedfordview. Our teams are trained to operate with the utmost care and professionalism. We use protective boards for driveways and lawns, work meticulously to avoid damaging existing landscaping or structures, and ensure our vehicles are clean. Discretion and maintaining the pristine condition of your property are our top priorities during the entire process."
    },
    {
        question: "What is the turnaround time for rubble removal in Bedfordview?",
        answer: "Given the proximity to our main operational areas, we offer a highly responsive service in Bedfordview. We can typically accommodate same-day or next-day collections, depending on the job size and our schedule. We understand that a clean site is crucial for high-end renovation and construction projects, so we prioritize efficiency to ensure your project proceeds without delay. Call us directly for the fastest scheduling."
    },
    {
        question: "Are you licensed to work in exclusive Bedfordview estates?",
        answer: "Yes, we are fully licensed, insured, and experienced in working within Bedfordview's secure and exclusive estates. We are accustomed to liaising with estate management to ensure full compliance with their specific rules regarding work hours, noise, and contractor conduct. Our professional appearance and conduct ensure we meet the high standards expected in these communities."
    }
];

export default function RubbleRemovalBedfordviewPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal in Bedfordview, Johannesburg</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <ShieldCheck /> Premier Site Clearing for High-End Properties
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Free Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Consultation</a>
                </Button>
            </div>
             {heroImage && <div className="mt-8 max-w-4xl mx-auto"><Image src={heroImage.imageUrl} alt="Rubble removal from a luxury home in Bedfordview" data-ai-hint="rubble removal bedfordview" width={1200} height={600} className="rounded-lg shadow-lg" /></div>}
        </section>

        <section className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
                SIMA Demolitions Projects offers a specialized rubble removal service for the discerning residents and contractors of Bedfordview. We understand that projects in this area demand a higher level of care, professionalism, and discretion. Our licensed and insured teams are experts at clearing debris from luxury home renovations, landscaping projects, and new builds, ensuring your property is handled with the respect it deserves. We operate in full compliance with all City of Ekurhuleni regulations, providing a seamless and premium site clearing experience.
            </p>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Premier Site Clearing Services in Bedfordview</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Meticulous site clearing in Bedfordview" data-ai-hint="site clearing bedfordview" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4">Elite Debris Management</h3>
                    <p className="text-muted-foreground mb-4">Our services are designed to meet the high standards of Bedfordview properties.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Luxury Renovation Cleanups:** Careful removal of construction debris while protecting finished surfaces and landscaping.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garden & Landscaping Debris:** We clear soil, trees, and other organic waste with precision to avoid disrupting your garden.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Discreet & Professional Service:** Our teams work efficiently and quietly to minimize disturbance to you and your neighbors.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Bedfordview Chooses SIMA</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">High-End Property Specialists</h4><p className="text-muted-foreground mt-2 text-sm">We have proven experience working with care on luxury properties and estates.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured for Peace of Mind</h4><p className="text-muted-foreground mt-2 text-sm">Our comprehensive insurance covers high-value properties.</p></div>
                <div><h4 className="font-semibold text-lg">Discreet & Professional</h4><p className="text-muted-foreground mt-2 text-sm">Our uniformed crews operate with the professionalism your neighborhood expects.</p></div>
                <div><h4 className="font-semibold text-lg">100% Compliant</h4><p className="text-muted-foreground mt-2 text-sm">We guarantee legal disposal in line with all Ekurhuleni by-laws.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Bedfordview Rubble Removal FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Serving Bedfordview and Surrounding Luxury Suburbs</h2>
            <p className="mt-2 text-muted-foreground">Our network provides premier site clearing services across the area.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg">Rubble Removal Johannesburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-sandton">Sandton Site Clearing</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-edenvale">Edenvale Rubble Removal</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-bedfordview">Bedfordview Demolition Services</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after rubble removal in Bedfordview" data-ai-hint="clean site bedfordview" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Schedule Your Bedfordview Site Clearing</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                    For a professional, discreet, and reliable rubble removal service in Bedfordview, contact the experts at SIMA Demolitions.
                </p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Quote className="mr-2" /> Get a Free On-Site Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Speak to a Specialist</a></Button>
                </div>
            </div>
        </section>
      </div>
    </>
  );
}
