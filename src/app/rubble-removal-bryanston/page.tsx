import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, Trash2, ShieldCheck, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How do you handle rubble removal in Bryanston's secure estates?",
        answer: "We are experts in operating within the secure estates of Bryanston. Our process involves direct coordination with estate management to ensure full compliance with their rules on work hours, noise, and vehicle access. Our teams are professional, discreet, and take great care to protect paving, landscaping, and other property features, delivering a service that meets the high standards of these communities."
    },
    {
        question: "Can you provide a fast rubble removal service for a renovation in Bryanston?",
        answer: "Yes, we provide a rapid and affordable service for homeowners in Bryanston. Whether you're clearing debris from a kitchen renovation, a garden cleanup, or a small DIY project, we can typically schedule a same-day or next-day collection. No job is too small, and our pricing is based on the volume of rubble, making it a cost-effective choice for residential cleanups."
    },
    {
        question: "Is your rubble removal service licensed for work in the Bryanston area?",
        answer: "Absolutely. SIMA Demolitions Projects is a fully licensed waste carrier with the City of Johannesburg. This is your guarantee that all rubble from your Bryanston property will be transported and disposed of legally and responsibly at a registered facility. This compliance protects you from the risk of fines for illegal dumping and ensures your project is handled professionally."
    }
];

export default function RubbleRemovalBryanstonPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal in Bryanston, Johannesburg</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <ShieldCheck /> Estate, Residential & Commercial Site Clearing
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Free Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for Quick Clearance</a>
                </Button>
            </div>
             {heroImage && <div className="mt-8 max-w-4xl mx-auto"><Image src={heroImage.imageUrl} alt="Rubble removal from a secure estate in Bryanston" data-ai-hint="rubble removal bryanston" width={1200} height={600} className="rounded-lg shadow-lg" /></div>}
        </section>

        <section className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
                Keep your project in Bryanston moving with fast, professional, and licensed rubble removal from SIMA Demolitions Projects. We specialize in serving the needs of this dynamic area, from clearing renovation debris in secure lifestyle estates to managing waste for commercial developments. Our local teams understand the high standards of the Bryanston community and deliver a discreet, efficient, and fully compliant service every time, leaving your site impeccably clean and safe.
            </p>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Bryanston Site Clearing Services</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing a site in a Bryanston estate" data-ai-hint="site clearing bryanston" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4">Specialized Solutions for the Bryanston Area</h3>
                    <p className="text-muted-foreground mb-4">We handle all types of rubble removal projects in Bryanston.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Secure Estate Cleanups:** We are experts at working within the rules of Bryanston's premier estates.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Renovation Debris:** Fast, affordable removal of rubble from home improvement projects, big or small.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Commercial & Retail Site Clearing:** Supporting the numerous commercial and retail developments in the Bryanston area.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose SIMA in Bryanston?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Estate Specialists</h4><p className="text-muted-foreground mt-2 text-sm">We have proven experience working respectfully and efficiently within secure estates.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Compliant</h4><p className="text-muted-foreground mt-2 text-sm">Fully licensed by the CoJ, we protect you from the risks of illegal dumping.</p></div>
                <div><h4 className="font-semibold text-lg">Fast & Local</h4><p className="text-muted-foreground mt-2 text-sm">Our nearby teams provide a rapid response to keep your Bryanston project on track.</p></div>
                <div><h4 className="font-semibold text-lg">Professional & Discreet</h4><p className="text-muted-foreground mt-2 text-sm">Our uniformed crews work with minimal disruption to you and your neighbors.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Bryanston Rubble Removal FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Serving the Greater Northern Suburbs</h2>
            <p className="mt-2 text-muted-foreground">Our service network connects all key areas around Bryanston.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg">Rubble Removal Johannesburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-sandton">Sandton Site Clearing</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-fourways">Fourways Rubble Removal</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-bryanston">Bryanston Demolition Services</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Cleared residential site in Bryanston" data-ai-hint="clean site bryanston" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Bryanston Property Cleared Today</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                    For a professional, licensed, and reliable rubble removal service in Bryanston, contact the experts at SIMA Demolitions.
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
