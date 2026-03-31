
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How quickly can you deliver plant hire equipment to a site in Alberton?", answer: "As we are based in the East Rand, we offer a very fast response time for Alberton. We can typically deliver TLBs, Bobcats, and other equipment within 24 hours of a confirmed booking, helping you avoid project delays." },
    { question: "Can I hire a TLB for a weekend project at my home in Alberton?", answer: "Yes, we offer flexible daily and weekend hire rates that are perfect for residential projects. Hiring a TLB with an operator is a cost-effective way to handle jobs like pool excavations, trenching, or major landscaping." },
    { question: "Are your operators familiar with working in Alberton's secure estates?", answer: "Absolutely. Our operators have extensive experience working in secure estates across Alberton. They are professional, compliant with all HOA rules, and work carefully to protect property and minimize disruption." }
];

export default function PlantHireAlbertonPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'plantHireTlb');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'plantHireResidential');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant Hire Services Alberton</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Get your project moving with professional plant hire in Alberton from Apex Demolitions. We provide a range of well-maintained machinery with certified operators for all residential, commercial, and industrial jobs in the East Rand. Same-day and urgent services are available across Johannesburg depending on project size and location.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Quote</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><Quote className="mr-2"/>WhatsApp for Fast Response</a>
                </Button>
            </div>
        </section>

         <section className="bg-card border-b border-t mb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-4">
                <div className="flex items-center justify-center gap-2 text-sm font-medium"><Check className="text-primary" /> Same-Day Service Available</div>
                <div className="flex items-center justify-center gap-2 text-sm font-medium"><Check className="text-primary" /> Experienced Operators</div>
                <div className="flex items-center justify-center gap-2 text-sm font-medium"><Check className="text-primary" /> Fast & Reliable</div>
                <div className="flex items-center justify-center gap-2 text-sm font-medium"><Check className="text-primary" /> Serving All Johannesburg</div>
            </div>
          </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Plant Hire Fleet in Alberton</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="TLB hire for a project in Alberton" data-ai-hint="tlb hire alberton" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">The right machine for any job in Alberton, often used for <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link>, <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link>, and <Link href="/site-cleaning-johannesburg" className="text-primary hover:underline">site cleaning</Link>.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**TLB & Bobcat Hire:** For site clearing, trenching, and earthmoving on residential and commercial sites.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Excavator Hire:** For larger jobs, including bulk excavation and demolition projects.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Tipper Truck Hire:** To efficiently remove soil, rubble, and other waste materials.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Alberton?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Local East Rand Team</h4><p className="text-muted-foreground mt-2 text-sm">Our Alberton-based crews ensure a fast, reliable service across the area.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable & Transparent</h4><p className="text-muted-foreground mt-2 text-sm">We offer competitive pricing with no hidden costs for all our equipment.</p></div>
                <div><h4 className="font-semibold text-lg">Safety-First Culture</h4><p className="text-muted-foreground mt-2 text-sm">Our certified operators ensure every job is done safely and correctly.</p></div>
                <div><h4 className="font-semibold text-lg">Reliable Machinery</h4><p className="text-muted-foreground mt-2 text-sm">Our fleet is well-maintained to avoid breakdowns and keep your project on schedule.</p></div>
            </div>
             <div className="text-center mt-8">
                 <p className="text-muted-foreground">We recently completed a project in Alberton, providing a TLB for a small <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link> and ensuring a full <Link href="/site-cleaning-johannesburg" className="text-primary hover:underline">site clean</Link> and <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link> for a safe handover.</p>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Plant Hire in Alberton</h2>
            <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
             <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground">See our Google Reviews or <a href="https://g.page/r/CZ4yPlKY6ihdEAE/review" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">leave us a review</a> to hear what our clients say about our work.</p>
             </div>
        </section>

        <section className="mb-16 text-center">
            <h2 className="text-2xl font-semibold">Nearby Areas We Serve</h2>
            <p className="mt-2 text-muted-foreground">Serving the greater East Rand area. Our services are also available in Germiston, Boksburg, and Benoni.</p>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Residential building project in Alberton" data-ai-hint="construction alberton" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Alberton Project Equipped for Success</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact Apex Demolitions for a fast, free, and no-obligation quote. Our local Alberton team is ready to provide the right machinery for your job.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><Mail /> WhatsApp for Fast Response</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/plant-hire-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Plant Hire Johannesburg</Link> | <Link href="/plant-hire-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
