import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, Trash2, ShieldCheck, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How do you manage rubble removal in the busy Johannesburg CBD?",
        answer: "Rubble removal in the Johannesburg CBD requires meticulous planning, which is our specialty. We schedule our operations during off-peak hours, including nights and weekends, to minimize traffic disruption. Our teams use designated loading zones and coordinate with building management and local authorities. We use appropriate-sized vehicles for navigating city streets and implement strict safety protocols to ensure the safety of pedestrians and surrounding properties. Our logistical expertise makes us the trusted choice for complex urban clear-outs."
    },
    {
        question: "Can you handle rubble from high-rise building renovations?",
        answer: "Yes, we are highly experienced in managing waste from high-rise projects in the JHB CBD. This includes debris from commercial strip-outs, office renovations, and tenant installations. We coordinate the use of service elevators and hoists for bringing materials down to street level, ensuring a clean and efficient process that respects the building's operational requirements and minimizes disruption to other tenants. Our service is tailored for the vertical environment of the city center."
    },
    {
        question: "Are you licensed for commercial waste removal in the CBD?",
        answer: "Absolutely. SIMA Demolitions is a fully licensed and insured waste carrier, compliant with all City of Johannesburg regulations for commercial waste management. This is non-negotiable for work in the central business district. We provide all necessary documentation and ensure every load is transported to a registered facility. Partnering with us guarantees your project is fully compliant, protecting you from any potential legal or financial penalties."
    }
];

export default function RubbleRemovalJohannesburgCbdPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'commercialDemolition');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal in Johannesburg CBD</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <ShieldCheck /> Specialist Site Clearing for Urban Environments
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a CBD Project Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Discuss Your Project</a>
                </Button>
            </div>
             {heroImage && <div className="mt-8 max-w-4xl mx-auto"><Image src={heroImage.imageUrl} alt="Rubble removal in Johannesburg CBD" data-ai-hint="city demolition" width={1200} height={600} className="rounded-lg shadow-lg" /></div>}
        </section>

        <section className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
                SIMA Demolitions Projects is the expert choice for specialized rubble removal in the Johannesburg CBD. Operating in a dense urban core requires logistical precision, strict safety measures, and a deep understanding of municipal regulations. We provide licensed and insured site clearing for commercial strip-outs, high-rise renovations, and construction projects. Our teams are trained to work efficiently in high-traffic environments, ensuring minimal disruption to your business and the public while leaving your site impeccably clean and compliant.
            </p>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our CBD Rubble Removal & Site Clearing Services</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing a commercial renovation site in the CBD" data-ai-hint="office strip-out" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4">Urban Debris Management Specialists</h3>
                    <p className="text-muted-foreground mb-4">Our services are designed for the unique challenges of the Johannesburg city center.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Commercial Strip-Out Debris:** Fast removal of waste from office, retail, and restaurant renovations.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**High-Rise Construction Waste:** Logistically sound removal of construction rubble from multi-story buildings.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Scheduled & Off-Peak Service:** We work around your business hours, including nights and weekends, to minimize disruption.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose SIMA for Johannesburg CBD Projects?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Logistical Experts</h4><p className="text-muted-foreground mt-2 text-sm">We master the complexities of traffic, access, and timing in the busy CBD.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Licensed & Compliant</h4><p className="text-muted-foreground mt-2 text-sm">We are fully compliant with all CoJ regulations for inner-city waste management.</p></div>
                <div><h4 className="font-semibold text-lg">Safety is Paramount</h4><p className="text-muted-foreground mt-2 text-sm">We implement rigorous public and worker safety protocols for every CBD job.</p></div>
                <div><h4 className="font-semibold text-lg">Discreet & Professional</h4><p className="text-muted-foreground mt-2 text-sm">Our teams work efficiently to reduce noise and disruption to your business and neighbors.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Johannesburg CBD Rubble Removal FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Serving Central Johannesburg and Surrounds</h2>
            <p className="mt-2 text-muted-foreground">Our service area extends to all adjacent commercial and residential zones.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg">Rubble Removal Johannesburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-randburg">Randburg Site Clearing</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-soweto">Soweto Rubble Removal</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Full Demolition Services</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Cleared site in Johannesburg CBD" data-ai-hint="clean city site" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Schedule Your CBD Site Clearing Project</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                    Trust the experts in urban debris management. Contact SIMA for a detailed quote and logistical plan for your Johannesburg CBD project.
                </p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Quote className="mr-2" /> Get a Detailed Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call a Project Manager</a></Button>
                </div>
            </div>
        </section>
      </div>
    </>
  );
}
