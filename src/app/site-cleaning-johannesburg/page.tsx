
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, ShieldCheck, Home, Building, Factory, Trash2, ArrowRight, Quote, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Apex Demolitions",
    "image": "https://images.unsplash.com/photo-1584460715199-eebff7891315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGVtb2xpdGlvbiUyMGJ1aWxkaW5nfGVufDB8fHx8MTc3MDA2NzI2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "url": "https://apex-demolitions-website.vercel.app/site-cleaning",
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
    "serviceType": "Site Cleaning Service",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Apex Demolitions"
    },
    "areaServed": {
        "@type": "City",
        "name": "Johannesburg"
    },
    "description": "Professional post-construction, residential, and commercial site cleaning services in Johannesburg. We handle everything from rubble removal and dust management to final handover cleaning.",
    "url": "https://apex-demolitions-website.vercel.app/site-cleaning"
};

const faqs = [
    {
        question: "What is construction site cleaning?",
        answer: "Construction site cleaning, often called a 'builders clean', is a heavy-duty cleaning service for after a build, renovation, or demolition. Unlike regular cleaning, it focuses on removing construction debris like wood offcuts, plaster dust, rubble, and packaging. The goal is to transform a hazardous worksite into a safe, clean, and presentable space, ready for the next phase of work or for the final client handover. It's a job for construction site cleaning specialists, not a general cleaning service."
    },
    {
        question: "When is professional site cleaning needed?",
        answer: "Professional site cleaning is essential at several key stages of a project. It's often required during construction to maintain a safe working environment for all trades. The most common need is for a 'post-construction clean' after all building work is complete to prepare the property for its occupants. It is also a critical final step after any demolition project to ensure all hazardous materials and debris are completely removed."
    },
    {
        question: "How long does a builders clean take?",
        answer: "The time required for a builders clean in Johannesburg depends entirely on the size of the site and the level of mess. A standard post-renovation cleanup for a few rooms might take a single day. A full builders clean for a newly constructed house typically takes 1-2 days. For large commercial properties or extensive construction sites, the cleaning may be phased over several days. We provide a clear, accurate timeline after a free on-site assessment."
    },
    {
        question: "What is included in a post-construction clean?",
        answer: "Our post-construction cleaning service is a comprehensive, top-to-bottom process. It includes the removal of all building debris and rubble from the site. We then conduct a deep clean to remove fine construction dust from all surfaces, including walls, floors, windows (and window sills), cabinets, and fixtures. We ensure the property is not just visually clean but free of the dust and grime that can linger after construction, making it truly move-in ready."
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


export default function SiteCleaningJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const processImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');
    const residentialImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const commercialImage = PlaceHolderImages.find(p => p.id === 'commercialDemolition');
    const constructionImage = PlaceHolderImages.find(p => p.id === 'constructionServices');
    const rubbleImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const whyChooseImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const bobcatImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');


  return (
    <div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />

        <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white">
            {heroImage && <Image src={heroImage.imageUrl} alt="Pristine construction site after professional cleaning in Johannesburg" data-ai-hint="clean construction site" fill className="object-cover" priority />}
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <p className="text-accent font-semibold uppercase tracking-widest">FAST, RELIABLE, AND AFFORDABLE</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mt-2">Site Cleaning Johannesburg</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
                        Professional builders cleans, post-construction cleaning, and final handover preparation. We leave your site spotless, safe, and ready for action. Trusted across Johannesburg.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <a href="tel:0784292760"><Phone /> Call for a Free Quote</a>
                        </Button>
                        <Button size="lg" variant="secondary" asChild>
                            <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp for a Fast Response</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                 <h2 className="text-3xl md:text-4xl font-bold">Turn Your Messy Worksite into a Clean, Safe, and Productive Space</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    After the builders, renovators, or demolition crews have left, your site is often a chaotic mix of rubble, dust, offcuts, and packaging. This isn't just an eyesore—it's a safety hazard that halts progress. Professional site cleaning is the essential final step that transforms this mess into a pristine, hazard-free environment. As Johannesburg's leading site cleaning contractors, Apex Demolitions specializes in turning your worksite from chaos to completion, ensuring it's ready for inspection, handover, or the next phase of construction.
                </p>
            </div>
        </section>

        <section className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Specialised Site Cleaning Services</h2>
                    <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">We are not a general cleaning company. We provide heavy-duty cleaning and clearing solutions for the construction and demolition industries.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Building /> Construction Site Cleaning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Ongoing cleanup during a building project to maintain safety and productivity.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Home /> Post-Construction Cleaning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">A deep clean after building work is complete, removing all dust and debris before handover.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Factory /> Demolition Site Cleanup</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Complete clearing of all materials after a full or partial <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link>.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Sparkles /> Builders Clean</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">The final, meticulous "sparkle clean" that makes a property move-in ready.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section id="heavy-cleaning" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div>
                        {bobcatImage && <div className="aspect-video relative"><Image src={bobcatImage.imageUrl} alt="Bobcat clearing heavy debris from a construction site in Johannesburg" data-ai-hint="bobcat clearing rubble" fill className="rounded-lg object-cover shadow-lg" /></div>}
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">Heavy-Duty Site Clearance Capability</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Our site cleaning service isn't just about sweeping up dust. As a full-service demolition company, we have the heavy machinery required for complete site clearance. This includes our comprehensive <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal Johannesburg</Link> service to haul away tons of debris, and our Bobcat and TLB hire to handle bulk earth and rubble loading efficiently. This makes us your true one-stop solution for transforming a messy site into a blank canvas.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="areas-we-serve" className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Construction Site Cleaning Across Johannesburg</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                        Our teams provide fast, reliable, and professional post-build cleaning across all of Johannesburg's key hubs. We have extensive experience delivering high-quality cleanups for luxury homes in **Sandton**, managing ongoing site maintenance for new developments in **Midrand**, and performing fast post-renovation cleanups in **Randburg** and **Roodepoort**.
                    </p>
                </div>
            </div>
        </section>
        
        <section id="recent-projects" className="py-12 md:py-20 bg-background rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Site Cleaning Projects in Johannesburg</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader><CardTitle>Post-Construction Builders Clean</CardTitle><p className="text-sm text-muted-foreground">Sandton</p></CardHeader>
                        <CardContent><p className="text-sm">Performed a final, meticulous builders clean on a newly constructed luxury home in a Sandton estate before handover. The job included removing fine dust from all surfaces, polishing windows, and clearing all remaining site debris. The property was made immaculate for the new owners.</p></CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Development Site Maintenance</CardTitle><p className="text-sm text-muted-foreground">Midrand</p></CardHeader>
                        <CardContent><p className="text-sm">Provided ongoing weekly site cleaning for a large housing development in Midrand. This ensured access roads were clear, waste was managed, and the site remained safe and productive for all contractors throughout the multi-month project.</p></CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Post-Renovation Residential Cleanup</CardTitle><p className="text-sm text-muted-foreground">Randburg</p></CardHeader>
                        <CardContent><p className="text-sm">After a major home renovation in Randburg, our team performed a deep clean, removing all builders rubble, dust, and packaging. The house was left spotless and ready for the family to move back in, all completed in a single day.</p></CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section id="pricing" className="py-12 md:py-16 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Site Cleaning Prices in Johannesburg</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">We provide transparent pricing based on the scope of your project. Below are some common scenarios to give you an idea of our competitive rates.</p>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <Card><CardHeader><CardTitle>Small Site Cleanup</CardTitle><p className="text-muted-foreground text-sm">e.g., Post-DIY project or small trade job.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R1,500</p><p className="text-sm mt-2 text-muted-foreground">Includes labour for clearing and one load of rubble removal.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Full Renovation Cleanup</CardTitle><p className="text-muted-foreground text-sm">e.g., Post-renovation deep clean for a standard house.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R4,500</p><p className="text-sm mt-2 text-muted-foreground">Includes a small team, deep cleaning of surfaces, and multiple loads of rubble.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Large Construction Site</CardTitle><p className="text-muted-foreground text-sm">e.g., Ongoing or final clean for a new build.</p></CardHeader><CardContent><p className="text-3xl font-bold">By Quote</p><p className="text-sm mt-2 text-muted-foreground">Requires an on-site assessment to quote accurately based on size and scope.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Ready for a Clean, Safe, and Professional Site?</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Contact Apex Demolitions today for a free, no-obligation quote on your construction site cleaning needs in Johannesburg. <Link href="/same-day-rubble-removal-johannesburg" className="text-primary-foreground underline hover:text-secondary">Same-day rubble removal</Link> available in many areas!
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                  <a href="tel:0784292760"><Phone /> Call for a Fast Quote</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link href="/contact"><Mail /> Request a Detailed Quote</Link>
              </Button>
          </div>
        </section>
    </div>
  );
}
