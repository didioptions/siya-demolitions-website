import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Are you experienced with demolitions in Midrand's secure estates like Waterfall?", answer: "Yes, we specialize in working within high-end secure estates. We are fully compliant with HOA regulations regarding safety, work hours, and site cleanliness to ensure a smooth project." },
    { question: "What is your process for commercial site clearing near the Mall of Africa?", answer: "We provide a comprehensive service that includes structural demolition, breaking up foundations and parking areas, and complete rubble removal, preparing the site for new commercial development." },
    { question: "Do I need a demolition permit in Midrand?", answer: "Yes, a permit from the City of Johannesburg is required for structural demolition. Our team manages the entire application process on your behalf to ensure full legal compliance." },
    { question: "How do you ensure the protection of adjacent properties during demolition?", answer: "We use precision demolition techniques, protective screening, and careful site management to prevent any damage to neighboring homes, businesses, or infrastructure." }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function DemolitionMidrandPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'commercialDemolition');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Services in Midrand</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Midrand's Specialist in Estate & Commercial Demolition
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions is the trusted demolition contractor for Midrand's rapidly growing landscape. We specialize in projects that require precision and expertise, from house demolitions in premier estates like Waterfall to large-scale site clearing for commercial developments near the Mall of Africa. As local experts, we seamlessly manage City of Johannesburg permits and estate HOA compliance. Our focus is on delivering safe, efficient, and impeccably clean sites, making us the go-to choice for developers and homeowners in Midrand.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Specialized Demolition for Midrand Properties</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card><CardHeader><CardTitle>Estate Home Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Expert demolition of luxury homes in secure estates, adhering to the strictest HOA rules for minimal disruption.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Commercial Site Clearing</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Large-scale site preparation for new office parks, retail centers, and residential developments in the Midrand area.</p></CardContent></Card>
                    <Card className="sm:col-span-2"><CardHeader><CardTitle>Pool & Foundation Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Complete removal of old swimming pools, foundations, and concrete slabs, leaving your property perfectly level and build-ready.</p></CardContent></Card>
                </div>
                <div className="lg:col-span-2">
                    {servicesImage && <Image src={servicesImage.imageUrl} alt="Clearing a large commercial site in Midrand" data-ai-hint="commercial site" width={600} height={500} className="rounded-lg shadow-lg" />}
                </div>
            </div>
        </section>

        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Our team planning a complex demolition project in Midrand" data-ai-hint="construction planning" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Your Trusted Demolition Partner in Midrand</h2>
                <p className="text-muted-foreground mb-4">Choosing SIMA Demolitions means partnering with a team that values safety, integrity, and customer satisfaction. We are committed to upholding the highest standards on every job, from small residential tasks to large commercial clearings. Our local knowledge of Midrand ensures your project runs smoothly and complies with all regulations.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Expertise in City of Johannesburg and estate compliance.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
                </ul>
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Midrand Demolition FAQs</h2>
            <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
        
        <section className="mb-16 text-center">
            <h2 className="text-2xl font-semibold">Our Service Network</h2>
             <p className="mt-2 text-muted-foreground">We also provide expert demolition services in nearby areas.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Johannesburg Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-centurion">Centurion Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-kempton-park">Kempton Park Projects</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-sandton">Services in Sandton</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Midrand</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us today to discuss your project. Our Midrand team is ready to provide a fast, competitive, and no-obligation quote.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
