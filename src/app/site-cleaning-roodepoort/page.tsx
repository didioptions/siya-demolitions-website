
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
        answer: "Construction site cleaning, or a 'builders clean,' is a heavy-duty service for after a build or renovation. Unlike regular domestic cleaning, it focuses on removing construction debris like wood offcuts, plaster dust, rubble, and packaging. The goal is to transform a hazardous worksite into a safe, clean space ready for the next phase of work or for client handover."
    },
    {
        question: "How long does a builders clean take in Roodepoort?",
        answer: "The timeframe depends on the project size. A standard post-renovation cleanup for a few rooms in a Roodepoort home can often be completed in a single day. A full builders clean for a newly constructed house typically takes 1-2 days. We provide a clear, accurate timeline after a free on-site assessment to meet your project deadlines."
    },
    {
        question: "What is included in your post-construction cleaning service?",
        answer: "Our service is a comprehensive, top-to-bottom process. It includes the removal of all building debris and rubble. We then conduct a deep clean to remove fine construction dust from all surfaces, including walls, floors, windows, cabinets, and fixtures, making the property truly move-in ready."
    },
    {
        question: "Do you handle cleanups for renovations and demolitions?",
        answer: "Yes, absolutely. We specialize in post-renovation and post-demolition cleanups. This involves not just surface cleaning but also the heavy lifting of removing rubble, offcuts, and other construction waste, making us a complete solution for any Roodepoort contractor or homeowner."
    }
];

export default function SiteCleaningRoodepoortPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const whyChooseImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const bobcatImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');

  return (
    <div>
        <section className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center text-center text-white">
            {heroImage && <Image src={heroImage.imageUrl} alt="Pristine residential site after cleaning in Roodepoort" data-ai-hint="clean construction site" fill className="object-cover" priority />}
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mt-2">Site Cleaning Roodepoort</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
                        Professional builders cleans, post-construction cleaning, and renovation cleanup for homes and contractors in Roodepoort. We leave your site spotless, safe, and ready for action.
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
                 <h2 className="text-3xl md:text-4xl font-bold">Your Local Experts for Construction & Renovation Cleaning in Roodepoort</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    After a renovation or building project in Roodepoort, the final hurdle is often the biggest: the mess. Apex Demolitions provides a specialized <Link href="/site-cleaning-johannesburg" className="text-primary hover:underline">site cleaning Johannesburg</Link> service tailored for the homes, contractors, and small developments of the West Rand. We handle the heavy-duty work of clearing construction dust, debris, and rubble, turning your worksite from a hazardous mess into a clean, safe, and professional-looking space.
                </p>
            </div>
        </section>

        <section className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Site Cleaning Services in Roodepoort</h2>
                    <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">We offer a complete range of cleaning and clearing solutions for any project in Roodepoort.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Building /> Construction Site Cleaning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Ongoing cleanup during a build to keep your site safe and productive.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Home /> Post-Construction Cleaning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">A deep clean after building work is complete, removing all fine dust and debris.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Factory /> Demolition Site Cleanup</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Comprehensive clearing of all materials after a full or partial <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link>.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Sparkles /> Builders Clean</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">The final, meticulous clean that makes a property ready for handover.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section id="roodepoort-properties" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Specialists in Site Cleaning for Roodepoort Properties</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">Roodepoort's mix of older homes, ongoing renovations, and varied property layouts presents unique challenges. Our service is designed to handle these local conditions efficiently.</p>
                <div className="grid md:grid-cols-3 gap-8">
                    <Card>
                        <CardHeader><CardTitle>Renovation-Heavy Areas</CardTitle></CardHeader>
                        <CardContent><p className="text-muted-foreground">With many homes in areas like Florida and Weltevreden Park being renovated, managing builders rubble is a constant need. We offer a fast, all-in-one cleanup service to keep your project on track.</p></CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Sloped Sites & Tricky Access</CardTitle></CardHeader>
                        <CardContent><p className="text-muted-foreground">Suburbs like Constantia Kloof are known for their slopes. We are experts in hillside cleanups, ensuring site stability and preventing erosion while safely removing all debris.</p></CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Residential & Mixed-Use Properties</CardTitle></CardHeader>
                        <CardContent><p className="text-muted-foreground">Our teams work with care and precision to clean up sites at residential homes without damaging established gardens, paving, or existing structures that are being retained.</p></CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        <section id="heavy-cleaning" className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div>
                        {bobcatImage && <div className="aspect-video relative"><Image src={bobcatImage.imageUrl} alt="Bobcat clearing heavy debris at a Roodepoort site" data-ai-hint="bobcat clearing rubble" fill className="rounded-lg object-cover shadow-lg" /></div>}
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">Heavy Cleaning & Site Clearance Capability</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Our service goes beyond sweeping. As a full-service demolition company, we integrate our <Link href="/rubble-removal-roodepoort" className="text-primary hover:underline">rubble removal Roodepoort</Link> service for a complete cleanup. For large volumes of debris, we use Bobcats and TLBs to handle bulk loading efficiently. This makes us your true one-stop solution for transforming a messy worksite into a clean and productive environment.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="areas-we-serve" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Serving All of Roodepoort and the West Rand</h2>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                    Our teams provide fast, reliable, and professional site cleaning across all of Roodepoort's key suburbs. We have extensive experience performing post-renovation cleanups in **Florida** and **Weltevreden Park**, and are the trusted contractors for builders cleans on new developments in **Ruimsig**. We also specialize in cleaning sites on the challenging slopes of **Constantia Kloof** and throughout **Horizon View**.
                </p>
            </div>
        </section>
        
        <section id="recent-projects" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Site Cleaning Projects in Roodepoort</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card><CardHeader><CardTitle>Florida Renovation Cleanup</CardTitle></CardHeader><CardContent><p className="text-sm">**Result:** After a full home renovation, our team performed a deep clean and removed all builders rubble. The house was left spotless and safe for the family to move back in ahead of schedule.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Ruimsig Post-Build Cleaning</CardTitle></CardHeader><CardContent><p className="text-sm">**Result:** Performed a meticulous final builders clean on a newly built luxury home in a Ruimsig estate, ensuring every surface was dust-free and perfect for client handover.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Weltevreden Park Site Maintenance</CardTitle></CardHeader><CardContent><p className="text-sm">**Result:** Provided weekly site cleaning for a contractor building a new townhouse complex, keeping the site productive and compliant with all safety standards from start to finish.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section id="pricing" className="py-12 md:py-16 bg-background rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Site Cleaning Prices in Roodepoort</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">We provide transparent pricing based on the project scope. Factors like property size, access, and complexity of the cleanup will influence the final cost.</p>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <Card><CardHeader><CardTitle>Small Job</CardTitle><p className="text-muted-foreground text-sm">e.g., Post-DIY project or single room cleanup.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R1,500</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Full Renovation Cleanup</CardTitle><p className="text-muted-foreground text-sm">e.g., Deep clean after a standard house renovation.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R4,000</p></CardContent></Card>
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
          <h2 className="text-3xl font-bold">Ready for a Spotless Site in Roodepoort?</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Don't let post-construction mess delay your project. Contact Apex Demolitions for a fast, free quote on professional site cleaning in Roodepoort. Ask about our <Link href="/same-day-rubble-removal-johannesburg" className="text-primary-foreground underline hover:text-secondary">same-day rubble removal</Link> for urgent jobs.
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
