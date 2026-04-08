
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { question: "How much does demolition cost in Midrand?", answer: "The cost for demolition in Midrand is competitive. A small structure might start from R18,000, while a full house demolition can range from R45,000 to R120,000+. Factors include the property's size, materials (e.g., reinforced concrete), site access within secure estates, and the scope of site clearing. We provide a free, detailed on-site assessment to give you a transparent, fixed-price quote." },
    { question: "Do you offer same-day demolition in Midrand?", answer: "For urgent situations, such as a fire-damaged or structurally unsound building, we offer a rapid-response emergency service. While a full demolition can't be completed in one day, we can often be on-site the same day to assess, secure the property, and begin the teardown process." },
    { question: "Are you experienced with demolitions in Midrand's secure estates like Waterfall?", answer: "Yes, we specialize in working within high-end secure estates. We are fully compliant with HOA regulations regarding safety, work hours, and site cleanliness to ensure a smooth project." },
    { question: "Do I need a demolition permit in Midrand?", answer: "Yes, a permit from the City of Johannesburg is required for structural demolition. Our team manages the entire application process on your behalf to ensure full legal compliance." },
    { question: "How do you ensure the protection of adjacent properties during demolition?", answer: "We use precision demolition techniques, protective screening, and careful site management to prevent any damage to neighboring homes, businesses, or infrastructure." }
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

export default function DemolitionMidrandPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'commercialDemolition');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Services in Midrand</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Midrand's Specialist in Estate & Commercial Demolition
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            Apex Demolitions is the trusted demolition contractor for Midrand's rapidly growing landscape, from Halfway House to Noordwyk and Carlswald. We specialize in projects that require precision and expertise, from house demolitions in premier estates like Waterfall to large-scale site clearing for commercial developments near the Mall of Africa. As local experts, we seamlessly manage City of Johannesburg permits and estate HOA compliance. Our focus is on delivering safe, efficient, and impeccably clean sites, making us the go-to choice for developers and homeowners in Midrand.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-card text-center rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <h2 className="text-3xl font-bold">Trusted Demolition Contractors in Midrand</h2>
                 <p className="mt-4 text-lg text-muted-foreground">
                    We are one of the most trusted demolition contractors in Midrand, providing fast and professional services for residential, commercial, and construction projects. We complete demolition projects across Midrand daily, from small residential jobs to large construction sites.
                 </p>
                 <div className="mt-6 text-xl font-bold text-foreground flex items-center justify-center gap-2 bg-background p-4 rounded-lg shadow-sm">
                    <p><strong>✔ Trusted demolition contractors working across Midrand and surrounding areas every day</strong></p>
                </div>
            </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Specialized Demolition for Midrand Properties</h2>
            <div className="space-y-12 max-w-4xl mx-auto">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Residential Demolition Midrand</h3>
                    <p className="text-muted-foreground mb-4">
                        As Midrand continues to be one of Johannesburg's fastest-growing residential hubs, the need for professional residential demolition services is paramount. We specialize in house demolition in Midrand, catering to both homeowners upgrading their properties in established suburbs like Vorna Valley and developers undertaking large-scale projects in new estates. We also offer similar high-quality <Link href="/demolition-sandton" className="text-primary hover:underline">demolition in Sandton</Link> for luxury properties.
                    </p>
                    <p className="text-muted-foreground">
                        Our service is tailored to the unique environment of Midrand's secure lifestyle estates, such as Waterfall and Kyalami. We are experts in adhering to strict Homeowners' Association (HOA) regulations, ensuring our work is completed with minimal disruption to the community. Whether it's removing an old farmhouse to make way for a new development or demolishing a single home for a rebuild, our team delivers a safe, efficient, and clean result every time.
                    </p>
                </div>
                 <div>
                    <h3 className="text-2xl font-semibold mb-4">Commercial Demolition Midrand</h3>
                    <p className="text-muted-foreground mb-4">
                        Midrand's position as a key commercial and logistics node between Johannesburg and Pretoria drives constant redevelopment. We provide expert commercial demolition services to support this growth. Our capabilities range from the interior strip-out of offices and retail spaces near the Mall of Africa to the full-scale demolition of old warehouses and factory buildings to prepare sites for new, modern logistics parks.
                    </p>
                    <p className="text-muted-foreground">
                        We understand the importance of project timelines in a commercial context. Our teams work efficiently, coordinating with other contractors and adhering to the highest safety standards to prevent delays. Our comprehensive approach makes us a vital partner for any commercial <Link href="/demolition-randburg" className="text-primary hover:underline">demolition in Randburg</Link> or Midrand.
                    </p>
                </div>
                 <div>
                    <h3 className="text-2xl font-semibold mb-4">Site Clearance Midrand</h3>
                    <p className="text-muted-foreground mb-4">
                       A clean and clear site is the foundation of any successful construction project. Our site clearance service in Midrand is a complete, end-to-end solution. It combines our expertise in demolition with professional <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link> and earth-moving capabilities. We clear all unwanted materials, including demolition debris, vegetation, old foundations, and surface-level concrete.
                    </p>
                    <p className="text-muted-foreground">
                       This service is essential for developers preparing large plots for new builds or for businesses expanding their premises. Our team uses a combination of manual labour and heavy machinery like TLBs and excavators for maximum efficiency, ensuring your property is left completely free of obstructions and perfectly levelled, ready for surveyors and builders. This comprehensive approach is a hallmark of our work, whether it's a large plot in Blue Hills or a smaller commercial stand in Halfway House.
                    </p>
                </div>
            </div>
        </section>

         <section id="recent-projects" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Demolition Projects in Midrand</h2>
                <div className="max-w-4xl mx-auto space-y-4 text-center">
                    <p className="font-semibold text-lg">✔ Midrand – Residential demolition completed safely and on time</p>
                    <p className="font-semibold text-lg">✔ Noordwyk – Interior strip-out for renovation project</p>
                    <p className="font-semibold text-lg">✔ Carlswald – Site clearance for new development</p>
                </div>
            </div>
        </section>

        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Our team planning a complex demolition project in Midrand" data-ai-hint="construction planning" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Your Trusted Demolition Partner in Midrand</h2>
                <p className="text-muted-foreground mb-4">Choosing Apex Demolitions means partnering with a team that values safety, integrity, and customer satisfaction. We are committed to upholding the highest standards on every job, from small residential tasks to large commercial clearings. Our local knowledge of Midrand ensures your project runs smoothly and complies with all regulations.</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your protection.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Expertise in City of Johannesburg and estate compliance.</span></li>
                    <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent pricing.</span></li>
                </ul>
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Midrand Demolition FAQs</h2>
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
            <h2 className="text-2xl font-semibold">Our Service Network</h2>
             <p className="mt-2 text-muted-foreground">We also provide expert demolition services in nearby areas.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Johannesburg Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-centurion">Centurion Demolition</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-kempton-park">Kempton Park Projects</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-sandton">Services in Sandton</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Need demolition in Midrand today? Call or WhatsApp now.</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us today to discuss your project. Our Midrand team is ready to provide a fast, competitive, and no-obligation quote.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
