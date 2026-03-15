import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Do you handle small rubble loads from home renovations in Randburg?",
        answer: "Yes, absolutely. We cater to homeowners and small contractors in Randburg. Whether you have debris from a DIY project, a garden cleanup, or a small renovation, we offer an affordable and fast solution. No job is too small for our teams."
    },
    {
        question: "How fast is your rubble removal service in the Randburg area?",
        answer: "We prioritize quick and efficient service across Randburg. We can typically offer same-day or next-day rubble removal, depending on your location and our schedule. We understand that leftover rubble can be a safety hazard, so we work hard to clear your property as quickly as possible."
    },
    {
        question: "Is your rubble removal service in Randburg licensed and insured?",
        answer: "Yes, 100%. SIMA Demolitions Projects is a fully licensed waste carrier, compliant with all City of Johannesburg by-laws. Our service includes comprehensive insurance, giving you complete peace of mind and protecting you from any liability associated with illegal dumping."
    }
];

export default function RubbleRemovalRandburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal Services Randburg</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects is the top choice for fast, affordable, and licensed rubble removal in Randburg. We serve the entire area, providing homeowners and contractors with a hassle-free solution for clearing construction debris, garden refuse, and renovation waste.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Rubble Removal Services in Randburg</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Garden clean-up in Randburg" data-ai-hint="garden clearing randburg" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Our waste clearing service is perfect for any project in Randburg.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Home Renovation Debris:** Quick removal of tiles, bricks, and drywall from your home improvement project.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garden & Yard Refuse:** We clear soil, branches, and other organic waste to tidy up your property.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Garage & Shed Clean-Up:** Reclaim your space by letting us clear out old junk and clutter.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Randburg?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Fast Local Teams</h4><p className="text-muted-foreground mt-2 text-sm">Our Randburg-based crews ensure a rapid response for your site clearing needs.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable for All Jobs</h4><p className="text-muted-foreground mt-2 text-sm">We offer competitive pricing for both small residential jobs and larger construction sites.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Licensed</h4><p className="text-muted-foreground mt-2 text-sm">We comply with all CoJ waste disposal laws, protecting you from any legal risks.</p></div>
                <div><h4 className="font-semibold text-lg">Professional & Reliable</h4><p className="text-muted-foreground mt-2 text-sm">We pride ourselves on providing a dependable, hassle-free service from start to finish.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Rubble Removal in Randburg</h2>
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
            <p className="mt-2 text-muted-foreground">Our teams cover all surrounding Johannesburg suburbs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-sandton">Sandton</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-roodepoort">Roodepoort</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-fourways">Fourways</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-northcliff">Northcliff</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after rubble removal in Randburg" data-ai-hint="clean site randburg" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Randburg Property Cleared Today</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact SIMA for a fast, free, and no-obligation quote on licensed rubble removal in Randburg. Let us get your space cleared.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Pickup</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/rubble-removal-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Rubble Removal Johannesburg</Link> | <Link href="/rubble-removal-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
