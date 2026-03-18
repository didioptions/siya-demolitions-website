
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Can you handle pool demolition in high-rise buildings?", answer: "Yes, we are experienced in the complex logistics of removing pools from high-rise hotels, apartment buildings, and gyms in the CBD. We coordinate with building management and use specialized equipment for indoor or rooftop projects." },
    { question: "How do you manage demolition in a busy, high-traffic area?", answer: "We implement strict safety and traffic management plans, often scheduling work for off-peak hours or weekends to minimize disruption. Public safety is our absolute priority." },
    { question: "Is your team insured for large-scale commercial demolitions?", answer: "Absolutely. We carry comprehensive public liability insurance that covers all our commercial operations, giving you and your stakeholders complete peace of mind." }
];

export default function DemolitionJohannesburgCbdPage() {
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Johannesburg CBD</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> The Inner-City Commercial Pool Removal Experts
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Apex Demolitions provides specialized swimming pool demolition for the unique challenges of the Johannesburg CBD. We are the trusted partners for hotels, property managers, and developers needing to remove pools from commercial buildings, rooftops, and high-density residential complexes.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Site Assessment</a></Button>
            <Button size="lg" variant="secondary" asChild><Link href="/contact">Request a Project Quote</Link></Button>
          </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Pool Removal in the CBD?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Urban Logistics Experts</h3><p className="text-sm text-muted-foreground">We master the complexities of traffic, access, and timing in the busy CBD.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">High-Rise Specialists</h3><p className="text-sm text-muted-foreground">We have the equipment and expertise for rooftop and indoor pool demolitions.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Minimal Disruption</h3><p className="text-sm text-muted-foreground">We work efficiently and can operate during off-peak hours to suit your business needs.</p></div></div>
            </div>
        </section>

        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Safe & Efficient 5-Step Process</h2>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Assessment & Quote:</span> A detailed, fixed-price quote after a full technical assessment.</li>
                        <li><span className="font-semibold text-foreground">Logistics & Safety Plan:</span> We coordinate with building management and secure the work area.</li>
                        <li><span className="font-semibold text-foreground">Controlled Demolition:</span> Careful breaking and removal of the pool structure.</li>
                        <li><span className="font-semibold text-foreground">Debris Removal:</span> All rubble is efficiently removed from the building and transported off-site.</li>
                        <li><span className="font-semibold text-foreground">Site Cleanup:</span> We leave the area clean and ready for its next purpose.</li>
                    </ol>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A clean space where a swimming pool used to be in Johannesburg CBD" data-ai-hint="green lawn backyard" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Pool Demolition JHB CBD</h2>
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
          <h2 className="text-3xl font-bold">Get a Quote for Your CBD Pool Removal</h2>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now: 078 429 2760</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
