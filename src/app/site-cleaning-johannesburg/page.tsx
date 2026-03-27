import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, ShieldCheck, Home, Building, Factory, Trash2, ArrowRight, Quote, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
    {
        question: "What exactly is construction site cleaning?",
        answer: "Construction site cleaning, or a 'builders clean', is a specialized service performed after construction, renovation, or demolition. Unlike regular cleaning, it involves removing heavy debris like rubble, wood, and packaging, as well as fine construction dust from all surfaces. The goal is to transform a hazardous worksite into a safe, clean, and presentable space ready for handover or the next phase of work."
    },
    {
        question: "When is professional site cleaning needed?",
        answer: "Professional site cleaning is crucial at several project stages. It's needed during construction to maintain safety and productivity (ongoing cleaning), after a project is finished for a final handover (post-construction clean), and after a demolition to clear the site completely. It is also vital for residential renovations to make the home livable again after the builders have left."
    },
    {
        question: "How long does it take to clean a construction site?",
        answer: "The time required depends entirely on the site's size and the extent of the mess. A post-renovation cleanup for a single room might take a few hours, while a full builders clean for a new house could take a full day. Large commercial or industrial sites in Johannesburg may require a dedicated team for several days. We provide a clear timeline after our free on-site assessment."
    },
    {
        question: "What is included in a post-construction clean?",
        answer: "Our post-construction cleaning service is comprehensive. It includes a full sweep and removal of all building debris and rubble. We then perform a deep clean to remove fine dust from all surfaces, including floors, walls, windows, and fixtures. The goal is to make the property immaculate and move-in ready."
    }
];

export default function SiteCleaningJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const whyChooseImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
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
                <h2 className="text-3xl font-bold text-center mb-12">Our Site Cleaning Specialities</h2>
                 <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">We offer a range of specialized cleaning services designed for the construction and demolition industry.</p>
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
                        <h2 className="text-3xl font-bold">Heavy-Duty Site Clearance</h2>
                        <p className="mt-4 text-muted-foreground">Our site cleaning service isn't just about sweeping up dust. As a full-service demolition company, we have the heavy machinery required for complete site clearance. This includes our comprehensive <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal Johannesburg</Link> service to haul away tons of debris, and our <Link href="/plant-hire-johannesburg" className="text-primary hover:underline">Bobcat and TLB hire</Link> to handle bulk earth and rubble loading efficiently.</p>
                    </div>
                    <div>
                        {bobcatImage && <div className="aspect-video relative"><Image src={bobcatImage.imageUrl} alt="Bobcat clearing heavy debris from a construction site" data-ai-hint="bobcat clearing rubble" fill className="rounded-lg object-cover" /></div>}
                    </div>
                </div>
            </section>

            <section id="why-choose-us" className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose Apex for Site Cleaning in Johannesburg?</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        {whyChooseImage && <div className="aspect-video relative"><Image src={whyChooseImage.imageUrl} alt="Professional construction team planning a site cleanup" data-ai-hint="construction team" fill className="rounded-lg object-cover" /></div>}
                    </div>
                    <div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Experienced Team</h3><p className="text-muted-foreground text-sm">Our crews are trained specifically for the demands of construction sites, not domestic cleaning.</p></div></li>
                            <li className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Fast Turnaround</h3><p className="text-muted-foreground text-sm">We work quickly and efficiently to meet your deadlines, with <Link href="/same-day-rubble-removal-johannesburg" className="text-primary hover:underline">same-day service</Link> often available.</p></div></li>
                            <li className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Equipment & Manpower</h3><p className="text-muted-foreground text-sm">We have the teams and machinery to handle projects of any scale.</p></div></li>
                            <li className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Reliable & Professional</h3><p className="text-muted-foreground text-sm">We are a licensed, insured, and trusted partner to builders across Johannesburg.</p></div></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="pricing" className="py-12 md:py-16 bg-card rounded-lg mb-16">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Site Cleaning Prices in Johannesburg</h2>
                    <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">We provide transparent pricing based on the scope of your project. Below are some common scenarios.</p>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Card><CardHeader><CardTitle>Small Site Cleanup</CardTitle><p className="text-muted-foreground text-sm">e.g., Post-DIY project or small trade job.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R1,500</p></CardContent></Card>
                        <Card><CardHeader><CardTitle>Full Renovation Cleanup</CardTitle><p className="text-muted-foreground text-sm">e.g., Post-renovation deep clean for a standard house.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R4,500</p></CardContent></Card>
                        <Card><CardHeader><CardTitle>Large Construction Site</CardTitle><p className="text-muted-foreground text-sm">e.g., Ongoing or final clean for a new build.</p></CardHeader><CardContent><p className="text-3xl font-bold">By Quote</p></CardContent></Card>
                    </div>
                </div>
            </section>

            <section id="recent-projects" className="py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Site Cleaning Projects in Johannesburg</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <Card>
                            <CardHeader><CardTitle>Post-Construction Builders Clean</CardTitle><p className="text-sm text-muted-foreground">Sandton</p></CardHeader>
                            <CardContent><p className="text-sm">Performed a final, meticulous builders clean on a newly constructed luxury home in a Sandton estate before handover. The job included removing fine dust from all surfaces, polishing windows, and clearing all remaining site debris.</p></CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle>Development Site Maintenance</CardTitle><p className="text-sm text-muted-foreground">Midrand</p></CardHeader>
                            <CardContent><p className="text-sm">Provided ongoing weekly site cleaning for a large housing development in Midrand, ensuring access roads were clear, waste was managed, and the site remained safe and productive for all contractors throughout the project.</p></CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle>Post-Renovation Residential Cleanup</CardTitle><p className="text-sm text-muted-foreground">Randburg</p></CardHeader>
                            <CardContent><p className="text-sm">After a major home renovation, our team performed a deep clean, removing all builders rubble, dust, and packaging. The house was left spotless and ready for the family to move back in, all completed in a single day.</p></CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="areas-we-serve" className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">Serving All Key Johannesburg Areas</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                    Our site cleaning crews are active across the greater Johannesburg area, providing reliable service to key commercial and residential hubs including Sandton, Randburg, Midrand, Roodepoort, and the East Rand.
                </p>
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
                Contact Apex Demolitions today for a free, no-obligation quote on your construction site cleaning needs in Johannesburg.
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
