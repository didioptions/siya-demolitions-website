import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How fast can you respond to a tree felling request in Randburg?", answer: "We pride ourselves on our rapid response time in the Randburg area. For standard assessments, we can usually visit your property within 24-48 hours. For emergencies, such as a fallen or dangerous tree, we offer an urgent call-out service to secure your property as quickly as possible." },
    { question: "Do you offer services for both large and small trees?", answer: "Yes, our teams are equipped to handle trees of all sizes. From large, mature trees that require sectional dismantling to smaller trees and shrubs that need to be cleared, we provide a safe and efficient service for any residential or commercial property in Randburg." },
    { question: "Is your tree felling service insured?", answer: "Absolutely. SIMA Demolitions Projects is fully insured for all tree felling operations. This comprehensive insurance covers your property against any unlikely damages, providing you with complete peace of mind when you hire our professional team." }
];

export default function TreeFellingRandburgPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services Randburg</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects offers fast, reliable, and professional tree felling services throughout Randburg. Whether you have a dangerous tree threatening your property, need to clear space for a renovation, or require stump grinding, our licensed and insured teams are ready to assist.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Tree Felling Services in Randburg</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Safe tree removal in a Randburg suburb" data-ai-hint="tree cutting randburg" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Complete tree care and removal for Randburg properties.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Tree Removal:** Safe felling of unwanted or hazardous trees in suburban gardens.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Stump Grinding:** Complete removal of tree stumps to leave your lawn level and clear.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Site & Vegetation Clearing:** Preparing plots of land for new construction or landscaping projects.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Randburg?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Local Randburg Teams</h4><p className="text-muted-foreground mt-2 text-sm">Our local presence ensures a fast response time and familiarity with the area.</p></div>
                <div><h4 className="font-semibold text-lg">Safety Certified</h4><p className="text-muted-foreground mt-2 text-sm">Our crews are trained in the latest safety techniques for property protection.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Insured</h4><p className="text-muted-foreground mt-2 text-sm">We are fully compliant, giving you total peace of mind during the project.</p></div>
                <div><h4 className="font-semibold text-lg">Thorough Cleanup</h4><p className="text-muted-foreground mt-2 text-sm">We remove all wood, branches, and debris, leaving your site spotless.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Tree Felling in Randburg</h2>
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
            <p className="mt-2 text-muted-foreground">Serving the greater Northern and Western Suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/tree-felling-sandton">Sandton</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-roodepoort">Roodepoort</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-fourways">Fourways</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine yard after tree removal in Randburg" data-ai-hint="clean yard randburg" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Randburg Tree Problem Solved</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For safe, reliable, and professional tree felling services in Randburg, contact the experts at SIMA Demolitions.</p>
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
