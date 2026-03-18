
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Apex Demolitions",
  "telephone": "+27784292760",
  "areaServed": [
    "Johannesburg South",
    "Glenvista",
    "Bassonia",
    "Mulbarton",
    "Meyersdal",
    "Lenasia",
    "Ennerdale"
  ],
  "service": {
    "@type": "Service",
    "name": "Swimming Pool Demolition"
    },
   "url": "https://apex-demolitions-website.vercel.app/swimming-pool-demolition-johannesburg-south"
};


const faqs = [
    { question: "Do you service all areas in Johannesburg South?", answer: "Yes, our teams cover all of Johannesburg South, from affluent suburbs like Glenvista and Bassonia to areas like Robertsham and Winchester Hills. We provide a fast, local service across the region." },
    { question: "Is your pool demolition service insured for work in Johannesburg South?", answer: "Absolutely. We are fully insured for all our operations. This gives our clients in Johannesburg South complete peace of mind, knowing their property is fully protected during the demolition process." },
    { question: "Can you remove a pool on a sloped property in the South?", answer: "Yes, we are very experienced in working on properties with varied terrain, including the hilly areas of Johannesburg South. We take special precautions to ensure the demolition and backfilling process is done safely to prevent any erosion or stability issues." }
];

export default function DemolitionJohannesburgSouthPage() {
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');
    const whyChooseImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Johannesburg South</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Your Trusted Local Pool Removal Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Looking for reliable swimming pool demolition in Johannesburg South? Apex Demolitions provides fast, safe, and affordable pool removal services across Johannesburg South, including Glenvista, Bassonia, Mulbarton, Meyersdal, Lenasia, and Ennerdale. Whether your pool is old, damaged, or no longer in use, our experienced team will remove it efficiently while leaving your property clean, level, and ready for your next project. We are trusted by homeowners and businesses across Johannesburg South for our professional service, fast turnaround, and complete site cleanup.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Free Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp for a Fast Quote</a></Button>
          </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Pool Removal in Johannesburg South?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">JHB South Specialists</h3><p className="text-sm text-muted-foreground">We are the go-to experts for pool demolition in the South, known for our local knowledge and experience.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fast Turnaround</h3><p className="text-sm text-muted-foreground">We complete most residential pool removals in 2-4 days, minimizing disruption.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Affordable Pricing</h3><p className="text-sm text-muted-foreground">Our transparent quotes ensure you get the best value with no hidden costs.</p></div></div>
                 <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">One-Stop Solution</h3><p className="text-sm text-muted-foreground">Our service includes demolition, full <Link href="/rubble-removal" className="text-primary hover:underline">rubble removal</Link>, and final <Link href="/site-cleaning" className="text-primary hover:underline">site cleaning</Link>.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fully Insured</h3><p className="text-sm text-muted-foreground">Our comprehensive insurance gives you complete peace of mind.</p></div></div>
                 <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Clean Finish</h3><p className="text-sm text-muted-foreground">We guarantee a spotless site, ready for its next purpose.</p></div></div>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Swimming Pool Demolition Services in Johannesburg South</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">At Apex Demolitions, we specialize in complete swimming pool removal in Johannesburg South. From initial inspection to final cleanup, we handle every step of the process.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card><CardHeader><CardTitle>Residential Pool Demolition</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Safe removal of pools from homes, preparing your yard for a new entertainment area, garden, or extension.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Commercial Pool Removal</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Demolition of pools at hotels, gyms, and other commercial properties, complying with all safety standards.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Full Rubble Removal & Site Leveling</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Our all-inclusive service means we load, transport, and legally dispose of all demolition debris, leaving your site perfectly level.</p></CardContent></Card>
            </div>
        </section>

        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Safe & Efficient 5-Step Process</h2>
                    <p className="text-muted-foreground mb-6">We follow a proven step-by-step process to ensure safe and efficient results:</p>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Inspection:</span> We evaluate the pool type, size, and access requirements to provide a free, accurate quote.</li>
                        <li><span className="font-semibold text-foreground">Planning & Preparation:</span> We choose the safest demolition method and secure the site to protect your property.</li>
                        <li><span className="font-semibold text-foreground">Pool Demolition:</span> Our professional team breaks and removes the pool structure using specialized equipment.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal:</span> We clear all debris from your site quickly and efficiently.</li>
                        <li><span className="font-semibold text-foreground">Site Cleanup & Leveling:</span> We leave your property clean, level, and ready for its next use.</li>
                    </ol>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A clean lawn where a swimming pool used to be in Johannesburg South" data-ai-hint="green lawn backyard" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Pool Demolition JHB South</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-semibold text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Areas We Serve in Johannesburg South</h2>
             <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                Our services are available across all of Johannesburg South. Click on a suburb to learn more about our dedicated local services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-glenvista">Glenvista</Link></Button>
                <Button variant="outline" asChild><Link href="/swimming-pool-demolition-meyersdal">Meyersdal</Link></Button>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Bassonia</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Mulbarton</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Lenasia</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Ennerdale</span>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Quote for Pool Removal in Johannesburg South</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            We also offer swimming pool demolition in <Link href="/swimming-pool-demolition-sandton" className="text-primary-foreground underline">Sandton</Link>, <Link href="/swimming-pool-demolition-randburg" className="text-primary-foreground underline">Randburg</Link>, <Link href="/swimming-pool-demolition-midrand" className="text-primary-foreground underline">Midrand</Link>, <Link href="/swimming-pool-demolition-roodepoort" className="text-primary-foreground underline">Roodepoort</Link>, <Link href="/swimming-pool-demolition-fourways" className="text-primary-foreground underline">Fourways</Link>, and across <Link href="/swimming-pool-demolition-johannesburg" className="text-primary-foreground underline">Johannesburg</Link>.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now: 078 429 2760</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
