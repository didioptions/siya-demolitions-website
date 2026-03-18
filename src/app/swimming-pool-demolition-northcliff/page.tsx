import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How do you handle pool demolition on the steep slopes of Northcliff?", answer: "This is our specialty. We use smaller, specialized equipment and safe, controlled techniques to demolish and remove pools on hillsides. We take extra care to prevent any soil erosion or damage to your property and those below." },
    { question: "Can you remove a pool without damaging my established garden?", answer: "Yes. We understand the value of Northcliff's beautiful, established gardens. We plan our access routes carefully and use protective measures to ensure your landscaping remains as undisturbed as possible during the pool removal process." },
    { question: "Is your team insured for complex, high-risk pool demolitions?", answer: "Absolutely. We carry comprehensive insurance that covers all our operations, including high-risk work on difficult terrain like Northcliff hill. This gives our clients complete peace of mind." }
];

export default function SwimmingPoolDemolitionNorthcliffPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoWork');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Services Northcliff</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions offers specialist pool demolition services for the unique topography of Northcliff. We are experts in safely removing swimming pools from steep slopes and properties with established gardens.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Site Assessment</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Free Quote</Link>
                </Button>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Pool Removal Services in Northcliff</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Demolishing a swimming pool on a sloped property in Northcliff" data-ai-hint="pool demolition northcliff" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Specialist solutions for Northcliff's unique challenges.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Hillside Pool Removal:** Expert demolition and removal on complex, sloped terrain.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garden Protection:** We take extreme care to protect your valuable landscaping during removal.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Complete Site Preparation:** Our service includes full backfilling, compaction, and cleanup.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Northcliff?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Hillside Specialists</h4><p className="text-muted-foreground mt-2 text-sm">We have the right equipment and safety techniques for working on Northcliff's slopes.</p></div>
                <div><h4 className="font-semibold text-lg">Maximum Property Protection</h4><p className="text-muted-foreground mt-2 text-sm">Our primary goal is to remove your pool without damaging your beautiful garden.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured for High-Risk Work</h4><p className="text-muted-foreground mt-2 text-sm">Our insurance covers complex removals, giving you total peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Reliable & Professional</h4><p className="text-muted-foreground mt-2 text-sm">We are committed to providing a dependable service with clear communication.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Pool Demolition in Northcliff</h2>
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
            <p className="mt-2 text-muted-foreground">Serving the West Rand and surrounding suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-roodepoort">Roodepoort</Link></Button>
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-randburg">Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-melville">Melville</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine yard after pool removal on Northcliff hill" data-ai-hint="clean yard northcliff" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Reclaim Your Northcliff Garden</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For a safe, reliable, and professional pool demolition service in Northcliff, contact the local experts at Apex Demolitions.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for a Site Assessment</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/swimming-pool-demolition-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Pool Demolition Johannesburg</Link> | <Link href="/swimming-pool-demolition-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
