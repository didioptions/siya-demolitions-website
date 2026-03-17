import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How fast can you provide site cleaning in Edenvale?",
        answer: "In most cases, we can offer same-day or next-day service, especially for standard residential or commercial cleanups. Our local East Rand teams are familiar with all areas, from Greenstone Hill to the Avenues, allowing for efficient dispatch. To ensure the quickest service, we recommend calling us early to schedule your cleanup."
    },
    {
        question: "Do you clean up small amounts of debris from DIY projects in Edenvale?",
        answer: "Yes, absolutely. No job is too small for our Edenvale site cleaning service. We cater to homeowners who need to clear debris after a weekend DIY project, a garden cleanup, or a small renovation. Our pricing is based on the volume of waste, making it a cost-effective solution."
    },
    {
        question: "Are you licensed and insured for work in Edenvale?",
        answer: "Yes, we are a fully licensed waste carrier and carry comprehensive insurance. This ensures your project is handled professionally and that all waste is disposed of in compliance with City of Ekurhuleni regulations, protecting you from any liability."
    }
];

export default function SiteCleaningEdenvalePage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Site Cleaning Services Edenvale</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                For fast, professional, and licensed site cleaning in Edenvale, look no further than Apex Demolitions. We serve the entire Edenvale area, from Greenstone to the Avenues, ensuring your property is left spotless and safe.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Site Cleaning Services in Edenvale</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Cleaning up renovation debris in an Edenvale home" data-ai-hint="site cleaning edenvale" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Your local Edenvale cleanup experts.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Post-Renovation Cleaning:** We efficiently remove waste from home renovations, garden makeovers, and general yard clearing.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Commercial & Retail Cleanup:** Our teams handle debris from shop-fittings, office renovations, and commercial construction projects.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Ongoing Construction Site Maintenance:** Keeping your building site safe and productive with regular cleanups.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Edenvale?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Fast Local Service</h4><p className="text-muted-foreground mt-2 text-sm">Our deep knowledge of Edenvale allows for quick dispatch and efficient service.</p></div>
                <div><h4 className="font-semibold text-lg">Ekurhuleni Compliant</h4><p className="text-muted-foreground mt-2 text-sm">We are a fully licensed waste carrier, ensuring your waste is disposed of legally.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable Pricing</h4><p className="text-muted-foreground mt-2 text-sm">We offer clear, competitive quotes for all site cleaning jobs in Edenvale.</p></div>
                <div><h4 className="font-semibold text-lg">Professional Team</h4><p className="text-muted-foreground mt-2 text-sm">Our trained and courteous staff ensure a hassle-free experience from start to finish.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Site Cleaning in Edenvale</h2>
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
                <Button variant="outline" asChild><Link href="/site-cleaning-kempton-park">Kempton Park</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-bedfordview">Bedfordview</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-germiston">Germiston</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after cleaning in Edenvale" data-ai-hint="clean site edenvale" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Edenvale Site Spotless</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For a fast, free quote on licensed and reliable site cleaning in Edenvale, contact the experts at Apex Demolitions today.</p>
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
