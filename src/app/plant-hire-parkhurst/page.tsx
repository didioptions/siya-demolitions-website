import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Can you operate machinery on Parkhurst's narrow streets and small stands?", answer: "Yes, we are specialists in tight-access work. We use compact machinery like Bobcats and mini-excavators that are perfect for the small properties in Parkhurst. Our skilled operators can maneuver in confined spaces to get the job done without damaging property." },
    { question: "Is plant hire a good option for my renovation project in Parkhurst?", answer: "Absolutely. Hiring a Bobcat with an operator for a day can save you immense time and effort when digging foundations for an extension, clearing a garden for landscaping, or loading rubble from a demolition. It's a very cost-effective way to speed up your renovation." },
    { question: "How do you manage logistics and disruption in a busy suburb like Parkhurst?", answer: "We work efficiently and professionally to minimize our footprint. We use smaller trucks that can navigate narrow roads, coordinate delivery times carefully, and ensure our work area is kept as clean and tidy as possible to reduce disruption to you and your neighbours." }
];

export default function PlantHireParkhurstPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'plantHireResidential');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant Hire Services Parkhurst</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions offers expert plant hire tailored for the high-density, renovation-focused suburb of Parkhurst. Our compact machinery and skilled operators are perfect for projects on small stands where precision and care are essential.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Plant Hire Fleet in Parkhurst</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Bobcat working on a small renovation site in Parkhurst" data-ai-hint="bobcat hire parkhurst" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">The right tools for Parkhurst renovations.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Bobcat & Mini-Excavator Hire:** The ideal choice for digging, clearing, and loading in tight urban spaces.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Small Tipper Trucks:** For fast and efficient rubble and soil removal on narrow streets.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Operator Included:** Every hire comes with a skilled operator to ensure safety and quality work.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Parkhurst?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Tight-Access Experts</h4><p className="text-muted-foreground mt-2 text-sm">We have the right equipment and experience for narrow streets and small stands.</p></div>
                <div><h4 className="font-semibold text-lg">Minimal Disruption</h4><p className="text-muted-foreground mt-2 text-sm">We work quickly and cleanly to minimize our impact on your neighbors.</p></div>
                <div><h4 className="font-semibold text-lg">Renovation Focused</h4><p className="text-muted-foreground mt-2 text-sm">We understand the needs of home renovation projects and provide a tailored service.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured</h4><p className="text-muted-foreground mt-2 text-sm">Our service is fully insured for your complete peace of mind.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Plant Hire in Parkhurst</h2>
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
                <Button variant="outline" asChild><Link href="/plant-hire-greenside">Greenside</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-rosebank">Rosebank</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-linden">Linden</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Home renovation project in Parkhurst" data-ai-hint="renovation parkhurst" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Parkhurst Renovation Moving</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Ready to speed up your Parkhurst project? Contact us for a precise, no-obligation quote from the local experts in tight-access plant hire.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call to Book Now</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/plant-hire-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Plant Hire Johannesburg</Link> | <Link href="/plant-hire-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
