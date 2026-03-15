import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Do you offer post-renovation cleaning for homes in Randburg?",
        answer: "Yes, post-renovation cleanup is one of our most popular services in Randburg. We efficiently remove all construction debris, dust, and offcuts, leaving your newly renovated home safe and spotless for you and your family to enjoy. No job is too big or small."
    },
    {
        question: "How quickly can you provide a site cleaning service in the Randburg area?",
        answer: "We pride ourselves on our fast response times. For most standard residential and commercial cleanups in Randburg and its suburbs, we can typically schedule a service for the same or next day. Call us directly for the fastest scheduling."
    },
    {
        question: "Is your site cleaning service licensed and insured for work in Randburg?",
        answer: "Absolutely. SIMA Demolitions Projects is a fully licensed and insured company. We comply with all City of Johannesburg regulations for waste management and site safety, giving you complete peace of mind that the job is being done professionally and legally."
    }
];

export default function SiteCleaningRandburgPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Site Cleaning Services Randburg</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Keep your Randburg construction or renovation project safe, clean, and on schedule with professional site cleaning from SIMA Demolitions Projects. We provide reliable cleanup services for residential and commercial properties throughout the Randburg area.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Site Cleaning Services in Randburg</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Worker cleaning a residential site in Randburg" data-ai-hint="site cleaning randburg" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Complete cleanup solutions for any Randburg project.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Post-Renovation Cleanup:** We remove all debris, dust, and waste after your home renovation, leaving it ready to live in.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Construction Site Maintenance:** Ongoing cleanup services for builders and developers to ensure a safe and productive site.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garden & Yard Clearing:** Removal of garden refuse, soil, and general clutter from residential properties.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Randburg?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Fast & Local</h4><p className="text-muted-foreground mt-2 text-sm">Our Randburg-based teams provide a rapid response to keep your project on schedule.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable Pricing</h4><p className="text-muted-foreground mt-2 text-sm">We offer competitive, transparent quotes for jobs of all sizes.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Compliant</h4><p className="text-muted-foreground mt-2 text-sm">We are fully compliant with all CoJ waste disposal and site safety regulations.</p></div>
                <div><h4 className="font-semibold text-lg">Professional & Thorough</h4><p className="text-muted-foreground mt-2 text-sm">We don't just clear rubble; we leave your entire site spotless and safe.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Site Cleaning in Randburg</h2>
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
                <Button variant="outline" asChild><Link href="/site-cleaning-sandton">Sandton</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-roodepoort">Roodepoort</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-fourways">Fourways</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after cleaning in Randburg" data-ai-hint="clean site randburg" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Randburg Site Professionally Cleaned</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For a fast, reliable, and affordable site cleaning service in Randburg, contact the experts at SIMA Demolitions.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Cleanup</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/site-cleaning" className="text-sm text-muted-foreground hover:text-primary">Back to Site Cleaning Johannesburg</Link> | <Link href="/site-cleaning-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
