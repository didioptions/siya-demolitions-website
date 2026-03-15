import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How quickly can you remove rubble from a site in Alberton?",
        answer: "We prioritize rapid service in Alberton. For most residential and commercial projects, we can typically offer same-day or next-day rubble removal. Our local teams are staged across the East Rand to respond quickly to your needs in areas from Meyersdal to Alberton North."
    },
    {
        question: "Do you handle waste from both residential and industrial sites in Alberton?",
        answer: "Yes, we are equipped to handle a wide variety of rubble from all types of sites. This includes debris from home renovations, waste from small industrial clear-outs, and construction rubble from new developments. We handle concrete, bricks, soil, and garden refuse."
    },
    {
        question: "Are your rubble removal services in Alberton compliant with Ekurhuleni's by-laws?",
        answer: "Absolutely. SIMA Demolitions Projects is a fully licensed waste carrier. We guarantee that 100% of the rubble we collect is transported to registered and compliant landfill or recycling facilities, protecting you from the legal and financial risks of illegal dumping."
    }
];

export default function RubbleRemovalAlbertonPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal Services Alberton</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                For contractors and homeowners in Alberton, a clean and safe site is essential. We offer professional rubble removal, providing a fast and reliable solution to clear your property of construction debris, garden refuse, and demolition waste.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Rubble Removal Services in Alberton</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing construction site in Alberton" data-ai-hint="site clearing alberton" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Comprehensive debris management for any project size.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Rubble Removal:** We clear debris from home renovations, garden cleanups, and DIY projects throughout Alberton.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Construction Site Clearing:** Ongoing support for contractors, ensuring building sites remain clean, safe, and productive.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garden, Garage & Yard Waste:** Our teams remove soil, trees, and general clutter from your property.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Alberton?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Local Alberton Team</h4><p className="text-muted-foreground mt-2 text-sm">Our familiarity with Alberton ensures fast response times and efficient navigation.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Insured</h4><p className="text-muted-foreground mt-2 text-sm">We are fully compliant, protecting your project from any liability.</p></div>
                <div><h4 className="font-semibold text-lg">Transparent Pricing</h4><p className="text-muted-foreground mt-2 text-sm">Receive a clear, upfront quote with no hidden costs for your project.</p></div>
                <div><h4 className="font-semibold text-lg">Safety First Approach</h4><p className="text-muted-foreground mt-2 text-sm">Our trained crews prioritize safety for your property and our team.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Rubble Removal in Alberton</h2>
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
                <Button variant="outline" asChild><Link href="/rubble-removal-germiston">Germiston</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-boksburg">Boksburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-benoni">Benoni</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after rubble removal in Alberton" data-ai-hint="clean site alberton" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Alberton Rubble Removed</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact SIMA for a fast, free, and no-obligation quote. Our local Alberton team is ready to clear your site professionally.</p>
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
