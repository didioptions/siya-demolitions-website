import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, Trash2, ShieldCheck, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Do you offer affordable rubble removal for homeowners in Soweto?",
        answer: "Yes, providing affordable and accessible rubble removal is a cornerstone of our service in Soweto. We understand the needs of the community and offer competitive, transparent pricing for all residential jobs, no matter the size. Whether you're clearing a small amount of debris from a home project or need a full yard cleanup, we provide a cost-effective solution to ensure professional waste management is available to everyone."
    },
    {
        question: "Are your rubble removal services available across all of Soweto?",
        answer: "Absolutely. Our teams are proud to serve every part of Soweto, from Orlando and Diepkloof to Pimville and beyond. As a Johannesburg-based company with a strong community focus, we ensure our services are available throughout the township. Our local knowledge allows us to provide a fast and efficient service, navigating the area with ease to reach your home or construction site promptly."
    },
    {
        question: "What happens to the rubble you collect in Soweto?",
        answer: "We are committed to responsible and legal waste disposal. All rubble, debris, and refuse collected from your property in Soweto is transported to a registered City of Johannesburg disposal or recycling facility. We strictly adhere to all environmental regulations to prevent illegal dumping, which harms our community. This professional approach protects you from fines and ensures your project is handled in an environmentally conscious way."
    }
];

export default function RubbleRemovalSowetoPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal in Soweto, Johannesburg</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <ShieldCheck /> Affordable, Licensed & Community-Focused Site Clearing
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Free Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for Quick Clearance</a>
                </Button>
            </div>
             {heroImage && <div className="mt-8 max-w-4xl mx-auto"><Image src={heroImage.imageUrl} alt="Rubble removal team working in Soweto" data-ai-hint="rubble removal soweto" width={1200} height={600} className="rounded-lg shadow-lg" /></div>}
        </section>

        <section className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
                SIMA Demolitions Projects is proud to offer reliable and affordable rubble removal services throughout Soweto. We are dedicated to supporting homeowners, small businesses, and community projects by providing professional site clearing that is both accessible and compliant. From construction debris in new housing developments to renovation waste from a family home, our licensed team ensures your property is cleared safely and efficiently. We handle all waste responsibly, helping to keep Soweto clean and supporting its continued growth.
            </p>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Community-Focused Services in Soweto</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing a residential site in Soweto" data-ai-hint="site clearing soweto" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4">Debris Management for a Growing Soweto</h3>
                    <p className="text-muted-foreground mb-4">We provide a range of essential site clearing services for the community.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Rubble Removal:** Affordable clearing of waste from home improvements, extensions, and yard cleanups.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Small Business & Construction Support:** Reliable rubble removal for new buildings, local businesses, and community projects.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**General Site & Land Clearing:** We clear plots of land of debris and overgrowth to prepare them for new use.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose SIMA in Soweto?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Community Focused</h4><p className="text-muted-foreground mt-2 text-sm">We are committed to providing an accessible and reliable service for the people of Soweto.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable Pricing</h4><p className="text-muted-foreground mt-2 text-sm">Our rates are competitive to ensure professional service is within reach for everyone.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Legal</h4><p className="text-muted-foreground mt-2 text-sm">We are fully compliant with CoJ regulations, ensuring your waste is handled responsibly.</p></div>
                <div><h4 className="font-semibold text-lg">Local Soweto Knowledge</h4><p className="text-muted-foreground mt-2 text-sm">Our teams know the area well, allowing for fast, efficient, and respectful service.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Soweto Rubble Removal FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Serving Soweto and Its Neighbours</h2>
            <p className="mt-2 text-muted-foreground">Our services extend across southern and western Johannesburg.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg">Rubble Removal Johannesburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-roodepoort">Roodepoort Site Clearing</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg-cbd">Johannesburg CBD Services</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-soweto">Soweto Demolition Services</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Cleared residential site in Soweto" data-ai-hint="clean site soweto" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Soweto Property Cleared Today</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                    Contact SIMA for a free quote on affordable and licensed rubble removal in Soweto. We're here to help our community build and grow.
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
