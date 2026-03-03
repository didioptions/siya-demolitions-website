import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How do you operate within Fourways' secure lifestyle estates?", answer: "We are experts at working within the strict rules of Fourways estates like Dainfern and Broadacres. We coordinate with estate management to ensure our work is compliant, clean, and minimally disruptive." },
    { question: "Do I need a permit for demolition in Fourways?", answer: "Yes, a permit from the City of Johannesburg is almost always required. We simplify this for you by managing the entire permit application process as part of our standard service." },
    { question: "What measures do you take to protect my neighbors' properties?", answer: "We implement comprehensive safety and protection measures, including dust screens, careful planning, and controlled demolition techniques to ensure no damage to adjacent properties." },
    { question: "Can you handle the removal of a swimming pool and paving?", answer: "Absolutely. Our service includes the breaking and removal of swimming pools, jacuzzis, paving, and other landscape structures to prepare your site for a new vision." }
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

export default function DemolitionFourwaysPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoWork');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Services in Fourways</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> The Estate & Residential Demolition Specialists in Fourways
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions provides specialized demolition services tailored for the unique environment of Fourways. As premier contractors in Johannesburg's northern suburbs, we excel in navigating the requirements of secure lifestyle estates. From full house demolitions in Dainfern to site clearing in Broadacres, our focus is on precision, safety, and compliance. We manage all City of Johannesburg permits and estate approvals, ensuring your project is handled with the utmost professionalism for a clean, build-ready site.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Specialized Demolition for Fourways Properties</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card><CardHeader><CardTitle>Estate Home Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Safe, compliant removal of houses within secure estates, adhering to all HOA regulations and timelines.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Pool & Patio Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Reclaim your outdoor living area by removing old swimming pools, patios, and paving. We handle everything from breaking to backfilling.</p></CardContent></Card>
                    <Card className="sm:col-span-2"><CardHeader><CardTitle>Site Clearing & Rubble Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Complete site preparation, including removing all demolition debris and waste, leaving your Fourways property ready for construction.</p></CardContent></Card>
                </div>
                 <div className="lg:col-span-2">
                    {servicesImage && <Image src={servicesImage.imageUrl} alt="Removing a swimming pool in a Fourways estate" data-ai-hint="pool demolition" width={600} height={500} className="rounded-lg shadow-lg" />}
                </div>
            </div>
        </section>

        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Demolition contractors planning a project in a Fourways estate" data-ai-hint="construction team" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Your Trusted Demolition Partner in Fourways</h2>
                <p className="text-muted-foreground mb-4">Choosing SIMA Demolitions means partnering with a team that values safety, integrity, and customer satisfaction. We are committed to upholding the highest standards on every job. Our local knowledge of Fourways and its estates ensures your project runs smoothly and complies with all City of Johannesburg and HOA regulations.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Expertise in managing estate and council approvals.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
                </ul>
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Fourways Demolition FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Our Service Network in the Northern Suburbs</h2>
             <p className="mt-2 text-muted-foreground">We also provide expert demolition services in nearby areas.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Johannesburg Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-sandton">Sandton Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-randburg">Services in Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-bryanston">Bryanston Demolition Experts</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Fourways</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us today to discuss your project. Our Fourways team is ready to provide a fast, competitive, and no-obligation quote.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
