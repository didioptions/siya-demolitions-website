
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
    {
        question: "What is construction site cleaning?",
        answer: "Construction site cleaning, often called a 'builders clean,' is a heavy-duty service performed after construction or renovation. Unlike regular cleaning, it focuses on removing construction debris, fine dust, rubble, and packaging. The goal is to transform a hazardous worksite into a safe, clean space ready for the next phase of work or for client handover."
    },
    {
        question: "How long does a builders clean take for a new development in Midrand?",
        answer: "The timeframe depends on the project size. A final clean for a single new home can take 1-2 days. For multi-unit developments, we offer ongoing cleaning services scheduled throughout the build, with a final intensive clean on each unit before handover. We provide a detailed schedule based on your project phases."
    },
    {
        question: "What is included in your post-construction cleaning service?",
        answer: "Our service is a comprehensive, top-to-bottom process. It includes the removal of all building debris and rubble. We then conduct a deep clean to remove fine construction dust from all surfaces, including walls, floors, windows, cabinets, and fixtures, making the property truly move-in ready."
    },
    {
        question: "Do you work on large, active development sites in areas like Waterfall and Steyn City?",
        answer: "Yes, this is our specialty. We partner with developers and principal contractors to provide scalable, ongoing site cleaning services for Midrand's largest developments. We are experienced in coordinating with multiple trades and adhering to the strict safety and access protocols of major construction sites."
    }
];

export default function SiteCleaningMidrandPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const bobcatImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Site Cleaning Midrand</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                In the heart of Gauteng's development corridor, Apex Demolitions provides expert site cleaning for Midrand's dynamic mix of residential estates, commercial hubs, and large-scale construction projects. A clean site is a productive and safe site—trust us to be your professional cleanup partner.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Project Quote</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Get a Detailed Quote</Link>
                </Button>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Site Cleaning Services in Midrand</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card><CardHeader><CardTitle>Construction Site Cleaning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Ongoing cleanup during a build to maintain safety and productivity.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Post-Construction Cleaning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">A deep clean after building work is complete, removing all fine dust and debris.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Demolition Site Cleanup</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Comprehensive clearing after a full or partial <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link>.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Builders Clean</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">The final, meticulous clean that makes a property ready for handover.</p></CardContent></Card>
            </div>
        </section>

        <section id="developments-estates" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Specialists in Midrand Developments & Estates</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Cleaning a new housing development in Midrand" data-ai-hint="housing development midrand" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Midrand's rapid growth demands a site cleaning partner who understands the scale and standards of new developments. We are that partner.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**New Housing Developments:** We provide scalable, ongoing cleaning for multi-unit projects, keeping the entire site safe and presentable.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Secure Estate Compliance:** We are experts in working within Midrand's premier estates like Waterfall and Kyalami, adhering to all HOA rules.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Contractor Coordination:** We seamlessly integrate with your project plan, coordinating with all trades to ensure a smooth workflow.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="heavy-capability" className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Heavy Cleaning & Full Site Clearance Capability</h2>
                    <p className="text-muted-foreground mb-4">Our service goes far beyond brooms and bags. As a full-service demolition company, we integrate our <Link href="/rubble-removal-midrand" className="text-primary hover:underline">rubble removal Midrand</Link> division for a complete site clearance solution. For large volumes of construction debris, soil, or rubble, we deploy heavy machinery like Bobcats and TLBs to handle bulk loading efficiently. This makes us your ideal single-point-of-contact for keeping your entire development site clear and on schedule.</p>
                </div>
                <div>
                    {bobcatImage && <div className="aspect-video relative"><Image src={bobcatImage.imageUrl} alt="Bobcat clearing heavy rubble from a development site in Midrand" data-ai-hint="bobcat clearing site" fill className="rounded-lg object-cover" /></div>}
                </div>
            </div>
        </section>

        <section id="areas" className="mb-16 text-center">
             <h2 className="text-3xl font-bold mb-8">Areas We Serve in Midrand</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">Our teams are deeply familiar with Midrand's landscape, providing fast, reliable service to the new housing developments in **Noordwyk** and **Carlswald**. We offer ongoing contractor support for projects in **Halfway House** and are the trusted cleanup crew for the exclusive lifestyle estates in **Kyalami** and **Midstream**.</p>
        </section>
        
        <section id="recent-projects" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Site Cleaning Projects in Midrand</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card><CardHeader><CardTitle>Development Cleanup</CardTitle><p className="text-sm text-muted-foreground">Noordwyk</p></CardHeader><CardContent><p className="text-sm">**Result:** The site remained safe and productive, preventing any delays and ensuring a professional appearance throughout the 12-month build.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Construction Site Cleaning</CardTitle><p className="text-sm text-muted-foreground">Carlswald</p></CardHeader><CardContent><p className="text-sm">**Result:** The new lifestyle shopping center was delivered in immaculate, handover-ready condition, allowing for on-time tenant occupation.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Renovation Cleanup</CardTitle><p className="text-sm text-muted-foreground">Halfway House</p></CardHeader><CardContent><p className="text-sm">**Result:** The commercial office was made move-in ready within a single day, allowing the new business to begin operations without any project delays.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section id="pricing" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Pricing for Site Cleaning in Midrand</h2>
             <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">We provide transparent quotes based on the scale of your project. Our pricing reflects the high standards and logistical needs of Midrand's developments.</p>
            <div className="grid md:grid-cols-3 gap-8">
                <Card><CardHeader><CardTitle>Small Job</CardTitle><p className="text-sm text-muted-foreground">e.g., single unit cleanup</p></CardHeader><CardContent><p className="text-3xl font-bold">from R2,000</p><p className="text-xs text-muted-foreground mt-1">Includes basic debris removal and sweeping for a small area.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Renovation Cleanup</CardTitle><p className="text-sm text-muted-foreground">e.g., commercial office</p></CardHeader><CardContent><p className="text-3xl font-bold">from R5,000</p><p className="text-xs text-muted-foreground mt-1">A deep clean including dust removal, surface wiping, and rubble clearing.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Development Site</CardTitle><p className="text-sm text-muted-foreground">e.g., ongoing cleaning contract</p></CardHeader><CardContent><p className="text-3xl font-bold">By Assessment</p><p className="text-xs text-muted-foreground mt-1">Custom quote based on size, frequency, and scope of work.</p></CardContent></Card>
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

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine construction site after cleaning in Midrand" data-ai-hint="clean site midrand" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Keep Your Midrand Project Clean & On Schedule</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact Apex Demolitions for a professional quote on site cleaning for your Midrand estate, development, or commercial property. We are ready to support your project.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for a Site Assessment</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/site-cleaning-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Site Cleaning Johannesburg</Link>
        </div>
    </div>
  );
}

    