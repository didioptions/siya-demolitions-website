
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
        answer: "Yes, SIMA Demolitions Projects is a fully licensed and insured demolition contractor operating across Johannesburg and Gauteng. We strictly adhere to all national and municipal regulations, including those stipulated by the City of Johannesburg Metropolitan Municipality. Our licensing ensures that every project is managed by qualified professionals who understand the legal and safety requirements for structural demolition. This protects you, your property, and the public. We provide our compliance certification and insurance details with every quote, offering you complete peace of mind that your project is in safe, professional hands from start to finish."
    },
    {
        question: "Do I need council approval for demolition in Johannesburg?",
        answer: "Almost all structural demolition projects in Johannesburg require a permit from the City of Johannesburg. This is a critical legal step to ensure safety and compliance with building codes. Our service includes managing this entire application process on your behalf. We prepare and submit all necessary documentation, liaise with council inspectors, and ensure all prerequisites are met. By handling this complex process, we save you significant time and protect you from the risk of costly fines or project-halting stop-orders that can arise from non-compliance. This expertise is a core part of our value proposition."
    },
    {
        question: "What is the typical process for a house demolition in Johannesburg?",
        answer: "Our process is systematic and designed for safety and efficiency. It begins with a thorough site assessment and a detailed, obligation-free quote. Once you approve, we immediately handle the council permit applications. Before any demolition starts, we establish a secure perimeter, manage utility disconnections (water, electricity), and implement dust control measures. The demolition is then performed using modern, controlled techniques by our licensed team. Afterward, we execute a complete site clear-up, loading and transporting all rubble to certified disposal facilities. We leave your Johannesburg property perfectly clean, level, and ready for the next phase of your project."
    },
    {
        question: "How do you ensure safety on a demolition site in a dense area like Johannesburg?",
        answer: "Safety is our paramount concern, especially in dense urban environments. We implement a multi-layered safety plan that includes comprehensive site hoarding to secure the perimeter, advanced dust suppression systems (e.g., water misting) to protect neighboring properties, and the mandatory use of personal protective equipment (PPE) for all on-site personnel. A dedicated safety officer oversees every Johannesburg project to ensure full compliance with the Occupational Health and Safety Act. Our systematic, top-down demolition methods prevent uncontrolled collapses, ensuring the absolute protection of adjacent buildings, your property, our crew, and the general public."
    },
    {
        question: "What factors influence the cost of demolition in Johannesburg?",
        answer: "The cost of demolition varies based on several key factors. The size and height of the structure are primary drivers. The materials involved also play a significant role; for example, reinforced concrete is more time-consuming to demolish than brick. Site accessibility in Johannesburg is crucial—narrow roads or tight spaces may require smaller, more specialized machinery. The proximity to neighboring structures necessitates more careful, controlled demolition techniques, which can influence the cost. Finally, the scope of work, including whether it involves asbestos abatement, extensive foundation removal, or complex utility disconnections, will be factored into our transparent, itemized quote."
    },
    {
        question: "Do you handle asbestos removal during demolition projects?",
        answer: "Yes, we are qualified to manage projects involving asbestos. Asbestos-containing materials (ACMs) are hazardous and require specialized handling by law. If we identify potential ACMs during our initial site assessment, we will inform you immediately. The process involves engaging a certified asbestos abatement contractor who follows a strict protocol for the safe removal, sealing, and disposal of all hazardous materials at a designated waste facility. This is done before any structural demolition begins to ensure the site is completely safe and compliant with all environmental and health regulations. We manage this coordination to provide a seamless, safe service."
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
        title: "Johannesburg's Leading Home Demolition Contractors",
        icon: Home,
        imageUrlId: 'residentialDemolition',
        description: "Complete home demolition services including houses, garages, sheds, and other residential structures. We handle all permits and ensure safe, efficient removal.",
        subServices: ["Full house demolition", "Garage & shed removal", "Pool demolition", "Foundation removal"],
        link: "/demolition-johannesburg",
    },
    {
        title: "Specialized Commercial Demolition Across Johannesburg",
        icon: Building,
        imageUrlId: 'commercialDemolition',
        description: "Expert demolition of commercial buildings, retail spaces, offices, and warehouses. Minimal disruption to surrounding businesses with strict safety protocols.",
        subServices: ["Office buildings", "Retail spaces", "Warehouses", "Shopping centers"],
        link: "/demolition-rosebank",
    },
    {
        title: "Heavy Industrial Demolition Experts in Gauteng",
        icon: Factory,
        imageUrlId: 'industrialDemolition',
        description: "Large-scale industrial demolition including factories, plants, and heavy infrastructures. Specialized equipment and experienced crews for complex projects.",
        subServices: ["Factory demolition", "Plant decommissioning", "Heavy machinery removal", "Industrial site clearing"],
        link: "/demolition-germiston",
    },
    {
        title: "Interior Strip Outs for Renovations",
        icon: Layers,
        imageUrlId: 'interiorStripOut',
        description: "Selective interior demolition for renovations and refurbishment. Careful removal of walls, ceilings, flooring, and fixtures while preserving the structure.",
        subServices: ["Wall removal", "Ceiling demolition", "Floor removal", "Fixture stripping"],
        link: "/site-cleaning",
    },
    {
        title: "Concrete & Asphalt Demolition and Removal",
        icon: Hammer,
        imageUrlId: 'concreteBreaking',
        description: "Professional removal of concrete slabs, driveways, parking lots, and asphalt surfaces. Proper disposal and site preparation for new construction.",
        subServices: ["Concrete breaking", "Driveway removal", "Parking lot demolition", "Slab removal"],
        link: "/rubble-removal",
    },
    {
        title: "Full Site Clearing & Earthworks",
        icon: Shovel,
        imageUrlId: 'siteClearing',
        description: "Complete site preparation including vegetation clearing, excavation, and grading. Get your site ready for new construction or development.",
        subServices: ["Land clearing", "Excavation", "Grading & leveling", "Vegetation removal"],
        link: "/site-cleaning",
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
          <p className="mt-2 text-sm text-muted-foreground">No-obligation, detailed quote within 24 hours.</p>
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
        <section id="services" className="mb-16">
            <div className="text-center mb-12">
                <p className="text-accent font-semibold uppercase tracking-widest">Our Services</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Expert Demolition Services Across Johannesburg</h2>
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
                                    Learn More →
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
                    <h2 className="text-3xl font-bold mb-4">Our Johannesburg Demolition Process: Safety and Compliance First</h2>
                    <p className="text-muted-foreground mb-4">We follow a systematic, authority-compliant process to ensure every Johannesburg project is a success from start to finish:</p>
                    <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Initial Consultation & Quote:</span> We assess your site and project needs to provide a detailed, transparent, and obligation-free quote.</li>
                        <li><span className="font-semibold text-foreground">Permit & Council Application:</span> Navigating the City of Johannesburg's permit process can be daunting. We act as your agent, managing all documentation to secure council approval, saving you from costly fines and delays.</li>
                        <li><span className="font-semibold text-foreground">Site Preparation & Safety Setup:</span> We secure the site, manage utility disconnections, and implement all required safety measures according to the Occupational Health and Safety Act.</li>
                        <li><span className="font-semibold text-foreground">Structural Demolition:</span> Our licensed team performs the demolition using controlled, modern techniques that minimize noise, dust, and disruption to your Johannesburg neighborhood.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal & Recycling:</span> We efficiently clear all debris from the site and transport it to licensed, environmentally compliant disposal and recycling facilities.</li>
                        <li><span className="font-semibold text-foreground">Final Site Cleanup & Handover:</span> The site is left clean, level, and ready for your architects and builders to start their work, guaranteed.</li>
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
          <h2 className="text-3xl font-bold text-center mb-8">Johannesburg Demolition: Frequently Asked Questions</h2>
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

    