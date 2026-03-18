import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Do you offer long-term plant hire for large construction projects in Sandton?", answer: "Yes, we specialize in providing long-term, reliable plant hire solutions for major construction and development projects in Sandton. We offer competitive rates for extended hire periods and ensure our machinery is consistently maintained to prevent downtime." },
    { question: "How do you manage machine access in Sandton's busy and secure areas?", answer: "Our logistics team is highly experienced in navigating Sandton's traffic and high-security environments. We coordinate with site managers and building security to schedule deliveries and collections for off-peak hours, ensuring minimal disruption." },
    { question: "Are your machine operators certified for work on commercial sites?", answer: "Absolutely. All our operators are fully certified, licensed, and have extensive experience working on large-scale commercial construction sites. They adhere to the strictest safety protocols." }
];

export default function PlantHireSandtonPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'plantHireTlb');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'plantHireResidential');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant Hire Services Sandton</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions provides premier plant hire services for construction, demolition, and development projects across Sandton. From the Sandton CBD to luxury residential estates, we deliver reliable machinery with professional operators to keep your project on schedule.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for Rates</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Book Your Equipment</Link>
                </Button>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Plant Hire Fleet in Sandton</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="TLB hire for a construction project in Sandton" data-ai-hint="tlb hire sandton" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">The right equipment for Sandton's demanding projects.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Excavators, TLBs & Bobcats:** For bulk earthworks, trenching, and foundation digging.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Tipper Trucks:** For efficient removal of soil and rubble from site.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Compaction Equipment:** Rollers to ensure a stable base for building and paving.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Sandton?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">High-End Project Experience</h4><p className="text-muted-foreground mt-2 text-sm">We are trusted by top contractors for work on luxury residential and commercial sites.</p></div>
                <div><h4 className="font-semibold text-lg">Logistical Experts</h4><p className="text-muted-foreground mt-2 text-sm">We excel at managing equipment delivery and operation in busy, secure areas.</p></div>
                <div><h4 className="font-semibold text-lg">Reliable & Maintained</h4><p className="text-muted-foreground mt-2 text-sm">Our modern fleet is well-serviced to prevent costly downtime on your project.</p></div>
                <div><h4 className="font-semibold text-lg">Professional Operators</h4><p className="text-muted-foreground mt-2 text-sm">Our operators are certified, safe, and efficient, ensuring your job is done right.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Plant Hire in Sandton</h2>
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
            <p className="mt-2 text-muted-foreground">Serving the greater Northern Suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/plant-hire-bryanston">Bryanston</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-randburg">Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-rosebank">Rosebank</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Construction machinery at a Sandton site" data-ai-hint="construction sandton" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get The Right Equipment for Your Sandton Project</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For reliable, professional plant hire in Sandton, contact the experts at Apex Demolitions for a competitive quote.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get a Free Quote</Link></Button>
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
