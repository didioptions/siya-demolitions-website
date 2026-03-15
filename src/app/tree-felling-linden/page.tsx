import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "My property in Linden is old. Are there special considerations for tree felling?", answer: "Yes, we work with great respect for Linden's classic homes and large, established gardens. We take extra care to protect adjacent structures and mature trees that are being kept. We can also advise if very old trees might have heritage considerations." },
    { question: "How do you manage tree felling on a busy street in Linden?", answer: "Safety and minimizing disruption are key. We use clear signage, secure the site perimeter, and manage our logistics to avoid blocking traffic where possible. Our team works efficiently and adheres to all municipal by-laws regarding work hours and noise to respect the neighborhood." },
    { question: "Can you just prune a large tree instead of removing it?", answer: "Absolutely. We offer professional tree pruning and trimming services in Linden to improve a tree's health, shape, and safety. This is often a great alternative to full removal for beautiful, established trees." }
];

export default function TreeFellingLindenPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services Linden</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects provides expert, insured tree felling services for the leafy suburb of Linden. We specialize in safely removing trees from large residential stands, always working with respect for Linden's established, family-friendly community.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Tree Felling Services in Linden</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Removing a tree from a large garden in Linden" data-ai-hint="garden tree linden" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Tree care that respects your Linden property.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Safe Tree Removal:** Professional felling of large, dangerous, or unwanted trees.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Tree Pruning & Maintenance:** We also offer trimming services to maintain the health and beauty of your trees.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Stump Grinding & Full Cleanup:** We leave your property clean, clear, and ready to enjoy.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Linden?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Garden Protection</h4><p className="text-muted-foreground mt-2 text-sm">We take special care to preserve the mature trees and landscaping that make Linden special.</p></div>
                <div><h4 className="font-semibold text-lg">Respectful Service</h4><p className="text-muted-foreground mt-2 text-sm">We work efficiently to minimize noise and disruption in your peaceful neighborhood.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Insured</h4><p className="text-muted-foreground mt-2 text-sm">All our work is fully insured for your complete peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Local & Reliable</h4><p className="text-muted-foreground mt-2 text-sm">Our teams are familiar with the area and provide a dependable, friendly service.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Tree Felling in Linden</h2>
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
                <Button variant="outline" asChild><Link href="/tree-felling-randburg">Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-greenside">Greenside</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-parkhurst">Parkhurst</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="A clean, clear garden in Linden after tree felling" data-ai-hint="clean garden linden" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get a Free Tree Felling Quote in Linden</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us for a detailed, no-obligation quote from a trusted local contractor that respects the beauty of Linden.</p>
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
