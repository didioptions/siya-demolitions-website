import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How do you handle demolitions on small stands in Parkhurst?", answer: "We specialize in precision demolition for compact properties. Using smaller machinery and careful, sectional dismantling techniques, we can safely demolish structures in Parkhurst with zero damage to neighboring homes, a critical requirement in such a dense suburb." },
    { question: "Is it possible to do a 'quiet' demolition for a renovation?", answer: "While demolition is inherently noisy, we take steps to minimize disruption. For interior strip-outs and partial demolitions in Parkhurst, we use precision tools over heavy machinery where possible and adhere strictly to municipal work hours to respect the peace of the neighborhood." },
    { question: "How do you manage site access and rubble removal on narrow streets?", answer: "Logistics are key in areas like Parkhurst. We use smaller tipper trucks that can navigate narrow streets. Our team manages traffic flow, works efficiently to load debris quickly, and ensures the site and surrounding area are kept clean throughout the process." }
];

export default function DemolitionParkhurstPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Contractors Parkhurst</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Precision Demolition for Parkhurst Renovations
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions offers expert demolition services tailored for the unique, high-density environment of Parkhurst, Johannesburg. We specialize in residential demolition for the area's popular renovation and rebuild projects. Our licensed teams are skilled in working on small stands, ensuring every project is executed with precision, safety, and minimal disruption to the vibrant Parkhurst community.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Professional Demolition Services in Parkhurst</h2>
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
                <Card><CardHeader><CardTitle>Full House Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Safe and complete removal of old homes to make way for contemporary new builds that match Parkhurst's modern lifestyle.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Partial & Interior Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Surgical strip-outs and selective demolition, ideal for the large-scale renovations common in the area.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Pool Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Remove small, old pools to create more functional and spacious outdoor entertainment areas.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Rubble & Site Cleanup</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Fast and efficient removal of all construction and demolition debris, leaving your site spotless.</p></CardContent></Card>
            </div>
        </section>
        
        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Demolition Contractors?</h2>
                <p className="text-muted-foreground mb-4">Our understanding of urban, high-density demolition makes us the perfect fit for Parkhurst projects.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Mastery of tight-access sites and small stand demolition.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Commitment to minimizing noise and disruption for neighbors.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Efficient logistics for rubble removal on narrow streets.</span></li>
                </ul>
            </div>
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Demolition contractors planning a project in Parkhurst" data-ai-hint="construction planning" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Nearby Areas</h2>
             <p className="mt-2 text-muted-foreground text-center max-w-2xl mx-auto">We serve all the surrounding "Park" suburbs and beyond.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-greenside">Greenside</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-rosebank">Rosebank</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-linden">Linden</Link></Button>
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Demolition in Parkhurst</h2>
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
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Parkhurst</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Ready to start your Parkhurst renovation or rebuild? Contact us for a precise, no-obligation quote from the local experts.</p>
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
