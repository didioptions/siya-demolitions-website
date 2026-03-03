import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Building, Trash2, Sparkles, Wrench, MapPin, ShieldCheck, FileText, Construction, Home, Factory, Layers, Hammer, Shovel } from "lucide-react";
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
        answer: "Yes, SIMA Demolitions Projects is a fully licensed and insured demolition contractor. We adhere to all municipal and national safety regulations required by the City of Johannesburg and City of Tshwane."
    },
    {
        question: "Do I need council approval for demolition in Johannesburg?",
        answer: "In almost all cases, yes. Any structural demolition requires a permit from the relevant local authority (e.g., City of Johannesburg). Our service includes managing the entire application process on your behalf to ensure full compliance."
    },
    {
        question: "What is the typical process for a house demolition?",
        answer: "Our process starts with a site assessment and a detailed, free quote. Once approved, we handle permit applications, site preparation, and utility disconnections. The demolition is then performed systematically, followed by complete rubble removal and site cleaning, leaving your property ready for its next step."
    },
    {
        question: "How do you ensure safety on a demolition site?",
        answer: "Safety is our absolute priority. We implement strict safety protocols, including site hoarding, dust control measures, and having trained safety officers on-site. All work is conducted in accordance with the Occupational Health and Safety Act to protect our crew, our clients, and the public."
    },
    {
        question: "How long does a demolition project in Johannesburg typically take?",
        answer: "A standard residential house demolition usually takes between 2 to 5 days, including full rubble removal. Larger commercial or industrial projects are more complex and are estimated on a case-by-case basis after a thorough site evaluation."
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

const comprehensiveServices = [
    {
        title: "Residential Demolition",
        icon: Home,
        imageUrlId: 'residentialDemolition',
        description: "Complete home demolition services including houses, garages, sheds, and other residential structures. We handle all permits and ensure safe, efficient removal.",
        subServices: ["Full house demolition", "Garage & shed removal", "Pool demolition", "Foundation removal"],
        link: "#contact",
    },
    {
        title: "Commercial Demolition",
        icon: Building,
        imageUrlId: 'commercialDemolition',
        description: "Expert demolition of commercial buildings, retail spaces, offices, and warehouses. Minimal disruption to surrounding businesses with strict safety protocols.",
        subServices: ["Office buildings", "Retail spaces", "Warehouses", "Shopping centers"],
        link: "#contact",
    },
    {
        title: "Industrial Demolition",
        icon: Factory,
        imageUrlId: 'industrialDemolition',
        description: "Large-scale industrial demolition including factories, plants, and heavy infrastructures. Specialized equipment and experienced crews for complex projects.",
        subServices: ["Factory demolition", "Plant decommissioning", "Heavy machinery removal", "Industrial site clearing"],
        link: "#contact",
    },
    {
        title: "Interior Strip Outs",
        icon: Layers,
        imageUrlId: 'interiorStripOut',
        description: "Selective interior demolition for renovations and refurbishment. Careful removal of walls, ceilings, flooring, and fixtures while preserving the structure.",
        subServices: ["Wall removal", "Ceiling demolition", "Floor removal", "Fixture stripping"],
        link: "#contact",
    },
    {
        title: "Concrete & Asphalt Removal",
        icon: Hammer,
        imageUrlId: 'concreteBreaking',
        description: "Professional removal of concrete slabs, driveways, parking lots, and asphalt surfaces. Proper disposal and site preparation for new construction.",
        subServices: ["Concrete breaking", "Driveway removal", "Parking lot demolition", "Slab removal"],
        link: "#contact",
    },
    {
        title: "Site Clearing & Earthworks",
        icon: Shovel,
        imageUrlId: 'siteClearing',
        description: "Complete site preparation including vegetation clearing, excavation, and grading. Get your site ready for new construction or development.",
        subServices: ["Land clearing", "Excavation", "Grading & leveling", "Vegetation removal"],
        link: "#contact",
    },
];

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
            SIMA Demolitions Projects is Johannesburg's leading team of licensed demolition contractors. We specialize in providing safe, compliant, and efficient demolition solutions for residential, commercial, and industrial properties across the greater Johannesburg and Gauteng area. From navigating complex council approvals to executing difficult demolitions and clearing the site completely, we manage every step of the process with professionalism and unmatched expertise. Our mission is to clear the way for your future development, safely and reliably.
          </p>
          <Button size="lg" className="mt-6" asChild>
            <a href="tel:0784292760">
              <Phone className="mr-2 h-5 w-5" /> Get Your Free Quote Now
            </a>
          </Button>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose SIMA for Your Johannesburg Demolition Project?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-3"><ShieldCheck className="text-accent" />Licensed & Insured</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">We are fully licensed contractors, providing complete peace of mind and ensuring your project meets all City of Johannesburg regulations.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-3"><FileText className="text-accent" />Council Approval Experts</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">We expertly manage the entire permit application process, liaising with the council to save you time and prevent costly project delays.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-3"><Construction className="text-accent" />Decades of Experience</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">With over 20 years of combined experience, our team possesses the deep knowledge required to handle any demolition challenge safely and efficiently.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-3"><Sparkles className="text-accent" />Complete Site Clearing</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Our comprehensive service includes full rubble removal and final site cleaning, leaving your property perfectly build-ready.</p></CardContent>
                </Card>
            </div>
        </section>

        {/* Comprehensive Services Section */}
        <section className="mb-16">
            <div className="text-center mb-12">
                <p className="text-accent font-semibold uppercase tracking-widest">Our Services</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Comprehensive Demolition Solutions</h2>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                    From small residential projects to large industrial demolitions, we have the expertise and equipment to handle any job safely and efficiently.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {comprehensiveServices.map((service) => {
                    const serviceImage = PlaceHolderImages.find(p => p.id === service.imageUrlId);
                    return (
                        <Card key={service.title} className="bg-card/50 hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
                            <CardHeader className="p-0">
                                <div className="relative aspect-video">
                                    {serviceImage ? (
                                        <Image src={serviceImage.imageUrl} alt={serviceImage.description} data-ai-hint={serviceImage.imageHint} fill className="object-cover" />
                                    ) : (
                                        <div className="bg-muted w-full h-full"></div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <div className="bg-accent/90 text-accent-foreground p-3 rounded-md inline-block backdrop-blur-sm">
                                            <service.icon className="h-6 w-6" />
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 flex-grow">{service.description}</p>
                                <ul className="space-y-2 mb-6 text-sm">
                                    {service.subServices.map((sub, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-accent flex-shrink-0" />
                                            <span className="text-muted-foreground">{sub}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href={service.link} className="font-semibold text-accent hover:underline mt-auto self-start">
                                    Get Quote →
                                </Link>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </section>

        {/* Demolition Process Section */}
        <section className="mb-16 bg-card p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Demolition Process: Safety and Compliance First</h2>
                    <p className="text-muted-foreground mb-4">We follow a systematic, authority-compliant process to ensure every Johannesburg project is a success from start to finish:</p>
                    <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Initial Consultation & Quote:</span> We assess your site and project needs to provide a detailed, transparent, and obligation-free quote.</li>
                        <li><span className="font-semibold text-foreground">Permit Application:</span> We prepare and submit all necessary documentation to the City of Johannesburg on your behalf.</li>
                        <li><span className="font-semibold text-foreground">Site Preparation & Safety Setup:</span> We secure the site, manage utility disconnections, and implement all required safety measures.</li>
                        <li><span className="font-semibold text-foreground">Structural Demolition:</span> Our licensed team performs the demolition using controlled, safe, and modern techniques.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal & Recycling:</span> We efficiently clear all debris from the site and transport it to licensed disposal and recycling facilities.</li>
                        <li><span className="font-semibold text-foreground">Final Site Cleanup:</span> The site is left clean, level, and ready for your architects and builders to start their work.</li>
                    </ol>
                </div>
                 <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A new building under construction on a cleared site in Johannesburg" data-ai-hint="building construction" fill className="rounded-lg object-cover" /></div>}
                </div>
            </div>
        </section>

        {/* Suburbs Section */}
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Demolition Services in Your Johannesburg Suburb</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                We provide localized, expert demolition services across all of Johannesburg and greater Gauteng. Find your area below to learn more about our work in your community.
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
