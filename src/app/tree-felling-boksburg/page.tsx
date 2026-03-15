import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How much does tree felling cost in Boksburg?", answer: "The cost depends on the tree's size, accessibility, and the complexity of the job. We offer free, no-obligation quotes to provide you with a precise and competitive price for your specific needs in Boksburg." },
    { question: "Can you remove trees in residential complexes in Boksburg?", answer: "Yes, we are experienced in working within residential complexes and estates in areas like Sunward Park. We follow all body corporate rules, work with consideration for neighbors, and ensure a clean and safe removal process." },
    { question: "Is your tree felling service fully insured?", answer: "Absolutely. We are fully insured for all our operations. This gives you complete peace of mind that your property is protected when our team is on-site." }
];

export default function TreeFellingBoksburgPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services Boksburg</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects is your trusted local expert for safe and professional tree felling in Boksburg. We provide reliable and affordable tree removal, stump grinding, and site clearing services for homes and businesses across the East Rand.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Tree Felling Services in Boksburg</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Safely felling a tree in a Boksburg garden" data-ai-hint="tree felling boksburg" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Complete solutions for your Boksburg property.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Tree Removal:** Safe felling of unwanted, overgrown, or dangerous trees in your yard.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Stump Grinding:** We remove the stump completely, leaving your lawn clear and level.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Site Clearing:** Full vegetation clearing to prepare your property for new construction or landscaping.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Boksburg?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Local East Rand Team</h4><p className="text-muted-foreground mt-2 text-sm">Our Boksburg-based crews provide fast, efficient, and knowledgeable service.</p></div>
                <div><h4 className="font-semibold text-lg">Safety is Our Priority</h4><p className="text-muted-foreground mt-2 text-sm">We use professional techniques to ensure your property is safe throughout the process.</p></div>
                <div><h4 className="font-semibold text-lg">Insured for Your Protection</h4><p className="text-muted-foreground mt-2 text-sm">We are fully insured, giving you complete confidence in our work.</p></div>
                <div><h4 className="font-semibold text-lg">Full Cleanup Included</h4><p className="text-muted-foreground mt-2 text-sm">We don't leave a mess. Our service includes removing all wood and debris.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Tree Felling in Boksburg</h2>
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
            <p className="mt-2 text-muted-foreground">Our service network covers the entire East Rand.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/tree-felling-benoni">Benoni</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-kempton-park">Kempton Park</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-germiston">Germiston</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="A clean yard in Boksburg after tree removal" data-ai-hint="clean yard boksburg" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Boksburg Tree Removed by Experts</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For professional, insured, and reliable tree felling in Boksburg, contact SIMA Demolitions for a free quote today.</p>
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
