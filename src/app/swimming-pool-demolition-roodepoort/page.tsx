
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
  "url": "https://apex-demolitions-website.vercel.app/swimming-pool-demolition-roodepoort",
  "telephone": "+27784292760",
  "areaServed": [
    { "@type": "Place", "name": "Roodepoort" },
    { "@type": "Place", "name": "Florida" },
    { "@type": "Place", "name": "Wilgeheuwel" },
    { "@type": "Place", "name": "Horizon View" },
    { "@type": "Place", "name": "Constantia Kloof" },
    { "@type": "Place", "name": "Little Falls" },
    { "@type": "Place", "name": "Randburg" },
    { "@type": "Place", "name": "Krugersdorp" }
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
    { question: "Do you service all areas in Roodepoort and the West Rand?", answer: "Yes, our pool demolition services cover the entire Roodepoort area and the wider West Rand, from Helderkruin to Wilro Park and beyond. Our local teams provide fast and reliable service to all suburbs." },
    { question: "Can you demolish a pool on a sloped property?", answer: "Yes, we have extensive experience working on properties with varied terrain, including the slopes found in parts of Roodepoort like Constantia Kloof. We take special precautions to ensure the demolition and backfilling process is done safely to prevent any soil erosion or stability issues." },
    { question: "What is your pool demolition service in Roodepoort?", answer: "Our service is a complete, all-in-one solution. It includes draining the pool, breaking up the shell, removing all rubble from your property, and then backfilling and compacting the area to leave it level and ready for landscaping or building." },
    { question: "How much does it cost to demolish a pool in Roodepoort?", answer: "The cost depends on your pool's size, material (e.g., concrete vs. fibreglass), and site accessibility. We offer a free, no-obligation on-site assessment in Roodepoort to give you a transparent and highly competitive quote." },
    { question: "Can I build on the area after the pool is removed?", answer: "Yes. When we do a full demolition and backfill with engineered compaction, the ground is made stable and safe for future construction like a cottage, garage, or home extension." }
];

export default function DemolitionRoodepoortPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'poolDemoHero');
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Roodepoort – Fast & Professional Pool Removal</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Your Trusted West Rand Pool Removal Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Looking for professional swimming pool demolition in Roodepoort? Apex Demolitions provides fast, safe, and affordable pool removal services in Roodepoort and nearby suburbs, including Florida, Wilgeheuwel, Horizon View, Constantia Kloof, Little Falls, Randburg, and Krugersdorp. Whether your pool is old, damaged, or no longer in use, our skilled team removes it efficiently while leaving your property clean and ready for its next project.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Free Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp for a Fast Quote</a></Button>
          </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Swimming Pool Demolition Services in Roodepoort</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">We specialize in complete swimming pool removal in Roodepoort. Our team handles every aspect of the demolition process, from breaking down the pool structure to clearing debris, so your property is ready for landscaping, construction, or any new project.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card><CardHeader><CardTitle>Residential Pool Demolition</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Safe and efficient removal of pools from residential homes, preparing your yard for a new entertainment area, garden, or extension.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Commercial Pool Removal</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Demolition of pools at hotels, gyms, and other commercial properties, complying with all commercial site safety standards.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Partial & Full Removal</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We offer both partial fill-ins for landscaping and full removals suitable for future construction, advising you on the best option.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Rubble Removal & Site Leveling</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Our all-inclusive service means we load, transport, and legally dispose of all demolition debris, leaving your site perfectly level.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Site Clearing & Preparation</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We don't just remove the pool; we prepare the site for whatever you have planned next, ensuring it is safe, clean, and build-ready.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>All Pool Types</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We are experts in demolishing concrete, gunite, fibreglass, and vinyl-liner pools of any shape or size.</p></CardContent></Card>
            </div>
             <div className="text-center mt-12">
                <Button size="lg" asChild><Link href="/contact">Get Your Free Demolition Quote <ArrowRight className="ml-2" /></Link></Button>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Safe & Efficient 5-Step Pool Demolition Process</h2>
                    <p className="text-muted-foreground mb-6">We follow a proven step-by-step process to ensure a smooth, safe demolition:</p>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Inspection:</span> We evaluate the pool type, size, and accessibility to plan a safe removal and provide a detailed, fixed-price quote.</li>
                        <li><span className="font-semibold text-foreground">Planning & Preparation:</span> We determine the best demolition method, secure the site, and arrange all necessary logistics.</li>
                        <li><span className="font-semibold text-foreground">Pool Demolition:</span> Our team uses professional equipment to break and remove the pool efficiently, with a focus on protecting your property.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal:</span> We clear all debris and waste from your property, transporting it to a licensed disposal facility as part of our <Link href="/rubble-removal-roodepoort" className="text-primary hover:underline">rubble removal services</Link>.</li>
                        <li><span className="font-semibold text-foreground">Site Cleanup:</span> We backfill, compact, and level the area, leaving your site clean and ready for your next project, as part of our <Link href="/site-cleaning-roodepoort" className="text-primary hover:underline">site cleaning services</Link>.</li>
                    </ol>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A clean, green lawn where a swimming pool used to be in Roodepoort" data-ai-hint="green lawn backyard" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
        </section>

        <section id="pool-types" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Types of Pools We Remove in Roodepoort</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">No matter the condition, our team has the tools and expertise to handle it safely. We provide expert removal for all types of swimming pools:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card><CardHeader><CardTitle>Concrete & Gunite Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">The most common type in older West Rand homes. We use powerful hydraulic breakers to efficiently break up the reinforced concrete shell.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Fibreglass Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We carefully cut the fibreglass shell into manageable sections, lift it out, and dismantle any surrounding structures before backfilling.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Vinyl-Liner Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">The process involves removing the liner, dismantling the wall structure, and clearing the sand base before filling the cavity.</p></CardContent></Card>
            </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Benefits of Swimming Pool Demolition</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">Removing your old pool offers many advantages:</p>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Create More Usable Outdoor Space</h4><p className="text-sm text-muted-foreground">Reclaim your garden for a larger lawn, a new entertainment area, or a home extension.</p></div></div>
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Reduce Maintenance & Water Costs</h4><p className="text-sm text-muted-foreground">Eliminate the constant expense of chemicals, electricity for the pump, and costly water top-ups.</p></div></div>
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Improve Safety</h4><p className="text-sm text-muted-foreground">Remove the potential hazard an unfenced or unused pool poses to children and pets.</p></div></div>
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Increase Property Value</h4><p className="text-sm text-muted-foreground">A large, functional garden is often more appealing to buyers than an old, high-maintenance pool.</p></div></div>
            </div>
             <div className="text-center mt-12">
                <Button size="lg" asChild><Link href="/contact">Unlock Your Property's Potential <ArrowRight className="ml-2" /></Link></Button>
            </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex Demolitions in Roodepoort?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">West Rand Specialists</h3><p className="text-sm text-muted-foreground">We are a trusted pool demolition company in Roodepoort, chosen by clients for our experience and skilled demolition team.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fast Turnaround Times</h3><p className="text-sm text-muted-foreground">We pride ourselves on completing projects quickly and efficiently to minimize disruption.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Affordable Pricing</h3><p className="text-sm text-muted-foreground">We provide competitive, transparent quotes with no hidden costs for our Roodepoort clients.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Complete Rubble Removal</h3><p className="text-sm text-muted-foreground">Our service includes full rubble removal, leaving your site perfectly build-ready.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Local Experts</h3><p className="text-sm text-muted-foreground">We serve Roodepoort and all surrounding suburbs with reliable, local expertise.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fully Insured</h3><p className="text-sm text-muted-foreground">Our comprehensive insurance gives you complete peace of mind.</p></div></div>
            </div>
        </section>
        
        <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Swimming Pool Demolition in Roodepoort & Nearby Areas</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">We provide services across Roodepoort and surrounding areas, including:</p>
            <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Florida</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Wilgeheuwel</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Horizon View</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Constantia Kloof</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Little Falls</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Randburg</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Krugersdorp</span>
            </div>
            <p className="mt-4 text-muted-foreground">No matter where you are in the West Rand, our team is ready to provide fast, professional, and safe pool demolition services.</p>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Pool Demolition Roodepoort</h2>
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
          <h2 className="text-3xl font-bold">Get a Free Quote for Pool Removal in Roodepoort</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Ready to remove your pool? Apex Demolitions is here to help. Contact us for a fast response and a free quote.
            <br />
            We also offer swimming pool demolition in <Link href="/swimming-pool-demolition-sandton" className="text-primary-foreground underline">Sandton</Link>, <Link href="/swimming-pool-demolition-bryanston" className="text-primary-foreground underline">Bryanston</Link>, <Link href="/swimming-pool-demolition-midrand" className="text-primary-foreground underline">Midrand</Link>, <Link href="/swimming-pool-demolition-fourways" className="text-primary-foreground underline">Fourways</Link>, and across Johannesburg.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone /> Call Now: 078 429 2760</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>

         <div className="mt-12 text-center">
            <Link href="/swimming-pool-demolition-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Pool Demolition Johannesburg</Link>
        </div>
      </div>
    </>
  );
}
