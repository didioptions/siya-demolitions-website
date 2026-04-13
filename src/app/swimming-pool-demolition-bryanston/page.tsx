
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
    { question: "How do you operate within Bryanston's secure lifestyle and golf estates?", answer: "We are highly experienced in adhering to the strict HOA rules of Bryanston's secure estates. Our operators are professional and discreet, and we coordinate all work with estate management to ensure compliance with rules on noise, access, and working hours." },
    { question: "Can you remove a large pool without damaging my established garden?", answer: "Yes, this is our expertise. We use precision equipment and protective measures to ensure your valuable landscaping, paving, and other property features are completely protected during the pool removal process." },
    { question: "Is your team insured for work on high-value Bryanston properties?", answer: "Absolutely. We carry comprehensive insurance coverage specifically for high-value residential properties, giving you complete confidence and peace of mind when we operate on your property." }
];

export default function DemolitionBryanstonPage() {
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Bryanston</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <ShieldCheck /> The Trusted Swimming Pool Demolition Specialist in Bryanston
            </p>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions provides a premier pool demolition service for Bryanston, defined by precision, discretion, and the high standards expected in Johannesburg's northern suburbs. Removing your pool allows you to reclaim valuable outdoor space, reduce maintenance costs, and prepare your property for new development or landscaping. Most swimming pool demolition projects are completed within a few days, depending on size and site access.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Professional Quote</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><Quote className="mr-2"/>WhatsApp for a Fast Quote</a>
                </Button>
            </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Pool Removal in Bryanston?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Estate Specialists</h3><p className="text-sm text-muted-foreground">Experienced in working respectfully and efficiently within Bryanston's secure estates.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Property Protection</h3><p className="text-sm text-muted-foreground">We take extreme care to protect your valuable landscaping and home.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fully Insured</h3><p className="text-sm text-muted-foreground">Our high-value insurance policy gives you complete peace of mind.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">All-Inclusive Service</h3><p className="text-sm text-muted-foreground">Our quotes include demolition, complete rubble removal, and site cleanup.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Engineering Grade Finish</h3><p className="text-sm text-muted-foreground">Proper backfilling and compaction ensures the ground is safe for future building.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Local Experts</h3><p className="text-sm text-muted-foreground">Experienced swimming pool demolition contractors serving Bryanston and surrounding areas.</p></div></div>
            </div>
        </section>

        <section id="process" className="py-12 md:py-20">
             <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">How Swimming Pool Demolition Works</h2>
                    <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">Our 4-step process ensures a safe, clean, and professional result every time.</p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto text-center">
                    <div className="flex flex-col items-center gap-2"><div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-12 w-12 text-lg font-bold">1</div><h3 className="font-semibold mt-2">Drain & Prepare</h3><p className="text-sm text-muted-foreground">The pool is fully drained and the site is prepared for safe demolition.</p></div>
                    <div className="flex flex-col items-center gap-2"><div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-12 w-12 text-lg font-bold">2</div><h3 className="font-semibold mt-2">Break & Remove Structure</h3><p className="text-sm text-muted-foreground">The pool shell and paving are carefully broken up and removed.</p></div>
                    <div className="flex flex-col items-center gap-2"><div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-12 w-12 text-lg font-bold">3</div><h3 className="font-semibold mt-2">Remove Rubble</h3><p className="text-sm text-muted-foreground">All demolition debris is loaded and transported off-site.</p></div>
                    <div className="flex flex-col items-center gap-2"><div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-12 w-12 text-lg font-bold">4</div><h3 className="font-semibold mt-2">Backfill & Compact</h3><p className="text-sm text-muted-foreground">The area is filled and professionally compacted, leaving the site level and safe.</p></div>
                </div>
            </div>
        </section>

        <section id="cost" className="py-12 md:py-16 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Swimming Pool Demolition Costs</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">Pool demolition costs vary based on size and structure. Typical projects range from **R8,000 to R25,000+**. We provide free quotes after a site inspection.</p>
                <div className="text-center">
                  <p className="font-semibold text-foreground">✔ Proper backfilling and compaction done to support future building or landscaping</p>
                </div>
            </div>
        </section>

        <section id="recent-projects" className="py-12 md:py-20 bg-background rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Projects</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card><CardHeader><CardTitle>✔ Bryanston – Full swimming pool demolition and site preparation</CardTitle></CardHeader></Card>
                    <Card><CardHeader><CardTitle>✔ <Link href="/swimming-pool-demolition-sandton" className="text-primary hover:underline">Sandton</Link> – Fibreglass pool removal and backfill</CardTitle></CardHeader></Card>
                    <Card><CardHeader><CardTitle>✔ <Link href="/swimming-pool-demolition-fourways" className="text-primary hover:underline">Fourways</Link> – Concrete pool demolition and rubble removal</CardTitle></CardHeader></Card>
                </div>
            </div>
        </section>

        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Pool Demolition in Bryanston</h2>
            <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Request a professional quote today for safe and reliable swimming pool demolition in Bryanston.</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Get fast quotes and reliable service from the trusted local experts.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone /> Call Now: 078 429 2760</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
        
        <div className="mt-12 text-center">
            <Link href="/swimming-pool-demolition-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Pool Demolition Johannesburg</Link> | <Link href="/swimming-pool-demolition-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
