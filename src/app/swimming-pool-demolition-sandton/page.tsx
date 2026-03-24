
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, Waves, Star, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
    { 
        question: "Are your demolition services insured for high-value properties in Sandton?", 
        answer: "Absolutely. Apex Demolitions carries comprehensive public liability insurance specifically designed for working on high-value residential and commercial properties. This provides our clients in Sandton with complete peace of mind, knowing their valuable assets, as well as neighbouring properties, are fully protected throughout the demolition process." 
    },
    { 
        question: "How do you handle demolitions in Sandton's exclusive, secure estates?", 
        answer: "This is our specialty. We have extensive experience working within Sandton's most exclusive secure estates. Our process begins with liaising directly with the estate management to understand all rules regarding work hours, noise levels, vehicle access, and site cleanliness. Our teams are professional, discreet, and work with the utmost respect for the community and its residents, ensuring a smooth, compliant, and disruption-free project." 
    },
    { 
        question: "What is your process for demolishing a luxury home's swimming pool?", 
        answer: "Our process for luxury homes is meticulous. It begins with a thorough site assessment and planning phase, where we identify all elements to be protected (like mature trees or boundary walls). We then use a precision dismantling process, often breaking the structure down piece by piece to avoid damage. This is followed by a full <a href='/rubble-removal-sandton' class='text-primary hover:underline'>rubble removal</a> and <a href='/site-cleaning-sandton' class='text-primary hover:underline'>site cleaning</a> service, leaving the property pristine and ready for your new architectural vision." 
    },
    {
        question: "Can the ground be built on after the pool is removed?",
        answer: "Yes. When we perform a full demolition with engineered backfilling, the ground is properly compacted in layers, making it structurally sound and safe for building a home extension, cottage, or other structure. We test the compaction to ensure it meets engineering standards, providing a certificate if required for your building plans. This is a critical step that we take very seriously."
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Contractors Sandton</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Sandton's Premier Luxury Home & Pool Removal Service
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            As the leading **pool demolition contractors in Sandton**, Apex Demolitions provides a premium, specialized service for Johannesburg's most exclusive properties. We understand the precision and high standards required for **pool demolition in Sandton**, from large residential pools in Sandhurst to complex removals in Morningside. Our expertise in managing estate protocols is unmatched. 
          </p>
           <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone /> Call for a Professional Assessment</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp for a Fast Quote</a>
                </Button>
            </div>
        </section>

        <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                <p className="text-lg text-muted-foreground">
                    We are the trusted **pool removal contractors Sandton** architects and homeowners rely on for safe, compliant, and professional services. Our extensive experience covers large-scale residential pool removals in suburbs like Morningside and Rivonia. Our team is committed to delivering a superior service that respects the value of your property and the standards of your neighborhood. For any **swimming pool demolition Sandton** project, large or small, we are the insured, licensed, and reliable choice.
                </p>
            </div>
        </section>

        <section id="types-of-demolition" className="py-12 md:py-16 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Types of Pools We Remove in Sandton</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                        Our capabilities cover every kind of pool removal project required in Sandton, executed with the highest level of professionalism.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Waves className="text-primary" /> Luxury & Architectural Pools</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Surgical dismantling of large and complex pools, with careful preservation of valuable trees and surrounding properties in Sandton's exclusive suburbs.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Waves className="text-primary" /> Concrete & Gunite Pools</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Expert breaking and removal of heavily reinforced concrete and gunite pools, common in older Sandton properties.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Waves className="text-primary" /> Commercial & Complex Pools</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Removal of pools from hotels, gyms, and apartment complexes with minimal disruption to operations.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section id="demolition-process" className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Demolition Process in Sandton</h2>
                    <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">We follow a systematic process to ensure every project is seamless, safe, and efficient.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
                    <Card className="text-center"><CardHeader><CardTitle>1. Site Inspection & Planning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">A thorough on-site assessment to provide a detailed quotation and project plan that respects all estate and municipal regulations.</p></CardContent></Card>
                    <Card className="text-center"><CardHeader><CardTitle>2. Planning & Permits</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We professionally manage all permit applications and liaise with estate management to ensure full legal compliance.</p></CardContent></Card>
                    <Card className="text-center"><CardHeader><CardTitle>3. Safe Demolition Work</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Our licensed team performs a controlled, surgical demolition using modern equipment and techniques to dismantle the structure safely.</p></CardContent></Card>
                    <Card className="text-center"><CardHeader><CardTitle>4. Rubble Removal & Cleanup</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We clear all debris and transport it to licensed facilities, leaving your site spotless and ready for your builders.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section id="demolition-cost" className="py-12 md:py-16 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Swimming Pool Demolition Costs in Sandton</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                    While we offer **affordable pool demolition Sandton** solutions, the cost is influenced by the premium nature of the area. We provide transparent, detailed quotes that account for these unique factors.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card><CardHeader><CardTitle>Pool Size & Complexity</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">The square meterage and complexity of the build (e.g., multi-level, deep foundations, difficult materials) are the primary cost drivers.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Access & Estate Rules</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Restricted work hours, noise limitations, and difficult access for heavy machinery in secure estates can influence the project timeline and cost.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Rubble Removal Volume</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">The total volume of debris that needs to be removed from the site and transported to registered disposal facilities will directly impact the final price.</p></CardContent></Card>
                </div>
            </div>
        </section>
        
        <section id="recent-projects" className="py-12 md:py-20 bg-background rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Pool Demolition Projects in Sandton</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader><CardTitle>Luxury Home Pool Removal</CardTitle><p className="text-sm text-muted-foreground">Sandhurst</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Full demolition of a large, aging marbelite pool at a luxury home. The project required careful protection of champion trees and was completed in 5 days, with all rubble removed and the site left pristine for a new landscaping project.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Office Park Pool Removal</CardTitle><p className="text-sm text-muted-foreground">Rivonia</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Decommissioned and removed an old communal pool at an office park to create more parking space. Work was completed over a weekend to avoid disruption to tenants, with the site ready for paving the following week.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Townhouse Complex Pool</CardTitle><p className="text-sm text-muted-foreground">Morningside</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Removed a small, leaking complex pool to reduce body corporate maintenance costs. The area was backfilled and compacted, creating a new, safe lawn area for residents' children to play.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        <section className="py-12 md:py-16 bg-card rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Areas We Serve in and Around Sandton</h2>
             <p className="mt-2 text-muted-foreground text-center max-w-3xl mx-auto mb-10">We provide elite pool demolition services across all of Sandton's prestigious suburbs. Our teams are the local experts for pool removal, rubble removal, and site clearing in:</p>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-2">Sandhurst, Hyde Park & Inanda</h3>
                    <p className="text-sm text-muted-foreground">Specializing in luxury residential pool demolition, our teams work with precision and discretion to prepare plots for new landscaping, always protecting valuable trees and neighbouring properties.</p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-2">Morningside & Rivonia</h3>
                    <p className="text-sm text-muted-foreground">We are the trusted contractors for residential and commercial pool removals, providing a fast and reliable service.</p>
                </div>
                 <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-2"><Link href="/swimming-pool-demolition-bryanston" className="text-primary hover:underline">Bryanston Pool Demolition</Link></h3>
                    <p className="text-sm text-muted-foreground">We are the premier demolition contractors for Bryanston's large residential stands and secure estates, handling pool removals with expert care.</p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-2">Sandton CBD & <Link href="/swimming-pool-demolition-rosebank" className="text-primary hover:underline">Rosebank Pool Demolition</Link></h3>
                    <p className="text-sm text-muted-foreground">Our teams are experts in commercial pool removals in the high-density urban environments of the Sandton CBD and Rosebank, working around business hours to minimize disruption.</p>
                </div>
            </div>
        </section>

        <section id="faq" className="py-12 md:py-16">
            <h2 className="text-3xl font-bold text-center mb-8">Sandton Pool Demolition FAQs</h2>
            <div className="w-full max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="p-4 border rounded-lg bg-card">
                        <p className="font-semibold text-lg">{faq.question}</p>
                        <div className="text-muted-foreground mt-2 prose" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </div>
                ))}
            </div>
        </section>
        
        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg mt-16">
          <h2 className="text-3xl font-bold">Need Pool Demolition Services in Sandton?</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            For urgent projects, we offer **same-day demolition services in Sandton**. Contact us for a fast, competitive, and no-obligation quote. Our Sandton team is ready to provide a professional assessment.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now for a Same-Day Quote</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp Us</a></Button>
          </div>
          <p className="mt-4 text-xs text-primary-foreground/70">As the most trusted <Link href="/demolition-johannesburg" className="text-primary-foreground underline hover:text-secondary">demolition contractors in Johannesburg</Link>, we also serve <Link href="/demolition-randburg" className="text-primary-foreground underline hover:text-secondary">Demolition Randburg</Link> clients.</p>
        </section>
      </div>
    </>
  );
}
