

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
    { 
        question: "How much does demolition cost in Randburg?", 
        answer: "The cost for demolition in Randburg is highly competitive. A small structure might start from R15,000, while a full house demolition can range from R40,000 to R100,000+. Factors include the property's size, materials (e.g., reinforced concrete), site access, and the scope of site clearing. We provide a free, detailed on-site assessment to give you a transparent, fixed-price quote."
    },
    { 
        question: "Do you offer same-day service in Randburg?", 
        answer: "For urgent situations like a fire-damaged or structurally unsound building, we offer a rapid-response emergency service in Randburg. While a full demolition can't be completed in one day, we can often be on-site the same day to assess, secure the property, and begin the teardown process."
    },
     { 
        question: "How long does a typical residential demolition take in Randburg?", 
        answer: "A standard single-story house can typically be demolished and cleared in 2-5 days. We provide a precise timeline after our initial free site assessment." 
    },
    { 
        question: "Are you licensed for demolition work in Randburg?", 
        answer: "Yes, we are fully licensed by the City of Johannesburg and carry comprehensive insurance. We handle all permit applications to ensure your project is 100% compliant." 
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

export default function DemolitionRandburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Services in Randburg</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Your Local, Licensed Randburg Demolition Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            As a leading demolition contractor providing trusted, professional services throughout Randburg, Apex Demolitions is the top choice for residential and commercial projects. From the leafy suburbs of Northcliff and Linden to the bustling hubs of Ferndale, we are experts in navigating Randburg's diverse properties. We offer a seamless, compliant, and hassle-free solution for any <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition Johannesburg</Link> project. Same-day and urgent services are available across Johannesburg depending on project size and location.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="bg-card border-b border-t mb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-4">
                <div className="flex items-center justify-center gap-2 text-sm font-medium"><Check className="text-primary" /> Same-Day Service Available</div>
                <div className="flex items-center justify-center gap-2 text-sm font-medium"><Check className="text-primary" /> Experienced Operators</div>
                <div className="flex items-center justify-center gap-2 text-sm font-medium"><Check className="text-primary" /> Fast & Reliable</div>
                <div className="flex items-center justify-center gap-2 text-sm font-medium"><Check className="text-primary" /> Serving All Johannesburg</div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background text-center">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <h2 className="text-3xl font-bold">Trusted Demolition Contractors in Randburg</h2>
                 <p className="mt-4 text-lg text-muted-foreground">
                    We are one of the most trusted demolition contractors in Randburg, providing fast and professional services for residential, commercial, and construction projects across the area. Our deep understanding of Randburg's suburbs and regulations makes us the reliable choice for any project.
                 </p>
                <div className="mt-6 text-xl font-bold text-foreground flex items-center justify-center gap-2 bg-card p-4 rounded-lg shadow-sm">
                    <p><strong>✔ Trusted demolition contractors working across Randburg and surrounding areas every day</strong></p>
                </div>
            </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Specialized Demolition Services for Randburg</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">Our services are tailored to meet the specific needs of Randburg's properties, from residential renovations to commercial site preparations.</p>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="flex flex-col">
                    <CardHeader><CardTitle>Residential Demolition Randburg</CardTitle></CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">We are experts in residential house demolition in Randburg, handling projects in suburbs like Linden, Blairgowrie, and Ferndale. Many homeowners in Randburg are renovating or rebuilding, and our team provides a safe, efficient service to clear old structures, including garages, outbuildings, and walls, preparing your property for its next chapter. We work carefully to protect neighbouring properties and established gardens.</p>
                    </CardContent>
                </Card>
                 <Card className="flex flex-col">
                    <CardHeader><CardTitle>Commercial Demolition Randburg</CardTitle></CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">Our commercial demolition services cater to businesses across Randburg's commercial nodes. We manage the dismantling of old office blocks, retail spaces, and warehouses. Our focus is on minimizing disruption to nearby businesses and adhering to strict safety protocols, whether it's a small shop strip-out or a larger site clearance for redevelopment. This includes specialized work for a <Link href="/demolition-sandton" className="text-primary hover:underline">demolition Sandton</Link> project if required.</p>
                    </CardContent>
                </Card>
                 <Card className="flex flex-col">
                    <CardHeader><CardTitle>Site Clearance Randburg</CardTitle></CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">A complete site clearance is crucial for any new project. Our service is a full-circle solution that includes not just the demolition but also a comprehensive <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link> and final <Link href="/site-cleaning-johannesburg" className="text-primary hover:underline">site cleaning</Link>. We remove all rubble, concrete, and waste, leaving your Randburg property clean, level, and ready for construction to begin without delay. Our professional approach ensures the site is safe and compliant.</p>
                    </CardContent>
                </Card>
            </div>
        </section>

        <section id="recent-projects" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Demolition Projects in Randburg</h2>
                <div className="max-w-4xl mx-auto space-y-4 text-center">
                    <p className="font-semibold text-lg">✔ Randburg – House demolition completed safely</p>
                    <p className="font-semibold text-lg">✔ Northcliff – Interior strip-out for renovation</p>
                    <p className="font-semibold text-lg">✔ Linden – Site clearance for new development</p>
                </div>
            </div>
        </section>

        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Your Trusted Demolition Partner in Randburg</h2>
                <p className="text-muted-foreground mb-4">Choosing Apex Demolitions means partnering with a team that values safety, integrity, and customer satisfaction. We are committed to upholding the highest standards on every job. Our local knowledge of Randburg ensures your project runs smoothly and complies with all City of Johannesburg regulations.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Deep knowledge of City of Johannesburg requirements.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
                </ul>
            </div>
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Our team of contractors planning a demolition project in Randburg" data-ai-hint="construction planning" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Randburg Demolition FAQs</h2>
            <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
             <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground">See our Google Reviews or <a href="https://g.page/r/CZ4yPlKY6ihdEAE/review" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">leave us a review</a> to hear what our clients say about our work.</p>
            </div>
        </section>
        
        <section className="mb-16 text-center">
            <h2 className="text-2xl font-semibold">Our Service Network</h2>
             <p className="mt-2 text-muted-foreground">We also provide expert demolition services in nearby areas.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Johannesburg Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-sandton">Sandton Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-roodepoort">Roodepoort Projects</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg">Site Clearing & Rubble</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Need Demolition in Randburg Today?</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us today to discuss your project. Our Randburg team is ready to provide a fast, competitive, and no-obligation quote.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call for a Quote</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp for Fast Response</a></Button>
          </div>
        </section>
      </div>
    </>
  );
}
