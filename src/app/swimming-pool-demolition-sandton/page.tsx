

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, Waves, Star, ArrowRight, MessageSquare, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
    { 
        question: "How do you handle demolitions in Sandton's exclusive, secure estates?", 
        answer: "This is our specialty. We have extensive experience working within Sandton's most exclusive secure estates like Sandhurst, Hyde Park, and Morningside. Our process begins with liaising directly with the estate management to understand all rules regarding work hours, noise levels, vehicle access, and site cleanliness. Our teams are professional, discreet, and work with the utmost respect for the community and its residents, ensuring a smooth, compliant, and disruption-free project from start to finish." 
    },
    { 
        question: "Is your company insured for high-value properties?", 
        answer: "Yes. We carry comprehensive public liability insurance specifically designed for working on high-value residential and commercial properties. This provides our clients in Sandton with complete peace of mind, knowing their valuable assets, as well as neighbouring properties, are fully protected throughout the demolition process. We can provide all necessary documentation for your records or for your estate's requirements." 
    },
    { 
        question: "What is your process for demolishing a luxury home's swimming pool?", 
        answer: "Our process for luxury homes is meticulous. It begins with a thorough site assessment and planning phase, where we identify all elements to be protected (like mature trees, irrigation systems, or boundary walls). We then use a precision dismantling process, often breaking the structure down piece by piece to avoid damage. This is followed by a full <a href='/rubble-removal-johannesburg' class='text-primary hover:underline'>rubble removal</a> and <a href='/site-cleaning' class='text-primary hover:underline'>site cleaning</a> service, leaving the property pristine and ready for your new architectural vision." 
    },
    {
        question: "Can the ground be built on after the pool is removed?",
        answer: "Yes, this is a critical outcome of a professional pool demolition. When we perform a full demolition and use engineered backfilling with proper compaction in layers, the ground is stabilized and made safe for building a home extension, cottage, or other structure. We test the compaction to ensure it meets engineering standards, providing a certificate if required for your building plans, which is often a necessity for projects in areas like Sandton and Bryanston."
    },
    {
        question: "How much does pool demolition cost in Sandton?",
        answer: "The cost of pool demolition in Sandton varies based on the pool's size, material (concrete is tougher than fibreglass), and site access. For a small plunge pool, you can expect prices from R15,000, while medium-sized pools range from R20,000 to R30,000. Larger, more complex pools on properties with difficult access can be R35,000+. We provide a free, no-obligation on-site assessment to give you a transparent and accurate quote."
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

 const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Apex Demolitions",
    "url": "https://apex-demolitions-website.vercel.app/swimming-pool-demolition-sandton",
    "telephone": "+27784292760",
    "areaServed": [
      { "@type": "Place", "name": "Sandton" },
      { "@type": "Place", "name": "Bryanston" },
      { "@type": "Place", "name": "Morningside" },
      { "@type": "Place", "name": "Rivonia" },
      { "@type": "Place", "name": "Sandhurst" }
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Swimming Pool Demolition"
      }
    }
};

const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, faqSchema]
};

export default function SwimmingPoolDemolitionSandtonPage() {
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');
    const heroImage = PlaceHolderImages.find(p => p.id === 'poolDemoHero');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Sandton</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Sandton's Premier Luxury Home & Pool Removal Service
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
             As Sandton's leading pool removal specialists, Apex Demolitions provides a premium service for Johannesburg's most exclusive properties. We handle everything from complex demolitions in secure estates to meticulous site cleanups, ensuring a seamless, professional, and fully insured process.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone /> Call for a Free Quote</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp for a Fast Response</a>
                </Button>
            </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Sandton Homeowners Choose Us</h2>
             <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">Our reputation in Sandton is built on trust, precision, and an intimate understanding of the area's unique requirements. We are the preferred choice for homeowners in Sandhurst, Morningside, Bryanston, and Rivonia because we deliver a service that matches the quality of their properties.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Estate Work Specialists</h3><p className="text-sm text-muted-foreground">We have extensive experience working within Sandton's secure lifestyle estates and adhere to all HOA rules.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Luxury Property Protection</h3><p className="text-sm text-muted-foreground">We use advanced techniques to safeguard your home, landscaping, and valuable assets during demolition.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Discreet & Professional</h3><p className="text-sm text-muted-foreground">Our teams are professional, uniformed, and operate with the discretion required in high-end neighborhoods.</p></div></div>
            </div>
        </section>
        
        <section id="sandton-challenges" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">The Unique Challenges of Pool Demolition in Sandton</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                Removing a pool in Sandton isn't just about breaking concrete; it's about navigating a unique environment with precision and professionalism. We are experts in overcoming these specific challenges.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <Card>
                    <CardHeader><CardTitle>Secure Estate Access</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">We have extensive experience working within Sandton's premier estates. We coordinate with estate management, adhere to strict work hours and noise limitations, and use the right-sized equipment for narrow roads.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Protecting Luxury Finishes</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Your property is an investment. Our teams use protective boarding for imported paving, manicured lawns, and surrounding structures to ensure the demolition process leaves no trace, other than the newly available space.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Maximizing Property Value</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">In the Sandton market, a large, versatile garden can be more valuable than an aging pool. A professional removal with certified compaction ensures the land is ready for a high-value extension or premium landscaping.</p></CardContent>
                </Card>
            </div>
        </section>

        <section id="demolition-process" className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Pool Demolition Process in Sandton</h2>
                    <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">We follow a systematic, authority-compliant process to ensure every project is seamless, safe, and efficient from start to finish.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-5xl mx-auto">
                    <Card className="text-center"><CardHeader><CardTitle>1. Site Assessment</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">A thorough on-site assessment to provide a detailed quotation and project plan that respects all estate and municipal regulations.</p></CardContent></Card>
                    <Card className="text-center"><CardHeader><CardTitle>2. Planning & Permits</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We professionally manage all permit applications and liaise with estate management to ensure full legal compliance.</p></CardContent></Card>
                    <Card className="text-center"><CardHeader><CardTitle>3. Safe Demolition</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Our licensed team performs a controlled, surgical demolition using modern equipment and techniques to dismantle the structure safely.</p></CardContent></Card>
                    <Card className="text-center"><CardHeader><CardTitle>4. Rubble Removal</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We clear all debris and transport it to licensed facilities, leaving your site spotless with our full <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal service</Link>.</p></CardContent></Card>
                    <Card className="text-center"><CardHeader><CardTitle>5. Compaction & Cleanup</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">The area is backfilled and compacted to engineering standards, ready for landscaping or construction. This final step is part of our <Link href="/site-cleaning" className="text-primary hover:underline">site cleaning</Link> promise.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section id="demolition-cost" className="py-12 md:py-16 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Swimming Pool Demolition Costs in Sandton</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                    The **demolition cost in Sandton** is influenced by the premium nature of the area and the complexity of the work. While we offer **affordable demolition Sandton** solutions, we provide transparent, detailed quotes that account for these unique factors to ensure there are no surprises. Factors like estate access fees, difficult site access for machinery, and the type of pool (e.g. concrete vs. fibreglass) all affect the final price.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card><CardHeader><CardTitle>Small Pools (Plunge/Jacuzzi)</CardTitle></CardHeader><CardContent><p className="text-3xl font-bold">R8,000 - R15,000+</p><p className="text-muted-foreground text-sm mt-2">Ideal for small plunge pools or jacuzzis where access is good.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Medium Residential Pools</CardTitle></CardHeader><CardContent><p className="text-3xl font-bold">R15,000 - R30,000+</p><p className="text-muted-foreground text-sm mt-2">Covers most standard-sized residential pools in Sandton estates.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Large Architectural Pools</CardTitle></CardHeader><CardContent><p className="text-3xl font-bold">R30,000+</p><p className="text-muted-foreground text-sm mt-2">For large, deep, or complex-shaped pools, especially those with difficult access.</p></CardContent></Card>
                </div>
                 <p className="text-center text-sm text-muted-foreground mt-8">*Disclaimer: These prices are estimates. The final demolition cost depends on the pool size, material, site access, and the scope of backfilling. Contact us for a precise, fixed-price quote.</p>
            </div>
        </section>

        <section id="fill-in-vs-removal" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Pool Removal vs. Pool Fill-In: Which Is Better for Your Sandton Property?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div>
                    <h3 className="font-semibold text-xl mb-2">Full Demolition & Removal</h3>
                    <p className="text-muted-foreground">This involves breaking up and removing the entire pool shell and all associated concrete and rebar. We then backfill the area with an engineered mix and compact it in layers. This is the **only method that makes the land safe for future construction**, such as a home extension or cottage. For Sandton properties where future development is a possibility, this is the most highly recommended solution.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-2">Partial Demolition (Fill-In)</h3>
                    <p className="text-muted-foreground">This cheaper option involves punching holes in the pool floor for drainage and breaking down the top layer of the walls, then filling the shell. While faster, this method is **not suitable for building over** and may need to be declared to future buyers. It's a viable choice if you only plan to create a new lawn or garden bed.</p>
                </div>
            </div>
        </section>
        
        <section id="recent-projects" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Pool Demolition Projects in Sandton</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader><CardTitle>Luxury Home Pool Removal</CardTitle><p className="text-sm text-muted-foreground">Sandhurst</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Full demolition of a large, deep concrete pool on a luxury property. The project required careful protection of champion trees and imported paving. The site was left pristine and ready for a new landscaped garden. <br /><strong>Timeline: 4 Days</strong></p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Secure Estate Pool Demolition</CardTitle><p className="text-sm text-muted-foreground">Bryanston</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Removal of a medium-sized fibreglass pool with very limited access. Our team coordinated with the Bryanston estate HOA and used compact equipment to complete the job with zero disruption to neighbors. <br /><strong>Timeline: 3 Days</strong></p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Townhouse Complex Pool</CardTitle><p className="text-sm text-muted-foreground">Morningside</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Dismantled the old communal pool for a townhouse complex that was upgrading its facilities. The job was completed efficiently over a weekend to minimize inconvenience to residents, with all rubble removed. <br /><strong>Timeline: 2 Days</strong></p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section className="py-12 md:py-16 bg-background rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Areas We Serve in and Around Sandton</h2>
             <p className="mt-2 text-muted-foreground text-center max-w-3xl mx-auto mb-10">We provide elite pool demolition services across all of Sandton's prestigious suburbs. Our teams regularly work on properties in and around Sandton City, Bryanston, and Fourways, and are the local experts for pool removal in:</p>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-2">Sandhurst, Hyde Park & Morningside</h3>
                    <p className="text-sm text-muted-foreground">Specializing in luxury residential pool demolition, our teams work with precision and discretion to prepare plots for new landscaping or extensions, always protecting valuable gardens and neighbouring properties.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-2">Bryanston, Fourways & Lonehill</h3>
                    <p className="text-sm text-muted-foreground">We are the trusted contractors for pool removals in Sandton's popular lifestyle estates, handling everything from HOA approvals to immaculate <Link href="/site-cleaning-sandton" className="text-primary hover:underline">site cleanup</Link> with expert care.</p>
                </div>
                 <div className="bg-card p-6 rounded-lg shadow-sm md:col-span-2">
                    <h3 className="font-bold text-lg mb-2">Rivonia, Gallo Manor & Woodmead</h3>
                    <p className="text-sm text-muted-foreground">Our teams provide a fast and efficient service for the mix of residential homes, townhouse complexes, and commercial properties in these central Sandton suburbs, ensuring minimal disruption and a clean finish every time.</p>
                </div>
            </div>
        </section>

        <section id="faq" className="py-12 md:py-16">
            <h2 className="text-3xl font-bold text-center mb-8">Sandton Pool Demolition FAQs</h2>
            <div className="w-full max-w-4xl mx-auto space-y-4">
                 <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>
                            <div className="prose prose-sm max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
        
        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg mt-16">
          <h2 className="text-3xl font-bold">Need Demolition Services in Sandton?</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            For urgent projects, we offer **same-day service** in Sandton. Contact us for a fast, competitive, and no-obligation quote. Our Sandton team is ready to provide a professional assessment.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now for a Same-Day Quote</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp Us</a></Button>
          </div>
          <p className="mt-4 text-xs text-primary-foreground/70">As the most trusted <Link href="/swimming-pool-demolition-johannesburg" className="text-primary-foreground underline hover:text-secondary">pool demolition contractors in Johannesburg</Link>, we also serve clients across Gauteng.</p>
        </section>
      </div>
    </>
  );
}
