
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Building, Trash2, Sparkles, Wrench, MapPin, ShieldCheck, FileText, Construction, Home, Factory, Layers, Hammer, Shovel, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Apex Demolitions",
    "image": "https://images.unsplash.com/photo-1584460715199-eebff7891315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGVtb2xpdGlvbiUyMGJ1aWxkaW5nfGVufDB8fHx8MTc3MDA2NzI2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "url": "https://apex-demolitions-website.vercel.app/demolition-johannesburg",
    "telephone": "078 429 2760",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Johannesburg",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Gauteng"
    }
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Demolition Contractor",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Apex Demolitions"
    },
    "areaServed": {
        "@type": "City",
        "name": "Johannesburg"
    },
    "description": "Professional demolition services in Johannesburg for residential, commercial, and industrial properties. We handle house demolition, commercial building clearing, industrial dismantling, and more.",
    "url": "https://apex-demolitions-website.vercel.app/demolition-johannesburg"
};

const faqs = [
    {
        question: "How much does demolition cost in Johannesburg?",
        answer: "The cost of demolition in Johannesburg is influenced by several key factors. The primary drivers are the size, height, and materials of the structure; for instance, reinforced concrete is more time-consuming to demolish than standard brick. Site accessibility is also crucial—narrow roads in older suburbs or tight access in secure estates may require smaller, more specialized machinery. The proximity to neighboring structures necessitates more careful, controlled demolition techniques, which can influence the cost. Finally, the total scope of work, including whether it involves hazardous material abatement (like asbestos), extensive foundation removal, or complex utility disconnections, will be factored into our transparent, itemized quote, ensuring you understand every cost involved."
    },
    {
        question: "Do I need council approval for demolition in Johannesburg?",
        answer: "Almost all structural demolition projects in Johannesburg require a permit from the City of Johannesburg. This is a critical legal step to ensure public safety, environmental compliance, and adherence to building codes. Our comprehensive service includes professionally managing this entire application process on your behalf. We prepare and submit all necessary documentation—including site plans and safety protocols—liaise directly with council inspectors, and ensure all prerequisites are met before any work begins. By entrusting this complex process to us, you save significant time and are protected from the risk of costly fines or project-halting stop-orders that can arise from non-compliance. Our expertise here is a core part of our value proposition."
    },
    {
        question: "How long does a demolition project typically take?",
        answer: "A standard single-story house demolition in Johannesburg, including full rubble removal, can typically be completed in 2-5 days. Larger or more complex projects, like commercial buildings or structures with difficult access, can take longer. The timeline is affected by the permit approval process, which can take several weeks. Once on-site, our team works efficiently to complete the project within the agreed-upon timeframe."
    },
    {
        question: "Do you remove all the rubble after the demolition?",
        answer: "Yes, absolutely. Our service is a complete, end-to-end solution. After the structure is safely dismantled, our team manages the full rubble removal and site clearing process. We load and transport all debris to licensed, environmentally compliant disposal and recycling facilities, leaving your site clean, level, and ready for the next phase of your project. This is a core part of our dedicated rubble removal Johannesburg service."
    },
    {
        question: "Do you offer swimming pool demolition?",
        answer: "Yes, we specialize in swimming pool demolition in Johannesburg. Whether you want to remove an old, damaged pool or reclaim your garden space, we handle the entire process. This includes breaking up the pool shell (concrete, fibreglass, or marbelite), removing all debris, and backfilling and compacting the area to leave it level and ready for new lawn or construction."
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

const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, faqSchema]
};

const suburbs = [
    { name: "Sandton", href: "/demolition-sandton" },
    { name: "Randburg", href: "/demolition-randburg" },
    { name: "Roodepoort", href: "/demolition-roodepoort" },
    { name: "Midrand", href: "/demolition-midrand" },
    { name: "Fourways", href: "/demolition-fourways" },
    { name: "Soweto", href: "/demolition-soweto" },
    { name: "Alberton", href: "/demolition-alberton" },
    { name: "Germiston", href: "/demolition-germiston" },
    { name: "Boksburg", href: "/demolition-boksburg" },
    { name: "Benoni", href: "/demolition-benoni" },
    { name: "Kempton Park", href: "/demolition-kempton-park" },
    { name: "Bedfordview", href: "/demolition-bedfordview" },
    { name: "Edenvale", href: "/demolition-edenvale" },
    { name: "Bryanston", href: "/demolition-bryanston" },
    { name: "Rosebank", href: "/demolition-rosebank" },
    { name: "Northcliff", href: "/demolition-northcliff" },
    { name: "Melville", href: "/demolition-melville" },
    { name: "Linden", href: "/demolition-linden" },
    { name: "Parkhurst", href: "/demolition-parkhurst" },
    { name: "Greenside", href: "/demolition-greenside" },
    { name: "Pretoria", href: "/demolition-pretoria" },
    { name: "Centurion", href: "/demolition-centurion" },
    { name: "Krugersdorp", href: "/demolition-krugersdorp" },
    { name: "Springs", href: "/demolition-springs" },
    { name: "Brakpan", href: "/demolition-brakpan" },
    { name: "Nigel", href: "/demolition-nigel" },
];

const comprehensiveServices = [
    { title: "House Demolition Johannesburg", icon: Home, imageUrlId: 'residentialDemolition', description: "Complete home demolition services including houses, garages, sheds, and other residential structures. We handle all permits and ensure safe, efficient removal.", link: "/demolition-johannesburg" },
    { title: "Commercial Demolition Johannesburg", icon: Building, imageUrlId: 'commercialDemolition', description: "Expert demolition of commercial buildings, retail spaces, offices, and warehouses. Minimal disruption to surrounding businesses with strict safety protocols.", link: "/demolition-rosebank" },
    { title: "Industrial Demolition Johannesburg", icon: Factory, imageUrlId: 'industrialDemolition', description: "Large-scale industrial demolition including factories, plants, and heavy infrastructures. Specialized equipment and experienced crews for complex projects.", link: "/demolition-germiston" },
    { title: "Interior Strip-Outs Johannesburg", icon: Layers, imageUrlId: 'interiorStripOut', description: "Selective interior demolition for renovations and refurbishment. Careful removal of walls, ceilings, flooring, and fixtures while preserving the structure.", link: "/site-cleaning" },
    { title: "Concrete Demolition Johannesburg", icon: Hammer, imageUrlId: 'concreteBreaking', description: "Professional removal of concrete slabs, driveways, parking lots, and asphalt surfaces. Proper disposal and site preparation for new construction.", link: "/rubble-removal-johannesburg" },
    { title: "Swimming Pool Demolition", icon: Waves, imageUrlId: 'poolDemoWork', description: "Safe and efficient removal of unwanted or damaged swimming pools, including complete rubble removal and site backfilling.", link: "/swimming-pool-demolition-johannesburg" },
];

export default function DemolitionJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'homeHero');
    const processImage = PlaceHolderImages.find(p => p.id === 'constructionServices');

  return (
    <>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Professional Demolition Contractors in Johannesburg</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
              <ShieldCheck /> Your Trusted Partner for Safe & Compliant Demolition
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            As the leading demolition contractors in Johannesburg, Apex Demolitions Projects provides a comprehensive range of professional demolition services Johannesburg residents and businesses can rely on. We offer safe, licensed, and efficient solutions for residential, commercial, and industrial properties across all Johannesburg suburbs. From initial planning and council approvals to the final site cleanup, our team manages every aspect of your project with expertise. Whether you're in Sandton, Randburg, Soweto, or Roodepoort, we are the demolition Johannesburg team equipped to clear the way for your new development safely and effectively.
          </p>
          <Button size="lg" className="mt-6" asChild>
            <a href="tel:0784292760">
              <Phone className="mr-2 h-5 w-5" /> Get Your Free Quote Now
            </a>
          </Button>
          <p className="mt-2 text-sm text-muted-foreground">No-obligation, detailed quote within 24 hours.</p>
        </section>

        <section id="services" className="mb-16">
            <div className="text-center mb-12">
                <p className="text-accent font-semibold uppercase tracking-widest">Our Services</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Comprehensive Demolition Services in Johannesburg</h2>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                    We offer a full spectrum of demolition services across Johannesburg, tailored to projects of any scale. From single-family homes to large industrial plants, we have the expertise and equipment to handle it all.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {comprehensiveServices.map((service) => {
                    const serviceImage = PlaceHolderImages.find(p => p.id === service.imageUrlId);
                    return (
                        <Card key={service.title} className="bg-card/50 hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
                            <CardHeader className="p-0">
                                {serviceImage && (
                                <div className="relative aspect-video">
                                    <Image src={serviceImage.imageUrl} alt={serviceImage.description} data-ai-hint={serviceImage.imageHint} fill className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                </div>
                                )}
                            </CardHeader>
                            <CardContent className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><service.icon className="h-6 w-6 text-primary" />{service.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 flex-grow">{service.description}</p>
                                <Link href={service.link} className="font-semibold text-accent hover:underline mt-auto self-start">
                                    Learn More →
                                </Link>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Benefits of Professional Demolition Services</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Safety and Compliance</h4><p className="text-sm text-muted-foreground">Professional contractors adhere to strict safety protocols and are fully insured, protecting you from liability and ensuring the job is done according to all municipal regulations.</p></div></div>
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Efficiency and Speed</h4><p className="text-sm text-muted-foreground">With specialized heavy machinery and experienced crews, professional teams complete projects far faster than any DIY or smaller-scale effort, saving you valuable time.</p></div></div>
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Complete Waste Management</h4><p className="text-sm text-muted-foreground">A key benefit is the integrated <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link>. All debris is loaded and transported to legal disposal sites, a task that is difficult and costly to manage independently.</p></div></div>
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Structural and Environmental Protection</h4><p className="text-sm text-muted-foreground">Experts know how to demolish structures without damaging adjacent properties, foundations, or protected trees, and manage environmental factors like dust and runoff.</p></div></div>
            </div>
        </section>

        <section className="mb-16 bg-background p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Johannesburg Demolition Process</h2>
                    <p className="text-muted-foreground mb-4">We follow a systematic, authority-compliant process to ensure every project is seamless, safe, and efficient from start to finish:</p>
                    <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Inspection & Free Quote:</span> We conduct a thorough on-site assessment to understand the scope and provide a detailed, obligation-free quotation.</li>
                        <li><span className="font-semibold text-foreground">Council Approvals & Permits:</span> We professionally manage all permit applications with the City of Johannesburg to ensure full legal compliance.</li>
                        <li><span className="font-semibold text-foreground">Site Preparation & Safety:</span> Our team secures the site perimeter, implements safety measures, and manages the disconnection of all utilities.</li>
                        <li><span className="font-semibold text-foreground">Controlled Demolition:</span> Our licensed team performs a controlled demolition using modern equipment and techniques to dismantle the structure safely.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal & Recycling:</span> We clear all debris and transport it to licensed facilities, prioritizing recycling wherever possible.</li>
                        <li><span className="font-semibold text-foreground">Final Site Cleanup:</span> The project is only complete when your site is left clean, level, and ready for your builders. This is part of our comprehensive <Link href="/site-cleaning" className="text-primary hover:underline">site cleaning service</Link>.</li>
                    </ol>
                </div>
                 <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A new building under construction on a cleared site in Johannesburg" data-ai-hint="building construction" fill className="rounded-lg object-cover" /></div>}
                </div>
            </div>
        </section>
        
        <section id="why-choose-us" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex Demolition Contractors in Johannesburg?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card><CardHeader><CardTitle className="flex items-center gap-3"><ShieldCheck className="text-accent" />Licensed & Insured</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We are fully licensed and carry comprehensive public liability insurance, ensuring your project meets all City of Johannesburg regulations and is completely protected.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-3"><FileText className="text-accent" />Council Approval Experts</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We save you time and prevent costly delays by expertly managing the entire permit and approval process with the local authorities on your behalf.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-3"><Construction className="text-accent" />Decades of Experience</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">With over 20 years of experience in Johannesburg, our seasoned team has the expertise to handle any demolition challenge safely and efficiently.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-3"><Wrench className="text-accent" />Professional Equipment</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We utilize a fleet of modern, well-maintained demolition equipment, from excavators to Bobcats, ensuring a safe, effective, and reliable process.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-3"><Sparkles className="text-accent" />Complete Site Cleanup</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Our service includes a full rubble removal and site cleaning, leaving your property perfectly level and ready for the next phase of your building project.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-3"><Star className="text-accent" />Affordable & Transparent</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We provide competitive, transparent quotes with no hidden costs. The price we quote is the price you pay for a complete, professional service.</p></CardContent></Card>
            </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Demolition Services Across All Johannesburg Suburbs</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                We provide localized, expert demolition services across all of Johannesburg and greater Gauteng. We have dedicated pages for many suburbs, including our <Link href="/demolition-services-johannesburg" className="text-primary hover:underline">main Johannesburg services hub</Link>. Find your area below.
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
          <h2 className="text-3xl font-bold text-center mb-8">FAQ – Demolition Johannesburg</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Johannesburg</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Ready to start your project? Contact Apex Demolitions for a professional, no-obligation quote. We have full coverage across all Johannesburg suburbs.
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
