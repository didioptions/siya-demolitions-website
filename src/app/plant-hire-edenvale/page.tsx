import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How fast can you deliver equipment for hire in Edenvale?", answer: "We offer a very fast response service for Edenvale and the surrounding East Rand area. We can typically deliver a TLB or Bobcat to your site within 24 hours, ensuring your project starts on time." },
    { question: "Can I hire a Bobcat for a weekend landscaping project in Edenvale?", answer: "Yes, our daily and weekend hire options are perfect for homeowners. A Bobcat with one of our professional operators can make quick work of garden leveling, soil moving, and site clearing." },
    { question: "Are your plant hire services insured for work in residential complexes?", answer: "Absolutely. We are fully insured and experienced in working within residential complexes in Greenstone and across Edenvale. We follow all body corporate rules and work with consideration for your neighbors." }
];

export default function PlantHireEdenvalePage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'plantHireResidential');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant Hire Services Edenvale</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                For fast, reliable, and affordable plant hire in Edenvale, look no further than Apex Demolitions. We provide well-maintained machinery with certified operators for residential and commercial projects, from Greenstone to the Avenues.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Plant Hire Fleet in Edenvale</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Bobcat hire for a garden project in Edenvale" data-ai-hint="bobcat hire edenvale" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Your local Edenvale equipment experts.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**TLB & Bobcat Hire:** The perfect choice for landscaping, foundation digging, and rubble loading.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Tipper Truck Hire:** To accompany our machines for fast and efficient site clearing.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Mini-Excavators:** For larger residential projects or commercial site work.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Edenvale?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Fast Local Service</h4><p className="text-muted-foreground mt-2 text-sm">Our knowledge of Edenvale allows for quick delivery and efficient service.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable Pricing</h4><p className="text-muted-foreground mt-2 text-sm">We offer clear, competitive quotes for all plant hire jobs in Edenvale.</p></div>
                <div><h4 className="font-semibold text-lg">Ekurhuleni Compliant</h4><p className="text-muted-foreground mt-2 text-sm">We are a fully licensed and insured operator, ensuring your project is handled legally.</p></div>
                <div><h4 className="font-semibold text-lg">Professional Team</h4><p className="text-muted-foreground mt-2 text-sm">Our trained and courteous operators ensure a hassle-free experience.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Plant Hire in Edenvale</h2>
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
            <p className="mt-2 text-muted-foreground">Also serving areas near Edenvale.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/plant-hire-kempton-park">Kempton Park</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-bedfordview">Bedfordview</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-germiston">Germiston</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Residential construction in Edenvale" data-ai-hint="construction edenvale" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Edenvale Project Equipped</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For a fast, free quote on licensed and reliable plant hire in Edenvale, contact the experts at Apex Demolitions today.</p>
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
