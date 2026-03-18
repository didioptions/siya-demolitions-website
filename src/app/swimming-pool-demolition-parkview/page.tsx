
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Do you take special care when working on heritage properties in Parkview?", answer: "Yes, we have immense respect for the architectural heritage of Parkview. Our teams work with surgical precision to remove pools without impacting the main residence or historically significant garden features. We can also consult on any heritage compliance issues." },
    { question: "How do you protect the large, established trees during demolition?", answer: "Protecting Parkview's magnificent trees is a top priority. We use protective barriers and carefully plan our machinery access and demolition process to ensure no harm comes to the root systems or branches of your valuable trees." },
    { question: "My property borders the Parkview Golf Club. How do you manage this?", answer: "We are highly experienced in working on properties that adjoin the golf course. We use enhanced safety and containment measures, such as debris netting, to ensure no material or dust drifts onto the course, showing full respect for the club and its members." }
];

export default function DemolitionParkviewPage() {
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Parkview</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Heritage & Garden Protection Specialists
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Apex Demolitions provides a specialized swimming pool demolition service for the prestigious suburb of Parkview. We work with the utmost care to protect the area's heritage homes, established gardens, and the tranquility of the golf course environment.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Consultation</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp for a Quote</a></Button>
          </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Pool Removal in Parkview?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Heritage Aware</h3><p className="text-sm text-muted-foreground">We operate with the sensitivity and care required for Parkview's historic properties.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Garden Protection Experts</h3><p className="text-sm text-muted-foreground">We use specific techniques to preserve your mature trees and landscaping.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Golf Course Protocol</h3><p className="text-sm text-muted-foreground">We are experienced in working alongside golf courses with zero disruption.</p></div></div>
            </div>
        </section>

        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Careful & Considered 5-Step Process</h2>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">On-Site Consultation:</span> We assess the site to create a plan that protects your property.</li>
                        <li><span className="font-semibold text-foreground">Protective Measures:</span> We secure the work area and protect surrounding garden features.</li>
                        <li><span className="font-semibold text-foreground">Precision Demolition:</span> Careful, sectional breaking of the pool structure.</li>
                        <li><span className="font-semibold text-foreground">Thorough Rubble Removal:</span> Complete clearing of all demolition debris.</li>
                        <li><span className="font-semibold text-foreground">Garden-Ready Finish:</span> We leave the area clean, level, and ready for your new lawn or garden bed.</li>
                    </ol>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A beautiful, established garden in Parkview" data-ai-hint="manicured garden" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Pool Demolition Parkview</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-semibold text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Quote for Your Parkview Pool Removal</h2>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now: 078 429 2760</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
