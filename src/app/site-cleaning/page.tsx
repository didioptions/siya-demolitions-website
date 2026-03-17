import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, ShieldCheck, Home, Building, Factory, Trash2, ArrowRight, Quote, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
    {
        question: "How much does site cleaning cost in Johannesburg?",
        answer: "The cost of site cleaning in Johannesburg depends on the size of the site, the volume and type of debris (e.g., light building waste vs. heavy rubble), and the level of detail required. A small post-renovation cleanup will cost less than a full-scale construction site cleanup. We provide free, detailed, no-obligation quotes so you know the exact cost upfront."
    },
    {
        question: "How long does it take to clean a site?",
        answer: "The timeframe varies. A standard residential post-renovation cleanup can often be done in a single day, and we frequently offer same-day service. Larger construction or industrial sites may require a phased approach over several days. We work efficiently to meet your project deadlines and provide a clear timeline with our quote."
    },
    {
        question: "Do you also remove rubble as part of the site cleaning?",
        answer: "Yes, absolutely. Our site cleaning service is comprehensive and includes the removal of all debris and rubble. We are a licensed rubble removal company, ensuring all waste is loaded, transported, and disposed of legally and responsibly. You do not need to hire a separate rubble removal contractor."
    },
    {
        question: "What areas in Johannesburg do you cover?",
        answer: "We cover all of Johannesburg and the greater Gauteng region. Our teams are strategically located to provide fast service to all suburbs, including Sandton, Randburg, Roodepoort, Midrand, the Johannesburg South, Soweto, and the entire East Rand."
    },
    {
        question: "What types of jobs do you handle?",
        answer: "We handle all types of site cleaning jobs, big or small. This includes post-construction cleaning for major developers, final handover cleaning for contractors, post-renovation tidy-ups for homeowners, and regular waste management for active building sites."
    }
];

export default function SiteCleaningPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const processImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');

  return (
    <div>
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center text-center text-white">
            {heroImage && <Image src={heroImage.imageUrl} alt="Pristine construction site after professional cleaning in Johannesburg" data-ai-hint="clean construction site" fill className="object-cover" priority />}
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Site Cleaning Johannesburg</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
                        Fast, reliable, and affordable cleanup for construction, commercial, and residential sites. Get your Johannesburg project site spotless, safe, and ready for handover.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <a href="tel:0784292760"><Phone /> Call for a Free Quote</a>
                        </Button>
                        <Button size="lg" variant="secondary" asChild>
                            <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp Us Now</a>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black" asChild>
                            <Link href="/contact"><Mail /> Get Quote Online</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                 <h2 className="text-3xl md:text-4xl font-bold">Transform Your Messy Worksite into a Clean, Safe, and Productive Space</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    After the builders, renovators, or demolition crews have left, your site is often a chaotic mix of rubble, dust, offcuts, and packaging. This isn't just an eyesore—it's a safety hazard that halts progress. Professional site cleaning is the essential final step that transforms this mess into a pristine, hazard-free environment. As Johannesburg's leading site cleaning contractors, Apex Demolitions specializes in turning your worksite from chaos to completion, ensuring it's ready for inspection, handover, or the next phase of construction.
                </p>
            </div>
        </section>

        {/* Detailed Services Section */}
        <section className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Comprehensive Site Cleaning Services</h2>
                    <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">We offer a complete range of cleaning and clearing solutions tailored to any project in Johannesburg.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-4"><div className="flex items-center gap-3"><Home className="w-8 h-8 text-primary" /> <h3 className="font-bold text-xl">Residential Site Cleaning</h3></div><p className="text-muted-foreground">Perfect for homeowners after a renovation, extension, or garden project. We remove all building debris, clear away garden refuse, and ensure your home is spotless and ready to be enjoyed.</p></div>
                    <div className="flex flex-col gap-4"><div className="flex items-center gap-3"><Building className="w-8 h-8 text-primary" /> <h3 className="font-bold text-xl">Construction Site Cleaning</h3></div><p className="text-muted-foreground">We partner with builders and developers to provide ongoing site cleaning. We manage waste and debris throughout the project, ensuring a safe and productive environment for all contractors on site.</p></div>
                    <div className="flex flex-col gap-4"><div className="flex items-center gap-3"><Factory className="w-8 h-8 text-primary" /> <h3 className="font-bold text-xl">Commercial & Industrial Cleaning</h3></div><p className="text-muted-foreground">From retail strip-outs to warehouse clear-outs in Johannesburg's industrial hubs. We handle heavy debris, commercial waste, and large-scale cleanups with minimal disruption to your operations.</p></div>
                    <div className="flex flex-col gap-4"><div className="flex items-center gap-3"><Trash2 className="w-8 h-8 text-primary" /> <h3 className="font-bold text-xl">Rubble & Debris Removal</h3></div><p className="text-muted-foreground">Our service includes full <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link>. We load and legally dispose of all concrete, bricks, soil, wood, and mixed waste, so you don't need a separate contractor.</p></div>
                    <div className="flex flex-col gap-4"><div className="flex items-center gap-3"><Sparkles className="w-8 h-8 text-primary" /> <h3 className="font-bold text-xl">Final Handover Cleaning</h3></div><p className="text-muted-foreground">The final, detailed clean before a project is handed over to the client. We ensure every surface is free from dust and construction residue, guaranteeing a professional first impression.</p></div>
                    <div className="flex flex-col gap-4"><div className="flex items-center gap-3"><ShieldCheck className="w-8 h-8 text-primary" /> <h3 className="font-bold text-xl">Site Safety Preparation</h3></div><p className="text-muted-foreground">Beyond cleaning, we prepare your site by removing hazards, clearing access ways, and ensuring it meets safety standards for the next phase of work or for public access.</p></div>
                </div>
                 <div className="text-center mt-12">
                    <Button size="lg" asChild><Link href="/contact">Get a Tailored Cleaning Plan <ArrowRight className="ml-2" /></Link></Button>
                </div>
            </div>
        </section>

        {/* Our Process Section */}
        <section className="py-12 md:py-20 bg-background">
             <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Simple 4-Step Site Cleaning Process</h2>
                    <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">We make professional site cleaning straightforward, transparent, and efficient from start to finish.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Card><CardHeader><CardTitle>1. Site Assessment & Quote</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We visit your Johannesburg site to assess the scope of work and provide a detailed, fixed-price quote with no hidden costs.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>2. Planning & Scheduling</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We create a strategic cleaning plan and schedule the work at a time that suits your project timeline, ensuring minimal disruption.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>3. Cleaning & Clearing</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Our professional team arrives on time to sort, clear, and clean the entire site, removing all specified debris and waste.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>4. Final Disposal & Inspection</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We transport all waste for legal, eco-friendly disposal and conduct a final walkthrough with you to ensure you are 100% satisfied.</p></CardContent></Card>
                </div>
            </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        {processImage && <Image src={processImage.imageUrl} alt="Apex Demolitions team member cleaning a site professionally" data-ai-hint="site cleaning worker" width={600} height={500} className="rounded-lg shadow-lg" />}
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Apex Demolitions for Site Cleaning?</h2>
                        <p className="mt-4 text-lg text-muted-foreground">We are more than just cleaners; we are your partners in project success.</p>
                         <div className="mt-8 grid gap-6">
                             <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">Fast & Reliable Turnaround</h3><p className="text-muted-foreground mt-1 text-sm">We understand that time is money. Our teams are punctual and efficient, with same-day service available in many Johannesburg areas to keep your project moving.</p></div></div>
                            <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">Experienced & Professional Crew</h3><p className="text-muted-foreground mt-1 text-sm">Our uniformed teams are trained, insured, and dedicated to delivering a high-quality service with a professional attitude.</p></div></div>
                             <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">One-Stop Solution</h3><p className="text-muted-foreground mt-1 text-sm">As experts in <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link> and rubble removal, we provide a seamless, integrated service from start to finish. No need to manage multiple contractors.</p></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Service Areas Section - REPLACED */}
        <section id="areas-we-serve" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Comprehensive Site Cleaning Across Greater Johannesburg</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                        Apex Demolitions offers a fully comprehensive site cleaning and rubble removal service to every corner of the Johannesburg metropolitan area. Our strategically located teams ensure a fast, reliable, and professional response, no matter where your project is.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    <div className="bg-card p-6 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">North Johannesburg</h3>
                        <p className="text-sm text-muted-foreground mb-4">We provide elite site cleaning services in Johannesburg's northern suburbs, perfect for post-renovation cleanups in luxury estates and commercial properties.</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                            <li>Sandton</li>
                            <li>Randburg</li>
                            <li>Fourways</li>
                            <li>Bryanston</li>
                            <li>Rosebank</li>
                        </ul>
                    </div>
                    <div className="bg-card p-6 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">East Rand (Ekurhuleni)</h3>
                        <p className="text-sm text-muted-foreground mb-4">Our teams are experts in industrial and residential site clearance across the East Rand, offering reliable rubble removal in Johannesburg's industrial heartland.</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                            <li>Kempton Park</li>
                            <li>Boksburg</li>
                            <li>Benoni</li>
                            <li>Germiston</li>
                            <li>Alberton</li>
                            <li>Bedfordview & Edenvale</li>
                            <li>Brakpan, Springs & Nigel</li>
                        </ul>
                    </div>
                    <div className="bg-card p-6 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">West Rand</h3>
                        <p className="text-sm text-muted-foreground mb-4">Apex Demolitions provides thorough construction site cleaning and debris removal throughout the West Rand, serving both residential and commercial clients.</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                            <li>Roodepoort</li>
                            <li>Krugersdorp</li>
                            <li>Randfontein</li>
                            <li>Westonaria</li>
                        </ul>
                    </div>
                    <div className="bg-card p-6 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">South Johannesburg</h3>
                        <p className="text-sm text-muted-foreground mb-4">We are proud to offer affordable and efficient site cleaning and waste removal services to the communities of Johannesburg South.</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                            <li>Soweto</li>
                            <li>Lenasia</li>
                            <li>Ennerdale</li>
                            <li>Kliprivier</li>
                        </ul>
                    </div>
                    <div className="bg-card p-6 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">Central Johannesburg</h3>
                        <p className="text-sm text-muted-foreground mb-4">Our specialized teams handle complex site clearance projects in the dense urban environment of the Johannesburg CBD and its surrounding areas.</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                            <li>Johannesburg CBD</li>
                            <li>Hillbrow</li>
                            <li>Braamfontein</li>
                            <li>Melville & Northcliff</li>
                        </ul>
                    </div>
                    <div className="bg-card p-6 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">Surrounding Areas</h3>
                        <p className="text-sm text-muted-foreground mb-4">Our service extends to key areas connecting greater Johannesburg, including the rapidly growing Midrand corridor.</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                            <li>Midrand</li>
                            <li>Parts of Ekurhuleni Metro</li>
                            <li>And other surrounding suburbs</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <p className="text-lg font-semibold">Don't see your suburb? We likely cover it. Call us today on 078 429 2760 or WhatsApp us for a free quote – we cover all Johannesburg suburbs and surrounding areas!</p>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
            </div>
        </section>
        
        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
             <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Ready for a Spotless Site?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">
                    Don't let post-construction mess delay your project. Contact Apex Demolitions for a fast, free, and no-obligation quote on professional site cleaning anywhere in Johannesburg.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                        <a href="tel:0784292760"><Phone /> Call for an Instant Quote</a>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                         <Link href="/contact"><Mail /> Request a Detailed Quote</Link>
                    </Button>
                </div>
             </div>
        </section>
    </div>
  );
}
