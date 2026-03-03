import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "What is your main service area in Edenvale?", answer: "We serve all neighborhoods in Edenvale and its surroundings, from Greenstone Hill to the Avenues. We provide fast, responsive, and local service across the area." },
    { question: "What is the process for demolishing a house in Edenvale?", answer: "Our process starts with a free site assessment. We then handle the permit application with the City of Ekurhuleni, perform the demolition safely, and finish with a complete rubble removal and site cleanup." },
    { question: "Do you also remove old paving and garden structures?", answer: "Yes, our site clearing services include the removal of old paving, garden sheds, walls, and other outdoor structures in addition to the main building demolition." },
    { question: "Are your demolition quotes free?", answer: "Yes, all our quotes are 100% free and come with no obligation. We provide a detailed breakdown of costs so you know exactly what to expect." }
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

export default function DemolitionEdenvalePage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Edenvale Demolition Services</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Your Local, Licensed Edenvale Demolition Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions is a leading demolition contractor serving Edenvale and the surrounding East Rand areas. We provide efficient, safe, and affordable demolition services with a focus on residential projects. Whether you're in Greenstone Hill or the Avenues, our team specializes in house demolition, pool removal, and comprehensive site clearing. We manage the entire process, including City of Ekurhuleni permits, to ensure your project is completed on time, within budget, and to the highest standards of safety and cleanliness.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Focused Demolition Services for Edenvale</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
                 <div className="lg:col-span-2">
                    {servicesImage && <Image src={servicesImage.imageUrl} alt="Clean site in Edenvale after rubble removal" data-ai-hint="rubble removal" width={600} height={500} className="rounded-lg shadow-lg" />}
                </div>
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card><CardHeader><CardTitle>Home Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Safe removal of houses, townhouses, and other residential structures to make way for new builds or subdivisions.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Pool Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Reclaim your yard by removing old swimming pools. We handle the breaking, removal, and complete backfilling process.</p></CardContent></Card>
                    <Card className="sm:col-span-2"><CardHeader><CardTitle>Complete Site Clearing</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We clear all demolition debris, rubble, and waste, leaving your Edenvale property 100% ready for its next purpose.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Your Trusted Demolition Partner in Edenvale</h2>
                <p className="text-muted-foreground mb-4">Choosing SIMA Demolitions means partnering with a team that values safety, integrity, and customer satisfaction. We are committed to upholding the highest standards on every job, from small residential tasks to large commercial clearings. Our local knowledge of Edenvale ensures your project runs smoothly and complies with all regulations.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Deep knowledge of City of Ekurhuleni requirements.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
                </ul>
            </div>
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Our Edenvale demolition team planning a project" data-ai-hint="construction planning" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Edenvale Demolition FAQs</h2>
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
                <Button variant="outline" asChild><Link href="/demolition-bedfordview">Bedfordview Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-kempton-park">Kempton Park Services</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-boksburg">Boksburg Demolition</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Edenvale</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us today to discuss your project. Our Edenvale team is ready to provide a fast, competitive, and no-obligation quote.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
