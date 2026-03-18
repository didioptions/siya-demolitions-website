import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How do you operate within Fourways' secure lifestyle estates?", answer: "We are experts in working within the strict rules of Fourways estates like Dainfern and Broadacres. We coordinate with estate management to ensure our machinery and operators are compliant, clean, and minimally disruptive to the community." },
    { question: "Can I hire a Bobcat for landscaping my garden in Fourways?", answer: "Yes, our Bobcat hire service is perfect for residential landscaping, site leveling, and moving soil or rubble in gardens of all sizes. It's a cost-effective way to get professional results for your home project." },
    { question: "Are your plant hire services insured?", answer: "Absolutely. Apex Demolitions is fully insured for all our operations, including plant hire. This gives you complete peace of mind knowing that your property is protected when our machinery is on-site." }
];

export default function PlantHireFourwaysPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'plantHireResidential');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant Hire Services Fourways</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Apex Demolitions offers professional and insured plant hire services tailored for the Fourways area. We specialize in providing reliable equipment and certified operators for projects within secure lifestyle estates and residential suburbs.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Plant Hire Fleet in Fourways</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Bobcat clearing a site in a Fourways estate" data-ai-hint="bobcat hire fourways" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">The right machine for your Fourways project.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Bobcat & TLB Hire:** Perfect for landscaping, pool excavations, and foundation work in residential estates.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Tipper Trucks:** For quick and efficient removal of soil, rubble, and other debris.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Mini-Excavators:** For digging in tight or sensitive areas without damaging surroundings.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Fourways?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Estate Specialists</h4><p className="text-muted-foreground mt-2 text-sm">We are experts in adhering to the strict rules of Fourways' secure estates.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured</h4><p className="text-muted-foreground mt-2 text-sm">Our comprehensive insurance protects your valuable property during all operations.</p></div>
                <div><h4 className="font-semibold text-lg">Local & Responsive</h4><p className="text-muted-foreground mt-2 text-sm">Our nearby teams ensure fast delivery and efficient service for Fourways residents.</p></div>
                <div><h4 className="font-semibold text-lg">Safety is Key</h4><p className="text-muted-foreground mt-2 text-sm">Our certified operators ensure every job is completed safely and without incident.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Plant Hire in Fourways</h2>
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
            <p className="mt-2 text-muted-foreground">Serving the greater Northern Suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/plant-hire-sandton">Sandton</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-bryanston">Bryanston</Link></Button>
                <Button variant="outline" asChild><Link href="/plant-hire-randburg">Randburg</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Residential construction project in Fourways" data-ai-hint="construction fourways" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Fourways Project Moving</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For professional, insured, and reliable plant hire in Fourways, contact the local experts at Apex Demolitions.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
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
