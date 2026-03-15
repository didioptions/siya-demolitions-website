
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Building, Home, Sparkles, Trash2, MapPin, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from "react";

const suburbs = [
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
    { name: "Rosebank", href: "/rubble-removal-rosebank" },
    { name: "Northcliff", href: "/rubble-removal-northcliff" },
    { name: "Melville", href: "/rubble-removal-melville" },
    { name: "Linden", href: "/rubble-removal-linden" },
    { name: "Parkhurst", href: "/rubble-removal-parkhurst" },
    { name: "Greenside", href: "/rubble-removal-greenside" },
];

const faqs = [
    {
        question: "How much does rubble removal cost in Johannesburg?",
        answer: "The cost is primarily determined by the volume and type of rubble, measured in cubic meters or truckloads. Other factors include the accessibility of your site—if we can easily position our trucks close to the rubble, the loading process is faster and more cost-effective. The total number of loads required and the distance to the nearest registered disposal facility also play a role due to transport costs and municipal dumping fees. We provide a transparent, all-inclusive quote upfront with no hidden costs, so you know exactly what to expect before we begin the work."
    },
    {
        question: "Do you remove garden refuse and yard waste?",
        answer: "Yes, absolutely. Our garden refuse removal Johannesburg service is one of our most popular offerings. We clear all organic waste, including grass cuttings, branches, leaves, soil, and old tree stumps. This is ideal for after a major landscaping project, a seasonal yard clean-up, or preparing a property for sale. We ensure all green waste is transported to proper composting or green waste facilities."
    },
    {
        question: "How quickly can you clear a garage or shed?",
        answer: "Very quickly. For a standard garage clean-up in Johannesburg, we can often provide same-day or next-day service. Our teams work efficiently to sort, load, and remove all unwanted items, from old furniture and broken appliances to general junk. A typical garage or shed clean-up can be completed in just a few hours, freeing up valuable space in your home."
    },
    {
        question: "Do you recycle materials?",
        answer: "We are committed to environmental responsibility. Wherever possible, we ensure that the rubble collected is sorted and processed for recycling. Materials like clean concrete, bricks, and asphalt are often crushed and repurposed as aggregate. Metals are sent to scrap dealers for recycling. By diverting waste from landfills, we not only help conserve natural resources but also contribute to a more sustainable construction industry in Gauteng."
    },
    {
        question: "Are you licensed for Johannesburg waste removal?",
        answer: "Yes, SIMA Demolitions Projects is a fully licensed waste carrier with the City of Johannesburg. This is your guarantee that all rubble and waste from your property will be transported and disposed of legally and responsibly at a registered facility. This compliance protects you from the risk of heavy fines associated with illegal dumping and ensures your project is handled professionally."
    }
];

export default function RubbleRemovalJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Professional Rubble Removal Services in Johannesburg</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <Trash2 /> Fast, Licensed & Affordable Site Clearing
            </p>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                For fast and efficient rubble removal in Johannesburg, SIMA Demolitions Projects is your trusted solution. A clean site is a safe and productive site. We offer expert waste removal Johannesburg residents and contractors can rely on, from garden refuse removal to construction debris clearing. Our services cover all Johannesburg suburbs, including Sandton, Randburg, Roodepoort, Midrand, and Soweto. As a licensed waste carrier, we ensure all rubble is disposed of responsibly, providing a hassle-free service that leaves your property spotless.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Get a Free Rubble Removal Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for Same-Day Service</a>
                </Button>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Rubble Removal Services in Johannesburg</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card><CardHeader><CardTitle>General Rubble Removal</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Clearing of bricks, concrete, soil, and mixed debris from any site in Johannesburg.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Garden Refuse Removal</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Our garden refuse removal Johannesburg service handles branches, grass, soil, and old paving.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Garage & Shed Clean-Up</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Fast garage clean-up Johannesburg service to remove old junk, furniture, and clutter.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Yard Clearing</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Comprehensive clearing of overgrown yards to prepare for landscaping or sale.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Construction Debris Removal</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Ongoing support for builders needing to keep their Johannesburg sites clean and safe.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Office/Warehouse Clearance</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Removal of non-structural waste from commercial and industrial properties.</p></CardContent></Card>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose SIMA Rubble Removal in Johannesburg?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Licensed Contractors</h3><p className="text-sm text-muted-foreground">Fully compliant with all City of Johannesburg waste disposal laws.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Fast Service</h3><p className="text-sm text-muted-foreground">We offer same-day or next-day service in most Johannesburg areas.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Eco-Friendly Disposal</h3><p className="text-sm text-muted-foreground">We prioritize recycling and responsible disposal at registered facilities.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Affordable Pricing</h3><p className="text-sm text-muted-foreground">Get a fair, transparent quote with no hidden costs.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Experienced Team</h3><p className="text-sm text-muted-foreground">Our professional crew handles all loading and cleanup.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Full Clean-Up</h3><p className="text-sm text-muted-foreground">We leave your site spotless after every job.</p></div></div>
            </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Johannesburg Rubble Removal Process</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-4 text-center">
                <div className="flex flex-col items-center"><div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">1</div><p className="mt-2 text-sm font-semibold">Site Inspection & Free Quote</p></div>
                <div className="flex flex-col items-center"><div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">2</div><p className="mt-2 text-sm font-semibold">Sorting of Waste</p></div>
                <div className="flex flex-col items-center"><div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">3</div><p className="mt-2 text-sm font-semibold">Safe Loading & Removal</p></div>
                <div className="flex flex-col items-center"><div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">4</div><p className="mt-2 text-sm font-semibold">Eco-Friendly Disposal</p></div>
                <div className="flex flex-col items-center"><div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">5</div><p className="mt-2 text-sm font-semibold">Final Site Clean-Up</p></div>
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Rubble Removal Across Johannesburg Suburbs</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                We provide localized rubble removal services across all of Johannesburg. Find your area below or visit our <Link href="/rubble-removal-services-johannesburg" className="text-primary hover:underline">main services hub</Link> for more information.
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
          <h2 className="text-3xl font-bold text-center mb-8">FAQ – Rubble Removal Johannesburg</h2>
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
          <h2 className="text-3xl font-bold">Get a Free Quote for Rubble Removal in Johannesburg</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Ready to clear your site? Contact SIMA Demolitions for a professional, no-obligation quote. We have full coverage across all Johannesburg suburbs.
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
