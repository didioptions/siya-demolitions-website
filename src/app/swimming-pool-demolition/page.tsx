import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, MessageSquare, Mail, MapPin, Building, Home, ShieldCheck, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const whatWeRemove = [
    "Concrete swimming pool demolition",
    "Fibreglass & tiled pool removal",
    "Full or partial swimming pool demolition",
    "Pool rubble removal & dump site disposal",
    "Ground levelling and site preparation",
];

const safePoints = [
    "Controlled pool breaking and debris removal",
    "Protection of nearby properties, walls, and landscaping",
    "Fast turnaround with minimal disruption",
    "Clean finish — site left safe, level and ready",
];

const whyChooseUs = [
    "Decades of experience in pool demolition",
    "Full-service: from breaking to removal to site cleanup",
    "Safe, insured operators with professional equipment",
    "Competitive and transparent pricing",
    "Serving homeowners, builders, and developers",
    "Local Johannesburg-based service team",
];

const joburgAreas = [
    "Sandton", "Roodepoort", "Midrand", "Randburg", "Soweto", "Germiston", "Alberton", "Johannesburg CBD"
];

const faqs = [
    {
        question: "How long does a pool demolition take?",
        answer: "Most residential pools can be removed in 1–3 days. Larger or reinforced pools may require extra time."
    },
    {
        question: "What happens to the rubble and debris?",
        answer: "We handle removal and eco-friendly disposal at licensed facilities."
    },
    {
        question: "Can the pool be partially removed?",
        answer: "Yes. Some clients prefer partial removal with ground infill. We tailor the solution to your needs."
    },
    {
        question: "Is it safe near buildings or gardens?",
        answer: "Absolutely. We use controlled methods and compact equipment to protect nearby structures."
    }
];

export default function SwimmingPoolDemolitionPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'poolDemoHero');
    const workImage = PlaceHolderImages.find(p => p.id === 'poolDemoWork');
    const afterImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Services in Johannesburg</h1>
        <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <Trash2 /> Safe, Affordable Pool Removal & Site Cleanup
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
          Looking to remove your unwanted or damaged swimming pool? Siya Demolitions Projects provides fast, safe and efficient swimming pool demolition in Johannesburg, including full removal, rubble clearance, and site preparation for future landscaping or development.
        </p>
        <Button size="lg" className="mt-6" asChild>
          <a href="tel:0784292760">
            <Phone className="mr-2 h-5 w-5" /> Call for a Free Pool Demolition Quote
          </a>
        </Button>
      </section>

      {/* What We Remove Section */}
      <section id="what-we-remove" className="mb-16">
         <h2 className="text-3xl font-bold text-center mb-8">What We Remove</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
                 {heroImage && <Image src={heroImage.imageUrl} alt={heroImage.description} data-ai-hint={heroImage.imageHint} width={600} height={400} className="rounded-lg shadow-lg" />}
            </div>
            <div className="space-y-3">
                <p className="text-muted-foreground mb-4">We handle all types of residential and commercial pool removal:</p>
                {whatWeRemove.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground font-medium">{item}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
       {/* Safety Section */}
       <section id="safety" className="mb-16 bg-card p-8 rounded-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
                <h2 className="text-3xl font-bold mb-4">Safe & Controlled Pool Demolition</h2>
                <p className="text-muted-foreground mb-4">Pool removal requires skill, planning, and the right tools. Our trained operators and equipment handle:</p>
                <ul className="space-y-2">
                  {safePoints.map(point => (
                    <li key={point} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
            </div>
            <div>
                {workImage && <Image src={workImage.imageUrl} alt={workImage.description} data-ai-hint={workImage.imageHint} width={600} height={400} className="rounded-lg shadow-lg" />}
            </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section id="project-types" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Pool Demolition for All Property Types</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Home className="h-6 w-6 text-accent" /> Residential Pool Removal</CardTitle>
                </CardHeader>
                <CardContent>
                     <p className="text-muted-foreground">Remove your old pool to:</p>
                     <ul className="mt-2 space-y-2">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Free up yard space</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Improve resale value</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Fix cracked or leaking structure</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Get rid of maintenance costs</span></li>
                    </ul>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Building className="h-6 w-6 text-accent" /> Commercial & Estate Demolition</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">We also assist:</p>
                     <ul className="mt-2 space-y-2">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Apartment complexes & body corporates</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Hotels, lodges, schools, and gyms</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Developers preparing for construction</span></li>
                    </ul>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* Why Choose Us & Areas Section */}
      <section className="grid md:grid-cols-5 gap-8 mb-16">
        <div className="md:col-span-3">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><ShieldCheck /> Why Choose Siya Demolitions?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((reason) => (
                    <div key={reason} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1"/>
                        <span className="font-medium text-muted-foreground">{reason}</span>
                    </div>
                ))}
            </div>
             {afterImage && <Image src={afterImage.imageUrl} alt={afterImage.description} data-ai-hint={afterImage.imageHint} width={500} height={300} className="rounded-lg shadow-lg mt-6" />}
        </div>
        <div className="md:col-span-2">
            <Card className="shadow-lg h-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><MapPin/> Areas We Serve</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 text-muted-foreground">We remove pools across the entire City of Johannesburg, including:</p>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {joburgAreas.map((area) => (
                        <li key={area} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-accent flex-shrink-0" />
                            <span className="font-medium">{area}</span>
                        </li>
                    ))}
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground italic">
                       Not listed? Contact us — we likely serve your suburb too.
                    </p>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Pool Demolition</h2>
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
        <h2 className="text-3xl font-bold">Request a Free Quote for Swimming Pool Demolition</h2>
        <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
         Whether you’re prepping for landscaping or getting rid of an old hazard, we make pool removal clean, simple, and safe.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
                <a href="tel:0784292760"><Phone />Call us today</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
                <Link href="/contact"><Building />Book a Site Visit</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact"><Mail />Request a Free Estimate</Link>
            </Button>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <span className="flex items-center gap-2"><Check /> Fast Quote</span>
            <span className="flex items-center gap-2"><Check /> Safe Methods</span>
            <span className="flex items-center gap-2"><Check /> Clean Site Guarantee</span>
        </div>
      </section>
    </div>
  );
}
