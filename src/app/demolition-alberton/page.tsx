import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How do you manage dust and noise during demolition in Alberton?", answer: "We use modern dust suppression techniques like water spraying and always adhere to the City of Ekurhuleni's municipal work hours to minimize disruption to your Alberton neighbors." },
    { question: "What is the typical cost of demolishing a house in Alberton?", answer: "The cost varies based on the size of the house, materials, and access. We provide a free, detailed, and no-obligation quote after a site assessment for full transparency." },
    { question: "Can you work within the rules of a homeowners' association (HOA) in Alberton estates?", answer: "Absolutely. We have extensive experience working in estates across Alberton and strictly follow all HOA guidelines regarding work hours, noise, and site conduct." },
    { question: "My property has difficult access. Can you still manage the demolition?", answer: "Yes, we specialize in projects with challenging access. Our team assesses the site and uses the appropriate equipment, like compact Bobcats, to safely perform the demolition." }
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

export default function DemolitionAlbertonPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoWork');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Services in Alberton</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Your Local, Licensed Alberton Demolition Contractor
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            As one of the leading demolition companies on the East Rand, SIMA Demolitions provides expert demolition services across Alberton. From family homes in Meyersdal to properties in New Redruth, our local contractors specialize in safe house demolition, swimming pool removal, and complete site clearing. We understand Alberton's community and the City of Ekurhuleni's regulations, ensuring we deliver compliant, efficient, and hassle-free projects every time. Our commitment is to prepare your land for its next chapter with professionalism and care.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Specialized Demolition for Alberton Properties</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2">
                    {servicesImage && <Image src={servicesImage.imageUrl} alt="Swimming pool demolition in progress in an Alberton backyard" data-ai-hint="pool demolition" width={600} height={500} className="rounded-lg shadow-lg" />}
                </div>
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card><CardHeader><CardTitle>Residential Home Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Safe removal of houses to make way for new builds. We handle projects of all sizes in areas like Alberton North and New Redruth.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Swimming Pool Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Reclaim your yard space by removing old or unused swimming pools. We manage breaking, removal, and professional backfilling.</p></CardContent></Card>
                    <Card className="sm:col-span-2"><CardHeader><CardTitle>Site Clearing & Rubble Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Complete site preparation, including removing all demolition debris and waste, leaving your Alberton property ready for construction.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Your Trusted Demolition Partner in Alberton</h2>
                <p className="text-muted-foreground mb-4">Choosing SIMA Demolitions means partnering with a team that values safety, integrity, and community respect. We are committed to upholding the highest standards on every job, from small residential tasks in Brackenhurst to larger clearings. Our local knowledge of Alberton ensures your project runs smoothly, complies with all City of Ekurhuleni regulations, and minimizes disruption to your neighbourhood.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Deep knowledge of Ekurhuleni municipal requirements.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
                </ul>
            </div>
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Team of demolition contractors planning a project in Alberton" data-ai-hint="construction team" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Alberton Demolition FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Our Service Network Across the East Rand</h2>
             <p className="mt-2 text-muted-foreground">We also provide expert demolition services in nearby areas.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Johannesburg Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-germiston">Demolition in Germiston</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-boksburg">Boksburg Services</Link></Button>
                 <Button variant="outline" asChild><Link href="/demolition-soweto">Explore Soweto Demolition</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Alberton</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us today to discuss your project. Our Alberton team is ready to provide a fast, competitive, and no-obligation quote.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
