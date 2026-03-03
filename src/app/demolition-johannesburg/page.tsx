import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Building, Trash2, Sparkles, Wrench, MapPin, ShieldCheck, FileText, Construction } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const suburbs = [
    "sandton", "randburg", "roodepoort", "midrand", "fourways", "soweto", "alberton", "bedfordview", 
    "edenvale", "kempton-park", "boksburg", "germiston", "bryanston", "centurion", "rosebank"
];

const faqs = [
    {
        question: "Are you a licensed demolition contractor in Johannesburg?",
        answer: "Yes, SIMA Demolitions Projects is a fully licensed and insured demolition contractor. We adhere to all municipal and national safety regulations required by the City of Johannesburg."
    },
    {
        question: "Do I need council approval for demolition in Johannesburg?",
        answer: "In almost all cases, yes. Any structural demolition requires a permit from the City of Johannesburg. Our service includes managing the entire application process on your behalf to ensure full compliance."
    },
    {
        question: "What is the typical process for a house demolition?",
        answer: "Our process starts with a site assessment and quote. Once approved, we handle permit applications, site preparation, utility disconnections, and a systematic demolition. The process concludes with rubble removal and site cleaning, leaving your property ready for the next step."
    },
    {
        question: "How do you ensure safety on site?",
        answer: "Safety is our top priority. We implement strict safety protocols, including site hoarding, dust control measures, and having trained safety officers on-site. All work is done in accordance with the Occupational Health and Safety Act."
    },
    {
        question: "How long does a demolition project take?",
        answer: "A standard residential house demolition typically takes 2-5 days, including rubble removal. Larger commercial or industrial projects can take longer and are estimated on a case-by-case basis."
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

export default function DemolitionJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'homeHero');
    const processImage = PlaceHolderImages.find(p => p.id === 'constructionServices');

  return (
    <>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Licensed Demolition Contractors in Johannesburg</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
              <ShieldCheck /> Your Trusted Partner for Safe & Compliant Demolition
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions Projects is Johannesburg's leading team of licensed demolition contractors. We specialize in providing safe, compliant, and efficient demolition solutions for residential, commercial, and industrial properties. From navigating council approvals to executing complex demolitions and clearing the site, we manage every step of the process with professionalism and unmatched expertise.
          </p>
          <Button size="lg" className="mt-6" asChild>
            <a href="tel:0784292760">
              <Phone className="mr-2 h-5 w-5" /> Get Your Free Quote Now
            </a>
          </Button>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose SIMA for Your Johannesburg Project?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-3"><ShieldCheck className="text-accent" />Licensed & Insured</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">We are fully licensed contractors, providing peace of mind and ensuring your project meets all City of Johannesburg regulations.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-3"><FileText className="text-accent" />Council Approval Experts</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">We manage the entire permit application process, saving you time and preventing costly delays.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-3"><Construction className="text-accent" />Decades of Experience</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">With over 20 years of combined experience, we have the knowledge to handle any demolition challenge safely and efficiently.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-3"><Sparkles className="text-accent" />Complete Site Clearing</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Our service includes full rubble removal and site cleaning, leaving your property build-ready.</p></CardContent>
                </Card>
            </div>
        </section>

        {/* Demolition Process Section */}
        <section className="mb-16 bg-card p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Demolition Process: Safety and Compliance First</h2>
                    <p className="text-muted-foreground mb-4">We follow a systematic, authority-driven process to ensure every project is a success:</p>
                    <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Initial Consultation & Quote:</span> We assess your needs and provide a detailed, transparent quote.</li>
                        <li><span className="font-semibold text-foreground">Permit Application:</span> We prepare and submit all necessary documentation to the City of Johannesburg.</li>
                        <li><span className="font-semibold text-foreground">Site Preparation:</span> We secure the site, disconnect services, and implement safety measures.</li>
                        <li><span className="font-semibold text-foreground">Structural Demolition:</span> Our licensed team performs the demolition using controlled, safe techniques.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal & Recycling:</span> We clear all debris and transport it to licensed disposal and recycling facilities.</li>
                        <li><span className="font-semibold text-foreground">Final Site Cleanup:</span> The site is left clean, level, and ready for your next project.</li>
                    </ol>
                </div>
                 <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="Construction work" data-ai-hint="construction work" fill className="rounded-lg object-cover" /></div>}
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Comprehensive Demolition Services in Johannesburg</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="flex flex-col"><CardHeader><CardTitle className="flex items-center gap-3"><Building className="text-accent" />Home Demolition</CardTitle></CardHeader><CardContent className="flex-grow"><p className="text-muted-foreground">Complete or partial house demolition for renovations, rebuilds, or land clearing. We handle everything from single-story homes to multi-level structures.</p></CardContent></Card>
                <Card className="flex flex-col"><CardHeader><CardTitle className="flex items-center gap-3"><Wrench className="text-accent" />Commercial Demolition</CardTitle></CardHeader><CardContent className="flex-grow"><p className="text-muted-foreground">Specialized demolition for offices, warehouses, and retail spaces, including interior strip-outs and structural dismantling.</p></CardContent></Card>
                <Card className="flex flex-col"><CardHeader><CardTitle className="flex items-center gap-3"><Trash2 className="text-accent" />Swimming Pool Removal</CardTitle></CardHeader><CardContent className="flex-grow"><p className="text-muted-foreground">Safe removal of concrete, fibreglass, and gunite pools, including rubble disposal and backfilling to reclaim your yard space.</p></CardContent></Card>
            </div>
        </section>

        {/* Suburbs Section */}
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Demolition Services in Your Johannesburg Suburb</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                We provide localized, expert demolition services across all of Johannesburg. Find your area below to learn more about our work in your community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                {suburbs.map(suburb => (
                    <Button key={suburb} variant="outline" asChild>
                        <Link href={`/demolition-${suburb}`}>
                           <MapPin className="mr-2" /> {suburb.charAt(0).toUpperCase() + suburb.slice(1).replace('-', ' ')}
                        </Link>
                    </Button>
                ))}
            </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Final CTA Section */}
        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Quote From a Licensed Johannesburg Demolition Contractor</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Ready to start your project? Contact SIMA Demolitions for a professional, no-obligation quote. We respond quickly, work safely, and leave your site spotless.
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
