import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Building, Trash2, Sparkles, Wrench, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata: Metadata = {
  title: "Demolition Services in Johannesburg | Siya Demolitions Projects",
  description: "Professional demolition, rubble removal, and site preparation services in Gauteng. Trusted by commercial and residential clients across Johannesburg. Call now.",
};

const jhbServices = [
    { 
        title: "Demolition Services Johannesburg", 
        icon: <Building className="h-6 w-6 text-accent" />,
        description: "We offer controlled and safe demolition services across:",
        points: [
            "Residential house demolition",
            "Commercial and industrial demolition",
            "Partial or full structure removal",
            "Internal strip-outs and renovation related dismantling"
        ],
        outro: "All projects are carried out with strict safety standards and minimal disruption to surrounding properties.",
        imageId: "residentialDemolition",
        imageHint: "residential demolition"
    },
    { 
        title: "Rubble Removal & Waste Disposal", 
        icon: <Trash2 className="h-6 w-6 text-accent" />,
        description: "Our rubble removal services in Johannesburg make your site clean, safe, and legal:",
        points: [
            "Construction rubble removal",
            "Demolition waste removal",
            "Disposal of concrete, bricks, mixed debris",
            "Eco-friendly recycling wherever possible"
        ],
        outro: "We remove rubble quickly and responsibly so your project stays on schedule.",
        imageId: "rubbleRemoval",
        imageHint: "rubble removal truck"
    },
    { 
        title: "Site Cleaning & Land Clearing", 
        icon: <Sparkles className="h-6 w-6 text-accent" />,
        description: "Prepare your site the right way with our professional site cleaning services:",
        points: [
            "Full debris cleanups",
            "Land clearing for new builds",
            "Pre-sale or post-demolition site prep",
            "Ready-to-build preparation"
        ],
        outro: "Perfect for developments, renovations, or landscaping.",
        imageId: "siteClearing",
        imageHint: "site clearing"
    },
    { 
        title: "TLB Hire & Construction Support", 
        icon: <Wrench className="h-6 w-6 text-accent" />,
        description: "Need heavy machinery? We offer TLB hire in Johannesburg with experienced operators:",
        points: [
            "Excavation and trenching",
            "Foundations and digging",
            "Small construction support",
            "Ground leveling and prep"
        ],
        outro: "Well-maintained equipment + skilled crew = faster and safer builds.",
        imageId: "plantHireTlb",
        imageHint: "tlb hire"
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
        answer: "Small sites = 1–2 days. Bigger jobs = several days or more depending on accessibility and structure type."
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

export default function ServicesPage() {
    const projectsImage = PlaceHolderImages.find(p => p.id === 'constructionServices');

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
          {jhbServices.map(service => {
            const image = PlaceHolderImages.find(p => p.id === service.imageId);
            return(
                <Card key={service.title} className="shadow-lg flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3">{service.icon} {service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <ul className="space-y-2">
                        {service.points.map(point => (
                            <li key={point} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground">{point}</span>
                            </li>
                        ))}
                        </ul>
                        <p className="text-muted-foreground mt-4">{service.outro}</p>
                        {image && (
                           <div className="mt-4 aspect-video relative">
                             <Image src={image.imageUrl} alt={image.description} data-ai-hint={service.imageHint} fill className="rounded-lg object-cover" />
                           </div>
                        )}
                    </CardContent>
                </Card>
            )
        })}
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
             {projectsImage && <div className="mt-6 aspect-video relative"><Image src={projectsImage.imageUrl} alt="Work in progress with machinery" data-ai-hint="machinery dust" fill className="rounded-lg object-cover" /></div>}
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
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
                <a href="tel:0784292760"><Phone />Call us today</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp</a>
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
