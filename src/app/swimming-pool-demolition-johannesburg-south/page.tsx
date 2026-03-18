
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Do you service all areas in Johannesburg South?", answer: "Yes, our teams cover all of Johannesburg South, from affluent suburbs like Glenvista and Bassonia to areas like Robertsham and Winchester Hills. We provide a fast, local service across the region." },
    { question: "Is your pool demolition service insured for work in Johannesburg South?", answer: "Absolutely. We are fully insured for all our operations. This gives our clients in Johannesburg South complete peace of mind, knowing their property is fully protected during the demolition process." },
    { question: "Can you remove a pool on a sloped property in the South?", answer: "Yes, we are very experienced in working on properties with varied terrain, including the hilly areas of Johannesburg South. We take special precautions to ensure the demolition and backfilling process is done safely to prevent any erosion or stability issues." }
];

export default function DemolitionJohannesburgSouthPage() {
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Johannesburg South</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Your Trusted Local Pool Removal Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Apex Demolitions provides top-tier pool removal services throughout Johannesburg South. We help homeowners in Glenvista, Bassonia, Mulbarton, and surrounds reclaim their gardens and add value to their properties by safely and efficiently removing old or unwanted swimming pools.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Free Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp for a Fast Quote</a></Button>
          </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Pool Removal in Johannesburg South?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">JHB South Specialists</h3><p className="text-sm text-muted-foreground">We are the go-to experts for pool demolition in the South, known for our local knowledge and experience.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fast Turnaround</h3><p className="text-sm text-muted-foreground">We complete most residential pool removals in 2-4 days, minimizing disruption.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Affordable Pricing</h3><p className="text-sm text-muted-foreground">Our transparent quotes ensure you get the best value with no hidden costs.</p></div></div>
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
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A clean lawn where a swimming pool used to be in Johannesburg South" data-ai-hint="green lawn backyard" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Pool Demolition JHB South</h2>
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
          <h2 className="text-3xl font-bold">Get a Free Quote for Pool Removal in Johannesburg South</h2>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now: 078 429 2760</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
