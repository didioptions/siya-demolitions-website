
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
    "url": "https://apex-demolitions-website.vercel.app/swimming-pool-demolition-pretoria",
    "telephone": "+27784292760",
    "areaServed": [
      { "@type": "Place", "name": "Pretoria" },
      { "@type": "Place", "name": "Centurion" },
      { "@type": "Place", "name": "Pretoria East" },
      { "@type": "Place", "name": "Waterkloof" },
      { "@type": "Place", "name": "Garsfontein" },
      { "@type": "Place", "name": "Lynnwood" },
      { "@type": "Place", "name": "Moreleta Park" }
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
    { question: "Do you handle pool demolition permits with the City of Tshwane?", answer: "Yes, absolutely. A key part of our service is managing the entire permit application process with the City of Tshwane on your behalf. We ensure your Pretoria pool demolition project is fully compliant with all local by-laws, saving you time and potential legal issues." },
    { question: "Can you remove a pool close to a jacaranda tree without damaging it?", answer: "Yes. We understand the importance of Pretoria's jacaranda trees. Our teams are highly skilled in precision demolition and use techniques that protect surrounding trees, gardens, and structures. We plan carefully to ensure your valuable landscaping is preserved." },
    { question: "What is the cost of pool demolition in Pretoria?", answer: "The cost varies based on the pool's size, material (concrete, fibreglass), and site accessibility. We offer a free, no-obligation on-site assessment in Pretoria to provide you with a transparent, competitive, and fixed-price quote with no hidden costs." },
    { question: "How long does a pool removal take in a suburb like Waterkloof or Garsfontein?", answer: "A standard residential pool demolition in Pretoria's suburbs typically takes between 2 to 4 days. This includes the complete process from breaking and removal to backfilling and site cleanup, minimizing disruption to your home." }
];

export default function DemolitionPretoriaPage() {
    const processImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Swimming Pool Demolition Pretoria – Fast & Professional Pool Removal</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Pretoria's Trusted Pool Removal Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Searching for reliable swimming pool demolition in Pretoria? Apex Demolitions provides expert, safe, and affordable pool removal across Pretoria and its surrounding areas, including Pretoria East, Waterkloof, Garsfontein, and Centurion. Reclaim your garden space and eliminate high maintenance costs with our professional, all-in-one service.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Free Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp for a Fast Quote</a></Button>
          </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Pool Removal in Pretoria?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Pretoria Specialists</h3><p className="text-sm text-muted-foreground">Our teams have extensive experience working across Pretoria's diverse suburbs, from leafy Waterkloof to bustling Centurion.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fully Compliant</h3><p className="text-sm text-muted-foreground">We are experts in City of Tshwane regulations and handle all permit requirements for you.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Property Protection</h3><p className="text-sm text-muted-foreground">We use precision techniques to safeguard your home, garden, and iconic Jacaranda trees during demolition.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">All-Inclusive Service</h3><p className="text-sm text-muted-foreground">Our quotes include demolition, full rubble removal, and site cleanup for a hassle-free experience.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fast & Efficient</h3><p className="text-sm text-muted-foreground">We complete most residential projects in 2-4 days, minimizing disruption to your household.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Insured & Reliable</h3><p className="text-sm text-muted-foreground">Our comprehensive insurance gives you complete peace of mind.</p></div></div>
            </div>
        </section>

        <section id="pool-types" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Types of Pools We Remove in Pretoria</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card><CardHeader><CardTitle>Concrete & Marbelite Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">The most common type in older Pretoria homes. We use hydraulic breakers to efficiently break up the shell.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Fibreglass Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We carefully cut the shell into sections, lift it out, and dismantle any surrounding structures before backfilling.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Commercial & Complex Pools</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We handle larger pools at apartment complexes, hotels, and schools throughout the Pretoria area.</p></CardContent></Card>
            </div>
        </section>

        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Safe & Efficient 5-Step Pool Demolition Process</h2>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Site Inspection & Quote:</span> We provide a detailed, fixed-price quote after a free on-site assessment.</li>
                        <li><span className="font-semibold text-foreground">Permit Management:</span> We manage the City of Tshwane application process to ensure full compliance.</li>
                        <li><span className="font-semibold text-foreground">Controlled Demolition:</span> Our team uses specialized equipment to carefully break up the pool shell.</li>
                        <li><span className="font-semibold text-foreground">Rubble Removal:</span> All debris is loaded and transported to a licensed disposal facility.</li>
                        <li><span className="font-semibold text-foreground">Backfilling & Compaction:</span> We fill the cavity and compact it in layers to ensure ground stability.</li>
                    </ol>
                </div>
                <div>
                    {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="A clean, green lawn where a swimming pool used to be in Pretoria" data-ai-hint="green lawn backyard" fill className="rounded-lg object-cover shadow-lg" /></div>}
                </div>
            </div>
             <div className="text-center mt-12">
                <Button size="lg" asChild><Link href="/contact">Get Your Free Pretoria Demolition Quote <ArrowRight className="ml-2" /></Link></Button>
            </div>
        </section>
        
        <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Swimming Pool Demolition in Pretoria & Nearby Areas</h2>
            <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Pretoria East</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Waterkloof</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Garsfontein</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Lynnwood</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Moreleta Park</span>
                <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium">Faerie Glen</span>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions – Pool Demolition Pretoria</h2>
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
          <h2 className="text-3xl font-bold">Get a Free Quote for Pool Removal in Pretoria</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Also serving <Link href="/swimming-pool-demolition-centurion" className="text-primary-foreground underline">Centurion</Link> and greater Gauteng.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now: 078 429 2760</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
