import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Can I hire a TLB for a residential project in Boksburg?", answer: "Yes, our TLB hire is very popular for residential projects in suburbs like Sunward Park. It's perfect for digging foundations, clearing sites for renovations, or major landscaping work. Our certified operator ensures the job is done safely and efficiently." },
    { question: "How quickly can you deliver equipment to my site in Boksburg?", answer: "As an East Rand based company, we offer a fast and responsive service to Boksburg. We can usually arrange for delivery of our equipment within 24-48 hours, ensuring your project doesn't face unnecessary delays." },
    { question: "Is your plant hire service insured?", answer: "Yes, all our machinery and operators are covered by comprehensive insurance. This gives you complete peace of mind when hiring equipment for your project in Boksburg." }
];

export default function PlantHireBoksburgPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'plantHireTlb');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'plantHireResidential');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant Hire Services Boksburg</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions is Boksburg's trusted partner for reliable and affordable plant hire. We provide well-maintained machinery and professional operators for residential, commercial, and industrial projects across the East Rand.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Plant Hire Fleet in Boksburg</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="TLB machine at a construction site in Boksburg" data-ai-hint="tlb hire boksburg" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">A full range of equipment for your Boksburg project.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**TLB & Bobcat Hire:** Versatile machines for clearing, digging, and loading on sites of all sizes.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Tipper Truck Hire:** For efficient removal of construction debris, soil, and rubble.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Excavators:** For larger construction and demolition projects in Boksburg's industrial areas.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Boksburg?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Local East Rand Team</h4><p className="text-muted-foreground mt-2 text-sm">Our Boksburg-based crews provide fast, efficient, and reliable service.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable & Transparent</h4><p className="text-muted-foreground mt-2 text-sm">We offer competitive pricing with no hidden costs for all our equipment hire.</p></div>
                <div><h4 className="font-semibold text-lg">Safety Certified</h4><p className="text-muted-foreground mt-2 text-sm">Our operators are fully trained and adhere to strict safety standards.</p></div>
                <div><h4 className="font-semibold text-lg">Full-Service Solution</h4><p className="text-muted-foreground mt-2 text-sm">Combine our plant hire with our demolition and rubble removal services.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Plant Hire in Boksburg</h2>
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
            <p className="mt-2 text-muted-foreground">Our service network covers the entire East Rand.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/plant-hire-benoni">Benoni</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-kempton-park">Kempton Park</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-germiston">Germiston</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Construction site in Boksburg" data-ai-hint="construction boksburg" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Boksburg Project Moving</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For reliable, licensed plant hire in Boksburg, contact Apex Demolitions. We provide fast quotes and professional service.</p>
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
