
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Building, Trash2, Sparkles, Wrench, MapPin, ShieldCheck, FileText, Construction, Home, Factory, Layers, Hammer, Shovel } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

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
];

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
        answer: "Yes, absolutely. Our demolition service is a complete, end-to-end solution. After the structure is safely dismantled, our team manages the full rubble removal and site clearing process. We load and transport all debris to licensed, environmentally compliant disposal and recycling facilities, leaving your site clean, level, and ready for the next phase of your project."
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

const comprehensiveServices = [
    { title: "House Demolition Johannesburg", icon: Home, imageUrlId: 'residentialDemolition', description: "Complete home demolition services including houses, garages, sheds, and other residential structures. We handle all permits and ensure safe, efficient removal.", link: "/demolition-johannesburg" },
    { title: "Commercial Demolition Johannesburg", icon: Building, imageUrlId: 'commercialDemolition', description: "Expert demolition of commercial buildings, retail spaces, offices, and warehouses. Minimal disruption to surrounding businesses with strict safety protocols.", link: "/demolition-rosebank" },
    { title: "Industrial Demolition Johannesburg", icon: Factory, imageUrlId: 'industrialDemolition', description: "Large-scale industrial demolition including factories, plants, and heavy infrastructures. Specialized equipment and experienced crews for complex projects.", link: "/demolition-germiston" },
    { title: "Interior Strip-Outs Johannesburg", icon: Layers, imageUrlId: 'interiorStripOut', description: "Selective interior demolition for renovations and refurbishment. Careful removal of walls, ceilings, flooring, and fixtures while preserving the structure.", link: "/site-cleaning" },
    { title: "Concrete Demolition Johannesburg", icon: Hammer, imageUrlId: 'concreteBreaking', description: "Professional removal of concrete slabs, driveways, parking lots, and asphalt surfaces. Proper disposal and site preparation for new construction.", link: "/rubble-removal-johannesburg" },
    { title: "Site Clearing & Rubble Removal Johannesburg", icon: Shovel, imageUrlId: 'siteClearing', description: "Complete site preparation including vegetation clearing, excavation, and grading. Get your site ready for new construction or development.", link: "/rubble-removal-johannesburg" },
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
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Professional Demolition Services in Johannesburg</h2>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                    We offer a full spectrum of demolition services across Johannesburg, tailored to projects of any scale.
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
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
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
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex Demolition Contractors in Johannesburg?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card><CardHeader><CardTitle className="flex items-center gap-3"><ShieldCheck className="text-accent" />Licensed Contractors</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We are fully licensed, ensuring your project meets all City of Johannesburg regulations.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-3"><FileText className="text-accent" />Council Approval Assistance</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We expertly manage the permit process to save you time and prevent delays.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-3"><Construction className="text-accent" />Experienced Team</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">With decades of experience, we handle any demolition challenge safely and efficiently.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-3"><Wrench className="text-accent" />Professional Equipment</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We use modern, well-maintained equipment for a safe and effective demolition process.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-3"><Sparkles className="text-accent" />Complete Rubble Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Our service includes full rubble removal, leaving your site perfectly build-ready.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-3"><Home className="text-accent" />Affordable Pricing</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We provide competitive, transparent quotes with no hidden costs.</p></CardContent></Card>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Affordable Demolition Services Across Johannesburg</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                Understanding the cost of demolition is crucial for your project budget. We provide affordable demolition services by giving transparent, itemized quotes based on clear factors: the structure's size and materials (e.g., brick vs. reinforced concrete), site accessibility in your specific Johannesburg suburb, and the total volume of rubble for removal. This ensures you receive a fair price for a professional, safe, and fully compliant service.
            </p>
        </section>

        <section className="mb-16 bg-background p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Johannesburg Demolition Process</h2>
                    <p className="text-muted-foreground mb-4">We follow a systematic, authority-compliant process:</p>
                    <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Inspection & Quote:</span> We provide a detailed, obligation-free quote.</li>
                        <li><span className="font-semibold text-foreground">Council Approvals:</span> We manage all permit applications with the City of Johannesburg.</li>
                        <li><span className="font-semibold text-foreground">Site Preparation & Safety:</span> We secure the site and manage utility disconnections.</li>
                        <li><span className="font-semibold text-foreground">Controlled Demolition:</span> Our licensed team performs the demolition using modern techniques.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal & Recycling:</span> We clear all debris and transport it to licensed facilities.</li>
                        <li><span className="font-semibold text-foreground">Final Site Cleanup:</span> The site is left clean, level, and ready for your builders.</li>
                    </ol>
                </div>
                 <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A new building under construction on a cleared site in Johannesburg" data-ai-hint="building construction" fill className="rounded-lg object-cover" /></div>}
                </div>
            </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Demolition Services Across Johannesburg Suburbs</h2>
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
                <AccordionTrigger>{faq.question}</AccordionTrigger>
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
