
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
        answer: "Construction site cleaning, often called a 'builders clean', is a heavy-duty cleaning service for after a build, renovation, or demolition. Unlike regular cleaning, it focuses on removing construction debris like wood offcuts, plaster dust, rubble, and packaging. The goal is to transform a hazardous worksite into a safe, clean, and presentable space, ready for the next phase of work or for the final client handover. It's a crucial step that requires specialized knowledge of construction waste and safety protocols."
    },
    {
        question: "When is professional site cleaning needed?",
        answer: "Professional site cleaning is essential at several key stages of a project. It's often required during construction to maintain a safe working environment for all trades. The most common need is for a 'post-construction clean' after all building work is complete to prepare the property for its occupants. It is also a critical final step after any demolition project to ensure all hazardous materials and debris are completely removed, leaving the site safe and ready for new development."
    },
    {
        question: "How long does a builders clean take?",
        answer: "The time required for a builders clean in Johannesburg depends entirely on the size of the site and the level of mess. A standard post-renovation cleanup for a few rooms might take a single day. A full builders clean for a newly constructed house typically takes 1-2 days. For large commercial properties or extensive construction sites, the cleaning may be phased over several days. We provide a clear, accurate timeline after a free on-site assessment."
    },
    {
        question: "What is included in a post-construction clean?",
        answer: "Our post-construction cleaning service is a comprehensive, top-to-bottom process. It includes the removal of all building debris and rubble from the site. We then conduct a deep clean to remove fine construction dust from all surfaces, including walls, floors, windows (and window sills), cabinets, and fixtures. We ensure the property is not just visually clean but free of the dust and grime that can linger after construction, making it truly move-in ready."
    }
];

export default function SiteCleaningJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const bobcatImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');

  return (
    <>
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
            <section className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Site Cleaning Johannesburg</h1>
                <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                    <Sparkles /> Your Construction & Post-Build Cleaning Experts
                </p>
                <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                    After the construction, renovation, or demolition dust has settled, you need a professional team to handle the cleanup. Apex Demolitions provides expert construction site cleaning in Johannesburg. We transform messy, hazardous worksites into clean, safe, and ready-to-use spaces with our fast, reliable, and insured builders cleaning services.
                </p>
                 <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                        <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Free Site Assessment</a>
                    </Button>
                    <Button size="lg" variant="secondary" asChild>
                        <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp for a Fast Quote</a>
                    </Button>
                </div>
            </section>

             <section id="services" className="mb-16">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Comprehensive Site Cleaning Services</h2>
                    <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">We offer a complete range of cleaning and clearing solutions tailored to any project in Johannesburg. No job is too big or too small.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Building /> Construction Site Cleaning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Ongoing cleanup during a building project to maintain safety and productivity.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Home /> Post-Construction Cleaning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">A deep, final clean for new builds or renovations before client handover.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Factory /> Demolition Site Cleanup</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Complete clearing of all debris after a full or partial <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link>.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><ShieldCheck /> Builders Cleaning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">The final, meticulous clean that makes a property sparkle and ready for occupancy.</p></CardContent></Card>
                </div>
            </section>

            <section id="heavy-cleaning" className="mb-16 bg-card p-8 rounded-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold">Heavy-Duty Site Clearance Capability</h2>
                        <p className="mt-4 text-muted-foreground">Our site cleaning service isn't just about sweeping up dust. As a full-service demolition company, we have the heavy machinery required for complete site clearance. This includes our comprehensive <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal Johannesburg</Link> service to haul away tons of debris, and our <Link href="/plant-hire-johannesburg" className="text-primary hover:underline">Bobcat and TLB hire</Link> to handle bulk earth and rubble loading efficiently. This makes us your true one-stop solution for transforming a messy site into a blank canvas.</p>
                    </div>
                    <div>
                        {bobcatImage && <div className="aspect-video relative"><Image src={bobcatImage.imageUrl} alt="Bobcat clearing heavy debris from a construction site" data-ai-hint="bobcat clearing rubble" fill className="rounded-lg object-cover" /></div>}
                    </div>
                </div>
            </section>

             <section id="areas-we-serve" className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">Serving All Key Johannesburg Areas</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                    Our site cleaning crews are active across the greater Johannesburg area, providing reliable service to key commercial and residential hubs. We offer expert construction cleaning in Sandton's luxury estates, ongoing site maintenance for new developments in Midrand, and fast post-renovation cleanups in Randburg and Roodepoort.
                </p>
                 <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="outline" asChild><Link href="/site-cleaning-sandton">Sandton</Link></Button>
                    <Button variant="outline" asChild><Link href="/site-cleaning-randburg">Randburg</Link></Button>
                    <Button variant="outline" asChild><Link href="/site-cleaning-midrand">Midrand</Link></Button>
                    <Button variant="outline" asChild><Link href="/site-cleaning-roodepoort">Roodepoort</Link></Button>
                </div>
            </section>

            <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Site Cleaning in Johannesburg?</h2>
                 <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">We are more than just cleaners; we are your partners in project success. We deliver a fast, safe, and professional service that Johannesburg's top builders and homeowners trust.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Experienced Team</h3><p className="text-sm text-muted-foreground">Our crews are trained specifically for construction sites, not domestic cleaning.</p></div></div>
                    <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Fast Turnaround</h3><p className="text-sm text-muted-foreground">We work efficiently to meet your deadlines, with <Link href="/same-day-rubble-removal-johannesburg" className="text-primary hover:underline">same-day service</Link> often available.</p></div></div>
                    <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Equipment & Manpower</h3><p className="text-sm text-muted-foreground">We have the teams and machinery to handle projects of any scale.</p></div></div>
                    <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Reliable & Professional</h3><p className="text-sm text-muted-foreground">We are a licensed, insured, and trusted partner to builders across Johannesburg.</p></div></div>
                </div>
            </section>
             
            <section id="pricing" className="py-12 md:py-16 bg-background rounded-lg mb-16">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Site Cleaning Prices in Johannesburg</h2>
                    <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">We provide transparent pricing based on the scope of your project. Below are some common scenarios to give you an idea of our competitive rates.</p>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Card><CardHeader><CardTitle>Small Site Cleanup</CardTitle><p className="text-muted-foreground text-sm">e.g., Post-DIY project or small trade job.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R1,500</p><p className="text-sm mt-2 text-muted-foreground">Includes labour for clearing and one load of rubble removal.</p></CardContent></Card>
                        <Card><CardHeader><CardTitle>Full Renovation Cleanup</CardTitle><p className="text-muted-foreground text-sm">e.g., Post-renovation deep clean for a standard house.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R4,500</p><p className="text-sm mt-2 text-muted-foreground">Includes a small team, deep cleaning of surfaces, and multiple loads of rubble.</p></CardContent></Card>
                        <Card><CardHeader><CardTitle>Large Construction Site</CardTitle><p className="text-muted-foreground text-sm">e.g., Ongoing or final clean for a new build.</p></CardHeader><CardContent><p className="text-3xl font-bold">By Quote</p><p className="text-sm mt-2 text-muted-foreground">Requires an on-site assessment to quote accurately based on size and scope.</p></CardContent></Card>
                    </div>
                </div>
            </section>
            
            <section id="recent-projects" className="py-12 md:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Site Cleaning Projects in Johannesburg</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <Card>
                            <CardHeader><CardTitle>Post-Construction Builders Clean</CardTitle><p className="text-sm text-muted-foreground">Sandton</p></CardHeader>
                            <CardContent><p className="text-sm">Performed a final, meticulous builders clean on a newly constructed luxury home in a Sandton estate before handover. The job included removing fine dust from all surfaces, polishing windows, and clearing all remaining site debris. The property was made immaculate for the new owners.</p></CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle>Development Site Maintenance</CardTitle><p className="text-sm text-muted-foreground">Midrand</p></CardHeader>
                            <CardContent><p className="text-sm">Provided ongoing weekly site cleaning for a large housing development in Midrand. This ensured access roads were clear, waste was managed, and the site remained safe and productive for all contractors throughout the multi-month project.</p></CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle>Post-Renovation Residential Cleanup</CardTitle><p className="text-sm text-muted-foreground">Randburg</p></CardHeader>
                            <CardContent><p className="text-sm">After a major home renovation in Randburg, our team performed a deep clean, removing all builders rubble, dust, and packaging. The house was left spotless and ready for the family to move back in, all completed in a single day.</p></CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="faq" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
              <h2 className="text-3xl font-bold">Ready for a Clean, Safe, and Professional Site?</h2>
              <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                Contact Apex Demolitions today for a free, no-obligation quote on your construction site cleaning needs in Johannesburg. Same-day service available in many areas!
              </p>
              <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                      <a href="tel:0784292760"><Phone /> Call for a Fast Quote</a>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                      <Link href="/contact"><Mail /> Request a Detailed Quote</Link>
                  </Button>
              </div>
            </section>
        </div>
    </>
  );
}
