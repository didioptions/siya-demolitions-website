import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, ShieldCheck, Home, Building, Factory, DollarSign, MapPin, Quote, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from "react";

const suburbs = [
    { name: "Sandton", href: "/site-cleaning-sandton" },
    { name: "Randburg", href: "/site-cleaning-randburg" },
    { name: "Roodepoort", href: "/site-cleaning-roodepoort" },
    { name: "Midrand", href: "/site-cleaning-midrand" },
    { name: "Fourways", href: "/site-cleaning-fourways" },
    { name: "Soweto", href: "/site-cleaning-soweto" },
    { name: "Alberton", href: "/site-cleaning-alberton" },
    { name: "Germiston", href: "/site-cleaning-germiston" },
    { name: "Boksburg", href: "/site-cleaning-boksburg" },
    { name: "Benoni", href: "/site-cleaning-benoni" },
    { name: "Kempton Park", href: "/site-cleaning-kempton-park" },
    { name: "Bedfordview", href: "/site-cleaning-bedfordview" },
    { name: "Edenvale", href: "/site-cleaning-edenvale" },
    { name: "Bryanston", href: "/site-cleaning-bryanston" },
    { name: "Rosebank", href: "/site-cleaning-rosebank" },
    { name: "Northcliff", href: "/site-cleaning-northcliff" },
    { name: "Melville", href: "/site-cleaning-melville" },
    { name: "Linden", href: "/site-cleaning-linden" },
    { name: "Parkhurst", href: "/site-cleaning-parkhurst" },
    { name: "Greenside", href: "/site-cleaning-greenside" },
];

const faqs = [
    {
        question: "How much does site cleaning cost in Johannesburg?",
        answer: "Site cleaning costs in Johannesburg depend on the size of the site, the volume and type of debris, site accessibility, and the frequency of cleaning required. We provide free, transparent quotes with no hidden fees, ensuring you get a fair price for a professional service."
    },
    {
        question: "Do you clean construction debris?",
        answer: "Yes, cleaning construction debris is a core part of our service. We remove wood offcuts, packaging, concrete, drywall, and other materials to keep your site safe and productive. We offer both one-off cleanups and ongoing site maintenance."
    },
    {
        question: "Can you clean both residential and commercial sites?",
        answer: "Absolutely. We are equipped to handle site cleaning for all types of properties, from residential homes undergoing renovation in Randburg to large-scale commercial construction sites in Sandton and industrial properties in Germiston."
    },
    {
        question: "How quickly can you complete a site cleaning?",
        answer: "For most one-off residential or small commercial cleanups, we can often schedule service for the same or next day. The duration depends on the site's condition and size, but our teams work efficiently to get the job done with minimal disruption. For large ongoing projects, we create a schedule that works for you."
    },
    {
        question: "Are you licensed and insured for site cleaning?",
        answer: "Yes, SIMA Demolitions Projects is a fully licensed and insured company. We carry comprehensive public liability insurance, and our crews are trained in health and safety compliance. This protects your property and gives you complete peace of mind."
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


export default function SiteCleaningPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');

  return (
    <>
     <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Professional Site Cleaning Services in Johannesburg</h1>
        <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <Sparkles /> Construction, Commercial & Residential Cleanup
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
         As leading site cleaning contractors in Johannesburg, SIMA Demolitions Projects ensures your construction, demolition, or renovation site is impeccably clean, safe, and compliant. Our professional site cleaning services in Johannesburg cater to residential, commercial, and industrial projects across all suburbs, from Sandton and Randburg to Soweto and Roodepoort. A clean site is a productive site—let our site cleaners in Johannesburg handle the debris so you can focus on the work.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
                <Link href="/contact"><Mail className="mr-2"/>Request a Free Cleaning Quote</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
                <a href="tel:0784292760">
                    <Phone className="mr-2 h-5 w-5" /> Call for an Urgent Cleanup
                </a>
            </Button>
        </div>
      </section>

      <section id="services" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Site Cleaning Services in Johannesburg</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card><CardHeader><CardTitle className="flex items-center gap-2"><Building /> Construction Site Cleaning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Ongoing debris management for active building sites to maintain safety and productivity.</p></CardContent></Card>
            <Card><CardHeader><CardTitle className="flex items-center gap-2"><Trash2 /> Post-Demolition Cleanup</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Complete clearing of all waste and rubble after demolition, leaving the site build-ready.</p></CardContent></Card>
            <Card><CardHeader><CardTitle className="flex items-center gap-2"><Home /> Residential Renovation Cleanup</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Removing debris from home renovations, garden projects, and yard clearing.</p></CardContent></Card>
            <Card><CardHeader><CardTitle className="flex items-center gap-2"><Factory /> Industrial & Warehouse Cleaning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Large-scale clearing for factories and commercial properties.</p></CardContent></Card>
            <Card><CardHeader><CardTitle className="flex items-center gap-2"><Sparkles /> Final & Pre-Handover Cleaning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Detailed cleaning to ensure a project is spotless before client handover or inspection.</p></CardContent></Card>
            <Card><CardHeader><CardTitle className="flex items-center gap-2"><ShieldCheck /> Hazard & Debris Removal</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Safe removal of all construction waste, including sharp objects and other hazards.</p></CardContent></Card>
        </div>
      </section>

      <section className="mb-16 bg-card p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Johannesburg Site Cleaning Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Licensed & Insured</h3><p className="text-sm text-muted-foreground">Full compliance and insurance for your complete peace of mind.</p></div></div>
              <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Experienced Crew</h3><p className="text-sm text-muted-foreground">Our professional teams are trained for safety and efficiency on any site.</p></div></div>
              <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Eco-Friendly Waste Disposal</h3><p className="text-sm text-muted-foreground">We prioritize recycling and responsible disposal at registered facilities.</p></div></div>
              <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Affordable Pricing</h3><p className="text-sm text-muted-foreground">Get a fair, transparent quote with no hidden costs.</p></div></div>
              <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Fast & Thorough Cleaning</h3><p className="text-sm text-muted-foreground">We work efficiently to ensure your site is spotless, safe, and ready for work.</p></div></div>
              <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Integrated Service</h3><p className="text-sm text-muted-foreground">Combine with our demolition and rubble removal for a seamless solution.</p></div></div>
          </div>
      </section>

       <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Johannesburg Site Cleaning Process</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-4 text-center">
                <div className="flex flex-col items-center"><div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">1</div><p className="mt-2 text-sm font-semibold">Site Assessment & Free Quote</p></div>
                <div className="flex flex-col items-center"><div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">2</div><p className="mt-2 text-sm font-semibold">Debris Sorting</p></div>
                <div className="flex flex-col items-center"><div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">3</div><p className="mt-2 text-sm font-semibold">Cleaning & Sweeping</p></div>
                <div className="flex flex-col items-center"><div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">4</div><p className="mt-2 text-sm font-semibold">Waste Disposal</p></div>
                <div className="flex flex-col items-center"><div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">5</div><p className="mt-2 text-sm font-semibold">Final Inspection</p></div>
            </div>
      </section>

      <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Site Cleaning Services Across Johannesburg Suburbs</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                We provide localized, expert site cleaning services across all of Johannesburg. We have dedicated pages for many suburbs, including our <Link href="/site-cleaning-services-johannesburg" className="text-primary hover:underline">main Johannesburg services hub</Link>. Find your area below.
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
      </section>

      <section id="faq" className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">FAQ – Site Cleaning Johannesburg</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
        <h2 className="text-3xl font-bold">Keep Your Site Clean – Get a Free Quote Today</h2>
        <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
         Looking for reliable site cleaning in Johannesburg? Let SIMA Demolitions handle the debris so you can focus on building, renovating, and delivering projects on time.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
                <a href="tel:0784292760"><Phone /> Call us today</a>
            </Button>
             <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact"><Mail /> Request a Quote</Link>
            </Button>
        </div>
      </section>
    </div>
    </>
  );
}
