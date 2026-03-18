import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "What types of projects is your plant hire service used for in Benoni?", answer: "In Benoni, our equipment is frequently hired for residential projects like digging foundations and swimming pools, as well as for commercial site clearing and agricultural work on smallholdings. Our versatile fleet can handle most local needs." },
    { question: "How experienced are your machine operators?", answer: "All our operators are highly experienced, certified, and professional. They have a deep understanding of safety protocols and work efficiently to complete your job to the highest standard, whether it's in a residential garden or on a busy construction site." },
    { question: "Is your plant hire service in Benoni affordable?", answer: "Yes, we are committed to offering competitive and transparent pricing for our plant hire services in Benoni. We provide free, no-obligation quotes so you know the full cost upfront, making professional-grade equipment accessible for projects of all sizes." }
];

export default function PlantHireBenoniPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'plantHireTlb');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'plantHireResidential');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant Hire Services Benoni</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions provides professional and reliable plant hire services for residential, commercial, and agricultural clients throughout Benoni. Get the job done faster with our well-maintained machinery and certified operators.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Plant Hire Fleet in Benoni</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="TLB machine ready for hire in Benoni" data-ai-hint="tlb hire benoni" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">The right equipment for Benoni's diverse needs.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**TLB Hire:** Our most versatile machine, perfect for trenching, digging, and loading.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Bobcat Hire:** Ideal for landscaping and moving material in confined spaces.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Tipper Truck Hire:** For all your rubble removal and site clearing needs.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Benoni?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Local Benoni Experts</h4><p className="text-muted-foreground mt-2 text-sm">Our teams know Benoni, ensuring prompt arrivals and efficient service.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable Quotes</h4><p className="text-muted-foreground mt-2 text-sm">We provide competitive, transparent pricing for all plant hire jobs in Benoni.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured & Compliant</h4><p className="text-muted-foreground mt-2 text-sm">We are licensed and adhere to all Ekurhuleni regulations.</p></div>
                <div><h4 className="font-semibold text-lg">Professional & Reliable</h4><p className="text-muted-foreground mt-2 text-sm">Count on our experienced crews and well-serviced machines.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Plant Hire in Benoni</h2>
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
            <p className="mt-2 text-muted-foreground">Proudly serving the East Rand.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/plant-hire-boksburg">Boksburg</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-kempton-park">Kempton Park</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-springs">Springs</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Residential construction in Benoni" data-ai-hint="construction benoni" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Benoni Project Underway</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact Apex Demolitions for a free, no-obligation quote on professional plant hire in Benoni.</p>
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
