
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
    {
        question: "Can you provide plant hire for large industrial sites in Germiston?",
        answer: "Yes, absolutely. We specialize in providing heavy-duty machinery for large industrial sites throughout Germiston's industrial basin. Our fleet includes large excavators and tipper trucks capable of handling bulk earthworks, site clearing, and waste from factory demolitions. We understand the high demands of industrial projects and our experienced, certified operators are trained in the specific safety protocols required for these environments, ensuring your project proceeds safely and without delay."
    },
    {
        question: "Do you offer ongoing plant hire for construction contractors in Germiston?",
        answer: "Yes, we frequently partner with construction contractors in Germiston for ongoing plant hire on long-term projects. This service provides you with reliable machinery and a certified operator on a scheduled basis, eliminating the need for large capital investment in equipment. By ensuring you have the right machine on-site when you need it, we help keep your project on schedule, improve site safety, and manage costs effectively."
    },
    {
        question: "How do you ensure safety on a busy industrial site?",
        answer: "Safety is paramount on any site, especially a busy industrial one in Germiston. Our operators are fully certified and rigorously trained to adhere to all Occupational Health and Safety (OHS) Act standards. Before any work begins, we conduct a thorough on-site risk assessment and ensure all our machinery has been recently inspected and is in perfect working order. This proactive approach to safety protects your staff, our team, and your property, preventing accidents and costly project delays."
    }
];

export default function PlantHireGermistonPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'plantHireTlb');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'industrialDemolition');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant Hire Services Germiston</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                In the industrial heartland of the East Rand, Apex Demolitions is the leading provider of heavy-duty plant hire in Germiston. As seasoned contractors, not just a rental company, we understand the demands of industrial sites. We supply reliable machinery complete with certified operators for all industrial, commercial, and residential projects, ensuring every job is done safely and to professional standards.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Plant Hire Fleet in Germiston</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Excavator at an industrial site in Germiston" data-ai-hint="excavator germiston" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Heavy-duty equipment for Germiston's industries.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Excavators & Bulldozers:** For large-scale site clearing, <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link>, and bulk earthworks.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Tipper Trucks:** High-capacity trucks for efficient industrial waste and <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link>.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**TLBs & Bobcats:** Versatile machinery for smaller commercial jobs and post-project <Link href="/site-cleaning-johannesburg" className="text-primary hover:underline">site cleaning</Link>.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Germiston?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Industrial Expertise</h4><p className="text-muted-foreground mt-2 text-sm">We have the heavy-duty fleet and experienced crews for industrial-scale projects.</p></div>
                <div><h4 className="font-semibold text-lg">Safety Certified</h4><p className="text-muted-foreground mt-2 text-sm">Our teams follow rigorous safety protocols for hazardous industrial environments.</p></div>
                <div><h4 className="font-semibold text-lg">Reliable & On-Time</h4><p className="text-muted-foreground mt-2 text-sm">We understand that downtime costs money. Our service is punctual and efficient.</p></div>
                <div><h4 className="font-semibold text-lg">Local East Rand Crew</h4><p className="text-muted-foreground mt-2 text-sm">Our local presence ensures responsive and knowledgeable service for Germiston.</p></div>
            </div>
        </section>

        <section id="use-cases" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Common Use Cases for Plant Hire in Germiston</h2>
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
                <Card>
                    <CardHeader><CardTitle>Industrial Site Preparation</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Bulk earthworks and clearing for new factories and warehouses.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Commercial Construction</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Digging foundations and trenches for new business premises.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Demolition & Rubble Removal</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Using heavy machinery to assist with <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link> and large-scale <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link>.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Residential Projects</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">TLB hire for pool excavations, landscaping, and foundation work.</p></CardContent>
                </Card>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Plant Hire in Germiston</h2>
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
            <p className="mt-4 text-center text-muted-foreground">
                Our service network covers the entire East Rand industrial basin, including Alberton, Boksburg, and Benoni.
            </p>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Industrial demolition site in Germiston" data-ai-hint="industrial site germiston" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Equip Your Germiston Project for Success</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact Apex Demolitions for a professional assessment and quote for your industrial or commercial plant hire needs in Germiston.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get a Project Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Speak to a Specialist</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/plant-hire-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Plant Hire Johannesburg</Link> | <Link href="/plant-hire-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
