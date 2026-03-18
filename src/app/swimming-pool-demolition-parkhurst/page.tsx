import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Can you remove a splash pool or jacuzzi from a small Parkhurst property?", answer: "Yes, we specialize in removing smaller splash pools, jacuzzis, and plunge pools from compact properties in Parkhurst. We use equipment and techniques designed for tight spaces to ensure a safe and efficient removal." },
    { question: "How do you handle pool demolition on a property with limited access?", answer: "Logistics are key in Parkhurst. We use smaller machinery and often remove rubble manually to avoid damaging narrow driveways or neighboring properties. We plan every step carefully to manage the challenges of limited access." },
    { question: "Will demolishing my pool add value to my Parkhurst home?", answer: "In many cases, yes. Removing an old or unused pool can create a more versatile and spacious outdoor entertainment area, which is highly sought after in Parkhurst and can significantly increase your property's appeal and value." }
];

export default function SwimmingPoolDemolitionParkhurstPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoWork');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Services Parkhurst</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions offers expert pool demolition services for the high-density, renovation-focused suburb of Parkhurst. Maximize your valuable outdoor space by removing an old splash pool or jacuzzi.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Pool Removal Services in Parkhurst</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Removing a small splash pool in Parkhurst" data-ai-hint="splash pool removal" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Specialist services for Parkhurst's compact properties.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Splash Pool & Jacuzzi Removal:** Expert demolition of smaller pools in tight spaces.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Renovation-Focused Demolition:** We work carefully alongside your builders and renovators.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Full Cleanup Included:** We remove all debris and leave your new entertainment area ready for use.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Parkhurst?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Tight-Access Experts</h4><p className="text-muted-foreground mt-2 text-sm">We have the right equipment and experience for narrow streets and small stands.</p></div>
                <div><h4 className="font-semibold text-lg">Minimal Disruption</h4><p className="text-muted-foreground mt-2 text-sm">We work quickly and cleanly to minimize our impact on your neighbors.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Insured</h4><p className="text-muted-foreground mt-2 text-sm">We are fully compliant with all CoJ regulations for your peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Renovation Focused</h4><p className="text-muted-foreground mt-2 text-sm">We understand the needs of home renovation projects and provide a tailored service.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Pool Demolition in Parkhurst</h2>
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
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-greenside">Greenside</Link></Button>
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-rosebank">Rosebank</Link></Button>
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-linden">Linden</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="A clean and spacious entertainment area in Parkhurst after pool removal" data-ai-hint="patio entertainment" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Create a Better Entertainment Area in Parkhurst</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Ready to replace your old pool with a more functional space? Contact us for a quote from the local experts in tight-space demolitions.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Removal</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/swimming-pool-demolition-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Pool Demolition Johannesburg</Link> | <Link href="/swimming-pool-demolition-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
