import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, Trash2, ShieldCheck, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How much does rubble removal cost in Boksburg?",
        answer: "The cost of rubble removal in Boksburg is based on factors like the volume of debris (measured in truckloads), the type of material (e.g., soil vs. concrete), and site accessibility. We provide a clear, all-inclusive quote upfront with no hidden fees, covering labour, transport, and disposal costs. Our pricing is competitive for the East Rand, ensuring you get affordable and professional service whether it's a small cleanup in Sunward Park or a larger site clearing."
    },
    {
        question: "Can you remove rubble from a site with difficult access in Boksburg?",
        answer: "Yes, our teams are experienced in handling sites with challenging access across Boksburg. Whether it’s a narrow driveway in a residential complex or a busy commercial area, we have the right-sized vehicles and equipment to manage the job. We assess the site beforehand to plan the most efficient and safe removal strategy, ensuring we can clear your debris without causing damage to your property or surrounds. This is a standard part of our professional service."
    },
    {
        question: "Do you also offer demolition services in Boksburg?",
        answer: "Yes, SIMA Demolitions Projects is a full-service demolition and site clearing company. In addition to expert rubble removal, we offer comprehensive demolition services in Boksburg, including residential house demolition, pool removal, and commercial strip-outs. By handling both the demolition and the subsequent rubble removal, we provide a seamless, end-to-end solution that saves you time and coordination, ensuring your site is perfectly prepared for the next stage of your project."
    }
];

export default function RubbleRemovalBoksburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal in Boksburg, Johannesburg</h1>
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
             {heroImage && <div className="mt-8 max-w-4xl mx-auto"><Image src={heroImage.imageUrl} alt="Rubble removal and site clearing in Boksburg, Johannesburg" data-ai-hint="rubble removal boksburg" width={1200} height={600} className="rounded-lg shadow-lg" /></div>}
        </section>

        <section className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
                SIMA Demolitions Projects is Boksburg's trusted partner for fast and professional rubble removal. From construction debris in Anderbolt to garden refuse in Sunward Park, our licensed teams provide comprehensive site clearing services for residential, commercial, and industrial clients. We ensure that your project remains on schedule by efficiently removing all waste and debris, leaving you with a clean, safe, and build-ready site. Our commitment to City of Ekurhuleni compliance guarantees a responsible and hassle-free experience.
            </p>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Rubble Removal Services in Boksburg</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing a construction site in Boksburg" data-ai-hint="site clearing boksburg" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4">Complete Debris Management for Boksburg</h3>
                    <p className="text-muted-foreground mb-4">We offer a full spectrum of services to keep your Boksburg site clear and ready.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Construction & Industrial Debris:** We handle heavy rubble from construction sites and industrial areas in Boksburg.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Rubble Removal:** Perfect for clearing waste from home renovations, DIY projects, and garden cleanups in Boksburg's suburbs.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Scheduled Site Clearing:** We offer ongoing collections for developers and contractors to maintain a clean worksite.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose SIMA in Boksburg?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Local East Rand Team</h4><p className="text-muted-foreground mt-2 text-sm">Our Boksburg-based crews provide fast, efficient service across the entire area.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed Waste Carrier</h4><p className="text-muted-foreground mt-2 text-sm">We are fully compliant with all Ekurhuleni regulations, ensuring legal disposal and your peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Competitive Pricing</h4><p className="text-muted-foreground mt-2 text-sm">Get a fair, transparent, and no-obligation quote for your Boksburg rubble removal job.</p></div>
                <div><h4 className="font-semibold text-lg">Full-Service Solution</h4><p className="text-muted-foreground mt-2 text-sm">We also offer demolition and site clearing, providing an all-in-one service for your project.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Boksburg Rubble Removal FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Our East Rand Service Network</h2>
            <p className="mt-2 text-muted-foreground">We offer rubble removal and demolition services across the region.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg">Rubble Removal Johannesburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-benoni">Benoni Rubble Services</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-germiston">Site Clearing Germiston</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-boksburg">Boksburg Demolition</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Cleared construction site in Boksburg" data-ai-hint="clean site boksburg" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Boksburg Site Cleared Today</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                    For professional, licensed rubble removal in Boksburg, contact SIMA Demolitions. We provide fast quotes and reliable service.
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
