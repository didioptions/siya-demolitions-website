import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, MessageSquare, Mail, MapPin, Tractor, Home, Building } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const plantServices = [
    "TLB hire (Tractor Loader Backhoe)",
    "Bobcat hire (compact loader)",
    "Excavation and trenching",
    "Levelling and site grading",
    "Demolition and rubble management",
    "Land clearing and digging",
];

const whyChooseUs = [
    "Skilled operators included",
    "Short-term or long-term hire available",
    "Bobcat for compact or tight access jobs",
    "Fully maintained, ready-to-work machines",
    "Trusted across Johannesburg by builders & developers",
];

const joburgAreas = [
    "Sandton", "Soweto", "Roodepoort", "Midrand", "Randburg", "Germiston", "Alberton", "Johannesburg CBD"
];

const faqs = [
    {
        question: "Do you include Bobcat operators?",
        answer: "Yes — all hires include trained and experienced operators at no extra cost."
    },
    {
        question: "When would I use a Bobcat instead of a TLB?",
        answer: "If you're working in tight spaces, smaller plots, or require manoeuvrability, a Bobcat is ideal."
    },
    {
        question: "Can your machines support demolition?",
        answer: "Yes — we support rubble loading, land clearing, and light digging around demolition jobs."
    },
    {
        question: "Do you offer both short and long hires?",
        answer: "Absolutely. Choose based on your project needs. Flexibility is part of our service."
    }
];

export default function PlantHirePage() {
    const bobcatImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');
    const tlbImage = PlaceHolderImages.find(p => p.id === 'plantHireTlb');
    const residentialImage = PlaceHolderImages.find(p => p.id === 'plantHireResidential');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant & Bobcat Hire Services in Johannesburg</h1>
        <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <Tractor /> Efficient Equipment & Operators for Demolition, Site Prep & Construction Support
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
          Looking for plant or Bobcat hire in Johannesburg? Siya Demolitions offers affordable, reliable plant hire, TLBs, and Bobcats with trained operators for excavation, trenching, land clearing, and more. From residential foundation work to full commercial site prep — we’ve got the right machinery and the right crew.
        </p>
        <Button size="lg" className="mt-6" asChild>
          <a href="tel:0784292760">
            <Phone className="mr-2 h-5 w-5" /> Call now for a free plant hire quote
          </a>
        </Button>
      </section>

      {/* Services Section */}
      <section id="services" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">What’s Included in Our Plant Hire Services</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
             <div>
                {bobcatImage && <Image src={bobcatImage.imageUrl} alt={bobcatImage.description} data-ai-hint={bobcatImage.imageHint} width={600} height={400} className="rounded-lg shadow-lg" />}
            </div>
            <div className="space-y-3">
                <p className="text-muted-foreground mb-4">We provide operator-included hire for:</p>
                {plantServices.map((service) => (
                    <div key={service} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground font-medium">{service}</span>
                    </div>
                ))}
                 <p className="text-sm text-muted-foreground pt-2">Whether you're working in a compact backyard, a large site, or a commercial zone — we’ve got the solution.</p>
            </div>
        </div>
      </section>
      
       {/* Equipment Section */}
       <section id="equipment" className="mb-16 bg-card p-8 rounded-lg">
         <h2 className="text-3xl font-bold text-center mb-8">What Our Equipment is Best For</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
                <p className="text-muted-foreground mb-4">We maintain all machinery to the highest standards:</p>
                <ul className="space-y-2">
                    <li className="flex items-start gap-3"><Check className="text-accent" /> Safe and serviced Bobcats & TLBs</li>
                    <li className="flex items-start gap-3"><Check className="text-accent" /> Suitable for tough, muddy, or narrow areas</li>
                    <li className="flex items-start gap-3"><Check className="text-accent" /> Ideal for earthmoving, trenching, and rubble handling</li>
                    <li className="flex items-start gap-3"><Check className="text-accent" /> Delivered and collected on time, job-ready</li>
                </ul>
            </div>
             <div>
                {tlbImage && <Image src={tlbImage.imageUrl} alt={tlbImage.description} data-ai-hint={tlbImage.imageHint} width={600} height={400} className="rounded-lg shadow-lg" />}
            </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section id="project-types" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Plant Hire for Residential & Commercial Projects</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Home className="h-6 w-6 text-accent" /> Residential Plant & Bobcat Hire</CardTitle>
                </CardHeader>
                <CardContent>
                     <p className="text-muted-foreground">Perfect for:</p>
                     <ul className="mt-2 space-y-2">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Yard and driveway trenching</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Pool excavation or leveling</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Land clearing or debris removal</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Landscaping and property work</span></li>
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
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Large-scale excavation</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Earthmoving and trenching</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Site prep for builds</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Fast material handling in tight spaces</span></li>
                    </ul>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* Why Choose Us & Areas Section */}
      <section className="grid md:grid-cols-5 gap-8 mb-16">
        <div className="md:col-span-3">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Check /> Why Choose Siya for Plant & Bobcat Hire?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((reason) => (
                    <div key={reason} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1"/>
                        <span className="font-medium text-muted-foreground">{reason}</span>
                    </div>
                ))}
            </div>
             {residentialImage && <Image src={residentialImage.imageUrl} alt={residentialImage.description} data-ai-hint={residentialImage.imageHint} width={500} height={300} className="rounded-lg shadow-lg mt-6" />}
        </div>
        <div className="md:col-span-2">
            <Card className="shadow-lg h-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><MapPin/> Areas We Serve</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 text-muted-foreground">We offer plant & Bobcat hire services across:</p>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {joburgAreas.map((area) => (
                        <li key={area} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-accent flex-shrink-0" />
                            <span className="font-medium">{area}</span>
                        </li>
                    ))}
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground italic">
                       Not listed? Contact us — we likely serve your area too.
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
        <h2 className="text-3xl font-bold">Get a Free Plant & Bobcat Hire Quote Today</h2>
        <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
         Whether you're clearing, digging, or preparing foundations — Siya Demolitions delivers fast, reliable equipment hire with trained operators to get the job done right.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
                <a href="tel:0784292760"><Phone />Call now</a>
            </Button>
             <Button size="lg" variant="secondary" asChild>
                <Link href="/contact"><Tractor />Book a Bobcat or TLB Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact"><Mail />Request a Custom Quote</Link>
            </Button>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <span className="flex items-center gap-2"><Check /> Fast delivery</span>
            <span className="flex items-center gap-2"><Check /> Skilled crew</span>
            <span className="flex items-center gap-2"><Check /> Affordable plant hire Johannesburg</span>
        </div>
      </section>
    </div>
  );
}
