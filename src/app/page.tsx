
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check, Phone, Wrench, Trash2, Sparkles, Axe, Building, Award, Users, MapPin, ShieldCheck, Quote, User, Waves, Tractor, HardHat, Mail, MessageSquare, ArrowRight } from "lucide-react";
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
    { question: "How much does demolition cost in Johannesburg?", "acceptedAnswer": { "@type": "Answer", "text": "Demolition costs in Johannesburg are based on the structure's size, materials (e.g., brick vs. concrete), and site accessibility. A small residential wall will be much cheaper than a full house demolition. We provide free, on-site assessments to give you a detailed, fixed-price quote with no hidden fees." } },
    { question: "What are your rubble removal prices?", "acceptedAnswer": { "@type": "Answer", "text": "Our rubble removal prices are highly competitive and based on the volume of debris (per truckload) and the type of material. We offer free quotes so you know the cost upfront. For a quick estimate, you can also send us a photo of the rubble pile on WhatsApp." } },
    { question: "How long does a demolition project take?", "acceptedAnswer": { "@type": "Answer", "text": "The timeline varies. A small demolition might take a few hours, while a full house demolition can take 2-5 days, including rubble removal. We provide a clear project timeline with every quote so you can plan accordingly." } },
    { question: "Do I need a permit for demolition in Johannesburg?", "acceptedAnswer": { "@type": "Answer", "text": "For most structural demolitions, yes, a permit from the City of Johannesburg is required to ensure safety and compliance. As part of our professional service, we can guide you through and assist with the entire permit application process." } },
    { question: "Do you offer same-day rubble removal?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer same-day rubble removal in many Johannesburg suburbs, subject to our schedule and truck availability. We prioritize urgent requests to help keep your site safe and clear. Please call us directly for the fastest service." } },
    { question: "How quickly can you clear a site in Johannesburg?", "acceptedAnswer": { "@type": "Answer", "text": "For most standard rubble removal and site cleaning projects in Johannesburg, we can typically offer same-day or next-day service. Our locally-based teams across Gauteng, including Sandton, Randburg, and the East Rand, allow for rapid dispatch. The exact timing depends on the scale of the job and our schedule, but we prioritize urgent requests to prevent delays to your project. Complex demolitions require more planning for permits and safety, but the cleanup phase is always executed with maximum efficiency. Call us directly for the fastest response." } },
    { question: "Are your demolition and site clearing teams insured and certified?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, absolutely. Apex Demolitions Projects is a fully licensed and insured company. We carry comprehensive public liability insurance to protect your property, our team, and the public. Our operators are certified and trained to adhere to the highest safety standards, including the Occupational Health and Safety (OHS) Act. We are committed to full compliance with all City of Johannesburg municipal bylaws, ensuring every project we undertake is managed professionally and responsibly. We provide all compliance documentation upon request for your peace of mind." } },
    { question: "Do you clean up the site after a demolition or rubble removal?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, complete site cleanup is a core part of our service promise. Our service is not finished until your site is left clean, safe, and ready for the next phase of your project. After any demolition or rubble removal, our teams perform a thorough site cleanup, which includes removing all remaining debris, sweeping hard surfaces, and ensuring no hazards are left behind. Our goal is to provide a true end-to-end solution, saving you the time and expense of hiring a separate cleanup crew. This commitment to a spotless finish is why contractors and homeowners across Johannesburg trust us." } },
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
                 <h2 className="text-3xl md:text-4xl font-bold">Your Trusted Demolition & Rubble Removal Partner in Johannesburg</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    As Johannesburg's top-rated demolition and rubble removal specialists, we provide fast, safe, and fully insured services across the entire city. From large-scale commercial <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition in Johannesburg</Link> central to residential <Link href="/site-cleaning" className="text-primary hover:underline">site clearing in Sandton</Link>, and urgent <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal in Randburg</Link>, <Link href="/demolition-midrand" className="text-primary hover:underline">Midrand</Link>, and <Link href="/demolition-roodepoort" className="text-primary hover:underline">Roodepoort</Link>, our expert teams are equipped for any project. We are your trusted partner for creating a clean, safe, and build-ready site.
                </p>
            </div>
        </section>
        
        {/* Demolition Section */}
        <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">Demolition Contractors Johannesburg</h2>
                    <div className="prose prose-lg max-w-none mx-auto mt-6 text-muted-foreground">
                        <p>When it comes to professional **demolition in Johannesburg**, choosing a contractor with a proven track record of safety, reliability, and compliance is paramount. Apex Demolitions Projects stands as a leader in the field, offering a comprehensive suite of demolition services tailored for the unique demands of the city. From residential **house demolition in Johannesburg** suburbs like Sandton and Roodepoort to large-scale **commercial demolition** in bustling hubs like Randburg, our expertise ensures that every project is executed flawlessly. We understand that demolition is not just about tearing structures down; it's the crucial first step in urban renewal and development, creating a clean slate for progress. Our team combines state-of-the-art equipment with decades of experience to deliver results that are not only efficient but also meticulously safe, protecting your property and the surrounding community. We pride ourselves on being more than just contractors; we are your partners in transformation.</p>
                        <p>Our services cover every type of structural removal. For homeowners, we provide careful and precise **house demolition Johannesburg** services, ensuring minimal disruption to neighboring properties. This is ideal for clearing old, unsafe structures or preparing a plot for a modern dream home. For our commercial clients, we handle complex projects including office blocks, warehouses, and retail centers, with a focus on minimizing operational downtime for nearby businesses. Our **building demolition Johannesburg** capabilities extend to partial demolitions for large-scale renovations, delicate interior strip-outs to prepare spaces for new tenants, and the specialized removal of hazardous structures. We have the heavy-duty equipment and skilled operators to manage projects of any scale, from a single residential wall to a multi-story commercial block, ensuring that every job is completed on time and within budget, with an unwavering commitment to quality.</p>
                        <p>Safety and compliance are the cornerstones of our operation. Every **demolition Johannesburg** project begins with a meticulous safety plan that adheres to the Occupational Health and Safety (OHS) Act. Our sites are secured, our teams are equipped with the correct Personal Protective Equipment (PPE), and we employ advanced dust-suppression techniques to minimize environmental impact. Furthermore, we professionally manage the entire permit application process with the City of Johannesburg, ensuring every project has the necessary legal approvals before work commences. This crucial step protects our clients from the risk of costly delays and fines associated with non-compliance. Choosing Apex means choosing a partner who values safety as much as you do. Our extensive experience across all Johannesburg suburbs, from Midrand to Soweto, makes us the go-to contractors for safe, legal, and efficient demolition.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Rubble Removal Section */}
        <section className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">Rubble Removal Johannesburg Services</h2>
                    <div className="prose prose-lg max-w-none mx-auto mt-6 text-muted-foreground">
                        <p>A clean worksite is a safe and productive worksite. At Apex Demolitions, our **rubble removal Johannesburg** service is designed to be fast, efficient, and thoroughly reliable. We understand that leftover construction debris, garden refuse, or demolition waste can halt a project and create significant safety hazards. That's why we offer a comprehensive **construction waste removal** solution for contractors, developers, and homeowners across all Johannesburg suburbs. Whether you need an urgent cleanup after a renovation in Sandton or scheduled debris removal for a large construction project in Roodepoort, our service is tailored to meet your needs precisely. We ensure that your site remains operational and free from the clutter that can impede progress and create risks for your workforce and the public.</p>
                        <p>We handle all types of rubble with the right equipment and expertise. This includes heavy materials like broken concrete, bricks, soil from earthworks, and asphalt from driveway removals. We also specialize in lighter waste, offering a dedicated **garden refuse removal** service perfect for clearing branches, tree stumps, and grass after a major landscaping project. Our process is simple and transparent: you call us, we provide a clear quote based on the volume (per truckload) and type of waste, and upon approval, our team arrives to handle all the loading and transport. For many jobs, we can offer **same day rubble removal** in Johannesburg, ensuring your site is cleared with minimal delay. Our pricing is determined by factors like the number of truckloads required, the type of material (which affects disposal fees), and site accessibility in suburbs like Randburg or Midrand. We always aim to provide the most cost-effective and straightforward solution for our clients.</p>
                        <p>Choosing a licensed waste carrier is not just a matter of best practice; in Johannesburg, it's a legal requirement. As a fully licensed and insured rubble remover, we guarantee that 100% of the waste collected is transported to registered, environmentally compliant disposal and recycling facilities. This responsible approach protects you from the serious legal and financial risks associated with illegal dumping, which is a major issue in Gauteng. It also ensures that recyclable materials like concrete, metal, and wood are processed correctly, reducing the environmental impact of your project. Our commitment to fast, professional service and responsible disposal makes us the premier choice for **rubble removal in Johannesburg**.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Same Day Rubble Removal Section */}
        <section id="same-day-rubble-removal" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <p className="text-accent font-semibold uppercase tracking-widest">Urgent Cleanup?</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Same-Day Rubble Removal in Johannesburg</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Don't let rubble and waste halt your project. We offer a rapid-response, <strong>same-day rubble removal Johannesburg</strong> service designed to clear your site quickly and affordably. For urgent situations or unexpected debris, our teams are on standby across the city.
                </p>
                <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-left">Emergency Rubble Removal</h3>
                            <p className="mt-1 text-sm text-muted-foreground text-left">For urgent cleanups after storms, burst pipes, or unexpected demolition, call us directly for our priority emergency service.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                            <Check className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-left">Fast & Affordable</h3>
                            <p className="mt-1 text-sm text-muted-foreground text-left">We pride ourselves on offering competitive, transparent pricing. Get a quick quote via WhatsApp and have your site cleared today.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 sm:col-span-2 lg:col-span-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-left">Keep Your Site Safe & Productive</h3>
                            <p className="mt-1 text-sm text-muted-foreground text-left">Leftover debris is a safety hazard. Our fast service removes risks and allows your project to continue without delay.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                     <Button size="lg" asChild>
                        <a href="tel:0784292760"><Phone className="mr-2"/> Call Now for Immediate Rubble Removal</a>
                    </Button>
                </div>
            </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-20 bg-card">
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

        {/* Our Process Section */}
        <section className="py-12 md:py-20 bg-background">
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

        {/* Recent Projects Section */}
        <section className="py-12 md:py-20 bg-card">
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

        {/* Areas We Serve Section */}
        <section id="areas-we-serve" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Areas We Serve in Johannesburg</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-bold text-xl mb-2"><Link href="/rubble-removal-sandton" className="hover:underline">Sandton</Link></h3>
                        <p className="text-muted-foreground">We provide elite demolition and <Link href="/rubble-removal-sandton" className="text-primary hover:underline">rubble removal in Sandton</Link>, specializing in luxury home projects and discreet service in exclusive estates like Sandhurst and Morningside.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2"><Link href="/demolition-randburg" className="hover:underline">Randburg</Link></h3>
                        <p className="text-muted-foreground">As trusted <Link href="/demolition-randburg" className="text-primary hover:underline">demolition contractors in Randburg</Link>, we offer fast and affordable house demolition and reliable rubble removal that residents can count on across all suburbs, from Ferndale to Northcliff.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2"><Link href="/site-cleaning-midrand" className="hover:underline">Midrand</Link></h3>
                        <p className="text-muted-foreground">We support Midrand's rapid growth with large-scale site clearing, demolition services, and scheduled <Link href="/rubble-removal-midrand" className="text-primary hover:underline">rubble removal in Midrand</Link> for developers and residential estates like Waterfall.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2"><Link href="/rubble-removal-roodepoort" className="hover:underline">Roodepoort</Link></h3>
                        <p className="text-muted-foreground">Our teams cover the West Rand, offering comprehensive <Link href="/demolition-roodepoort" className="text-primary hover:underline">demolition in Roodepoort</Link> and fast rubble removal services for residential and commercial clients on its varied terrain.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2"><Link href="/demolition-soweto" className="hover:underline">Soweto</Link></h3>
                        <p className="text-muted-foreground">We are proud to offer affordable, community-focused demolition and <Link href="/rubble-removal-soweto" className="text-primary hover:underline">rubble removal services in Soweto</Link>, helping homeowners and small businesses clear sites safely and efficiently.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2"><Link href="/demolition-alberton" className="hover:underline">Alberton & Germiston</Link></h3>
                        <p className="text-muted-foreground">As East Rand specialists, we offer expert <Link href="/demolition-alberton" className="text-primary hover:underline">demolition in Alberton</Link> and industrial <Link href="/demolition-germiston" className="text-primary hover:underline">demolition in Germiston</Link>. Our fast rubble removal ensures your property is cleared professionally and on schedule.</p>
                    </div>
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

        {/* Contact Form Section */}
        <section id="contact-form" className="py-12 md:py-20 bg-background text-center">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold">Get a Free, No-Obligation Quote Today</h2>
                <p className="mt-2 max-w-xl mx-auto text-muted-foreground">Fill out the form below or call us on 078 429 2760 for a fast response.</p>
                <HomePageContactForm />
            </div>
        </section>
        
        {/* Expanded FAQ Section */}
        <section id="faq" className="py-12 md:py-20 bg-card">
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
