import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Do you specialize in commercial strip-outs in Rosebank?", answer: "Yes, we are highly experienced in commercial interior strip-outs for offices, retail spaces, and restaurants in Rosebank's bustling commercial district, preparing them for new tenants or renovations." },
    { question: "How do you manage demolition in a busy area like Rosebank?", answer: "We implement strict site management plans, including controlled work hours, dust and noise suppression, and coordinated logistics to minimize disruption to surrounding businesses and traffic." },
    { question: "Are you familiar with heritage considerations for older Rosebank properties?", answer: "Yes, we work carefully and can collaborate with heritage consultants when required. For any property with potential heritage value, we ensure our demolition approach is compliant and sensitive." },
    { question: "What is the timeline for a commercial interior demolition?", answer: "A typical office or retail strip-out can take anywhere from a few days to a couple of weeks, depending on the size and complexity. We provide a detailed schedule with our quote." }
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

export default function DemolitionRosebankPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'commercialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'homeHero');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Services in Rosebank</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Rosebank's Commercial & Residential Demolition Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions provides specialized demolition services for the dynamic, mixed-use environment of Rosebank. As a leading contractor in Johannesburg's central suburbs, we excel in commercial interior strip-outs for the area's bustling office and retail spaces, as well as precision residential demolitions in leafy suburbs like Parkwood. We are experts at navigating the logistical complexities of high-traffic areas and ensuring full compliance with the City of Johannesburg. Our focus is on delivering projects with minimal disruption and maximum professionalism.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Demolition Focus in Rosebank</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
                 <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card><CardHeader><CardTitle>Commercial Interior Strip-Outs</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Interior demolition for office and retail spaces in Rosebank's commercial district, preparing units for new tenant installations.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Residential Home Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Safe and careful removal of houses to make way for new builds or subdivisions in adjacent areas like Parkwood and Saxonwold.</p></CardContent></Card>
                    <Card className="sm:col-span-2"><CardHeader><CardTitle>Site Clearing & Rubble Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Complete site preparation, including removing all demolition debris and waste, leaving your Rosebank property ready for construction.</p></CardContent></Card>
                </div>
                 <div className="lg:col-span-2">
                    {servicesImage && <Image src={servicesImage.imageUrl} alt="Demolition of a building in a dense urban area like Rosebank" data-ai-hint="urban demolition" width={600} height={500} className="rounded-lg shadow-lg" />}
                </div>
            </div>
        </section>

        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
             <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Our team discussing a commercial strip-out project in Rosebank" data-ai-hint="construction planning" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Your Trusted Demolition Partner in Rosebank</h2>
                <p className="text-muted-foreground mb-4">Choosing SIMA Demolitions means partnering with a team that values safety, integrity, and customer satisfaction. We are committed to upholding the highest standards on every job, from complex commercial strip-outs to sensitive residential demolitions. Our local knowledge of Rosebank ensures your project runs smoothly and complies with all regulations.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Deep knowledge of City of Johannesburg commercial & heritage codes.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
                </ul>
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Rosebank Demolition FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Our Central & Northern Suburbs Network</h2>
             <p className="mt-2 text-muted-foreground">We also provide expert demolition services in nearby areas.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Johannesburg Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-sandton">Sandton Commercial Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-randburg">Services in Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-bryanston">Bryanston Demolition</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Rosebank</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us today to discuss your project. Our Rosebank team is ready to provide a fast, competitive, and no-obligation quote.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
