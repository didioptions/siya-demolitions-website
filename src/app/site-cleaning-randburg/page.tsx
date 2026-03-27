
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
        answer: "Construction site cleaning, or a 'builders clean,' is a heavy-duty service for after a build or renovation. Unlike regular cleaning, it focuses on removing construction debris like wood offcuts, plaster dust, rubble, and packaging. The goal is to transform a hazardous worksite into a safe, clean space ready for the next phase of work or for client handover."
    },
    {
        question: "How long does a builders clean take in Randburg?",
        answer: "The time required depends on the size of the site and the level of mess. A standard post-renovation cleanup for a few rooms in a Randburg home can often be completed in a single day. A full builders clean for a newly constructed house typically takes 1-2 days. We provide a clear, accurate timeline after a free on-site assessment."
    },
    {
        question: "What is included in your post-construction clean?",
        answer: "Our post-construction cleaning service is a comprehensive, top-to-bottom process. It includes the removal of all building debris and rubble. We then conduct a deep clean to remove fine construction dust from all surfaces, including walls, floors, windows, cabinets, and fixtures, making the property truly move-in ready."
    },
    {
        question: "Do you handle small renovation cleanups?",
        answer: "Yes, absolutely. We specialize in post-renovation cleanups for homeowners in Randburg. Whether it's a kitchen remodel, a new bathroom, or a garden project, we can provide a fast and affordable service to clear away all the mess, allowing you to enjoy your new space without the hassle."
    }
];

export default function SiteCleaningRandburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const bobcatImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');
    const whyChooseImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <div>
        <section className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center text-center text-white">
            {heroImage && <Image src={heroImage.imageUrl} alt="Pristine residential site after cleaning in Randburg" data-ai-hint="clean construction site" fill className="object-cover" priority />}
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mt-2">Site Cleaning Randburg</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
                        Professional builders cleans, post-construction cleaning, and renovation cleanup for homes and contractors in Randburg. We leave your site spotless, safe, and ready for action.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <a href="tel:0784292760"><Phone /> Call for a Free Quote</a>
                        </Button>
                        <Button size="lg" variant="secondary" asChild>
                            <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp for a Fast Response</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                 <h2 className="text-3xl md:text-4xl font-bold">Your Local Experts for Renovation & Construction Cleaning in Randburg</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    After your renovation or building project in Randburg, the final hurdle is often the biggest: the mess. Apex Demolitions provides a specialized **site cleaning Johannesburg** service tailored for the homes and contractors of Randburg. We handle the heavy-duty work of clearing construction dust, debris, and rubble, turning your worksite from a hazardous mess into a clean, safe, and professional-looking space. This isn't general housekeeping; this is professional **post-construction cleaning Johannesburg** can rely on.
                </p>
            </div>
        </section>

        <section className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Site Cleaning Services in Randburg</h2>
                    <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">We offer a complete range of cleaning and clearing solutions for any project in Randburg, big or small.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Building /> Construction Site Cleaning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Ongoing cleanup during a build to keep your site safe and productive.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Home /> Post-Construction Cleaning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">A deep clean after building work is complete, removing all dust and debris.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Factory /> Demolition Site Cleanup</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Complete clearing of all materials after a full or partial <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link>.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Sparkles /> Builders Clean</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">The final, meticulous clean that makes a property ready for handover.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section id="randburg-properties" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Specialists in Site Cleaning for Randburg Properties</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">Randburg's mix of older homes, ongoing renovations, and varied property layouts presents unique challenges. Our service is designed to handle these local conditions efficiently.</p>
                <div className="grid md:grid-cols-3 gap-8">
                    <Card>
                        <CardHeader><CardTitle>Renovation & Demolition Debris</CardTitle></CardHeader>
                        <CardContent><p className="text-muted-foreground">With many homes in areas like Linden and Blairgowrie being renovated, managing builders rubble is a constant need. We offer a fast, all-in-one service that includes a full cleanup and rubble removal, perfect for keeping your project on track.</p></CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Older Homes & Established Gardens</CardTitle></CardHeader>
                        <CardContent><p className="text-muted-foreground">We work with care and precision to clean up sites at older properties without damaging established gardens, paving, or existing structures that are being retained. Property protection is key to our process.</p></CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Varied Site Access</CardTitle></CardHeader>
                        <CardContent><p className="text-muted-foreground">From the narrow streets of older suburbs to the sloped properties in Northcliff, site access can be tricky. We have a range of vehicle sizes and the expertise to handle site cleaning on any property, no matter the logistical challenges.</p></CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        <section id="heavy-cleaning" className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div>
                        {bobcatImage && <div className="aspect-video relative"><Image src={bobcatImage.imageUrl} alt="Bobcat clearing heavy debris at a Randburg site" data-ai-hint="bobcat clearing rubble" fill className="rounded-lg object-cover shadow-lg" /></div>}
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">Heavy-Duty Clearance Capability</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Our service goes beyond sweeping. As a full-service demolition company, we integrate our <Link href="/rubble-removal-randburg" className="text-primary hover:underline">rubble removal Randburg</Link> service for a complete cleanup. For large volumes of debris, we use Bobcats and TLBs to handle bulk loading efficiently. This makes us your true one-stop solution for transforming a messy worksite into a clean, safe, and productive environment.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="areas-we-serve" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Serving All Corners of Randburg</h2>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                    Our teams provide fast, reliable, and professional site cleaning across all of Randburg's key suburbs. We have extensive experience performing post-renovation cleanups on the sloped properties of **Northcliff** and are the go-to contractors for builders cleans in the leafy suburbs of **Linden** and **Blairgowrie**. We also service the bustling commercial and residential hubs of **Ferndale** and **Cresta**.
                </p>
            </div>
        </section>
        
        <section id="recent-projects" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Site Cleaning Projects in Randburg</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card><CardHeader><CardTitle>Post-Renovation Cleanup</CardTitle><p className="text-sm text-muted-foreground">Northcliff</p></CardHeader><CardContent><p className="text-sm">**Result:** After a major home renovation on a sloped property, our team conducted a full builders clean and removed all rubble, leaving the site spotless and safe for the family to move back in.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Final Builders Clean</CardTitle><p className="text-sm text-muted-foreground">Linden</p></CardHeader><CardContent><p className="text-sm">**Result:** Performed a meticulous final clean on a newly built home, ensuring every surface was free of dust and debris before the new homeowners took occupation.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Construction Site Maintenance</CardTitle><p className="text-sm text-muted-foreground">Ferndale</p></CardHeader><CardContent><p className="text-sm">**Result:** Provided weekly site cleaning and rubble removal for a contractor building a new townhouse complex, keeping the site productive and compliant with safety standards.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section id="pricing" className="py-12 md:py-16 bg-background rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Site Cleaning Prices in Randburg</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">We provide transparent pricing based on the scope of your project, factoring in property size, access, and the complexity of the cleanup.</p>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <Card><CardHeader><CardTitle>Small Job</CardTitle><p className="text-muted-foreground text-sm">e.g., Post-DIY project or small trade cleanup.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R1,500</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Full Renovation Cleanup</CardTitle><p className="text-muted-foreground text-sm">e.g., Deep clean for a standard house renovation.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R4,000</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Larger Construction Site</CardTitle><p className="text-muted-foreground text-sm">e.g., New build or ongoing site maintenance.</p></CardHeader><CardContent><p className="text-3xl font-bold">By Assessment</p></CardContent></Card>
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
          <h2 className="text-3xl font-bold">Ready for a Spotless Site in Randburg?</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Don't let post-construction mess delay your project. Contact Apex Demolitions for a fast, free quote on professional site cleaning in Randburg. Ask about our <Link href="/same-day-rubble-removal-johannesburg" className="text-primary-foreground underline hover:text-secondary">same-day rubble removal</Link> service for urgent jobs.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                  <a href="tel:0784292760"><Phone /> Call for an Instant Quote</a>
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
