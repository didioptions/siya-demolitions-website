import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How do you handle demolitions on the steep slopes of Northcliff?", answer: "Demolition on hillsides requires specialized planning and safety protocols. Our experienced teams use techniques to ensure stability, prevent erosion, and safely lower materials. We conduct thorough geological and site assessments to manage the unique challenges of Northcliff's topography." },
    { question: "Can you protect mature trees and gardens during demolition?", answer: "Yes. Northcliff is known for its established gardens, and we take great care to preserve them. We work with clients to identify and protect valuable trees and landscaping, using precision dismantling and protective barriers to minimize impact." },
    { question: "What is the process for getting a demolition permit in Northcliff?", answer: "As Northcliff falls under the City of Johannesburg, a permit is required. We manage the entire application process for you, including any specific requirements for hillside properties, ensuring your project is fully compliant with all municipal regulations." }
];

export default function DemolitionNorthcliffPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Contractors Northcliff</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Specialist Demolition for Northcliff Properties
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Apex Demolitions offers expert demolition services tailored for the unique properties of Northcliff, Johannesburg. We specialize in navigating the challenges of hillside demolitions, providing safe, licensed, and precise services for residential and commercial clients. Our team respects the established character of Northcliff, working carefully to protect surrounding properties and landscapes while clearing the way for your new vision.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Professional Demolition Services in Northcliff</h2>
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
                <Card><CardHeader><CardTitle>Residential Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Precision dismantling of houses on complex terrain, making way for modern architectural designs while respecting the area's natural beauty.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Pool & Hardscape Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Careful removal of swimming pools, retaining walls, and patios, preparing your property for new landscaping projects.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Site Clearing</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Thorough clearing of all demolition debris, leaving your Northcliff property clean, safe, and ready for construction.</p></CardContent></Card>
                 <Card><CardHeader><CardTitle>Rubble Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Complete site cleanup, ensuring all demolition debris and waste is cleared and legally disposed of.</p></CardContent></Card>
            </div>
        </section>
        
        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Demolition Contractors?</h2>
                <p className="text-muted-foreground mb-4">Our expertise in hillside demolition and commitment to safety make us the ideal choice for projects in Northcliff.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Specialists in complex and hillside demolitions.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed, insured, and compliant with CoJ regulations.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Meticulous approach to protecting neighboring properties.</span></li>
                </ul>
            </div>
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Demolition contractors planning a project in Northcliff" data-ai-hint="construction planning" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Nearby Areas</h2>
             <p className="mt-2 text-muted-foreground text-center max-w-2xl mx-auto">We also serve the surrounding suburbs of the West Rand and greater Johannesburg.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-roodepoort">Roodepoort</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-randburg">Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-melville">Melville</Link></Button>
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Demolition in Northcliff</h2>
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
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Northcliff</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact our expert team to discuss your Northcliff demolition project. We provide detailed, no-obligation quotes.</p>
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
