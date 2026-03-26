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
        answer: "Our same-day rubble removal in Johannesburg is designed for speed and efficiency. When you call or WhatsApp us with your requirements, we immediately assess the job and dispatch the nearest available team to your location. To secure a same-day slot, we recommend contacting us as early in the day as possible, as our schedule can fill up quickly. We always prioritize urgent requests to ensure your site is cleared without delay, helping you keep your project on track."
    },
    {
        question: "How quickly can your team arrive at my site?",
        answer: "Our arrival time for same-day rubble removal depends on your exact location within Johannesburg, the day's traffic, and our team's existing schedule. However, we make every effort to get to you within a few hours of your confirmed booking. Our teams are strategically positioned across Sandton, Randburg, the East Rand, and the West Rand, which allows us to provide a genuinely rapid response time for most urgent cleanups. We will always provide you with an estimated arrival window when you book."
    },
    {
        question: "Can you remove all types of rubble on the same day?",
        answer: "Yes, our versatile teams are equipped to handle most types of non-hazardous waste for same-day removal. This includes common builders rubble like bricks and concrete, garden refuse such as branches and soil, and general waste from residential renovations. Whether you're dealing with debris from a small DIY project or waste from a professional construction site, our same-day rubble removal Johannesburg service is designed to manage it efficiently. For any specialized materials, please let us know when you call."
    },
    {
        question: "Can you handle very large jobs on a same-day basis?",
        answer: "For very large rubble removal jobs that require multiple truckloads or heavy machinery, we can almost always begin the clearing process on the same day you call. When you contact us, we'll assess the scope of the job and dispatch a team to start work immediately. If the entire job cannot be completed in one day, we will work with you to create a rapid schedule for the remaining collections, ensuring your site is cleared as quickly and efficiently as possible without unnecessary delays."
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
            <h2 className="text-3xl font-bold text-center mb-8">Why Fast Rubble Removal Matters on Johannesburg Sites</h2>
             <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                Delays in removing rubble can slow down your project, create safety risks, and make your property unusable. Our same-day rubble removal service in Johannesburg ensures your site is cleared quickly so you can continue with your work without delays.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                <div><Truck className="mx-auto h-10 w-10 text-primary" /><h4 className="font-semibold text-lg mt-2">Avoid Project Delays</h4><p className="text-muted-foreground mt-1 text-sm">Clear your site fast so plumbers, electricians, and painters can get to work. A clean site boosts productivity and keeps your timeline on track.</p></div>
                <div><ShieldCheck className="mx-auto h-10 w-10 text-primary" /><h4 className="font-semibold text-lg mt-2">Improve Site Safety</h4><p className="text-muted-foreground mt-1 text-sm">Remove hazardous debris, nails, and sharp materials to reduce the risk of accidents for your family or workers. A tidy site is a safe site.</p></div>
                <div><Home className="mx-auto h-10 w-10 text-primary" /><h4 className="font-semibold text-lg mt-2">Ensure Legal Compliance</h4><p className="text-muted-foreground mt-1 text-sm">As licensed waste carriers, we guarantee legal disposal of all rubble, protecting you from the heavy fines associated with illegal dumping in Johannesburg.</p></div>
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
                    <p className="text-muted-foreground mt-2">For larger rubble removal jobs in Johannesburg, we use professional equipment to handle high volumes quickly and safely. If rubble, soil, or construction waste is too much for manual loading, we use <Link href="/plant-hire-johannesburg" className="text-primary hover:underline">Bobcats and TLB machines</Link> to speed up the process and reduce labour time. This is ideal for large construction sites, full <Link href="/site-cleaning" className="text-primary hover:underline">site clearance</Link> projects, and heavy debris from <Link href="/swimming-pool-demolition-johannesburg" className="text-primary hover:underline">pool demolitions</Link>.</p>
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
                <Card><CardHeader><CardTitle>Large Loads</CardTitle></CardHeader><CardContent><p className="font-bold text-2xl">R2500+</p><p className="text-sm text-muted-foreground mt-2">For large-scale builders rubble, demolition waste, or full site clearing.</p></CardContent></Card>
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
