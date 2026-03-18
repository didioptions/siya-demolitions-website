import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How do you operate machinery without damaging Greenside's established gardens?", answer: "We specialize in working carefully in mature gardens. Our skilled operators use the smallest appropriate machines and plan their movements to avoid damaging lawns, flowerbeds, and established trees. Protecting the beauty of your Greenside property is a top priority." },
    { question: "My property is next to the Parkview Golf Club. Do you take special precautions?", answer: "Yes, we are highly experienced in working on properties that border the golf course. We operate with extreme care and control to ensure no debris, soil, or machinery interferes with the course. We work to be good neighbors to this important local feature." },
    { question: "What is the best machine to hire for a garden landscaping project?", answer: "For most garden landscaping projects in Greenside, a Bobcat is the ideal choice. It is compact enough to access most yards but powerful enough to move soil, clear vegetation, and level areas for new features quickly and efficiently." }
];

export default function PlantHireGreensidePage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'plantHireResidential');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant Hire Services Greenside</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions provides careful, professional plant hire services for the leafy suburb of Greenside. We specialize in providing the right equipment for landscaping and renovation projects, always working with respect for the area's beautiful, established gardens.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Plant Hire Fleet in Greenside</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Bobcat carefully working in a Greenside garden" data-ai-hint="bobcat hire greenside" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Equipment that respects your property.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Bobcat & TLB Hire:** For landscaping, pool digging, and foundation work with a focus on precision.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Mini-Excavators:** Ideal for trenching and digging in sensitive or tight-access areas.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Tipper Trucks:** For the clean and efficient removal of all soil and rubble.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Greenside?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Garden Protection Specialists</h4><p className="text-muted-foreground mt-2 text-sm">We take special care to preserve the mature, leafy character of your garden.</p></div>
                <div><h4 className="font-semibold text-lg">Golf Course Experience</h4><p className="text-muted-foreground mt-2 text-sm">We know how to work on properties bordering Parkview Golf Club with care and respect.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Insured</h4><p className="text-muted-foreground mt-2 text-sm">All our work is fully insured, giving you complete peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Local & Reliable</h4><p className="text-muted-foreground mt-2 text-sm">Our teams are familiar with the area and provide a dependable, neighborly service.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Plant Hire in Greenside</h2>
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
                <Button variant="outline" asChild><Link href="/plant-hire-parkhurst">Parkhurst</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-linden">Linden</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-melville">Melville</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="A beautiful home in Greenside undergoing renovation" data-ai-hint="renovation greenside" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Greenside Project Moving</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us for a detailed, no-obligation quote from a trusted local contractor that respects the beauty and character of Greenside.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for a Consultation</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/plant-hire-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Plant Hire Johannesburg</Link> | <Link href="/plant-hire-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
