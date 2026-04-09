
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How much does demolition cost in Germiston?", answer: "The cost depends on the project's scale, from residential jobs to large industrial demolitions. We provide a free, detailed on-site assessment to give you a transparent, fixed-price quote." },
    { question: "Do you offer same-day service in Germiston?", answer: "For urgent projects and smaller jobs, same-day service may be available depending on our schedule. We prioritize rapid response for emergency situations like fire or storm damage. Please call us directly for the fastest service." },
    { question: "What areas in and around Germiston do you cover?", answer: "We serve the entire Germiston area, including Primrose, Lambton, Elsburg, and all surrounding industrial and residential zones. Our service extends across the whole East Rand." }
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

export default function DemolitionGermistonPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'industrialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'commercialDemolition');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Germiston – Professional Demolition Contractors Near You</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Germiston's Industrial & Commercial Demolition Experts
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            We provide professional demolition services in Germiston, handling residential, commercial, and site clearance projects with reliable equipment and experienced teams. As a key industrial and residential area on the East Rand, Germiston has a high demand for demolition services for renovations, redevelopment, and new construction. We serve the entire area, including Primrose, Lambton, and Elsburg.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for an Industrial Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>
        
        <section id="trust-authority" className="py-12 md:py-16 bg-card text-center rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <h2 className="text-3xl font-bold">Trusted Demolition Contractors in Germiston</h2>
                 <p className="mt-4 text-lg text-muted-foreground">
                    We are one of the most trusted demolition contractors in Germiston, providing fast and professional services for residential, commercial, and construction projects across the area. We complete demolition projects across Germiston daily, from small residential jobs to larger construction sites.
                 </p>
                 <div className="mt-6 text-xl font-bold text-foreground flex items-center justify-center gap-2 bg-background p-4 rounded-lg shadow-sm">
                    <p><strong>✔ Trusted demolition contractors working across Germiston every day</strong></p>
                </div>
            </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Demolition Focus in Germiston</h2>
            <div className="space-y-12 max-w-4xl mx-auto">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Residential Demolition Germiston</h3>
                    <p className="text-muted-foreground mb-4">While known for its industry, Germiston has many residential suburbs where homeowners are upgrading and renovating their properties. We provide safe, affordable house demolition services, clearing old structures to make way for new builds or extensions. Our teams work with precision to protect neighbouring properties and ensure a clean site upon completion.</p>
                </div>
                 <div>
                    <h3 className="text-2xl font-semibold mb-4">Commercial Demolition Germiston</h3>
                    <p className="text-muted-foreground mb-4">Our commercial demolition services are essential for the redevelopment of Germiston's business districts. We handle the dismantling of old office blocks, retail spaces, and other commercial structures. We focus on minimizing disruption to nearby businesses and manage projects with strict safety protocols to ensure a smooth process for large-scale redevelopments.</p>
                </div>
                 <div>
                    <h3 className="text-2xl font-semibold mb-4">Site Clearance Germiston</h3>
                    <p className="text-muted-foreground mb-4">A clean site is the foundation of any successful project. Our site clearance service combines demolition with expert <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link>. We clear all unwanted materials, including demolition debris, vegetation, and old foundations, leaving your property ready for the next phase of construction without delay.</p>
                </div>
            </div>
        </section>
        
        <section id="recent-projects" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Demolition Projects in Germiston</h2>
                <div className="max-w-4xl mx-auto space-y-4 text-center">
                    <p className="font-semibold text-lg">✔ Germiston – Residential demolition completed safely</p>
                    <p className="font-semibold text-lg">✔ Primrose – Interior strip-out for renovation project</p>
                    <p className="font-semibold text-lg">✔ Lambton – Site clearance for new development project</p>
                </div>
            </div>
        </section>

        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md-col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Our contractors planning a large-scale industrial demolition in Germiston" data-ai-hint="industrial planning" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Your Trusted Demolition Partner in Germiston</h2>
                <p className="text-muted-foreground mb-4">Choosing Apex Demolitions means partnering with a team that values safety, integrity, and customer satisfaction. Our local knowledge of Germiston ensures your project runs smoothly and complies with all City of Ekurhuleni regulations, whether it is an industrial job or a <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition in Johannesburg</Link> on a smaller scale. We also provide services in <Link href="/demolition-sandton" className="text-primary hover:underline">Sandton</Link> and <Link href="/demolition-randburg" className="text-primary hover:underline">Randburg</Link>.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Deep knowledge of City of Ekurhuleni industrial regulations.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
                </ul>
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Germiston Demolition FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Our Service Network in the East Rand</h2>
             <p className="mt-2 text-muted-foreground">We also provide expert demolition services in nearby areas.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-bedfordview">Bedfordview Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-alberton">Alberton Services</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-boksburg">Projects in Boksburg</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-edenvale">Demolition Edenvale</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Need Demolition in Germiston Today?</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Call or WhatsApp now for fast, professional demolition services in Germiston. Our team is ready to provide a fast, competitive, and no-obligation quote.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><Mail />WhatsApp for Fast Response</a></Button>
          </div>
        </section>
      </div>
    </>
  );
}
