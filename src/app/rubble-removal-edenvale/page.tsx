import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, Trash2, ShieldCheck, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How fast can you provide rubble removal in Edenvale?",
        answer: "We prioritize a rapid response for our clients in Edenvale. In most cases, we can offer same-day or next-day service, especially for standard residential or commercial loads. Our local East Rand teams are familiar with all areas, from Greenstone Hill to the Avenues, allowing for efficient dispatch. To ensure the quickest service, we recommend calling us as early as possible to schedule your pickup. Our goal is to clear your site promptly so your project can continue without delay."
    },
    {
        question: "Do you handle small rubble loads from DIY projects in Edenvale?",
        answer: "Yes, absolutely. No job is too small for our Edenvale rubble removal service. We cater to homeowners who need to clear debris after a weekend DIY project, a garden cleanup, or a small renovation. Our pricing is based on the volume of rubble, making it a cost-effective solution for smaller loads. We provide the same professional, licensed service for a small pile of bricks as we do for a large construction site, ensuring everyone has access to legal and responsible waste disposal."
    },
    {
        question: "Is your team equipped to work in Edenvale's commercial areas?",
        answer: "Yes, we are fully equipped and experienced in providing rubble removal for commercial properties in Edenvale. This includes clearing waste from retail strip-outs, office renovations, and small-scale commercial construction sites. We understand the importance of working efficiently to minimize disruption to your business and neighboring tenants. Our team can schedule collections during or after business hours to suit your operational needs, providing a flexible and professional service."
    }
];

export default function RubbleRemovalEdenvalePage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal in Edenvale, Johannesburg</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <ShieldCheck /> Fast, Licensed & Insured Site Clearing
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Free Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for Quick Clearance</a>
                </Button>
            </div>
             {heroImage && <div className="mt-8 max-w-4xl mx-auto"><Image src={heroImage.imageUrl} alt="Rubble removal and site clearing in Edenvale" data-ai-hint="rubble removal edenvale" width={1200} height={600} className="rounded-lg shadow-lg" /></div>}
        </section>

        <section className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
                For fast, professional, and licensed rubble removal in Edenvale, look no further than SIMA Demolitions Projects. We serve the entire Edenvale area, from the bustling commercial centers around Greenstone to the quiet residential streets of the Avenues. Our teams are equipped to handle construction debris, garden refuse, and renovation waste, ensuring your property is left spotless and safe. We operate in full compliance with the City of Ekurhuleni's regulations, providing a reliable service that contractors and homeowners in Edenvale can trust.
            </p>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Site Clearing Services in Edenvale</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing construction debris in Edenvale" data-ai-hint="site clearing edenvale" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4">Your Local Edenvale Rubble Experts</h3>
                    <p className="text-muted-foreground mb-4">We provide a comprehensive range of rubble removal services in Edenvale.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Cleanups:** We efficiently remove waste from home renovations, garden makeovers, and general yard clearing in Edenvale.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Commercial & Retail Debris:** Our teams handle rubble from shop-fittings, office renovations, and commercial construction projects.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Construction Site Support:** We offer scheduled collections for builders and developers in Edenvale to maintain a productive and safe work environment.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose SIMA in Edenvale?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Fast Local Service</h4><p className="text-muted-foreground mt-2 text-sm">Our deep knowledge of Edenvale allows for quick dispatch and efficient service.</p></div>
                <div><h4 className="font-semibold text-lg">Ekurhuleni Compliant</h4><p className="text-muted-foreground mt-2 text-sm">We are a fully licensed waste carrier, ensuring your rubble is disposed of legally.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable Pricing</h4><p className="text-muted-foreground mt-2 text-sm">We offer clear, competitive quotes for all rubble removal jobs in Edenvale.</p></div>
                <div><h4 className="font-semibold text-lg">Professional Team</h4><p className="text-muted-foreground mt-2 text-sm">Our trained and courteous staff ensure a hassle-free experience from start to finish.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Edenvale Rubble Removal FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Also Serving Areas Near Edenvale</h2>
            <p className="mt-2 text-muted-foreground">Our service network covers the entire East Rand and beyond.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg">Rubble Removal Johannesburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-kempton-park">Kempton Park Rubble Removal</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-bedfordview">Bedfordview Site Clearing</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-edenvale">Edenvale Demolition Services</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Cleared site in Edenvale" data-ai-hint="clean site edenvale" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Edenvale Site Cleared Today</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                    For a fast, free quote on licensed and reliable rubble removal in Edenvale, contact the experts at SIMA Demolitions today.
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
