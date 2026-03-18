import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Can you provide plant hire for large industrial sites in Germiston?", answer: "Yes, we specialize in servicing Germiston's industrial sector. We offer a range of heavy machinery, including large excavators and tipper trucks, perfect for factory sites, warehouses, and new industrial developments. Our teams are experienced in industrial site safety." },
    { question: "Do you offer ongoing plant hire for construction contractors in Germiston?", answer: "Absolutely. We partner with numerous contractors to provide reliable, scheduled plant hire for long-term projects. This ensures you have the machinery you need on-site without the capital outlay of purchasing, complete with a professional operator." },
    { question: "How do you ensure safety on a busy industrial site?", answer: "Safety is our top priority. Our operators are fully certified and adhere to all Occupational Health and Safety (OHS) standards. The machinery is regularly inspected, and we conduct on-site risk assessments before commencing work to ensure a safe environment for everyone." }
];

export default function PlantHireGermistonPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'plantHireTlb');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'industrialDemolition');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant Hire Services Germiston</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                In the industrial heartland of the East Rand, Apex Demolitions is the leading provider of heavy-duty plant hire in Germiston. We supply reliable machinery and certified operators for industrial, commercial, and residential projects.
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
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Excavators & Bulldozers:** For large-scale site clearing, demolition, and bulk earthworks.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Tipper Trucks:** High-capacity trucks for efficient removal of industrial waste and construction materials.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**TLBs & Bobcats:** Versatile machinery for smaller commercial and residential jobs in the Germiston area.</span></li>
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
            <p className="mt-2 text-muted-foreground">Covering the entire East Rand industrial basin.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/plant-hire-alberton">Alberton</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-boksburg">Boksburg</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-benoni">Benoni</Link></Button>
            </div>
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
