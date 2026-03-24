
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
        answer: "This is our specialty. We have extensive experience working within Sandton's most exclusive secure estates like Sandhurst and Morningside. Our process begins with liaising directly with the estate management to understand all rules regarding work hours, noise levels, vehicle access, and site cleanliness. Our teams are professional, discreet, and work with the utmost respect for the community and its residents, ensuring a smooth, compliant, and disruption-free project from start to finish." 
    },
    { 
        question: "Is your company insured for high-value properties?", 
        answer: "Yes. We carry comprehensive public liability insurance specifically designed for working on high-value residential and commercial properties. This provides our clients in Sandton with complete peace of mind, knowing their valuable assets, as well as neighbouring properties, are fully protected throughout the demolition process. We can provide all necessary documentation upon request." 
    },
    { 
        question: "What is your process for demolishing a luxury home's swimming pool?", 
        answer: "Our process for luxury homes is meticulous. It begins with a thorough site assessment and planning phase, where we identify all elements to be protected (like mature trees or boundary walls). We then use a precision dismantling process, often breaking the structure down piece by piece to avoid damage. This is followed by a full <a href='/rubble-removal-johannesburg' class='text-primary hover:underline'>rubble removal</a> and <a href='/site-cleaning' class='text-primary hover:underline'>site cleaning</a> service, leaving the property pristine and ready for your new architectural vision." 
    },
    {
        question: "Can the ground be built on after the pool is removed?",
        answer: "Yes, this is a critical outcome of a professional pool demolition. When we perform a full demolition and use engineered backfilling with proper compaction, the ground is stabilized and made safe for building a home extension, cottage, or other structure. We test the compaction to ensure it meets engineering standards, providing a certificate if required for your building plans. This is a crucial step that we take very seriously."
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Contractors Sandton</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Sandton's Premier Luxury Home & Building Demolition Service
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            As the leading **demolition contractors in Sandton**, Apex Demolitions provides a premium, specialized service tailored for Johannesburg's most exclusive properties. We understand the precision, discretion, and high standards required for **demolition in Sandton**, from large-scale **residential demolition** in Sandhurst to complex **commercial demolition** near the Sandton CBD. Our expertise in managing City of Johannesburg permits and strict estate protocols is unparalleled. 
          </p>
        </section>

        <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <p className="text-lg text-muted-foreground text-center">
                    We are the trusted **demolition contractors Sandton** architects and homeowners rely on for safe, compliant, and professional demolition services. Our extensive experience covers both large-scale **residential demolition** in suburbs like Morningside and Rivonia, and complex **commercial demolition** projects within the Sandton CBD. Our team is committed to delivering a superior service that respects the value of your property and the standards of your neighborhood. For any **building demolition Sandton** project, large or small, we are the insured, licensed, and reliable choice.
                </p>
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

        <section id="types-of-demolition" className="py-12 md:py-16 bg-background rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Types of Demolition Services in Sandton</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                        Our capabilities cover every kind of structural removal project required in Sandton, executed with the highest level of professionalism and care.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Waves className="text-primary" /> Residential Demolition Sandton</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Surgical dismantling of large and complex luxury homes, with careful preservation of valuable trees and surrounding properties in Sandton's exclusive suburbs like Sandhurst and Bryanston.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Waves className="text-primary" /> Commercial Demolition Sandton</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Expert demolition of office blocks, retail spaces, and older commercial buildings in the Sandton CBD and surrounding business nodes, making way for new high-rise developments.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Waves className="text-primary" /> Interior Demolition (Strip-Outs)</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Precision interior strip-outs for high-end office and retail space renovations. We prepare 'white box' spaces for new tenant installations with minimal disruption.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Waves className="text-primary" /> Swimming Pool Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Careful removal of architectural pools, tennis courts, and water features with minimal impact on established, high-value gardens. A key service for our <Link href="/swimming-pool-demolition-sandton" className="text-primary hover:underline">pool demolition Sandton</Link> clients.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Waves className="text-primary" /> Site Clearing & Rubble Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We leave your Sandton property pristine and ready for construction, with all waste managed by our expert <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link> division.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Waves className="text-primary" /> Emergency Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We offer a fast-response service for same-day demolition services in Sandton for fire-damaged or structurally unsound buildings that pose an immediate risk.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section id="demolition-process" className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Demolition Process in Sandton</h2>
                    <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">We follow a systematic, authority-compliant process to ensure every project is seamless, safe, and efficient from start to finish.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
                    <Card className="text-center"><CardHeader><CardTitle>1. Site Inspection & Planning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">A thorough on-site assessment to provide a detailed quotation and project plan that respects all estate and municipal regulations.</p></CardContent></Card>
                    <Card className="text-center"><CardHeader><CardTitle>2. Planning & Permits</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We professionally manage all permit applications with the City of Johannesburg and liaise with estate management to ensure full legal compliance.</p></CardContent></Card>
                    <Card className="text-center"><CardHeader><CardTitle>3. Safe Demolition Work</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Our licensed team performs a controlled, surgical demolition using modern equipment and techniques to dismantle the structure safely.</p></CardContent></Card>
                    <Card className="text-center"><CardHeader><CardTitle>4. Rubble Removal & Cleanup</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We clear all debris and transport it to licensed facilities, leaving your site spotless with our full <Link href="/site-cleaning" className="text-primary hover:underline">site cleaning</Link> service.</p></CardContent></Card>
                </div>
            </div>
        </section>
        
        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Pool Removal vs. Pool Fill-In – Which Is Better for Your Sandton Property?</h2>
                    <p className="text-muted-foreground mb-6">Clients often ask whether they should completely remove their pool or just fill it in. In a premium area like Sandton, the choice can impact property value and future plans.</p>
                    <h3 className="font-semibold text-xl mb-2">Full Demolition & Removal</h3>
                    <p className="text-muted-foreground mb-4">This involves breaking up and removing the entire pool shell and all associated concrete and rebar. We then backfill the area with an engineered mix of rubble and soil, compacting it in layers. This is the **only method that makes the land safe for future construction**, such as a home extension or cottage. For Sandton properties where future development is a possibility, this is the most highly recommended solution.</p>
                     <h3 className="font-semibold text-xl mb-2">Why Proper Pool Demolition Matters</h3>
                    <p className="text-muted-foreground mb-4">A professional pool demolition is more than just breaking concrete. It involves a structural assessment, the use of safe, controlled methods to protect your luxury home, and ensuring all <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link> is handled responsibly. Most importantly, proper backfilling and compaction are essential to prevent the ground from sinking later, which could cause major issues with new landscaping or structures.</p>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A clean, green lawn where a swimming pool used to be in Sandton" data-ai-hint="green lawn backyard" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
        </section>

        <section id="demolition-cost" className="py-12 md:py-16 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Swimming Pool Demolition Costs in Sandton</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                    The **demolition cost in Sandton** is influenced by the premium nature of the area and the complexity of the work. While we offer **affordable demolition Sandton** solutions, we provide transparent, detailed quotes that account for these unique factors to ensure there are no surprises.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card><CardHeader><CardTitle>Small Pools (Plunge/Jacuzzi)</CardTitle></CardHeader><CardContent><p className="text-3xl font-bold">R15,000+</p><p className="text-muted-foreground text-sm mt-2">Ideal for small plunge pools or jacuzzis where access is good.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Medium Residential Pools</CardTitle></CardHeader><CardContent><p className="text-3xl font-bold">R20,000 - R30,000+</p><p className="text-muted-foreground text-sm mt-2">Covers most standard-sized residential pools in Sandton estates.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Large Architectural Pools</CardTitle></CardHeader><CardContent><p className="text-3xl font-bold">R35,000+</p><p className="text-muted-foreground text-sm mt-2">For large, deep, or complex-shaped pools, especially those with difficult access.</p></CardContent></Card>
                </div>
                 <p className="text-center text-sm text-muted-foreground mt-8">*Disclaimer: These prices are estimates. The final demolition cost depends on the pool size, material (concrete vs. fiberglass), site access, and the scope of backfilling. Contact us for a precise, fixed-price quote.</p>
            </div>
        </section>
        
        <section id="recent-projects" className="py-12 md:py-20 bg-background rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Demolition Projects in Sandton</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader><CardTitle>Luxury Home Demolition</CardTitle><p className="text-sm text-muted-foreground">Sandhurst</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Full demolition of a 5-bedroom luxury home to clear a prime plot for a new architectural masterpiece. The project required careful protection of champion trees and was completed in 5 days, with all rubble removed and the site left pristine.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Office Interior Strip-Out</CardTitle><p className="text-sm text-muted-foreground">Rivonia</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Complete interior strip-out of two floors of an office building to prepare a 'white box' for a new corporate tenant. Work was completed out of hours to avoid disruption to other businesses, resulting in a perfectly clean and ready-to-fit space.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Swimming Pool Removal</CardTitle><p className="text-sm text-muted-foreground">Morningside</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Removal of a large, old marbelite pool and extensive paving to create a larger, modern garden and entertainment area. The site was left perfectly level, compacted, and ready for new landscaping, transforming the client's backyard.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        <section className="py-12 md:py-16 bg-card rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Areas We Serve in and Around Sandton</h2>
             <p className="mt-2 text-muted-foreground text-center max-w-3xl mx-auto mb-10">We provide elite **demolition services** across all of Sandton's prestigious suburbs. Our teams regularly work on properties in and around Sandton City, Bryanston, and Fourways, and are the local experts for demolition, rubble removal, and site clearing in:</p>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-2">Sandhurst, Hyde Park & Inanda</h3>
                    <p className="text-sm text-muted-foreground">Specializing in luxury residential demolition, our teams work with precision and discretion to prepare plots for new architectural masterpieces, always protecting valuable trees and neighbouring properties.</p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-2">Morningside & Rivonia</h3>
                    <p className="text-sm text-muted-foreground">We are the trusted contractors for both residential and commercial projects, from home demolitions to office strip-outs, providing a fast and reliable service.</p>
                </div>
                 <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-2"><Link href="/demolition-bryanston" className="text-primary hover:underline">Demolition Bryanston</Link></h3>
                    <p className="text-sm text-muted-foreground">We are the premier demolition contractors for Bryanston's large residential stands and secure estates, handling everything from pool removals to full house demolitions with expert care.</p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-2">Sandton CBD & <Link href="/demolition-rosebank" className="text-primary hover:underline">Demolition Rosebank</Link></h3>
                    <p className="text-sm text-muted-foreground">Our teams are experts in commercial demolition and strip-outs in the high-density urban environments of the Sandton CBD and Rosebank, working around business hours to minimize disruption.</p>
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
          <h2 className="text-3xl font-bold">Need Demolition Services in Sandton?</h2>
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
