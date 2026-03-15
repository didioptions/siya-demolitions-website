import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Are your tree felling services insured for high-value properties in Bedfordview?", answer: "Yes, we carry comprehensive public liability insurance specifically for work on high-value residential properties. This ensures your home, garden, and assets are fully protected, providing you with complete peace of mind." },
    { question: "How do you handle tree felling with care for manicured gardens?", answer: "We understand the value of established gardens in Bedfordview. Our arborists are experts in precision dismantling, using ropes and advanced rigging to lower sections of the tree safely, avoiding any damage to surrounding plants, lawns, and structures. A clean, careful operation is our standard." },
    { question: "Do you work in Bedfordview's secure estates?", answer: "Yes, we have extensive experience working in the secure and exclusive estates of Bedfordview. We are professional, discreet, and liaise with estate management to adhere to all rules regarding noise, access, and working hours." }
];

export default function TreeFellingBedfordviewPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services Bedfordview</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects offers a premier tree felling service for the discerning residents of Bedfordview. We specialize in the careful and precise removal of trees from high-value properties, ensuring the protection of your home and immaculate garden.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Consultation</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Free Quote</Link>
                </Button>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Tree Felling Services in Bedfordview</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Careful tree removal in a manicured Bedfordview garden" data-ai-hint="garden tree removal" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Elite tree care for Bedfordview's properties.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Precision Tree Removal:** Safe dismantling of large or awkwardly positioned trees close to homes and pools.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Aesthetic Pruning & Trimming:** Expert trimming to improve the health, shape, and safety of your trees.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Immaculate Site & Stump Cleanup:** We leave your property spotless, with stumps ground below the surface.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Bedfordview?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">High-End Property Specialists</h4><p className="text-muted-foreground mt-2 text-sm">We have proven experience working with extreme care on luxury properties.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured for Peace of Mind</h4><p className="text-muted-foreground mt-2 text-sm">Our comprehensive insurance covers high-value properties.</p></div>
                <div><h4 className="font-semibold text-lg">Discreet & Professional</h4><p className="text-muted-foreground mt-2 text-sm">Our uniformed crews operate with the professionalism your neighborhood expects.</p></div>
                <div><h4 className="font-semibold text-lg">Meticulous Cleanup</h4><p className="text-muted-foreground mt-2 text-sm">We treat your garden with respect, leaving it tidier than we found it.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Tree Felling in Bedfordview</h2>
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
            <p className="mt-2 text-muted-foreground">Serving Bedfordview and surrounding luxury suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/tree-felling-sandton">Sandton</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-edenvale">Edenvale</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-bryanston">Bryanston</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine garden after tree felling in Bedfordview" data-ai-hint="clean garden bedfordview" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Schedule Your Bedfordview Tree Service</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For a professional, discreet, and reliable tree felling service in Bedfordview, contact the experts at SIMA Demolitions.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get a Free On-Site Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Speak to a Specialist</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/tree-felling-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Tree Felling Johannesburg</Link> | <Link href="/tree-felling-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
