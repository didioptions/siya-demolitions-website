import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How do you handle rubble removal in Midrand's secure lifestyle estates like Waterfall?",
        answer: "We are specialists in operating within Midrand's premier secure estates. Our service is defined by professionalism and strict adherence to all Homeowners' Association (HOA) rules. We coordinate directly with estate management to ensure a seamless process, protecting paving and landscaping while working discreetly."
    },
    {
        question: "Do you offer ongoing rubble removal for large development projects in Midrand?",
        answer: "Yes, we are a key partner for developers and contractors across Midrand. We provide reliable, scheduled rubble removal services to keep large-scale residential and commercial development sites clean, safe, and productive. Our service is scalable to match the pace of your project."
    },
    {
        question: "Are you licensed for construction waste removal in Midrand?",
        answer: "Absolutely. SIMA Demolitions Projects is fully licensed by the City of Johannesburg for the collection and transportation of construction waste. We ensure that 100% of the rubble collected from your Midrand site is taken to a registered and compliant disposal or recycling facility, protecting you from any legal liability."
    }
];

export default function RubbleRemovalMidrandPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal Services Midrand</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                In the fast-growing hub of Midrand, efficient and professional site management is key. We provide expert rubble removal services tailored for Midrand's unique mix of secure lifestyle estates, commercial developments, and residential properties.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Rubble Removal Services in Midrand</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Site clearing in a Midrand estate" data-ai-hint="site clearing midrand" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Tailored solutions for a dynamic area.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Secure Estate Rubble Removal:** We specialize in working within the strict rules of estates like Waterfall, Kyalami, and Carlswald.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Developer & Construction Support:** Scheduled, large-scale clearing for new residential and commercial developments.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential & Garden Cleanups:** Fast, affordable removal of renovation debris and garden refuse for Midrand homeowners.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Midrand?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Estate Specialists</h4><p className="text-muted-foreground mt-2 text-sm">Unmatched experience in complying with the high standards of Midrand's secure lifestyle estates.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Compliant</h4><p className="text-muted-foreground mt-2 text-sm">We are fully licensed by the City of Johannesburg, ensuring legal and responsible waste disposal.</p></div>
                <div><h4 className="font-semibold text-lg">Developer's Partner</h4><p className="text-muted-foreground mt-2 text-sm">We provide reliable, scalable services to keep large development projects on schedule.</p></div>
                <div><h4 className="font-semibold text-lg">Local & Responsive</h4><p className="text-muted-foreground mt-2 text-sm">Our teams are based nearby, ensuring fast and efficient service across the Midrand area.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Rubble Removal in Midrand</h2>
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
                <Button variant="outline" asChild><Link href="/rubble-removal-sandton">Sandton</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-centurion">Centurion</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-kempton-park">Kempton Park</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after rubble removal in Midrand" data-ai-hint="clean site midrand" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Midrand Site Cleared</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact SIMA Demolitions for a professional quote on rubble removal for your Midrand estate, development, or commercial property.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Pickup</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/rubble-removal-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Rubble Removal Johannesburg</Link> | <Link href="/rubble-removal-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
