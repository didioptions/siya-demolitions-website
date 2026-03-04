
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check, Phone, Wrench, Trash2, Sparkles, Axe, Building, Award, Users, MapPin, ShieldCheck, Quote, User, Waves, Tractor, HardHat, Mail, MessageSquare } from "lucide-react";
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: {
        absolute: "Johannesburg Demolition, Rubble Removal & Site Clearing Experts | SIMA",
    },
    description: "SIMA Demolitions offers licensed demolition, rubble removal, site cleaning, tree felling & plant hire in Johannesburg. Trusted experts for residential & commercial projects. Get a free quote.",
};

const organizationSchema = {
    "@type": "LocalBusiness",
    "name": "SIMA Demolitions Projects",
    "image": "https://images.unsplash.com/photo-1584460715199-eebff7891315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGVtb2xpdGlvbiUyMGJ1aWxkaW5nfGVufDB8fHx8MTc3MDA2NzI2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "@id": "https://siya-demolitions-website--siya-demolitions-projects.europe-west4.hosted.app/",
    "url": "https://siya-demolitions-website--siya-demolitions-projects.europe-west4.hosted.app/",
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
        "https://www.facebook.com/sima.demolitions"
    ]
};

const servicesSchema = [
    { "@type": "Service", "serviceType": "Demolition Services", "description": "Expert residential and commercial demolition across Gauteng, handled with precision to ensure a safe and compliant site ready for development.", "provider": { "@type": "Organization", "name": "SIMA Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" }, "url": "https://siya-demolitions-website--siya-demolitions-projects.europe-west4.hosted.app/demolition-johannesburg" },
    { "@type": "Service", "serviceType": "Rubble Removal", "description": "Fast and reliable rubble removal in Gauteng. We clear all construction debris to ensure a spotless, hazard-free job site.", "provider": { "@type": "Organization", "name": "SIMA Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" }, "url": "https://siya-demolitions-website--siya-demolitions-projects.europe-west4.hosted.app/rubble-removal-johannesburg" },
    { "@type": "Service", "serviceType": "Site Cleaning", "description": "Thorough site cleaning to prepare your Gauteng property for its next phase, ensuring you're ready for excavation or building.", "provider": { "@type": "Organization", "name": "SIMA Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" }, "url": "https://siya-demolitions-website--siya-demolitions-projects.europe-west4.hosted.app/site-cleaning" },
    { "@type": "Service", "serviceType": "Tree Felling", "description": "Safe and professional tree felling in Gauteng. We efficiently remove hazardous or unwanted trees to protect your property and clear land.", "provider": { "@type": "Organization", "name": "SIMA Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" }, "url": "https://siya-demolitions-website--siya-demolitions-projects.europe-west4.hosted.app/tree-felling" },
    { "@type": "Service", "serviceType": "Swimming Pool Demolition", "description": "Safe and affordable swimming pool demolition in Gauteng, including rubble removal and site preparation for landscaping or new builds.", "provider": { "@type": "Organization", "name": "SIMA Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" }, "url": "https://siya-demolitions-website--siya-demolitions-projects.europe-west4.hosted.app/swimming-pool-demolition" },
    { "@type": "Service", "serviceType": "Plant Hire", "description": "Affordable and reliable TLB and Bobcat hire with trained operators for excavation, trenching, and site preparation across Johannesburg.", "provider": { "@type": "Organization", "name": "SIMA Demolitions Projects" }, "areaServed": { "@type": "AdministrativeArea", "name": "Johannesburg" }, "url": "https://siya-demolitions-website--siya-demolitions-projects.europe-west4.hosted.app/plant-hire" }
];

const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": [
        { "@type": "Question", "name": "How quickly can you clear a site in Johannesburg?", "acceptedAnswer": { "@type": "Answer", "text": "For most standard rubble removal and site cleaning projects in Johannesburg, we can typically offer same-day or next-day service. Our locally-based teams across Gauteng, including Sandton, Randburg, and the East Rand, allow for rapid dispatch. The exact timing depends on the scale of the job and our schedule, but we prioritize urgent requests to prevent delays to your project. Complex demolitions require more planning for permits and safety, but the cleanup phase is always executed with maximum efficiency. Call us directly for the fastest response." } },
        { "@type": "Question", "name": "Are your demolition and site clearing teams insured and certified?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, absolutely. SIMA Demolitions Projects is a fully licensed and insured company. We carry comprehensive public liability insurance to protect your property, our team, and the public. Our operators are certified and trained to adhere to the highest safety standards, including the Occupational Health and Safety (OHS) Act. We are committed to full compliance with all City of Johannesburg municipal bylaws, ensuring every project we undertake is managed professionally and responsibly. We provide all compliance documentation upon request for your peace of mind." } },
        { "@type": "Question", "name": "Do you clean up the site after a demolition or rubble removal?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, complete site cleanup is a core part of our service promise. Our service is not finished until your site is left clean, safe, and ready for the next phase of your project. After any demolition or rubble removal, our teams perform a thorough site cleanup, which includes removing all remaining debris, sweeping hard surfaces, and ensuring no hazards are left behind. Our goal is to provide a true end-to-end solution, saving you the time and expense of hiring a separate cleanup crew. This commitment to a spotless finish is why contractors and homeowners across Johannesburg trust us." } }
    ]
};

const allSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    ...servicesSchema,
    faqSchema
  ]
};

const testimonials = [
    { quote: "SIMA Demolitions handled our site professionally and left it spotless. Highly recommended for any project in Johannesburg!", name: "Lindiwe M., Johannesburg", avatarUrl: "https://firebasestorage.googleapis.com/v0/b/siya-demolitions-projects.firebasestorage.app/o/lindiwe_cropped.jpg?alt=media&token=0cdacf1a-2277-4232-8ffb-023b86338945" },
    { quote: "Fast, reliable, and very professional. They cleared our rubble in record time in Pretoria. Will definitely use them again.", name: "John D., Pretoria", avatarUrl: "https://firebasestorage.googleapis.com/v0/b/siya-demolitions-projects.firebasestorage.app/o/John%20D%20Pretoria%20%20(1).jpg?alt=media&token=57eb9664-e323-465a-b761-cc4bd85027db" },
    { quote: "The team was fantastic. They took down an old structure for us safely and efficiently in Sandton. Great service all around.", name: "Sarah P., Sandton", avatarUrl: "https://firebasestorage.googleapis.com/v0/b/siya-demolitions-projects.firebasestorage.app/o/Sarah%20P%20%20PNG.jpg?alt=media&token=544db08b-c42f-4992-8c96-f8054b32cd2d" }
];

const serviceAreas = [ "Johannesburg", "Sandton", "Soweto", "Randburg", "Midrand", "Roodepoort", "Alberton", "Germiston", "Fourways", "Kempton Park", "Edenvale", "Boksburg", "Johannesburg CBD" ];

export default function Home() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'homeHero');
    const demolitionImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const rubbleImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const cleaningImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const treeImage = PlaceHolderImages.find(p => p.id === 'treeFelling');
    const poolImage = PlaceHolderImages.find(p => p.id === 'poolDemoWork');
    const plantImage = PlaceHolderImages.find(p => p.id === 'plantHireTlb');
    const safetyImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchema) }} />

        {/* Hero Section */}
        <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white">
            {heroImage && <Image src={heroImage.imageUrl} alt={heroImage.description} data-ai-hint={heroImage.imageHint} fill className="object-cover" priority />}
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Johannesburg's Demolition & Site Clearing Experts</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
                      SIMA Demolitions Projects: Your trusted, licensed partner for demolition, rubble removal, site cleaning, and tree felling in Johannesburg and across Gauteng.
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

        {/* Core Services Section */}
        <section id="services" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Comprehensive Site Services for Gauteng</h2>
                    <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">One team for all your demolition, clearing, and site preparation needs. We handle every step, from initial takedown to final cleanup, across Johannesburg and beyond.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Demolition Service Card */}
                    <Card className="flex flex-col">
                        {demolitionImage && <div className="relative aspect-video"><Image src={demolitionImage.imageUrl} alt={demolitionImage.description} data-ai-hint={demolitionImage.imageHint} fill className="object-cover rounded-t-lg" /></div>}
                        <CardHeader><CardTitle className="flex items-center gap-2"><HardHat />Licensed Demolition Contractors</CardTitle></CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground">As expert <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition contractors in Johannesburg</Link>, we safely execute residential, commercial, and industrial projects. From house demolition in Sandton to large-scale site clearing in Germiston, our licensed team ensures every project is completed safely and in compliance with all regulations.</p>
                        </CardContent>
                        <div className="p-6 pt-0"><Button variant="outline" className="w-full" asChild><Link href="/demolition-johannesburg">Explore Demolition Services</Link></Button></div>
                    </Card>
                    {/* Rubble Removal Card */}
                    <Card className="flex flex-col">
                        {rubbleImage && <div className="relative aspect-video"><Image src={rubbleImage.imageUrl} alt={rubbleImage.description} data-ai-hint={rubbleImage.imageHint} fill className="object-cover rounded-t-lg" /></div>}
                        <CardHeader><CardTitle className="flex items-center gap-2"><Trash2 />Fast Rubble Removal</CardTitle></CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground">Our <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal Johannesburg</Link> service offers a rapid solution for clearing construction debris, soil, and garden refuse. We provide same-day service in many areas like Randburg and Roodepoort, ensuring your site stays clean, safe, and productive. We handle all loading and legal disposal.</p>
                        </CardContent>
                         <div className="p-6 pt-0"><Button variant="outline" className="w-full" asChild><Link href="/rubble-removal-johannesburg">Get a Rubble Removal Quote</Link></Button></div>
                    </Card>
                    {/* Site Cleaning Card */}
                    <Card className="flex flex-col">
                        {cleaningImage && <div className="relative aspect-video"><Image src={cleaningImage.imageUrl} alt={cleaningImage.description} data-ai-hint={cleaningImage.imageHint} fill className="object-cover rounded-t-lg" /></div>}
                        <CardHeader><CardTitle className="flex items-center gap-2"><Sparkles />Professional Site Cleaning</CardTitle></CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground">Our <Link href="/site-cleaning" className="text-primary hover:underline">site cleaning services in Johannesburg</Link> go beyond rubble. We provide comprehensive cleanups after construction or demolition, ensuring your property is free of all waste and hazards. Ideal for pre-handover cleaning on projects in Midrand or post-renovation tidy-ups in Alberton.</p>
                        </CardContent>
                         <div className="p-6 pt-0"><Button variant="outline" className="w-full" asChild><Link href="/site-cleaning">Learn About Site Cleaning</Link></Button></div>
                    </Card>
                    {/* Tree Felling Card */}
                    <Card className="flex flex-col">
                        {treeImage && <div className="relative aspect-video"><Image src={treeImage.imageUrl} alt={treeImage.description} data-ai-hint={treeImage.imageHint} fill className="object-cover rounded-t-lg" /></div>}
                        <CardHeader><CardTitle className="flex items-center gap-2"><Axe />Safe Tree Felling</CardTitle></CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground">Need safe and professional <Link href="/tree-felling" className="text-primary hover:underline">tree felling in Johannesburg</Link>? Our insured teams handle hazardous, overgrown, or unwanted trees in tight spaces, especially in leafy suburbs like Fourways and Edenvale. We perform sectional dismantling to protect your property and provide full cleanup services.</p>
                        </CardContent>
                         <div className="p-6 pt-0"><Button variant="outline" className="w-full" asChild><Link href="/tree-felling">Explore Tree Felling</Link></Button></div>
                    </Card>
                    {/* Pool Demolition Card */}
                    <Card className="flex flex-col">
                        {poolImage && <div className="relative aspect-video"><Image src={poolImage.imageUrl} alt={poolImage.description} data-ai-hint={poolImage.imageHint} fill className="object-cover rounded-t-lg" /></div>}
                        <CardHeader><CardTitle className="flex items-center gap-2"><Waves />Swimming Pool Demolition</CardTitle></CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground">Reclaim your yard space with our expert <Link href="/swimming-pool-demolition" className="text-primary hover:underline">swimming pool demolition</Link> service. We manage the entire process, from breaking up concrete or fibreglass shells to removing all debris and backfilling the area. It’s a fast, effective way to transform your property in any Johannesburg suburb.</p>
                        </CardContent>
                         <div className="p-6 pt-0"><Button variant="outline" className="w-full" asChild><Link href="/swimming-pool-demolition">Learn About Pool Removal</Link></Button></div>
                    </Card>
                    {/* Plant Hire Card */}
                    <Card className="flex flex-col">
                        {plantImage && <div className="relative aspect-video"><Image src={plantImage.imageUrl} alt={plantImage.description} data-ai-hint={plantImage.imageHint} fill className="object-cover rounded-t-lg" /></div>}
                        <CardHeader><CardTitle className="flex items-center gap-2"><Tractor />Plant & Bobcat Hire</CardTitle></CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground">Our <Link href="/plant-hire" className="text-primary hover:underline">plant hire service in Johannesburg</Link> provides TLBs and Bobcats with certified operators for excavation, trenching, and site preparation. Ideal for builders and landscapers in areas like Kempton Park or Boksburg needing reliable machinery for projects of any scale. Flexible short and long-term hire available.</p>
                        </CardContent>
                         <div className="p-6 pt-0"><Button variant="outline" className="w-full" asChild><Link href="/plant-hire">View Plant Hire Options</Link></Button></div>
                    </Card>
                </div>
            </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">Your Trusted Partner in Demolition & Site Preparation</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            At SIMA Demolitions Projects, we don't just demolish structures; we build trust. With a track record of safety, reliability, and excellence since 2000, we are the go-to partner for contractors and homeowners who demand a professional, hassle-free experience.
                        </p>
                         <div className="mt-8 grid gap-6">
                             <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-accent mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">Experience & Expertise</h3><p className="text-muted-foreground mt-1 text-sm">With over two decades of hands-on experience, we’ve successfully completed hundreds of complex projects across Gauteng. Our deep industry knowledge means we anticipate challenges and deliver solutions, not problems.</p></div></div>
                            <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-accent mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">Licensed & Fully Insured</h3><p className="text-muted-foreground mt-1 text-sm">Your project is protected. We are fully licensed and carry comprehensive public liability insurance, ensuring every job is compliant with all regulations and giving you complete peace of mind.</p></div></div>
                             <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-accent mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">Customer Satisfaction Guaranteed</h3><p className="text-muted-foreground mt-1 text-sm">We are committed to clear communication, punctual service, and leaving your site better than we found it. Your satisfaction is the measure of our success.</p></div></div>
                        </div>
                    </div>
                    <div>
                       {safetyImage && <Image src={safetyImage.imageUrl} alt={safetyImage.description} data-ai-hint={safetyImage.imageHint} width={600} height={500} className="rounded-lg shadow-lg" />}
                    </div>
                </div>
            </div>
        </section>

        {/* Safety & Compliance Section */}
        <section id="safety" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Safety, Insurance & Compliance: Our Non-Negotiables</h2>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                    In the high-risk demolition and construction industry, safety and compliance aren't just buzzwords—they are our license to operate. SIMA Demolitions Projects adheres strictly to the Occupational Health and Safety (OHS) Act and all City of Johannesburg municipal bylaws. Our teams undergo continuous training, and we conduct rigorous on-site risk assessments before any project begins. We are fully insured, protecting your property and investment against any unforeseen circumstances. This professional oversight is your guarantee that your project will be completed without incident, on time, and to the highest legal standard.
                </p>
                <div className="mt-8">
                    <Button size="lg" asChild>
                        <Link href="/contact">Request a Quote & Our Compliance Documents</Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">What Our Gauteng Clients Say</h2>
                    <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">Real feedback from satisfied customers across Johannesburg and Pretoria.</p>
                </div>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.name} className="bg-background p-6 rounded-lg shadow-md flex flex-col">
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

        {/* Service Areas Section */}
        <section id="areas" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h2 className="text-3xl md:text-4xl font-bold">Serving Residential & Commercial Clients Across Johannesburg</h2>
                 <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">We provide fast, reliable, and localized demolition and site clearing services across all major Johannesburg suburbs and the greater Gauteng region. Our local teams are ready to respond.</p>
                 <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {serviceAreas.map(area => (
                        <div key={area} className="bg-card border rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2 hover:bg-accent/10 transition-colors">
                            <MapPin className="w-4 h-4 text-accent"/>
                            <Link href={`/demolition-${area.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline">{area}</Link>
                        </div>
                    ))}
                 </div>
            </div>
        </section>

        {/* Mini FAQ Section */}
        <section id="faq" className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg">How quickly can you clear a site in Johannesburg?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">For most standard rubble removal and site cleaning projects in Johannesburg, we can typically offer same-day or next-day service. Our locally-based teams across Gauteng, including Sandton, Randburg, and the East Rand, allow for rapid dispatch. The exact timing depends on the scale of the job and our schedule, but we prioritize urgent requests to prevent delays to your project. Complex demolitions require more planning for permits and safety, but the cleanup phase is always executed with maximum efficiency. Call us directly for the fastest response.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg">Are your demolition and site clearing teams insured and certified?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">Yes, absolutely. SIMA Demolitions Projects is a fully licensed and insured company. We carry comprehensive public liability insurance to protect your property, our team, and the public. Our operators are certified and trained to adhere to the highest safety standards, including the Occupational Health and Safety (OHS) Act. We are committed to full compliance with all City of Johannesburg municipal bylaws, ensuring every project we undertake is managed professionally and responsibly. We provide all compliance documentation upon request for your peace of mind.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg">Do you clean up the site after a demolition or rubble removal?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">Yes, complete site cleanup is a core part of our service promise. Our service is not finished until your site is left clean, safe, and ready for the next phase of your project. After any demolition or rubble removal, our teams perform a thorough site cleanup, which includes removing all remaining debris, sweeping hard surfaces, and ensuring no hazards are left behind. Our goal is to provide a true end-to-end solution, saving you the time and expense of hiring a separate cleanup crew. This commitment to a spotless finish is why contractors and homeowners across Johannesburg trust us.</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
        
        {/* Final CTA */}
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
