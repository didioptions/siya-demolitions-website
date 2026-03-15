import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How do you handle tree felling in a busy area like Rosebank?", answer: "We are experts in urban tree removal. We implement strict safety and traffic management plans, often working during off-peak hours to minimize disruption. Our sectional dismantling technique ensures trees are removed safely in confined spaces without risk to the public or property." },
    { question: "Can you remove trees from commercial properties and office parks?", answer: "Yes, we frequently work with body corporates and facilities managers in Rosebank's commercial district. We provide professional, insured tree felling services that comply with all commercial property regulations." },
    { question: "Is your service suitable for residential properties in nearby suburbs like Parkwood?", answer: "Absolutely. We provide the same level of professional care for residential tree removal in all the leafy suburbs surrounding Rosebank, ensuring the safety of your home and the tidiness of your garden." }
];

export default function TreeFellingRosebankPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services Rosebank</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects provides specialized tree felling services for the dynamic urban environment of Rosebank. We are experts at safely removing trees from commercial properties, office parks, and residential homes in this busy, high-density area.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Tree Felling Services in Rosebank</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Safely removing a tree in a dense urban area like Rosebank" data-ai-hint="urban tree removal" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Urban tree removal specialists.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Commercial & Office Park Tree Removal:** Safe and discreet removal of trees from commercial properties.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Tree Felling:** Expert removal from homes in surrounding suburbs like Parkwood and Saxonwold.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Stump Grinding & Complete Cleanup:** We leave the site clean, safe, and ready for use.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Rosebank?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Urban Environment Experts</h4><p className="text-muted-foreground mt-2 text-sm">We specialize in the logistical challenges of high-density commercial and residential areas.</p></div>
                <div><h4 className="font-semibold text-lg">Safety Focused</h4><p className="text-muted-foreground mt-2 text-sm">We implement comprehensive safety plans to protect the public and your property.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured</h4><p className="text-muted-foreground mt-2 text-sm">Our insurance provides complete peace of mind for commercial and residential work.</p></div>
                <div><h4 className="font-semibold text-lg">Minimal Disruption</h4><p className="text-muted-foreground mt-2 text-sm">We work efficiently and can operate during off-peak hours to suit your business needs.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Tree Felling in Rosebank</h2>
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
            <p className="mt-2 text-muted-foreground">Serving the central and northern suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/tree-felling-sandton">Sandton</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-parkhurst">Parkhurst</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-greenside">Greenside</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="A clean commercial property in Rosebank after tree felling" data-ai-hint="clean property rosebank" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Rosebank Tree Removed Safely</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For professional tree felling for your Rosebank business or home, contact the urban experts at SIMA Demolitions.</p>
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
