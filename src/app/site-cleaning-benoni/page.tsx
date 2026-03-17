import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Do you offer same-day site cleaning in Benoni?",
        answer: "Yes, we strive to offer same-day or next-day service for site cleaning in Benoni, depending on our schedule and the size of your job. Our local teams provide a rapid response across the East Rand. We recommend calling us as early as possible to book the fastest possible service."
    },
    {
        question: "What kind of waste can you clear from a site in Benoni?",
        answer: "Our Benoni site cleaning teams can handle a wide variety of non-hazardous waste, including construction debris, rubble, wood, plastic, excess soil, and garden refuse. We are equipped for both residential cleanups and large-scale commercial waste management."
    },
    {
        question: "Why is it important to use a licensed company for site cleaning in Benoni?",
        answer: "Using a licensed and insured company like Apex Demolitions is crucial. It ensures that all waste is disposed of legally at registered facilities, protecting you from fines for illegal dumping. It also guarantees that our team operates according to professional safety standards."
    }
];

export default function SiteCleaningBenoniPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Site Cleaning Services Benoni</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Keep your Benoni construction or renovation project on track with professional site cleaning from Apex Demolitions. We provide fast, reliable, and licensed cleanup services for residential and commercial properties throughout Benoni.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Site Cleaning Services in Benoni</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Cleaning a construction site in Benoni" data-ai-hint="site cleaning benoni" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Total cleanup solutions for Benoni.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Construction Debris Cleaning:** We efficiently clear building rubble, wood, and other materials from sites across Benoni.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential & Post-Renovation Cleanup:** Ideal for post-renovation or garden service cleanups in suburbs like Farrarmere and Lakefield.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Developer & Contractor Services:** Ongoing, scheduled cleaning to keep large development projects in Benoni safe and productive.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Benoni?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Local Benoni Experts</h4><p className="text-muted-foreground mt-2 text-sm">Our teams know Benoni's suburbs, ensuring prompt arrivals and efficient service.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Compliant</h4><p className="text-muted-foreground mt-2 text-sm">We are licensed and adhere to all Ekurhuleni waste disposal regulations.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable Quotes</h4><p className="text-muted-foreground mt-2 text-sm">We provide competitive, transparent pricing for all site cleaning jobs in Benoni.</p></div>
                <div><h4 className="font-semibold text-lg">Reliable & Professional</h4><p className="text-muted-foreground mt-2 text-sm">Count on our experienced, uniformed crews to get the job done right.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Site Cleaning in Benoni</h2>
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
                <Button variant="outline" asChild><Link href="/site-cleaning-boksburg">Boksburg</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-kempton-park">Kempton Park</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-springs">Springs</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after cleaning in Benoni" data-ai-hint="clean site benoni" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Benoni Site Cleared</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact Apex Demolitions for a professional, no-obligation quote on site cleaning in Benoni. Let's get your site ready for work.</p>
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
