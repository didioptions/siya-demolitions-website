import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, Trash2, ShieldCheck, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Do you handle small rubble loads from home renovations in Randburg?",
        answer: "Yes, absolutely. We specialize in catering to homeowners and small contractors in Randburg. Whether you've just renovated a bathroom, cleared your garden, or have a pile of bricks from a DIY project, we offer an affordable and fast solution. No job is too small. Our pricing is based on volume, ensuring you only pay for what you need removed, making it a cost-effective choice for residential cleanups in suburbs like Ferndale, Linden, and Blairgowrie."
    },
    {
        question: "How fast is your rubble removal service in the Randburg area?",
        answer: "We prioritize quick and efficient service across Randburg. Thanks to our locally-based teams, we can typically offer same-day or next-day rubble removal, depending on your exact location and our schedule. We understand that leftover rubble can be a nuisance and a safety hazard, so we work hard to clear your property as quickly as possible. Calling us directly is the best way to secure the earliest available collection slot for your home or site."
    },
    {
        question: "Is your rubble removal service in Randburg licensed and insured?",
        answer: "Yes, 100%. SIMA Demolitions Projects is a fully licensed waste carrier, compliant with all City of Johannesburg by-laws. Our service includes comprehensive insurance, giving you complete peace of mind. Using a licensed provider is crucial as it protects you from any liability associated with illegal dumping. We guarantee that all rubble from your Randburg property is transported to a registered, environmentally-sound disposal facility."
    }
];

export default function RubbleRemovalRandburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal in Randburg, Johannesburg</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <ShieldCheck /> Fast, Affordable & Licensed Site Clearing
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Free Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for Quick Clearance</a>
                </Button>
            </div>
             {heroImage && <div className="mt-8 max-w-4xl mx-auto"><Image src={heroImage.imageUrl} alt="Rubble removal from a residential property in Randburg" data-ai-hint="rubble removal randburg" width={1200} height={600} className="rounded-lg shadow-lg" /></div>}
        </section>

        <section className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
                SIMA Demolitions Projects is the top choice for fast, affordable, and licensed rubble removal in Randburg. We serve the entire Randburg area, providing homeowners, contractors, and businesses with a hassle-free solution for clearing construction debris, garden refuse, and renovation waste. From Ferndale to Northcliff, our local teams understand the community's needs and ensure every job is completed professionally and in compliance with all City of Johannesburg regulations, leaving your site clean and safe.
            </p>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Randburg Rubble Removal Services</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing garden refuse in Randburg" data-ai-hint="garden clearing randburg" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4">Residential & Commercial Site Clearing</h3>
                    <p className="text-muted-foreground mb-4">We provide a complete waste clearing service for any project in Randburg.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Home Renovation Debris:** Quick removal of tiles, bricks, and drywall from your home improvement project.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garden & Yard Refuse:** We clear soil, branches, and other organic waste to tidy up your property.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Building Site Cleanups:** Reliable support for contractors needing to keep their Randburg sites clear and safe.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose SIMA in Randburg?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Fast Local Teams</h4><p className="text-muted-foreground mt-2 text-sm">Our Randburg-based crews ensure a rapid response for your site clearing needs.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable for All Jobs</h4><p className="text-muted-foreground mt-2 text-sm">We offer competitive pricing for both small residential jobs and larger construction sites.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Licensed</h4><p className="text-muted-foreground mt-2 text-sm">We comply with all CoJ waste disposal laws, protecting you from any legal risks.</p></div>
                <div><h4 className="font-semibold text-lg">Professional & Reliable</h4><p className="text-muted-foreground mt-2 text-sm">We pride ourselves on providing a dependable, hassle-free service from start to finish.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Randburg Rubble Removal FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Serving the Northern Suburbs</h2>
            <p className="mt-2 text-muted-foreground">Our teams cover all of the surrounding northern Johannesburg areas.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg">Rubble Removal Johannesburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-sandton">Sandton Site Clearing</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-roodepoort">Roodepoort Rubble Removal</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-randburg">Randburg Demolition Services</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Cleared residential site in Randburg" data-ai-hint="clean site randburg" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Randburg Property Cleared Today</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                    Contact SIMA for a fast, free, and no-obligation quote on licensed rubble removal in Randburg. Let's get your space cleared.
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
