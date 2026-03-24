
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, MapPin, Quote, ShieldCheck, Star, Trash2, Leaf, BrickWall, Home, Building, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from "react";

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Apex Demolitions",
    "image": "https://apex-demolitions-website.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fsiya-demolitions-projects.firebasestorage.app%2Fo%2FSIMA%2520Demolitions%2520%252Crubbe%2520removals%2520johannesburg%2520.jpg%3Falt%3Dmedia%26token%3D2b8c060f-72ae-46a2-b328-ef2b301a0dbd&w=1920&q=75",
    "url": "https://apex-demolitions-website.vercel.app/rubble-removal-johannesburg",
    "telephone": "078 429 2760",
    "priceRange": "R500 - R5000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Johannesburg",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Johannesburg"
    }
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Rubble Removal Service",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Apex Demolitions"
    },
    "areaServed": {
        "@type": "City",
        "name": "Johannesburg"
    },
    "description": "Fast, affordable, and licensed rubble removal services in Johannesburg for builders waste, construction debris, garden refuse, and general junk. Same-day service available.",
    "url": "https://apex-demolitions-website.vercel.app/rubble-removal-johannesburg"
};

const faqs = [
    {
        question: "How much does rubble removal cost in Johannesburg?",
        answer: "The cost for rubble removal in Johannesburg is very competitive and depends on a few factors. The price is primarily based on the volume of waste (per truckload), the type of material (e.g., light garden refuse vs. heavy concrete), and the ease of access for loading. To give you a clear and transparent price, we offer a free, no-obligation quote where we assess these factors. This ensures you get an affordable price with no hidden surprises."
    },
    {
        question: "Do you offer same-day rubble removal?",
        answer: "Yes, we proudly offer same-day rubble removal in Johannesburg, subject to our schedule and truck availability. We understand that debris can halt a project, so we prioritize urgent requests. For the fastest service, it's best to call us directly as early in the day as possible. Our local teams across the city enable us to provide a rapid response for most urgent cleanup needs."
    },
    {
        question: "What kind of rubble do you remove?",
        answer: "We remove a wide variety of non-hazardous waste. This includes builders rubble like bricks, concrete, and sand; renovation waste such as tiles and drywall; garden refuse like soil, branches, and leaves; and general household or garage junk. We are equipped to handle debris from construction sites, residential homes, and commercial properties, providing a complete junk removal solution."
    },
    {
        question: "Do you remove builders rubble and garden refuse?",
        answer: "Yes, we handle both. Our construction rubble removal service is perfect for builders who need to keep their sites clean and safe. Our garden refuse removal service is ideal for homeowners after a big garden cleanup or landscaping project. We have the right equipment and vehicles to handle both heavy builders rubble and bulky garden waste efficiently and responsibly."
    },
    {
        question: "Which Johannesburg areas do you cover?",
        answer: "We cover the entire greater Johannesburg area. Our rubble removal services are available in all major suburbs, including Sandton, Randburg, Roodepoort, Midrand, Fourways, Soweto, Johannesburg South, and the full East Rand (Alberton, Germiston, Boksburg, etc.). Our widespread teams ensure that no matter where you are, you can find 'rubble removal near me' with us."
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

const areas = [
    { name: "Sandton", href: "/rubble-removal-sandton" },
    { name: "Randburg", href: "/rubble-removal-randburg" },
    { name: "Roodepoort", href: "/rubble-removal-roodepoort" },
    { name: "Midrand", href: "/rubble-removal-midrand" },
    { name: "Fourways", href: "/rubble-removal-fourways" },
    { name: "Soweto", href: "/rubble-removal-soweto" },
    { name: "Alberton", href: "/rubble-removal-alberton" },
    { name: "Germiston", href: "/rubble-removal-germiston" },
    { name: "Boksburg", href: "/rubble-removal-boksburg" },
    { name: "Benoni", href: "/rubble-removal-benoni" },
    { name: "Kempton Park", href: "/rubble-removal-kempton-park" },
    { name: "Bedfordview", href: "/rubble-removal-bedfordview" },
    { name: "Edenvale", href: "/rubble-removal-edenvale" },
    { name: "Bryanston", href: "/rubble-removal-bryanston" },
    { name: "Rosebank", href: "/rubble-removal-rosebank" }
];

export default function RubbleRemovalJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const whyChooseImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center text-center text-white">
          {heroImage && <Image src={heroImage.imageUrl} alt="A large pile of rubble ready for removal in Johannesburg" data-ai-hint="rubble removal Johannesburg" fill className="object-cover" priority />}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Rubble Removal Johannesburg</h1>
                  <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
                      Fast, affordable, and licensed removal of builders rubble, garden refuse, and construction waste. Same-day service available across Johannesburg.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" asChild>
                          <a href="tel:0784292760"><Phone /> Call for a Fast Quote</a>
                      </Button>
                      <Button size="lg" variant="secondary" asChild>
                          <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp for an Instant Estimate</a>
                      </Button>
                  </div>
              </div>
          </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
               <h2 className="text-3xl md:text-4xl font-bold">Your Trusted Rubble Removal Partner in Johannesburg</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                  A clean worksite is a safe and productive worksite. At Apex Demolitions, our **rubble removal Johannesburg** service is designed to be fast, efficient, and thoroughly reliable. We understand that leftover construction debris, garden refuse, or demolition waste can halt a project and create significant safety hazards. That's why we offer a comprehensive **construction waste removal** solution for contractors, developers, and homeowners across all Johannesburg suburbs. Whether you need an urgent cleanup after a renovation in Sandton, scheduled debris removal for a large construction project in Roodepoort, or are searching for "rubble removal near me," our service is tailored to meet your needs precisely. We ensure that your site remains operational and free from the clutter that can impede progress.
              </p>
          </div>
      </section>

      {/* What We Remove Section */}
      <section id="what-we-remove" className="py-12 md:py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6">
               <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold">What We Remove: A Complete Junk Removal Service</h2>
                  <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">Our teams are equipped to handle a wide variety of waste materials from any site.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card><CardHeader><CardTitle className="flex items-center gap-3"><BrickWall /> Builders Rubble</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Complete removal of bricks, concrete, sand, soil, and other heavy materials from building sites.</p></CardContent></Card>
                  <Card><CardHeader><CardTitle className="flex items-center gap-3"><Home /> Renovation Waste</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We clear all debris from home renovations, including tiles, drywall, wood, and old fittings.</p></CardContent></Card>
                  <Card><CardHeader><CardTitle className="flex items-center gap-3"><Leaf /> Garden Refuse</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Our **garden refuse removal Johannesburg** service handles branches, leaves, soil, and grass cuttings.</p></CardContent></Card>
                  <Card><CardHeader><CardTitle className="flex items-center gap-3"><Trash2 /> Household Junk</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We offer a full **junk removal Johannesburg** service for clearing old furniture, appliances, and general clutter.</p></CardContent></Card>
                  <Card><CardHeader><CardTitle className="flex items-center gap-3"><Home /> Garage & Yard Waste</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Reclaim your space with our fast garage and yard clean-up services.</p></CardContent></Card>
                  <Card><CardHeader><CardTitle className="flex items-center gap-3"><Building /> Commercial Waste</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Reliable waste management for offices, retail stores, and commercial properties.</p></CardContent></Card>
              </div>
          </div>
      </section>

      {/* Same-Day Rubble Removal Section */}
      <section id="same-day-rubble-removal" className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
              <p className="text-accent font-semibold uppercase tracking-widest">Urgent Cleanup?</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Same-Day Rubble Removal in Johannesburg</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                  Don't let rubble and waste halt your project. We offer a rapid-response, **same-day rubble removal Johannesburg** service designed to clear your site quickly and affordably. For urgent situations or unexpected debris, our teams are on standby across the city.
              </p>
              <div className="mt-12">
                   <Button size="lg" variant="destructive" asChild>
                      <a href="tel:0784292760"><Phone className="mr-2"/> Call Now for Immediate Rubble Removal</a>
                  </Button>
                  <p className="mt-2 text-sm text-muted-foreground">We prioritize urgent requests to keep your site safe and productive.</p>
              </div>
          </div>
      </section>
      
      {/* Areas We Cover Section */}
      <section id="areas-we-serve" className="py-12 md:py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-8">Rubble Removal Across All Johannesburg Suburbs</h2>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                  We provide localized rubble removal services across all of Johannesburg. Find your area below or visit our <Link href="/rubble-removal-services-johannesburg" className="text-primary hover:underline">main services hub</Link> for more information.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                  {areas.map(area => (
                      <Button key={area.name} variant="outline" asChild>
                          <Link href={area.href}><MapPin className="mr-2" /> {area.name}</Link>
                      </Button>
                  ))}
              </div>
          </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Affordable Rubble Removal Prices in Johannesburg</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">We believe in transparent and **affordable rubble removal in Johannesburg**. Our pricing is straightforward, with no hidden costs. While a final quote requires an assessment, this guide gives you an idea of our competitive rates.</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card><CardHeader><CardTitle>Small Loads (1-2 Tonnes)</CardTitle><p className="text-muted-foreground">e.g., Garage cleanup, small garden refuse</p></CardHeader><CardContent><p className="text-3xl font-bold">from R500 - R800</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Medium Loads (3-5 Tonnes)</CardTitle><p className="text-muted-foreground">e.g., Renovation debris, builders rubble</p></CardHeader><CardContent><p className="text-3xl font-bold">from R800 - R1500</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Large Loads (6+ Tonnes)</CardTitle><p className="text-muted-foreground">e.g., Full site clearing, construction waste</p></CardHeader><CardContent><p className="text-3xl font-bold">from R1500+</p></CardContent></Card>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8">*Please note: Prices are a guideline and depend on the exact volume, type of material, site access, and your location in Johannesburg. Contact us for a precise, free quote.</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                   <div>
                        {whyChooseImage && <Image src={whyChooseImage.imageUrl} alt="Apex Demolitions team planning a rubble removal project" data-ai-hint="rubble removal team" width={600} height={500} className="rounded-lg shadow-lg" />}
                    </div>
                  <div>
                      <h2 className="text-3xl md:text-4xl font-bold">Why Choose Apex Demolitions?</h2>
                      <p className="mt-4 text-lg text-muted-foreground">
                          We are built on a foundation of trust, reliability, and professionalism. Our goal is to provide a seamless service that gives you complete peace of mind.
                      </p>
                       <div className="mt-8 grid gap-6">
                           <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">Licensed & Insured</h3><p className="text-muted-foreground mt-1 text-sm">We are fully licensed waste carriers and carry comprehensive public liability insurance for your protection.</p></div></div>
                           <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">Fast, Reliable Service</h3><p className="text-muted-foreground mt-1 text-sm">With teams across Johannesburg, we offer same-day or next-day service to keep your project on schedule.</p></div></div>
                          <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">Eco-Friendly Disposal</h3><p className="text-muted-foreground mt-1 text-sm">We prioritize recycling and guarantee all waste is disposed of legally at registered facilities.</p></div></div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Google Review CTA */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-card p-8 rounded-lg text-center max-w-3xl mx-auto shadow-lg">
            <h2 className="text-3xl font-bold">Trusted by Clients Across Johannesburg</h2>
            <div className="flex justify-center my-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />)}
            </div>
            <p className="text-muted-foreground mb-6">Our commitment to professional service has earned us the trust of homeowners and contractors alike. See what our clients are saying or leave your own feedback.</p>
            <Button size="lg" asChild>
              <a href="https://g.page/r/CZ4yPlKY6ihdEAE/review" target="_blank" rel="noopener noreferrer">
                Leave a Google Review <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
               <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                      <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
          </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
           <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Clear Your Site?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">
                  Contact Apex Demolitions for a fast, free, and no-obligation quote on professional rubble removal anywhere in Johannesburg. Our team is ready to help.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                      <a href="tel:0784292760"><Phone /> Call for a Fast Quote</a>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                       <Link href="/contact"><Mail /> Request Quote Online</Link>
                  </Button>
              </div>
           </div>
      </section>
    </>
  );
}
