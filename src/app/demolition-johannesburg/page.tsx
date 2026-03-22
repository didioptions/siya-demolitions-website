
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Building, Trash2, Sparkles, Wrench, MapPin, ShieldCheck, FileText, Construction, Home, Factory, Layers, Hammer, Waves, Star, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { HomePageContactForm } from "@/components/home/home-page-contact-form";

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
    "serviceType": "Demolition Services",
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
    },
    {
        question: "What areas of Johannesburg do you serve?",
        answer: "We provide demolition services across the entire greater Johannesburg area. Our teams are strategically located to serve all suburbs, including Sandton, Randburg, Roodepoort, Midrand, Soweto, Johannesburg South, and the full East Rand. No matter where your project is, we have a local team ready to assist."
    },
    {
        question: "Can you handle demolitions in tight or complex spaces?",
        answer: "Yes, absolutely. We specialize in complex demolitions in dense urban environments. Using precision equipment and techniques like sectional dismantling, we can safely remove structures that are close to other buildings, on steep slopes, or have limited site access. Safety and property protection are our top priorities."
    },
    {
        question: "Do you recycle the demolition waste?",
        answer: "Yes, we are committed to environmentally responsible demolition. We sort materials on-site wherever possible, and transport concrete, steel, wood, and other recyclable materials to registered recycling facilities. This reduces landfill waste and is part of our commitment to sustainable practices."
    },
    {
        question: "What happens during a site inspection?",
        answer: "During a free site inspection, one of our expert project managers will visit your property to assess the structure, measure the size, identify the materials, check site access, and discuss any specific requirements or hazards. This allows us to provide you with a comprehensive, accurate, and fixed-price quote with no hidden surprises."
    },
    {
        question: "Why is using a licensed and insured contractor so important?",
        answer: "Using a licensed and insured contractor like Apex Demolitions protects you completely. Our license ensures we are compliant with all municipal by-laws and safety regulations, avoiding fines and stop-orders. Our comprehensive public liability insurance covers your property, your neighbours' property, and the public against any unforeseen incidents, giving you total peace of mind."
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

        <section className="py-12 md:py-16 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                 <h2 className="text-3xl md:text-4xl font-bold">Johannesburg's Premier Demolition Service</h2>
                <p className="mt-4 text-lg text-muted-foreground text-left">
                    When it comes to demolition in Johannesburg, you need a contractor with a proven track record of safety, reliability, and regulatory compliance. Apex Demolitions Projects is a leader in the field, offering a full spectrum of demolition services tailored to the unique demands of this vibrant city. From meticulous residential house demolition in leafy suburbs to large-scale commercial demolition in bustling business districts, our expertise ensures every project is executed flawlessly. We understand that demolition is not just about tearing down structures; it's the critical first step in urban renewal and development. Our team combines state-of-the-art equipment with decades of experience to deliver results that are efficient and meticulously safe. As your trusted demolition contractors in Johannesburg, we are your partners in transformation, clearing the path for progress across Sandton, Randburg, Roodepoort, and beyond.
                </p>
            </div>
        </section>

        <section id="types-of-demolition" className="mb-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Types of Demolition Services We Offer</h2>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                    Our capabilities cover every kind of structural removal project in Johannesburg, from small residential jobs to major commercial and industrial sites.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3"><Home className="text-primary" /> Residential Demolition</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Specializing in house demolition Johannesburg wide, we safely dismantle single-family homes, townhouses, garages, and outbuildings. We work with precision to protect neighbouring properties, making us the ideal choice for projects in dense suburbs. This service is perfect for clearing land for a new dream home or subdivision.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3"><Building className="text-primary" /> Commercial Demolition</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Our commercial demolition services cater to businesses across Johannesburg. We handle the dismantling of office blocks, retail centers, warehouses, and other commercial structures. We focus on minimizing disruption to nearby businesses and manage projects with strict safety protocols to ensure a smooth process for large-scale redevelopments.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3"><Layers className="text-primary" /> Interior Demolition (Strip-Outs)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Ideal for renovations and tenant changeovers, our interior strip-out services involve the selective removal of non-structural elements. We carefully dismantle walls, ceilings, flooring, fixtures, and fittings while preserving the building's main structure, preparing the space for a complete redesign.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3"><Waves className="text-primary" /> Swimming Pool Demolition</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Reclaim your garden and reduce maintenance costs with our expert <Link href="/swimming-pool-demolition-johannesburg" className="text-primary hover:underline">swimming pool demolition service</Link>. We handle the breaking of concrete or fibreglass shells, remove all debris, and backfill the area with proper compaction, leaving it ready for a new lawn or structure.</p>
                    </CardContent>
                </Card>
            </div>
        </section>

        <section className="mb-16 bg-background p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A new building under construction on a cleared site in Johannesburg" data-ai-hint="building construction" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Johannesburg Demolition Process</h2>
                    <p className="text-muted-foreground mb-4">We follow a systematic, authority-compliant process to ensure every project is seamless, safe, and efficient from start to finish:</p>
                    <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Inspection & Free Quote:</span> We conduct a thorough on-site assessment to understand the scope and provide a detailed, obligation-free quotation.</li>
                        <li><span className="font-semibold text-foreground">Council Approvals & Permits:</span> We professionally manage all permit applications with the City of Johannesburg to ensure full legal compliance.</li>
                        <li><span className="font-semibold text-foreground">Site Preparation & Safety:</span> Our team secures the site perimeter, implements safety measures, and manages the disconnection of all utilities.</li>
                        <li><span className="font-semibold text-foreground">Controlled Demolition:</span> Our licensed team performs a controlled demolition using modern equipment and techniques to dismantle the structure safely.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal & Recycling:</span> We clear all debris and transport it to licensed facilities, prioritizing recycling wherever possible as part of our <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal Johannesburg</Link> service.</li>
                        <li><span className="font-semibold text-foreground">Final Site Cleanup:</span> The project is only complete when your site is left clean, level, and ready for your builders. This is part of our comprehensive <Link href="/site-cleaning" className="text-primary hover:underline">site cleaning service</Link>.</li>
                    </ol>
                </div>
            </div>
        </section>

        <section id="demolition-cost" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Understanding Demolition Cost in Johannesburg</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                One of the most common questions we receive is, "how much does demolition cost in Johannesburg?" The answer depends on several key variables, as each project is unique. At Apex Demolitions, we believe in full transparency, which is why we provide a detailed, itemized quote after a free site inspection. Understanding these factors will help you budget effectively for your project.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                    <CardHeader><CardTitle>Size and Height of Structure</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">The total square meterage and number of stories are the most significant cost factors. A larger or taller building requires more labor, time, and larger machinery to demolish safely and efficiently, directly influencing the overall demolition cost in Johannesburg.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Construction Materials</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">The building's materials greatly affect the demolition timeline and cost. Reinforced concrete and structural steel are more complex and time-consuming to break down than standard brick or timber frames, requiring specialized heavy equipment and more man-hours.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Site Accessibility</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">How easily we can access your site with our machinery is crucial. A site in a dense suburb with narrow access may require smaller, more specialized equipment and more manual labor, whereas an open commercial site allows for larger, more efficient machinery, reducing the time required.</p></CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle>Proximity & Safety Requirements</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Demolishing a structure that is close to neighboring properties, public roads, or delicate infrastructure requires more complex safety measures. This includes protective scaffolding, dust screens, and more controlled, surgical demolition methods to ensure no damage occurs, which can affect the cost.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Hazardous Materials</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">The presence of hazardous materials like asbestos is a major factor. Asbestos must be handled and removed by certified specialists before demolition can begin, which is a separate and additional cost to the main demolition project.</p></CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle>Scope of Work</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">The total scope also affects the price. Does the project require the removal of deep foundations and footings, or just the superstructure? Will extensive site leveling be required after demolition? A clearer scope helps determine a more accurate cost.</p></CardContent>
                </Card>
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

        <section id="recent-projects" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Demolition Projects in Johannesburg</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>Full House Demolition</CardTitle>
                            <p className="text-sm text-muted-foreground">Sandton</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Successfully completed a full demolition of a 4-bedroom house to clear the plot for a new modern home. The project was finished in 4 days, including full rubble removal and site leveling, ahead of schedule.</p>
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Before</p>
                                    <div className="aspect-video relative">{PlaceHolderImages.find(p=>p.id==='residentialDemolition') && <Image src={PlaceHolderImages.find(p=>p.id==='residentialDemolition')!.imageUrl} alt={PlaceHolderImages.find(p=>p.id==='residentialDemolition')!.description} data-ai-hint={PlaceHolderImages.find(p=>p.id==='residentialDemolition')!.imageHint} fill className="rounded-md object-cover" />}</div>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">After</p>
                                    <div className="aspect-video relative">{PlaceHolderImages.find(p=>p.id==='siteCleaningAfter') && <Image src={PlaceHolderImages.find(p=>p.id==='siteCleaningAfter')!.imageUrl} alt={PlaceHolderImages.find(p=>p.id==='siteCleaningAfter')!.description} data-ai-hint={PlaceHolderImages.find(p=>p.id==='siteCleaningAfter')!.imageHint} fill className="rounded-md object-cover" />}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Commercial Site Clearing</CardTitle>
                            <p className="text-sm text-muted-foreground">Randburg</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Dismantled and cleared an old commercial structure to prepare the site for a new retail development. The project involved careful coordination to minimize disruption to neighboring businesses.</p>
                             <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Before</p>
                                    <div className="aspect-video relative">{PlaceHolderImages.find(p=>p.id==='commercialDemolition') && <Image src={PlaceHolderImages.find(p=>p.id==='commercialDemolition')!.imageUrl} alt={PlaceHolderImages.find(p=>p.id==='commercialDemolition')!.description} data-ai-hint={PlaceHolderImages.find(p=>p.id==='commercialDemolition')!.imageHint} fill className="rounded-md object-cover" />}</div>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">After</p>
                                    <div className="aspect-video relative">{PlaceHolderImages.find(p=>p.id==='siteCleaning') && <Image src={PlaceHolderImages.find(p=>p.id==='siteCleaning')!.imageUrl} alt={PlaceHolderImages.find(p=>p.id==='siteCleaning')!.description} data-ai-hint={PlaceHolderImages.find(p=>p.id==='siteCleaning')!.imageHint} fill className="rounded-md object-cover" />}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Swimming Pool Removal</CardTitle>
                            <p className="text-sm text-muted-foreground">Roodepoort</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Removed an old, leaking concrete swimming pool, reclaiming over 50 square meters of garden space for the family. The area was backfilled, compacted, and left perfectly level for a new lawn.</p>
                             <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Before</p>
                                    <div className="aspect-video relative">{PlaceHolderImages.find(p=>p.id==='poolDemoWork') && <Image src={PlaceHolderImages.find(p=>p.id==='poolDemoWork')!.imageUrl} alt={PlaceHolderImages.find(p=>p.id==='poolDemoWork')!.description} data-ai-hint={PlaceHolderImages.find(p=>p.id==='poolDemoWork')!.imageHint} fill className="rounded-md object-cover" />}</div>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">After</p>
                                    <div className="aspect-video relative">{PlaceHolderImages.find(p=>p.id==='poolDemoAfter') && <Image src={PlaceHolderImages.find(p=>p.id==='poolDemoAfter')!.imageUrl} alt={PlaceHolderImages.find(p=>p.id==='poolDemoAfter')!.description} data-ai-hint={PlaceHolderImages.find(p=>p.id==='poolDemoAfter')!.imageHint} fill className="rounded-md object-cover" />}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section id="safety" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Safety & Compliance: Our Top Priority</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                At Apex Demolitions, safety is not just a policy—it's the foundation of everything we do. We are committed to maintaining the highest safety standards to protect our crew, your property, and the public.
            </p>
             <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Fully Insured</h4><p className="text-sm text-muted-foreground">We carry comprehensive public liability insurance, giving you complete peace of mind.</p></div></div>
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Licensed Professionals</h4><p className="text-sm text-muted-foreground">Our teams are trained, certified, and experienced in all aspects of safe demolition practices.</p></div></div>
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Regulatory Compliance</h4><p className="text-sm text-muted-foreground">We adhere to all City of Johannesburg bylaws and national Occupational Health and Safety (OHS) Act regulations.</p></div></div>
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Site Safety Protocols</h4><p className="text-sm text-muted-foreground">Every project begins with securing the site, implementing dust control measures, and ensuring all personnel have the correct PPE.</p></div></div>
            </div>
        </section>

        <section id="areas-we-serve" className="py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Serving Every Corner of Johannesburg</h2>
                <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground">Our teams are strategically positioned to provide fast, reliable demolition services across all of Johannesburg's key suburbs. We are your local experts, from the northern estates to the southern communities.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
                    
                    <div className="bg-card p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-xl mb-2"><Link href="/demolition-sandton" className="hover:text-primary">Demolition Sandton</Link></h3>
                        <p className="text-muted-foreground text-sm">As the premier demolition contractors in Sandton, we specialize in high-end residential and commercial projects. Our teams are experts in navigating secure estates in Morningside and Bryanston, providing discreet and efficient demolition in Sandton for luxury homes and office blocks.</p>
                    </div>

                    <div className="bg-card p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-xl mb-2"><Link href="/demolition-randburg" className="hover:text-primary">Demolition Randburg</Link></h3>
                        <p className="text-muted-foreground text-sm">We are the trusted demolition contractors for Randburg's diverse suburbs. From residential house demolition in Ferndale to commercial site clearing, our reliable demolition Randburg services ensure every project is completed on time, safely, and with a thorough cleanup.</p>
                    </div>

                     <div className="bg-card p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-xl mb-2"><Link href="/demolition-roodepoort" className="hover:text-primary">Demolition Roodepoort</Link></h3>
                        <p className="text-muted-foreground text-sm">Our demolition Roodepoort services cover the entire West Rand. We handle projects on complex, sloped terrain and in dense residential areas, providing expert house demolition and site clearing with a focus on safety and community respect.</p>
                    </div>

                     <div className="bg-card p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-xl mb-2"><Link href="/demolition-midrand" className="hover:text-primary">Demolition Midrand</Link></h3>
                        <p className="text-muted-foreground text-sm">Supporting Midrand's rapid growth, our demolition Midrand team specializes in large-scale site clearing for new residential and commercial developments. We work closely with developers to ensure projects in areas like Waterfall and Carlswald are cleared efficiently.</p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {suburbs.map(suburb => (
                        <Button key={suburb.name} variant="outline" asChild>
                            <Link href={suburb.href}>
                               <MapPin className="mr-2" /> {suburb.name}
                            </Link>
                        </Button>
                    ))}
                </div>
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

        <section id="contact-form" className="py-12 md:py-20 bg-card text-center rounded-lg">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold">Get a Free Demolition Quote Today</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Don't delay your project. Contact us now for a fast, free, no-obligation quote. Our expert team is ready to provide a detailed assessment for your demolition needs anywhere in Johannesburg.</p>
                <div className="mt-8 mb-12 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                        <a href="tel:0784292760"><Phone /> Call for an Instant Quote</a>
                    </Button>
                    <Button size="lg" variant="secondary" asChild>
                        <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp Us Now</a>
                    </Button>
                </div>
                <HomePageContactForm />
            </div>
        </section>
      </div>
    </>
  );
}
