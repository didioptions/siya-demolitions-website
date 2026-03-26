

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, ArrowRight, Star, Waves, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Apex Demolitions",
    "url": "https://apex-demolitions-website.vercel.app/swimming-pool-demolition-randburg",
    "telephone": "+27784292760",
    "areaServed": [
      { "@type": "Place", "name": "Randburg" },
      { "@type": "Place", "name": "Ferndale" },
      { "@type": "Place", "name": "Blairgowrie" },
      { "@type": "Place", "name": "Linden" },
      { "@type": "Place", "name": "Northcliff" },
      { "@type": "Place", "name": "Cresta" }
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
        question: "How much does it cost to demolish a pool in Randburg?", 
        answer: "The cost for pool demolition in Randburg is very competitive and depends on several factors. A smaller plunge pool might start from R15,000, while medium residential pools typically range from R20,000 to R30,000. Larger, older concrete pools on properties with difficult access in areas like Northcliff can cost more. The final price is determined by the pool's size, material (concrete is tougher than fibreglass), and the volume of rubble to be removed. We provide a free, detailed, on-site assessment to give you a transparent and accurate fixed-price quote with no surprises."
    },
    { 
        question: "How long does a pool removal take in a suburb like Ferndale or Blairgowrie?", 
        answer: "A standard residential pool demolition in a typical Randburg suburb is remarkably fast. We can usually complete the entire process in just 2 to 4 days. This comprehensive timeline includes draining the pool, breaking up the shell and paving, loading and removing all the debris, and then backfilling and compacting the site. Our efficiency minimizes disruption to your home and neighborhood, allowing you to enjoy your new garden space as quickly as possible."
    },
    { 
        question: "Is your pool demolition service insured for work in Randburg?", 
        answer: "Yes, absolutely. Apex Demolitions is a professional contractor and we are fully insured for all our operations. We carry comprehensive public liability insurance, which is crucial when working on residential properties. This protects your home, your neighbour's property, and our team against any unforeseen incidents, giving you complete peace of mind when you choose our services for your Randburg pool removal."
    },
    { 
        question: "What types of pools do you remove in the Randburg area?", 
        answer: "We are equipped to remove all types of swimming pools commonly found in Randburg homes. This includes old, robust concrete and marbelite pools, which require heavy-duty breaking equipment, as well as modern fibreglass shells and vinyl-liner pools. Our experienced team has the right tools and techniques to safely and efficiently dismantle any pool, regardless of its age, condition, or construction type."
    },
    { 
        question: "Do you remove all the rubble after the demolition?", 
        answer: "Yes, our service is a complete, all-in-one solution. We handle the demolition, load all the rubble and debris, and transport it to a licensed disposal facility as part of our professional <a href='/rubble-removal-johannesburg' class='text-primary hover:underline'>rubble removal service</a>. We also perform a final <a href='/site-cleaning' class='text-primary hover:underline'>site clean</a>. Our goal is to leave your site clean, level, and ready for its next purpose, with no hidden cleanup tasks left for you."
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
        "name": "Randburg"
    },
    "description": "Professional and insured swimming pool demolition and removal services in Randburg, Johannesburg. We handle all pool types including concrete, gunite, and fibreglass, with full rubble removal and site preparation.",
    "url": "https://apex-demolitions-website.vercel.app/swimming-pool-demolition-randburg"
};

const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, faqSchema]
};


export default function SwimmingPoolDemolitionRandburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'poolDemoHero');
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Services in Randburg</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Randburg's Trusted Local Pool Removal Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Apex Demolitions provides fast, reliable, and professional swimming pool demolition throughout Randburg. From Ferndale to Northcliff, we help homeowners reclaim their gardens and add value to their properties by safely removing old or unwanted pools. As your local experts, we understand the area and offer a seamless service, from the initial quote to the final cleanup. We are the go-to <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition contractors</Link> for residents across Randburg's diverse suburbs.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Fast Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp for an Instant Estimate</a></Button>
          </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us for Pool Demolition in Randburg?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Local Randburg Experts</h3><p className="text-sm text-muted-foreground">Our teams are local to Randburg, ensuring a fast response and familiarity with suburbs like Ferndale, Blairgowrie, and Linden.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fully Insured</h3><p className="text-sm text-muted-foreground">Our comprehensive insurance gives you complete peace of mind, protecting your property throughout the project.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">One-Stop Solution</h3><p className="text-sm text-muted-foreground">We handle the demolition, a full <Link href="/rubble-removal-randburg" className="text-primary hover:underline">rubble removal</Link>, and a final <Link href="/site-cleaning-randburg" className="text-primary hover:underline">site clean</Link>.</p></div></div>
                 <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fast & Reliable</h3><p className="text-sm text-muted-foreground">We are known for our reliability and fast turnaround times, typically completing a full pool removal in just 2-4 days.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Affordable Pricing</h3><p className="text-sm text-muted-foreground">We provide competitive, transparent quotes with no hidden costs, making professional service accessible.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Safety First</h3><p className="text-sm text-muted-foreground">Our experienced teams use proven methods to protect your family, home, and property throughout the entire process.</p></div></div>
            </div>
        </section>

        <section id="demolition-cost-randburg" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Pool Demolition Prices in Randburg</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                    We offer affordable and transparent pricing for pool demolition in Randburg. The cost depends on factors like size, material, and site access. Here is a general guide:
                </p>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <Card><CardHeader><CardTitle>Small Pool / Jacuzzi</CardTitle><p className="text-muted-foreground">(Up to 15,000L)</p></CardHeader><CardContent><p className="text-3xl font-bold">from R15,000</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Medium Residential Pool</CardTitle><p className="text-muted-foreground">(30,000L - 50,000L)</p></CardHeader><CardContent><p className="text-3xl font-bold">R20,000 - R30,000</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Large / Old Concrete Pool</CardTitle><p className="text-muted-foreground">(70,000L+)</p></CardHeader><CardContent><p className="text-3xl font-bold">from R30,000+</p></CardContent></Card>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-8">*Disclaimer: Prices are estimates. Final cost depends on pool type, demolition method, and rubble volume. Contact us for a precise, free, no-obligation quote.</p>
            </div>
        </section>

        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our 5-Step Pool Demolition Process in Randburg</h2>
                    <p className="text-muted-foreground mb-6">We follow a proven step-by-step process to ensure safe and efficient results:</p>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Inspection & Quote:</span> A detailed, fixed-price quote after a free on-site assessment.</li>
                        <li><span className="font-semibold text-foreground">Planning & Preparation:</span> We secure the site and choose the safest demolition method.</li>
                        <li><span className="font-semibold text-foreground">Controlled Demolition:</span> Our expert team breaks and removes the pool structure.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal:</span> We clear all debris from your property quickly, as part of our complete <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link> service.</li>
                        <li><span className="font-semibold text-foreground">Site Cleanup & Leveling:</span> We leave your property clean, level, and ready for its next use with a final <Link href="/site-cleaning" className="text-primary hover:underline">site clean</Link>.</li>
                    </ol>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A clean, green lawn where a swimming pool used to be in Randburg" data-ai-hint="green lawn backyard" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
        </section>

        <section id="fill-in-vs-removal" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Pool Removal vs. Pool Fill-In: Which is Better in Randburg?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div>
                    <h3 className="font-semibold text-xl mb-2">Full Demolition & Removal</h3>
                    <p className="text-muted-foreground">This involves breaking up and removing the entire pool shell. We then backfill the area with an engineered mix and compact it in layers. This is the **only method that makes the land safe for future construction**, like a home extension or cottage. For most Randburg properties where future development is a possibility, this is the highly recommended solution.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-2">Partial Demolition (Fill-In)</h3>
                    <p className="text-muted-foreground">This cheaper option involves punching holes in the pool floor for drainage and breaking down the top layer of the walls, then filling the shell. While faster, this method is **not suitable for building over** and may need to be declared to future buyers. It's a viable choice if you only plan to create a new lawn or garden bed.</p>
                </div>
            </div>
        </section>

        <section id="recent-work" className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Recent Pool Demolition Work in Randburg</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader><CardTitle>Fibreglass Pool Removal</CardTitle><p className="text-sm text-muted-foreground">Ferndale, Randburg</p></CardHeader>
                        <CardContent>
                            <p className="text-sm">A client in Ferndale needed an old fibreglass pool removed to create more garden space for their children. Our team carefully cut the shell, removed all debris, and leveled the site in just two days, leaving a clean, safe area for the new lawn.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Concrete Pool Demolition</CardTitle><p className="text-sm text-muted-foreground">Blairgowrie, Randburg</p></CardHeader>
                        <CardContent>
                            <p className="text-sm">We were tasked with demolishing an old, leaking marbelite pool in Blairgowrie. The project involved breaking the thick concrete and removing a large volume of rubble. The ground was then compacted, preparing it for a new entertainment patio.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Hillside Pool Removal</CardTitle><p className="text-sm text-muted-foreground">Northcliff</p></CardHeader>
                        <CardContent>
                            <p className="text-sm">On a sloped property in Northcliff, we carefully demolished a pool situated close to the house. Our team used specialized techniques to ensure the stability of the surrounding ground and retaining walls, completing a complex job safely and efficiently.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Serving Randburg & Surrounding Northern Suburbs</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">As the premier pool demolition contractors in Randburg, our services have full coverage across all its diverse suburbs. We provide fast, reliable, and professional service in areas like Ferndale, Blairgowrie, and Linden, known for their family homes and renovation potential. We are also the trusted experts for complex removals on the sloped properties of Northcliff. Our reach extends throughout the greater Randburg area, including Cresta, Darrenwood, and Fairland, making us the top choice for any local homeowner looking to reclaim their garden space.
            </p>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Pool Demolition Randburg</h2>
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
          <h2 className="text-3xl font-bold">Get a Free Pool Demolition Quote in Randburg</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Ready to reclaim your backyard? Contact Apex Demolitions for a professional, no-obligation quote on your pool removal project in Randburg. As the go-to contractors for pool demolition in <Link href="/swimming-pool-demolition-sandton" className="text-primary-foreground underline">Sandton</Link> and greater <Link href="/swimming-pool-demolition-johannesburg" className="text-primary-foreground underline">Johannesburg</Link>, we are ready to assist.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now for a Fast Quote</a></Button>
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

    
