
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
    "url": "https://apex-demolitions-website.vercel.app/swimming-pool-demolition-midrand",
    "telephone": "+27784292760",
    "areaServed": [
      { "@type": "Place", "name": "Midrand" },
      { "@type": "Place", "name": "Waterfall City" },
      { "@type": "Place", "name": "Kyalami" },
      { "@type": "Place", "name": "Carlswald" },
      { "@type": "Place", "name": "Halfway House" },
      { "@type": "Place", "name": "Noordwyk" },
      { "@type": "Place", "name": "Blue Hills" }
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
    { question: "How do you handle pool demolition in Midrand's secure estates like Waterfall and Kyalami?", answer: "We specialize in working within Midrand's premier secure estates. Our teams are professional, discreet, and fully compliant with all HOA rules regarding noise, work hours, and site access. We coordinate directly with estate management to ensure a smooth and disruption-free process, protecting the high standards of your community." },
    { question: "Do you offer ongoing pool removal for large housing developments in Midrand?", answer: "Yes, we are a key partner for property developers in the fast-growing Midrand area. We provide scalable, scheduled pool removal services for large residential developments, ensuring sites are prepared efficiently and on schedule. Our capacity allows us to manage multiple removals as your project progresses." },
    { question: "How quickly can you schedule a pool removal in a suburb like Carlswald or Vorna Valley?", answer: "We pride ourselves on our rapid response time in Midrand. For standard residential pools, we can typically provide a free on-site assessment within 24-48 hours and schedule the demolition shortly thereafter to fit your timeline. For urgent requests, we always do our best to accommodate." },
    { question: "Is your team insured for work in high-value Midrand estates?", answer: "Absolutely. We carry comprehensive public liability insurance that is suited for work on high-value residential and commercial properties, giving you complete peace of mind. We can provide all necessary documentation for your records or for estate management approval." },
    { question: "Can you remove a pool to make way for a new home extension?", answer: "Yes. This is a primary reason for pool removals in Midrand. When we perform a full demolition and use engineered backfilling techniques with proper compaction, the land is stabilized and made safe for building a home extension, cottage, or other structure. We can provide a compaction certificate if required for your building plans." }
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
        "name": "Midrand"
    },
    "description": "Professional swimming pool demolition and removal services in Midrand. We specialize in complex pool removals in secure estates like Waterfall and Kyalami, offering a fully insured and compliant service.",
    "url": "https://apex-demolitions-website.vercel.app/swimming-pool-demolition-midrand"
};

const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, faqSchema]
};


export default function DemolitionMidrandPage() {
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
            Looking for reliable swimming pool demolition in Midrand? Apex Demolitions provides fast, safe, and affordable pool removal services in Midrand and surrounding areas, including Carlswald, Halfway House, Noordwyk, and Kyalami. Whether your pool is old, damaged, or unused, our expert team removes it efficiently while leaving your property clean and ready for its next project. We are the trusted choice for homeowners and developers across Midrand's estates.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Free Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp for a Fast Quote</a></Button>
          </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Pool Removal in Midrand?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Estate Specialists</h3><p className="text-sm text-muted-foreground">Unmatched experience complying with the high standards of Midrand's secure estates like Waterfall and Kyalami.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Developer's Partner</h3><p className="text-sm text-muted-foreground">We provide reliable, scalable services to keep large residential and commercial developments on schedule.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fully Insured</h3><p className="text-sm text-muted-foreground">Our comprehensive insurance provides total peace of mind for every project, big or small.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">One-Stop Solution</h3><p className="text-sm text-muted-foreground">We handle demolition, a full <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link>, and final <Link href="/site-cleaning" className="text-primary hover:underline">site cleaning</Link>.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fast & Reliable</h3><p className="text-sm text-muted-foreground">Our local teams ensure your pool removal is completed on time and on budget.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Clean Finish</h3><p className="text-sm text-muted-foreground">We guarantee a spotless site, ready for its next purpose, whether it's a new lawn or building work.</p></div></div>
            </div>
        </section>

        <section id="midrand-challenges" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">The Unique Challenges of Pool Demolition in Midrand</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                Removing a pool in Midrand requires a contractor who understands the local environment. We specialize in navigating these specific challenges for a seamless project.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <Card>
                    <CardHeader><CardTitle>Secure Estate Regulations</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Midrand is home to many of Gauteng's premier lifestyle estates (like Waterfall, Kyalami, and Carlswald). We are experts at working within strict HOA rules for access, noise, and site cleanliness, ensuring a disruption-free process for you and your neighbours.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>New Development Coordination</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">With constant new construction, our teams are skilled at coordinating with builders and developers. We can remove old farm pools to prepare large plots or work alongside other contractors on active building sites, keeping your project timeline on track.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Maximizing Property Value</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">In a competitive property market like Midrand, a large, versatile garden is often more valuable than an old pool. A professional removal with certified compaction ensures the land is ready for a high-value extension or premium landscaping.</p></CardContent>
                </Card>
            </div>
        </section>

        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our 5-Step Pool Demolition Process in Midrand</h2>
                    <p className="text-muted-foreground mb-6">We follow a strict, professional process to ensure every Midrand pool demolition is safe, efficient, and leaves your property in pristine condition.</p>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Inspection & Planning:</span> We conduct a thorough inspection and provide a fixed quote. For estate work, we review all HOA guidelines.</li>
                        <li><span className="font-semibold text-foreground">Draining & Disconnection:</span> The pool is completely drained, and all services are safely disconnected.</li>
                        <li><span className="font-semibold text-foreground">Controlled Demolition:</span> Our expert team carefully breaks up the pool shell and paving.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal:</span> All demolition debris is loaded and transported from your property to a licensed disposal facility.</li>
                        <li><span className="font-semibold text-foreground">Backfilling & Compaction:</span> We fill the cavity and compact it in layers to ensure stability for future use.</li>
                    </ol>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A clean, green lawn where a swimming pool used to be in Midrand" data-ai-hint="green lawn backyard" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
        </section>
        
        <section id="pricing" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Pool Demolition Prices in Midrand</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                    We offer affordable and transparent pricing for pool demolition in Midrand. The cost depends on factors like size, material, and access. Here is a general guide:
                </p>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <Card><CardHeader><CardTitle>Small Pools / Jacuzzis</CardTitle></CardHeader><CardContent><p className="text-3xl font-bold">from R8,000</p><p className="text-muted-foreground text-sm mt-2">Ideal for small plunge pools or jacuzzis.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Medium Residential Pools</CardTitle></CardHeader><CardContent><p className="text-3xl font-bold">R15,000 - R25,000</p><p className="text-muted-foreground text-sm mt-2">Covers most standard-sized residential pools in Midrand estates.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Large / Old Pools</CardTitle></CardHeader><CardContent><p className="text-3xl font-bold">from R25,000+</p><p className="text-muted-foreground text-sm mt-2">For large, deep, or complex-shaped pools, especially older concrete structures.</p></CardContent></Card>
                </div>
                 <p className="text-center text-sm text-muted-foreground mt-8">*Disclaimer: Prices are estimates. Final cost depends on pool type, demolition method, and rubble volume. Contact us for a precise, free, no-obligation quote.</p>
            </div>
        </section>

        <section id="fill-in-vs-removal" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Pool Removal vs. Pool Fill-In: Which is Better for Your Midrand Property?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div>
                    <h3 className="font-semibold text-xl mb-2">Full Demolition & Removal</h3>
                    <p className="text-muted-foreground">This involves breaking up and removing the entire pool shell. We then backfill the area with an engineered mix and compact it in layers. This is the **only method that makes the land safe for future construction**, such as a home extension or cottage. For most Midrand properties where future development is a possibility, this is the highly recommended solution.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-2">Partial Demolition (Fill-In)</h3>
                    <p className="text-muted-foreground">This cheaper option involves punching holes in the pool floor for drainage and breaking down the top layer of the walls, then filling the shell. While faster, this method is **not suitable for building over** and may need to be declared to future buyers. It's a viable choice if you only plan to create a new lawn or garden bed.</p>
                </div>
            </div>
        </section>
        
        <section id="recent-projects" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Pool Demolition Work in Midrand</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader><CardTitle>Luxury Home Pool Removal</CardTitle><p className="text-sm text-muted-foreground">Waterfall Estate</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Full demolition of a large gunite pool on a luxury property. The project required careful protection of surrounding landscaping. The site was left pristine and ready for a new entertainment area. <br /><strong>Timeline: 4 Days</strong></p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Standard Pool Demolition</CardTitle><p className="text-sm text-muted-foreground">Carlswald</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">A client in Carlswald needed an old fibreglass pool removed to create more garden space. Our team carefully cut the shell, removed all debris, and leveled the site in just two days, leaving a clean, safe area for the new lawn.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Townhouse Complex Pool</CardTitle><p className="text-sm text-muted-foreground">Halfway Gardens</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Dismantled the old communal pool for a townhouse complex that was upgrading its facilities. The job was completed efficiently over a weekend to minimize inconvenience to residents, with all rubble removed.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Areas We Cover in and Around Midrand</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">We provide expert pool demolition services across all of Midrand's suburbs and estates, including:</p>
            <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Waterfall City</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Kyalami</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Carlswald</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Halfway House</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Noordwyk</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Blue Hills</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Vorna Valley</span>
            </div>
             <p className="mt-4 text-muted-foreground">Wherever you are in Midrand, we are ready to assist with fast and professional service.</p>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Pool Demolition Midrand</h2>
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
          <h2 className="text-3xl font-bold">Get a Free Quote for Pool Removal in Midrand</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Ready to remove your pool? Apex Demolitions is here to help. Contact us for a fast response and a free quote.
            We also offer swimming pool demolition in <Link href="/swimming-pool-demolition-sandton" className="text-primary-foreground underline">Sandton</Link>, <Link href="/swimming-pool-demolition-randburg" className="text-primary-foreground underline">Randburg</Link>, and across <Link href="/swimming-pool-demolition-johannesburg" className="text-primary-foreground underline">Johannesburg</Link>.
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
