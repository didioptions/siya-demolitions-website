import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How do you manage rubble removal in Fourways' secure lifestyle estates?",
        answer: "We are experts in operating within the secure estates of Fourways, such as Dainfern and Broadacres. Our process involves direct coordination with estate management to ensure full compliance with their rules on work hours, noise, and vehicle access. We are professional, discreet, and take great care to protect property."
    },
    {
        question: "Can you provide a fast rubble removal service for a small renovation in Fourways?",
        answer: "Yes, we provide a rapid and affordable service for homeowners in Fourways. Whether you're clearing debris from a kitchen renovation, a garden cleanup, or a small DIY project, we can typically schedule a same-day or next-day collection."
    },
    {
        question: "Is your rubble removal service licensed for work in the Fourways area?",
        answer: "Absolutely. We are a fully licensed waste carrier with the City of Johannesburg. This guarantees that all rubble from your Fourways property will be transported and disposed of legally and responsibly at a registered facility, protecting you from fines."
    }
];

export default function RubbleRemovalFourwaysPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal Services Fourways</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Keep your project in Fourways moving with fast, professional, and licensed rubble removal from SIMA Demolitions Projects. We specialize in serving the needs of this dynamic area, from clearing renovation debris in secure lifestyle estates to managing waste for commercial developments.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Rubble Removal Services in Fourways</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Site clearing in Fourways" data-ai-hint="site clearing fourways" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Specialized solutions for the Fourways area.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Secure Estate Cleanups:** We are experts at working within the rules of Fourways' premier estates like Dainfern and Broadacres.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Renovation Debris:** Fast, affordable removal of rubble from home improvement projects, big or small.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garden & Garage Clean-Up:** We clear soil, branches, old furniture, and general clutter.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Fourways?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Estate Specialists</h4><p className="text-muted-foreground mt-2 text-sm">Proven experience working respectfully and efficiently within secure estates.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Compliant</h4><p className="text-muted-foreground mt-2 text-sm">Fully licensed by the CoJ, we protect you from the risks of illegal dumping.</p></div>
                <div><h4 className="font-semibold text-lg">Fast & Local</h4><p className="text-muted-foreground mt-2 text-sm">Our nearby teams provide a rapid response to keep your Fourways project on track.</p></div>
                <div><h4 className="font-semibold text-lg">Professional & Discreet</h4><p className="text-muted-foreground mt-2 text-sm">Our uniformed crews work with minimal disruption to you and your neighbors.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Rubble Removal in Fourways</h2>
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
            <p className="mt-2 text-muted-foreground">Serving the greater Northern Suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-sandton">Sandton</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-bryanston">Bryanston</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-midrand">Midrand</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after rubble removal in Fourways" data-ai-hint="clean site fourways" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Fourways Property Cleared</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For a professional, licensed, and reliable rubble removal service in Fourways, contact the experts at SIMA Demolitions.</p>
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
