
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Do you service all of Springs and the Far East Rand?", answer: "Yes, our pool demolition services cover the entire Springs area, as well as neighbouring towns like Nigel and Brakpan. Our local teams provide a fast, reliable service across the region." },
    { question: "Is your pool demolition service insured?", answer: "Yes, our service is fully insured. We carry comprehensive public liability insurance to protect your property, giving you complete peace of mind throughout the project." },
    { question: "Can you remove an old, damaged concrete pool?", answer: "Absolutely. We are experts at breaking and removing even the toughest, oldest concrete and marbelite pools. We have the right equipment to get the job done efficiently and safely." },
];

export default function DemolitionSpringsPage() {
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Springs</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> The East Rand's Trusted Pool Removal Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Apex Demolitions provides reliable and professional swimming pool demolition in Springs and the Far East Rand. Reclaim your yard space and get rid of the costs and hassle of an old pool with our all-in-one removal service.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Free Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp for a Fast Quote</a></Button>
          </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Pool Removal in Springs?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Local East Rand Team</h3><p className="text-sm text-muted-foreground">Our local presence ensures we provide a fast, reliable, and community-trusted service in Springs.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Affordable & Transparent</h3><p className="text-sm text-muted-foreground">We offer competitive quotes with no hidden costs, making professional service accessible.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Complete Cleanup</h3><p className="text-sm text-muted-foreground">Our service includes full rubble removal and site leveling, leaving your property spotless.</p></div></div>
            </div>
        </section>

        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Safe & Efficient 5-Step Process</h2>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Inspection & Quote:</span> A detailed, fixed-price quote after a free on-site assessment.</li>
                        <li><span className="font-semibold text-foreground">Planning & Preparation:</span> We secure the site and plan for a safe and efficient demolition.</li>
                        <li><span className="font-semibold text-foreground">Controlled Demolition:</span> Careful breaking and removal of the pool structure.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal:</span> Complete clearing of all demolition debris.</li>
                        <li><span className="font-semibold text-foreground">Backfilling & Compaction:</span> We fill and compact the area, leaving it stable and level.</li>
                    </ol>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A clean lawn where a swimming pool used to be in Springs" data-ai-hint="green lawn backyard" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Pool Demolition Springs</h2>
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
          <h2 className="text-3xl font-bold">Get a Free Quote for Pool Removal in Springs</h2>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now: 078 429 2760</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
