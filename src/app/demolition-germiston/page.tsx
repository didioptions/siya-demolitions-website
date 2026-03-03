import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Can you handle large-scale industrial demolition in Germiston?", answer: "Yes, this is one of our core specialties. We have the heavy-duty equipment and certified teams to safely dismantle large industrial structures like factories and warehouses." },
    { question: "How do you handle hazardous materials on industrial sites?", answer: "We follow strict safety protocols for identifying and handling potential hazardous materials. If asbestos or other specific hazards are found, we work with certified specialists to ensure safe removal and disposal before demolition." },
    { question: "Do you provide services for commercial strip-outs?", answer: "Yes. We offer complete interior strip-out services for commercial buildings, offices, and retail spaces, preparing them for renovation or a complete change of use." },
    { question: "What is your safety record on large projects?", answer: "Safety is our number one priority. We have an excellent safety record and implement rigorous safety plans, site inductions, and have dedicated safety officers on all large-scale projects." }
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Services in Germiston</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Germiston's Industrial & Commercial Demolition Experts
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions is the premier demolition contractor for Germiston's industrial and commercial sectors. With deep experience in the East Rand's industrial heartland, we specialize in large-scale factory demolition, warehouse clearing, and full site preparation. We are experts in navigating the City of Ekurhuleni's regulations for complex industrial projects. Our commitment to safety, efficiency, and environmental compliance makes us the trusted partner for transforming Germiston's industrial landscapes for future development.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for an Industrial Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Demolition Focus in Germiston</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2">
                    {servicesImage && <Image src={servicesImage.imageUrl} alt="Large commercial building site being cleared in Germiston" data-ai-hint="commercial site" width={600} height={500} className="rounded-lg shadow-lg" />}
                </div>
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card><CardHeader><CardTitle>Industrial Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Expert demolition of factories, warehouses, and industrial structures with a focus on safety and environmental compliance.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Commercial Site Clearing</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Complete clearing of commercial properties to prepare large tracts of land for new developments, retail centers, or logistics parks.</p></CardContent></Card>
                    <Card className="sm:col-span-2"><CardHeader><CardTitle>Residential & Rubble Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We also offer safe house demolition and fast rubble removal services for residential projects within Germiston.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Your Trusted Demolition Partner in Germiston</h2>
                <p className="text-muted-foreground mb-4">Choosing SIMA Demolitions means partnering with a team that values safety, integrity, and customer satisfaction. We are committed to upholding the highest standards on every job, from small residential tasks to large industrial clearings. Our local knowledge of Germiston ensures your project runs smoothly and complies with all regulations.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Deep knowledge of City of Ekurhuleni industrial regulations.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
                </ul>
            </div>
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Our contractors planning a large-scale industrial demolition in Germiston" data-ai-hint="industrial planning" width={600} height={500} className="rounded-lg shadow-lg" />}
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
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Johannesburg Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-bedfordview">Bedfordview Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-alberton">Alberton Services</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-boksburg">Projects in Boksburg</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Germiston</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us today to discuss your project. Our Germiston team is ready to provide a fast, competitive, and no-obligation quote.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
