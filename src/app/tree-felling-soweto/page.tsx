import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Do you offer affordable tree felling for homeowners in Soweto?", answer: "Yes, providing affordable and professional tree felling is a core part of our service to the Soweto community. We offer competitive pricing and free, no-obligation quotes to ensure our services are accessible to all residents." },
    { question: "Is your tree felling service available across all of Soweto?", answer: "Absolutely. Our teams serve all neighborhoods in Soweto, from Orlando and Diepkloof to Pimville and Dobsonville. We are proud to be a local contractor supporting homeowners and community projects across the entire area." },
    { question: "What happens to the wood after you cut down a tree in Soweto?", answer: "Our service includes cutting the larger logs into manageable pieces, which you are welcome to keep for firewood. We then clear and remove all the smaller branches and leaves, ensuring your property is left clean and safe. Our goal is to provide a complete, hassle-free service." }
];

export default function TreeFellingSowetoPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services Soweto</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects is proud to offer professional, affordable, and safe tree felling services to the entire Soweto community. We help homeowners protect their properties from dangerous or overgrown trees and clear land for new possibilities.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Tree Felling Services in Soweto</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Safely removing a tree in a Soweto yard" data-ai-hint="tree cutting soweto" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Affordable tree care for the Soweto community.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Safe Residential Tree Removal:** Felling of trees that are old, diseased, or pose a risk to your home.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Stump Removal:** We can remove the stump after felling to give you a completely clear and usable space.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Yard & Plot Clearing:** Clearing trees and overgrowth to prepare land for building or gardening.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Soweto?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Community Focused</h4><p className="text-muted-foreground mt-2 text-sm">We are committed to providing an accessible and reliable service for the people of Soweto.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable Pricing</h4><p className="text-muted-foreground mt-2 text-sm">Our rates are competitive to ensure professional service is within everyone's reach.</p></div>
                <div><h4 className="font-semibold text-lg">Insured for Safety</h4><p className="text-muted-foreground mt-2 text-sm">Our service is fully insured to protect your home and property.</p></div>
                <div><h4 className="font-semibold text-lg">Local Soweto Knowledge</h4><p className="text-muted-foreground mt-2 text-sm">Our teams know the area well, allowing for fast, efficient, and respectful service.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Tree Felling in Soweto</h2>
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
                <Button variant="outline" asChild><Link href="/tree-felling-roodepoort">Roodepoort</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-johannesburg-south">Johannesburg South</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-alberton">Alberton</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine yard after tree removal in Soweto" data-ai-hint="clean yard soweto" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Soweto Tree Removed Safely</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact SIMA for a free quote on affordable and professional tree felling in Soweto. We're here to help our community.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Removal</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/tree-felling-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Tree Felling Johannesburg</Link> | <Link href="/tree-felling-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
