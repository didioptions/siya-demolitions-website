import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Can you provide a Bobcat for a project on a small property in Melville?", answer: "Yes, our Bobcat and mini-excavator hire services are perfect for the smaller stands in Melville. These compact machines can access tight spaces to help with foundation digging, landscaping, and rubble loading, all with minimal disruption to your neighbors." },
    { question: "How do you manage equipment delivery on Melville's narrow streets?", answer: "We are experienced in urban logistics. We use smaller delivery vehicles and coordinate with you to find the best time for delivery, ensuring we don't block traffic or cause issues for the community. Our professional team makes the process smooth and hassle-free." },
    { question: "Is plant hire affordable for a small home renovation?", answer: "Yes. Hiring a machine with an operator for a day or two is a very cost-effective way to get a huge amount of work done quickly, often saving you money compared to weeks of manual labour. We offer competitive daily rates for our smaller machines." }
];

export default function PlantHireMelvillePage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'plantHireResidential');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant Hire Services Melville</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions provides specialized plant hire for the historic and vibrant suburb of Melville. We understand the unique challenges of working on small stands and offer compact machinery perfect for renovations and landscaping projects.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Plant Hire Fleet in Melville</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Bobcat maneuvering in a tight space in Melville" data-ai-hint="bobcat hire melville" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Compact equipment for urban spaces.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Bobcat & Mini-Excavator Hire:** Perfect for accessing small yards for foundation digging, landscaping, and rubble clearing.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Small Tipper Trucks:** For efficient rubble and soil removal on narrow streets.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Operator Included:** All our hires come with a professional operator to ensure the job is done safely and correctly.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Melville?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Experts in Tight Spaces</h4><p className="text-muted-foreground mt-2 text-sm">We specialize in logistics for dense, urban suburbs with limited access.</p></div>
                <div><h4 className="font-semibold text-lg">Heritage Aware</h4><p className="text-muted-foreground mt-2 text-sm">We work carefully around older properties and can advise on any specific requirements.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable Daily Rates</h4><p className="text-muted-foreground mt-2 text-sm">Our pricing makes professional equipment accessible for smaller residential jobs.</p></div>
                <div><h4 className="font-semibold text-lg">Insured & Reliable</h4><p className="text-muted-foreground mt-2 text-sm">We are fully insured and pride ourselves on a reliable, punctual service.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Plant Hire in Melville</h2>
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
            <p className="mt-2 text-muted-foreground">Active throughout the surrounding suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/plant-hire-northcliff">Northcliff</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-parkhurst">Parkhurst</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-greenside">Greenside</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Residential renovation in Melville" data-ai-hint="renovation melville" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Melville Project Moving</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact our expert team to discuss your Melville plant hire needs. We provide detailed, no-obligation quotes for projects of all sizes.</p>
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
