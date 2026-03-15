import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How do you protect large, established trees during work in Greenside?", answer: "We recognize that the beautiful, mature trees are a key feature of Greenside. When pruning or removing a nearby tree, we work with great care to protect the trees you want to keep. We use protective barriers and employ careful, controlled techniques to ensure no damage occurs to root systems or branches." },
    { question: "My property is adjacent to Parkview Golf Club. Do you take special precautions?", answer: "Absolutely. For properties bordering the golf course, we implement enhanced safety measures. This includes meticulous planning of the felling direction and using advanced rigging to ensure no material or debris drifts onto the course, respecting the club and its members at all times." },
    { question: "What is the best time of year to prune large trees in Greenside?", answer: "The best time for structural pruning is typically during the dormant winter months. However, removing dead, diseased, or dangerous branches can be done at any time of year. We can provide a professional assessment and recommend the best course of action for your specific trees." }
];

export default function TreeFellingGreensidePage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services Greenside</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects provides careful, professional tree felling services for the leafy suburb of Greenside. We specialize in working on properties with large, established trees, and those adjacent to the Parkview Golf Club, ensuring every job is done with precision and respect for the area's character.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Tree Felling Services in Greenside</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="An arborist carefully pruning a large tree in Greenside" data-ai-hint="tree pruning greenside" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Tree care that preserves Greenside's beauty.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Safe & Careful Tree Removal:** Precision felling of hazardous or unwanted trees.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Expert Pruning & Trimming:** Maintain the health and aesthetic of your mature trees.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Stump Grinding & Garden Cleanup:** We leave your garden neat and tidy after every job.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Greenside?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Garden & Tree Protection</h4><p className="text-muted-foreground mt-2 text-sm">We take special care to preserve the mature, leafy character of your property.</p></div>
                <div><h4 className="font-semibold text-lg">Golf Course Specialists</h4><p className="text-muted-foreground mt-2 text-sm">We have experience working on properties bordering golf courses, ensuring no disruption.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Insured</h4><p className="text-muted-foreground mt-2 text-sm">All our work is fully insured, giving you complete peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Local & Reliable</h4><p className="text-muted-foreground mt-2 text-sm">Our teams are familiar with the area and provide a dependable, neighborly service.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Tree Felling in Greenside</h2>
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
            <p className="mt-2 text-muted-foreground">We serve all the surrounding suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/tree-felling-parkhurst">Parkhurst</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-linden">Linden</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-rosebank">Rosebank</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="A beautiful Greenside garden after tree maintenance" data-ai-hint="beautiful garden" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get a Free Tree Felling Quote in Greenside</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us for a detailed, no-obligation quote from a trusted local contractor that respects the beauty and character of Greenside.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for a Consultation</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/tree-felling-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Tree Felling Johannesburg</Link> | <Link href="/tree-felling-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
