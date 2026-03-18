
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
    "url": "https://apex-demolitions-website.vercel.app/swimming-pool-demolition-midrand",
    "telephone": "+27784292760",
    "areaServed": {
      "@type": "Place",
      "name": "Midrand"
    },
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Swimming Pool Demolition"
      }
    }
};

const faqs = [
    { question: "How do you handle pool demolition in Midrand's secure estates like Waterfall and Kyalami?", answer: "We specialize in working within Midrand's premier secure estates. Our teams are professional, discreet, and fully compliant with all HOA rules regarding noise, working hours, and site access. We coordinate directly with estate management to ensure a smooth and disruption-free process." },
    { question: "Do you offer ongoing pool removal for large housing developments in Midrand?", answer: "Yes, we are a key partner for property developers in the fast-growing Midrand area. We provide scalable, scheduled pool removal services for large residential developments, ensuring sites are prepared efficiently and on schedule." },
    { question: "How quickly can you schedule a pool removal in a suburb like Carlswald or Vorna Valley?", answer: "We pride ourselves on our rapid response time in Midrand. For standard residential pools, we can typically provide a free on-site assessment within 24-48 hours and schedule the demolition shortly thereafter to fit your timeline." },
    { question: "Is your team insured for work in high-value Midrand estates?", answer: "Absolutely. We carry comprehensive public liability insurance that is suited for work on high-value residential and commercial properties, giving you complete peace of mind." },
    { question: "Can you remove a pool to make way for a new home extension?", answer: "Yes. When we perform a full demolition and use engineered backfilling techniques with proper compaction, the land is stabilized and made safe for building a home extension, cottage, or other structure." }
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


export default function DemolitionMidrandPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'poolDemoHero');
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Midrand – Fast & Professional Pool Removal</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Your Trusted Partner for Midrand's Estates & Developments
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Looking for reliable swimming pool demolition in Midrand? Apex Demolitions provides fast, safe, and affordable pool removal services in Midrand and surrounding areas, including Carlswald, Halfway Gardens, Vorna Valley, Randjespark, and Noordwyk. Whether your pool is old, damaged, or unused, our expert team removes it efficiently while leaving your property clean and ready for its next project. We combine years of experience with a commitment to safety and professionalism, making Apex Demolitions the trusted choice for homeowners and businesses across Midrand and greater Johannesburg.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Free Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp for a Fast Quote</a></Button>
          </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Pool Removal in Midrand?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Estate Specialists</h3><p className="text-sm text-muted-foreground">Unmatched experience complying with the high standards of Midrand's secure estates like Waterfall and Kyalami.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Developer's Partner</h3><p className="text-sm text-muted-foreground">We provide reliable, scalable services to keep large residential and commercial developments on schedule.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fully Insured</h3><p className="text-sm text-muted-foreground">Our comprehensive insurance provides total peace of mind for every project, big or small.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">One-Stop Solution</h3><p className="text-sm text-muted-foreground">We handle demolition, a full <Link href="/rubble-removal-midrand" className="text-primary hover:underline">rubble removal</Link>, and final <Link href="/site-cleaning-midrand" className="text-primary hover:underline">site cleaning</Link>.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fast & Reliable</h3><p className="text-sm text-muted-foreground">Our local teams ensure your pool removal is completed on time and on budget.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Clean Finish</h3><p className="text-sm text-muted-foreground">We guarantee a spotless site, ready for its next purpose, whether it's a new lawn or building work.</p></div></div>
            </div>
        </section>

        <section id="pool-types" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Types of Pools We Remove in Midrand</h2>
             <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">Our experienced Midrand team is equipped to handle the demolition of any swimming pool, regardless of its construction type or condition. We have the specialized tools and expertise for:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card><CardHeader><CardTitle>Concrete & Gunite Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Common in many established Midrand homes. We use powerful hydraulic breakers to efficiently break up the reinforced concrete shell.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Fibreglass Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We carefully cut the fibreglass shell into manageable sections, lift it out, and dismantle any surrounding structures before backfilling.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Commercial & Complex Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We have the capacity to handle larger pools found at apartment complexes, hotels, and gyms throughout the Midrand area.</p></CardContent></Card>
            </div>
        </section>

        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Safe & Efficient 5-Step Pool Demolition Process</h2>
                    <p className="text-muted-foreground mb-6">We follow a strict, professional process to ensure every Midrand pool demolition is safe, efficient, and leaves your property in pristine condition.</p>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Inspection & Planning:</span> We conduct a thorough inspection and provide a fixed quote. For estate work, we review all HOA guidelines.</li>
                        <li><span className="font-semibold text-foreground">Draining & Disconnection:</span> The pool is completely drained, and all services are safely disconnected.</li>
                        <li><span className="font-semibold text-foreground">Controlled Demolition:</span> Our expert team carefully breaks up the pool shell and paving.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal:</span> All demolition debris is loaded and transported from your property.</li>
                        <li><span className="font-semibold text-foreground">Backfilling & Compaction:</span> We fill the cavity and compact it in layers to ensure stability for future use.</li>
                    </ol>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A clean, green lawn where a swimming pool used to be in Midrand" data-ai-hint="green lawn backyard" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
             <div className="text-center mt-12">
                <Button size="lg" asChild><Link href="/contact">Get Your Free Demolition Quote <ArrowRight className="ml-2" /></Link></Button>
            </div>
        </section>

        <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Swimming Pool Demolition in Midrand & Nearby Areas</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">We provide pool demolition services across Midrand and nearby areas, including:</p>
            <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Carlswald</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Halfway Gardens</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Vorna Valley</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Randjespark</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Noordwyk</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Woodmead</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Kosmosdal</span>
            </div>
             <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-6">Wherever you are in the greater Midrand area, we provide fast, professional, and safe pool removal services.</p>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Pool Demolition Midrand</h2>
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
          <h2 className="text-3xl font-bold">Get a Free Quote for Pool Removal in Midrand</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Ready to remove your pool? Apex Demolitions is here to help. Contact us for a fast response and a free quote. We also offer swimming pool demolition in <Link href="/swimming-pool-demolition-sandton" className="text-primary-foreground underline">Sandton</Link>, <Link href="/swimming-pool-demolition-roodepoort" className="text-primary-foreground underline">Roodepoort</Link>, and across Johannesburg.
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
