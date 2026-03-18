
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, ArrowRight, Star } from "lucide-react";
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
      "name": "Roodepoort"
  },
  "description": "Professional and insured swimming pool demolition and removal services in Roodepoort, Johannesburg. We handle all pool types including concrete, gunite, and fibreglass, with full rubble removal and site preparation.",
  "url": "https://apex-demolitions-website.vercel.app/swimming-pool-demolition-roodepoort"
};

const faqs = [
    { question: "Do you service all areas in Roodepoort and the West Rand?", answer: "Yes, our pool demolition services cover the entire Roodepoort area and the wider West Rand, from Helderkruin to Wilro Park and beyond. Our local teams provide fast and reliable service to all suburbs." },
    { question: "Can you demolish a pool on a sloped property?", answer: "Yes, we have extensive experience working on properties with varied terrain, including the slopes found in parts of Roodepoort like Constantia Kloof. We take special precautions to ensure the demolition and backfilling process is done safely to prevent any soil erosion or stability issues." },
    { question: "What is your pool demolition service in Roodepoort?", answer: "Our service is a complete, all-in-one solution. It includes draining the pool, breaking up the shell, removing all rubble from your property, and then backfilling and compacting the area to leave it level and ready for landscaping or building." },
    { question: "How much does it cost to demolish a pool in Roodepoort?", answer: "The cost depends on your pool's size, material (e.g., concrete vs. fibreglass), and site accessibility. We offer a free, no-obligation on-site assessment in Roodepoort to give you a transparent and highly competitive quote." },
    { question: "Can I build on the area after the pool is removed?", answer: "Yes. When we do a full demolition and backfill with engineered compaction, the ground is made stable and safe for future construction like a cottage, garage, or home extension." }
];

export default function DemolitionRoodepoortPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'poolDemoHero');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Roodepoort – Fast & Professional Pool Removal</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Your Trusted West Rand Pool Removal Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Looking for professional swimming pool demolition in Roodepoort? Apex Demolitions provides a fast, safe, and affordable pool removal service for homeowners and businesses across the West Rand. From Florida and Wilgeheuwel to Constantia Kloof, our expert team handles everything. We demolish, remove all rubble, and leave your property clean and ready to use, giving you back valuable garden space.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Free Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp for a Fast Quote</a></Button>
          </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Pool Removal in Roodepoort?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">West Rand Specialists</h3><p className="text-sm text-muted-foreground">Our local Roodepoort teams understand the area, from family homes to properties on complex, sloped terrain.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fully Insured</h3><p className="text-sm text-muted-foreground">Our comprehensive insurance gives you complete peace of mind, protecting your property throughout the project.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">One-Stop Solution</h3><p className="text-sm text-muted-foreground">We handle the demolition, a full <Link href="/rubble-removal-roodepoort" className="text-primary hover:underline">rubble removal</Link>, and a final <Link href="/site-cleaning-roodepoort" className="text-primary hover:underline">site clean</Link>.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Property Protection</h3><p className="text-sm text-muted-foreground">We use precision techniques to safeguard your home, garden, and other valuable assets during the removal process.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fast & Efficient</h3><p className="text-sm text-muted-foreground">Most residential pool removals in Roodepoort are completed within 2-4 days to minimize disruption.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Clean & Tidy</h3><p className="text-sm text-muted-foreground">Our guarantee is a spotless site, ready for its next purpose, whether it's a new lawn, patio, or cottage.</p></div></div>
            </div>
        </section>
        
        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Safe & Efficient 5-Step Pool Demolition Process</h2>
                    <p className="text-muted-foreground mb-6">We follow a strict, professional process to ensure every Roodepoort pool demolition is safe, efficient, and leaves your property in pristine condition.</p>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Inspection & Planning:</span> We conduct a thorough inspection and provide a fixed quote.</li>
                        <li><span className="font-semibold text-foreground">Draining & Disconnection:</span> The pool is completely drained, and all services are safely disconnected.</li>
                        <li><span className="font-semibold text-foreground">Controlled Demolition:</span> Our expert team carefully breaks up the pool shell and paving.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal:</span> All demolition debris is loaded and transported from your property.</li>
                        <li><span className="font-semibold text-foreground">Backfilling & Compaction:</span> We fill the cavity and compact it in layers to ensure stability.</li>
                    </ol>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A clean, green lawn where a swimming pool used to be in Roodepoort" data-ai-hint="green lawn backyard" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
             <div className="text-center mt-12">
                <Button size="lg" asChild><Link href="/contact">Get Your Free Demolition Quote <ArrowRight className="ml-2" /></Link></Button>
            </div>
        </section>

        <section id="pool-types" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Types of Pools We Remove in Roodepoort</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">Our experienced Roodepoort team is equipped to handle the demolition of any swimming pool, regardless of its construction type or condition. We have the specialized tools and expertise for:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card><CardHeader><CardTitle>Concrete & Gunite Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">The most common type in older West Rand homes. We use powerful hydraulic breakers to efficiently break up the reinforced concrete shell.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Fibreglass Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We carefully cut the fibreglass shell into manageable sections, lift it out, and dismantle any surrounding structures before backfilling.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Vinyl-Liner Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">The process involves removing the liner, dismantling the wall structure, and clearing the sand base before filling the cavity.</p></CardContent></Card>
            </div>
        </section>
        
        <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Serving Roodepoort & Surrounding West Rand Suburbs</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">Our pool demolition services have full coverage across Roodepoort and its neighbouring suburbs. We provide fast, reliable, and professional service in:</p>
            <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Helderkruin</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Wilro Park</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Florida</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Weltevreden Park</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Constantia Kloof</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Little Falls</span>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Pool Demolition Roodepoort</h2>
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
          <h2 className="text-3xl font-bold">Get a Free Pool Demolition Quote in Roodepoort</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Ready to reclaim your backyard? Contact Apex Demolitions for a professional, no-obligation quote on your pool removal project in Roodepoort.
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
