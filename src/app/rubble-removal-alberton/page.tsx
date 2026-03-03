import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, Trash2, ShieldCheck, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How quickly can you remove rubble from a site in Alberton?",
        answer: "We prioritize rapid service in Alberton. For most residential and commercial projects, we can typically offer same-day or next-day rubble removal. The exact timing depends on the volume of debris and your specific location, be it Meyersdal or Alberton North. We recommend calling us as early as possible to secure the fastest collection time. Our goal is to ensure your site is cleared without delay, helping you maintain project momentum. Our local teams are staged across the East Rand to respond quickly to your needs."
    },
    {
        question: "Do you handle waste from both residential and industrial sites in Alberton?",
        answer: "Yes, we are equipped to handle a wide variety of rubble from all types of sites in Alberton. This includes debris from home renovations in Brackenhurst, waste from small industrial clear-outs, and construction rubble from new developments. We handle concrete, bricks, soil, garden refuse, and mixed demolition waste. Our flexible fleet and experienced teams mean we can provide an efficient solution whether it's a small home project or a larger commercial site clearing."
    },
    {
        question: "Are your rubble removal services in Alberton compliant with Ekurhuleni's by-laws?",
        answer: "Absolutely. SIMA Demolitions Projects is a fully licensed waste carrier, and we operate in strict compliance with all City of Ekurhuleni municipal by-laws. This is a critical aspect of our service. We guarantee that 100% of the rubble we collect is transported to registered and compliant landfill or recycling facilities. Using our professional service protects you from the legal and financial risks of illegal dumping and ensures your project is handled responsibly."
    }
];

export default function RubbleRemovalAlbertonPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal in Alberton, Johannesburg</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <ShieldCheck /> Fast, Licensed & Insured Site Clearing
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Free Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for Quick Clearance</a>
                </Button>
            </div>
             {heroImage && <div className="mt-8 max-w-4xl mx-auto"><Image src={heroImage.imageUrl} alt="Rubble removal and site clearing in Alberton, Johannesburg" data-ai-hint="rubble removal alberton" width={1200} height={600} className="rounded-lg shadow-lg" /></div>}
        </section>

        <section className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
                For contractors and homeowners in Alberton, a clean and safe site is essential for any successful project. SIMA Demolitions Projects offers professional rubble removal in Alberton, providing a fast and reliable solution to clear your property of construction debris, garden refuse, and demolition waste. We service all areas from Meyersdal to Brackenhurst, ensuring your project adheres to all City of Ekurhuleni regulations. Whether you're renovating a home or clearing a commercial site, our licensed team is equipped to handle the job efficiently, leaving your property ready for the next phase.
            </p>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Rubble Removal Services in Alberton</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing a construction site in Alberton" data-ai-hint="site clearing alberton" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4">Comprehensive Debris Management</h3>
                    <p className="text-muted-foreground mb-4">Our rubble removal services in Alberton cover a wide range of needs for any project size.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Rubble Removal:** We clear debris from home renovations, garden cleanups, and DIY projects throughout Alberton.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Construction Site Clearing:** We provide ongoing support for contractors, ensuring building sites in Alberton remain clean, safe, and productive.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garden & Yard Waste:** Our teams remove soil, trees, and other organic waste from landscaping or land clearing projects in Alberton.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose SIMA in Alberton?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Local Alberton Team</h4><p className="text-muted-foreground mt-2 text-sm">Our familiarity with Alberton ensures fast response times and efficient navigation through local suburbs.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Insured</h4><p className="text-muted-foreground mt-2 text-sm">We are fully compliant, protecting your project from any liability associated with waste removal.</p></div>
                <div><h4 className="font-semibold text-lg">Transparent Pricing</h4><p className="text-muted-foreground mt-2 text-sm">Receive a clear, upfront quote with no hidden costs for your Alberton rubble removal project.</p></div>
                <div><h4 className="font-semibold text-lg">Safety First Approach</h4><p className="text-muted-foreground mt-2 text-sm">Our trained crews prioritize safety for your property, our team, and the Alberton community during every cleanup.</p></div>
            </div>
        </section>
        
        <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Local Authority & Compliance in the East Rand</h2>
            <p className="text-muted-foreground text-center">
                Choosing a licensed rubble removal company in Alberton is crucial. It ensures your project complies with the City of Ekurhuleni's strict waste disposal regulations, protecting you from fines and legal issues. At SIMA, we provide a complete paper trail and guarantee that all debris is taken to certified facilities. This commitment to professional, legal, and environmentally-sound practices gives you peace of mind and supports the sustainability of our community.
            </p>
        </section>

        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Alberton Rubble Removal FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Serving the Greater East Rand Area</h2>
            <p className="mt-2 text-muted-foreground">Our teams operate across Johannesburg. Explore our services in nearby areas.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg">Rubble Removal Johannesburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-germiston">Services in Germiston</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-boksburg">Boksburg Site Clearing</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Demolition Services</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Cleared construction site in Alberton" data-ai-hint="clean site alberton" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Alberton Rubble Removed Today</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                    Contact SIMA for a fast, free, and no-obligation quote. Our local Alberton team is ready to clear your site professionally and efficiently.
                </p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Quote className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Pickup</a></Button>
                </div>
            </div>
        </section>
      </div>
    </>
  );
}
