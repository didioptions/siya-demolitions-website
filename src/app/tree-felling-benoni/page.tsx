import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "What is your main service area in Benoni?", answer: "We serve all of Benoni and its surrounding suburbs, including Rynfield, Farrarmere, and Lakefield. Our local East Rand teams ensure a fast response for any tree felling or site clearing project." },
    { question: "Do you take special precautions when working near Benoni's lakes?", answer: "Yes, we take extra care when felling trees near any water body. Our site plan includes measures to ensure no branches or debris fall into the water, protecting the local environment while we work safely." },
    { question: "Is your tree felling service affordable for homeowners in Benoni?", answer: "Absolutely. We pride ourselves on offering competitive and transparent pricing. We provide free, no-obligation quotes so you know the full cost upfront, making professional tree felling accessible for all residents in Benoni." }
];

export default function TreeFellingBenoniPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services Benoni</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects offers reliable and professional tree felling services in Benoni. As a trusted local contractor on the East Rand, we specialize in the safe removal of trees from residential, commercial, and agricultural properties.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Tree Felling Services in Benoni</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="An arborist working on a large tree in Benoni" data-ai-hint="tree felling benoni" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Complete tree solutions for your Benoni property.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential & Smallholding Tree Removal:** Safe felling of trees on properties of all sizes.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Stump Grinding & Removal:** We leave your property clean and level by completely removing the stump.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Full Cleanup Included:** Our service includes the removal of all wood, branches and debris.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Benoni?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Local Benoni Experts</h4><p className="text-muted-foreground mt-2 text-sm">Our teams know Benoni's suburbs, ensuring prompt arrivals and efficient service.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured</h4><p className="text-muted-foreground mt-2 text-sm">Our comprehensive insurance gives you complete peace of mind for every job.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable Quotes</h4><p className="text-muted-foreground mt-2 text-sm">We provide competitive, transparent pricing for all tree felling jobs in Benoni.</p></div>
                <div><h4 className="font-semibold text-lg">Reliable & Professional</h4><p className="text-muted-foreground mt-2 text-sm">Count on our experienced, uniformed crews to get the job done safely and correctly.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Tree Felling in Benoni</h2>
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
            <p className="mt-2 text-muted-foreground">Proudly serving the East Rand.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/tree-felling-boksburg">Boksburg</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-kempton-park">Kempton Park</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-springs">Springs</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="A clean yard in Benoni after tree felling" data-ai-hint="clean yard benoni" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Benoni Tree Removed by Experts</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact SIMA for a professional, no-obligation quote on tree felling in Benoni. Let's make your property safe and beautiful.</p>
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
