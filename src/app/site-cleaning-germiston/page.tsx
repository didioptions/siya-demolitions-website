import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Can you handle large-scale cleaning for industrial sites in Germiston?",
        answer: "Yes, this is our specialty. We provide comprehensive site cleaning for Germiston's industrial sector, including factories, warehouses, and distribution centers. Our teams are trained in industrial site safety and can handle heavy debris, scrap metal, and other industrial waste."
    },
    {
        question: "Are your site cleaning services compliant with industrial health and safety standards?",
        answer: "Absolutely. We adhere to strict health and safety protocols on all industrial sites. Our crews are equipped with the necessary personal protective equipment (PPE) and are trained to manage the unique hazards of an industrial environment."
    },
    {
        question: "Do you offer scheduled, ongoing site cleaning for active construction sites?",
        answer: "Yes, we work with many contractors in Germiston to provide regular site cleaning services. This helps keep the project safe, organized, and running on schedule by continually managing waste and debris."
    }
];

export default function SiteCleaningGermistonPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Site Cleaning Services Germiston</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                In the industrial heartland of the East Rand, Apex Demolitions provides specialist site cleaning services for Germiston's commercial and industrial properties. We ensure your worksite is safe, compliant, and productive.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Site Cleaning Services in Germiston</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Worker cleaning an industrial site in Germiston" data-ai-hint="industrial site germiston" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Heavy-duty cleaning for Germiston's industries.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Industrial Site Cleaning:** Complete debris and waste management for factories, warehouses, and manufacturing plants.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Post-Demolition Clearing:** Thorough cleanup after industrial or commercial demolition projects.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Construction Site Maintenance:** Keeping large construction sites in Germiston clean and hazard-free.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Germiston?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Industrial Expertise</h4><p className="text-muted-foreground mt-2 text-sm">We have the equipment and safety training for heavy industrial environments.</p></div>
                <div><h4 className="font-semibold text-lg">Strict Compliance</h4><p className="text-muted-foreground mt-2 text-sm">We guarantee legal waste disposal and adherence to all health and safety laws.</p></div>
                <div><h4 className="font-semibold text-lg">Safety Certified</h4><p className="text-muted-foreground mt-2 text-sm">Our teams are trained to operate safely in hazardous industrial settings.</p></div>
                <div><h4 className="font-semibold text-lg">Efficient & Reliable</h4><p className="text-muted-foreground mt-2 text-sm">We work quickly to minimize downtime and keep your Germiston site productive.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Site Cleaning in Germiston</h2>
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
                <Button variant="outline" asChild><Link href="/site-cleaning-alberton">Alberton</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-boksburg">Boksburg</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-benoni">Benoni</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine industrial site after cleaning in Germiston" data-ai-hint="clean site germiston" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Schedule Your Germiston Site Cleaning</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact Apex Demolitions for a professional assessment and quote for your industrial or commercial site cleaning needs in Germiston.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get a Project Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Speak to a Specialist</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/site-cleaning" className="text-sm text-muted-foreground hover:text-primary">Back to Site Cleaning Johannesburg</Link>
        </div>
    </div>
  );
}
