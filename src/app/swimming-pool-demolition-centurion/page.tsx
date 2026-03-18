
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Apex Demolitions",
    "url": "https://apex-demolitions-website.vercel.app/swimming-pool-demolition-centurion",
    "telephone": "+27784292760",
    "areaServed": [
      { "@type": "Place", "name": "Centurion" },
      { "@type": "Place", "name": "Irene" },
      { "@type": "Place", "name": "Highveld" },
      { "@type": "Place", "name": "Zwartkop" },
      { "@type": "Place", "name": "Clubview" },
      { "@type": "Place", "name": "Lyttelton" },
      { "@type": "Place", "name": "Rooihuiskraal" }
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Swimming Pool Demolition"
      }
    }
};

const faqs = [
    { question: "How do you handle pool demolition in Centurion's secure estates?", answer: "We are specialists in working within Centurion's many secure lifestyle estates. Our teams are professional, discreet, and fully compliant with all HOA rules regarding noise, work hours, and site access. We ensure a smooth, disruption-free service for all residents." },
    { question: "Do you need a permit from the City of Tshwane for pool removal?", answer: "Yes, a permit is generally required for structural demolition. We handle the entire application process with the City of Tshwane on your behalf, ensuring your Centurion pool removal is fully compliant." },
    { question: "How quickly can you schedule a pool demolition in a suburb like Irene or Highveld?", answer: "We pride ourselves on our rapid response time in the Centurion area. For standard residential pools, we can typically provide a free on-site assessment within 24-48 hours and schedule the demolition shortly after." },
];

export default function DemolitionCenturionPage() {
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Centurion – Fast & Professional Pool Removal</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Centurion's Trusted Estate Pool Removal Specialists
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Need to remove a pool in Centurion? Apex Demolitions provides expert swimming pool demolition services across all Centurion suburbs, including Irene, Highveld, Zwartkop, and Rooihuiskraal. We specialize in working within secure estates, offering a fast, safe, and affordable solution to reclaim your garden space.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Free Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp for a Fast Quote</a></Button>
          </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Pool Removal in Centurion?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Estate Specialists</h3><p className="text-sm text-muted-foreground">We have extensive experience working within Centurion's secure lifestyle estates and adhere to all HOA rules.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Tshwane Compliant</h3><p className="text-sm text-muted-foreground">We manage the entire permit process with the City of Tshwane for you.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fully Insured</h3><p className="text-sm text-muted-foreground">Our comprehensive insurance gives you complete peace of mind for every project.</p></div></div>
            </div>
        </section>

        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Safe & Efficient 5-Step Process</h2>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Inspection & Quote:</span> A detailed, fixed-price quote after a free on-site assessment.</li>
                        <li><span className="font-semibold text-foreground">Planning & HOA Liaison:</span> We handle all planning and communication with estate management.</li>
                        <li><span className="font-semibold text-foreground">Controlled Demolition:</span> Careful breaking and removal of the pool structure.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal:</span> Complete clearing of all demolition debris.</li>
                        <li><span className="font-semibold text-foreground">Backfilling & Compaction:</span> We fill and compact the area, leaving it stable and level.</li>
                    </ol>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A clean, green lawn where a swimming pool used to be in Centurion" data-ai-hint="green lawn backyard" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Pool Demolition Centurion</h2>
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
          <h2 className="text-3xl font-bold">Get a Free Quote for Pool Removal in Centurion</h2>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now: 078 429 2760</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
