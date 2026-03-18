import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Can I hire a TLB for landscaping on my large property in Linden?", answer: "Yes, our TLB hire service is perfect for the large stands in Linden. It can be used for major landscaping projects, digging swimming pools, clearing sites for extensions, and trenching for utilities, saving you a significant amount of time and effort." },
    { question: "How do you operate machinery without damaging established gardens?", answer: "We have great respect for Linden's beautiful, mature gardens. Our experienced operators plan their access routes carefully and operate with precision to avoid harming trees, flowerbeds, and lawns. We can also use protective boards where necessary." },
    { question: "Is your plant hire service insured?", answer: "Yes, all our plant hire services are fully insured. This gives our Linden clients complete peace of mind, knowing their property is protected against any unforeseen incidents while our machinery is on site." }
];

export default function PlantHireLindenPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'plantHireTlb');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'plantHireResidential');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant Hire Services Linden</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions offers professional and reliable plant hire services for the leafy suburb of Linden. We specialize in providing the right machinery for residential renovations, landscaping, and construction on large stands, always operating with respect for the community.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Plant Hire Fleet in Linden</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="TLB machine working in a large Linden garden" data-ai-hint="tlb hire linden" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Equipment for Linden's spacious properties.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**TLB Hire:** Our versatile TLBs are ideal for digging, trenching, and moving large amounts of soil.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Bobcat Hire:** Perfect for finer landscaping details and moving materials in tighter spaces.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Tipper Trucks:** For removal of all soil, rubble, and garden refuse generated during the project.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Linden?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Careful Operators</h4><p className="text-muted-foreground mt-2 text-sm">We take great care to protect your established gardens and property.</p></div>
                <div><h4 className="font-semibold text-lg">Locally Focused</h4><p className="text-muted-foreground mt-2 text-sm">Our teams know Linden well and provide a friendly, reliable, and neighborly service.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Insured</h4><p className="text-muted-foreground mt-2 text-sm">We are fully compliant with CoJ regulations for your complete peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable for Homeowners</h4><p className="text-muted-foreground mt-2 text-sm">We offer competitive rates for residential jobs of all sizes.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Plant Hire in Linden</h2>
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
            <p className="mt-2 text-muted-foreground">Our services cover all adjacent suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/plant-hire-randburg">Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-greenside">Greenside</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-parkhurst">Parkhurst</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Residential construction project in Linden" data-ai-hint="construction linden" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Book Equipment for Your Linden Project</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us for a detailed, no-obligation quote from a trusted local contractor for plant hire in Linden.</p>
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
