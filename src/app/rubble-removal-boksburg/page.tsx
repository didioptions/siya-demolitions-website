import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How much does rubble removal cost in Boksburg?",
        answer: "The cost is based on factors like the volume of debris, the type of material (e.g., soil vs. concrete), and site accessibility. We provide a clear, all-inclusive quote upfront with no hidden fees, covering labour, transport, and disposal costs. Our pricing is competitive for the East Rand."
    },
    {
        question: "Can you remove rubble from a site with difficult access in Boksburg?",
        answer: "Yes, our teams are experienced in handling sites with challenging access across Boksburg. Whether it’s a narrow driveway in a residential complex or a busy commercial area, we have the right-sized vehicles and equipment to manage the job safely and efficiently."
    },
    {
        question: "Do you also offer demolition services in Boksburg?",
        answer: "Yes, SIMA Demolitions Projects is a full-service demolition and site clearing company. We offer comprehensive demolition services in Boksburg, including house demolition and pool removal. By handling both demolition and rubble removal, we provide a seamless, end-to-end solution."
    }
];

export default function RubbleRemovalBoksburgPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal Services Boksburg</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects is Boksburg's trusted partner for fast and professional rubble removal. From construction debris in Anderbolt to garden refuse in Sunward Park, our licensed teams provide comprehensive site clearing services for residential, commercial, and industrial clients.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Rubble Removal Services in Boksburg</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing construction site in Boksburg" data-ai-hint="site clearing boksburg" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">A full spectrum of services to keep your Boksburg site clear.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Construction & Industrial Debris:** We handle heavy rubble from construction sites and industrial areas in Boksburg.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Rubble Removal:** Perfect for clearing waste from home renovations, DIY projects, and garden cleanups.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garden, Garage & Yard Clean-Up:** We clear soil, branches, old furniture, and general clutter.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Boksburg?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Local East Rand Team</h4><p className="text-muted-foreground mt-2 text-sm">Our Boksburg-based crews provide fast, efficient service across the entire area.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed Waste Carrier</h4><p className="text-muted-foreground mt-2 text-sm">We are fully compliant with all Ekurhuleni regulations, ensuring legal disposal.</p></div>
                <div><h4 className="font-semibold text-lg">Competitive Pricing</h4><p className="text-muted-foreground mt-2 text-sm">Get a fair, transparent, and no-obligation quote for your Boksburg rubble removal job.</p></div>
                <div><h4 className="font-semibold text-lg">Full-Service Solution</h4><p className="text-muted-foreground mt-2 text-sm">We also offer demolition and site clearing for an all-in-one service.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Rubble Removal in Boksburg</h2>
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
            <p className="mt-2 text-muted-foreground">Our service network covers the entire East Rand.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-benoni">Benoni</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-kempton-park">Kempton Park</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-germiston">Germiston</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after rubble removal in Boksburg" data-ai-hint="clean site boksburg" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Boksburg Site Cleared</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For professional, licensed rubble removal in Boksburg, contact SIMA Demolitions. We provide fast quotes and reliable service.</p>
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
