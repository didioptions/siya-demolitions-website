
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check, Phone, Wrench, Trash2, Sparkles, Axe, Building, Award, Users, MapPin, ShieldCheck, Quote, User, Waves, Tractor, HardHat, Mail, MessageSquare, ArrowRight, Clock, Star, Leaf, BrickWall, Briefcase, ThumbsUp, Factory } from "lucide-react";
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HomePageContactForm } from "@/components/home/home-page-contact-form";

export const metadata: Metadata = {
    title: {
        absolute: "Demolition, Plant Hire & Rubble Removal Johannesburg | Apex",
    },
    description: "Top-rated demolition, plant hire, and rubble removal in Johannesburg. Licensed contractors for site clearing, tree felling, and more. Same-day service available. Get a free quote.",
};

const organizationSchema = {
    "@type": "LocalBusiness",
    "name": "Apex Demolitions Projects",
    "image": "https://images.unsplash.com/photo-1584460715199-eebff7891315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGVtb2xpdC0builduing%7C%27fen%20oM%7C%7C%7CMTM6NzY%3D&ixlib=rb-4.1.0&q=80&w=1080",
    "@id": "https://apex-demolitions-website.vercel.app/",
    "url": "https://apex-demolitions-website.vercel.app/",
    "telephone": "+27784292760",
    "priceRange": "R1200 - R50000",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "304 Main Avenue",
        "addressLocality": "Randburg",
        "addressRegion": "Gauteng",
        "postalCode": "2194",
        "addressCountry": "ZA"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": -26.2041,
        "longitude": 28.0473
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:30",
        "closes": "17:30"
    },
    "sameAs": [
        "https://www.facebook.com/apex.demolitions"
    ]
};

const servicesSchema = [
    { "@type": "Service", "serviceType": "Demolition Services", "description": "Expert residential and commercial demolition across Johannesburg, handled with precision to ensure a safe and compliant site ready for development.", "provider": { "@type": "Organization", "name": "Apex Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Johannesburg" }, "url": "https://apex-demolitions-website.vercel.app/demolition-johannesburg" },
    { "@type": "Service", "serviceType": "Rubble Removal", "description": "Fast and reliable rubble removal in Johannesburg. We clear all construction debris to ensure a spotless, hazard-free job site.", "provider": { "@type": "Organization", "name": "Apex Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Johannesburg" }, "url": "https://apex-demolitions-website.vercel.app/rubble-removal-johannesburg" },
    { "@type": "Service", "serviceType": "Plant Hire", "description": "Affordable and reliable TLB, Bobcat, and tipper truck hire with trained operators for excavation, trenching, and site preparation across Johannesburg.", "provider": { "@type": "Organization", "name": "Apex Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Johannesburg" }, "url": "https://apex-demolitions-website.vercel.app/plant-hire-johannesburg" }
];

const faqs = [
    { question: "How much does your service cost?", acceptedAnswer: { "@type": "Answer", "text": "Our pricing is highly competitive. Rubble removal starts from around R600 for small loads and R1200 for a 6-cube truck load. Plant hire varies by machine and duration. For demolition, we provide a free, detailed on-site quote to give you a fixed price with no surprises." } },
    { question: "Do you offer same-day service?", acceptedAnswer: { "@type": "Answer", "text": "Yes, we specialize in rapid response. We offer same-day service for most rubble removal, plant hire, and urgent tree felling jobs in Johannesburg, depending on our schedule and your location. Call us early to secure a slot for the quickest service." } },
    { question: "Which areas in Johannesburg do you cover?", acceptedAnswer: { "@type": "Answer", "text": "We cover all of Johannesburg and the greater Gauteng area. Our teams are active daily in Sandton, Randburg, Midrand, Roodepoort, Johannesburg South, and the East Rand. No matter where your site is, we have a local team ready to assist." } },
    { question: "What types of waste do you remove?", acceptedAnswer: { "@type": "Answer", "text": "We remove all non-hazardous waste. This includes builders rubble (bricks, concrete, soil), renovation debris (tiles, wood, drywall), garden refuse (branches, soil), industrial waste, and general junk. Our demolition services clear entire structures. We are a full-service site clearance company." } }
];

const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": faq.acceptedAnswer
    }))
};

const allSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    ...servicesSchema,
    faqSchema
  ]
};

export default function Home() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'homeHero');
    const demolitionImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const rubbleImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const plantImage = PlaceHolderImages.find(p => p.id === 'plantHireTlb');
    const siteCleaningImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const treeImage = PlaceHolderImages.find(p => p.id === 'treeFelling');
    const industrialImage = PlaceHolderImages.find(p => p.id === 'industrialDemolition');


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchema) }} />

        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
            {heroImage && <Image src={heroImage.imageUrl} alt="Demolition and rubble removal site in Johannesburg" data-ai-hint="demolition site" fill className="object-cover" priority />}
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Demolition, Plant Hire & Rubble Removal Johannesburg</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
                      Your licensed Johannesburg contractors for professional demolition, TLB & Bobcat hire, and fast rubble removal. Same-day service available. rubble removal from R1200.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <a href="tel:0784292760"><Phone /> Call for a Quote</a>
                        </Button>
                        <Button size="lg" variant="secondary" asChild>
                            <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">
                                <MessageSquare/> WhatsApp for Fast Response
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-card border-b border-t">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center py-4 text-sm font-medium">
                <div className="flex items-center justify-center gap-2"><Star className="text-primary h-4 w-4" /> 15+ Years Experience</div>
                <div className="flex items-center justify-center gap-2"><Users className="text-primary h-4 w-4" /> Professional Teams</div>
                <div className="flex items-center justify-center gap-2"><Tractor className="text-primary h-4 w-4" /> Fully Equipped</div>
                <div className="flex items-center justify-center gap-2"><ShieldCheck className="text-primary h-4 w-4" /> Licensed & Insured</div>
                <div className="flex items-center justify-center gap-2"><Briefcase className="text-primary h-4 w-4" /> Residential & Commercial</div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Your One-Stop Solution for Site Preparation in Johannesburg</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                        From initial demolition to final site clearing, we provide a complete range of services to prepare your property for its next phase. We are contractors, not just a rental company, managing your project from start to finish.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Building /> Demolition Services</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">As top-tier demolition Johannesburg contractors, we handle everything from full house demolition and commercial building removal to precise internal strip-outs. We prepare your site safely and efficiently for new construction, ensuring all work is compliant and professionally managed.</p>
                        </CardContent>
                    </Card>
                     <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Trash2 /> Rubble & Waste Removal</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">Our fast and reliable rubble removal Johannesburg service clears all construction debris, builders rubble, garden refuse, and industrial waste. We offer same-day service to keep your site safe and productive, with legal disposal guaranteed.</p>
                        </CardContent>
                    </Card>
                     <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Tractor /> Plant Hire</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">Get the right machinery for the job with our plant hire Johannesburg service. We provide TLBs, Bobcats, and tipper trucks with certified operators for excavation, trenching, site clearing, and material handling, ensuring your project runs smoothly.</p>
                        </CardContent>
                    </Card>
                     <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Sparkles /> Site Clearance</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">Our comprehensive site clearance service combines demolition, rubble removal, and earthmoving to prepare your land for development. We clear vegetation, remove old foundations, and level the site, providing a clean, build-ready plot.</p>
                        </CardContent>
                    </Card>
                     <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Leaf /> Garden Refuse & Tree Felling</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">We handle all green waste, from simple garden refuse removal to professional tree felling. Our teams can safely remove overgrown trees, clear invasive species, and remove all organic waste, leaving your garden pristine.</p>
                        </CardContent>
                    </Card>
                     <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Factory /> Industrial Waste Removal</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">We provide specialized waste management for industrial sites in areas like Germiston, handling scrap metal, factory clean-outs, and hazardous material disposal in compliance with all safety and environmental regulations.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section id="pricing" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Transparent Pricing for Johannesburg Services</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">We believe in clear, upfront pricing with no hidden costs. Here's what you can expect.</p>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                     <Card>
                        <CardHeader>
                            <CardTitle>Small Load Rubble Removal</CardTitle>
                            <p className="text-muted-foreground text-sm">Garden refuse or DIY waste.</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">from R600</p>
                            <p className="text-muted-foreground mt-2">Ideal for small residential cleanups.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>6-Cube Truck Rubble Removal</CardTitle>
                            <p className="text-muted-foreground text-sm">Standard builders rubble.</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">from R1200</p>
                            <p className="text-muted-foreground mt-2">Perfect for renovation debris or construction waste.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Plant Hire (with Operator)</CardTitle>
                            <p className="text-muted-foreground text-sm">TLB or Bobcat.</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">By Day/Hour</p>
                            <p className="text-muted-foreground mt-2">Competitive rates for machinery and operator hire.</p>
                        </CardContent>
                    </Card>
                </div>
                 <p className="text-center text-sm text-muted-foreground mt-8">*Disclaimer: Prices are a guideline. Contact us for a precise, free quote based on your specific needs.</p>
            </div>
        </section>

        <section className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Simple 5-Step Process</h2>
                    <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">Getting your site cleared is easy and fast. Here’s how it works.</p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 max-w-5xl mx-auto text-center">
                    <div className="flex flex-col items-center gap-2"><div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-12 w-12 text-lg font-bold">1</div><h3 className="font-semibold mt-2">Contact Us</h3><p className="text-sm text-muted-foreground">Call or WhatsApp us with your job details.</p></div>
                    <div className="flex flex-col items-center gap-2"><div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-12 w-12 text-lg font-bold">2</div><h3 className="font-semibold mt-2">Send Details</h3><p className="text-sm text-muted-foreground">Send photos via WhatsApp for a quick estimate.</p></div>
                    <div className="flex flex-col items-center gap-2"><div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-12 w-12 text-lg font-bold">3</div><h3 className="font-semibold mt-2">Get Your Quote</h3><p className="text-sm text-muted-foreground">We provide a clear, no-obligation quote.</p></div>
                    <div className="flex flex-col items-center gap-2"><div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-12 w-12 text-lg font-bold">4</div><h3 className="font-semibold mt-2">Same-Day Service</h3><p className="text-sm text-muted-foreground">We dispatch a team to your site, often on the same day.</p></div>
                    <div className="flex flex-col items-center gap-2"><div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-12 w-12 text-lg font-bold">5</div><h3 className="font-semibold mt-2">Job Done</h3><p className="text-sm text-muted-foreground">We complete the work and leave your site clean and safe.</p></div>
                </div>
            </div>
        </section>

        <section id="areas-we-serve" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Serving All of Johannesburg and Surrounds</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">Our teams are strategically positioned to provide fast, reliable demolition, plant hire, and rubble removal services across all of Johannesburg's key suburbs.</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/demolition-sandton" className="bg-card p-3 rounded-md text-sm font-medium hover:bg-card/80">Sandton</Link>
                    <Link href="/demolition-randburg" className="bg-card p-3 rounded-md text-sm font-medium hover:bg-card/80">Randburg</Link>
                    <Link href="/demolition-midrand" className="bg-card p-3 rounded-md text-sm font-medium hover:bg-card/80">Midrand</Link>
                    <Link href="/demolition-roodepoort" className="bg-card p-3 rounded-md text-sm font-medium hover:bg-card/80">Roodepoort</Link>
                    <Link href="/demolition-fourways" className="bg-card p-3 rounded-md text-sm font-medium hover:bg-card/80">Fourways</Link>
                    <Link href="/demolition-soweto" className="bg-card p-3 rounded-md text-sm font-medium hover:bg-card/80">Johannesburg South</Link>
                </div>
            </div>
        </section>

        <section id="recent-projects" className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Projects in Johannesburg</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sandton - Demolition</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">Full house demolition in a secure estate, completed in 4 days including site clearance. We managed all estate logistics and left the property ready for a new build.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Randburg - Rubble Removal</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">Same-day removal of 3 truckloads of renovation debris from a residential property in Blairgowrie, allowing other contractors to proceed without delay.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Midrand - Plant Hire</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">Provided a TLB and operator for a week-long trenching and site levelling project at a new commercial development near Waterfall City.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        <section id="faq" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base">
                          {faq.acceptedAnswer.text}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
                <div className="text-center mt-8">
                     <p className="text-sm text-muted-foreground">See our Google Reviews or <a href="https://g.page/r/CZ4yPlKY6ihdEAE/review" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">leave us a review</a> to hear what our clients say about our work.</p>
                </div>
            </div>
        </section>
        
        <section id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
             <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Start Your Demolition Project Today</h2>
                <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">
                    Call or WhatsApp now for a fast, professional demolition quote in Johannesburg. We handle everything from demolition to full site clearance. Fast response. Reliable service. Done right.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                        <a href="tel:0784292760"><Phone /> Call for a Quote</a>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                         <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp for Fast Response</a>
                    </Button>
                </div>
             </div>
        </section>
    </>
  );
}
