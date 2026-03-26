
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Clock, Truck, ShieldCheck, Leaf, BrickWall, Home, MessageSquare, Quote, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Same Day Rubble Removal Service",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Apex Demolitions"
    },
    "areaServed": {
        "@type": "City",
        "name": "Johannesburg"
    },
    "description": "Fast, affordable, and licensed same-day rubble removal in Johannesburg for builders waste, garden refuse, and construction debris. Servicing Sandton, Randburg, Midrand, and Roodepoort.",
    "url": "https://apex-demolitions-website.vercel.app/same-day-rubble-removal-johannesburg"
};


const faqs = [
    {
        question: "How does your same-day rubble removal service work in Johannesburg?",
        answer: "Our same-day service is designed for maximum speed. When you call or WhatsApp us with your urgent request, we assess the job and dispatch the nearest available team to your location. To secure a same-day slot, we highly recommend contacting us as early in the day as possible. We always prioritize these urgent requests to ensure your site in Johannesburg is cleared without delay, helping you keep your project on track and maintain a safe environment."
    },
    {
        question: "How quickly can your team arrive at my site for an urgent cleanup?",
        answer: "Arrival time depends on your specific location, traffic, and our schedule, but our goal is to get to you within a few hours. We have teams strategically positioned across Johannesburg, including Sandton, Randburg, and Roodepoort, which allows us to provide a genuinely rapid response. When you book our same-day rubble removal service, we will give you an estimated arrival window so you know exactly when to expect us. Our logistical planning is key to our fast service."
    },
    {
        question: "What types of rubble can you remove on the same day?",
        answer: "Our teams are equipped to handle most non-hazardous waste for same-day removal. This includes common builders rubble like bricks, concrete, and sand, as well as renovation waste such as tiles and drywall. We also clear garden refuse and general household junk. Whether you have debris from a small DIY project or waste from a professional construction site, our same-day rubble removal Johannesburg service is designed to manage it efficiently and legally."
    },
    {
        question: "Can you handle very large jobs on a same-day basis?",
        answer: "For very large rubble removal jobs, we can almost always begin the clearing process on the same day. After you contact us, we'll assess the scope and dispatch a team to start work immediately. While a job requiring many truckloads might extend beyond one day, starting immediately clears the most critical areas, improves safety, and gets your project moving forward without delay. We will provide a clear plan and timeline for completing the entire cleanup."
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
    "@graph": [serviceSchema, faqSchema]
};

export default function SameDayRubbleRemovalPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const bobcatImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Same Day Rubble Removal Johannesburg</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <Clock className="h-6 w-6" /> Fast, Reliable Waste Removal When You Need It Most
            </p>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Need rubble removed urgently? Apex Demolitions provides fast and reliable same-day rubble removal in Johannesburg for homes, construction sites, and commercial properties. Whether it’s builders rubble, garden refuse, or renovation waste, our team can collect, load, and remove your waste quickly — often on the same day you contact us. We service all areas including Sandton, Randburg, Midrand, and Roodepoort.
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
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us for Same-Day Service?</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">When you need rubble gone today, you need a team you can trust to be fast, professional, and reliable. That's our guarantee.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Rapid Dispatch</h3><p className="text-sm text-muted-foreground">With teams positioned across Johannesburg, we dispatch the closest crew to your site for the fastest possible response time.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Professional Crews</h3><p className="text-sm text-muted-foreground">Our uniformed teams are experienced, efficient, and trained to work safely and cleanly, respecting your property.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Licensed & Insured</h3><p className="text-sm text-muted-foreground">We are fully licensed waste carriers, guaranteeing legal disposal and giving you complete peace of mind.</p></div></div>
            </div>
        </section>


        <section className="mb-16">
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
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><BrickWall className="h-6 w-6 text-accent" />Builders Rubble</CardTitle></CardHeader></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Leaf className="h-6 w-6 text-accent" />Garden Refuse</CardTitle></CardHeader></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Home className="h-6 w-6 text-accent" />Renovation Waste</CardTitle></CardHeader></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Check className="h-6 w-6 text-accent" />Mixed Debris</CardTitle></CardHeader></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Check className="h-6 w-6 text-accent" />Soil and Sand</CardTitle></CardHeader></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Check className="h-6 w-6 text-accent" />General Junk</CardTitle></CardHeader></Card>
            </div>
        </section>

        <section id="recent-projects" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Same-Day Jobs in Johannesburg</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader><CardTitle>Urgent Renovation Cleanup</CardTitle><p className="text-sm text-muted-foreground">Sandton</p></CardHeader>
                        <CardContent>
                            <p className="text-sm">A contractor in a Bryanston estate needed immediate removal of renovation debris to allow for flooring installation the next day. Our team was on-site within 3 hours of the call and cleared two truckloads of tiles and bricks, leaving the site ready for the next trade.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Pre-Weekend Garden Cleanup</CardTitle><p className="text-sm text-muted-foreground">Randburg</p></CardHeader>
                        <CardContent>
                            <p className="text-sm">A homeowner in Linden called us on a Friday morning with large piles of garden refuse before a weekend event. We dispatched a team that afternoon and cleared all branches and leaves, transforming their garden in time for their guests.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Construction Site Hazard Removal</CardTitle><p className="text-sm text-muted-foreground">Midrand</p></CardHeader>
                        <CardContent>
                            <p className="text-sm">A site manager for a new development in Midrand required urgent clearing of illegally dumped waste that was posing a safety hazard. We responded immediately, clearing the waste and ensuring the site was secure and compliant by the end of the day.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section id="equipment" className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {bobcatImage && <div className="aspect-video relative"><Image src={bobcatImage.imageUrl} alt="Bobcat clearing a site for same-day rubble removal" data-ai-hint="bobcat clearing" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Equipment for Large & Urgent Jobs</h3>
                    <p className="text-muted-foreground mt-2">For larger rubble removal jobs in Johannesburg, we use professional equipment to handle high volumes quickly and safely. If rubble, soil, or construction waste is too much for manual loading, we use <Link href="/plant-hire-johannesburg" className="text-primary hover:underline">Bobcats and TLB machines</Link> to speed up the process and reduce labour time. This is ideal for large construction sites, full <Link href="/site-cleaning" className="text-primary hover:underline">site clearance</Link> projects, and heavy debris from a <Link href="/swimming-pool-demolition-johannesburg" className="text-primary hover:underline">pool demolition</Link>.</p>
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
                    <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">{faq.answer}</AccordionContent>
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
    </>
  );
}
