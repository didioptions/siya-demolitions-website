import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How do you operate within Fourways' secure lifestyle estates?", answer: "We are experts at working within the strict rules of Fourways estates like Dainfern and Broadacres. We coordinate with estate management to ensure our work is compliant, clean, and minimally disruptive to the community." },
    { question: "Can you safely remove trees that are very close to my house?", answer: "Yes, this is our specialty. We use a technique called sectional dismantling, where we carefully cut and lower parts of the tree using ropes. This allows us to remove trees from confined spaces with zero risk to your home, pool, or garden." },
    { question: "Do you also remove the stump after felling the tree?", answer: "Yes, we offer a comprehensive service that includes stump grinding. We can grind the stump well below the ground's surface, allowing you to plant grass or new plants over the area, leaving no trace of the tree." }
];

export default function TreeFellingFourwaysPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services Fourways</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects offers professional and insured tree felling services tailored for the Fourways area. We specialize in safe tree removal within secure lifestyle estates and residential suburbs, ensuring the safety and beauty of your property.
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
            <h2 className="text-3xl font-bold text-center mb-12">Professional Tree Felling Services in Fourways</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Safely removing a large tree in a Fourways garden" data-ai-hint="tree removal fourways" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <p className="text-muted-foreground mb-4">Complete tree care for the Fourways community.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Secure Estate Tree Felling:** Compliant and discreet tree removal in estates like Dainfern, Cedar Lakes, and Broadacres.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Precision Removal in Tight Spaces:** Safe dismantling of trees located close to walls, pools, and houses.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Stump Grinding & Full Cleanup:** We leave your property spotless, with the stump removed and all debris cleared.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Team in Fourways?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Estate Specialists</h4><p className="text-muted-foreground mt-2 text-sm">We are experts in adhering to the strict rules of Fourways' secure lifestyle estates.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Insured</h4><p className="text-muted-foreground mt-2 text-sm">Our comprehensive insurance protects your valuable property during all operations.</p></div>
                <div><h4 className="font-semibold text-lg">Local & Responsive</h4><p className="text-muted-foreground mt-2 text-sm">Our teams are based nearby, ensuring a fast and efficient service for Fourways residents.</p></div>
                <div><h4 className="font-semibold text-lg">Safety is Key</h4><p className="text-muted-foreground mt-2 text-sm">We use advanced techniques to guarantee a safe removal every time.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Tree Felling in Fourways</h2>
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
                <Button variant="outline" asChild><Link href="/tree-felling-sandton">Sandton</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-bryanston">Bryanston</Link></Button>
                <Button variant="outline" asChild><Link href="/tree-felling-midrand">Midrand</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine property after tree removal in Fourways" data-ai-hint="clean property fourways" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Fourways Tree Removed by Professionals</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">For a safe, licensed, and reliable tree felling service in Fourways, contact the local experts at SIMA Demolitions.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Removal</a></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/tree-felling-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Tree Felling Johannesburg</Link> | <Link href="/tree-felling-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
