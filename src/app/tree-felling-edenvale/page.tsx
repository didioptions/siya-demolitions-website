import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How fast can you provide a tree felling service in Edenvale?", answer: "We offer a rapid response service for Edenvale and the surrounding East Rand area. For non-emergencies, we can typically schedule a free assessment within 24-48 hours. For urgent situations like a fallen tree, we offer an emergency call-out service." },
    { question: "Do you remove trees in residential complexes in Greenstone and Edenvale?", answer: "Yes, we are highly experienced in working within residential complexes. We adhere to all body corporate rules, work with consideration for neighbors, and ensure our operation is clean, safe, and efficient." },
    { question: "Is your tree felling service insured?", answer: "Absolutely. SIMA Demolitions Projects is fully insured for all tree felling operations. This gives you complete peace of mind that your home and property are fully protected when you choose our professional service." }
];

export default function TreeFellingEdenvalePage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services Edenvale</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects is the go-to provider for safe, reliable, and insured tree felling services in Edenvale. We serve homeowners and businesses in Greenstone, the Avenues, and all surrounding suburbs with professional tree removal and site clearing.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Tree Felling Services in Edenvale</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="An arborist working safely on a tree in Edenvale" data-ai-hint="tree cutting edenvale" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Complete tree solutions for Edenvale properties.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Tree Removal:** Safe removal of overgrown, diseased, or badly placed trees.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Stump Grinding:** We remove stumps to leave your lawn perfectly level.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Emergency Tree Service:** Quick response for storm-damaged and hazardous trees.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Edenvale?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Fast Local Service</h4><p className="text-muted-foreground mt-2 text-sm">Our deep knowledge of Edenvale allows for quick dispatch and efficient service.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured</h4><p className="text-muted-foreground mt-2 text-sm">Our comprehensive insurance gives you total peace of mind for every job.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable Pricing</h4><p className="text-muted-foreground mt-2 text-sm">We offer clear, competitive quotes for all tree removal jobs in Edenvale.</p></div>
                <div><h4 className="font-semibold text-lg">Professional Team</h4><p className="text-muted-foreground mt-2 text-sm">Our trained and courteous staff ensure a hassle-free experience from start to finish.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Tree Felling in Edenvale</h2>
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
            <p className="mt-2 text-muted-foreground">Also serving areas near Edenvale.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/tree-felling-kempton-park">Kempton Park</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-bedfordview">Bedfordview</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-germiston">Germiston</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="A clean garden in Edenvale after tree felling" data-ai-hint="clean garden edenvale" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Edenvale Tree Removed</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For a fast, free quote on licensed and reliable tree felling in Edenvale, contact the experts at SIMA Demolitions today.</p>
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
