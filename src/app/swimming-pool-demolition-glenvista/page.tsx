
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Apex Demolitions",
    "telephone": "+27784292760",
    "areaServed": [
        "Glenvista",
        "Bassonia",
        "Mulbarton",
        "Meyersdal",
        "Oakdene",
        "Winchester Hills",
        "Mondeor",
        "Kibler Park"
    ],
    "service": {
      "@type": "Service",
      "name": "Swimming Pool Demolition"
    },
    "url": "https://apex-demolitions-website.vercel.app/swimming-pool-demolition-glenvista"
};

const faqs = [
    { question: "How do you handle pool demolition on the steep, rocky terrain in Glenvista?", answer: "We are specialists in hillside demolition. We use smaller, more agile equipment and careful, sectional dismantling techniques to safely break up and remove pools from sloped properties without causing any damage to retaining walls, foundations, or established gardens. Safety and stability are our primary concerns in areas like Glenvista." },
    { question: "Is your pool demolition service insured for work in high-value estates in Johannesburg South?", answer: "Absolutely. We carry comprehensive public liability insurance specifically suited for working on high-value properties in estates across Glenvista, Meyersdal, and Bassonia. This provides you with complete peace of mind." },
    { question: "How quickly can you provide a quote and start a pool removal in Glenvista?", answer: "As we have dedicated teams serving Johannesburg South, we can typically provide a free, on-site assessment and quote within 24-48 hours. Once approved, we can often schedule the demolition to begin within a few business days, ensuring your project moves forward without delay." }
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

const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, faqSchema]
};

export default function DemolitionGlenvistaPage() {
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');
    const whyChooseImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Glenvista – Fast & Professional Pool Removal</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Your Trusted JHB South Pool Removal Experts
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Looking for reliable swimming pool demolition in Glenvista? Apex Demolitions provides fast, safe, and affordable pool removal services in Glenvista and surrounding areas, including Bassonia, Mulbarton, Meyersdal, Oakdene, and Winchester Hills. Whether your swimming pool is old, damaged, or no longer in use, our experienced team will remove it efficiently while leaving your property clean, level, and ready for future development. We are trusted by homeowners across Glenvista for our professional service, fast turnaround times, and complete site cleanup.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Free Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp for a Fast Quote</a></Button>
          </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Pool Removal in Glenvista?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Hillside Demolition Experts</h3><p className="text-sm text-muted-foreground">We specialize in safely demolishing pools on the sloped and rocky terrain common in Glenvista.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fully Insured</h3><p className="text-sm text-muted-foreground">Our comprehensive insurance is designed for high-value properties, giving you complete peace of mind.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Local JHB South Team</h3><p className="text-sm text-muted-foreground">Our local presence ensures a fast response and understanding of the area's specific needs.</p></div></div>
            </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Swimming Pool Demolition Services in Glenvista</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">At Apex Demolitions, we specialize in complete swimming pool removal in Glenvista. From initial inspection to final cleanup, we handle every step of the demolition process with precision and care.</p>
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
                        <li><span className="font-semibold text-foreground">Site Inspection:</span> Assess the pool type, size, and access requirements for a safe removal plan.</li>
                        <li><span className="font-semibold text-foreground">Planning & Preparation:</span> Choose the safest and most effective demolition method.</li>
                        <li><span className="font-semibold text-foreground">Pool Demolition:</span> Break and remove the pool using professional equipment.</li>
                        <li><span className="font-semibold text-foreground"><Link href="/rubble-removal" className="text-primary hover:underline">Rubble Removal</Link>:</span> Clear all debris from your property quickly.</li>
                        <li><span className="font-semibold text-foreground"><Link href="/site-cleaning" className="text-primary hover:underline">Site Cleanup</Link>:</span> Leave your property clean, level, and ready for landscaping or construction.</li>
                    </ol>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A clean, green lawn where a swimming pool used to be in Glenvista" data-ai-hint="green lawn backyard" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
        </section>

         <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Benefits of Swimming Pool Demolition</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">Removing your old pool offers many advantages:</p>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Create more usable outdoor space</h4><p className="text-sm text-muted-foreground">Reclaim your garden for a larger lawn, a modern entertainment area, or a home extension.</p></div></div>
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Reduce maintenance and water costs</h4><p className="text-sm text-muted-foreground">Eliminate the constant expense of chemicals, electricity for the pump, and costly water top-ups.</p></div></div>
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Improve safety for children and pets</h4><p className="text-sm text-muted-foreground">Remove the potential hazard an unfenced or unused pool poses to children and pets.</p></div></div>
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Increase property value</h4><p className="text-sm text-muted-foreground">A large, functional garden is often more appealing to buyers than an old, high-maintenance pool.</p></div></div>
            </div>
        </section>

        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Pool Demolition Glenvista</h2>
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
            <h2 className="text-3xl font-bold mb-8">Swimming Pool Demolition in Glenvista & Nearby Areas</h2>
             <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">We provide professional pool demolition services across Glenvista and nearby areas, including:</p>
            <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Bassonia</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Mulbarton</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Meyersdal</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Oakdene</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Winchester Hills</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Mondeor</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Kibler Park</span>
            </div>
             <p className="mt-4 text-muted-foreground">Wherever you are in or around Glenvista, our team is ready to assist with fast and professional service.</p>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Quote for Pool Removal in Glenvista</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            We also offer swimming pool demolition in <Link href="/swimming-pool-demolition-johannesburg-south" className="text-primary-foreground underline">Johannesburg South</Link>, Bassonia, Meyersdal, Mulbarton, and across <Link href="/swimming-pool-demolition-johannesburg" className="text-primary-foreground underline">Johannesburg</Link>.
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
