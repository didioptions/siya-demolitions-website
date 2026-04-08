
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, Trash2, ShieldCheck, Quote, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How much does demolition cost in Johannesburg South?",
        answer: "The cost for demolition in Johannesburg South is competitive and depends on the project size, materials, and site access. A small structure might start from R15,000, while a full house demolition can range from R40,000 to R90,000+. We provide a free, detailed on-site assessment to give you a transparent, fixed-price quote."
    },
    {
        question: "Do you offer same-day demolition services in Johannesburg South?",
        answer: "For urgent situations, like a fire-damaged or structurally unsound building, we offer a rapid-response emergency service. While a full demolition can't be completed in one day, we can often be on-site the same day to assess, secure the property, and begin the teardown process."
    },
    {
        question: "Can you handle both residential and commercial demolition projects?",
        answer: "Yes, our teams are equipped to handle a full range of projects in Johannesburg South, from small residential house demolitions and renovations to larger commercial site clearances and interior strip-outs for businesses."
    },
    {
        question: "Do you remove all the rubble after the demolition?",
        answer: "Absolutely. Our service is a complete, all-in-one solution. We handle the demolition, load all the rubble and debris, and transport it to a licensed disposal facility. We leave your site clean, safe, and ready for the next phase."
    },
    {
        question: "What areas in Johannesburg South do you cover?",
        answer: "We cover the entire Johannesburg South region, including Alberton, Glenvista, Mondeor, Mulbarton, Bassonia, Winchester Hills, Rosettenville, Turffontein, and all surrounding suburbs. Our local teams provide a fast and reliable service across the area."
    }
];

export default function DemolitionJohannesburgSouthPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const whyChooseImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Johannesburg South – Professional Demolition Contractors Near You</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Your Local JHB South Demolition Experts
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            We provide professional demolition services across Johannesburg South, handling residential, commercial, and site clearance projects with fast turnaround, reliable equipment, and experienced local teams.
          </p>
          <div className="mt-6 bg-card border p-4 rounded-lg inline-block shadow-sm">
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2 text-sm font-medium text-foreground">
                    <li className="flex items-center justify-center gap-2"><Check className="text-primary h-4 w-4" /> Same-day service available</li>
                    <li className="flex items-center justify-center gap-2"><Check className="text-primary h-4 w-4" /> Residential & commercial</li>
                    <li className="flex items-center justify-center gap-2"><Check className="text-primary h-4 w-4" /> Safe, efficient site clearing</li>
                    <li className="flex items-center justify-center gap-2"><Check className="text-primary h-4 w-4" /> Fast quotes by phone/WhatsApp</li>
                </ul>
            </div>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
                <a href="tel:0784292760"><Phone /> Call Now</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp Quote</a>
            </Button>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                 <h2 className="text-3xl md:text-4xl font-bold">Your Go-To Demolition Partner in Johannesburg South</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Johannesburg South is a vibrant and diverse area, featuring established residential suburbs and bustling commercial zones. From home renovations in Glenvista and Mondeor to commercial upgrades in Alberton, there is a constant need for professional demolition, interior strip-outs, and site clearance. As the area develops, we are here to provide the essential first step for any construction or renovation project. Our team understands the local landscape and community, providing a service that is both efficient and respectful.
                </p>
            </div>
        </section>

        <section id="trust-authority" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                <h2 className="text-3xl font-bold">Trusted Demolition Contractors in Johannesburg South</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Our team is equipped with reliable machinery and years of experience to handle any job, from small residential work to larger construction projects. We use safe, professional demolition methods to deliver results you can depend on.
                </p>
                <div className="mt-6 text-xl font-bold text-foreground flex items-center justify-center gap-2 bg-background p-4 rounded-lg shadow-sm">
                    <p><strong>✔ Trusted demolition contractors working across Johannesburg South and surrounding areas every day</strong></p>
                </div>
            </div>
        </section>

        <section id="services" className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Demolition Services in Johannesburg South</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">We provide a comprehensive range of demolition and site preparation services tailored for the Johannesburg South area.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card><CardHeader><CardTitle>Residential Demolition Johannesburg South</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We handle the complete demolition of houses, cottages, garages, and boundary walls. Our teams work with precision to protect neighbouring properties, making us the ideal choice for residential projects in suburbs like Mulbarton and Bassonia. We manage the entire process, leaving your site clear and ready for your new build.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Commercial Demolition Johannesburg South</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Our commercial service supports businesses across Johannesburg South and nearby industrial areas like Alberton. We demolish old commercial buildings, warehouses, and factories to prepare sites for new developments. We prioritize safety and work efficiently to minimize disruption to surrounding businesses.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Site Clearance Johannesburg South</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">A clean site is a safe site. Our comprehensive site clearance service includes the removal of all building rubble, vegetation, and unwanted materials. We level the ground and prepare it perfectly for the next phase of construction, providing a truly turnkey solution for developers and homeowners.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Interior Strip-Outs & Renovation Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Ideal for renovations in homes or commercial spaces. We perform selective demolition, carefully removing internal walls, fittings, and fixtures while preserving the main structure of the building. This is a popular service for retail and office upgrades in areas like The Glen.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Rubble Removal After Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Every demolition project we undertake includes a full <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal service</Link>. We don't just demolish; we ensure that every piece of debris is loaded and legally disposed of, leaving your Johannesburg South property spotless.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle><Link href="/swimming-pool-demolition-johannesburg-south" className="hover:text-primary">Swimming Pool Demolition</Link></CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Reclaim your garden and reduce maintenance costs by removing an old or unwanted swimming pool. Our expert service includes breaking, removal, and professional backfilling.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section id="recent-projects" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Demolition Projects in Johannesburg South</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card><CardHeader><CardTitle>✔ Glenvista</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Residential demolition completed safely and on time.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>✔ Mondeor</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Interior strip-out for a major home renovation project.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>✔ Alberton</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Full site clearance for a new commercial development.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>✔ Mulbarton</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Demolition and complete rubble removal for a property upgrade.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section id="why-choose-jhb-south" className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    {whyChooseImage && <Image src={whyChooseImage.imageUrl} alt="Team of demolition contractors for Johannesburg South" data-ai-hint="construction team" width={600} height={500} className="rounded-lg shadow-lg" />}
                </div>
                <div>
                    <h2 className="text-3xl font-bold">Why Choose Our Johannesburg South Demolition Team?</h2>
                    <p className="mt-4 text-muted-foreground">We pride ourselves on a professional service tailored for the Johannesburg South community.</p>
                    <ul className="mt-6 space-y-4">
                        <li className="flex items-start gap-3"><Check className="text-primary h-5 w-5 mt-1" /><div><h4 className="font-semibold">Fast Response Times</h4><p className="text-sm text-muted-foreground">Our local teams ensure we can respond quickly to your needs across the South.</p></div></li>
                        <li className="flex items-start gap-3"><Check className="text-primary h-5 w-5 mt-1" /><div><h4 className="font-semibold">Professional & Safe Service</h4><p className="text-sm text-muted-foreground">Our trained and insured crews prioritize safety on every single job.</p></div></li>
                        <li className="flex items-start gap-3"><Check className="text-primary h-5 w-5 mt-1" /><div><h4 className="font-semibold">Clean and Tidy Work</h4><p className="text-sm text-muted-foreground">We ensure all rubble is removed and your site is left spotless.</p></div></li>
                        <li className="flex items-start gap-3"><Check className="text-primary h-5 w-5 mt-1" /><div><h4 className="font-semibold">Clear Communication</h4><p className="text-sm text-muted-foreground">We provide fast quotations and keep you informed throughout the project.</p></div></li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="areas-we-cover" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold">Our Johannesburg South Coverage Area</h2>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                    Our team provides demolition services throughout Johannesburg South. We have extensive experience working in key suburbs like <Link href="/demolition-glenvista" className="text-primary hover:underline">Glenvista</Link>, with its challenging sloped properties, and the bustling residential and commercial nodes of <Link href="/demolition-alberton" className="text-primary hover:underline">Alberton</Link>. We also cover Mondeor, Mulbarton, Bassonia, Winchester Hills, Rosettenville, and Turffontein. Our wider network handles projects across greater <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition Johannesburg</Link>, including specialized work in <Link href="/demolition-sandton" className="text-primary hover:underline">Sandton</Link> and <Link href="/demolition-randburg" className="text-primary hover:underline">Randburg</Link>.
                </p>
            </div>
        </section>

        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Demolition Johannesburg South</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-semibold text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Need Demolition in Johannesburg South Today?</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Call or WhatsApp us now for fast, professional demolition services in Johannesburg South and surrounding areas. Our local teams are ready to provide a free, no-obligation quote.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now for a Quote</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare />WhatsApp Us</a></Button>
          </div>
        </section>
      </div>
    </>
  );
}
