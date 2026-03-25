

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, MapPin, Quote, Waves, ShieldCheck, ArrowRight, Star, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Apex Demolitions",
    "image": "https://apex-demolitions-website.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fsiya-demolitions-projects.firebasestorage.app%2Fo%2Fsima%2520swimming%2520demolitions%2520gauteng.jpg%3Falt%3Dmedia%26token%3D705340d3-8bb7-4acc-b507-3623c18f4e4a&w=1920&q=75",
    "url": "https://apex-demolitions-website.vercel.app/swimming-pool-demolition-johannesburg",
    "telephone": "078 429 2760",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Johannesburg",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Gauteng"
    }
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
        "name": "Johannesburg"
    },
    "description": "Professional swimming pool demolition, removal, and site preparation services in Johannesburg. We handle concrete, gunite, and fibreglass pools, including all rubble removal and backfilling.",
    "url": "https://apex-demolitions-website.vercel.app/swimming-pool-demolition-johannesburg"
};

const faqs = [
    {
        question: "How much does it cost to demolish a swimming pool in Johannesburg?",
        answer: "The cost of swimming pool demolition in Johannesburg typically ranges from R15,000 for a small, easily accessible pool to over R40,000 for a large, complex removal. The final price depends on the pool's size, the material (gunite and concrete are tougher than fibreglass), ease of access for machinery, and whether you choose full or partial removal. We provide a free, detailed, on-site assessment to give you a transparent and accurate quote with no hidden costs, ensuring you receive affordable pool demolition services that fit your budget."
    },
    {
        question: "Do I need municipal approval for pool demolition in Johannesburg?",
        answer: "In most cases, yes. The City of Johannesburg requires plans and approval for pool demolitions to ensure they are done safely and correctly, especially regarding compaction and drainage. As part of our professional service, we guide you through and can assist with this entire approval process to ensure your project is fully compliant, protecting you from future legal and structural issues. This is a critical step that we manage for our clients to guarantee a hassle-free project."
    },
    {
        question: "How long does the pool demolition process take?",
        answer: "A standard residential pool demolition in Johannesburg typically takes between 2 to 4 days. This timeline includes the complete process: draining the pool, breaking up the structure, removing all the debris, and then backfilling and compacting the area. For larger pools or sites with difficult access in suburbs like Sandton or Northcliff, it might take slightly longer. We provide a clear and realistic timeline with every quote so you can plan your project accordingly."
    },
    {
        question: "Do you remove all the rubble after the demolition?",
        answer: "Yes, our service is a complete, all-in-one solution. We handle the demolition, load all the rubble and debris, and transport it to a licensed and environmentally responsible disposal facility. This is a core part of our professional <a href='/rubble-removal-johannesburg' class='text-primary hover:underline'>rubble removal Johannesburg</a> service. Our goal is to leave your site clean, level, and ready for its next purpose, whether that's a new garden, a patio, or a building extension. You won't need to hire a separate rubble removal company."
    },
    {
        question: "Can the space be used for new construction after the pool is removed?",
        answer: "Absolutely. This is a key reason many clients choose a full demolition. When we remove the entire pool structure and use engineered backfilling techniques with proper compaction in layers, the land is stabilized and made suitable for new construction. This makes it safe to build a home extension, a cottage, or another permanent structure on the site. We can provide an engineer's certificate for the compaction if required for your building plans, which is often a necessity for projects in areas like Sandton and Bryanston."
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

const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, faqSchema]
};

const suburbs = [
    { name: "Sandton", href: "/swimming-pool-demolition-sandton" },
    { name: "Randburg", href: "/swimming-pool-demolition-randburg" },
    { name: "Roodepoort", href: "/swimming-pool-demolition-roodepoort" },
    { name: "Midrand", href: "/swimming-pool-demolition-midrand" },
    { name: "Fourways", href: "/swimming-pool-demolition-fourways" },
    { name: "Soweto", href: "/swimming-pool-demolition-soweto" }, 
    { name: "Alberton", href: "/swimming-pool-demolition-alberton" },
    { name: "Germiston", href: "/swimming-pool-demolition-germiston" },
    { name: "Boksburg", href: "/swimming-pool-demolition-boksburg" },
    { name: "Benoni", href: "/swimming-pool-demolition-benoni" },
    { name: "Kempton Park", href: "/swimming-pool-demolition-kempton-park" }, 
    { name: "Bedfordview", href: "/swimming-pool-demolition-bedfordview" },
    { name: "Edenvale", href: "/swimming-pool-demolition-edenvale" },
    { name: "Bryanston", href: "/swimming-pool-demolition-bryanston" },
    { name: "Rosebank", href: "/swimming-pool-demolition-rosebank" },
    { name: "Northcliff", href: "/swimming-pool-demolition-northcliff" }, 
    { name: "Melville", href: "/swimming-pool-demolition-melville" },
    { name: "Linden", href: "/swimming-pool-demolition-linden" },
    { name: "Parkhurst", href: "/swimming-pool-demolition-parkhurst" },
    { name: "Greenside", href: "/swimming-pool-demolition-greenside" },
    { name: "Johannesburg South", href: "/swimming-pool-demolition-johannesburg-south"},
    { name: "Glenvista", href: "/swimming-pool-demolition-glenvista"},
    { name: "Krugersdorp", href: "/swimming-pool-demolition-krugersdorp"},
    { name: "Springs", href: "/swimming-pool-demolition-springs"},
    { name: "Brakpan", href: "/swimming-pool-demolition-brakpan"},
    { name: "Nigel", href: "/swimming-pool-demolition-nigel"},
    { name: "Johannesburg CBD", href: "/swimming-pool-demolition-johannesburg-cbd"},
    { name: "Rivonia", href: "/swimming-pool-demolition-rivonia"},
    { name: "Kyalami", href: "/swimming-pool-demolition-kyalami"},
    { name: "Parkview", href: "/swimming-pool-demolition-parkview"},
    { name: "Constantia Kloof", href: "/swimming-pool-demolition-constantia-kloof"}
];

export default function SwimmingPoolDemolitionJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'poolDemoHero');
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');
    const whyChooseImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition in Johannesburg – Fast, Safe & Affordable Pool Removal</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <ShieldCheck /> Your Trusted Pool Removal Contractors
            </p>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Looking for professional swimming pool demolition in Johannesburg? Apex Demolitions provides a fast, reliable, and affordable pool removal service across Sandton, Randburg, Roodepoort, and all surrounding suburbs. As experienced pool demolition contractors, we handle everything from breaking and removal to complete site cleanup, giving you back your valuable garden space.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Free Quote</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare/> WhatsApp for a Fast Quote</a>
                </Button>
            </div>
        </section>

         <section id="why-choose-us" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                   <div>
                        {whyChooseImage && <Image src={whyChooseImage.imageUrl} alt="Apex Demolitions team planning a pool demolition project" data-ai-hint="demolition team planning" width={600} height={500} className="rounded-lg shadow-lg" />}
                    </div>
                  <div>
                      <h2 className="text-3xl md:text-4xl font-bold">Why Johannesburg Trusts Apex Demolitions</h2>
                      <p className="mt-4 text-lg text-muted-foreground">
                          We are more than just contractors; we are your partners in transforming your property safely and professionally. Here’s why Johannesburg’s top builders and homeowners choose us for pool demolition.
                      </p>
                       <div className="mt-8 grid gap-6">
                           <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">Licensed & Insured</h3><p className="text-muted-foreground mt-1 text-sm">We are fully licensed and carry comprehensive public liability insurance. This protects your property and gives you total peace of mind throughout the project.</p></div></div>
                           <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">Decades of Local Experience</h3><p className="text-muted-foreground mt-1 text-sm">With over 20 years serving Johannesburg, our teams have the expertise to navigate any challenge, from tight access in Randburg to luxury estates in Sandton.</p></div></div>
                           <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">Fast, Reliable Turnaround</h3><p className="text-muted-foreground mt-1 text-sm">We know your time is valuable. We pride ourselves on providing prompt quotes and completing most residential pool removals within 2-4 days, keeping your project on schedule.</p></div></div>
                           <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">One-Stop Solution</h3><p className="text-muted-foreground mt-1 text-sm">We provide a seamless, integrated service. Our quote includes demolition, full <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link>, and final <Link href="/site-cleaning" className="text-primary hover:underline">site cleaning</Link>, saving you the hassle of managing multiple contractors.</p></div></div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

        <section id="benefits" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Why Homeowners Remove Pools in Johannesburg</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">Removing an old or unused pool is a practical decision for many Johannesburg homeowners. It provides several key benefits that can significantly improve your lifestyle and property value.</p>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Reclaim Valuable Garden Space</h4><p className="text-sm text-muted-foreground">Free up your yard for a larger lawn, a modern entertainment area, a garden cottage, or a home extension.</p></div></div>
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Reduce High Maintenance Costs</h4><p className="text-sm text-muted-foreground">Eliminate the constant expense of chemicals, electricity for the pump, and costly water top-ups, especially during water restrictions.</p></div></div>
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Improve Family Safety</h4><p className="text-sm text-muted-foreground">Remove the potential hazard an unfenced or unused pool poses to small children and pets, giving you peace of mind.</p></div></div>
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Increase Property Appeal & Value</h4><p className="text-sm text-muted-foreground">A large, functional garden is often more appealing to potential buyers than an old, high-maintenance pool.</p></div></div>
            </div>
        </section>
        
        <section id="pricing" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Pool Demolition Prices in Johannesburg</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                    We offer affordable and transparent pricing for pool demolition in Johannesburg. The cost depends on factors like size, material, and access. Here is a general guide:
                </p>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <Card><CardHeader><CardTitle>Small Pool / Jacuzzi</CardTitle><p className="text-muted-foreground">(Up to 15,000L)</p></CardHeader><CardContent><p className="text-3xl font-bold">from R15,000</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Medium Residential Pool</CardTitle><p className="text-muted-foreground">(30,000L - 50,000L)</p></CardHeader><CardContent><p className="text-3xl font-bold">from R20,000 - R30,000</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Large / Commercial Pool</CardTitle><p className="text-muted-foreground">(70,000L+)</p></CardHeader><CardContent><p className="text-3xl font-bold">from R35,000+</p></CardContent></Card>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-8">*Disclaimer: These prices are estimates. For a precise, fixed-price quote, we provide a free, no-obligation on-site assessment.</p>
            </div>
        </section>

        <section id="process" className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our 5-Step Pool Demolition Process in Johannesburg</h2>
                    <p className="text-muted-foreground mb-6">We follow a strict, professional process to ensure every Johannesburg pool demolition is safe, efficient, and leaves your property in pristine condition.</p>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Inspection & Planning:</span> We conduct a thorough inspection of your pool, property access, and surrounding structures to create a detailed project plan and provide a fixed quote.</li>
                        <li><span className="font-semibold text-foreground">Draining & Disconnection:</span> The pool is completely drained, and all electrical and plumbing lines are safely disconnected and capped by qualified personnel.</li>
                        <li><span className="font-semibold text-foreground">Controlled Demolition:</span> Using specialized equipment, our expert team carefully breaks up the pool shell and any surrounding paving, ensuring no damage to your home or garden.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal:</span> All demolition debris is loaded and transported from your property to a licensed, eco-friendly disposal facility. This is a core part of our <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal services</Link>.</li>
                        <li><span className="font-semibold text-foreground">Backfilling & Compaction:</span> We fill the pool cavity with soil or rubble and compact it in engineered layers to ensure ground stability and prevent future sinking, leaving the area perfectly prepped.</li>
                    </ol>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A clean, green lawn where a swimming pool used to be in Johannesburg" data-ai-hint="green lawn backyard" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
        </section>

         <section id="fill-in-vs-removal" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Full Removal vs. Partial Fill-In: What's Best for You?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div>
                    <h3 className="font-semibold text-xl mb-2">Full Demolition & Removal</h3>
                    <p className="text-muted-foreground">This involves breaking up and removing the entire pool shell. We then backfill the area with an engineered mix of rubble and soil, compacting it in layers. This is the **only method that makes the land safe for future construction**, like a home extension or cottage. For most properties where future development is a possibility, this is the highly recommended solution.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-2">Partial Demolition (Fill-In)</h3>
                    <p className="text-muted-foreground">This cheaper option involves punching holes in the pool floor for drainage and breaking down the top layer of the walls, then filling the shell. While faster, this method is **not suitable for building over** and may need to be declared to future buyers. It's a viable choice if you only plan to create a new lawn or garden bed.</p>
                </div>
            </div>
        </section>

        <section id="recent-projects" className="py-12 md:py-20 bg-background rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Pool Demolition Projects in Johannesburg</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader><CardTitle>Pool Removal in Sandton</CardTitle><p className="text-sm text-muted-foreground">Morningside Estate</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Removed a large, leaking marbelite pool from a luxury home. The project required careful protection of surrounding paving and a prized garden. The area was backfilled and compacted, creating a large, level lawn for the family. The project was completed in 3 days.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Fibreglass Pool Demolition</CardTitle><p className="text-sm text-muted-foreground">Randburg</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">A client in Ferndale needed to remove an old fibreglass pool to make way for a home extension. Our team carefully cut and removed the shell in sections and prepared the ground with engineered compaction, making it ready for the builders in just 2 days.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Complex Demolition</CardTitle><p className="text-sm text-muted-foreground">Midrand</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Demolished the communal pool for a townhouse complex that was upgrading its facilities. The job was completed efficiently over a weekend to minimize disruption to residents, with all rubble removed and the site left safe and clean.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        <section id="areas-we-serve" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Serving All of Johannesburg and Surrounding Suburbs</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                Our teams are strategically located to provide fast, reliable swimming pool demolition across the entire Johannesburg region. We are proud to be the trusted pool removal contractors in key areas like <Link href="/swimming-pool-demolition-sandton" className="text-primary hover:underline">Sandton</Link> and <Link href="/swimming-pool-demolition-randburg" className="text-primary hover:underline">Randburg</Link>, offering specialized services for luxury estates and dense residential suburbs. Our reach extends across the West Rand for clients in <Link href="/swimming-pool-demolition-roodepoort" className="text-primary hover:underline">Roodepoort</Link>, and into the rapidly growing northern corridor of <Link href="/swimming-pool-demolition-midrand" className="text-primary hover:underline">Midrand</Link>. No matter where you are, we have a local team ready to assist.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                {suburbs.map(suburb => (
                    <Button key={suburb.name} variant="outline" asChild>
                        <Link href={suburb.href}>
                           <MapPin className="mr-2" /> {suburb.name}
                        </Link>
                    </Button>
                ))}
            </div>
             <div className="text-center mt-12">
                 <h3 className="text-2xl font-semibold">Don't see your area? We likely cover it.</h3>
                <p className="text-muted-foreground mt-2">Contact us today for a confirmation and a free quote.</p>
                <Button size="lg" className="mt-4" asChild><a href="tel:0784292760"><Phone /> Call Us Now</a></Button>
            </div>
        </section>

        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">FAQ – Swimming Pool Demolition Johannesburg</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Pool Demolition Quote in Johannesburg</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Ready to reclaim your backyard? Contact Apex Demolitions for a professional, no-obligation quote on your pool removal project. We serve all of Johannesburg.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                  <a href="tel:0784292760"><Phone />Call for a Fast Quote</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link href="/contact"><Mail />Request a Free Quote</Link>
              </Button>
          </div>
        </section>
    </div>
    </>
  );
}
