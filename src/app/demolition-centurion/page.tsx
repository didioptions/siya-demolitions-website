import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Do I need a permit for demolition in Centurion?", answer: "Yes, a permit from the City of Tshwane is generally required for any structural demolition. We have a deep understanding of Tshwane's processes and manage the entire permit application for you." },
    { question: "How do you handle demolitions in secure estates in Centurion?", answer: "We are highly experienced in working within Centurion's many secure estates. We coordinate with estate management and adhere to all rules regarding noise, working hours, and site access." },
    { question: "What is your process for rubble removal?", answer: "Our service is all-inclusive. After demolition, our team loads and transports all debris to a licensed City of Tshwane disposal facility, leaving your site completely clean." },
    { question: "Can you demolish just a section of my house for a renovation?", answer: "Absolutely. We specialize in partial demolitions for home extensions and renovations, ensuring we carefully separate the structure while maintaining the integrity of the remaining building." }
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

export default function DemolitionCenturionPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteClearing');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Services in Centurion</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Centurion's Trusted Residential Demolition Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions provides reliable, professional demolition services for the growing Centurion area. As your local contractors, we specialize in safe house demolition, swimming pool removal, and complete site clearing for homeowners and property developers. From secure estates in Irene to suburbs like Highveld, we know Centurion's regulations and are committed to delivering City of Tshwane-compliant projects. Our focus is on making your site preparation process as smooth and efficient as possible.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Core Services for Centurion Properties</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card><CardHeader><CardTitle>Residential Home Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Safe and systematic removal of houses to make way for new builds or subdivisions in Centurion's established residential areas.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Pool Demolition & Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Reclaim your yard space. We manage the breaking, complete removal, and backfilling of old or unwanted swimming pools.</p></CardContent></Card>
                    <Card className="sm:col-span-2"><CardHeader><CardTitle>Full Site Clearing & Rubble Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Our all-in-one service ensures your Centurion property is cleared of all demolition debris and left perfectly ready for construction.</p></CardContent></Card>
                </div>
                <div className="lg:col-span-2">
                    {servicesImage && <Image src={servicesImage.imageUrl} alt="An excavator clearing a demolition site in Centurion" data-ai-hint="site clearing" width={600} height={500} className="rounded-lg shadow-lg" />}
                </div>
            </div>
        </section>

        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Our team of contractors planning a Centurion demolition project" data-ai-hint="construction team" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Your Trusted Demolition Partner in Centurion</h2>
                <p className="text-muted-foreground mb-4">Choosing SIMA Demolitions means partnering with a team that values safety, integrity, and customer satisfaction. We are committed to upholding the highest standards on every job. Our intimate knowledge of Centurion and City of Tshwane regulations ensures your project runs smoothly, safely, and complies with all local requirements, giving you complete peace of mind.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Deep knowledge of City of Tshwane requirements.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
                </ul>
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Centurion Demolition FAQs</h2>
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
                <Button variant="outline" asChild><Link href="/demolition-midrand">Demolition in Midrand</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-kempton-park">Kempton Park Services</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-pretoria">Pretoria Demolition</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Centurion</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us today to discuss your project. Our Centurion team is ready to provide a fast, competitive, and no-obligation quote.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
