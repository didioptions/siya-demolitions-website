
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
    "url": "https://apex-demolitions-website.vercel.app/swimming-pool-demolition-fourways",
    "telephone": "+27784292760",
    "areaServed": [
      { "@type": "Place", "name": "Fourways" },
      { "@type": "Place", "name": "Dainfern" },
      { "@type": "Place", "name": "Broadacres" },
      { "@type": "Place", "name": "Lonehill" },
      { "@type": "Place", "name": "Craigavon" },
      { "@type": "Place", "name": "Magaliessig" },
      { "@type": "Place", "name": "Sandton" },
      { "@type": "Place", "name": "Bryanston" }
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Swimming Pool Demolition"
      }
    }
};

const faqs = [
    { question: "How do you manage pool demolition in Fourways' secure lifestyle estates?", answer: "We are experts at working within the strict rules of Fourways estates like Dainfern, Cedar Lakes, and Broadacres. We coordinate directly with estate management to ensure our work is compliant, clean, and minimally disruptive to the community. Our professional teams operate with the discretion these environments require." },
    { question: "Can you safely remove a pool that is very close to my house or a boundary wall?", answer: "Yes, this is a common scenario in the Fourways area. We use precision equipment and techniques like sectional dismantling to break up the pool shell without causing any vibrations or damage to your home's foundation, paving, or surrounding structures. Safety is our top priority." },
    { question: "What is included in your standard pool demolition service?", answer: "Our service is a complete, all-in-one solution. It includes draining the pool, disconnecting services, breaking up the pool shell and paving, removing all rubble, backfilling and compacting the area, and a final site cleanup. You are left with a level, clean space ready for its next use." },
    { question: "How much does it cost to demolish a pool in Fourways?", answer: "The cost depends on the pool's size, material (concrete, fibreglass, etc.), and site accessibility. We offer a free, no-obligation on-site assessment in Fourways to provide you with a transparent, highly competitive, and fixed-price quote." },
    { question: "Will demolishing my pool increase my property's value in Fourways?", answer: "In many cases, yes. Removing an old, high-maintenance pool and replacing it with a larger, more functional garden or entertainment area is a significant selling point for buyers in lifestyle-focused areas like Fourways. It increases the usable square meterage of your property." }
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


export default function DemolitionFourwaysPage() {
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Fourways – Fast & Professional Pool Removal</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> The Estate & Residential Pool Removal Specialists in Fourways
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Looking for reliable swimming pool demolition in Fourways? Apex Demolitions provides fast, safe, and affordable pool removal services tailored for the unique environment of Fourways and its surrounding suburbs like Dainfern, Broadacres, Lonehill, Bryanston, and Sandton. Whether your pool is old, damaged, or simply unused, our experienced team removes it efficiently, leaving your property immaculate and ready for your new vision.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Free Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp for a Fast Quote</a></Button>
          </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Pool Removal in Fourways?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Estate Specialists</h3><p className="text-sm text-muted-foreground">We are experts in working within the strict rules of Fourways' secure estates, ensuring a compliant, clean, and minimally disruptive process.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fully Insured</h3><p className="text-sm text-muted-foreground">Our comprehensive insurance protects your valuable property during all operations, giving you complete peace of mind.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">One-Stop Solution</h3><p className="text-sm text-muted-foreground">We handle the entire project: demolition, a full <Link href="/rubble-removal-fourways" className="text-primary hover:underline">rubble removal</Link>, and final <Link href="/site-cleaning-fourways" className="text-primary hover:underline">site cleaning</Link>.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Property Protection</h3><p className="text-sm text-muted-foreground">We use precision techniques and protective measures to safeguard your home, garden, and other assets during the removal process.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fast & Efficient</h3><p className="text-sm text-muted-foreground">Most residential pool removals in Fourways are completed within 2-4 days to minimize disruption to your home life.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Clean & Tidy</h3><p className="text-sm text-muted-foreground">Our guarantee is a spotless site, ready for its next purpose, be it a new lawn, patio, or cottage.</p></div></div>
            </div>
        </section>

        <section id="pool-types" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Types of Pools We Remove in Fourways</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">Our experienced Fourways team is equipped to handle the demolition of any swimming pool, regardless of its construction type or condition. We have the specialized tools and expertise for:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card><CardHeader><CardTitle>Concrete & Gunite Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Common in many established Fourways homes. We use powerful hydraulic breakers to efficiently break up the reinforced concrete shell.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Fibreglass Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We carefully cut the fibreglass shell into manageable sections, lift it out, and dismantle any surrounding structures before backfilling.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Estate & Complex Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We have the capacity to handle larger or more complex pools found at the clubhouses of residential estates and apartment complexes.</p></CardContent></Card>
            </div>
        </section>

        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Safe & Efficient 5-Step Pool Demolition Process</h2>
                    <p className="text-muted-foreground mb-6">We follow a strict, professional process to ensure every Fourways pool demolition is safe, efficient, and leaves your property in pristine condition.</p>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Inspection & Planning:</span> We conduct a thorough inspection and provide a fixed quote. For estate work, we review all HOA guidelines.</li>
                        <li><span className="font-semibold text-foreground">Draining & Disconnection:</span> The pool is completely drained, and all services are safely disconnected.</li>
                        <li><span className="font-semibold text-foreground">Controlled Demolition:</span> Our expert team carefully breaks up the pool shell and paving.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal:</span> All demolition debris is loaded and transported from your property.</li>
                        <li><span className="font-semibold text-foreground">Backfilling & Compaction:</span> We fill the cavity and compact it in layers to ensure stability.</li>
                    </ol>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A clean, green lawn where a swimming pool used to be in Fourways" data-ai-hint="green lawn backyard" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
             <div className="text-center mt-12">
                <Button size="lg" asChild><Link href="/contact">Get Your Free Demolition Quote <ArrowRight className="ml-2" /></Link></Button>
            </div>
        </section>

        <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Swimming Pool Demolition in Fourways & Nearby Areas</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">We provide pool demolition services across Fourways and its surrounding suburbs, including:</p>
            <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Dainfern</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Broadacres</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Lonehill</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Craigavon</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Magaliessig</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Chartwell</span>
            </div>
             <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-6">Wherever you are in the greater Fourways area, our team is ready to provide fast, professional, and safe pool removal services.</p>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Pool Demolition Fourways</h2>
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

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Quote for Pool Removal in Fourways</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Ready to reclaim your backyard? Contact Apex Demolitions for a professional, no-obligation quote. We also offer swimming pool demolition in <Link href="/swimming-pool-demolition-sandton" className="text-primary-foreground underline">Sandton</Link>, <Link href="/swimming-pool-demolition-randburg" className="text-primary-foreground underline">Randburg</Link>, and across <Link href="/swimming-pool-demolition-johannesburg" className="text-primary-foreground underline">Johannesburg</Link>.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now: 078 429 2760</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
         <div className="mt-12 text-center">
            <Link href="/swimming-pool-demolition-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Pool Demolition Johannesburg</Link> | <Link href="/swimming-pool-demolition-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
      </div>
    </>
  );
}
