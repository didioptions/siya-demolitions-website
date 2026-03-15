import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Can you handle large-volume industrial rubble removal in Germiston?",
        answer: "Yes, this is our specialty. We are fully equipped to manage large-scale industrial and commercial rubble removal in Germiston's industrial hubs. Our fleet can handle high volumes of concrete, scrap metal, and mixed demolition waste. We provide ongoing, scheduled services for factory clear-outs and large construction projects."
    },
    {
        question: "How do you ensure compliance with waste disposal laws in Germiston?",
        answer: "As a licensed waste carrier, SIMA Demolitions adheres strictly to the City of Ekurhuleni's by-laws. We guarantee that all industrial and commercial rubble collected in Germiston is transported exclusively to registered, environmentally compliant disposal and recycling facilities. This protects your business from legal and financial penalties."
    },
    {
        question: "What is the process for getting a quote for a large site clearing in Germiston?",
        answer: "For large industrial or commercial sites, our process begins with a free on-site assessment. A project manager will visit your property to evaluate the volume and type of rubble, assess site access, and discuss your timeline. Based on this, we provide a detailed, transparent, and no-obligation quote."
    }
];

export default function RubbleRemovalGermistonPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'industrialDemolition');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal Services Germiston</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                In the industrial heartland of the East Rand, SIMA Demolitions Projects is the leading specialist for industrial and commercial rubble removal in Germiston. We are equipped to handle heavy materials, ensuring your site is cleared safely, efficiently, and in full compliance with all regulations.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Site Assessment</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request an Industrial Quote</Link>
                </Button>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Rubble Removal Services in Germiston</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Industrial site clearing in Germiston" data-ai-hint="industrial site germiston" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Heavy-duty debris management for Germiston's landscape.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Industrial Site Clearing:** Complete removal of waste from factory demolitions, plant decommissioning, and warehouse clear-outs.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Heavy Construction Debris:** Management of large volumes of concrete, rebar, asphalt, and other building rubble.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Scheduled Contractor Support:** Reliable, ongoing rubble removal for large-scale development projects in and around Germiston.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Germiston?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Industrial Expertise</h4><p className="text-muted-foreground mt-2 text-sm">We have the heavy-duty fleet and experienced crews required for industrial-scale projects.</p></div>
                <div><h4 className="font-semibold text-lg">Strict Compliance</h4><p className="text-muted-foreground mt-2 text-sm">We guarantee legal disposal, protecting your business from environmental and municipal liability.</p></div>
                <div><h4 className="font-semibold text-lg">Safety Certified</h4><p className="text-muted-foreground mt-2 text-sm">Our teams follow rigorous safety protocols for hazardous industrial environments.</p></div>
                <div><h4 className="font-semibold text-lg">Efficient Turnaround</h4><p className="text-muted-foreground mt-2 text-sm">We work efficiently to minimize downtime and keep your Germiston project on schedule.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Rubble Removal in Germiston</h2>
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
            <p className="mt-2 text-muted-foreground">Covering the entire East Rand industrial basin.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-alberton">Alberton</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-boksburg">Boksburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-benoni">Benoni</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after rubble removal in Germiston" data-ai-hint="clean site germiston" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Schedule Your Germiston Site Clearing</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact SIMA Demolitions for a professional assessment and quote for your industrial or commercial rubble removal needs in Germiston.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get a Project Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Speak to a Specialist</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/rubble-removal-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Rubble Removal Johannesburg</Link> | <Link href="/rubble-removal-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
