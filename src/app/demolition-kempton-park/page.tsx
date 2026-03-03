import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Can you handle demolitions near O.R. Tambo International Airport?", answer: "Yes, we are experienced in working in the logistical and commercial zones around the airport. We adhere to all special regulations and security requirements for the area." },
    { question: "What is your primary focus in Kempton Park?", answer: "We handle a mix of commercial, industrial, and residential projects. Our expertise in site clearing for logistics and business parks is particularly strong in the Kempton Park area." },
    { question: "Do I need a permit for demolition in Kempton Park?", answer: "Yes, a permit from the City of Ekurhuleni is required for almost all structural demolitions. We manage this entire application process to ensure your project is compliant." },
    { question: "How do you manage noise and dust on your sites?", answer: "We employ dust suppression systems like water misting and adhere strictly to municipal work hours to minimize disruption to nearby businesses and residents in Kempton Park." }
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

export default function DemolitionKemptonParkPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'commercialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteClearing');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Services in Kempton Park</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Your Commercial & Residential Demolition Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions is a key player in Kempton Park's development, providing expert demolition services for commercial, industrial, and residential projects. Located in the heart of the East Rand's economic hub, we specialize in site clearing for logistics parks, demolition for commercial redevelopment, and standard residential demolitions. Our team has a robust understanding of the City of Ekurhuleni's regulations, especially for projects near O.R. Tambo International Airport, ensuring your project is handled with expert compliance and efficiency.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Specialized Demolition for Kempton Park</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card><CardHeader><CardTitle>Commercial & Industrial Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Demolition of warehouses, offices, and other commercial properties in the industrial hubs of Kempton Park.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Home Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Safe removal of houses to make way for new builds or subdivisions in Kempton Park's residential areas like Birchleigh.</p></CardContent></Card>
                    <Card className="sm:col-span-2"><CardHeader><CardTitle>Large-Scale Site Clearing</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Complete site preparation for logistics parks and commercial centers, including removing all debris and leaving your property ready for development.</p></CardContent></Card>
                </div>
                <div className="lg:col-span-2">
                    {servicesImage && <Image src={servicesImage.imageUrl} alt="Large site in Kempton Park being cleared by an excavator" data-ai-hint="site clearing" width={600} height={500} className="rounded-lg shadow-lg" />}
                </div>
            </div>
        </section>

        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
             <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Demolition contractors reviewing plans for a Kempton Park project" data-ai-hint="construction planning" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Your Trusted Demolition Partner in Kempton Park</h2>
                <p className="text-muted-foreground mb-4">Choosing SIMA Demolitions means partnering with a team that values safety, integrity, and customer satisfaction. We are committed to upholding the highest standards on every job, from small residential tasks to large commercial clearings. Our local knowledge of Kempton Park ensures your project runs smoothly and complies with all regulations.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Deep knowledge of City of Ekurhuleni requirements.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
                </ul>
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Kempton Park Demolition FAQs</h2>
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
                <Button variant="outline" asChild><Link href="/demolition-edenvale">Edenvale Services</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-boksburg">Boksburg Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-midrand">Explore Midrand</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Kempton Park</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us today to discuss your project. Our Kempton Park team is ready to provide a fast, competitive, and no-obligation quote.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
