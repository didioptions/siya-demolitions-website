import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How do you handle rubble removal on Parkhurst's narrow streets?",
        answer: "Logistics are key in Parkhurst. We use smaller tipper trucks that can easily navigate narrow streets. Our team manages traffic flow, works efficiently to load debris quickly, and ensures the site and surrounding area are kept clean throughout the process to minimize disruption to the neighborhood."
    },
    {
        question: "Is your service suitable for small-scale renovation debris?",
        answer: "Yes, our service is perfectly suited for the popular renovation projects in Parkhurst. We handle small to medium loads of building rubble, old fittings, and garden refuse, providing a fast and affordable cleanup service for homeowners."
    },
    {
        question: "How do you protect paving and sidewalks during loading?",
        answer: "We take great care to protect property. Where necessary, we use protective boards and are meticulous about our loading process to avoid any damage to sidewalks, driveways, and verges. Our goal is to leave the area cleaner than we found it."
    }
];

export default function RubbleRemovalParkhurstPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal Services Parkhurst</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects offers expert rubble removal services tailored for the unique, high-density environment of Parkhurst. We specialize in clearing waste from the area's popular renovation and rebuild projects, ensuring a fast, clean, and disruption-free service.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Rubble Removal Services in Parkhurst</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing renovation debris in Parkhurst" data-ai-hint="renovation debris parkhurst" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Tailored for Parkhurst's renovation culture.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Renovation Debris Removal:** We clear rubble from kitchen and bathroom remodels, extensions, and other building projects.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garden, Garage & Yard Clean-ups:** Removal of soil, cuttings, old furniture, and general junk to help you maximize your space.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Small Stand Specialists:** Our teams are skilled at working efficiently and safely on compact properties.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Parkhurst?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Tight-Access Experts</h4><p className="text-muted-foreground mt-2 text-sm">We have the right equipment and experience for narrow streets and small stands.</p></div>
                <div><h4 className="font-semibold text-lg">Minimal Disruption</h4><p className="text-muted-foreground mt-2 text-sm">We work quickly and cleanly to minimize our impact on your neighbors.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Legal</h4><p className="text-muted-foreground mt-2 text-sm">We are fully compliant with all CoJ waste disposal regulations.</p></div>
                <div><h4 className="font-semibold text-lg">Renovation Focused</h4><p className="text-muted-foreground mt-2 text-sm">We understand the needs of home renovation projects and provide a tailored service.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Rubble Removal in Parkhurst</h2>
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
                <Button variant="outline" asChild><Link href="/rubble-removal-greenside">Greenside</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-rosebank">Rosebank</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-linden">Linden</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after rubble removal in Parkhurst" data-ai-hint="clean site parkhurst" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Parkhurst Renovation Cleared</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Ready to clear your Parkhurst renovation or clean-up project? Contact us for a precise, no-obligation quote from the local experts.</p>
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
