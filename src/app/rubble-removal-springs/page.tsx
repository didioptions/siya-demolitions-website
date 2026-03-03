import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, Trash2, ShieldCheck, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Do you specialize in industrial rubble removal in Springs?",
        answer: "Yes, we have significant experience in industrial rubble removal in Springs and the surrounding East Rand industrial basin. Our teams are equipped to handle heavy materials from factory sites, warehouses, and manufacturing plants, including concrete, scrap metal, and general construction waste. We understand the importance of minimizing operational downtime, so we work efficiently to clear your site and ensure it is safe and ready for its next purpose. All waste is disposed of in compliance with environmental laws."
    },
    {
        question: "What is the cost of rubble removal in Springs?",
        answer: "We offer competitive and transparent pricing for rubble removal services in Springs. The final cost depends on the volume of the rubble, the type of materials to be removed, and the accessibility of your site. We provide a free, detailed, no-obligation quote before any work starts, so you know exactly what to expect. Our goal is to provide excellent value, combining affordable rates with fully licensed and professional service for both our residential and industrial clients in Springs."
    },
    {
        question: "How far does your service area extend from Springs?",
        answer: "While we are proud to be a primary rubble removal provider in Springs, our service area covers the entire East Rand. We regularly work in neighboring towns such as Brakpan, Nigel, and Benoni. Our extensive network allows us to be flexible and responsive across the region. If you are located on the outskirts of Springs or in a nearby town, please don't hesitate to contact us. We can almost always accommodate your site clearing needs."
    }
];

export default function RubbleRemovalSpringsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'industrialDemolition');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal in Springs, Gauteng</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <ShieldCheck /> Licensed Industrial & Residential Site Clearing
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Free Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for Fast Clearance</a>
                </Button>
            </div>
             {heroImage && <div className="mt-8 max-w-4xl mx-auto"><Image src={heroImage.imageUrl} alt="Industrial site clearing and rubble removal in Springs" data-ai-hint="industrial site springs" width={1200} height={600} className="rounded-lg shadow-lg" /></div>}
        </section>

        <section className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
                SIMA Demolitions Projects is the leading provider of professional rubble removal in Springs. Serving the area's robust industrial sector and growing residential communities, we offer reliable, licensed, and affordable site clearing solutions. From heavy-duty industrial waste to debris from home renovations, our experienced team ensures your property is cleared efficiently and in full compliance with all City of Ekurhuleni regulations. Trust us to handle your waste management, so you can focus on your project.
            </p>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Site Clearing Services in Springs</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing a site in Springs" data-ai-hint="site clearing springs" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4">Complete Debris Management for Springs</h3>
                    <p className="text-muted-foreground mb-4">We are equipped for any rubble removal job in the Springs area.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Industrial & Factory Waste:** Our specialty in Springs. We clear heavy rubble, scrap, and construction waste from industrial sites.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Rubble Removal:** We offer affordable and fast service for homeowners clearing out renovation debris or garden refuse.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Building Contractor Support:** Scheduled waste collections to keep construction projects in Springs clean, safe, and on schedule.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose SIMA in Springs?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Industrial Specialists</h4><p className="text-muted-foreground mt-2 text-sm">We have the right equipment and expertise for heavy-duty industrial clear-outs in Springs.</p></div>
                <div><h4 className="font-semibold text-lg">Local East Rand Team</h4><p className="text-muted-foreground mt-2 text-sm">Our local presence ensures we are responsive and reliable for all our Springs clients.</p></div>
                <div><h4 className="font-semibold text-lg">Ekurhuleni Compliant</h4><p className="text-muted-foreground mt-2 text-sm">100% legal and responsible disposal, protecting you from fines and liability.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable & Efficient</h4><p className="text-muted-foreground mt-2 text-sm">We provide competitive quotes and work quickly to save you time and money.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Springs Rubble Removal FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Also Serving the Far East Rand</h2>
            <p className="mt-2 text-muted-foreground">Our rubble removal network is active across the entire region.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg">Rubble Removal Johannesburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-brakpan">Brakpan Site Clearing</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-nigel">Nigel Rubble Removal</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Full Demolition Services</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Cleared industrial site in Springs" data-ai-hint="clean site springs" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Schedule Your Springs Site Clearing Today</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                    Contact SIMA Demolitions for a professional, no-obligation quote for your industrial or residential rubble removal needs in Springs.
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
