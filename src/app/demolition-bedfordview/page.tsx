
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, MessageSquare, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { 
        question: "How much does demolition cost in Bedfordview?", 
        answer: "The cost for demolition in Bedfordview reflects the high-value nature of the properties and the precision required. A small, straightforward job might start from R20,000, while a full luxury house demolition can range from R60,000 to R150,000+. Factors include the property's size, materials, site access within secure estates, and the scope of site clearing. We provide a free, detailed on-site assessment to give you a transparent, fixed-price quote." 
    },
    { 
        question: "Do you offer same-day demolition in Bedfordview?", 
        answer: "For urgent situations, such as a fire-damaged or structurally compromised building, we offer a rapid-response emergency service. While a full demolition of a large property cannot be completed in one day, we can often be on-site the same day to assess, secure the property, and begin the teardown process immediately." 
    },
    { 
        question: "Do you remove rubble after demolition?", 
        answer: "Yes, our service is a complete, all-in-one solution. The price we quote includes the full demolition, loading, and transport of all debris. We ensure your site is left immaculately clean and level, with all waste disposed of legally and responsibly." 
    },
    { 
        question: "What nearby areas do you cover?", 
        answer: "Our Bedfordview teams also serve the surrounding upscale suburbs. We have extensive experience working in neighbouring areas like Edenvale, Kensington, and provide services to the commercial hubs in Germiston. Our network ensures a high standard of service across the region." 
    }
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

export default function DemolitionBedfordviewPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoHero');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Bedfordview – Professional Demolition Contractors Near You</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Your Specialist for High-End Demolition in Bedfordview
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            We provide professional demolition services in Bedfordview for residential, commercial, and site clearance projects. Our team delivers safe, efficient, and reliable demolition solutions with fast quotes and experienced service.
          </p>
          <div className="mt-6 bg-card border p-4 rounded-lg inline-block shadow-sm">
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2 text-sm font-medium text-foreground">
                    <li className="flex items-center justify-center gap-2"><Check className="text-primary h-4 w-4" /> Same-day service available</li>
                    <li className="flex items-center justify-center gap-2"><Check className="text-primary h-4 w-4" /> Residential & commercial</li>
                    <li className="flex items-center justify-center gap-2"><Check className="text-primary h-4 w-4" /> Site clearance and rubble removal</li>
                    <li className="flex items-center justify-center gap-2"><Check className="text-primary h-4 w-4" /> Fast quotes by phone/WhatsApp</li>
                </ul>
            </div>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Private Consultation</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp Quote</a></Button>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                 <h2 className="text-3xl md:text-4xl font-bold">Bedfordview's Premier Demolition Service</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    As a hub of upscale residential living and thriving commercial activity, Bedfordview constantly sees properties being renovated, rebuilt, and upgraded. This creates a strong demand for professional, high-end demolition services. From careful residential teardowns in secure estates to commercial strip-outs near Eastgate, a precise and reliable demolition contractor is essential. We are the trusted local experts for all demolition needs in Bedfordview and nearby areas like <Link href="/demolition-edenvale" className="text-primary hover:underline">Edenvale</Link>, Kensington, and the commercial zones of <Link href="/demolition-germiston" className="text-primary hover:underline">Germiston</Link>.
                </p>
            </div>
        </section>

        <section id="trust-authority" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                <h2 className="text-3xl font-bold">Trusted Demolition Contractors in Bedfordview</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    We provide reliable demolition services across Bedfordview, helping homeowners, businesses, and contractors with professional demolition, strip-outs, rubble removal, and site clearance. We handle projects from small residential jobs to larger commercial site clearances.
                </p>
                <div className="mt-6 text-xl font-bold text-foreground flex items-center justify-center gap-2 bg-background p-4 rounded-lg shadow-sm">
                    <p><strong>✔ Trusted demolition contractors working across Bedfordview every day</strong></p>
                </div>
            </div>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Specialized Demolition Services in Bedfordview</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                    <CardHeader><CardTitle>Residential Demolition Bedfordview</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">We specialize in the careful, surgical demolition of residential properties in Bedfordview. This includes the complete teardown of houses to make way for new builds, as well as the removal of cottages, garages, and boundary walls. Our teams are trained to work with precision, protecting valuable landscaping and adjacent properties, a crucial requirement in this upmarket area.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Commercial Demolition Bedfordview</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Our commercial demolition service supports Bedfordview's business community. We handle the dismantling of old office blocks, retail spaces, and other commercial structures. We focus on minimizing disruption to nearby businesses and manage projects with strict safety protocols to ensure a smooth process for large-scale redevelopments in the area.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Site Clearance Bedfordview</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">A clean site is the foundation of a successful project. Our site clearance service is a full-circle solution that includes demolition, comprehensive <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link>, and final site preparation. We remove all waste and level the ground, leaving your property clean and ready for construction to begin without delay.</p></CardContent>
                </Card>
            </div>
        </section>
        
        <section id="recent-projects" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Demolition Projects in Bedfordview</h2>
                <div className="max-w-4xl mx-auto space-y-4 text-center">
                    <p className="font-semibold text-lg">✔ Bedfordview – Residential demolition completed safely and on time</p>
                    <p className="font-semibold text-lg">✔ Kensington – Interior strip-out for renovation project</p>
                    <p className="font-semibold text-lg">✔ Germiston – Site clearance for new development</p>
                </div>
            </div>
        </section>
        
        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Demolition contractors reviewing blueprints for a Bedfordview project" data-ai-hint="construction planning" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Your Discerning Demolition Partner in Bedfordview</h2>
                <p className="text-muted-foreground mb-4">Choosing Apex Demolitions means partnering with a team that values safety, integrity, and customer satisfaction. Our local knowledge of Bedfordview ensures your project runs smoothly and complies with all regulations.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for high-value property protection.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Expertise in City of Ekurhuleni's planning and permit requirements.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent, detailed pricing.</span></li>
                </ul>
            </div>
        </section>
        
        <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Bedfordview Demolition FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Our Premier Service Network</h2>
             <p className="mt-2 text-muted-foreground">We also provide expert demolition services in nearby areas. Our <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition Johannesburg</Link> service covers the entire city.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-edenvale">Edenvale Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-sandton">Sandton Demolition Experts</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-kempton-park">Kempton Park Projects</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-randburg">Demolition Randburg</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Need Demolition in Bedfordview Today?</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Call or WhatsApp us now for fast, professional demolition services in Bedfordview and nearby areas.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
