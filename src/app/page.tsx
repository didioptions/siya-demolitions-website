
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check, Phone, MessageSquare, Star, Users, Tractor, ShieldCheck, Briefcase, Building, Trash2, Sparkles, Leaf, Axe, Factory, ArrowRight } from "lucide-react";
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: {
        absolute: "Demolition, Plant Hire & Rubble Removal Johannesburg | Apex",
    },
    description: "Top-rated demolition, plant hire, and rubble removal in Johannesburg. Licensed contractors for site clearing, tree felling, and more. Same-day service available. Get a free quote.",
};

const faqs = [
    { question: "How much does demolition cost in Johannesburg?", answer: "Demolition costs vary based on the structure's size, materials, and site access. We provide a free, detailed on-site quote to give you a fixed price with no surprises, ensuring affordable and transparent pricing for your project." },
    { question: "Do you offer same-day service?", answer: "Yes, we specialize in rapid response. We offer same-day service for most rubble removal, plant hire, and urgent tree felling jobs in Johannesburg, depending on our schedule and your location. Call us early to secure a slot for the quickest service." },
    { question: "What areas in Johannesburg do you cover?", answer: "We cover all of Johannesburg and the greater Gauteng area. Our teams are active daily in Sandton, Randburg, Midrand, Roodepoort, Johannesburg South, and the East Rand. No matter where your site is, we have a local team ready to assist." },
    { question: "What equipment do you use?", answer: "We have a full fleet of professional machinery, including TLBs, Bobcats, tipper trucks, and excavators. We use the right equipment for the job to ensure efficiency and safety, whether it's for a small residential cleanup or a large-scale industrial demolition." }
];

export default function Home() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'homeHero');

  return (
    <>
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
            {heroImage && <Image src={heroImage.imageUrl} alt="Demolition and rubble removal site in Johannesburg" data-ai-hint="demolition site" fill className="object-cover" priority />}
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Demolition, Plant Hire & Rubble Removal Johannesburg – Same-Day Service</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
                      Professional demolition contractors in Johannesburg offering plant hire, rubble removal, and site clearance. Fully equipped with TLBs, tipper trucks, and expert teams ready for any project.
                    </p>
                     <div className="mt-6 bg-white/10 backdrop-blur-sm p-4 rounded-lg inline-block">
                        <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 text-sm font-medium">
                            <li className="flex items-center justify-center gap-2"><Check className="text-accent h-4 w-4" /> Same-Day Service</li>
                            <li className="flex items-center justify-center gap-2"><Check className="text-accent h-4 w-4" /> 6 Cube Trucks From R1200</li>
                            <li className="flex items-center justify-center gap-2"><Check className="text-accent h-4 w-4" /> TLB & Bobcat Hire</li>
                            <li className="flex items-center justify-center gap-2"><Check className="text-accent h-4 w-4" /> Residential & Commercial</li>
                        </ul>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <a href="tel:0784292760"><Phone /> Call for a Quote</a>
                        </Button>
                        <Button size="lg" variant="secondary" asChild>
                            <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">
                                <MessageSquare/> WhatsApp for Fast Response
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-12 md:py-16 bg-card border-b">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold">Johannesburg’s Trusted Demolition & Plant Hire Experts</h2>
             <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                With over 15+ years of experience, we deliver reliable demolition, rubble removal, and plant hire services across Johannesburg. Our team is fully equipped with professional machinery and handles projects of all sizes safely and efficiently.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm font-medium">
                <div className="flex flex-col items-center justify-center gap-2 bg-background p-4 rounded-lg"><Star className="text-primary h-6 w-6" /> 15+ Years Experience</div>
                <div className="flex flex-col items-center justify-center gap-2 bg-background p-4 rounded-lg"><Users className="text-primary h-6 w-6" /> Professional Teams</div>
                <div className="flex flex-col items-center justify-center gap-2 bg-background p-4 rounded-lg"><Tractor className="text-primary h-6 w-6" /> Fully Equipped</div>
                <div className="flex flex-col items-center justify-center gap-2 bg-background p-4 rounded-lg"><ShieldCheck className="text-primary h-6 w-6" /> Legal Waste Disposal</div>
                <div className="flex flex-col items-center justify-center gap-2 bg-background p-4 rounded-lg"><Briefcase className="text-primary h-6 w-6" /> Residential & Commercial</div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Your One-Stop Solution for Site Preparation in Johannesburg</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                        From initial demolition to final site clearing, we provide a complete range of services to prepare your property for its next phase. We are contractors, not just a rental company, managing your project from start to finish.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="flex flex-col">
                        <CardHeader><CardTitle className="flex items-center gap-2"><Building /> Demolition Services</CardTitle></CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">As top-tier <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition Johannesburg</Link> contractors, we handle everything from full house demolition and commercial building removal to precise internal strip-outs. We prepare your site safely and efficiently for new construction, ensuring all work is compliant and professionally managed.</p>
                        </CardContent>
                    </Card>
                     <Card className="flex flex-col">
                        <CardHeader><CardTitle className="flex items-center gap-2"><Tractor /> Plant Hire</CardTitle></CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">Get the right machinery with our <Link href="/plant-hire-johannesburg" className="text-primary hover:underline">plant hire Johannesburg</Link> service. We provide TLBs, Bobcats, and tipper trucks with certified operators for excavation, trenching, site clearing, and material handling, ensuring your project runs smoothly.</p>
                        </CardContent>
                    </Card>
                     <Card className="flex flex-col">
                        <CardHeader><CardTitle className="flex items-center gap-2"><Trash2 /> Rubble Removal</CardTitle></CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">Our fast and reliable <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal Johannesburg</Link> service clears all construction debris, builders rubble, garden refuse, and industrial waste. We offer same-day service to keep your site safe and productive, with legal disposal guaranteed.</p>
                        </CardContent>
                    </Card>
                     <Card className="flex flex-col">
                        <CardHeader><CardTitle className="flex items-center gap-2"><Sparkles /> Site Clearance</CardTitle></CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">Our comprehensive <Link href="/site-cleaning-johannesburg" className="text-primary hover:underline">site clearance service</Link> combines demolition, rubble removal, and earthmoving to prepare your land for development. We clear vegetation, remove old foundations, and level the site, providing a clean, build-ready plot.</p>
                        </CardContent>
                    </Card>
                     <Card className="flex flex-col">
                        <CardHeader><CardTitle className="flex items-center gap-2"><Leaf /> Garden Refuse Removal</CardTitle></CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">We handle all green waste, from simple garden refuse removal to professional tree felling. Our teams can safely remove overgrown trees, clear invasive species, and remove all organic waste, leaving your garden pristine.</p>
                        </CardContent>
                    </Card>
                     <Card className="flex flex-col">
                        <CardHeader><CardTitle className="flex items-center gap-2"><Factory /> Industrial Waste Removal</CardTitle></CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">We provide specialized waste management for industrial sites in areas like Germiston, handling scrap metal, factory clean-outs, and hazardous material disposal in compliance with all safety and environmental regulations.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold">Leading Demolition & Plant Hire Company in Johannesburg</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    We are one of Johannesburg’s most trusted demolition and plant hire companies, handling projects across Sandton, Randburg, Midrand, and surrounding areas. From small residential jobs to large-scale construction projects, our team delivers reliable, fast, and professional service every time.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                    Our commitment to quality, safety, and efficiency has made us a preferred choice for homeowners, builders, and businesses across Johannesburg.
                </p>
                <div className="mt-6 text-xl font-bold text-foreground flex items-center justify-center gap-2 bg-background p-4 rounded-lg shadow-sm">
                    <Check className="text-green-500 h-6 w-6" /> Successfully completed hundreds of projects across Johannesburg
                </div>
            </div>
        </section>

        <section id="pricing" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Affordable Pricing in Johannesburg</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">We believe in clear, upfront pricing with no hidden costs. Here's a guideline for our most popular services.</p>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                     <Card>
                        <CardHeader><CardTitle>Small Loads</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">from R600</p>
                            <p className="text-muted-foreground mt-2">For garden refuse or small DIY project waste.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>6 Cube Truck</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">from R1200</p>
                            <p className="text-muted-foreground mt-2">Standard for builders rubble and renovation debris.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Plant Hire</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">Custom Pricing</p>
                            <p className="text-muted-foreground mt-2">By the day or hour, with an operator included.</p>
                        </CardContent>
                    </Card>
                </div>
                 <div className="text-center mt-8">
                     <Button asChild>
                        <Link href="/contact">Contact Us For a Fast Quote <ArrowRight className="ml-2" /></Link>
                     </Button>
                </div>
            </div>
        </section>

        <section className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">How Our Service Works</h2>
                    <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">Getting your site cleared is easy. Our 5-step process ensures a fast and professional service every time.</p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 max-w-5xl mx-auto text-center">
                    <div className="flex flex-col items-center gap-2"><div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-12 w-12 text-lg font-bold">1</div><h3 className="font-semibold mt-2">Call or WhatsApp Us</h3><p className="text-sm text-muted-foreground">Tell us about your project requirements.</p></div>
                    <div className="flex flex-col items-center gap-2"><div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-12 w-12 text-lg font-bold">2</div><h3 className="font-semibold mt-2">Send Location & Photos</h3><p className="text-sm text-muted-foreground">For rubble removal, send a pic for a quick estimate.</p></div>
                    <div className="flex flex-col items-center gap-2"><div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-12 w-12 text-lg font-bold">3</div><h3 className="font-semibold mt-2">Get a Fast Quote</h3><p className="text-sm text-muted-foreground">We provide a clear, no-obligation quote.</p></div>
                    <div className="flex flex-col items-center gap-2"><div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-12 w-12 text-lg font-bold">4</div><h3 className="font-semibold mt-2">We Arrive On-Site</h3><p className="text-sm text-muted-foreground">Our team arrives on time, often the same day.</p></div>
                    <div className="flex flex-col items-center gap-2"><div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-12 w-12 text-lg font-bold">5</div><h3 className="font-semibold mt-2">Job Completed</h3><p className="text-sm text-muted-foreground">We finish the job efficiently and leave your site clean.</p></div>
                </div>
            </div>
        </section>

        <section id="recent-projects" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Projects Completed</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>✔ Sandton – Full house demolition completed within 5 days</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Complete demolition of a luxury home in a secure estate, including foundation removal and site leveling, preparing the plot for a new build ahead of schedule.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>✔ Randburg – 6 cube rubble removal after renovation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Same-day service to remove a full truckload of renovation debris from a residential property, allowing other contractors to proceed without delay.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                             <CardTitle>✔ Midrand – Full site clearance for new development project</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Ongoing site clearance, including vegetation removal and bulk earthworks with our plant hire equipment, keeping a large development safe and productive.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        <section className="py-12 md:py-20 bg-card text-center">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <h2 className="text-3xl font-bold">Complete Construction & Demolition Solutions</h2>
                 <p className="mt-4 text-lg text-muted-foreground">
                    We provide complete construction support services in Johannesburg, including <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link>, <Link href="/plant-hire-johannesburg" className="text-primary hover:underline">plant hire</Link>, <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link>, and site preparation. Our team ensures every project is handled professionally from start to finish.
                 </p>
            </div>
        </section>

        <section id="areas-we-serve" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold mb-8">Serving All of Johannesburg and Surrounds</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto mb-10">Our teams are strategically positioned to provide fast, reliable services across all of Johannesburg's key suburbs.</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild variant="outline"><Link href="/demolition-sandton">Sandton</Link></Button>
                    <Button asChild variant="outline"><Link href="/demolition-randburg">Randburg</Link></Button>
                    <Button asChild variant="outline"><Link href="/demolition-midrand">Midrand</Link></Button>
                    <Button asChild variant="outline"><Link href="/demolition-roodepoort">Roodepoort</Link></Button>
                    <Button asChild variant="outline"><Link href="/demolition-fourways">Fourways</Link></Button>
                    <Button asChild variant="outline"><Link href="/demolition-soweto">Johannesburg South</Link></Button>
                </div>
                 <p className="text-center text-sm text-muted-foreground mt-8">Same-day and urgent services are available across Johannesburg depending on project size and location.</p>
            </div>
        </section>
        
        <section id="faq" className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
                <div className="text-center mt-8">
                     <p className="text-sm text-muted-foreground">See our Google Reviews or <a href="https://g.page/r/CZ4yPlKY6ihdEAE/review" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">leave us a review</a> to hear what our clients say about our work.</p>
                </div>
            </div>
        </section>
        
        <section id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
             <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Need Demolition or Plant Hire Today?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">
                    Call or WhatsApp now for fast, same-day service anywhere in Johannesburg. Our team is ready to provide a professional quote and get your project moving.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                        <a href="tel:0784292760"><Phone /> Call for a Quote</a>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                         <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp for Fast Response</a>
                    </Button>
                </div>
             </div>
        </section>
    </>
  );
}
