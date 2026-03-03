import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "Do you service all areas in Roodepoort?", answer: "Yes, our teams operate across the entire Roodepoort area and the wider West Rand, from Helderkruin to Wilro Park and beyond. We provide a fast, local service." },
    { question: "What is your demolition process?", answer: "We start with a free site evaluation and quote. Upon approval, we handle the City of Johannesburg permit applications, schedule the work, perform the demolition safely, and clear all rubble from the site." },
    { question: "How do you ensure safety for my family and neighbors?", answer: "Safety is our top priority. We secure the site perimeter, use dust-control measures, and operate with certified professionals to ensure the process is safe for everyone." },
    { question: "Can you demolish just a garage or outbuilding?", answer: "Absolutely. We handle demolitions of all sizes, including garages, sheds, outbuildings, and walls, not just full houses. No job is too small." }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function DemolitionRoodepoortPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteClearing');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Services in Roodepoort</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> The West Rand's Trusted Demolition Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions provides top-tier demolition services throughout Roodepoort and the West Rand. As trusted local contractors, our specialty is residential projects, from house demolitions in Helderkruin to site clearing for new developments near Clearwater Mall. We have a deep understanding of the City of Johannesburg's regulations and are committed to delivering safe, compliant, and efficient projects. We pride ourselves on leaving every Roodepoort site clean, clear, and ready for its next phase.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Residential Demolition Services in Roodepoort</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card><CardHeader><CardTitle>House Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Safe and complete removal of houses to clear land for new homes or property developments in Roodepoort's family-friendly suburbs.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Pool Demolition & Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We reclaim your yard space by efficiently removing old or damaged swimming pools, including breaking, removal, and backfilling.</p></CardContent></Card>
                    <Card className="sm:col-span-2"><CardHeader><CardTitle>Comprehensive Site Clearing</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Our service includes removing all demolition debris and waste, ensuring your Roodepoort property is perfectly prepared for construction.</p></CardContent></Card>
                </div>
                <div className="lg:col-span-2">
                    {servicesImage && <Image src={servicesImage.imageUrl} alt="A clean site in Roodepoort after demolition and clearing" data-ai-hint="site clearing" width={600} height={500} className="rounded-lg shadow-lg" />}
                </div>
            </div>
        </section>

        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Our Roodepoort demolition team planning a residential project" data-ai-hint="construction team" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Your Trusted Demolition Partner in Roodepoort</h2>
                <p className="text-muted-foreground mb-4">Choosing SIMA Demolitions means partnering with a team that values safety, integrity, and customer satisfaction. We are committed to upholding the highest standards on every job, from small residential tasks to large commercial clearings. Our local knowledge of Roodepoort ensures your project runs smoothly and complies with all regulations.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Deep knowledge of City of Johannesburg requirements.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
                </ul>
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Roodepoort Demolition FAQs</h2>
            <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
        
        <section className="mb-16 text-center">
            <h2 className="text-2xl font-semibold">Our West Rand Service Network</h2>
             <p className="mt-2 text-muted-foreground">We also provide expert demolition services in nearby areas.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Johannesburg Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-randburg">Randburg Services</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-soweto">Soweto Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg">Site Clearing Experts</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Roodepoort</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us today to discuss your project. Our Roodepoort team is ready to provide a fast, competitive, and no-obligation quote.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
