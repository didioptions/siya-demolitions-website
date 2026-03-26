
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote, ShieldCheck, Star, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
    {
        question: "How much does rubble removal cost in Randburg?",
        answer: "The cost for professional rubble removal in Randburg is highly competitive and depends on the job's specifics. The price is based on the volume of waste (per truckload), the type of material (e.g., light garden refuse vs. heavy builders rubble), and site access. For instance, a small load from a garden cleanup in Linden will cost less than multiple truckloads of dense concrete from a renovation in Ferndale. We provide a free, detailed, on-site assessment to give you a transparent and fixed-price quote with no hidden costs, ensuring you receive an affordable price for your rubble removal in Randburg."
    },
    {
        question: "How fast is your rubble removal service in the Randburg area?",
        answer: "We prioritize quick and efficient service across all of Randburg's suburbs. We can typically offer same-day rubble removal for urgent cleanups, depending on your location and our schedule. We understand that leftover rubble from a renovation or building site can be a major safety hazard and stall your project. By calling us early, you can often have your site in Blairgowrie or Northcliff cleared the very same day, allowing other contractors to proceed without delay. Our local teams ensure a rapid response."
    },
    {
        question: "What kind of rubble do you remove from Randburg properties?",
        answer: "Our teams are equipped to handle a comprehensive range of non-hazardous waste. This includes heavy builders rubble like bricks, concrete, and soil from construction sites. We also specialize in garden refuse removal, clearing branches, leaves, and other organic waste from properties across Randburg. Our service extends to renovation waste such as old tiles, drywall, and wood, as well as general household junk from garage or yard cleanups. This makes us your complete junk removal solution."
    },
     {
        question: "Is your service a complete solution, including cleanup?",
        answer: "Yes, our service is a complete, all-in-one solution. The price we quote includes the full loading and transport of all specified debris. After the rubble is removed, our teams perform a final site cleanup, sweeping hard surfaces and ensuring the area is left tidy and safe. This commitment to a spotless finish is a key part of our professional service and saves you the hassle of hiring a separate team for the final clean. It's a true end-to-end rubble removal Johannesburg service."
    },
    {
        question: "Are you licensed and insured for rubble removal in Randburg?",
        answer: "Absolutely. Apex Demolitions is a fully licensed waste carrier, compliant with all City of Johannesburg by-laws. Our operations are covered by comprehensive public liability insurance, which is crucial for giving you complete peace of mind. This legal compliance protects you from any liability associated with illegal dumping and guarantees that all your construction waste or garden refuse is disposed of responsibly and professionally at registered facilities."
    }
];

export default function RubbleRemovalRandburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const whyChooseImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal Services Randburg</h1>
             <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <ShieldCheck /> Your Trusted Randburg Rubble Removal Specialists
            </p>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions is the top choice for fast, affordable, and licensed rubble removal in Randburg. We serve the entire area, from the leafy suburbs of Northcliff and Linden to the bustling hubs of Ferndale and Cresta. We provide homeowners and contractors with a hassle-free solution for clearing construction debris, garden refuse, and renovation waste, often with same-day service available.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Same-Day Quote</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp for a Fast Quote</a>
                </Button>
            </div>
        </section>

         <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us for Rubble Removal in Randburg?</h2>
             <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">Our reputation in Randburg is built on reliability, speed, and a deep understanding of the local community's needs. We are the trusted choice for homeowners and builders across the area.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Local Randburg Teams</h3><p className="text-sm text-muted-foreground">Our local presence ensures a rapid response and familiarity with all Randburg suburbs, from Ferndale to Northcliff.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Affordable & Transparent Pricing</h3><p className="text-sm text-muted-foreground">We offer competitive quotes with no hidden costs, making professional service accessible for all projects.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fully Licensed & Insured</h3><p className="text-sm text-muted-foreground">We comply with all City of Johannesburg by-laws and carry comprehensive insurance for your peace of mind.</p></div></div>
            </div>
        </section>

        <section id="randburg-challenges" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Rubble Removal Challenges in Randburg Properties</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                Randburg's mix of older homes, ongoing renovations, and varied property layouts presents unique challenges. Our service is specifically designed to handle these local conditions efficiently.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <Card>
                    <CardHeader><CardTitle>Renovation & Demolition Debris</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">With so many homes in areas like Linden and Blairgowrie being renovated, managing builders rubble is a constant need. We offer a fast, all-in-one service that includes <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link> and complete rubble removal, perfect for keeping your renovation on track.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Garden Refuse & Overgrowth</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">The leafy suburbs of Randburg produce significant garden refuse. Our teams can efficiently clear large volumes of soil, branches, and leaves after a major garden cleanup or landscaping project, leaving your property looking its best.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Varied Site Access</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">From the narrow streets of older suburbs to the sloped properties in Northcliff, site access can be tricky. We have a range of vehicle sizes and the expertise to handle rubble removal from any property, no matter the logistical challenges.</p></CardContent>
                </Card>
            </div>
        </section>

        <section id="recent-projects" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Rubble Removal Jobs in Randburg</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader><CardTitle>Post-Renovation Cleanup</CardTitle><p className="text-sm text-muted-foreground">Ferndale</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">A client in Ferndale needed urgent removal of rubble from a kitchen and bathroom renovation. Our team responded the same day, clearing away all tiles, bricks, and old fittings. The site was left clean and safe for the next phase of work. <br /><strong>Turnaround: 4 Hours</strong></p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Garden Refuse & Soil Removal</CardTitle><p className="text-sm text-muted-foreground">Blairgowrie</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">After a major landscaping project, a homeowner in Blairgowrie was left with several large piles of soil and tree branches. Our team arrived the next morning and cleared two full truckloads, transforming the messy yard into a clean, usable space. <br /><strong>Turnaround: 1 Day</strong></p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Mixed Waste from Site Clearing</CardTitle><p className="text-sm text-muted-foreground">Northcliff</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">We assisted a builder clearing a plot in Northcliff. This involved removing mixed waste, including builders rubble, rocks, and cleared vegetation, from a sloped property with difficult access. Our team handled the complex loading and removal efficiently. <br /><strong>Turnaround: 2 Days</strong></p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section id="pricing" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Rubble Removal Prices in Randburg</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">We offer affordable, transparent pricing for rubble removal in Randburg. The cost depends on volume, material type, and access.</p>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <Card><CardHeader><CardTitle>Small Load (1-2 Ton)</CardTitle><p className="text-muted-foreground text-sm">e.g., Garden refuse from a weekend cleanup.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R600</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Medium Load (4-Ton Truck)</CardTitle><p className="text-muted-foreground text-sm">e.g., Debris from a standard room renovation.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R1,300</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Large Load (10-Cube Tipper)</CardTitle><p className="text-muted-foreground text-sm">e.g., Builders rubble from a small <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link> or site clearing.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R2,400</p></CardContent></Card>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-8">*Disclaimer: Prices are a guideline. For a precise, fixed-price quote, we provide a free on-site assessment.</p>
            </div>
        </section>
        
        <section className="mb-16 text-center">
            <h2 className="text-2xl font-semibold">Areas We Serve in and Around Randburg</h2>
            <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
                Our service covers the entire Randburg municipality and its surrounding suburbs. As the premier rubble removal contractors in Randburg, our local teams have deep experience in areas like **Northcliff**, with its challenging slopes, the leafy suburbs of **Linden** and **Blairgowrie** with their renovation projects, and the commercial and residential hub of **Ferndale**. We provide fast, reliable service to these communities and beyond, solidifying our reputation as the go-to solution for any rubble removal or <Link href="/site-cleaning" className="text-primary hover:underline">site cleaning</Link> needs.
            </p>
        </section>

        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Rubble Removal in Randburg</h2>
            <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="font-semibold text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                        <p className="text-base text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after rubble removal in Randburg" data-ai-hint="clean site randburg" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Randburg Property Cleared Today!</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                    Contact Apex for a fast, free, and no-obligation quote on licensed rubble removal in Randburg. Our teams are on standby for same-day service. We also serve <Link href="/rubble-removal-sandton" className="text-primary-foreground underline hover:text-secondary">Sandton</Link> and <Link href="/rubble-removal-midrand" className="text-primary-foreground underline hover:text-secondary">Midrand</Link>.
                </p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Pickup</a></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail className="mr-2" /> Request a Free Quote</Link></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/rubble-removal-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Rubble Removal Johannesburg</Link> | <Link href="/rubble-removal-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
