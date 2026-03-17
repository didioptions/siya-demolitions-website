import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Do you offer post-renovation cleaning for homes in Alberton?",
        answer: "Yes, post-renovation cleanup is a key service we offer in Alberton. We efficiently remove all construction debris, dust, and offcuts, leaving your newly renovated home in Meyersdal, Brackenhurst or Alberton North spotless and ready to enjoy."
    },
    {
        question: "How quickly can you provide a site cleaning service in the Alberton area?",
        answer: "As a locally-focused East Rand company, we offer a rapid response service. For most standard residential and commercial cleanups in Alberton, we can schedule a service for the same or next day. Call us for the fastest scheduling."
    },
    {
        question: "Are your site cleaning services compliant with Ekurhuleni's regulations?",
        answer: "Absolutely. Apex Demolitions is fully licensed and insured. We comply with all City of Ekurhuleni regulations for waste management and site safety, ensuring your project is handled professionally and legally."
    }
];

export default function SiteCleaningAlbertonPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Site Cleaning Services Alberton</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions provides reliable and professional site cleaning services for residential, commercial, and industrial properties throughout Alberton. A clean site is a safe site—let us handle the mess.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Site Cleaning Services in Alberton</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Worker cleaning a residential site in Alberton" data-ai-hint="site cleaning alberton" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Complete cleanup solutions for any Alberton project.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Post-Construction & Renovation Cleanup:** We remove all debris, dust, and waste, leaving your site spotless.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Commercial & Industrial Site Maintenance:** Ongoing cleanup to keep your business premises safe and productive.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Pre-Sale Property Tidy-Up:** We clear yards and sites to improve curb appeal before selling.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Alberton?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Fast & Local</h4><p className="text-muted-foreground mt-2 text-sm">Our Alberton-based teams provide a rapid response across the East Rand.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable Pricing</h4><p className="text-muted-foreground mt-2 text-sm">We offer competitive, transparent quotes for jobs of all sizes.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Compliant</h4><p className="text-muted-foreground mt-2 text-sm">We comply with all Ekurhuleni waste disposal and site safety regulations.</p></div>
                <div><h4 className="font-semibold text-lg">Professional & Thorough</h4><p className="text-muted-foreground mt-2 text-sm">We don't just clear rubble; we leave your site spotless and safe.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Site Cleaning in Alberton</h2>
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
            <p className="mt-2 text-muted-foreground">Serving the greater East Rand area.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/site-cleaning-germiston">Germiston</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-boksburg">Boksburg</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-benoni">Benoni</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after cleaning in Alberton" data-ai-hint="clean site alberton" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Alberton Site Professionally Cleaned</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For a fast, reliable, and affordable site cleaning service in Alberton, contact the experts at Apex Demolitions.</p>
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
