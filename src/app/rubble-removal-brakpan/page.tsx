import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, Trash2, ShieldCheck, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Do you handle industrial rubble removal in Brakpan?",
        answer: "Yes, we are fully equipped to handle industrial rubble removal in Brakpan. Our teams have experience with clearing debris from factory sites, warehouses, and other industrial properties. We can manage heavy materials like concrete and scrap metal, ensuring your site is cleared safely and in compliance with all environmental and municipal regulations. We provide a comprehensive service that includes loading, transport, and responsible disposal."
    },
    {
        question: "How affordable is your rubble removal service in Brakpan?",
        answer: "We are committed to providing competitive and affordable pricing for rubble removal in Brakpan without compromising on service quality or legal compliance. Our quotes are transparent and based on the volume of rubble, type of material, and site location. We offer a free, no-obligation quote so you can see how cost-effective our professional service is. Our goal is to be the go-to, value-for-money rubble removal solution for the Brakpan community."
    },
    {
        question: "What areas in and around Brakpan do you service?",
        answer: "Our service area covers all of Brakpan and its surrounding suburbs, including Brenthurst, Dalview, and Brakpan North. As a locally-focused East Rand company, we also frequently work in neighbouring towns like Springs and Benoni. If you're unsure whether we cover your specific location, please give us a call. We aim to provide a rapid and reliable service to as much of the East Rand community as possible."
    }
];

export default function RubbleRemovalBrakpanPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'industrialDemolition');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal in Brakpan, Johannesburg</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <ShieldCheck /> Local, Licensed & Affordable Site Clearing
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Free Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for Quick Clearance</a>
                </Button>
            </div>
             {heroImage && <div className="mt-8 max-w-4xl mx-auto"><Image src={heroImage.imageUrl} alt="Rubble removal and site clearing in Brakpan" data-ai-hint="rubble removal brakpan" width={1200} height={600} className="rounded-lg shadow-lg" /></div>}
        </section>

        <section className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
                SIMA Demolitions Projects provides Brakpan with reliable and affordable rubble removal services. As a key industrial and residential hub on the East Rand, Brakpan requires a waste removal partner who understands its unique needs. We cater to homeowners, contractors, and industrial site managers, offering licensed and efficient clearing of construction debris, garden refuse, and industrial waste. Our commitment is to leave your site clean, safe, and compliant with all Ekurhuleni regulations.
            </p>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Site Clearing Services in Brakpan</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing an industrial site in Brakpan" data-ai-hint="industrial site brakpan" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4">Debris Management for Every Brakpan Project</h3>
                    <p className="text-muted-foreground mb-4">We are equipped for any job, big or small, across Brakpan.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Industrial & Commercial Waste:** Specializing in the removal of heavy debris from Brakpan’s industrial zones.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Rubble Removal:** Fast and affordable clearing for home renovations, garden services, and general cleanups.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Construction Site Support:** We partner with contractors to provide ongoing site clearing, ensuring projects in Brakpan stay on schedule.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Brakpan Chooses SIMA</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Local Focus</h4><p className="text-muted-foreground mt-2 text-sm">As an East Rand company, we understand Brakpan's needs and provide a responsive, community-focused service.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable Rates</h4><p className="text-muted-foreground mt-2 text-sm">We offer highly competitive pricing to make professional rubble removal accessible to everyone in Brakpan.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Licensed</h4><p className="text-muted-foreground mt-2 text-sm">We adhere to all municipal and environmental laws, ensuring your waste is disposed of legally and responsibly.</p></div>
                <div><h4 className="font-semibold text-lg">Reliable Service</h4><p className="text-muted-foreground mt-2 text-sm">We show up on time and get the job done efficiently, respecting your time and property.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Brakpan Rubble Removal FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Our East Rand Service Area</h2>
            <p className="mt-2 text-muted-foreground">Our network covers all major towns in the East Rand.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg">Rubble Removal Johannesburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-springs">Site Clearing in Springs</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-benoni">Benoni Rubble Removal</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Demolition & Site Clearing</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Cleared site in Brakpan" data-ai-hint="clean site brakpan" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Brakpan Site Cleared Today</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                    Contact SIMA for a fast, free quote on licensed rubble removal in Brakpan. Let our local team handle the heavy lifting for you.
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
