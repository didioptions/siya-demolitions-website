import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Do you offer same-day rubble removal in Benoni?",
        answer: "Yes, we strive to offer same-day or next-day service for rubble removal in Benoni, depending on our schedule and the size of your job. Our local teams are positioned to provide rapid response across the East Rand. We recommend calling us as early as possible to book the fastest possible collection."
    },
    {
        question: "What kind of waste can you clear from a property in Benoni?",
        answer: "Our Benoni rubble removal teams can handle a wide variety of non-hazardous waste. This includes standard construction rubble like bricks and concrete, mixed waste from demolitions, excess soil from excavations, and garden refuse from site clearing. We are equipped for both residential cleanups and large-scale commercial waste management."
    },
    {
        question: "Is it necessary to use a licensed company for rubble removal in Benoni?",
        answer: "Absolutely. Using a licensed waste carrier like SIMA Demolitions is essential. It ensures that your rubble is disposed of legally at registered facilities, protecting you from potential fines associated with illegal dumping. Our compliance with all City of Ekurhuleni by-laws provides you with complete peace of mind."
    }
];

export default function RubbleRemovalBenoniPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal Services Benoni</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Keep your Benoni construction or renovation project on track with professional rubble removal services from SIMA Demolitions Projects. We provide fast, reliable, and licensed site clearing for residential and commercial properties throughout Benoni.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Rubble Removal Services in Benoni</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing construction site in Benoni" data-ai-hint="site clearing benoni" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Total debris management for Benoni.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Construction Debris Removal:** We efficiently clear bricks, concrete, wood, and other materials from building sites across Benoni.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential & Garage Cleanups:** Ideal for post-renovation or garden service cleanups in suburbs like Farrarmere and Lakefield.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Developer & Contractor Services:** Ongoing, scheduled rubble removal to keep large development projects in Benoni moving forward.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Benoni?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Local Benoni Experts</h4><p className="text-muted-foreground mt-2 text-sm">Our teams know Benoni's suburbs, ensuring prompt arrivals and efficient service every time.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Compliant</h4><p className="text-muted-foreground mt-2 text-sm">We are licensed and adhere to all Ekurhuleni waste disposal regulations.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable Quotes</h4><p className="text-muted-foreground mt-2 text-sm">We provide competitive, transparent pricing for all rubble removal jobs in Benoni.</p></div>
                <div><h4 className="font-semibold text-lg">Reliable & Professional</h4><p className="text-muted-foreground mt-2 text-sm">Count on our experienced, uniformed crews to get the job done right.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Rubble Removal in Benoni</h2>
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
                <Button variant="outline" asChild><Link href="/rubble-removal-boksburg">Boksburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-kempton-park">Kempton Park</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-springs">Springs</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after rubble removal in Benoni" data-ai-hint="clean site benoni" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Benoni Site Cleared</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact SIMA for a professional, no-obligation quote on rubble removal in Benoni. Let's get your site clean and ready for work.</p>
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
