
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, MessageSquare, Mail, Building, Trash2, Sparkles, Wrench, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demolition & Construction Services in Johannesburg | Siya Demolitions",
  description: "Professional demolition, rubble removal, site clearing, and construction services in Johannesburg. Fully licensed and insured. Call for a free quote.",
};

const jhbServices = [
    { 
        title: "Demolition Services Johannesburg", 
        icon: <Building className="h-6 w-6 text-accent" />,
        points: [
            "Residential house demolition",
            "Commercial and industrial demolition",
            "Partial or full structure removal",
            "Internal strip-outs and renovation related dismantling"
        ]
    },
    { 
        title: "Rubble Removal & Waste Disposal", 
        icon: <Trash2 className="h-6 w-6 text-accent" />,
        points: [
            "Construction rubble removal",
            "Demolition waste removal",
            "Disposal of concrete, bricks, mixed debris",
            "Eco-friendly recycling wherever possible"
        ]
    },
    { 
        title: "Site Cleaning & Land Clearing", 
        icon: <Sparkles className="h-6 w-6 text-accent" />,
        points: [
            "Full debris cleanups",
            "Land clearing for new builds",
            "Pre-sale or post-demolition site prep",
            "Ready-to-build preparation"
        ]
    },
    { 
        title: "TLB Hire & Construction Support", 
        icon: <Wrench className="h-6 w-6 text-accent" />,
        points: [
            "Excavation and trenching",
            "Foundations and digging",
            "Small construction support",
            "Ground leveling and prep"
        ]
    }
];

const whyChooseUs = [
    "20+ years combined experience",
    "Residential, commercial, and industrial",
    "Fully licensed and insured",
    "We handle permits and safety compliance",
    "Fast turnarounds and competitive pricing",
    "Local knowledge of Johannesburg neighborhoods"
];

const joburgAreas = [
    "Sandton", "Soweto", "Randburg", "Roodepoort", "Midrand", "Germiston", "Alberton", "Johannesburg CBD"
];

const faqs = [
    {
        question: "Do I need permission for demolition in Johannesburg?",
        answer: "Yes. Most demolitions require approval. We help you handle all paperwork and municipal permits."
    },
    {
        question: "How long does a demolition take?",
        answer: "Small sites can take 1–2 days. Bigger jobs may take several days or more, depending on accessibility and the structure type."
    },
    {
        question: "Do you remove rubble after demolition?",
        answer: "Absolutely — we provide full rubble cleanup and site cleaning after demolition is complete."
    },
    {
        question: "Do you handle residential and commercial projects?",
        answer: "Yes — we’re experienced in both. From backyard garages to full housing blocks and office spaces."
    }
];

export default function JohannesburgPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition & Construction Services in Johannesburg</h1>
        <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <Check /> Reliable Demolition, Rubble Removal & Construction Solutions You Can Trust
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
          Siya Demolitions Projects provides professional demolition and construction services in Johannesburg, serving residential, commercial, and industrial clients. With years of hands-on experience, skilled operators, and the right machinery, we deliver safe, efficient, and cost-effective solutions for projects of all sizes.
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
          Whether you need partial demolition, full building demolition, rubble removal, or site preparation, our Johannesburg team is ready to assist — on time and within budget.
        </p>
        <Button size="lg" className="mt-6" asChild>
          <a href="tel:0784292760">
            <Phone className="mr-2 h-5 w-5" /> Call us today for a free quote
          </a>
        </Button>
      </section>

      {/* Services Section */}
      <section id="services" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <Wrench /> Our Demolition & Construction Services in Johannesburg
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {jhbServices.map(service => (
            <Card key={service.title} className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">{service.icon} {service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.points.map(point => (
                    <li key={point} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us & Areas Section */}
      <section className="grid md:grid-cols-5 gap-8 mb-16">
        <div className="md:col-span-3">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Check /> Why Choose Siya Demolitions in Johannesburg?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((reason) => (
                    <div key={reason} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1"/>
                        <span className="font-medium text-muted-foreground">{reason}</span>
                    </div>
                ))}
            </div>
            <p className="mt-6 text-muted-foreground">
              We understand Johannesburg regulations, site challenges, and time-sensitive projects — making us the right partner for your demolition work.
            </p>
        </div>
        <div className="md:col-span-2">
            <Card className="shadow-lg h-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><MapPin/> Areas We Serve in Johannesburg</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 text-muted-foreground">We proudly offer demolition and construction services in:</p>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {joburgAreas.map((area) => (
                        <li key={area} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="font-medium">{area}</span>
                        </li>
                    ))}
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground italic">
                        Don’t see your area listed? Contact us — we likely serve it too!
                    </p>
                </CardContent>
            </Card>
        </div>
      </section>

       {/* Recent Projects Section */}
       <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-4">Recent Demolition Projects in Johannesburg</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                We’ve completed residential demolitions, commercial site clears, and rubble removals all over Johannesburg. Each project is:
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
                <div className="flex items-center gap-2 font-medium">
                    <Check className="text-accent" /> Completed safely
                </div>
                <div className="flex items-center gap-2 font-medium">
                    <Check className="text-accent" /> Cleaned up fully
                </div>
                <div className="flex items-center gap-2 font-medium">
                    <Check className="text-accent" /> Delivered on time
                </div>
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
        <h2 className="text-3xl font-bold">Get a Free Quote for Demolition in Johannesburg</h2>
        <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
          Looking for professional, safe, and affordable demolition or construction services in Johannesburg? Siya Demolitions is here to help — fast. 🚛 We respond quickly, work safely, and leave your site spotless and build-ready.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
                <a href="tel:0784292760"><Phone />Call us today</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare />WhatsApp</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
                <Link href="/contact"><Mail />Request a Free Quote</Link>
            </Button>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <span className="flex items-center gap-2"><Check /> Serving all areas of Johannesburg</span>
            <span className="flex items-center gap-2"><Check /> Safe, certified, and insured</span>
            <span className="flex items-center gap-2"><Check /> Trusted by 500+ clients across Gauteng</span>
        </div>
      </section>
    </div>
  );
}

    