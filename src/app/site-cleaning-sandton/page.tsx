
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
        answer: "Construction site cleaning, or a 'builders clean', is a specialized service designed for the aftermath of a build or renovation. Unlike regular cleaning, it involves removing heavy debris, construction dust, and rubble. The goal is to transform a hazardous worksite into a safe, spotless environment ready for client handover or the next phase of work. This is a job for specialists, not general cleaners."
    },
    {
        question: "How long does a post-construction clean take in Sandton?",
        answer: "The duration depends on the size and state of the property. A post-renovation cleanup for a luxury apartment might take a day, while a full builders clean for a new home in a Sandton estate could take 2-3 days. We provide a clear timeline after our free on-site assessment to meet your project deadlines."
    },
    {
        question: "What is included in your builders cleaning service?",
        answer: "Our builders cleaning service is a comprehensive, top-to-bottom process. It includes the complete removal of all construction debris, a deep clean of all surfaces to eliminate fine dust, window cleaning (including frames and sills), and polishing of all fixtures. We ensure the property is not just visually clean but move-in ready."
    },
    {
        question: "Do you work in secure estates like Sandhurst and Bryanston?",
        answer: "Yes, this is our specialty. We have extensive experience working within Sandton's most exclusive estates. We liaise with estate management, adhere to all rules regarding work hours, noise, and access, and operate with the utmost professionalism and discretion to respect the community's high standards."
    }
];

export default function SiteCleaningSandtonPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');
    const bobcatImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');

  return (
    <div>
        <section className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center text-center text-white">
            {heroImage && <Image src={heroImage.imageUrl} alt="Pristine construction site after professional cleaning in Sandton" data-ai-hint="clean construction site" fill className="object-cover" priority />}
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <p className="text-accent font-semibold uppercase tracking-widest">PROFESSIONAL & DISCREET CLEANING SERVICES</p>
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
                    In the heart of Sandton's prestigious commercial and residential landscape, a clean, safe, and professionally presented property is non-negotiable. Apex Demolitions provides an elite site cleaning service tailored for high-end construction, renovation, and post-demolition projects. We go beyond standard cleaning, offering a heavy-duty solution that ensures your luxury property is left immaculate, safe, and ready for its discerning occupants.
                </p>
            </div>
        </section>

        <section className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Site Cleaning Services in Sandton</h2>
                    <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">We deliver a range of specialized cleaning services designed for the demands of high-end construction and renovation in Sandton.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Building /> Construction Site Cleaning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Ongoing cleanup during your build to maintain safety, organization, and productivity on site.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Home /> Post-Construction Cleaning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">A deep clean after building work is complete, removing all dust and debris before handover.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Factory /> Demolition Site Cleanup</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Comprehensive clearing of all materials after a full or partial <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link>.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Sparkles /> Builders Clean</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">The final, meticulous "sparkle clean" that makes a property move-in ready.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section id="sandton-estates" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Specialists in Sandton's Secure Estates & Luxury Homes</h2>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-4"><ShieldCheck className="text-accent h-8 w-8 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-xl">Estate Rule Compliance</h3><p className="text-muted-foreground">We are experts in working within the strict rules of Sandton's premier estates. We liaise with estate management to ensure full compliance with work hours, noise levels, and access protocols, guaranteeing a smooth, disruption-free process.</p></div></div>
                    <div className="flex items-start gap-4"><ShieldCheck className="text-accent h-8 w-8 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-xl">Protection of High-End Finishes</h3><p className="text-muted-foreground">Our teams are trained to work with extreme care around luxury finishes. We use protective coverings for imported tiles, glass, and wooden floors, ensuring our cleanup process leaves no trace behind.</p></div></div>
                    <div className="flex items-start gap-4"><ShieldCheck className="text-accent h-8 w-8 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-xl">Discreet & Professional Service</h3><p className="text-muted-foreground">We understand the need for discretion in Sandton's exclusive neighborhoods. Our uniformed crews operate professionally and quietly, respecting your privacy and that of your neighbors.</p></div></div>
                    <div className="flex items-start gap-4"><ShieldCheck className="text-accent h-8 w-8 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-xl">Immaculate Handover Standard</h3><p className="text-muted-foreground">We deliver a final product that meets the high expectations of the Sandton market, ensuring your property is presented in flawless, pristine condition for sale or client handover.</p></div></div>
                </div>
            </div>
        </section>

        <section id="heavy-cleaning" className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold">Heavy-Duty Site Clearance Capability</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Our service goes far beyond sweeping. As a full-service demolition and <Link href="/rubble-removal-sandton" className="text-primary hover:underline">rubble removal Sandton</Link> contractor, we possess the heavy machinery for complete site clearance. Our Bobcat and TLB fleet can efficiently load and remove bulk construction debris, soil, and rubble, making us the only call you need to make to transform a chaotic building site into a perfectly clean slate.</p>
                        <Button className="mt-6" asChild><Link href="/contact">Get a Full Clearance Quote <ArrowRight className="ml-2" /></Link></Button>
                    </div>
                    <div>
                        {bobcatImage && <div className="aspect-video relative"><Image src={bobcatImage.imageUrl} alt="Bobcat machine clearing heavy rubble at a Sandton construction site" data-ai-hint="bobcat clearing rubble" fill className="rounded-lg object-cover shadow-lg" /></div>}
                    </div>
                </div>
            </div>
        </section>

        <section className="py-12 md:py-20 bg-background">
            <h2 className="text-3xl font-bold text-center mb-8">Areas We Serve In and Around Sandton</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">Our site cleaning teams are active across all of Sandton's prestigious suburbs. We are the trusted local experts for post-construction cleanups in **Bryanston**, renovation debris removal in **Rivonia**, and new-build preparation in **Fourways**, **Morningside**, and **Lonehill**.</p>
        </section>

        <section id="recent-projects" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Site Cleaning Projects in Sandton</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card><CardHeader><CardTitle>Luxury Home Builders Clean</CardTitle><p className="text-sm text-muted-foreground">Bryanston</p></CardHeader><CardContent><p className="text-sm">Performed a meticulous final builders clean on a newly built luxury home in a secure estate. Result: A spotless, dust-free property ready for immediate client handover, exceeding contractor expectations.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Renovation Debris Cleanup</CardTitle><p className="text-sm text-muted-foreground">Rivonia</p></CardHeader><CardContent><p className="text-sm">Completed a fast-turnaround cleanup after a major apartment renovation. All rubble, dust, and packaging materials were removed, allowing the owner to furnish the space ahead of schedule.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>New Development Site Cleaning</CardTitle><p className="text-sm text-muted-foreground">Fourways</p></CardHeader><CardContent><p className="text-sm">Provided ongoing site cleaning and rubble removal for a new commercial development, ensuring the site remained safe and productive for all trades throughout the construction process.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section id="pricing" className="py-12 md:py-16 bg-background rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Site Cleaning Prices in Sandton</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">We provide transparent pricing based on the scope of your project, factoring in site access, complexity, and the level of detail required for Sandton's high-end properties.</p>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <Card><CardHeader><CardTitle>Small Renovation Cleanup</CardTitle><p className="text-muted-foreground text-sm">e.g., Post-renovation clean for a luxury bathroom.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R2,500</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Full Home Builders Clean</CardTitle><p className="text-muted-foreground text-sm">e.g., Deep clean of a newly built standard-size home.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R6,000</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Large Commercial Site</CardTitle><p className="text-muted-foreground text-sm">e.g., Office park or large new home.</p></CardHeader><CardContent><p className="text-3xl font-bold">By Assessment</p></CardContent></Card>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-8">*Disclaimer: Prices are a guideline. For a precise, fixed-price quote, we provide a free on-site assessment.</p>
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
            Contact Apex Demolitions today for a professional, no-obligation quote on your construction site cleaning needs in Sandton. We also provide full <Link href="/demolition-johannesburg" className="text-primary-foreground underline hover:text-secondary">demolition services</Link> and <Link href="/same-day-rubble-removal-johannesburg" className="text-primary-foreground underline hover:text-secondary">same-day rubble removal</Link> across Johannesburg.
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
    </div>
  );
}
