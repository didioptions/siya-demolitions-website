import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Do you offer ongoing plant hire for large developments in Midrand?", answer: "Yes, we are a key partner for developers in the fast-growing Midrand area. We provide scalable, long-term plant hire solutions for large residential and commercial construction projects, ensuring you always have the machinery you need on site." },
    { question: "How do you work within Midrand's secure estates like Waterfall?", answer: "We specialize in working within Midrand's premier secure estates. Our teams are professional, discreet, and fully compliant with all HOA rules regarding noise, working hours, and site access, ensuring a smooth and disruption-free service." },
    { question: "How quickly can you deliver machinery to a site near the Mall of Africa?", answer: "We prioritize rapid response for our commercial clients. We can typically schedule delivery of excavators, TLBs, and tipper trucks within 24-48 hours, helping you avoid costly delays on your Midrand project." }
];

export default function PlantHireMidrandPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'plantHireTlb');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'plantHireResidential');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant Hire Services Midrand</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                In the heart of Gauteng's development corridor, Apex Demolitions provides expert plant hire services for Midrand's dynamic mix of residential estates, commercial hubs, and large-scale construction projects. Get reliable machinery, professional operators, and service you can count on.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Quote</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Book Your Machinery</Link>
                </Button>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Plant Hire Fleet in Midrand</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="TLB machine at a development site in Midrand" data-ai-hint="tlb hire midrand" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Equipment to power Midrand's growth.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Excavators, TLBs, and Tipper Trucks:** For bulk earthworks on large development sites.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Bobcats & Mini-Excavators:** Ideal for work within secure estates and residential properties.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Rollers & Compaction Equipment:** Ensuring a solid foundation for new roads and buildings.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Midrand?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Developer's Partner</h4><p className="text-muted-foreground mt-2 text-sm">We provide reliable, scalable services to keep large Midrand projects on schedule.</p></div>
                <div><h4 className="font-semibold text-lg">Estate Specialists</h4><p className="text-muted-foreground mt-2 text-sm">Unmatched experience in complying with the high standards of Midrand's secure estates.</p></div>
                <div><h4 className="font-semibold text-lg">Safety Compliant</h4><p className="text-muted-foreground mt-2 text-sm">Our crews are trained in construction site safety to prevent accidents and delays.</p></div>
                <div><h4 className="font-semibold text-lg">Professional Operators</h4><p className="text-muted-foreground mt-2 text-sm">All our equipment comes with a certified operator to ensure maximum productivity.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Plant Hire in Midrand</h2>
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
            <p className="mt-2 text-muted-foreground">Serving the corridor between Johannesburg and Pretoria.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/plant-hire-sandton">Sandton</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-centurion">Centurion</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-kempton-park">Kempton Park</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Large construction project in Midrand" data-ai-hint="construction midrand" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Midrand Project Equipped</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact Apex Demolitions for a professional quote on plant hire for your Midrand estate, development, or commercial property.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for Availability</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/plant-hire-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Plant Hire Johannesburg</Link> | <Link href="/plant-hire-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
