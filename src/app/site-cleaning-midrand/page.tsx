import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How do you handle site cleaning in Midrand's large, secure estates like Waterfall?",
        answer: "We specialize in working within Midrand's premier secure estates. Our teams are professional, discreet, and fully compliant with all HOA rules regarding work hours, noise, and vehicle access. We ensure a meticulous cleanup with minimal disruption to the community."
    },
    {
        question: "Do you offer ongoing site cleaning for large construction developments in Midrand?",
        answer: "Yes, we are a key partner for developers in the fast-growing Midrand area. We provide scalable, scheduled site cleaning services to keep large residential and commercial construction sites safe, organized, and productive throughout the entire build."
    },
    {
        question: "How quickly can you service a commercial site near the Mall of Africa?",
        answer: "We prioritize rapid response for our commercial clients. We can typically schedule a one-off cleanup or start an ongoing service agreement within 24-48 hours, ensuring your commercial property or retail development remains clean and professional."
    }
];

export default function SiteCleaningMidrandPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Site Cleaning Services Midrand</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions provides expert site cleaning services for Midrand's dynamic mix of residential estates, commercial hubs, and large-scale developments. We keep your project safe, tidy, and on schedule with our professional cleanup crews.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Site Cleaning Services in Midrand</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Worker cleaning a large development site in Midrand" data-ai-hint="site cleaning midrand" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Cleanup solutions for Midrand's rapid growth.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Secure Estate Maintenance:** Discreet and compliant cleaning for estates like Waterfall, Kyalami, and Carlswald.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Construction Development Cleaning:** Ongoing cleanup for large residential and commercial building projects.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Post-Renovation Cleanup:** Thorough cleaning for homes and offices after alterations.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Midrand?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Estate Specialists</h4><p className="text-muted-foreground mt-2 text-sm">Expertise in complying with the high standards of Midrand's secure estates.</p></div>
                <div><h4 className="font-semibold text-lg">Developer's Partner</h4><p className="text-muted-foreground mt-2 text-sm">Reliable, scalable services to keep large projects on schedule.</p></div>
                <div><h4 className="font-semibold text-lg">Safety Compliant</h4><p className="text-muted-foreground mt-2 text-sm">Our crews are trained in construction site safety to prevent accidents.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured</h4><p className="text-muted-foreground mt-2 text-sm">Comprehensive insurance provides complete peace of mind for every project.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Site Cleaning in Midrand</h2>
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
            <p className="mt-2 text-muted-foreground">Serving the corridor between Johannesburg and Pretoria.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/site-cleaning-sandton">Sandton</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-centurion">Centurion</Link></Button>
                <Button variant="outline" asChild><Link href="/site-cleaning-kempton-park">Kempton Park</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine construction site after cleaning in Midrand" data-ai-hint="clean site midrand" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Midrand Site Professionally Cleaned</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact Apex Demolitions for a professional quote on site cleaning for your Midrand estate, development, or commercial property.</p>
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
