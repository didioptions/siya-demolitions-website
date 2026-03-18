import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Can you provide machinery for projects in the busy Rosebank CBD?", answer: "Yes, we specialize in urban logistics. We can provide compact machinery like Bobcats and mini-excavators ideal for renovations and construction in high-density areas. We coordinate with building management and schedule work for off-peak hours to minimize disruption." },
    { question: "Is your plant hire service suitable for residential renovations in Parkwood or Saxonwold?", answer: "Absolutely. Our smaller machines are perfect for residential projects in the suburbs surrounding Rosebank. We can assist with everything from digging foundations for an extension to landscaping a garden, all with minimal impact on the property." },
    { question: "Are your operators trained to work with a focus on public safety?", answer: "Yes, public safety is paramount in busy areas like Rosebank. Our operators are fully certified and follow strict safety protocols, including securing the work area and managing interactions with pedestrians and traffic, to ensure a zero-incident work site." }
];

export default function PlantHireRosebankPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'plantHireResidential');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant Hire Services Rosebank</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions provides specialized plant hire for the dynamic urban environment of Rosebank and its surrounding suburbs. We offer compact, efficient machinery perfect for renovations, construction, and landscaping in high-density areas.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Plant Hire Fleet in Rosebank</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Bobcat on a construction site in Rosebank" data-ai-hint="bobcat hire rosebank" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Compact machinery for urban projects.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Bobcat & Mini-Excavator Hire:** Perfect for accessing tight spaces for renovations, trenching, and basement excavations.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Tipper Trucks:** We use appropriate-sized trucks to efficiently navigate busy streets and remove rubble.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Commercial & Residential Service:** We cater to both commercial strip-outs and residential renovations in the Rosebank area.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Rosebank?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Urban Logistics Experts</h4><p className="text-muted-foreground mt-2 text-sm">We excel at managing equipment in high-traffic, dense commercial and residential areas.</p></div>
                <div><h4 className="font-semibold text-lg">Safety Focused</h4><p className="text-muted-foreground mt-2 text-sm">We implement comprehensive safety plans to protect the public and your property.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured</h4><p className="text-muted-foreground mt-2 text-sm">Our insurance provides peace of mind for both commercial and residential projects.</p></div>
                <div><h4 className="font-semibold text-lg">Minimal Disruption</h4><p className="text-muted-foreground mt-2 text-sm">We work efficiently and can operate during off-peak hours to suit your needs.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Plant Hire in Rosebank</h2>
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
            <p className="mt-2 text-muted-foreground">Serving the central and northern suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/plant-hire-sandton">Sandton</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-parkhurst">Parkhurst</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-greenside">Greenside</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Residential construction in Parkwood, near Rosebank" data-ai-hint="construction parkwood" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Rosebank Project Equipped</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For professional plant hire for your Rosebank business or home, contact the urban experts at Apex Demolitions.</p>
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
