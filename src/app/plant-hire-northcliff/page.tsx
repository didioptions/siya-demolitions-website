import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Can your equipment operate on the steep slopes of Northcliff?", answer: "Yes, we have machinery and highly skilled operators who specialize in working on difficult, sloped terrain. We use specific techniques and appropriately sized machines to ensure safety and stability while carrying out excavation or site clearing work on Northcliff's hillsides." },
    { question: "Can I hire a machine to help with landscaping on a terraced garden?", answer: "Absolutely. Our mini-excavators and Bobcats are ideal for working on terraced properties. They can move soil, create new levels, and clear vegetation with precision, helping you execute your landscaping vision with much less manual labour." },
    { question: "How do you protect established gardens and paving during operation?", answer: "We understand the value of Northcliff's established gardens. Our operators take great care to plan their movements and can use protective boards on lawns and paving to minimize impact. Our goal is to perform the required work without damaging your valuable property." }
];

export default function PlantHireNorthcliffPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'plantHireTlb');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'plantHireResidential');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant Hire Services Northcliff</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions offers specialist plant hire services for the unique topography of Northcliff. We are the experts in safely operating machinery on steep slopes and properties with established gardens, providing a professional and insured service.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Plant Hire Fleet in Northcliff</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="TLB working on a sloped property in Northcliff" data-ai-hint="tlb hire northcliff" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Specialist equipment for Northcliff's terrain.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Hillside Excavation:** Our excavators and skilled operators are perfect for digging on sloped sites.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Bobcat & TLB Hire:** For landscaping, clearing, and moving materials on complex properties.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Tipper Trucks for Difficult Access:** We use the right size trucks to navigate Northcliff's winding roads.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Northcliff?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Hillside Specialists</h4><p className="text-muted-foreground mt-2 text-sm">We have the right equipment and techniques for safely working on Northcliff's slopes.</p></div>
                <div><h4 className="font-semibold text-lg">Property Protection</h4><p className="text-muted-foreground mt-2 text-sm">We take extra care to protect your established gardens, walls, and paving.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured for High-Risk Work</h4><p className="text-muted-foreground mt-2 text-sm">Our insurance covers complex work, giving you total peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Expert Operators</h4><p className="text-muted-foreground mt-2 text-sm">Our operators are highly trained for difficult and sensitive site conditions.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Plant Hire in Northcliff</h2>
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
                <Button variant="outline" asChild><Link href="/plant-hire-roodepoort">Roodepoort</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-randburg">Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-melville">Melville</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="House construction on a hill in Northcliff" data-ai-hint="construction northcliff" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Northcliff Project Moving</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For safe, reliable, and professional plant hire in Northcliff, contact the local experts at Apex Demolitions.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for a Site Assessment</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/plant-hire-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Plant Hire Johannesburg</Link> | <Link href="/plant-hire-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
