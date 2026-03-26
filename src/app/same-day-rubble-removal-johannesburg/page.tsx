import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Clock, Truck, ShieldCheck, Leaf, BrickWall, Home, MessageSquare, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How does your same-day service work?",
        answer: "Our same-day rubble removal in Johannesburg is designed for speed. When you call or WhatsApp us, we get the details of your rubble and location. We then dispatch the nearest available team to your site. To secure a same-day slot, it's best to contact us as early in the day as possible, as our schedule fills up quickly. We prioritize urgent requests to ensure your site is cleared without delay."
    },
    {
        question: "How quickly can your team arrive at my site?",
        answer: "Our arrival time depends on your location in Johannesburg, current traffic conditions, and our team's schedule for the day. However, for same-day requests, we make every effort to get to you within a few hours. We have teams strategically positioned across Sandton, Randburg, and the East and West Rand, which allows us to provide a genuinely fast response time. We will always give you an estimated arrival window when you book."
    },
    {
        question: "Can you remove all types of rubble on the same day?",
        answer: "Yes, our teams are equipped to handle most types of non-hazardous waste for same-day removal. This includes builders rubble from construction sites, garden refuse like branches and soil, and waste from residential renovations. Whether it's concrete, bricks, tiles, or general junk, we can usually clear it on the same day. For specialized or potentially hazardous materials, please inform us when you call."
    },
    {
        question: "Can you handle very large jobs on a same-day basis?",
        answer: "For very large jobs that require multiple truckloads or heavy machinery, we can often begin the clearing process on the same day. We will assess the scope of the job when you contact us and dispatch a team to start immediately. If the entire job cannot be completed in one day, we will work with you to schedule the remaining collections as quickly as possible to ensure your site is cleared without unnecessary delays."
    }
];

export default function SameDayRubbleRemovalPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const bobcatImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Same Day Rubble Removal Johannesburg</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <Clock className="h-6 w-6" /> Fast, Reliable Waste Removal When You Need It Most
            </p>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Need rubble removed urgently? Apex Demolitions provides fast and reliable same-day rubble removal in Johannesburg for homes, construction sites, and commercial properties. Whether it’s builders rubble, garden refuse, or renovation waste, our team can collect, load, and remove your waste quickly — often on the same day you contact us. We service all areas including Sandton, Randburg, Midrand, Roodepoort and surrounding suburbs.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" variant="destructive" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for Immediate Collection</a>
                </Button>
                <Button size="lg" asChild>
                    <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare className="mr-2"/> WhatsApp for Instant Quote</a>
                </Button>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Fast Rubble Removal When You Need It Most</h2>
             <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                Delays in removing rubble can slow down your project, create safety risks, and make your property unusable. Our same-day rubble removal service in Johannesburg ensures your site is cleared quickly so you can continue with your work without delays.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                <div><Truck className="mx-auto h-10 w-10 text-primary" /><h4 className="font-semibold text-lg mt-2">Avoid Project Delays</h4><p className="text-muted-foreground mt-1 text-sm">Clear your site fast so plumbers, electricians, and painters can get to work.</p></div>
                <div><ShieldCheck className="mx-auto h-10 w-10 text-primary" /><h4 className="font-semibold text-lg mt-2">Improve Site Safety</h4><p className="text-muted-foreground mt-1 text-sm">Remove hazardous debris and reduce the risk of accidents for your family or workers.</p></div>
                <div><Home className="mx-auto h-10 w-10 text-primary" /><h4 className="font-semibold text-lg mt-2">Reclaim Your Space</h4><p className="text-muted-foreground mt-1 text-sm">Get your garden, garage, or worksite back to a clean and usable state immediately.</p></div>
            </div>
        </section>

        <section id="what-we-remove" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">What We Can Remove Today</h2>
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 bg-card p-4 rounded-lg"><BrickWall className="h-6 w-6 text-accent flex-shrink-0" /><span className="font-medium">Builders rubble and construction waste</span></div>
                <div className="flex items-center gap-3 bg-card p-4 rounded-lg"><Leaf className="h-6 w-6 text-accent flex-shrink-0" /><span className="font-medium">Garden refuse and green waste</span></div>
                <div className="flex items-center gap-3 bg-card p-4 rounded-lg"><Home className="h-6 w-6 text-accent flex-shrink-0" /><span className="font-medium">Household junk and unwanted items</span></div>
                <div className="flex items-center gap-3 bg-card p-4 rounded-lg"><BrickWall className="h-6 w-6 text-accent flex-shrink-0" /><span className="font-medium">Renovation and <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link> rubble</span></div>
                <div className="flex items-center gap-3 bg-card p-4 rounded-lg"><BrickWall className="h-6 w-6 text-accent flex-shrink-0" /><span className="font-medium">Soil, bricks, concrete, and mixed waste</span></div>
                <div className="flex items-center gap-3 bg-card p-4 rounded-lg"><Check className="h-6 w-6 text-accent flex-shrink-0" /><span className="font-medium">And much more...</span></div>
            </div>
        </section>

        <section id="equipment" className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {bobcatImage && <div className="aspect-video relative"><Image src={bobcatImage.imageUrl} alt="Bobcat clearing a site for same-day rubble removal" data-ai-hint="bobcat clearing" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Equipment for Large & Urgent Jobs</h3>
                    <p className="text-muted-foreground mt-2">For larger or urgent jobs, we use professional equipment like Bobcats and TLB machines to speed up the loading process and handle large volumes of heavy material efficiently. This means we can clear your site faster and more safely than with manual labour alone, a key part of our effective <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal Johannesburg</Link> service.</p>
                </div>
            </div>
        </section>

        <section id="areas" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Same-Day Service Across Johannesburg</h2>
            <div className="max-w-4xl mx-auto space-y-4 text-center text-muted-foreground">
                <p>Our teams are based across Johannesburg, allowing us to offer rapid response for same-day rubble removal. We have extensive experience serving the high-demand areas of <Link href="/rubble-removal-sandton" className="text-primary hover:underline">Sandton</Link>, including suburbs like Bryanston and Rivonia, where project timelines are critical. Our reliable service is also a staple in <Link href="/rubble-removal-randburg" className="text-primary hover:underline">Randburg</Link>, clearing waste from the many residential renovations in Northcliff and Linden.</p>
                <p>We are a key partner for the fast-growing developments in <Link href="/rubble-removal-midrand" className="text-primary hover:underline">Midrand</Link> (including Noordwyk and Carlswald) and the diverse residential and commercial sites across <Link href="/rubble-removal-roodepoort" className="text-primary hover:underline">Roodepoort</Link>. No matter where you are, we have a local team ready to provide fast, professional service.</p>
            </div>
        </section>
        
        <section id="pricing" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Same-Day Rubble Removal Pricing</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-6">Our pricing is transparent and competitive. The final cost depends on the volume of rubble, site access, and the urgency of the job.</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card><CardHeader><CardTitle>Small Loads</CardTitle></CardHeader><CardContent><p className="font-bold text-2xl">R600 - R1200</p><p className="text-sm text-muted-foreground mt-2">Perfect for garden refuse or waste from a small DIY project.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Medium Loads</CardTitle></CardHeader><CardContent><p className="font-bold text-2xl">R1200 - R2500</p><p className="text-sm text-muted-foreground mt-2">Ideal for renovation debris from a kitchen or bathroom.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Large Loads</CardTitle></CardHeader><CardContent><p className="font-bold text-2xl">R2500+</p><p className="text-sm text-muted-foreground mt-2">For large-scale builders rubble, demolition waste, or full <Link href="/site-cleaning" className="text-primary hover:underline">site clearing</Link>.</p></CardContent></Card>
            </div>
        </section>

        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Need Rubble Gone Today?</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Don't wait. Contact Apex Demolitions now for a fast, free quote on same-day rubble removal in Johannesburg.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone /> Call for Immediate Service</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp for a Fast Quote</a>
            </Button>
          </div>
        </section>
    </div>
  );
}
