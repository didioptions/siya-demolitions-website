import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, MessageSquare, Mail, MapPin, Trash2, Home, Building } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const whatWeRemove = [
    "Concrete and bricks",
    "Mixed construction waste",
    "Soil, sand, and stones",
    "Garden and land-clearing waste",
    "Old paving, garage rubble, and yard materials"
];

const fastReliablePoints = [
    "Quick response times",
    "Same-day or scheduled collections",
    "Efficient, safe loading & transportation",
    "Clean, ready-to-use sites afterward"
];

const whyChooseUs = [
    "Fast turnarounds — same or next day",
    "Affordable pricing with no hidden costs",
    "Fully insured and professional crew",
    "20+ years combined experience",
    "Johannesburg-based + know local standards"
];

const joburgAreas = [
    "Sandton", "Soweto", "Midrand", "Randburg", "Roodepoort", "Germiston", "Alberton", "Johannesburg CBD"
];

const faqs = [
    {
        question: "How quickly can rubble be removed?",
        answer: "Most jobs can be done same-day or next-day, based on location and size."
    },
    {
        question: "What happens to the rubble after pickup?",
        answer: "All rubble is handled via approved dumping and recycling sites in Johannesburg, with full legal compliance."
    },
    {
        question: "Do you clean up after loading?",
        answer: "Yes — your site will be left clean, tidy, and ready for the next phase."
    },
    {
        question: "Do you accept small jobs?",
        answer: "Absolutely. Whether it's one load or ongoing needs, we’ve got you covered."
    }
];

export default function RubbleRemovalPage() {
    const rubbleImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const cleanSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const workerImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal Services in Johannesburg</h1>
        <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            🧹 Clear Construction Sites Quickly, Safely & Affordably
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
          Need fast and reliable rubble removal in Johannesburg? We provide licensed and insured rubble clearance for residential, commercial, and construction projects. Whether after demolition, renovation, or new builds, our team ensures your site is cleared efficiently, legally, and ready for the next phase.
        </p>
        <Button size="lg" className="mt-6" asChild>
          <a href="tel:0784292760">
            <Phone className="mr-2 h-5 w-5" /> Call now for a free rubble removal quote
          </a>
        </Button>
      </section>

      {/* What We Remove Section */}
      <section id="what-we-remove" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">What We Remove</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {rubbleImage && <div className="aspect-video relative"><Image src={rubbleImage.imageUrl} alt="Rubble piled near construction" data-ai-hint="rubble construction" fill className="rounded-lg object-cover" /></div>}
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Trash2 className="h-6 w-6 text-accent" /> All Debris Types</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 text-muted-foreground">We handle removal of all types of construction and demolition debris, including:</p>
                    <ul className="space-y-2">
                        {whatWeRemove.map(item => (
                            <li key={item} className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground italic">No load is too small or too large — from small homes to large developments.</p>
                </CardContent>
            </Card>
        </div>
      </section>
      
      {/* Fast & Reliable Section */}
      <section className="mb-16 bg-card p-8 rounded-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">⚡ Fast & Reliable Site Clearance</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 text-muted-foreground">Our rubble removal Johannesburg team is built for speed and reliability:</p>
                    <ul className="space-y-2">
                        {fastReliablePoints.map(point => (
                            <li key={point} className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                                <span className="text-muted-foreground">{point}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </div>
             {cleanSiteImage && <div className="aspect-video relative"><Image src={cleanSiteImage.imageUrl} alt="Clean site after clearance" data-ai-hint="clean site" fill className="rounded-lg object-cover" /></div>}
        </div>
      </section>

      {/* Residential & Commercial Section */}
       <section id="project-types" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Residential & Commercial Services</h2>
         <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Home className="h-6 w-6 text-accent" /> Residential Rubble Removal</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Perfect for:</p>
                    <ul className="mt-2 space-y-2">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Home renovations</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Small demolitions</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">DIY construction cleanups</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Garden and yard removals</span></li>
                    </ul>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Building className="h-6 w-6 text-accent" /> Construction & Developer Support</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Ideal for:</p>
                     <ul className="mt-2 space-y-2">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Large-scale projects</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Ongoing contractor clearance</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Rubble after full or partial demolition</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Multi-load site removals</span></li>
                    </ul>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* Why Choose Us & Areas Section */}
      <section className="grid md:grid-cols-5 gap-8 mb-16">
        <div className="md:col-span-3">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Check /> Why Choose Siya Demolitions?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((reason) => (
                    <div key={reason} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1"/>
                        <span className="font-medium text-muted-foreground">{reason}</span>
                    </div>
                ))}
            </div>
            {workerImage && <div className="mt-6 aspect-video relative"><Image src={workerImage.imageUrl} alt="Worker loading rubble into a truck" data-ai-hint="worker loading" fill className="rounded-lg object-cover" /></div>}
        </div>
        <div className="md:col-span-2">
            <Card className="shadow-lg h-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><MapPin/> Areas We Serve (Johannesburg)</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {joburgAreas.map((area) => (
                        <li key={area} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-accent flex-shrink-0" />
                            <span className="font-medium">{area}</span>
                        </li>
                    ))}
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground italic">
                        Not on this list? Contact us — we likely serve your area too.
                    </p>
                </CardContent>
            </Card>
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
        <h2 className="text-3xl font-bold">Get a Free Quote for Rubble Removal in Johannesburg</h2>
        <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
          Looking for fast, affordable rubble removal near you? Let Siya Demolitions handle the debris, so you can move forward — safely and stress-free.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
                <a href="tel:0784292760"><Phone />Call now</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
                <Link href="/contact"><Trash2 />Clear your site fast!</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact"><Mail />Request a quote</Link>
            </Button>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <span className="flex items-center gap-2"><Check /> Same-day service available</span>
            <span className="flex items-center gap-2"><Check /> Registered, local Johannesburg provider</span>
            <span className="flex items-center gap-2"><Check /> Trusted by 500+ clients</span>
        </div>
      </section>
    </div>
  );
}
