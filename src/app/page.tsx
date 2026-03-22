

import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check, Phone, Wrench, Trash2, Sparkles, Axe, Building, Award, Users, MapPin, ShieldCheck, Quote, User, Waves, Tractor, HardHat, Mail, MessageSquare } from "lucide-react";
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HomePageContactForm } from "@/components/home/home-page-contact-form";

export const metadata: Metadata = {
    title: {
        absolute: "Johannesburg Demolition, Rubble Removal & Site Clearing Experts | Apex",
    },
    description: "Apex Demolitions offers licensed demolition, rubble removal, site cleaning, tree felling & plant hire in Johannesburg. Trusted experts for residential & commercial projects. Get a free quote.",
};

const organizationSchema = {
    "@type": "LocalBusiness",
    "name": "Apex Demolitions Projects",
    "image": "https://images.unsplash.com/photo-1584460715199-eebff7891315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGVtb2xpdGlvbiUyMGJ1aWxkaW5nfGVufDB8fHx8MTc3MDA2NzI2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "@id": "https://apex-demolitions-website.vercel.app/",
    "url": "https://apex-demolitions-website.vercel.app/",
    "telephone": "+27784292760",
    "priceRange": "$$",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Main Road",
        "addressLocality": "Johannesburg",
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
    { "@type": "Service", "serviceType": "Demolition Services", "description": "Expert residential and commercial demolition across Gauteng, handled with precision to ensure a safe and compliant site ready for development.", "provider": { "@type": "Organization", "name": "Apex Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" }, "url": "https://apex-demolitions-website.vercel.app/demolition-johannesburg" },
    { "@type": "Service", "serviceType": "Rubble Removal", "description": "Fast and reliable rubble removal in Gauteng. We clear all construction debris to ensure a spotless, hazard-free job site.", "provider": { "@type": "Organization", "name": "Apex Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" }, "url": "https://apex-demolitions-website.vercel.app/rubble-removal-johannesburg" },
    { "@type": "Service", "serviceType": "Site Cleaning", "description": "Thorough site cleaning to prepare your Gauteng property for its next phase, ensuring you're ready for excavation or building.", "provider": { "@type": "Organization", "name": "Apex Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" }, "url": "https://apex-demolitions-website.vercel.app/site-cleaning" },
    { "@type": "Service", "serviceType": "Tree Felling", "description": "Safe and professional tree felling in Gauteng. We efficiently remove hazardous or unwanted trees to protect your property and clear land.", "provider": { "@type": "Organization", "name": "Apex Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" }, "url": "https://apex-demolitions-website.vercel.app/tree-felling" },
    { "@type": "Service", "serviceType": "Swimming Pool Demolition", "description": "Safe and affordable swimming pool demolition in Gauteng, including rubble removal and site preparation for landscaping or new builds.", "provider": { "@type": "Organization", "name": "Apex Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" }, "url": "https://apex-demolitions-website.vercel.app/swimming-pool-demolition" },
    { "@type": "Service", "serviceType": "Plant Hire", "description": "Affordable and reliable TLB and Bobcat hire with trained operators for excavation, trenching, and site preparation across Johannesburg.", "provider": { "@type": "Organization", "name": "Apex Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Johannesburg" }, "url": "https://apex-demolitions-website.vercel.app/plant-hire" }
];

const testimonials = [
    { quote: "Apex Demolitions handled our site professionally and left it spotless. Highly recommended for any project in Johannesburg!", name: "Lindiwe M., Johannesburg", avatarUrl: "https://firebasestorage.googleapis.com/v0/b/siya-demolitions-projects.firebasestorage.app/o/lindiwe_cropped.jpg?alt=media&token=0cdacf1a-2277-4232-8ffb-023b86338945" },
    { quote: "Fast, reliable, and very professional. They cleared our rubble in record time in Pretoria. Will definitely use them again.", name: "John D., Pretoria", avatarUrl: "https://firebasestorage.googleapis.com/v0/b/siya-demolitions-projects.firebasestorage.app/o/John%20D%20Pretoria%20%20(1).jpg?alt=media&token=57eb9664-e323-465a-b761-cc4bd85027db" },
    { quote: "The team was fantastic. They took down an old structure for us safely and efficiently in Sandton. Great service all around.", name: "Sarah P., Sandton", avatarUrl: "https://firebasestorage.googleapis.com/v0/b/siya-demolitions-projects.firebasestorage.app/o/Sarah%20P%20%20PNG.jpg?alt=media&token=544db08b-c42f-4992-8c96-f8054b32cd2d" }
];

const faqs = [
    { question: "How quickly can you clear a site in Johannesburg?", "acceptedAnswer": { "@type": "Answer", "text": "For most standard rubble removal and site cleaning projects in Johannesburg, we can typically offer same-day or next-day service. Our locally-based teams across Gauteng, including Sandton, Randburg, and the East Rand, allow for rapid dispatch. The exact timing depends on the scale of the job and our schedule, but we prioritize urgent requests to prevent delays to your project. Complex demolitions require more planning for permits and safety, but the cleanup phase is always executed with maximum efficiency. Call us directly for the fastest response." } },
    { question: "Are your demolition and site clearing teams insured and certified?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, absolutely. Apex Demolitions Projects is a fully licensed and insured company. We carry comprehensive public liability insurance to protect your property, our team, and the public. Our operators are certified and trained to adhere to the highest safety standards, including the Occupational Health and Safety (OHS) Act. We are committed to full compliance with all City of Johannesburg municipal bylaws, ensuring every project we undertake is managed professionally and responsibly. We provide all compliance documentation upon request for your peace of mind." } },
    { question: "Do you clean up the site after a demolition or rubble removal?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, complete site cleanup is a core part of our service promise. Our service is not finished until your site is left clean, safe, and ready for the next phase of your project. After any demolition or rubble removal, our teams perform a thorough site cleanup, which includes removing all remaining debris, sweeping hard surfaces, and ensuring no hazards are left behind. Our goal is to provide a true end-to-end solution, saving you the time and expense of hiring a separate cleanup crew. This commitment to a spotless finish is why contractors and homeowners across Johannesburg trust us." } },
    { question: "How much does demolition cost in Johannesburg?", "acceptedAnswer": { "@type": "Answer", "text": "Demolition costs in Johannesburg are based on the structure's size, materials (e.g., brick vs. concrete), and site accessibility. A small residential wall will be much cheaper than a full house demolition. We provide free, on-site assessments to give you a detailed, fixed-price quote with no hidden fees." } },
    { question: "What are your rubble removal prices?", "acceptedAnswer": { "@type": "Answer", "text": "Our rubble removal prices are highly competitive and based on the volume of debris (per truckload) and the type of material. We offer free quotes so you know the cost upfront. For a quick estimate, you can also send us a photo of the rubble pile on WhatsApp." } },
    { question: "How long does a demolition project take?", "acceptedAnswer": { "@type": "Answer", "text": "The timeline varies. A small demolition might take a few hours, while a full house demolition can take 2-5 days, including rubble removal. We provide a clear project timeline with every quote so you can plan accordingly." } },
    { question: "Do I need a permit for demolition in Johannesburg?", "acceptedAnswer": { "@type": "Answer", "text": "For most structural demolitions, yes, a permit from the City of Johannesburg is required to ensure safety and compliance. As part of our professional service, we can guide you through and assist with the entire permit application process." } },
    { question: "Do you offer same-day rubble removal?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer same-day rubble removal in many Johannesburg suburbs, subject to our schedule and truck availability. We prioritize urgent requests to help keep your site safe and clear. Please call us directly for the fastest service." } }
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
    const cleaningImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const treeImage = PlaceHolderImages.find(p => p.id === 'treeFelling');
    const poolImage = PlaceHolderImages.find(p => p.id === 'poolDemoWork');
    const plantImage = PlaceHolderImages.find(p => p.id === 'plantHireTlb');
    const safetyImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const processImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchema) }} />

        {/* Hero Section */}
        <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white">
            {heroImage && <Image src={heroImage.imageUrl} alt={heroImage.description} data-ai-hint={heroImage.imageHint} fill className="object-cover" priority />}
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-4">
                      <a href="tel:0784292760" className="inline-flex items-center gap-2 bg-accent/20 border border-accent/50 text-accent-foreground px-4 py-2 rounded-full hover:bg-accent/30 transition-colors">
                        <Phone className="h-5 w-5 text-accent" />
                        <span className="font-semibold text-white">Call Us for a Free Quote: 078 429 2760</span>
                      </a>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Demolition & Rubble Removal Johannesburg Experts</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
                      Apex Demolitions Projects: Your trusted, licensed partner for demolition, rubble removal, site cleaning, and tree felling in Johannesburg and across Gauteng.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <a href="tel:0784292760"><Phone /> Speak to an Expert Now</a>
                        </Button>
                        <Button size="lg" variant="secondary" asChild>
                            <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                WhatsApp for a Quote
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
        
        {/* SEO Intro Section */}
        <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                <p className="text-lg text-muted-foreground">
                    As Johannesburg's top-rated demolition and rubble removal specialists, we provide fast, safe, and fully insured services across the entire city. From large-scale commercial <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition in Johannesburg</Link> central to residential <Link href="/site-cleaning" className="text-primary hover:underline">site clearing in Sandton</Link>, and urgent <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal in Randburg</Link>, <Link href="/demolition-midrand" className="text-primary hover:underline">Midrand</Link>, and <Link href="/demolition-roodepoort" className="text-primary hover:underline">Roodepoort</Link>, our expert teams are equipped for any project. We are your trusted partner for creating a clean, safe, and build-ready site.
                </p>
            </div>
        </section>

        {/* Highlights Bar */}
        <section className="py-8 bg-card border-y">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex items-center justify-center gap-4">
                        <Award className="h-10 w-10 text-accent flex-shrink-0" />
                        <div><p className="font-bold text-foreground">20+ Years Experience</p><p className="text-muted-foreground text-sm">Serving Gauteng Since 2000</p></div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <ShieldCheck className="h-10 w-10 text-accent flex-shrink-0" />
                        <div><p className="font-bold text-foreground">Licensed & Insured</p><p className="text-muted-foreground text-sm">Full Compliance & Peace of Mind</p></div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <Users className="h-10 w-10 text-accent flex-shrink-0" />
                        <div><p className="font-bold text-foreground">500+ Projects Completed</p><p className="text-muted-foreground text-sm">Residential & Commercial</p></div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* New Long-Form Section */}
        <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Rubble Removal & Demolition Services in Johannesburg</h2>
                <div className="prose prose-lg max-w-none mx-auto mt-6 text-muted-foreground">
                    <p>At Apex Demolitions, we are Johannesburg's premier experts in transforming spaces through professional demolition and rubble removal. Our core mission is to provide safe, efficient, and reliable services that pave the way for new developments across Gauteng. Whether you're undertaking a major construction project in the heart of Sandton or renovating a home in the leafy suburbs of Randburg, our team has the experience and equipment to manage the entire process from start to finish.</p>
                    <p>Our comprehensive **demolition Johannesburg** services cater to residential, commercial, and industrial projects. We handle everything from precise interior strip-outs to full-scale building demolitions. In parallel, our **rubble removal Johannesburg** division ensures that every site is left immaculately clean. A clean worksite is a safe worksite, and our fast-response teams are active daily in areas like Roodepoort and Midrand, clearing construction debris, soil, and garden refuse to keep projects on schedule. Effective **site clearing in Johannesburg** is not just about removing waste; it's about preparing a stable, hazard-free foundation for the future. We combine these services to offer a seamless, one-stop solution, eliminating the need for multiple contractors and ensuring your project transitions smoothly from demolition to the next phase of construction.</p>
                    <p>Understanding the local landscape is key. From navigating the dense commercial hubs of Sandton to managing residential projects in Randburg, we bring localized expertise that makes a tangible difference. Our commitment to safety, compliance with all municipal bylaws, and eco-friendly disposal practices makes us the trusted partner for Joburg's most demanding projects.</p>
                </div>
            </div>
        </section>

        {/* Core Services Section (existing) */}
        <section id="services" className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Comprehensive Site Services for Gauteng</h2>
                    <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">One team for all your demolition, clearing, and site preparation needs. We handle every step, from initial takedown to final cleanup, across Johannesburg and beyond.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card className="flex flex-col">
                        {demolitionImage && <div className="relative aspect-video"><Image src={demolitionImage.imageUrl} alt={demolitionImage.description} data-ai-hint={demolitionImage.imageHint} fill className="object-cover rounded-t-lg" /></div>}
                        <CardHeader><CardTitle className="flex items-center gap-2"><HardHat />Licensed Demolition Contractors</CardTitle></CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground">As expert <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition contractors in Johannesburg</Link>, we safely execute residential, commercial, and industrial projects. From house demolition in Sandton to large-scale site clearing in Germiston, our licensed team ensures every project is completed safely and in compliance with all regulations.</p>
                        </CardContent>
                        <div className="p-6 pt-0"><Button variant="outline" className="w-full" asChild><Link href="/demolition-johannesburg">Explore Demolition Services</Link></Button></div>
                    </Card>
                    <Card className="flex flex-col">
                        {rubbleImage && <div className="relative aspect-video"><Image src={rubbleImage.imageUrl} alt={rubbleImage.description} data-ai-hint={rubbleImage.imageHint} fill className="object-cover rounded-t-lg" /></div>}
                        <CardHeader><CardTitle className="flex items-center gap-2"><Trash2 />Fast Rubble Removal</CardTitle></CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground">Our <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal Johannesburg</Link> service offers a rapid solution for clearing construction debris, soil, and garden refuse. We provide same-day service in many areas like Randburg and Roodepoort, ensuring your site stays clean, safe, and productive. We handle all loading and legal disposal.</p>
                        </CardContent>
                         <div className="p-6 pt-0"><Button variant="outline" className="w-full" asChild><Link href="/rubble-removal-johannesburg">Get a Rubble Removal Quote</Link></Button></div>
                    </Card>
                    <Card className="flex flex-col">
                        {cleaningImage && <div className="relative aspect-video"><Image src={cleaningImage.imageUrl} alt={cleaningImage.description} data-ai-hint={cleaningImage.imageHint} fill className="object-cover rounded-t-lg" /></div>}
                        <CardHeader><CardTitle className="flex items-center gap-2"><Sparkles />Professional Site Cleaning</CardTitle></CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground">Our <Link href="/site-cleaning" className="text-primary hover:underline">site cleaning services in Johannesburg</Link> go beyond rubble. We provide comprehensive cleanups after construction or demolition, ensuring your property is free of all waste and hazards. Ideal for pre-handover cleaning on projects in Midrand or post-renovation tidy-ups in Alberton.</p>
                        </CardContent>
                         <div className="p-6 pt-0"><Button variant="outline" className="w-full" asChild><Link href="/site-cleaning">Learn About Site Cleaning</Link></Button></div>
                    </Card>
                    <Card className="flex flex-col">
                        {treeImage && <div className="relative aspect-video"><Image src={treeImage.imageUrl} alt={treeImage.description} data-ai-hint={treeImage.imageHint} fill className="object-cover rounded-t-lg" /></div>}
                        <CardHeader><CardTitle className="flex items-center gap-2"><Axe />Safe Tree Felling</CardTitle></CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground">Need safe and professional <Link href="/tree-felling-johannesburg" className="text-primary hover:underline">tree felling in Johannesburg</Link>? Our insured teams handle hazardous, overgrown, or unwanted trees in tight spaces, especially in leafy suburbs like Fourways and Edenvale. We perform sectional dismantling to protect your property and provide full cleanup services.</p>
                        </CardContent>
                         <div className="p-6 pt-0"><Button variant="outline" className="w-full" asChild><Link href="/tree-felling">Explore Tree Felling</Link></Button></div>
                    </Card>
                    <Card className="flex flex-col">
                        {poolImage && <div className="relative aspect-video"><Image src={poolImage.imageUrl} alt={poolImage.description} data-ai-hint={poolImage.imageHint} fill className="object-cover rounded-t-lg" /></div>}
                        <CardHeader><CardTitle className="flex items-center gap-2"><Waves />Swimming Pool Demolition</CardTitle></CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground">Reclaim your yard space with our expert <Link href="/swimming-pool-demolition-johannesburg" className="text-primary hover:underline">swimming pool demolition</Link> service. We manage the entire process, from breaking up concrete or fibreglass shells to removing all debris and backfilling the area. It’s a fast, effective way to transform your property in any Johannesburg suburb.</p>
                        </CardContent>
                         <div className="p-6 pt-0"><Button variant="outline" className="w-full" asChild><Link href="/swimming-pool-demolition-johannesburg">Learn About Pool Removal</Link></Button></div>
                    </Card>
                    <Card className="flex flex-col">
                        {plantImage && <div className="relative aspect-video"><Image src={plantImage.imageUrl} alt={plantImage.description} data-ai-hint={plantImage.imageHint} fill className="object-cover rounded-t-lg" /></div>}
                        <CardHeader><CardTitle className="flex items-center gap-2"><Tractor />Plant & Bobcat Hire</CardTitle></CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground">Our <Link href="/plant-hire-johannesburg" className="text-primary hover:underline">plant hire service in Johannesburg</Link> provides TLBs and Bobcats with certified operators for excavation, trenching, and site preparation. Ideal for builders and landscapers in areas like Kempton Park or Boksburg needing reliable machinery for projects of any scale. Flexible short and long-term hire available.</p>
                        </CardContent>
                         <div className="p-6 pt-0"><Button variant="outline" className="w-full" asChild><Link href="/plant-hire">View Plant Hire Options</Link></Button></div>
                    </Card>
                </div>
            </div>
        </section>

        {/* New "Why Choose Us" Section */}
        <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Why Johannesburg Clients Choose Us</h2>
                <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground">We are built on a foundation of trust, reliability, and professionalism. Our goal is to provide a seamless service that gives you complete peace of mind.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-5xl mx-auto">
                    <div className="text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><ShieldCheck className="h-6 w-6 text-primary" /></div>
                        <h3 className="mt-4 text-lg font-semibold">Licensed & Insured</h3>
                        <p className="mt-1 text-sm text-muted-foreground">We are fully licensed waste carriers and carry comprehensive public liability insurance for your protection.</p>
                    </div>
                    <div className="text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><Wrench className="h-6 w-6 text-primary" /></div>
                        <h3 className="mt-4 text-lg font-semibold">Fast Response</h3>
                        <p className="mt-1 text-sm text-muted-foreground">With teams across Johannesburg, we offer same-day or next-day service for many rubble removal jobs.</p>
                    </div>
                    <div className="text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><Users className="h-6 w-6 text-primary" /></div>
                        <h3 className="mt-4 text-lg font-semibold">Local, Expert Team</h3>
                        <p className="mt-1 text-sm text-muted-foreground">Our experienced, local teams understand the specific needs of different Johannesburg suburbs.</p>
                    </div>
                    <div className="text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><Quote className="h-6 w-6 text-primary" /></div>
                        <h3 className="mt-4 text-lg font-semibold">Affordable Pricing</h3>
                        <p className="mt-1 text-sm text-muted-foreground">We provide competitive, transparent, and no-obligation quotes with no hidden costs.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* New "Our Process" Section */}
        <section className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Demolition & Rubble Removal Process</h2>
                    <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">A simple, transparent, and professional process from start to finish.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
                    <Card className="text-center"><CardHeader><CardTitle>Step 1: Free Site Inspection</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We visit your site to assess the job and provide a free, detailed, no-obligation quote.</p></CardContent></Card>
                    <Card className="text-center"><CardHeader><CardTitle>Step 2: Planning & Compliance</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We handle all necessary planning and ensure the project complies with all municipal bylaws.</p></CardContent></Card>
                    <Card className="text-center"><CardHeader><CardTitle>Step 3: Demolition & Removal</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Our expert team carries out the demolition and rubble removal safely and efficiently.</p></CardContent></Card>
                    <Card className="text-center"><CardHeader><CardTitle>Step 4: Final Cleanup</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We perform a thorough site cleanup, leaving your property spotless and ready for the next phase.</p></CardContent></Card>
                </div>
            </div>
        </section>

        {/* New Recent Projects Section */}
        <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Projects in Johannesburg</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>Full House Demolition</CardTitle>
                            <p className="text-sm text-muted-foreground">Sandton</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">Successfully completed a full demolition of a 4-bedroom house to clear the plot for a new modern home. The project was finished in 4 days, including full rubble removal and site leveling, ahead of schedule.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Commercial Rubble Removal</CardTitle>
                            <p className="text-sm text-muted-foreground">Randburg</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">Provided ongoing rubble removal for a commercial renovation project. Our team ensured the site remained safe and clear of debris, allowing other trades to work efficiently without delays. The client was impressed with our reliability.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Swimming Pool Removal</CardTitle>
                            <p className="text-sm text-muted-foreground">Roodepoort</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">Removed an old, leaking concrete swimming pool, reclaiming over 50 square meters of garden space for the family. The area was backfilled, compacted, and left perfectly level for a new lawn to be planted.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        {/* New Areas We Serve Section */}
        <section className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Areas We Serve in Johannesburg</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-bold text-xl mb-2">Sandton</h3>
                        <p className="text-muted-foreground">We provide elite **demolition services in Sandton**, specializing in luxury home demolitions and discreet **rubble removal in Sandton**'s exclusive estates.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">Randburg</h3>
                        <p className="text-muted-foreground">As trusted **demolition contractors in Randburg**, we offer fast and affordable house demolition and reliable **rubble removal Randburg** residents can count on.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">Midrand</h3>
                        <p className="text-muted-foreground">We support Midrand's rapid growth with large-scale **site clearing** and **demolition services**, along with scheduled **rubble removal in Midrand** for developers.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">Roodepoort</h3>
                        <p className="text-muted-foreground">Our teams cover the West Rand, offering comprehensive **demolition in Roodepoort** and fast **rubble removal Roodepoort** services for residential and commercial clients.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">Soweto</h3>
                        <p className="text-muted-foreground">We are proud to offer affordable community-focused **demolition and rubble removal services in Soweto**, helping homeowners and small businesses grow.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">Alberton & Germiston</h3>
                        <p className="text-muted-foreground">As East Rand specialists, we handle everything from industrial **demolition in Germiston** to residential **rubble removal in Alberton** with local expertise.</p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Testimonials Section (existing) */}
        <section id="testimonials" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">What Our Gauteng Clients Say</h2>
                    <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">Real feedback from satisfied customers across Johannesburg and Pretoria.</p>
                </div>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.name} className="bg-card p-6 rounded-lg shadow-md flex flex-col">
                            <Quote className="w-8 h-8 text-accent mb-4" />
                            <p className="text-muted-foreground mb-4 flex-grow">"{testimonial.quote}"</p>
                            <div className="flex items-center gap-3 self-end mt-4">
                                <p className="font-semibold text-sm">{testimonial.name}</p>
                                <Avatar className="h-12 w-12"><AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} /><AvatarFallback><User /></AvatarFallback></Avatar>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Contact Form Section (existing but now on homepage) */}
        <section id="contact-form" className="py-12 md:py-20 bg-card text-center">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold">Get a Free, No-Obligation Quote Today</h2>
                <p className="mt-2 max-w-xl mx-auto text-muted-foreground">Fill out the form below or call us on 078 429 2760 for a fast response.</p>
                <HomePageContactForm />
            </div>
        </section>
        
        {/* Expanded FAQ Section */}
        <section id="faq" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.acceptedAnswer.text}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
        
        {/* Final CTA (existing) */}
        <section id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
             <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Start Your Project with Johannesburg's Top-Rated Team</h2>
                <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">
                    Get a free, no-obligation quote today. Our team is ready to provide a fast, professional, and fully insured service for your demolition, rubble removal, or site clearing project anywhere in Gauteng.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                        <a href="tel:0784292760"><Phone /> Call for an Instant Quote</a>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                         <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp Us</a>
                    </Button>
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="/contact"><Mail /> Request a Detailed Quote</Link>
                    </Button>
                </div>
             </div>
        </section>
    </>
  );
}
