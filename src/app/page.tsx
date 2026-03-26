

import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check, Phone, Wrench, Trash2, Sparkles, Axe, Building, Award, Users, MapPin, ShieldCheck, Quote, User, Waves, Tractor, HardHat, Mail, MessageSquare, ArrowRight, Clock } from "lucide-react";
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HomePageContactForm } from "@/components/home/home-page-contact-form";

export const metadata: Metadata = {
    title: {
        absolute: "Demolition & Rubble Removal Johannesburg Experts | Apex",
    },
    description: "Apex Demolitions offers licensed demolition, rubble removal, site cleaning, tree felling & plant hire in Johannesburg. Trusted experts for residential & commercial projects. Get a free quote.",
};

const organizationSchema = {
    "@type": "LocalBusiness",
    "name": "Apex Demolitions Projects",
    "image": "https://images.unsplash.com/photo-1584460715199-eebff7891315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGVtb2xpdC0builduing%7C%27fen%20oM%7C%7C%7CMTM6NzY%3D&ixlib=rb-4.1.0&q=80&w=1080",
    "@id": "https://apex-demolitions-website.vercel.app/",
    "url": "https://apex-demolitions-website.vercel.app/",
    "telephone": "+27784292760",
    "priceRange": "$$",
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
    { "@type": "Service", "serviceType": "Demolition Services", "description": "Expert residential and commercial demolition across Gauteng, handled with precision to ensure a safe and compliant site ready for development.", "provider": { "@type": "Organization", "name": "Apex Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" }, "url": "https://apex-demolitions-website.vercel.app/demolition-johannesburg" },
    { "@type": "Service", "serviceType": "Rubble Removal", "description": "Fast and reliable rubble removal in Gauteng. We clear all construction debris to ensure a spotless, hazard-free job site.", "provider": { "@type": "Organization", "name": "Apex Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" }, "url": "https://apex-demolitions-website.vercel.app/rubble-removal-johannesburg" },
    { "@type": "Service", "serviceType": "Site Cleaning", "description": "Thorough site cleaning to prepare your Gauteng property for its next phase, ensuring you're ready for excavation or building.", "provider": { "@type": "Organization", "name": "Apex Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" }, "url": "https://apex-demolitions-website.vercel.app/site-cleaning" },
    { "@type": "Service", "serviceType": "Tree Felling", "description": "Safe and professional tree felling in Gauteng. We efficiently remove hazardous or unwanted trees to protect your property and clear land.", "provider": { "@type": "Organization", "name": "Apex Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" }, "url": "https://apex-demolitions-website.vercel.app/tree-felling" },
    { "@type": "Service", "serviceType": "Swimming Pool Demolition", "description": "Safe and affordable swimming pool demolition in Gauteng, including rubble removal and site preparation for landscaping or new builds.", "provider": { "@type": "Organization", "name": "Apex Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" }, "url": "https://apex-demolitions-website.vercel.app/swimming-pool-demolition" },
    { "@type": "Service", "serviceType": "Plant Hire", "description": "Affordable and reliable TLB and Bobcat hire with trained operators for excavation, trenching, and site preparation across Johannesburg.", "provider": { "@type": "Organization", "name": "Apex Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Johannesburg" }, "url": "https://apex-demolitions-website.vercel.app/plant-hire" }
];

const testimonials = [
    { quote: "Apex Demolitions handled the pool demolition at our Sandton property. They were professional, efficient, and left the site spotless. Highly recommended!", name: "Lindiwe M., Sandton", avatarUrl: "https://firebasestorage.googleapis.com/v0/b/siya-demolitions-projects.firebasestorage.app/o/lindiwe_cropped.jpg?alt=media&token=0cdacf1a-2277-4232-8ffb-023b86338945" },
    { quote: "Fast, reliable, and very professional. They cleared our rubble in record time in Pretoria. Will definitely use them again for any job.", name: "John D., Pretoria", avatarUrl: "https://firebasestorage.googleapis.com/v0/b/siya-demolitions-projects.firebasestorage.app/o/John%20D%20Pretoria%20%20(1).jpg?alt=media&token=57eb9664-e323-465a-b761-cc4bd85027db" },
    { quote: "The team was fantastic. They took down an old structure for us in Randburg safely and efficiently. Great service all around.", name: "Sarah P., Randburg", avatarUrl: "https://firebasestorage.googleapis.com/v0/b/siya-demolitions-projects.firebasestorage.app/o/Sarah%20P%20%20PNG.jpg?alt=media&token=544db08b-c42f-4992-8c96-f8054b32cd2d" }
];

const faqs = [
    { question: "How much does demolition cost in Johannesburg?", "acceptedAnswer": { "@type": "Answer", "text": "Demolition costs in Johannesburg depend on the structure's size, materials, and site accessibility. A small wall demolition will be much cheaper than a full house demolition, which can range from R20,000 to R60,000+. Factors like reinforced concrete or difficult access in dense suburbs increase the cost. We provide free, on-site assessments to give you a detailed, fixed-price quote with no hidden fees, ensuring you get an affordable and transparent price for your demolition project." } },
    { question: "What are your rubble removal prices?", "acceptedAnswer": { "@type": "Answer", "text": "Our rubble removal prices in Johannesburg are highly competitive, based on volume (per truckload) and material type. A small load of garden refuse might start from R550, while a full 4-ton truck of heavy builders rubble costs more. We offer free quotes, often via WhatsApp photos, so you know the cost upfront. This makes us a popular choice for anyone searching for 'rubble removal near me' who needs a quick, clear price without surprises." } },
    { question: "How long does a demolition project take?", "acceptedAnswer": { "@type": "Answer", "text": "The timeline for a demolition in Johannesburg varies. A small job like a wall removal might take a few hours. A full house demolition typically takes 2-5 days, including complete rubble removal. A more complex swimming pool demolition can take a similar amount of time. We always provide a clear, realistic project timeline with every quote so you can plan your construction or landscaping schedule accordingly. Our efficiency is a key reason clients choose us." } },
    { question: "Do I need a permit for demolition in Johannesburg?", "acceptedAnswer": { "@type": "Answer", "text": "For most structural demolitions in Johannesburg, including pools and buildings, a permit from the municipality is required to ensure safety and compliance. As part of our professional service, we guide our clients through this process and can assist with the permit application. This protects you from potential fines and ensures your project is handled legally from start to finish. For minor work, a permit may not be needed, which we can confirm during our free site assessment." } },
    { question: "Do you offer same-day rubble removal?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer same-day rubble removal in many Johannesburg suburbs, subject to our schedule. We understand the urgency when a site is cluttered and unsafe, which is why we prioritize these requests. For the fastest service when you need 'rubble removal near me' urgently, it's best to call us directly. Our widespread local teams allow us to provide a rapid response for most urgent cleanups, helping you keep your project on schedule without delays." } },
    { question: "How quickly can you clear a site in Johannesburg?", "acceptedAnswer": { "@type": "Answer", "text": "For most standard rubble removal and site cleaning projects, we typically offer same-day or next-day service in Johannesburg. Our locally-based teams across Gauteng allow for rapid dispatch. The exact timing depends on the job scale and our schedule, but we prioritize urgent requests to prevent delays. Complex demolitions require more planning, but the cleanup phase is always executed with maximum efficiency. Call us directly for the fastest response." } },
    { question: "Are your teams insured and certified?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, absolutely. Apex Demolitions Projects is a fully licensed and insured company. We carry comprehensive public liability insurance to protect your property, our team, and the public. Our operators are certified and trained to adhere to the highest safety standards, including the Occupational Health and Safety (OHS) Act. We are committed to full compliance with all City of Johannesburg bylaws, ensuring every project is managed professionally and responsibly." } },
    { question: "Do you clean up the site after a job?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, complete site cleanup is a core part of our service promise. Our service is not finished until your site is left clean, safe, and ready for the next phase. After any demolition or rubble removal, our teams perform a thorough site cleanup, which includes removing all remaining debris and sweeping hard surfaces. Our goal is to provide a true end-to-end solution, saving you the hassle and expense of hiring a separate cleanup crew. This commitment to a spotless finish is why contractors and homeowners across Johannesburg trust us." } },
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
                        <span className="font-semibold text-white">Call for a Free Quote: 078 429 2760</span>
                      </a>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Demolition & Rubble Removal Johannesburg Experts</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
                      Apex Demolitions Projects: Your trusted, licensed partner for demolition, rubble removal, site cleaning, and tree felling in Johannesburg and across Gauteng. Same-day service available.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <a href="tel:0784292760"><Phone /> Call for Immediate Service</a>
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
                 <h2 className="text-3xl md:text-4xl font-bold">Your Trusted Demolition & Rubble Removal Partner in Johannesburg</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    As Johannesburg's top-rated demolition and rubble removal specialists, we provide fast, safe, and fully insured services across the entire city. From large-scale commercial <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition in Johannesburg</Link> central to residential <Link href="/site-cleaning" className="text-primary hover:underline">site clearing in Sandton</Link>, and urgent <Link href="/same-day-rubble-removal-johannesburg" className="text-primary hover:underline">same-day rubble removal</Link> in Randburg, Midrand, and Roodepoort, our expert teams are equipped for any project. We are your trusted partner for creating a clean, safe, and build-ready site.
                </p>
            </div>
        </section>

        {/* Why Choose Us Section - UPGRADED */}
        <section className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Why Johannesburg Clients Choose Us</h2>
                <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground">We are built on a foundation of trust, reliability, and professionalism. Our goal is to provide a seamless service that gives you complete peace of mind, from the first call to the final cleanup.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
                    <div className="text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><Clock className="h-6 w-6 text-primary" /></div>
                        <h3 className="mt-4 text-lg font-semibold">Fast, Same-Day Service</h3>
                        <p className="mt-1 text-sm text-muted-foreground">We have teams across Johannesburg, enabling us to offer a rapid response and <Link href="/same-day-rubble-removal-johannesburg" className="text-primary hover:underline">same-day service</Link> for most urgent jobs.</p>
                    </div>
                    <div className="text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><Tractor className="h-6 w-6 text-primary" /></div>
                        <h3 className="mt-4 text-lg font-semibold">Modern Equipment</h3>
                        <p className="mt-1 text-sm text-muted-foreground">We use a fleet of well-maintained tipper trucks, Bobcats, and TLBs to handle any job, big or small, safely and efficiently.</p>
                    </div>
                    <div className="text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><ShieldCheck className="h-6 w-6 text-primary" /></div>
                        <h3 className="mt-4 text-lg font-semibold">Licensed & Insured</h3>
                        <p className="mt-1 text-sm text-muted-foreground">We are fully licensed waste carriers and carry comprehensive public liability insurance for your complete protection and peace of mind.</p>
                    </div>
                    <div className="text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><Award className="h-6 w-6 text-primary" /></div>
                        <h3 className="mt-4 text-lg font-semibold">Decades of Local Experience</h3>
                        <p className="mt-1 text-sm text-muted-foreground">With over 20 years serving Johannesburg, our expert teams understand the local landscape, from Sandton estates to industrial sites in the East Rand.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Areas We Serve Section - UPGRADED */}
        <section id="areas-we-serve" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Serving Every Corner of Johannesburg</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div className="bg-card p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-xl mb-2">North Johannesburg: Sandton, Randburg, Midrand & Fourways</h3>
                        <p className="text-muted-foreground text-sm">We provide elite, discreet services for Johannesburg's northern suburbs. Our teams are experts in navigating the secure estates of <Link href="/rubble-removal-sandton" className="text-primary hover:underline">Sandton</Link> and <Link href="/demolition-bryanston" className="text-primary hover:underline">Bryanston</Link>, providing fast cleanups for high-end renovations. For the diverse properties in <Link href="/rubble-removal-randburg" className="text-primary hover:underline">Randburg</Link> and the booming developments in <Link href="/rubble-removal-midrand" className="text-primary hover:underline">Midrand</Link> and <Link href="/rubble-removal-fourways" className="text-primary hover:underline">Fourways</Link>, our reliable service keeps projects on schedule.</p>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-xl mb-2">East Rand (Ekurhuleni)</h3>
                        <p className="text-muted-foreground text-sm">As East Rand specialists, we provide robust industrial and residential services. We are the go-to contractors for projects in <Link href="/demolition-germiston" className="text-primary hover:underline">Germiston</Link>, <Link href="/rubble-removal-boksburg" className="text-primary hover:underline">Boksburg</Link>, <Link href="/demolition-alberton" className="text-primary hover:underline">Alberton</Link>, <Link href="/rubble-removal-bedfordview" className="text-primary hover:underline">Bedfordview</Link>, and <Link href="/demolition-edenvale" className="text-primary hover:underline">Edenvale</Link>, where our local teams ensure a fast response.</p>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-xl mb-2">West Rand & Johannesburg South</h3>
                        <p className="text-muted-foreground text-sm">Our service extends throughout the West Rand and the South. We offer affordable and dependable <Link href="/demolition-roodepoort" className="text-primary hover:underline">demolition in Roodepoort</Link> and expert <Link href="/rubble-removal-roodepoort" className="text-primary hover:underline">rubble removal</Link>. In Johannesburg South, we provide a vital service for community projects and homeowners in areas like <Link href="/rubble-removal-soweto" className="text-primary hover:underline">Soweto</Link>.</p>
                    </div>
                     <div className="bg-card p-6 rounded-lg shadow-md flex flex-col justify-center items-center text-center">
                        <h3 className="font-bold text-xl mb-2">Looking for service in your suburb?</h3>
                        <p className="text-muted-foreground text-sm mb-4">We cover all of Gauteng. Explore our dedicated local pages to find the team nearest to you.</p>
                         <Button asChild><Link href="/demolition-services-johannesburg">View All Service Areas <ArrowRight className="ml-2" /></Link></Button>
                    </div>
                </div>
            </div>
        </section>

        <section id="why-fast-removal-matters" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Why Fast Rubble Removal Matters on Johannesburg Sites</h2>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-4"><Check className="text-accent h-8 w-8 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-xl">Enhances Site Safety</h3><p className="text-muted-foreground">Piles of rubble, sharp materials, and unstable debris are major safety hazards. Prompt builders rubble removal eliminates trip hazards, prevents injuries, and creates a safer environment for your family or construction crew. A clean site is a safe site.</p></div></div>
                    <div className="flex items-start gap-4"><Check className="text-accent h-8 w-8 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-xl">Boosts Project Productivity</h3><p className="text-muted-foreground">Clutter and debris get in the way, slowing down other trades and hindering progress. Our same-day rubble removal service clears the way for electricians, plumbers, and painters to do their jobs efficiently, keeping your project on schedule and on budget.</p></div></div>
                    <div className="flex items-start gap-4"><Check className="text-accent h-8 w-8 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-xl">Ensures Legal Compliance</h3><p className="text-muted-foreground">Illegal dumping is a serious offence in Johannesburg with heavy fines. As a licensed waste carrier, we guarantee that all your rubble is transported and disposed of at registered facilities, providing you with full legal compliance and peace of mind.</p></div></div>
                    <div className="flex items-start gap-4"><Check className="text-accent h-8 w-8 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-xl">Maintains Professionalism</h3><p className="text-muted-foreground">A tidy worksite reflects professionalism and respect for your property and the surrounding neighbourhood. A clean site maintains good relations with neighbours and presents a better image for your business, which is crucial in communities from Sandton to Soweto.</p></div></div>
                </div>
            </div>
        </section>
        
        {/* Recent Projects Section - UPGRADED */}
        <section className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Projects in Johannesburg</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>Renovation Rubble Removal</CardTitle>
                            <p className="text-sm text-muted-foreground">Sandton</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">A client in a secure Sandton estate required urgent removal of renovation debris (tiles, bricks, drywall). Our team responded the same day, carefully loading and removing 3 truckloads without damaging the new paving. The site was left spotless, allowing painters to start the next day.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Garden & Soil Removal</CardTitle>
                            <p className="text-sm text-muted-foreground">Randburg</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">After a major landscaping project, a homeowner in Blairgowrie was left with several large piles of soil and tree branches. Our team arrived the next morning and cleared two full truckloads, transforming the messy yard into a clean, usable space.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Builders Rubble Removal</CardTitle>
                            <p className="text-sm text-muted-foreground">Midrand</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">We provided scheduled weekly rubble removal for a contractor building new homes in a Midrand development. Our reliable service kept the site safe and clear of builders rubble, ensuring the project ran smoothly and on schedule without any delays caused by waste buildup.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        {/* Testimonials Section */}
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

        {/* Contact Form Section */}
        <section id="contact-form" className="py-12 md:py-20 bg-background text-center">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold">Get a Free, No-Obligation Quote Today</h2>
                <p className="mt-2 max-w-xl mx-auto text-muted-foreground">Fill out the form below or call us on 078 429 2760 for a fast response. Let's get your Johannesburg site cleared.</p>
                <HomePageContactForm />
            </div>
        </section>
        
        {/* Expanded FAQ Section - UPGRADED */}
        <section id="faq" className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base">
                          <div dangerouslySetInnerHTML={{ __html: faq.acceptedAnswer.text }} />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
        
        {/* Final CTA */}
        <section id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
             <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Start Your Project with Johannesburg's Top-Rated Team</h2>
                <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">
                    Get a free quote today for your demolition, rubble removal, or site clearing project anywhere in Gauteng. Our team is ready to provide a fast, professional, and fully insured service.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                        <a href="tel:0784292760"><Phone /> Call for a Fast Quote</a>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                         <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp Us Now</a>
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
