
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How do you handle demolitions on the steep slopes of Glenvista?", answer: "This is our area of expertise. We use specialized equipment and proven safety techniques for hillside demolitions. Our process involves careful, sectional dismantling to ensure stability, prevent erosion, and safely remove all debris from sloped properties." },
    { question: "Is your team insured for complex removals in Johannesburg South?", answer: "Yes, Apex Demolitions is fully insured for all our operations, including high-risk work on difficult terrain like the slopes of Glenvista. This gives our clients complete peace of mind." },
    { question: "Can you remove a structure that is close to a boundary wall or another building?", answer: "Absolutely. We are experts in precision demolition. We use controlled methods to dismantle structures without causing any damage to adjacent walls, paving, or neighboring properties, which is crucial in the dense residential areas of Glenvista." }
];

export default function DemolitionGlenvistaPage() {
    const processImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Glenvista</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> The Johannesburg South Hillside Demolition Experts
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Apex Demolitions provides specialist demolition services for the unique, sloped properties of Glenvista. We are the trusted experts for safely demolishing residential and commercial structures on challenging terrain, ensuring your property's stability and value are enhanced.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Site Assessment</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp for a Quote</a></Button>
          </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Demolition in Glenvista?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Hillside Specialists</h3><p className="text-sm text-muted-foreground">We have the specific equipment and training required for safe demolitions on sloped properties.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Structural Integrity</h3><p className="text-sm text-muted-foreground">Our process focuses on protecting retaining walls and ensuring ground stability post-demolition.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fully Insured</h3><p className="text-sm text-muted-foreground">Our comprehensive insurance covers high-risk work, giving you total peace of mind.</p></div></div>
            </div>
        </section>

        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Safe & Efficient 5-Step Process for Hillside Demolition</h2>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Geotechnical Assessment:</span> We evaluate the slope and soil to create a safe removal plan.</li>
                        <li><span className="font-semibold text-foreground">Site Preparation:</span> We secure the work area and protect all surrounding structures and landscaping.</li>
                        <li><span className="font-semibold text-foreground">Controlled Demolition:</span> Careful, sectional dismantling of the structure from the top down to maintain stability.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal:</span> Complete clearing of all demolition debris from your property.</li>
                        <li><span className="font-semibold text-foreground">Site Finalisation:</span> We ensure the site is left safe, clean, and properly graded to prevent erosion.</li>
                    </ol>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A demolition team working on a sloped property in Glenvista" data-ai-hint="hillside construction" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Demolition Glenvista</h2>
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
          <h2 className="text-3xl font-bold">Get a Quote for Your Glenvista Demolition Project</h2>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now: 078 429 2760</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
