
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Building, Home, Sparkles, Trash2, MapPin, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from "react";

const faqs = [
    {
        question: "How quickly can rubble be removed in Johannesburg?",
        answer: "SIMA Demolitions Projects prides itself on rapid response times. For most standard residential and commercial projects within Johannesburg, we can typically offer same-day or next-day service. The exact timing depends on your location, the volume of rubble, and our schedule. We always recommend calling us as early as possible to secure the fastest collection time. Our goal is to ensure your site is cleared without delay, preventing bottlenecks in your construction or renovation timeline. We understand that a clean site is a productive site, so we mobilize our teams efficiently across Gauteng to meet your needs."
    },
    {
        question: "What types of waste and rubble do you remove?",
        answer: "We are equipped to handle a wide variety of non-hazardous waste from construction, demolition, and renovation sites. This includes common materials like bricks, concrete, tiles, sand, soil, and stones. We also clear mixed demolition waste, garden refuse from land clearing (such as branches and soil), and materials from interior strip-outs like drywall and wood. Essentially, if it's general building or landscaping waste, we can remove it. We do not handle specified hazardous materials like asbestos, which require a specialized contractor by law."
    },
    {
        question: "Are there legal requirements for site clearing in Johannesburg?",
        answer: "Yes, all waste removal in Johannesburg must comply with municipal by-laws and national environmental regulations. It is illegal to dump rubble on unauthorized land, and doing so can result in significant fines for the property owner. As a licensed waste carrier, SIMA Demolitions Projects ensures that 100% of the rubble we collect is transported to and disposed of at registered, fully compliant landfill and recycling facilities. Using our professional service protects you from any legal liability associated with improper waste disposal and guarantees your project remains environmentally responsible and compliant from start to finish."
    },
    {
        question: "Do you accept small-volume rubble removal jobs?",
        answer: "Yes, no job is too big or too small. We cater to a wide range of needs, from removing a small pile of bricks after a weekend DIY project to managing continuous, large-scale rubble removal for major construction developments. Our pricing is flexible and based on the volume of material, so you only pay for what you need cleared. We have the fleet and manpower to handle single loads or arrange for multiple trucks and ongoing service for larger, long-term projects, ensuring we can provide a cost-effective solution for any scenario in Johannesburg."
    },
    {
        question: "How is the cost of rubble removal calculated in Johannesburg?",
        answer: "The cost is primarily determined by the volume and type of rubble, measured in cubic meters or truckloads. Other factors include the accessibility of your site—if we can easily position our trucks close to the rubble, the loading process is faster and more cost-effective. The total number of loads required and the distance to the nearest registered disposal facility also play a role due to transport costs and municipal dumping fees. We provide a transparent, all-inclusive quote upfront with no hidden costs, so you know exactly what to expect before we begin the work."
    },
    {
        question: "Do you recycle the rubble you collect in Gauteng?",
        answer: "We are committed to environmental responsibility. Wherever possible, we ensure that the rubble collected is sorted and processed for recycling. Materials like clean concrete, bricks, and asphalt are often crushed and repurposed as aggregate for road construction and other building applications. Metals are sent to scrap dealers for recycling. By diverting waste from landfills, we not only help conserve natural resources but also contribute to a more sustainable construction industry in Gauteng. We always use disposal facilities that have established recycling programs."
    },
    {
        question: "Is the labour for loading the rubble included in the service?",
        answer: "Yes, our rubble removal service is all-inclusive. The quote we provide includes a professional team equipped with the necessary safety gear and tools to load all the debris onto our trucks efficiently and safely. You do not need to provide any labour. Our team will handle the entire process from start to finish, ensuring the site is cleared correctly and left tidy. This full-service approach saves you time, prevents potential injuries associated with heavy lifting, and ensures the job is done to professional standards."
    },
    {
        question: "Can you clear rubble from sites with difficult access?",
        answer: "Yes, we have extensive experience working on sites with challenging access, such as properties in dense urban areas, complexes with narrow driveways, or backyards with limited entry points. We have a range of vehicles and equipment, including smaller tipper trucks and Bobcats, that can maneuver in tight spaces. During our initial assessment, we will evaluate the access to your property and determine the best approach and equipment for the job, ensuring we can clear your rubble efficiently regardless of the logistical constraints. This is a key part of our service expertise in the varied landscape of Johannesburg."
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


export default function RubbleRemovalJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const whatWeRemoveImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const commercialImage = PlaceHolderImages.find(p => p.id === 'commercialDemolition');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    

  return (
    <>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        {/* Hero Section */}
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal & Site Clearing Services in Johannesburg</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <Sparkles /> Clear Construction Sites Quickly, Safely & Affordably
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Free Rubble Removal Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call Now for Fast Site Clearance</a>
                </Button>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Get a fast, no-obligation quote and a clean site, guaranteed.</p>
             {heroImage && <div className="mt-8 max-w-2xl mx-auto"><Image src={heroImage.imageUrl} alt="Rubble removal and site clearing Johannesburg" data-ai-hint="rubble removal team" width={1200} height={600} className="rounded-lg shadow-lg" /></div>}
        </section>

        <section className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
            A messy, debris-filled site isn't just an eyesore—it's a safety hazard and a major project bottleneck. SIMA Demolitions Projects provides fast, reliable, and licensed rubble removal in Johannesburg. Whether you're a homeowner completing a renovation, a contractor managing a building site after a <Link href="/demolition-johannesburg" className="text-primary hover:underline">full or partial demolition</Link>, or a developer preparing land for a new project, our team ensures your site is cleared efficiently and in full compliance with municipal regulations. As the leading licensed rubble removal company in Johannesburg, we handle everything from loading and transport to responsible disposal, leaving you with a clean, safe, and build-ready property. Our mission is to remove the waste so you can focus on the work.
            </p>
        </section>

        {/* What We Remove Section */}
        <section id="what-we-remove" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Johannesburg Rubble Removal Teams Handle</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    {whatWeRemoveImage && <Image src={whatWeRemoveImage.imageUrl} alt="Concrete and mixed rubble removal Johannesburg" data-ai-hint="concrete rubble" width={600} height={800} className="rounded-lg shadow-lg object-cover h-full" />}
                </div>
                <div className="lg:col-span-2 space-y-8">
                     <div>
                        <h3 className="text-xl font-semibold mb-2">Construction Rubble</h3>
                        <p className="text-muted-foreground">The most common waste we handle. This includes leftover bricks from walling, broken concrete from foundation or slab removal, and discarded roof tiles. We ensure these heavy materials are loaded safely and transported from your Johannesburg site to facilities where they can be crushed and recycled into aggregate. This reduces landfill burden and promotes a circular economy in Gauteng's construction sector.</p>
                     </div>
                     <div>
                        <h3 className="text-xl font-semibold mb-2">Mixed Demolition Waste</h3>
                        <p className="text-muted-foreground">After a partial or full demolition, Johannesburg sites are often left with a complex mix of materials. Our teams are trained to handle wood, drywall, insulation, old wiring, and other general waste. We provide complete site clearing in Johannesburg, ensuring no hazardous materials are left behind and that the site is completely free of debris for the safety of subsequent contractors and for full compliance with site handover protocols.</p>
                     </div>
                     <div>
                        <h3 className="text-xl font-semibold mb-2">Soil, Sand & Stones</h3>
                        <p className="text-muted-foreground">Excavation and landscaping projects generate large volumes of earth materials. We efficiently remove excess soil, sand from old building mixes, and stones of all sizes. Clearing this heavy, bulky material is essential for site levelling and preparation for new foundations, paving, or landscaping. We ensure all soil and sand is disposed of correctly according to Gauteng's environmental regulations.</p>
                     </div>
                     <div>
                        <h3 className="text-xl font-semibold mb-2">Garden & Land-Clearing Waste</h3>
                        <p className="text-muted-foreground">Preparing a property for development often involves extensive land clearing. As part of our garden and yard waste clearing in Johannesburg, we remove all organic waste, including felled trees, large branches, stumps, and shrubs. This service is crucial for preventing pests, reducing fire risk, and creating a clean slate for architects and landscapers to begin their work. We turn overgrown plots into build-ready sites.</p>
                     </div>
                </div>
            </div>
        </section>

        {/* Fast & Reliable Site Clearance Section */}
        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Fast & Reliable Site Clearance Across Johannesburg</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                    <h4 className="font-semibold text-lg">Quick Response Times</h4>
                    <p className="text-muted-foreground mt-2 text-sm">We understand that project delays cost money. That's why we offer rapid response and can often schedule same-day or next-day rubble removal across Johannesburg.</p>
                </div>
                 <div>
                    <h4 className="font-semibold text-lg">Scheduled Collections</h4>
                    <p className="text-muted-foreground mt-2 text-sm">For large, ongoing projects, we provide scheduled collections to keep your site consistently clean, safe, and productive, preventing debris buildup.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-lg">Safe Loading & Transport</h4>
                    <p className="text-muted-foreground mt-2 text-sm">Our professional crews are trained in safe loading practices, and our fleet is fully licensed and insured, guaranteeing a safe and compliant operation from start to finish.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-lg">Build-Ready Sites</h4>
                    <p className="text-muted-foreground mt-2 text-sm">We don't just remove the rubble; we ensure the site is left tidy and clear, allowing your next phase of work to begin immediately without any cleanup delays.</p>
                </div>
            </div>
        </section>

        {/* Residential & Commercial Section */}
        <section id="project-types" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Rubble Removal for Every Johannesburg Project</h2>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <Card className="shadow-lg flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3"><Home className="h-6 w-6 text-accent" /> Residential Rubble Removal</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">Ideal for homeowners and small builders in Johannesburg, we provide a fast and affordable solution for clearing waste from your property. We ensure your home is left clean and safe, with no debris left behind.</p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Post-renovation debris from kitchens and bathrooms.</span></li>
                            <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Waste from small-scale demolitions like garages or walls.</span></li>
                            <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">DIY construction cleanups and garden refuse.</span></li>
                        </ul>
                    </CardContent>
                </Card>
                <Card className="shadow-lg flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3"><Building className="h-6 w-6 text-accent" /> Construction & Developer Support</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">We are a trusted partner for contractors and developers who require reliable, scheduled, and large-scale site clearing services to keep their Johannesburg projects on track and compliant.</p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Ongoing rubble removal for large construction sites.</span></li>
                            <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Complete site clearance after demolitions.</span></li>
                            <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Multi-load removals for housing developments.</span></li>
                        </ul>
                         {commercialImage && <div className="mt-4 aspect-video relative"><Image src={commercialImage.imageUrl} alt="Large-scale commercial rubble removal Gauteng" data-ai-hint="commercial site" fill className="rounded-lg object-cover" /></div>}
                    </CardContent>
                </Card>
            </div>
        </section>
        
        {/* Why Choose Us & Cost Factors Section */}
        <section className="grid lg:grid-cols-2 gap-8 mb-16 items-start">
            <div className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Why Choose SIMA for Rubble Removal in Johannesburg?</h2>
                <p className="text-muted-foreground mb-6">We combine speed, affordability, and professionalism to provide a service that Johannesburg contractors and homeowners trust.</p>
                <ul className="grid sm:grid-cols-2 gap-4">
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Same or Next-Day Service:** We prioritize getting your site cleared fast.</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Affordable & Transparent Pricing:** Get a clear, upfront quote with no hidden fees.</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Licensed & Insured Crew:** Your property is protected by our professional and compliant team.</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Local Johannesburg Experts:** We know the city, the regulations, and the disposal sites.</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**20+ Years of Experience:** Our track record guarantees a reliable, hassle-free service.</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Full Regulatory Compliance:** We handle all waste legally and responsibly.</span></li>
                </ul>
            </div>
            <div>
                 <h2 className="text-2xl font-bold mb-4">Understanding Rubble Removal Costs in Johannesburg</h2>
                 <p className="text-muted-foreground mb-4">Our quotes are transparent and based on a few key factors to ensure you get a fair price:</p>
                 <ul className="space-y-3">
                    <li><strong className="block">Volume & Type of Debris:</strong> The total amount of rubble (in m³) and its type (e.g., clean concrete vs. mixed waste) are the primary cost drivers. Heavier, denser materials may require more labour.</li>
                    <li><strong className="block">Site Accessibility:</strong> How easily our trucks can access the rubble impacts loading time. Sites with difficult access in dense Johannesburg suburbs may require more manual labour or specialized equipment.</li>
                    <li><strong className="block">Number of Loads:</strong> The total number of trips required to clear your site completely. We optimize loads to reduce your costs.</li>
                    <li><strong className="block">Disposal Fees:</strong> Municipal and private landfill fees in Gauteng are included in our pricing, ensuring no surprise charges.</li>
                 </ul>
            </div>
        </section>

         {/* Responsible Disposal Section */}
        <section className="mb-16 text-center">
             <h2 className="text-3xl font-bold">Responsible & Legal Waste Disposal in Gauteng</h2>
             <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">Illegal dumping is a major problem that harms our communities and environment, leading to significant fines for property owners. As a leading licensed rubble removal company in Johannesburg, SIMA Demolitions Projects is committed to 100% legal and responsible waste disposal. We only use registered, compliant landfill and recycling facilities in Gauteng. This protects you from all legal liability and ensures your project contributes positively to a cleaner Johannesburg. We provide full transparency on our disposal methods, giving you complete peace of mind.</p>
        </section>

        {/* Areas Section */}
        <section id="areas" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Rubble Removal Across Johannesburg Suburbs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="text-accent" />Rubble Removal Sandton</CardTitle></CardHeader>
                    <CardContent>
                       <p className="text-sm text-muted-foreground mb-4">
                            We provide fast, discreet, and licensed rubble removal in Sandton, specializing in debris clearance for high-value residential estates and commercial properties. Our teams are experienced with HOA rules in areas like Bryanston. We also offer <Link href="/demolition-johannesburg" className="text-primary/80 hover:underline">demolition and site clearing services</Link> in the area. We ensure every job in Sandton is handled with the utmost professionalism.
                       </p>
                       <Button variant="outline" size="sm" asChild><Link href="/rubble-removal-sandton">Learn More</Link></Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="text-accent" />Rubble Removal Randburg</CardTitle></CardHeader>
                    <CardContent>
                       <p className="text-sm text-muted-foreground mb-4">
                            Our rubble removal services in Randburg are perfect for residential renovations and garden cleanups. We offer affordable rates and fast turnaround times for homeowners and small contractors in suburbs like Ferndale and Linden. For larger projects, our <Link href="/rubble-removal-roodepoort" className="text-primary/80 hover:underline">Roodepoort teams</Link> can also provide support. We handle all construction debris responsibly.
                       </p>
                       <Button variant="outline" size="sm" asChild><Link href="/demolition-randburg">Learn More</Link></Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="text-accent" />Rubble Removal Midrand</CardTitle></CardHeader>
                    <CardContent>
                       <p className="text-sm text-muted-foreground mb-4">
                            SIMA provides large-scale site clearing and rubble removal in Midrand, supporting the area's rapid commercial and residential development. From clearing construction debris near Waterfall to residential cleanups, we offer scheduled services for developers. Our <Link href="/rubble-removal-sandton" className="text-primary/80 hover:underline">Sandton and Centurion services</Link> provide a wide coverage net for the region.
                       </p>
                       <Button variant="outline" size="sm" asChild><Link href="/demolition-midrand">Learn More</Link></Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="text-accent" />Rubble Removal Soweto</CardTitle></CardHeader>
                    <CardContent>
                       <p className="text-sm text-muted-foreground mb-4">
                            Affordable and reliable rubble removal in Soweto for community projects, residential renovations, and small business developments. We are proud to be a local contractor supporting Soweto's growth, offering fast service in areas from Orlando to Pimville. We ensure all construction waste is cleared quickly and legally. Our services also cover nearby <Link href="/demolition-roodepoort" className="text-primary/80 hover:underline">Roodepoort</Link>.
                       </p>
                       <Button variant="outline" size="sm" asChild><Link href="/demolition-soweto">Learn More</Link></Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="text-accent" />Rubble Removal Roodepoort</CardTitle></CardHeader>
                    <CardContent>
                       <p className="text-sm text-muted-foreground mb-4">
                           Serving the West Rand, our rubble removal services in Roodepoort are ideal for residential and commercial site clearing. We handle debris from home renovations in Helderkruin and larger construction projects. Our teams ensure a clean, build-ready site every time. We work closely with our <Link href="/demolition-randburg" className="text-primary/80 hover:underline">Randburg team</Link> to provide full West Rand coverage.
                       </p>
                       <Button variant="outline" size="sm" asChild><Link href="/demolition-roodepoort">Learn More</Link></Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="text-accent" />Rubble Removal Germiston</CardTitle></CardHeader>
                    <CardContent>
                       <p className="text-sm text-muted-foreground mb-4">
                            Specializing in industrial and commercial site clearing, our rubble removal services in Germiston are essential for large-scale projects. We handle heavy construction debris, factory waste, and more, ensuring full compliance with East Rand regulations. Our expertise in <Link href="/demolition-germiston" className="text-primary/80 hover:underline">industrial demolition</Link> makes us the top choice in the area.
                       </p>
                       <Button variant="outline" size="sm" asChild><Link href="/demolition-germiston">Learn More</Link></Button>
                    </CardContent>
                </Card>
            </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Rubble Removal Johannesburg: FAQs</h2>
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
        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Cleared Johannesburg site ready for construction" data-ai-hint="clean site" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Johannesburg Site Cleared Today</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                    Ready to clear your site? Contact SIMA Demolitions for a fast, free, and no-obligation quote on professional rubble removal.
                </p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="/contact"><Quote /> Request a Free Quote</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                        <a href="tel:0784292760"><Phone /> Call for an Urgent Pickup</a>
                    </Button>
                     <Button size="lg" variant="secondary" asChild>
                        <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                            WhatsApp Us
                        </a>
                    </Button>
                </div>
                 <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
                    <span className="flex items-center gap-2"><Check /> Licensed & Insured</span>
                    <span className="flex items-center gap-2"><Check /> 20+ Years Experience</span>
                    <span className="flex items-center gap-2"><Check /> Local Johannesburg Teams</span>
                </div>
            </div>
        </section>
      </div>
    </>
  );
}

    