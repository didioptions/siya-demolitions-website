
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Do you offer affordable pool demolition in Brakpan?", answer: "Yes, providing an affordable service is important to us. We offer competitive pricing for all pool removals in Brakpan and provide a free, no-obligation quote so you know the full cost upfront." },
    { question: "Is your pool demolition service insured for work in Brakpan?", answer: "Absolutely. We are fully insured, giving you complete peace of mind that your property is protected while our expert team is on-site." },
    { question: "How long does it take to remove an old pool?", answer: "A standard residential pool demolition in Brakpan is typically completed in 2-4 days, including the full rubble removal and site cleanup." }
];

export default function DemolitionBrakpanPage() {
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Brakpan</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Your Local, Reliable Pool Removal Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Apex Demolitions is your trusted partner for professional swimming pool demolition in Brakpan. We offer a fast, safe, and cost-effective solution for homeowners and businesses looking to remove an unwanted pool and reclaim valuable property space.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Free Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp for a Fast Quote</a></Button>
          </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Pool Removal in Brakpan?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Local East Rand Experts</h3><p className="text-sm text-muted-foreground">Our familiarity with Brakpan ensures a fast, efficient, and reliable service.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">All-Inclusive Service</h3><p className="text-sm text-muted-foreground">Our quote includes demolition, complete rubble removal, and site cleanup.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Safety Focused</h3><p className="text-sm text-muted-foreground">We use professional techniques to protect your home and property throughout the process.</p></div></div>
            </div>
        </section>

        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Safe & Efficient 5-Step Process</h2>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Inspection & Quote:</span> A detailed, fixed-price quote after a free assessment.</li>
                        <li><span className="font-semibold text-foreground">Planning & Preparation:</span> We secure the site for a safe demolition.</li>
                        <li><span className="font-semibold text-foreground">Controlled Demolition:</span> Careful breaking of the pool structure.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal:</span> Complete clearing of all debris.</li>
                        <li><span className="font-semibold text-foreground">Backfilling & Compaction:</span> We fill and compact the area, leaving it stable and level.</li>
                    </ol>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A clean lawn where a swimming pool used to be in Brakpan" data-ai-hint="green lawn backyard" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Pool Demolition Brakpan</h2>
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
          <h2 className="text-3xl font-bold">Get a Free Quote for Pool Removal in Brakpan</h2>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now: 078 429 2760</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
