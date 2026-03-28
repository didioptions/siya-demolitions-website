

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, ShieldCheck, Home, Building, Factory, Trash2, ArrowRight, Quote, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
    {
        question: "What is construction site cleaning?",
        answer: "Construction site cleaning, or a 'builders clean,' is a specialized service for after a build or renovation. It focuses on removing heavy debris, fine construction dust, and rubble. The goal is to transform a hazardous worksite into a safe, spotless environment ready for client handover, a task regular domestic cleaners are not equipped for."
    },
    {
        question: "How long does a post-construction clean take in Sandton?",
        answer: "The duration depends on the property's size and the state of the site. A post-renovation cleanup for a luxury apartment might take a single day. A full builders clean for a new home in a Sandton estate typically takes 2-3 days. We provide a clear timeline after our free on-site assessment to meet your project deadlines."
    },
    {
        question: "What is included in your builders cleaning service?",
        answer: "Our builders clean is a comprehensive, top-to-bottom process. It includes full rubble and debris removal, a deep clean of all surfaces to eliminate fine dust, window cleaning, and polishing of all fixtures. We ensure the property is not just visually clean but truly move-in ready for the discerning client."
    },
    {
        question: "Do you work in secure estates like Sandhurst and Bryanston?",
        answer: "Yes, this is our specialty. We have extensive experience working within Sandton's most exclusive estates. We liaise directly with estate management, adhere to all rules on work hours and noise, and operate with the utmost professionalism and discretion to meet the high standards of these communities."
    }
];

export default function SiteCleaningSandtonPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const bobcatImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');

  return (
    <div>
        <section className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center text-center text-white">
            {heroImage && <Image src={heroImage.imageUrl} alt="Pristine construction site after professional cleaning in Sandton" data-ai-hint="clean construction site" fill className="object-cover" priority />}
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mt-2">Site Cleaning Sandton</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
                        Expert post-construction, builders, and demolition cleaning for Sandton's luxury homes, estates, and commercial properties. We deliver a spotless, handover-ready finish.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <a href="tel:0784292760"><Phone /> Call for a Site Assessment</a>
                        </Button>
                        <Button size="lg" variant="secondary" asChild>
                            <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp for a Quote</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                 <h2 className="text-3xl md:text-4xl font-bold">Premium Site Cleaning for Sandton's Premier Properties</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    In Sandton's high-value property market, the final finish is everything. After construction or renovation, a site is left with more than just dust—it’s a landscape of debris, offcuts, and packaging that undermines the quality of your project. Apex Demolitions provides a premier <Link href="/site-cleaning-johannesburg" className="text-primary hover:underline">site cleaning</Link> service specifically for Sandton's luxury homes, secure estates, and commercial properties. We deliver a post-construction and post-demolition cleanup that goes beyond domestic cleaning, ensuring your property is not just clean, but immaculately presented and safe.
                </p>
            </div>
        </section>

        <section className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Specialised Site Cleaning Services in Sandton</h2>
                     <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">We deliver a range of cleaning services designed for the demands of high-end construction and renovation in Sandton.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Building /> Construction Site Cleaning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Ongoing cleanup during a build to maintain safety and productivity.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Home /> Post-Construction Cleaning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">A deep clean after building work is complete, removing all fine dust and debris for handover.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Factory /> Demolition Site Cleanup</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Comprehensive clearing of all materials after a full or partial <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link>.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Sparkles /> Builders Clean</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">The final, meticulous "sparkle clean" that makes a luxury property move-in ready.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section id="sandton-estates" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Specialists in Sandton's Secure Estates & Luxury Properties</h2>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-4"><ShieldCheck className="text-accent h-8 w-8 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-xl">Estate Rule Compliance</h3><p className="text-muted-foreground">Working in Sandton requires more than just a broom. We are specialists in navigating the unique environment of its secure estates and high-end properties. Our teams are professional, discreet, and fully compliant with all HOA rules regarding work hours, noise, and access.</p></div></div>
                    <div className="flex items-start gap-4"><ShieldCheck className="text-accent h-8 w-8 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-xl">Protection of High-End Finishes</h3><p className="text-muted-foreground">We take extreme care to protect valuable assets, from imported marble floors and expansive glass panels to manicured gardens, ensuring our work meets the high standards your property demands.</p></div></div>
                </div>
            </div>
        </section>

        <section id="heavy-cleaning" className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div>
                        {bobcatImage && <div className="aspect-video relative"><Image src={bobcatImage.imageUrl} alt="Bobcat machine clearing heavy debris at a Sandton construction site" data-ai-hint="bobcat clearing rubble" fill className="rounded-lg object-cover shadow-lg" /></div>}
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">Heavy Cleaning & Site Clearance Capability</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Unlike standard cleaning companies, we are a full-service site clearance contractor. Our service seamlessly integrates our <Link href="/rubble-removal-sandton" className="text-primary hover:underline">rubble removal Sandton</Link> division. For large-scale debris, we deploy heavy machinery like Bobcats and TLBs to efficiently clear bulk waste, soil, and construction materials. This capability allows us to handle the toughest jobs, from post-demolition site clearance to preparing large development plots.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-12 md:py-20 bg-background">
            <h2 className="text-3xl font-bold text-center mb-8">Areas We Serve In and Around Sandton</h2>
             <p className="mt-2 text-muted-foreground text-center max-w-3xl mx-auto mb-10">We provide elite site cleaning services across all of Sandton's prestigious suburbs. Our teams regularly work on properties in and around Sandton City, and are the local experts for post-construction cleaning in Morningside and Lonehill. Our expertise also extends to neighbouring business hubs like <Link href="/site-cleaning-randburg" className="text-primary hover:underline">Randburg</Link> and the fast-growing developments in <Link href="/site-cleaning-midrand" className="text-primary hover:underline">Midrand</Link>.</p>
        </section>

        <section id="recent-projects" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Site Cleaning Projects in Sandton</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card><CardHeader><CardTitle>Bryanston (Construction Cleanup)</CardTitle></CardHeader><CardContent><p className="text-sm">Performed a final builders clean on a new luxury home in a secure estate. **Result:** A spotless, dust-free property ready for immediate client handover, meeting the contractor's high standards.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Rivonia (Renovation Cleanup)</CardTitle></CardHeader><CardContent><p className="text-sm">Conducted a deep clean after a major kitchen and living area renovation. **Result:** All fine dust and construction debris were removed, allowing the homeowners to enjoy their new space without the hassle of post-build mess.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Fourways (Development Site)</CardTitle></CardHeader><CardContent><p className="text-sm">Provided ongoing site cleaning for a new commercial development. **Result:** The site was kept safe and productive, with waste managed efficiently throughout the project, preventing delays.</p></CardContent></Card>
                </div>
            </div>
        </section>
        
        <section id="pricing" className="py-12 md:py-16 bg-background rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Site Cleaning Prices in Sandton</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">We provide transparent pricing based on the scope of your project, factoring in site access, property type, and the complexity required for Sandton's high-end properties.</p>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <Card><CardHeader><CardTitle>Small Job</CardTitle><p className="text-muted-foreground text-sm">e.g., single unit cleanup</p></CardHeader><CardContent><p className="text-3xl font-bold">from R2,500</p><p className="text-xs text-muted-foreground mt-1">Includes basic debris removal and sweeping for a small area.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Renovation Cleanup</CardTitle><p className="text-muted-foreground text-sm">e.g., commercial office</p></CardHeader><CardContent><p className="text-3xl font-bold">from R5,500</p><p className="text-xs text-muted-foreground mt-1">A deep clean including dust removal, surface wiping, and rubble clearing.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Large Construction Site</CardTitle><p className="text-muted-foreground text-sm">e.g., new build or commercial site</p></CardHeader><CardContent><p className="text-3xl font-bold">By Assessment</p><p className="text-xs text-muted-foreground mt-1">Custom quote based on size, frequency, and scope of work.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Ready for an Immaculate Site in Sandton?</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Contact Apex Demolitions today for a professional, no-obligation quote on your construction site cleaning needs in Sandton. For urgent projects, we offer a <Link href="/same-day-rubble-removal-johannesburg" className="text-primary-foreground underline hover:text-secondary">same-day cleaning and rubble removal</Link> service.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                  <a href="tel:0784292760"><Phone /> Call for a Professional Assessment</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link href="/contact"><Mail /> Request a Detailed Quote</Link>
              </Button>
          </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/site-cleaning-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Site Cleaning Johannesburg</Link>
        </div>
    </div>
  );
}

