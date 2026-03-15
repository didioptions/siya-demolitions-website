import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Do you offer tree felling across the entire West Rand?", answer: "Yes, our service area covers all of Roodepoort and the wider West Rand. From residential suburbs like Helderkruin to properties near the Walter Sisulu Botanical Garden, our local teams provide fast and reliable service." },
    { question: "My tree is in a very difficult-to-reach spot. Can you still remove it?", answer: "Definitely. We specialize in complex removals on the West Rand. Our teams are trained in advanced rigging techniques to safely dismantle trees piece by piece, even in tight spaces, on slopes, or close to buildings, ensuring no damage to your property." },
    { question: "What is included in your standard tree felling service in Roodepoort?", answer: "Our standard service is a complete solution. It includes the safe felling of the tree, cutting the wood into manageable pieces (which you can keep for firewood), and removing all branches and leaves from your property. We ensure your site is left clean and tidy. Stump grinding is an optional extra we highly recommend." }
];

export default function TreeFellingRoodepoortPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services Roodepoort</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects is the West Rand's trusted choice for professional tree felling in Roodepoort. We provide safe, licensed, and insured tree removal services for residential and commercial properties, ensuring the protection of your home and the beauty of your garden.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Tree Felling Services in Roodepoort</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="An arborist working safely in a large tree in Roodepoort" data-ai-hint="arborist roodepoort" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Complete tree solutions for the West Rand.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Safe Tree Removal:** We fell dangerous, dead, or unwanted trees of any size.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Stump Grinding:** Our stump removal service leaves your yard perfectly level and ready for new planting or lawn.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Palm Tree Removal:** Specialized services for the clean and safe removal of tall palm trees.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Roodepoort?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">West Rand Experts</h4><p className="text-muted-foreground mt-2 text-sm">Our local teams provide fast, reliable service across all of Roodepoort.</p></div>
                <div><h4 className="font-semibold text-lg">Property Protection</h4><p className="text-muted-foreground mt-2 text-sm">Our top priority is the safety of your home, garden, and surrounding property.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Insured</h4><p className="text-muted-foreground mt-2 text-sm">We are fully compliant, giving you confidence and peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Full-Service Cleanup</h4><p className="text-muted-foreground mt-2 text-sm">We don't leave a mess. Our service includes removing all wood and debris.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Tree Felling in Roodepoort</h2>
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
            <p className="mt-2 text-muted-foreground">Serving the entire West Rand area.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/tree-felling-randburg">Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-krugersdorp">Krugersdorp</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-northcliff">Northcliff</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine yard after tree removal in Roodepoort" data-ai-hint="clean yard roodepoort" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Roodepoort Tree Removed Safely</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact SIMA Demolitions for a free, no-obligation quote on professional tree felling in Roodepoort. We're ready to help.</p>
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
