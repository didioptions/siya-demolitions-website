import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How do you handle rubble removal on the steep slopes of Northcliff?",
        answer: "We have specific experience working on the challenging terrain of Northcliff. Our teams use smaller, more agile vehicles and safe loading techniques to manage rubble removal on steep driveways and properties. We take extra care to prevent any damage to retaining walls, gardens, and neighboring properties."
    },
    {
        question: "Can you remove large amounts of soil and rock from a site in Northcliff?",
        answer: "Yes, excavation and land clearing projects on the Northcliff ridge often produce large volumes of soil and rock. We have the heavy-duty trucks and equipment to handle this type of dense, heavy rubble, ensuring your site is properly cleared and prepared for the next phase of construction or landscaping."
    },
    {
        question: "How do you protect established gardens during a cleanup?",
        answer: "We understand that Northcliff gardens are a key feature of many properties. Before starting, we consult with you to identify and protect sensitive plants and lawn areas. We use wheelbarrows and protective boards to move debris where necessary, minimizing our footprint and preserving your beautiful garden."
    }
];

export default function RubbleRemovalNorthcliffPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal Services Northcliff</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects offers specialized rubble removal services for the unique properties of Northcliff. We are experts at navigating the area's steep slopes and established gardens, providing a safe, reliable, and careful site clearing service for homeowners and contractors.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Quote</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Free Quote</Link>
                </Button>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Rubble Removal Services in Northcliff</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing a steep site in Northcliff" data-ai-hint="site clearing northcliff" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Specialist services for Northcliff's terrain.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Hillside Cleanups:** Safe and careful removal of renovation and construction debris from properties on steep slopes.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garden & Soil Removal:** Efficient clearing of large volumes of soil, rock, and garden refuse from landscaping projects.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garage and General Waste:** We clear out garages and remove general household junk to help you declutter.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Northcliff?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Hillside Specialists</h4><p className="text-muted-foreground mt-2 text-sm">We have the right equipment and techniques for safely working on Northcliff's slopes.</p></div>
                <div><h4 className="font-semibold text-lg">Property Protection</h4><p className="text-muted-foreground mt-2 text-sm">We take extra care to protect your established gardens, walls, and paving.</p></div>
                <div><h4 className="font-semibold text-lg">Licensed & Insured</h4><p className="text-muted-foreground mt-2 text-sm">Full compliance with CoJ regulations provides you with complete peace of mind.</p></div>
                <div><h4 className="font-semibold text-lg">Reliable & Professional</h4><p className="text-muted-foreground mt-2 text-sm">We are committed to providing a dependable service with clear communication.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Rubble Removal in Northcliff</h2>
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
            <p className="mt-2 text-muted-foreground">Serving the West Rand and surrounding suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-roodepoort">Roodepoort</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-randburg">Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-melville">Melville</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after rubble removal in Northcliff" data-ai-hint="clean site northcliff" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Northcliff Property Cleared</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For a safe, reliable, and professional rubble removal service in Northcliff, contact the local experts at SIMA Demolitions.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for a Site Assessment</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/rubble-removal-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Rubble Removal Johannesburg</Link> | <Link href="/rubble-removal-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
