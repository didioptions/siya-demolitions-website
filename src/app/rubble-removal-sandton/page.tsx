import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote, Star, ShieldCheck, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
    {
        question: "How do you manage rubble removal in Sandton's secure estates?",
        answer: "Our teams are experts in operating within Sandton's exclusive residential estates like Sandhurst, Morningside, and Bryanston. We liaise directly with estate management to ensure full compliance with their strict rules on work hours, noise levels, and vehicle access. Our professional, uniformed crews use protective measures for paving and landscaping and operate with discretion, ensuring a smooth and respectful service. This specialized experience makes us the preferred choice for rubble removal in Sandton's high-value communities."
    },
    {
        question: "Can you provide same-day rubble removal for a renovation project in Sandton?",
        answer: "Yes, we specialize in rapid-response service and offer same-day rubble removal in Sandton wherever possible, subject to our schedule. We understand that on a high-end renovation, keeping the site clean is crucial for progress. Whether you're clearing builders rubble from a Bryanston extension or garden refuse from a Morningside landscaping project, call us early for the fastest turnaround. For urgent needs, our WhatsApp line is the quickest way to get an estimate and schedule a pickup."
    },
    {
        question: "What is involved in a full-service garage or site clean-up in Sandton?",
        answer: "Our full-service rubble removal Johannesburg solution is designed to be completely hassle-free. Our team handles all the heavy lifting, loading, and transport. For a typical garage or site cleanup in Sandton, we will remove old furniture, construction debris, garden refuse, and general junk. We then do a final sweep-up of the area, leaving your space clean, safe, and ready to use. All waste is then transported to a licensed facility for responsible disposal, ensuring full legal compliance."
    },
    {
        question: "How do you determine the cost of rubble removal in Sandton?",
        answer: "The cost for professional rubble removal in Sandton is based on the volume of debris (per truckload), the type of material (light garden refuse vs. heavy builders rubble), and site accessibility. Factors like navigating secure estate entrances or limited space for our trucks can influence the final price. We provide a free, detailed, on-site assessment to give every client a transparent and fixed-price quote with no hidden costs, ensuring you receive affordable, premium service."
    }
];

export default function RubbleRemovalSandtonPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const whyChooseImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal Services Sandton</h1>
             <p className="mt-6 text-xl md:text-2xl font-semibold text-accent">
                Same-Day Rubble Removal Sandton – From R1200 | Fast & Professional Service
             </p>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                We provide fast, professional rubble removal services across Sandton, ensuring your site is cleared quickly and left clean and tidy. We specialize in discreet and efficient waste clearing for high-value residential properties, secure estates, and commercial sites. From garden refuse removal in Bryanston to construction debris in the CBD, our licensed teams ensure your property is left immaculate. For urgent needs, ask about our **same-day rubble removal Sandton** service.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for an Immediate Quote</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare className="mr-2"/>WhatsApp for a Fast Quote</a>
                </Button>
            </div>
        </section>
        
        <section id="trust-authority" className="py-12 md:py-16 bg-card text-center rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <h2 className="text-3xl font-bold">Trusted Rubble Removal Contractors in Sandton</h2>
                 <p className="mt-4 text-lg text-muted-foreground">
                    We don’t just remove rubble — we leave your site clean, safe, and ready for use.
                 </p>
                 <div className="mt-6 text-xl font-bold text-foreground flex items-center justify-center gap-2 bg-background p-4 rounded-lg shadow-sm">
                    <p><strong>✔ Trusted rubble removal contractors working across Sandton every day</strong></p>
                </div>
            </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us for Rubble Removal in Sandton?</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">Our reputation in Sandton is built on trust, precision, and an intimate understanding of the area's unique requirements. We are the preferred choice for homeowners in Sandhurst, Morningside, Bryanston, and Rivonia because we deliver a service that matches the quality of their properties.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Estate Work Specialists</h3><p className="text-sm text-muted-foreground">We have extensive experience working within Sandton's secure lifestyle estates and adhere to all HOA rules.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Luxury Property Protection</h3><p className="text-sm text-muted-foreground">We use advanced techniques to safeguard your home, landscaping, and valuable assets during a cleanup.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fast, Reliable Turnaround</h3><p className="text-sm text-muted-foreground">We pride ourselves on completing cleanups quickly to minimize disruption, often offering same-day service.</p></div></div>
            </div>
        </section>

        <section id="sandton-challenges" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Rubble Removal Challenges in Sandton Properties</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                Clearing waste in Sandton requires more than just a truck. It demands expertise in navigating the area's unique environment. We specialize in overcoming these challenges for a seamless service.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <Card>
                    <CardHeader><CardTitle>Secure Estate Access</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">We are experts at working within Sandton's premier estates. We coordinate with estate management, adhere to strict work hours and noise limitations, and use the right-sized equipment for narrow roads, ensuring a smooth process in communities like Dainfern and Morningside.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Protecting Luxury Finishes</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Your property is an investment. Our teams use protective boarding for imported paving, manicured lawns, and surrounding structures to ensure the cleanup process leaves no trace, a crucial service after a <Link href="/swimming-pool-demolition-sandton" className="text-primary hover:underline">pool demolition</Link> or renovation.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Discreet & Professional Service</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">In suburbs like Bryanston and Hyde Park, discretion is key. Our uniformed, professional teams work efficiently and quietly to minimize disruption to you and your neighbours, maintaining the tranquility of the area.</p></CardContent>
                </Card>
            </div>
        </section>

        <section id="recent-projects" className="py-12 md:py-20 bg-background rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Rubble Removal Jobs in Sandton</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader><CardTitle>✔ Sandton – 6 cube rubble removal completed same day</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm">A client in a secure Sandton estate required urgent removal of renovation debris. Our team responded the same day, carefully loading and removing a full 6 cube truckload without damaging the new paving, allowing other contractors to proceed.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>✔ Bryanston – renovation rubble cleared within hours</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm">After a major home renovation, a homeowner in Bryanston was left with several large piles of rubble. Our team arrived within hours and cleared two full truckloads, transforming the messy yard into a clean, usable space before the end of the day.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>✔ Fourways – large 10 cube construction site clean-up</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm">We provided scheduled rubble removal for a contractor building new homes in a Fourways development, using our 10-cube tipper truck to efficiently manage large volumes of builders rubble, keeping the site safe and productive.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section id="pricing" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Rubble Removal Prices in Sandton</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                    We offer transparent and competitive pricing. Sandton-specific factors like estate access and the type of debris can affect the final cost. 10 cube tipper trucks are also available for larger jobs.
                </p>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <Card><CardHeader><CardTitle>Small Load (1 Ton)</CardTitle><p className="text-muted-foreground text-sm">e.g., Garden refuse after a weekend cleanup.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R650</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Medium Load (6 Cube Truck)</CardTitle><p className="text-muted-foreground text-sm">e.g., Renovation rubble from a kitchen or bathroom.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R1,200</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Large Load (10-Cube Tipper)</CardTitle><p className="text-muted-foreground text-sm">e.g., Builders rubble from a small <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link> or site clearing.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R2,500</p></CardContent></Card>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-8">*Disclaimer: Prices are a guideline. For a precise, fixed-price quote, we provide a free, no-obligation on-site assessment.</p>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Rubble Removal Services in Sandton</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Pristine garden in Sandton after rubble removal" data-ai-hint="clean garden sandton" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">We offer a full spectrum of services for Sandton properties.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Estate & Residential Clean-ups:** Discreet removal of renovation debris, garden refuse, and general waste.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garden & Garage Clean-Up:** We handle everything from soil and branches to old furniture and clutter.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Commercial & Construction Debris:** Reliable support for builders and developers in Sandton's business hubs.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Rubble Removal in Sandton</h2>
            <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                        <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </section>

        <section className="mb-16 text-center">
            <h2 className="text-2xl font-semibold">Areas We Serve in and Around Sandton</h2>
            <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
                Our service covers all of Sandton's prestigious suburbs. As the premier **rubble removal contractors in Sandton**, our local teams have deep experience in areas like **Bryanston**, known for its large residential stands, and **Morningside**, with its mix of modern homes and secure complexes. We provide fast, reliable service to **Rivonia**, **Fourways**, and **Lonehill**, supporting the area's constant growth and renovation projects.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-randburg">Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-fourways">Fourways</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-bryanston">Bryanston</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-rosebank">Rosebank</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after rubble removal in Sandton" data-ai-hint="clean site sandton" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Sandton Property Cleared—Fast!</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Call now for same-day rubble removal in Sandton – fast response guaranteed. For a professional, discreet, and reliable rubble removal service, contact the experts at Apex Demolitions.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Speak to a Specialist</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/rubble-removal-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Rubble Removal Johannesburg</Link> | <Link href="/rubble-removal-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
