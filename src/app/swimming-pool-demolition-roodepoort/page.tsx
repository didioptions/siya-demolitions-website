
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, ArrowRight, Star, MessageSquare } from "lucide-react";
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
      { "@type": "Place", "name": "Weltevreden Park" },
      { "@type": "Place", "name": "Horizon View" },
      { "@type": "Place", "name": "Constantia Kloof" },
      { "@type": "Place", "name": "Little Falls" },
      { "@type": "Place", "name": "Ruimsig" }
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
    { 
        question: "Do you service all areas in Roodepoort and the West Rand?", 
        answer: "Yes, our pool demolition services cover the entire Roodepoort area and the wider West Rand. Our local teams are familiar with all suburbs, from the family homes in Weltevreden Park and Florida to the larger properties in Ruimsig and Constantia Kloof. We provide a fast, reliable, and insured service across the region, ensuring every community has access to professional pool removal." 
    },
    { 
        question: "Can you demolish a pool on a sloped property in areas like Constantia Kloof?", 
        answer: "Absolutely. We are specialists in handling demolitions on the varied and often challenging terrain found across Roodepoort. For sloped properties in areas like Constantia Kloof, we use specific safety protocols and equipment to ensure the stability of the site. Our process involves careful, sectional dismantling and engineered backfilling to prevent any soil erosion or future structural issues, protecting your property and those around you." 
    },
    { 
        question: "How much does it cost to demolish a pool in Roodepoort?", 
        answer: "The cost for pool demolition in Roodepoort is competitive and depends on your pool's size, material (e.g., tough gunite vs. fibreglass), and site accessibility. A small splash pool might start around R8,000, while a standard-sized marbelite pool could be between R15,000 - R25,000. For a precise and transparent quote with no hidden fees, we offer a free, no-obligation on-site assessment where we can evaluate all factors." 
    },
    { 
        question: "Is your service a complete solution, including rubble removal?", 
        answer: "Yes, our service is a complete, all-in-one solution. The price we quote includes the full demolition of the pool structure, the loading and transport of all debris, and the legal disposal of the waste at a registered facility. Our comprehensive <a href='/rubble-removal-johannesburg' class='text-primary hover:underline'>rubble removal</a> and <a href='/site-cleaning' class='text-primary hover:underline'>site cleaning</a> services ensure we leave your property spotless and ready for its next use, whether that’s a new lawn or a building extension."
    },
    { 
        question: "Can I build on the area after the pool is removed?", 
        answer: "Yes. When we perform a full demolition with engineered backfilling, the ground is made stable and safe for future construction. This process, which involves compacting the fill material in layers, is essential if you plan to build a cottage, garage, or home extension on the site. For your peace of mind and for municipal planning approval, we can provide an engineer's compaction certificate upon request." 
    }
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

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Swimming Pool Demolition",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Apex Demolitions"
    },
    "areaServed": {
        "@type": "City",
        "name": "Roodepoort"
    },
    "description": "Professional swimming pool demolition and removal services in Roodepoort. We handle all pool types, including full rubble removal and site preparation for future construction.",
    "url": "https://apex-demolitions-website.vercel.app/swimming-pool-demolition-roodepoort"
};

const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, faqSchema]
};


export default function DemolitionRoodepoortPage() {
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Roodepoort – Fast & Professional Pool Removal</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> The West Rand's Trusted Pool Removal Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Looking for expert swimming pool demolition in Roodepoort? Apex Demolitions provides a fast, safe, and affordable pool removal service across the West Rand, including Florida, Weltevreden Park, Horizon View, and Constantia Kloof. Whether your pool is old, damaged, or simply unused, our experienced team removes it efficiently, leaving your property clean, level, and ready for your next project.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Free Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp for a Fast Quote</a></Button>
          </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Pool Demolition in Roodepoort?</h2>
             <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                Our reputation in Roodepoort is built on reliability, safety, and a deep understanding of the local area. We are the trusted choice for homeowners across the West Rand.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">West Rand Specialists</h3><p className="text-sm text-muted-foreground">Our local teams provide a fast, reliable service across Roodepoort, from Florida to Ruimsig.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Terrain Experts</h3><p className="text-sm text-muted-foreground">We are skilled at working on the varied and often sloped properties found throughout Roodepoort.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fully Insured</h3><p className="text-sm text-muted-foreground">Our comprehensive insurance gives you complete peace of mind for every project.</p></div></div>
            </div>
        </section>
        
        <section id="challenges" className="mb-16">
             <h2 className="text-3xl font-bold text-center mb-8">Pool Demolition Challenges in Roodepoort Properties</h2>
             <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                Roodepoort's diverse landscape presents unique challenges for pool removal. Our team has the specific experience to handle these issues professionally.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <Card>
                    <CardHeader><CardTitle>Older Homes & Renovations</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Many Roodepoort homes undergo renovations. Removing an old pool is often a key step. We work carefully around existing structures and coordinate with other contractors on site.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Sloped Properties</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Suburbs like Constantia Kloof are known for their slopes. We are experts in hillside demolition, ensuring site stability and preventing erosion during and after the pool removal.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Difficult Site Access</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Narrow driveways or established gardens can make access difficult. We use the right-sized machinery and techniques to get the job done with minimal impact on your property.</p></CardContent>
                </Card>
            </div>
        </section>
        
        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Safe & Efficient 5-Step Process</h2>
                    <p className="text-muted-foreground mb-6">Our proven step-by-step process guarantees a safe and smooth demolition:</p>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Inspection:</span> We evaluate the pool type, size, and access to provide a free, accurate quote.</li>
                        <li><span className="font-semibold text-foreground">Planning & Preparation:</span> We secure the site and choose the safest demolition method for your property.</li>
                        <li><span className="font-semibold text-foreground">Pool Demolition:</span> Our expert team breaks and removes the pool structure using professional equipment.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal:</span> We clear all debris quickly and legally, as part of our full <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal service</Link>.</li>
                        <li><span className="font-semibold text-foreground">Site Cleanup & Leveling:</span> We leave your property clean, level, and ready for its next use with a final <Link href="/site-cleaning" className="text-primary hover:underline">site clean</Link>.</li>
                    </ol>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A clean, green lawn where a swimming pool used to be in Roodepoort" data-ai-hint="green lawn backyard" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
        </section>

        <section id="recent-projects" className="py-12 md:py-16 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Pool Demolition Projects in Roodepoort</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader><CardTitle>Concrete Pool Demolition</CardTitle><p className="text-sm text-muted-foreground">Weltevreden Park</p></CardHeader>
                        <CardContent><p className="text-sm">Removed an old, large marbelite pool from a family home to create more lawn space. The project was completed in 3 days, including full rubble removal and site leveling.</p></CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Hillside Pool Removal</CardTitle><p className="text-sm text-muted-foreground">Constantia Kloof</p></CardHeader>
                        <CardContent><p className="text-sm">Careful demolition of a pool on a sloped property, with special attention to protecting the retaining walls and ensuring ground stability. The site was left clean and secure.</p></CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Townhouse Complex Pool</CardTitle><p className="text-sm text-muted-foreground">Florida</p></CardHeader>
                        <CardContent><p className="text-sm">Dismantled an old communal pool for a body corporate. The job was completed efficiently to minimize disruption to residents, with all debris cleared over a weekend.</p></CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Areas We Cover in Roodepoort</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">Our pool demolition services cover all of Roodepoort and the greater West Rand. We have local teams ready to assist in Florida, Helderkruin, Horizon View, Little Falls, Ruimsig, and Weltevreden Park. As the leading <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition contractors in Johannesburg</Link>, our service network is extensive.</p>
        </section>

        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Pool Demolition Roodepoort</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-semibold text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Quote for Pool Removal in Roodepoort</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Ready to reclaim your garden? Contact Apex Demolitions for a professional, no-obligation quote. We also serve <Link href="/swimming-pool-demolition-sandton" className="text-primary-foreground underline">Sandton</Link>, <Link href="/swimming-pool-demolition-randburg" className="text-primary-foreground underline">Randburg</Link>, and <Link href="/swimming-pool-demolition-midrand" className="text-primary-foreground underline">Midrand</Link>.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now for a Fast Quote</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>

         <div className="mt-12 text-center">
            <Link href="/swimming-pool-demolition-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Main Pool Demolition Page</Link>
        </div>
      </div>
    </>
  );
}
