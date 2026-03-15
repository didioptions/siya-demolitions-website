import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, MapPin, Quote, Axe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const suburbs = [
    { name: "Sandton", href: "/tree-felling-sandton" }, { name: "Randburg", href: "/tree-felling-randburg" },
    { name: "Roodepoort", href: "/tree-felling-roodepoort" }, { name: "Midrand", href: "/tree-felling-midrand" },
    { name: "Fourways", href: "/tree-felling-fourways" }, { name: "Soweto", href: "/tree-felling-soweto" },
    { name: "Alberton", href: "/tree-felling-alberton" }, { name: "Germiston", href: "/tree-felling-germiston" },
    { name: "Boksburg", href: "/tree-felling-boksburg" }, { name: "Benoni", href: "/tree-felling-benoni" },
    { name: "Kempton Park", href: "/tree-felling-kempton-park" }, { name: "Bedfordview", href: "/tree-felling-bedfordview" },
    { name: "Edenvale", href: "/tree-felling-edenvale" }, { name: "Bryanston", href: "/tree-felling-bryanston" },
    { name: "Rosebank", href: "/tree-felling-rosebank" }, { name: "Northcliff", href: "/tree-felling-northcliff" },
    { name: "Melville", href: "/tree-felling-melville" }, { name: "Linden", href: "/tree-felling-linden" },
    { name: "Parkhurst", href: "/tree-felling-parkhurst" }, { name: "Greenside", href: "/tree-felling-greenside" },
];

const faqs = [
    { question: "How much does tree felling cost in Johannesburg?", answer: "The cost depends on the tree's size, location, accessibility, and the complexity of the removal. We provide free, no-obligation quotes for an accurate price." },
    { question: "Do I need a permit for tree felling in Johannesburg?", answer: "For certain protected indigenous trees, yes. We will advise you on any necessary permits from the City of Johannesburg during our site assessment." },
    { question: "How do you ensure safety during tree removal?", answer: "Our teams are fully trained and insured. We use professional equipment and proven techniques like sectional dismantling to ensure no damage to your property." },
    { question: "Do you also remove the tree stump?", answer: "Yes, we offer stump grinding and removal services to leave your property completely clear and level after the tree has been felled." },
    { question: "How quickly can you remove a fallen or dangerous tree?", answer: "We offer an emergency tree felling service for urgent situations and prioritize these calls to ensure your property is made safe as quickly as possible." }
];

export default function TreeFellingJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'treeFelling');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services in Johannesburg</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                SIMA Demolitions Projects offers safe, professional, and licensed tree felling services in Johannesburg. Our experienced tree felling contractors Johannesburg team handles everything from single tree removal to large-scale vegetation clearing for residential and commercial clients across all suburbs.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Free Quote</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request an Assessment</Link>
                </Button>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Tree Felling Services Johannesburg</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Professional tree felling services in Johannesburg" data-ai-hint="tree felling" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Axe className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Tree Cutting & Removal:** Safe felling of trees of all sizes.</span></li>
                        <li className="flex items-start gap-3"><Axe className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Stump Grinding & Removal:** Complete removal of stumps below ground level.</span></li>
                        <li className="flex items-start gap-3"><Axe className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Tree Pruning & Trimming:** Improving tree health and safety.</span></li>
                        <li className="flex items-start gap-3"><Axe className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Vegetation & Site Clearing:** Preparing land for construction or landscaping.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us for Tree Felling in Johannesburg?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Licensed & Insured</h3><p className="text-sm text-muted-foreground">Full compliance and insurance for your peace of mind.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Safety First</h3><p className="text-sm text-muted-foreground">We use advanced techniques to protect your property.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Experienced Team</h3><p className="text-sm text-muted-foreground">Our arborists are trained and experienced in handling complex removals.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Full Cleanup Service</h3><p className="text-sm text-muted-foreground">We remove all wood, branches, and debris from your property.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Affordable Pricing</h3><p className="text-sm text-muted-foreground">Competitive and transparent quotes with no hidden costs.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Emergency Services</h3><p className="text-sm text-muted-foreground">Fast response for storm-damaged or hazardous trees.</p></div></div>
            </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Tree Felling Across All Johannesburg Suburbs</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                We offer localized tree felling services across Johannesburg. Click on your suburb to learn more, or visit our <Link href="/tree-felling-services-johannesburg" className="text-primary hover:underline">main services hub</Link>.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                {suburbs.map(suburb => (
                    <Button key={suburb.name} variant="outline" asChild>
                        <Link href={suburb.href}><MapPin className="mr-2" /> {suburb.name}</Link>
                    </Button>
                ))}
            </div>
      </section>

        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">FAQ – Tree Felling Johannesburg</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Tree Felling Quote in Johannesburg</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            For safe and professional tree removal, contact SIMA Demolitions today. We serve all of Johannesburg with licensed and insured services.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                  <a href="tel:0784292760"><Phone />Call for a Fast Quote</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link href="/contact"><Mail />Request a Free Quote</Link>
              </Button>
          </div>
        </section>
    </div>
  );
}
