
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Do you have experience working in Kyalami's lifestyle and equestrian estates?", answer: "Yes, we are the specialists for Kyalami. We understand the high standards and specific rules of these estates. Our teams operate with the utmost professionalism and care to protect large properties, paddocks, and established gardens." },
    { question: "Can you remove a large, older pool on a large stand?", answer: "Absolutely. We are equipped to handle the removal of large, deep, and heavily reinforced pools often found on Kyalami's larger properties. We have the machinery to break and remove the structure efficiently." },
    { question: "Is your team insured for work on high-value equestrian properties?", answer: "Yes. We carry comprehensive insurance that covers high-value and agricultural properties, giving you complete peace of mind that your home, stables, and land are fully protected." }
];

export default function DemolitionKyalamiPage() {
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Kyalami</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> The Equestrian & Lifestyle Estate Specialists
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Apex Demolitions offers a bespoke swimming pool demolition service for the exclusive suburb of Kyalami. We are experts in working on large lifestyle and equestrian estates, providing a discreet, safe, and professional pool removal service.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Consultation</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp for a Quote</a></Button>
          </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Pool Removal in Kyalami?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Estate Specialists</h3><p className="text-sm text-muted-foreground">Unmatched experience working within Kyalami's premier lifestyle and equestrian estates.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Property Protection</h3><p className="text-sm text-muted-foreground">We take exceptional care to protect large gardens, paddocks, and high-value infrastructure.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fully Insured</h3><p className="text-sm text-muted-foreground">Our comprehensive insurance is designed for high-value and agricultural properties.</p></div></div>
            </div>
        </section>

        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Safe & Efficient 5-Step Process</h2>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Assessment & Quote:</span> A detailed quote after a professional on-site evaluation.</li>
                        <li><span className="font-semibold text-foreground">HOA Liaison & Planning:</span> We coordinate with estate management and create a safe work plan.</li>
                        <li><span className="font-semibold text-foreground">Controlled Demolition:</span> Careful breaking and removal of the pool structure.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal:</span> Complete clearing of all demolition debris from your property.</li>
                        <li><span className="font-semibold text-foreground">Backfilling & Compaction:</span> We fill and compact the area, leaving it stable and ready for use.</li>
                    </ol>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A large, clean lawn on an estate in Kyalami" data-ai-hint="equestrian estate lawn" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Pool Demolition Kyalami</h2>
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
          <h2 className="text-3xl font-bold">Get a Professional Quote for Your Kyalami Property</h2>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now: 078 429 2760</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
