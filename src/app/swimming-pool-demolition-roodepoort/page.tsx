import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Do you service all areas in Roodepoort and the West Rand?", answer: "Yes, our pool demolition services cover the entire Roodepoort area and the wider West Rand, from Helderkruin to Wilro Park and beyond. Our local teams provide fast and reliable service to all suburbs." },
    { question: "Can you demolish a pool on a sloped property?", answer: "Yes, we have experience working on properties with varied terrain, including the slopes found in parts of Roodepoort. We take special precautions to ensure the demolition and backfilling process is done safely to prevent any soil erosion or stability issues." },
    { question: "What is your pool demolition service in Roodepoort?", answer: "Our service is a complete, all-in-one solution. It includes draining the pool, breaking up the shell, removing all rubble from your property, and then backfilling and compacting the area to leave it level and ready for landscaping or building." }
];

export default function SwimmingPoolDemolitionRoodepoortPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoWork');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Services Roodepoort</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions is the West Rand's trusted choice for professional swimming pool demolition in Roodepoort. We provide a safe, insured, and affordable service to help homeowners reclaim their gardens and increase property value.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Pool Removal Services in Roodepoort</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Demolishing a pool in a Roodepoort backyard" data-ai-hint="pool demolition roodepoort" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Complete pool removal for the West Rand.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Pool Removal:** Safe felling of pools in suburbs like Weltevreden Park, Helderkruin and Little Falls.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**All Pool Types:** We handle tough concrete and gunite pools as well as fibreglass shells.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Full Site Cleanup:** Our quotes always include the complete removal of all demolition debris.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Roodepoort?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">West Rand Specialists</h4><p className="text-muted-foreground mt-2 text-sm">Our local teams know Roodepoort well, ensuring prompt and efficient service.</p></div>
                <div><h4 className="font-semibold text-lg">Safety-Focused</h4><p className="text-muted-foreground mt-2 text-sm">Our crews are trained to work safely, protecting your family and property.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Insured</h4><p className="text-muted-foreground mt-2 text-sm">We are fully compliant with all CoJ regulations, offering you complete peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable & Reliable</h4><p className="text-muted-foreground mt-2 text-sm">We provide competitive quotes and a service you can depend on.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Pool Demolition in Roodepoort</h2>
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
            <p className="mt-2 text-muted-foreground">Serving the entire West Rand.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-randburg">Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-soweto">Soweto</Link></Button>
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-northcliff">Northcliff</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="A green, level lawn in Roodepoort after pool removal" data-ai-hint="clean lawn roodepoort" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Roodepoort Pool Removed Safely</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact Apex Demolitions for a free, no-obligation quote on professional pool demolition in Roodepoort. Let's get the job done.</p>
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
