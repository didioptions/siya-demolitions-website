import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, Trash2, ShieldCheck, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How do you handle rubble removal in Centurion's secure estates?",
        answer: "We are highly experienced in working within Centurion's many secure residential estates. Our teams liaise with estate management to ensure full compliance with all rules regarding access, work hours, and noise. We use appropriate-sized vehicles and take great care to protect paving, gardens, and other properties during the loading process. Our professional approach ensures a smooth, discreet, and hassle-free rubble removal service for all estate residents."
    },
    {
        question: "Is your rubble removal service in Centurion compliant with City of Tshwane regulations?",
        answer: "Yes, 100%. SIMA Demolitions Projects is a fully licensed waste carrier and operates in strict accordance with all City of Tshwane municipal by-laws. We ensure that all construction debris, soil, and other waste collected in Centurion is transported to and disposed of at registered, compliant landfill and recycling facilities. This protects you, the client, from any legal liability and ensures your project is environmentally responsible."
    },
    {
        question: "Can you provide rubble removal for large development sites in Centurion?",
        answer: "Absolutely. We are equipped to handle large-scale site clearing and ongoing rubble removal for commercial and residential developments across Centurion. We can provide multiple trucks and schedule regular collections to keep your site clean, safe, and productive. Our service is scalable to meet the demands of any project, making us a reliable partner for developers and principal contractors in the fast-growing Centurion area."
    }
];

export default function RubbleRemovalCenturionPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal in Centurion, Gauteng</h1>
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
             {heroImage && <div className="mt-8 max-w-4xl mx-auto"><Image src={heroImage.imageUrl} alt="Rubble removal and site clearing in Centurion" data-ai-hint="rubble removal centurion" width={1200} height={600} className="rounded-lg shadow-lg" /></div>}
        </section>

        <section className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
                SIMA Demolitions Projects offers professional and reliable rubble removal services throughout Centurion. In a rapidly developing area known for its residential estates and commercial hubs, maintaining a clean and safe site is paramount. We provide licensed site clearing for homeowners, contractors, and developers, handling everything from construction debris to garden refuse. Our teams are experts in navigating secure estates and complying with all City of Tshwane regulations, ensuring your project proceeds smoothly.
            </p>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Rubble Removal Services in Centurion</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing a construction site in a Centurion estate" data-ai-hint="site clearing centurion" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4">Debris Management for Centurion's Needs</h3>
                    <p className="text-muted-foreground mb-4">We provide tailored rubble removal for any project type in Centurion.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Estate Rubble Removal:** Discreet and compliant clearing for homes within secure estates like Irene and Highveld.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Commercial Site Clearing:** Supporting new developments and business parks with large-scale, scheduled rubble removal.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential & Garden Waste:** Fast and affordable service for homeowners doing renovations or landscaping projects.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose SIMA in Centurion?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Estate Work Specialists</h4><p className="text-muted-foreground mt-2 text-sm">We are experts at working within the rules and standards of Centurion's secure residential estates.</p></div>
                <div><h4 className="font-semibold text-lg">Tshwane Compliant</h4><p className="text-muted-foreground mt-2 text-sm">Fully licensed and insured, we guarantee legal disposal in line with all City of Tshwane by-laws.</p></div>
                <div><h4 className="font-semibold text-lg">Fast & Local Service</h4><p className="text-muted-foreground mt-2 text-sm">Our local teams ensure a quick response to keep your Centurion project on schedule.</p></div>
                <div><h4 className="font-semibold text-lg">Professional Crews</h4><p className="text-muted-foreground mt-2 text-sm">Our trained, uniformed staff provide a reliable and respectful service every time.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Centurion Rubble Removal FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Serving Gauteng and Beyond</h2>
            <p className="mt-2 text-muted-foreground">Our service network extends across the major metropolitan areas.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg">Rubble Removal Johannesburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-midrand">Midrand Site Clearing</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-centurion">Centurion Demolition Services</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Main Demolition Page</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Cleared construction site in Centurion" data-ai-hint="clean site centurion" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Centurion Site Cleared Today</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                    Contact SIMA for a free, no-obligation quote on professional rubble removal in Centurion. We're ready to help you move your project forward.
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
