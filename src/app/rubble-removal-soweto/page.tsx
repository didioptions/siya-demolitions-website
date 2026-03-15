import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Do you offer affordable rubble removal for homeowners in Soweto?",
        answer: "Yes, providing affordable and accessible rubble removal is a cornerstone of our service in Soweto. We offer competitive, transparent pricing for all residential jobs, no matter the size, to ensure professional waste management is available to everyone."
    },
    {
        question: "Are your rubble removal services available across all of Soweto?",
        answer: "Absolutely. Our teams are proud to serve every part of Soweto, from Orlando and Diepkloof to Pimville and beyond. Our local knowledge allows us to provide a fast and efficient service, navigating the area with ease to reach your home or construction site promptly."
    },
    {
        question: "What happens to the rubble you collect in Soweto?",
        answer: "We are committed to responsible and legal waste disposal. All rubble collected from your property in Soweto is transported to a registered City of Johannesburg disposal or recycling facility. This professional approach protects you from fines and ensures your project is handled in an environmentally conscious way."
    }
];

export default function RubbleRemovalSowetoPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal Services Soweto</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects is proud to offer reliable and affordable rubble removal services throughout Soweto. We support homeowners, small businesses, and community projects by providing professional site clearing that is both accessible and compliant.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Rubble Removal Services in Soweto</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Residential site clearing in Soweto" data-ai-hint="site clearing soweto" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Debris management for a growing Soweto.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Rubble Removal:** Affordable clearing of waste from home improvements, extensions, and yard cleanups.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Small Business & Construction Support:** Reliable rubble removal for new buildings, local businesses, and community projects.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garden & Garage Clean-Up:** We clear plots of land of debris and overgrowth to prepare them for new use.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Soweto?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Community Focused</h4><p className="text-muted-foreground mt-2 text-sm">We are committed to providing an accessible and reliable service for the people of Soweto.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable Pricing</h4><p className="text-muted-foreground mt-2 text-sm">Our rates are competitive to ensure professional service is within reach for everyone.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Legal</h4><p className="text-muted-foreground mt-2 text-sm">We are fully compliant with CoJ regulations, ensuring your waste is handled responsibly.</p></div>
                <div><h4 className="font-semibold text-lg">Local Soweto Knowledge</h4><p className="text-muted-foreground mt-2 text-sm">Our teams know the area well, allowing for fast, efficient, and respectful service.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Rubble Removal in Soweto</h2>
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
            <p className="mt-2 text-muted-foreground">Serving Soweto and its neighbours.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-roodepoort">Roodepoort</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg-cbd">Johannesburg CBD</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-alberton">Alberton</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after rubble removal in Soweto" data-ai-hint="clean site soweto" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Soweto Property Cleared</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact SIMA for a free quote on affordable and licensed rubble removal in Soweto. We're here to help our community build and grow.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Pickup</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/rubble-removal-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Rubble Removal Johannesburg</Link> | <Link href="/rubble-removal-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
