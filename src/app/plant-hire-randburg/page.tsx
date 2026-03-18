import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Do you offer plant hire for residential projects in Randburg?", answer: "Yes, we provide a range of equipment suitable for residential projects, including mini-excavators and Bobcats for landscaping, pool excavation, and foundation work. Our service is ideal for homeowners and small builders in the Randburg area." },
    { question: "How quickly can you deliver equipment to my site in Randburg?", answer: "We pride ourselves on our rapid response time. For most standard equipment hire in Randburg, we can arrange delivery within 24-48 hours, ensuring your project stays on schedule." },
    { question: "Do your hire rates include an operator?", answer: "Yes, all our plant hire services in Randburg include a fully certified and experienced operator. This ensures the machinery is used safely and efficiently, providing better value and peace of mind for our clients." }
];

export default function PlantHireRandburgPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'plantHireTlb');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'plantHireResidential');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant Hire Services Randburg</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions provides affordable and reliable plant hire for residential and commercial projects throughout Randburg. From Ferndale to Northcliff, get the right machinery and professional operators to get your job done right.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for Rates</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Book Equipment</Link>
                </Button>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Plant Hire Fleet in Randburg</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="TLB hire for a residential project in Randburg" data-ai-hint="tlb hire randburg" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Equipment for any project, big or small.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**TLB & Bobcat Hire:** Perfect for residential earthworks, landscaping, and site clearing in Randburg's suburbs.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Tipper Trucks:** For fast removal of soil, rubble, and garden refuse.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Excavators:** Available for larger projects like deep foundation digging and bulk earthmoving.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Randburg?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Local & Responsive</h4><p className="text-muted-foreground mt-2 text-sm">Our Randburg teams ensure fast delivery and reliable service for your project.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable Rates</h4><p className="text-muted-foreground mt-2 text-sm">We offer competitive pricing for daily, weekly, and monthly equipment hire.</p></div>
                <div><h4 className="font-semibold text-lg">Professional Operators</h4><p className="text-muted-foreground mt-2 text-sm">All our hires include a certified operator to guarantee safety and efficiency.</p></div>
                <div><h4 className="font-semibold text-lg">Versatile Fleet</h4><p className="text-muted-foreground mt-2 text-sm">We have the right machine for any job, from small garden projects to large sites.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Plant Hire in Randburg</h2>
            <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </section>

        <section className="mb-16 text-center">
            <h2 className="text-2xl font-semibold">Nearby Areas We Serve</h2>
            <p className="mt-2 text-muted-foreground">Serving the greater Northern and Western Suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/plant-hire-sandton">Sandton</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-roodepoort">Roodepoort</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-fourways">Fourways</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Residential excavation project in Randburg" data-ai-hint="excavation randburg" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Book Your Plant Hire for Randburg Today</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For reliable and affordable plant hire in Randburg, contact Apex Demolitions for a free quote and expert advice.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get a Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call to Book Now</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/plant-hire-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Plant Hire Johannesburg</Link> | <Link href="/plant-hire-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
