import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "What is your main service area in Benoni?", answer: "We serve all of Benoni, including Rynfield, Farrarmere, Lakefield, and the surrounding suburbs. Our local East Rand teams ensure a fast response for any demolition or site clearing project." },
    { question: "Do I need council approval for demolition in Benoni?", answer: "Yes, a permit from the City of Ekurhuleni is required for most structural demolitions. As part of our service, we manage the entire permit application process to ensure your project is fully compliant." },
    { question: "How do you handle demolition near the many lakes in Benoni?", answer: "We take extra precautions when working near water bodies. Our site plans include measures to prevent any debris or runoff from entering the lakes, ensuring we protect the local environment while completing the demolition safely." }
];

export default function DemolitionBenoniPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Contractors Benoni</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Your Local, Licensed Benoni Demolition Experts
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Apex Demolitions provides reliable and professional demolition services across Benoni. As a trusted local contractor on the East Rand, we specialize in safe residential house demolition, commercial site clearing, swimming pool removal, and comprehensive rubble removal. Our team is well-versed in Benoni's specific building codes and the City of Ekurhuleni's regulations, guaranteeing a smooth and compliant project.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Professional Demolition Services in Benoni</h2>
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
                <Card><CardHeader><CardTitle>Residential Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Safe removal of houses, garages, and other structures to make way for new builds in suburbs like Rynfield and Farrarmere.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Commercial Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Site clearing for new business premises, retail spaces, and office parks in Benoni's commercial hubs.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Pool Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Reclaim your yard space by removing old or unused swimming pools. We handle breaking, removal, and professional backfilling.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Rubble Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Complete site cleanup, ensuring all demolition debris and waste is cleared and legally disposed of.</p></CardContent></Card>
            </div>
        </section>
        
        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Demolition Contractors?</h2>
                <p className="text-muted-foreground mb-4">Choosing Apex Demolitions means partnering with a team that values safety, integrity, and customer satisfaction. Our local knowledge of Benoni ensures your project runs smoothly.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Expertise in City of Ekurhuleni regulations.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
                </ul>
            </div>
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Demolition contractors planning a project in Benoni" data-ai-hint="construction planning" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Nearby Areas</h2>
             <p className="mt-2 text-muted-foreground text-center max-w-2xl mx-auto">We also provide expert demolition services in nearby areas on the East Rand.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-boksburg">Boksburg</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-kempton-park">Kempton Park</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-springs">Springs</Link></Button>
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Demolition in Benoni</h2>
            <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Benoni</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us today to discuss your project. Our Benoni team is ready to provide a fast, competitive quote.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
        
        <div className="mt-12 text-center">
            <Link href="/demolition-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Demolition Johannesburg</Link> | <Link href="/demolition-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
      </div>
  );
}
