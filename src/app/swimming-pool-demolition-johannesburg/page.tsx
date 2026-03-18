
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, MapPin, Quote, Waves, ShieldCheck, ArrowRight, Star } from "lucide-react";
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
    { question: "How much does it cost to demolish a swimming pool in Johannesburg?", answer: "The cost of swimming pool demolition in Johannesburg depends on several factors: the pool's size, the material (gunite, concrete, or fibreglass), ease of access for machinery, and whether you choose full or partial removal. We provide a free, detailed, on-site assessment to give you a transparent and accurate quote with no hidden costs." },
    { question: "Do I need municipal approval for pool demolition in Johannesburg?", answer: "In most cases, yes. The City of Johannesburg requires plans and approval for pool demolitions to ensure they are done safely and correctly, especially regarding compaction and drainage. As part of our service, we can guide you through and assist with this entire approval process to ensure your project is fully compliant." },
    { question: "How long does the pool demolition process take?", answer: "A standard residential pool demolition in Johannesburg typically takes between 2 to 4 days. This includes breaking up the structure, removing the debris, backfilling, and compacting the area. We provide a clear timeline with our quote so you know exactly what to expect." },
    { question: "Do you remove all the rubble after the demolition?", answer: "Yes, our service is a complete, all-in-one solution. We handle the demolition, load all the rubble and debris, and transport it to a licensed and environmentally responsible disposal facility. We leave your site clean, level, and ready for its next purpose." },
    { question: "Can the space be used for new construction after the pool is removed?", answer: "Absolutely. When we perform a full pool demolition and use engineered backfilling techniques with proper compaction, the land is stabilized and suitable for new construction, such as a home extension, a cottage, or a new entertainment area. We can advise on the best demolition method based on your future plans for the space." }
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
    "Sandton", "Randburg", "Roodepoort", "Midrand", "Fourways", "Soweto", 
    "Alberton", "Germiston", "Boksburg", "Benoni", "Kempton Park", 
    "Bedfordview", "Edenvale", "Bryanston", "Rosebank", "Northcliff", 
    "Melville", "Linden", "Parkhurst", "Greenside"
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
                    <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp for a Fast Quote</a>
                </Button>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Swimming Pool Demolition in Johannesburg</h2>
             <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">Our comprehensive swimming pool removal Johannesburg service is a full-service solution designed to make the process completely hassle-free for you. We handle every detail, from the initial assessment to the final cleanup, ensuring your property is treated with the utmost care.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card><CardHeader><CardTitle>Full Pool Demolition</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Complete removal of the pool shell (concrete, gunite, fibreglass) and all plumbing, ensuring the ground is ready for future construction.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Partial Demolition & Fill-In</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">A cost-effective option where the shell is broken up and used for engineered backfill, perfect for landscaping purposes.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Complete Rubble Removal</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We load and transport all demolition debris to licensed disposal facilities, leaving your site clean.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Site Preparation</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We compact and level the area, leaving it ready for new lawn, paving, or any other purpose.</p></CardContent></Card>
            </div>
             <div className="text-center mt-12">
                <Button size="lg" asChild><Link href="/contact">Get a Tailored Quote <ArrowRight className="ml-2" /></Link></Button>
            </div>
        </section>

        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our 5-Step Pool Demolition Process</h2>
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

        <section id="pool-types" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Types of Pools We Remove in Johannesburg</h2>
             <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">Our experienced team is equipped to handle the demolition of any swimming pool, regardless of its construction type or condition. We have the specialized tools and expertise for:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card><CardHeader><CardTitle>Concrete & Gunite Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">The most common type in older Johannesburg homes. We use powerful hydraulic breakers to efficiently break up the reinforced concrete shell and paving surrounds.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Fibreglass Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We carefully cut the fibreglass shell into manageable sections, lift it out, and dismantle any surrounding structures before backfilling.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Vinyl-Liner Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">The process involves removing the liner, dismantling the wall structure (steel or polymer), and clearing the sand base before filling the cavity.</p></CardContent></Card>
            </div>
        </section>
        
        <section id="why-choose-us" className="mb-16">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div>
                    {whyChooseImage && <div className="aspect-video relative"><Image src={whyChooseImage.imageUrl} alt="Apex Demolitions team planning a pool removal project in Johannesburg" data-ai-hint="demolition team planning" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold">Why Choose Apex Demolitions in Johannesburg?</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        When it comes to demolishing a pool, you need a team you can trust. We are more than just contractors; we are your partners in transforming your property safely and professionally.
                    </p>
                     <div className="mt-8 grid gap-6">
                         <div className="flex gap-4 items-start"><Star className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">Local Johannesburg Experts</h3><p className="text-muted-foreground mt-1 text-sm">With decades of experience across all suburbs, we understand the unique challenges of Johannesburg properties, from Sandton estates to Soweto homes.</p></div></div>
                        <div className="flex gap-4 items-start"><Star className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">One-Stop Solution</h3><p className="text-muted-foreground mt-1 text-sm">We handle everything. Our service includes the demolition, a full <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link>, and a final <Link href="/site-cleaning" className="text-primary hover:underline">site clean</Link>, saving you the hassle of coordinating multiple companies.</p></div></div>
                        <div className="flex gap-4 items-start"><Star className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">Fully Insured & Compliant</h3><p className="text-muted-foreground mt-1 text-sm">We are fully insured and adhere to all City of Johannesburg bylaws, giving you complete peace of mind.</p></div></div>
                    </div>
                </div>
            </div>
        </section>

        <section id="areas-we-serve" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Serving All of Johannesburg and Surrounding Suburbs</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                Our teams are strategically located to provide fast, reliable swimming pool demolition across the entire Johannesburg region. We are proud to be the trusted pool removal contractors in:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                {suburbs.map(suburb => (
                    <Button key={suburb} variant="outline" asChild>
                        <Link href={`/swimming-pool-demolition-${suburb.toLowerCase().replace(/\s+/g, '-')}`}>
                           <MapPin className="mr-2" /> {suburb}
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
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
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
                  <Link href="/contact"><Mail />Request a Free Quote Online</Link>
              </Button>
          </div>
        </section>
    </div>
    </>
  );
}
