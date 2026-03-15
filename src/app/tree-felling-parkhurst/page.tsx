import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How do you handle tree felling on Parkhurst's small stands?", answer: "We specialize in precision tree removal for compact properties. Using sectional dismantling and advanced rigging, we can safely remove trees in Parkhurst with zero damage to your home, walls, or neighbors' properties, which is critical in such a dense suburb." },
    { question: "Can you remove a tree without blocking the narrow streets?", answer: "Logistics are key in Parkhurst. We use smaller vehicles and work efficiently to load and remove all debris quickly. We manage our worksite to ensure minimal disruption to traffic and the neighborhood." },
    { question: "Do you offer just pruning and trimming services?", answer: "Yes. For many Parkhurst homes, maintaining a healthy, well-shaped tree is preferable to removing it. We offer expert pruning services to manage the size of your trees, improve their health, and ensure they are safe." }
];

export default function TreeFellingParkhurstPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services Parkhurst</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects offers expert tree felling tailored for the high-density environment of Parkhurst. We specialize in safely removing trees from small stands, ensuring every project is done with precision, care, and minimal disruption to the vibrant community.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Tree Felling Services in Parkhurst</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Removing a tree from a small Parkhurst property" data-ai-hint="parkhurst tree removal" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Precision tree care for Parkhurst's unique spaces.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Small Stand Tree Removal:** Expert felling in tight, confined spaces between properties.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Stump Grinding:** Maximize your valuable garden space by having the stump removed completely.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Trimming & Pruning:** Keep your trees healthy and manageable without full removal.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Parkhurst?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Tight-Access Experts</h4><p className="text-muted-foreground mt-2 text-sm">We have the right skills and equipment for narrow streets and small stands.</p></div>
                <div><h4 className="font-semibold text-lg">Minimal Disruption</h4><p className="text-muted-foreground mt-2 text-sm">We work quickly and cleanly to minimize our impact on your neighbors and the community.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured</h4><p className="text-muted-foreground mt-2 text-sm">Our insurance protects your property, giving you complete peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Renovation Focused</h4><p className="text-muted-foreground mt-2 text-sm">We understand the needs of home renovation projects and provide a tailored service.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Tree Felling in Parkhurst</h2>
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
            <p className="mt-2 text-muted-foreground">Serving all the surrounding "Park" suburbs and beyond.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/tree-felling-greenside">Greenside</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-rosebank">Rosebank</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-linden">Linden</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="A clean and tidy garden in Parkhurst after a tree removal" data-ai-hint="clean garden parkhurst" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Parkhurst Tree Managed by Experts</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Ready to deal with a problematic tree on your Parkhurst property? Contact us for a precise, no-obligation quote from the local experts in tight-space removals.</p>
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
