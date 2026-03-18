import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Do you offer plant hire across the entire West Rand?", answer: "Yes, our plant hire service covers all of Roodepoort and the greater West Rand. From residential suburbs like Weltevreden Park to construction sites near Clearwater Mall, our local teams provide fast and reliable service." },
    { question: "Can I hire a TLB for a single day for a project at my home?", answer: "Absolutely. We offer flexible daily hire rates for our TLBs and Bobcats, which is perfect for homeowners in Roodepoort needing to do landscaping, dig a trench, or clear a site for a renovation." },
    { question: "Are your operators experienced with working on sloped properties?", answer: "Yes, our operators are highly experienced and certified in working on varied terrains, including the sloped properties common in parts of Roodepoort. They adhere to strict safety protocols to ensure the job is done safely and efficiently." }
];

export default function PlantHireRoodepoortPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'plantHireTlb');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'plantHireResidential');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant Hire Services Roodepoort</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions is the West Rand's trusted choice for professional plant hire in Roodepoort. We provide reliable machinery and certified operators for all residential, commercial, and industrial projects, ensuring your job gets done efficiently and on budget.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for Rates</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Book Your Equipment</Link>
                </Button>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Plant Hire Fleet in Roodepoort</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="TLB at a residential site in Roodepoort" data-ai-hint="tlb hire roodepoort" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">The right equipment for any West Rand project.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**TLB & Bobcat Hire:** Ideal for foundation digging, trenching, and landscaping in Roodepoort's suburbs.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Tipper Trucks:** For efficient removal of soil and construction debris from your site.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Excavators:** For larger site clearing, bulk earthworks, and demolition projects.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Roodepoort?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">West Rand Specialists</h4><p className="text-muted-foreground mt-2 text-sm">Our local teams know Roodepoort and the West Rand, ensuring fast and knowledgeable service.</p></div>
                <div><h4 className="font-semibold text-lg">Safety-First Approach</h4><p className="text-muted-foreground mt-2 text-sm">Our certified operators are experts in site safety, especially on difficult terrain.</p></div>
                <div><h4 className="font-semibold text-lg">Well-Maintained Fleet</h4><p className="text-muted-foreground mt-2 text-sm">Our reliable machinery prevents breakdowns and keeps your project on track.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable & Reliable</h4><p className="text-muted-foreground mt-2 text-sm">We offer competitive daily and long-term rates with dependable service.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Plant Hire in Roodepoort</h2>
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
            <p className="mt-2 text-muted-foreground">Serving the entire West Rand.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/plant-hire-randburg">Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-krugersdorp">Krugersdorp</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-northcliff">Northcliff</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Construction site in Roodepoort" data-ai-hint="construction roodepoort" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Roodepoort Project Moving</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For a fast, free quote on professional plant hire in Roodepoort, contact the local experts at Apex Demolitions today.</p>
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
