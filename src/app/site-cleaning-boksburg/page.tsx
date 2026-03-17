import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Do you offer ongoing site cleaning for construction sites in Boksburg?",
        answer: "Yes, we partner with many builders and developers in Boksburg to provide scheduled, ongoing site cleaning. This service helps keep large construction projects safe, organized, and running efficiently by managing waste and debris build-up."
    },
    {
        question: "How quickly can you clean up a residential site after a renovation?",
        answer: "We understand you want to enjoy your newly renovated home as soon as possible. We offer a fast and responsive service in Boksburg, and can typically schedule a post-renovation cleanup for the same or next day, leaving your home spotless."
    },
    {
        question: "Is your site cleaning service licensed and insured?",
        answer: "Absolutely. Apex Demolitions is a fully licensed waste carrier and is comprehensively insured. This ensures your project is handled professionally and that all waste is disposed of in compliance with City of Ekurhuleni regulations."
    }
];

export default function SiteCleaningBoksburgPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Site Cleaning Services Boksburg</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions offers reliable and professional site cleaning services for residential, commercial, and industrial clients throughout Boksburg. Keep your project safe and on track with our expert cleanup crews.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Site Cleaning Services in Boksburg</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Worker sweeping a construction site in Boksburg" data-ai-hint="site cleaning boksburg" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">A full spectrum of cleaning services for Boksburg.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Construction Site Cleaning:** Keeping building sites in areas like Beyers Park and Sunward Park safe and tidy.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Post-Renovation Cleanup:** Thorough cleaning for residential homes after building work is complete.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Commercial & Industrial Cleaning:** Regular and once-off cleaning for business premises and industrial parks.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Boksburg?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Local East Rand Team</h4><p className="text-muted-foreground mt-2 text-sm">Our Boksburg-based crews provide fast, efficient, and knowledgeable service.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Compliant</h4><p className="text-muted-foreground mt-2 text-sm">We are licensed and adhere to all Ekurhuleni waste disposal and safety regulations.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable & Reliable</h4><p className="text-muted-foreground mt-2 text-sm">We provide competitive quotes and a service you can count on to be on time.</p></div>
                <div><h4 className="font-semibold text-lg">Safety-Focused</h4><p className="text-muted-foreground mt-2 text-sm">A clean site is a safe site. We help you minimize risks and maintain productivity.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Site Cleaning in Boksburg</h2>
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
                <Button variant="outline" asChild><Link href="/site-cleaning-benoni">Benoni</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-kempton-park">Kempton Park</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-germiston">Germiston</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after cleaning in Boksburg" data-ai-hint="clean site boksburg" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Boksburg Site Spotless</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For professional, licensed site cleaning in Boksburg, contact Apex Demolitions. We provide fast quotes and reliable service.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Cleanup</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/site-cleaning" className="text-sm text-muted-foreground hover:text-primary">Back to Site Cleaning Johannesburg</Link>
        </div>
    </div>
  );
}
