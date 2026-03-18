import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, Waves, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Swimming Pool Demolition",
  "provider": {
      "@type": "LocalBusiness",
      "name": "Apex Demolitions",
      "telephone": "+27784292760",
       "address": {
        "@type": "PostalAddress",
        "addressLocality": "Johannesburg",
        "addressRegion": "Gauteng",
        "addressCountry": "ZA"
      }
  },
  "areaServed": {
      "@type": "Place",
      "name": "Sandton"
  },
  "description": "Professional and insured swimming pool demolition and removal services in Sandton, Johannesburg. We handle all pool types including concrete, gunite, and fibreglass, with full rubble removal and site preparation.",
  "url": "https://apex-demolitions-website.vercel.app/swimming-pool-demolition-sandton"
};


const faqs = [
    { question: "Are your demolition services insured for high-value properties in Sandton?", answer: "Absolutely. Apex Demolitions carries comprehensive public liability insurance designed for high-value residential and commercial properties. This provides our Sandton clients with complete peace of mind, knowing their assets are fully protected throughout the demolition process." },
    { question: "How do you handle demolitions in Sandton's exclusive, secure estates?", answer: "We are experts in working within high-security estates in Sandton. We liaise directly with estate management to ensure full compliance with all rules regarding work hours, noise levels, and vehicle access, ensuring a smooth and discreet process." },
    { question: "What is your process for demolishing a luxury home's swimming pool?", answer: "Our process is meticulous. It involves careful site planning, protection of valuable landscaping, precision dismantling of the structure using advanced equipment, and thorough site clearing, leaving your property pristine and ready for your new vision." },
    { question: "Can the ground be built on after the pool is removed?", answer: "Yes. When we perform a full demolition with engineered backfilling, the ground is properly compacted in layers, making it structurally sound and safe for building a home extension, cottage, or other structure." },
    { question: "How long does it take to remove a pool in Sandton?", answer: "A standard residential pool demolition in Sandton typically takes 2 to 4 days to complete. This includes breaking the pool structure, removing the debris, and backfilling and compacting the area." }
];

export default function DemolitionSandtonPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'poolDemoHero');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoWork');
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Services in Sandton</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Sandton's Premier Luxury Pool Removal Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            As the leading pool demolition contractors in Sandton, Apex Demolitions offers a premium, specialized service for Johannesburg's most exclusive properties. We understand the precision, discretion, and high standards required. We specialize in luxury pool removal, complex demolitions, and immaculate site clearing for discerning homeowners, architects, and developers in areas like Morningside, Rivonia, and Sandhurst.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Private Consultation</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp for a Fast Quote</a></Button>
          </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Pool Removal in Sandton?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Sandton Specialists</h3><p className="text-sm text-muted-foreground">We have extensive experience working in Sandton's high-value residential estates and commercial zones, adhering to the strictest standards.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fully Insured</h3><p className="text-sm text-muted-foreground">Our comprehensive insurance is designed for high-value properties, giving you complete peace of mind.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">One-Stop Solution</h3><p className="text-sm text-muted-foreground">We handle the entire project: demolition, <Link href="/rubble-removal-sandton" className="text-primary hover:underline">rubble removal</Link>, and final <Link href="/site-cleaning-sandton" className="text-primary hover:underline">site cleaning</Link>.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Property Protection</h3><p className="text-sm text-muted-foreground">We use precision techniques and protective measures to safeguard your home, garden, and valuable landscaping.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fast & Efficient</h3><p className="text-sm text-muted-foreground">Most residential pool removals in Sandton are completed within 2-4 days to minimize disruption.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Clean & Tidy</h3><p className="text-sm text-muted-foreground">Our service guarantee is a spotless site, ready for its next purpose, be it a new lawn or building work.</p></div></div>
            </div>
        </section>

        <section id="pool-types" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Types of Pools We Demolish in Sandton</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">Our experienced team is equipped to handle the demolition of any swimming pool, regardless of its construction type or condition. We have the specialized tools and expertise for:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card><CardHeader><CardTitle>Concrete & Gunite Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">The most common type in older Sandton homes. We use powerful hydraulic breakers to efficiently break up the reinforced concrete shell and paving surrounds.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Fibreglass Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We carefully cut the fibreglass shell into manageable sections, lift it out, and dismantle any surrounding structures before backfilling.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Vinyl-Liner Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">The process involves removing the liner, dismantling the wall structure (steel or polymer), and clearing the sand base before filling the cavity.</p></CardContent></Card>
            </div>
        </section>

        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Safe & Efficient 5-Step Pool Demolition Process</h2>
                    <p className="text-muted-foreground mb-6">We follow a strict, professional process to ensure every Sandton pool demolition is safe, efficient, and leaves your property in pristine condition.</p>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Assessment & Planning:</span> We conduct a thorough inspection of your pool, property access, and surrounding structures to create a detailed project plan and provide a fixed quote.</li>
                        <li><span className="font-semibold text-foreground">Draining & Disconnection:</span> The pool is completely drained, and all electrical and plumbing lines are safely disconnected and capped by qualified personnel.</li>
                        <li><span className="font-semibold text-foreground">Controlled Demolition:</span> Using specialized equipment, our expert team carefully breaks up the pool shell and any surrounding paving or decking, ensuring no damage to your home or garden.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal:</span> All demolition debris is loaded and transported from your property to a licensed, eco-friendly disposal facility.</li>
                        <li><span className="font-semibold text-foreground">Backfilling & Compaction:</span> We fill the pool cavity with soil or rubble and compact it in engineered layers to ensure ground stability and prevent future sinking, leaving the area ready for lawn or construction.</li>
                    </ol>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A clean, green lawn where a swimming pool used to be in Sandton" data-ai-hint="green lawn backyard" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
             <div className="text-center mt-12">
                <Button size="lg" asChild><Link href="/contact">Get Your Free Demolition Quote <ArrowRight className="ml-2" /></Link></Button>
            </div>
        </section>

        <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Serving Sandton & Surrounding Northern Suburbs</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">Our pool demolition services have full coverage across Sandton and its exclusive neighbouring suburbs. We provide fast, reliable, and discreet service in:</p>
            <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Sandton CBD</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Morningside</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Rivonia</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Sandhurst</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Bryanston</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Fourways</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Hyde Park</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Inanda</span>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Pool Demolition Sandton</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Pool Demolition Quote in Sandton</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Contact us today to discuss your project. Our Sandton team is ready to provide a fast, competitive, and no-obligation quote.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
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
