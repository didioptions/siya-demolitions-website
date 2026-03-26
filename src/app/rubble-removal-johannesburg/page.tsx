

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, MapPin, Quote, ShieldCheck, Star, Trash2, Leaf, BrickWall, Home, Building, ArrowRight, MessageSquare, Waves, Tractor } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from "react";

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Apex Demolitions",
    "image": "https://apex-demolitions-website.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fsiya-demolitions-projects.firebasestorage.app%2Fo%2FSIMA%2520Demolitions%2520%2Crubbe%2520removals%2520johannesburg%2520.jpg%3Falt%3Dmedia%26token%3D2b8c060f-72ae-46a2-b328-ef2b301a0dbd&w=1920&q=75",
    "url": "https://apex-demolitions-website.vercel.app/rubble-removal-johannesburg",
    "telephone": "078 429 2760",
    "priceRange": "R500 - R5000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Johannesburg",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Johannesburg"
    }
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Rubble Removal Service",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Apex Demolitions"
    },
    "areaServed": {
        "@type": "City",
        "name": "Johannesburg"
    },
    "description": "Fast, affordable, and licensed rubble removal services in Johannesburg for builders waste, construction debris, garden refuse, and general junk. Same-day service available.",
    "url": "https://apex-demolitions-website.vercel.app/rubble-removal-johannesburg"
};

const faqs = [
    {
        question: "How much does rubble removal cost in Johannesburg?",
        answer: "The cost for professional rubble removal in Johannesburg is competitive and depends on several key factors. The price is primarily based on the volume of waste (per truckload), the type of material (e.g., light garden refuse vs. heavy builders rubble), and site accessibility. For instance, a small load of garden refuse might cost significantly less than multiple truckloads of dense concrete from a demolition site. To give you a clear and transparent price, we offer a free, no-obligation quote. This ensures you get an affordable price for your rubble removal in Johannesburg with no hidden surprises."
    },
    {
        question: "Do you offer same-day rubble removal?",
        answer: "Yes, we proudly offer same-day rubble removal in Johannesburg, subject to our schedule and truck availability. We understand that debris can halt a project, which is why we prioritize urgent requests from our clients who need 'rubble removal near me' immediately. For the fastest service, it's best to call us directly as early in the day as possible. Our extensive network of local teams across the city enables us to provide a rapid response for most urgent cleanups, ensuring your site is cleared without delay."
    },
    {
        question: "What kind of rubble do you remove?",
        answer: "We are equipped to remove a wide variety of non-hazardous waste from any site in Johannesburg. This includes heavy builders rubble such as bricks, concrete, sand, and soil from construction and demolition sites. We also specialize in garden refuse removal, clearing branches, leaves, and other organic waste. Furthermore, our service covers renovation waste like tiles and drywall, as well as general household or garage junk. This makes us a complete junk removal solution for any project, big or small, across the city."
    },
    {
        question: "Do you remove builders rubble and garden refuse?",
        answer: "Yes, we are experts in handling both builders rubble and garden refuse in Johannesburg. Our construction rubble removal service is perfect for builders and contractors who need to maintain a clean and safe worksite by removing heavy, dense materials. Simultaneously, our garden refuse removal service is ideal for homeowners and landscapers needing to clear bulky organic waste. We have the right equipment and vehicles to handle both types of waste efficiently, offering a comprehensive rubble removal Johannesburg service for any need, no matter how big or small the job is."
    },
    {
        question: "Which Johannesburg areas do you cover?",
        answer: "We cover the entire greater Johannesburg metropolitan area and beyond. Our extensive network of teams ensures we can provide fast and reliable rubble removal services in all major suburbs. This includes Sandton, Randburg, Roodepoort, Midrand, Fourways, Soweto, Johannesburg South, and the full East Rand (including Alberton, Germiston, and Boksburg). Our widespread presence means that no matter where your project is located, you can find a reliable 'rubble removal near me' solution with us, ensuring prompt and professional service."
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

const areas = [
    { name: "Sandton", href: "/rubble-removal-sandton" },
    { name: "Randburg", href: "/rubble-removal-randburg" },
    { name: "Roodepoort", href: "/rubble-removal-roodepoort" },
    { name: "Midrand", href: "/rubble-removal-midrand" },
    { name: "Fourways", href: "/rubble-removal-fourways" },
    { name: "Soweto", href: "/rubble-removal-soweto" },
    { name: "Alberton", href: "/rubble-removal-alberton" },
    { name: "Germiston", href: "/rubble-removal-germiston" },
    { name: "Boksburg", href: "/rubble-removal-boksburg" },
    { name: "Benoni", href: "/rubble-removal-benoni" },
    { name: "Kempton Park", href: "/rubble-removal-kempton-park" },
    { name: "Bedfordview", href: "/rubble-removal-bedfordview" },
    { name: "Edenvale", href: "/rubble-removal-edenvale" },
    { name: "Bryanston", href: "/rubble-removal-bryanston" },
    { name: "Rosebank", href: "/rubble-removal-rosebank" }
];

export default function RubbleRemovalJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const whyChooseImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const bobcatImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');
    
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center text-center text-white">
          {heroImage && <Image src={heroImage.imageUrl} alt="A large pile of rubble ready for removal in Johannesburg" data-ai-hint="rubble removal Johannesburg" fill className="object-cover" priority />}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Rubble Removal Johannesburg</h1>
                  <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
                      Fast, affordable, and licensed removal of builders rubble, garden refuse, and construction waste. Same-day service available across Johannesburg.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" asChild>
                          <a href="tel:0784292760"><Phone /> Call for a Fast Quote</a>
                      </Button>
                      <Button size="lg" variant="secondary" asChild>
                          <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp for an Instant Estimate</a>
                      </Button>
                  </div>
              </div>
          </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
               <h2 className="text-3xl md:text-4xl font-bold">Your Trusted Rubble Removal Partner in Johannesburg</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                  A clean worksite is a safe and productive worksite. At Apex Demolitions, our **rubble removal Johannesburg** service is designed to be fast, efficient, and thoroughly reliable. We understand that leftover construction debris, garden refuse, or waste from a <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link> can halt a project and create significant safety hazards. That's why we offer a comprehensive **construction waste removal** solution for contractors, developers, and homeowners across all Johannesburg suburbs. Whether you need an urgent cleanup after a renovation in Sandton, scheduled debris removal for a large construction project in Roodepoort, or are searching for "rubble removal near me," our service is tailored to meet your needs precisely. We ensure that your site remains operational and free from the clutter that can impede progress.
              </p>
          </div>
      </section>
      
      {/* Why Fast Rubble Removal Matters Section */}
      <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Why Fast Rubble Removal Matters on Johannesburg Sites</h2>
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4"><Check className="text-accent h-8 w-8 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-xl">Enhances Site Safety</h3><p className="text-muted-foreground">Piles of rubble, sharp materials, and unstable debris are major safety hazards on any worksite. Prompt **builders rubble removal** eliminates trip hazards, prevents injuries, and creates a safer environment for your family, staff, or construction crew. A clean site is a safe site.</p></div></div>
                  <div className="flex items-start gap-4"><Check className="text-accent h-8 w-8 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-xl">Boosts Project Productivity</h3><p className="text-muted-foreground">Clutter and debris get in the way, slowing down other trades and hindering progress. Our **same-day rubble removal Johannesburg** service clears the way for electricians, plumbers, and painters to do their jobs efficiently, keeping your project on schedule and on budget.</p></div></div>
                  <div className="flex items-start gap-4"><Check className="text-accent h-8 w-8 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-xl">Ensures Legal Compliance</h3><p className="text-muted-foreground">Illegal dumping is a serious offence in Johannesburg with heavy fines. As a licensed waste carrier, we guarantee that all your rubble is transported and disposed of at registered facilities, providing you with full legal compliance and peace of mind.</p></div></div>
                  <div className="flex items-start gap-4"><Check className="text-accent h-8 w-8 mt-1 flex-shrink-0" /><div><h3 className="font-semibold text-xl">Maintains Professionalism</h3><p className="text-muted-foreground">A tidy worksite reflects professionalism and respect for your property and the surrounding neighbourhood. Whether it’s a residential renovation or a large commercial build, a clean site maintains good relations with neighbours and presents a better image for your business.</p></div></div>
              </div>
          </div>
      </section>

      {/* What We Remove Section */}
      <section id="what-we-remove" className="py-12 md:py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6">
               <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold">What We Remove: A Complete Junk Removal Service</h2>
                  <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">Our teams are equipped to handle a wide variety of waste materials from any residential, commercial, or construction site in Johannesburg.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card><CardHeader><CardTitle className="flex items-center gap-3"><BrickWall /> Builders Rubble</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Complete removal of bricks, concrete, sand, soil, and other heavy materials from building sites.</p></CardContent></Card>
                  <Card><CardHeader><CardTitle className="flex items-center gap-3"><Home /> Renovation Waste</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We clear all debris from home renovations, including tiles, drywall, wood, and old fittings.</p></CardContent></Card>
                  <Card><CardHeader><CardTitle className="flex items-center gap-3"><Leaf /> Garden Refuse</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Our **garden refuse removal Johannesburg** service handles branches, leaves, soil, and grass cuttings.</p></CardContent></Card>
                  <Card><CardHeader><CardTitle className="flex items-center gap-3"><Trash2 /> Household Junk</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We offer a full **junk removal Johannesburg** service for clearing old furniture, appliances, and general clutter.</p></CardContent></Card>
                  <Card><CardHeader><CardTitle className="flex items-center gap-3"><Waves /> Pool Demolition Debris</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We clear all concrete, rebar, and pipes after a <Link href="/swimming-pool-demolition-johannesburg" className="text-primary hover:underline">swimming pool demolition</Link>.</p></CardContent></Card>
                  <Card><CardHeader><CardTitle className="flex items-center gap-3"><Building /> Commercial Waste</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Reliable waste management for offices, retail stores, and commercial properties after a strip-out or remodel.</p></CardContent></Card>
              </div>
          </div>
      </section>
      
      <section id="machinery-rubble-removal" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold uppercase tracking-widest">Efficient & Powerful</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Heavy-Duty Rubble Removal with Machinery</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                For larger rubble removal jobs in Johannesburg, we use professional equipment to handle high volumes quickly and safely. If rubble, soil, or construction waste is too much for manual loading, we use <Link href="/plant-hire-johannesburg" className="text-primary hover:underline">Bobcats and TLB machines</Link> to speed up the process and reduce labour time.
              </p>
              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-3">This service is ideal for:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Large construction sites needing regular clearing.</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Full <Link href="/site-cleaning" className="text-primary hover:underline">site clearance</Link> projects after demolition.</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Heavy soil, rock, or mixed rubble removal.</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Major renovation and <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link> clean-ups.</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Commercial and industrial property waste management.</span></li>
                </ul>
              </div>
              <p className="mt-6 text-muted-foreground">
                Using the right equipment allows us to complete jobs faster, keep sites safe, and handle even the most demanding rubble removal projects across Johannesburg, including <Link href="/rubble-removal-sandton" className="text-primary hover:underline">Sandton</Link>, <Link href="/rubble-removal-randburg" className="text-primary hover:underline">Randburg</Link>, and <Link href="/rubble-removal-midrand" className="text-primary hover:underline">Midrand</Link>.
              </p>
            </div>
            <div>
              {bobcatImage && <div className="aspect-video relative"><Image src={bobcatImage.imageUrl} alt="Bobcat machine clearing heavy rubble at a Johannesburg site" data-ai-hint="bobcat clearing rubble" fill className="rounded-lg object-cover shadow-lg" /></div>}
            </div>
          </div>
        </div>
      </section>

      {/* Same-Day Rubble Removal Section */}
      <section id="same-day-rubble-removal" className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
              <p className="text-accent font-semibold uppercase tracking-widest">Urgent Cleanup?</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Same-Day Rubble Removal in Johannesburg</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                  Don't let rubble and waste halt your project. We offer a rapid-response, **same-day rubble removal Johannesburg** service designed to clear your site quickly and affordably. For urgent situations or unexpected debris, our teams are on standby across the city.
              </p>
              <div className="mt-12">
                   <Button size="lg" variant="destructive" asChild>
                      <a href="tel:0784292760"><Phone className="mr-2"/> Call Now for Immediate Rubble Removal</a>
                  </Button>
                  <p className="mt-2 text-sm text-muted-foreground">We prioritize urgent requests to keep your site safe and productive.</p>
              </div>
          </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                   <div>
                        {whyChooseImage && <Image src={whyChooseImage.imageUrl} alt="Apex Demolitions team planning a rubble removal project" data-ai-hint="rubble removal team" width={600} height={500} className="rounded-lg shadow-lg" />}
                    </div>
                  <div>
                      <h2 className="text-3xl md:text-4xl font-bold">Why Choose Apex Demolitions?</h2>
                      <p className="mt-4 text-lg text-muted-foreground">
                          We are built on a foundation of trust, reliability, and professionalism. Our goal is to provide a seamless rubble removal service that gives you complete peace of mind.
                      </p>
                       <div className="mt-8 grid gap-6">
                           <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">Licensed & Insured</h3><p className="text-muted-foreground mt-1 text-sm">We are fully licensed waste carriers and carry comprehensive public liability insurance for your protection. This means your project is handled legally and safely from start to finish.</p></div></div>
                           <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">Fast, Reliable Service</h3><p className="text-muted-foreground mt-1 text-sm">With teams across Johannesburg, we offer same-day or next-day service to keep your project on schedule. We pride ourselves on punctuality and efficient work.</p></div></div>
                          <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">Eco-Friendly Disposal</h3><p className="text-muted-foreground mt-1 text-sm">We are committed to responsible waste management. We prioritize recycling and guarantee all waste is disposed of legally at registered facilities, protecting our city and you from fines.</p></div></div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Recent Projects Section */}
      <section id="recent-projects" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Rubble Removal Jobs in Johannesburg</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader><CardTitle>Renovation Rubble Removal</CardTitle><p className="text-sm text-muted-foreground">Sandton</p></CardHeader>
                        <CardContent>
                            <p className="text-sm">A client in a secure Sandton estate required urgent removal of renovation debris (tiles, bricks, drywall). Our team responded the same day, carefully loading and removing 3 truckloads without damaging the new paving. The site was left spotless, allowing painters to start the next day.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Garden Refuse & Soil Removal</CardTitle><p className="text-sm text-muted-foreground">Randburg</p></CardHeader>
                        <CardContent>
                            <p className="text-sm">After a major landscaping project, a homeowner in Blairgowrie was left with several large piles of soil and tree branches. Our team arrived the next morning and cleared two full truckloads, transforming the messy yard into a clean, usable space.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Builders Rubble Removal</CardTitle><p className="text-sm text-muted-foreground">Midrand</p></CardHeader>
                        <CardContent>
                            <p className="text-sm">We provided scheduled weekly rubble removal for a contractor building new homes in a Midrand development. Our reliable service kept the site safe and clear of builders rubble, ensuring the project ran smoothly and on schedule without any delays caused by waste buildup.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

      {/* Areas We Cover Section */}
      <section id="areas-we-serve" className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Rubble Removal Across All Johannesburg Suburbs</h2>
            <div className="max-w-5xl mx-auto space-y-8">
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-center">North Johannesburg: Sandton, Randburg, Midrand & Fourways</h3>
                    <p className="text-muted-foreground text-center">
                        We offer a premium, discreet rubble removal service for Johannesburg's northern suburbs. Our teams are experts at navigating the secure estates of <Link href="/rubble-removal-sandton" className="text-primary hover:underline">Sandton</Link> and <Link href="/demolition-bryanston" className="text-primary hover:underline">Bryanston</Link>, providing fast cleanups for high-end renovations. For the diverse properties in <Link href="/rubble-removal-randburg" className="text-primary hover:underline">Randburg</Link> and the rapidly growing developments in <Link href="/rubble-removal-midrand" className="text-primary hover:underline">Midrand</Link> and Fourways, our reliable service keeps projects on schedule, reinforcing our status as the top choice for <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal in Johannesburg</Link>.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-center">East Rand: Bedfordview, Edenvale, Kempton Park & More</h3>
                    <p className="text-muted-foreground text-center">
                        As East Rand specialists, we provide robust rubble removal services across Ekurhuleni. We handle heavy industrial waste in Germiston, construction debris in <Link href="/rubble-removal-boksburg" className="text-primary hover:underline">Boksburg</Link>, and residential cleanups in <Link href="/rubble-removal-alberton" className="text-primary hover:underline">Alberton</Link>, <Link href="/rubble-removal-bedfordview" className="text-primary hover:underline">Bedfordview</Link>, and <Link href="/rubble-removal-edenvale" className="text-primary hover:underline">Edenvale</Link>. Our local teams ensure a fast response across the region for any construction or renovation project.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-center">West Rand & Johannesburg South</h3>
                    <p className="text-muted-foreground text-center">
                        Our service coverage extends throughout the West Rand and the South. We offer affordable and dependable rubble removal in <Link href="/rubble-removal-roodepoort" className="text-primary hover:underline">Roodepoort</Link>, managing everything from garden refuse to builders rubble on varied terrain. In Johannesburg South, including Soweto, we provide a vital service for community projects, small businesses, and homeowners completing a <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link>.
                    </p>
                </div>
            </div>
            <div className="text-center mt-12">
                 <Button asChild>
                    <Link href="/rubble-removal-services-johannesburg">Explore All Our Service Areas <ArrowRight className="ml-2" /></Link>
                </Button>
            </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Affordable Rubble Removal Prices in Johannesburg</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">We believe in transparent and **affordable rubble removal in Johannesburg**. Our pricing is straightforward, with no hidden costs. While a final quote requires an assessment, these examples give you an idea of our competitive rates.</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                 <Card>
                    <CardHeader>
                        <CardTitle>Small Load</CardTitle>
                        <p className="text-muted-foreground text-sm">e.g., Garden refuse after a weekend cleanup.</p>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">from R550</p>
                        <p className="text-muted-foreground mt-2">Ideal for quick, small residential cleanups of light materials like branches, leaves, or a small amount of household junk. Perfect for when you've done a garden tidy-up and just need the waste gone fast.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Medium Load</CardTitle>
                        <p className="text-muted-foreground text-sm">e.g., Debris from a bathroom or kitchen renovation.</p>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">from R1,200</p>
                        <p className="text-muted-foreground mt-2">Our most popular option for builders and renovators. This covers a full load of mixed renovation waste, such as old tiles, bricks, drywall, and wood. A single truckload can often clear an entire room's worth of debris.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Large Load</CardTitle>
                        <p className="text-muted-foreground text-sm">e.g., Builders rubble from a construction site.</p>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">from R2,200</p>
                        <p className="text-muted-foreground mt-2">Perfect for large-scale site clearing, this service is for heavy builders rubble, large amounts of soil from excavations, or debris from a small <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link> project. Multiple loads can be arranged for major projects.</p>
                    </CardContent>
                </Card>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8">*Disclaimer: Prices are a guideline and depend on the exact volume, type of material, site access, and your location in Johannesburg. Contact us for a precise, free quote.</p>
        </div>
      </section>

      {/* Google Review CTA */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-card p-8 rounded-lg text-center max-w-3xl mx-auto shadow-lg">
            <h2 className="text-3xl font-bold">Trusted by Clients Across Johannesburg</h2>
            <div className="flex justify-center my-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />)}
            </div>
            <p className="text-muted-foreground mb-6">Our commitment to professional service has earned us the trust of homeowners and contractors alike. See what our clients are saying or leave your own feedback.</p>
            <Button size="lg" asChild>
              <a href="https://g.page/r/CZ4yPlKY6ihdEAE/review" target="_blank" rel="noopener noreferrer">
                Leave a Google Review <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
               <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg text-left">How much does rubble removal cost in Johannesburg?</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                        <p>The cost for professional rubble removal in Johannesburg is competitive and depends on several key factors. The price is primarily based on the volume of waste (per truckload), the type of material (e.g., light garden refuse vs. heavy builders rubble), and site accessibility. For instance, a small load of garden refuse might cost significantly less than multiple truckloads of dense concrete from a demolition site. To give you a clear and transparent price, we offer a free, no-obligation quote. This ensures you get an affordable price for your rubble removal in Johannesburg with no hidden surprises.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg text-left">Do you offer same-day rubble removal?</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                        <p>Yes, we proudly offer same-day rubble removal in Johannesburg, subject to our schedule and truck availability. We understand that debris can halt a project, which is why we prioritize urgent requests from our clients who need 'rubble removal near me' immediately. For the fastest service, it's best to call us directly as early in the day as possible. Our extensive network of local teams across the city enables us to provide a rapid response for most urgent cleanups, ensuring your site is cleared without delay.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg text-left">What kind of rubble do you remove?</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                        <p>We are equipped to remove a wide variety of non-hazardous waste from any site in Johannesburg. This includes heavy builders rubble such as bricks, concrete, sand, and soil from construction and demolition sites. We also specialize in garden refuse removal, clearing branches, leaves, and other organic waste. Furthermore, our service covers renovation waste like tiles and drywall, as well as general household or garage junk. This makes us a complete junk removal solution for any project, big or small, across the city.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg text-left">Do you remove builders rubble and garden refuse?</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                        <p>Yes, we are experts in handling both builders rubble and garden refuse in Johannesburg. Our construction rubble removal service is perfect for builders and contractors who need to maintain a clean and safe worksite by removing heavy, dense materials. Simultaneously, our garden refuse removal service is ideal for homeowners and landscapers needing to clear bulky organic waste. We have the right equipment and vehicles to handle both types of waste efficiently, offering a comprehensive rubble removal Johannesburg service for any need, no matter how big or small the job is.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg text-left">Which Johannesburg areas do you cover?</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                        <p>We cover the entire greater Johannesburg metropolitan area and beyond. Our extensive network of teams ensures we can provide fast and reliable rubble removal services in all major suburbs. This includes Sandton, Randburg, Roodepoort, Midrand, Fourways, Soweto, Johannesburg South, and the full East Rand (including Alberton, Germiston, and Boksburg). Our widespread presence means that no matter where your project is located, you can find a reliable 'rubble removal near me' solution with us, ensuring prompt and professional service.</p>
                    </AccordionContent>
                  </AccordionItem>
              </Accordion>
          </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
           <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Clear Your Site in Johannesburg?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">
                  Contact Apex Demolitions for a fast, free, and no-obligation quote on professional rubble removal anywhere in Johannesburg. Our team is ready to help.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                      <a href="tel:0784292760"><Phone /> Call for a Fast Quote</a>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                       <Link href="/contact"><Mail /> Request Quote Online</Link>
                  </Button>
              </div>
           </div>
      </section>
    </>
  );
}
