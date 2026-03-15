import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How do you protect large, established trees during rubble removal in Greenside?",
        answer: "We recognize the value of Greenside's beautiful, mature trees. Our teams work with great care to protect them. We avoid driving on root systems, use manual loading where necessary, and ensure no damage occurs to branches or trunks during the cleanup process."
    },
    {
        question: "My property is adjacent to the golf course. Do you take special precautions?",
        answer: "Absolutely. For properties bordering the Parkview Golf Club, we take extra care to ensure no debris or dust drifts onto the course. We maintain a tidy site and work efficiently to respect the club and its members."
    },
    {
        question: "What kind of rubble do you remove in Greenside?",
        answer: "We remove a mix of building rubble from renovations and a large amount of garden refuse from the leafy properties. This includes soil, branches, old paving, and general construction waste. We are equipped for all types of residential clean-ups."
    }
];

export default function RubbleRemovalGreensidePage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal Services Greenside</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects provides careful and professional rubble removal services for the leafy suburb of Greenside. We specialize in clearing waste from residential renovations and large gardens, always working with respect for the area's established, green character.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Rubble Removal Services in Greenside</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing a garden in Greenside" data-ai-hint="garden clearing greenside" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Respectful clearing for Greenside's properties.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garden Refuse & Soil Removal:** We expertly handle large volumes of organic waste from landscaping and garden clean-ups.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Renovation Debris Clearing:** Careful removal of building rubble from extensions and home remodels.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garage & Yard Clean-ups:** We clear general junk and clutter, helping you reclaim your valuable space.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Greenside?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Tree & Garden Protection</h4><p className="text-muted-foreground mt-2 text-sm">We take special care to preserve the mature, leafy character of your property.</p></div>
                <div><h4 className="font-semibold text-lg">Quiet & Discreet Service</h4><p className="text-muted-foreground mt-2 text-sm">We work efficiently to minimize noise and disruption in your peaceful neighborhood.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Compliant</h4><p className="text-muted-foreground mt-2 text-sm">All waste is disposed of legally at registered CoJ facilities.</p></div>
                <div><h4 className="font-semibold text-lg">Local & Reliable</h4><p className="text-muted-foreground mt-2 text-sm">Our teams are familiar with the area and provide a dependable service.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Rubble Removal in Greenside</h2>
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
                <Button variant="outline" asChild><Link href="/rubble-removal-parkhurst">Parkhurst</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-linden">Linden</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-melville">Melville</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after rubble removal in Greenside" data-ai-hint="clean site greenside" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Greenside Property Cleared</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us for a free quote on careful, professional rubble removal that respects the beauty of your Greenside home and garden.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Pickup</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/rubble-removal-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Rubble Removal Johannesburg</Link> | <Link href="/rubble-removal-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
