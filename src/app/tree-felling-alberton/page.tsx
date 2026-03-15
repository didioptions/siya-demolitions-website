import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How do you handle tree felling in Alberton's established suburbs?", answer: "We take great care in suburbs like Meyersdal and Brackenhurst. Our teams use sectional dismantling to remove trees in pieces, preventing any damage to established gardens, walls, pools, and neighboring properties. Protecting your property is our main focus." },
    { question: "Are your tree felling services insured for work in Alberton?", answer: "Yes, we are fully insured for all tree felling operations. This comprehensive insurance gives our Alberton clients complete peace of mind, knowing their property is protected against any unforeseen incidents." },
    { question: "Do you offer emergency tree removal in Alberton after storms?", answer: "Yes, we provide an emergency call-out service for storm-damaged or fallen trees in Alberton and the East Rand. We act quickly to assess and remove the hazardous tree, securing your property and preventing further damage." }
];

export default function TreeFellingAlbertonPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services Alberton</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects offers professional, safe, and insured tree felling services across Alberton and the East Rand. We are the local experts for removing dangerous, overgrown, or unwanted trees from residential and commercial properties.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Tree Felling Services in Alberton</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Professional arborist removing a tree in Alberton" data-ai-hint="tree cutting alberton" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Full-service tree care for Alberton properties.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential & Estate Tree Felling:** Safe removal of trees from gardens and properties in secure estates.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Stump Grinding & Removal:** We clear the stump completely, leaving your yard ready for anything.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Full Site Cleanup:** Our service includes the removal of all wood, branches, and leaves.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Alberton?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Local East Rand Experts</h4><p className="text-muted-foreground mt-2 text-sm">Our teams provide fast, reliable, and knowledgeable service in Alberton.</p></div>
                <div><h4 className="font-semibold text-lg">Safety as a Priority</h4><p className="text-muted-foreground mt-2 text-sm">We use proven techniques to protect your home, family, and property.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured</h4><p className="text-muted-foreground mt-2 text-sm">Our comprehensive insurance offers complete peace of mind for every job.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable & Reliable</h4><p className="text-muted-foreground mt-2 text-sm">We provide competitive quotes and a service you can count on.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Tree Felling in Alberton</h2>
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
            <p className="mt-2 text-muted-foreground">Serving the entire East Rand.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/tree-felling-germiston">Germiston</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-boksburg">Boksburg</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-benoni">Benoni</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine yard after tree removal in Alberton" data-ai-hint="clean yard alberton" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Alberton Tree Removed Professionally</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For safe, insured, and reliable tree felling in Alberton, contact the local experts at SIMA Demolitions.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Emergency</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/tree-felling-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Tree Felling Johannesburg</Link> | <Link href="/tree-felling-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
