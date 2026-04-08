
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { 
        question: "How much does demolition cost in Roodepoort?", 
        answer: "The cost for demolition in Roodepoort is competitive and depends on the project's size, materials (e.g., concrete vs. brick), and site accessibility. A small structure might start from R15,000, while a full house demolition can range from R40,000 to R100,000+. We provide a free, detailed on-site assessment to give you a transparent, fixed-price quote." 
    },
    { 
        question: "Do you offer same-day demolition in Roodepoort?", 
        answer: "For urgent situations, such as a fire-damaged or structurally unsound building, we offer a rapid-response emergency service. While a full demolition can't be completed in one day, we can often be on-site the same day to assess, secure the property, and begin the teardown process." 
    },
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
            Apex Demolitions provides top-tier demolition services throughout Roodepoort and the West Rand. As trusted local contractors, our specialty is residential projects, from house demolitions in Helderkruin and Florida to site clearing for new developments in Weltevreden Park and Horizon. We have a deep understanding of the City of Johannesburg's regulations and are committed to delivering safe, compliant, and efficient projects. We complete demolition projects across Roodepoort daily, from small residential jobs to large construction sites.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Quote</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-card text-center rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <h2 className="text-3xl font-bold">Trusted Demolition Contractors in Roodepoort</h2>
                 <p className="mt-4 text-lg text-muted-foreground">
                    We are one of the most trusted demolition contractors in Roodepoort, delivering fast and professional services across residential, commercial, and construction projects. Our deep understanding of Roodepoort's suburbs and regulations makes us the reliable choice for any project.
                 </p>
                 <div className="mt-6 text-xl font-bold text-foreground flex items-center justify-center gap-2 bg-background p-4 rounded-lg shadow-sm">
                    <p><strong>✔ Trusted demolition contractors working across Roodepoort and surrounding areas every day</strong></p>
                </div>
            </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Comprehensive Demolition Services in Roodepoort</h2>
            <div className="space-y-12 max-w-4xl mx-auto">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Residential Demolition Roodepoort</h3>
                    <p className="text-muted-foreground mb-4">
                        As the demand for modern living spaces grows in the West Rand, residential demolition has become a crucial first step for many homeowners. We specialize in house demolition in Roodepoort, catering to clients who are upgrading, rebuilding, or subdividing their properties. Whether it’s an older house in Florida making way for a new family home, or a property in Weltevreden Park being cleared for townhouses, our service is tailored to meet these needs.
                    </p>
                    <p className="text-muted-foreground">
                        Our teams are experienced in working on the varied terrain of Roodepoort, from the flatlands to the sloped properties of Constantia Kloof. We ensure every residential demolition project is handled with precision, protecting neighbouring properties and leaving the site perfectly prepared for the next phase of your build. Our comprehensive service includes the removal of main structures, outbuildings, swimming pools, and old foundations, providing a complete clear-out.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Commercial Demolition Roodepoort</h3>
                    <p className="text-muted-foreground mb-4">
                        Roodepoort's commercial landscape is constantly evolving, with new retail centres, office parks, and industrial facilities being developed. We provide professional commercial demolition services to support this growth. This includes the full-scale takedown of old commercial buildings, interior strip-outs for tenant renovations, and site preparation for new commercial builds. We manage projects near key hubs like Clearwater Mall and along main arterial routes.
                    </p>
                    <p className="text-muted-foreground">
                        Our commercial service focuses on safety, efficiency, and minimizing disruption. We can work to tight deadlines and coordinate with other contractors on-site to ensure a smooth workflow. From a small shopfront demolition to clearing a large industrial structure, our team has the equipment and expertise for any commercial demolition Roodepoort project, ensuring it is compliant with all health and safety regulations. We also offer similar services for <a href="/demolition-sandton" className="text-primary hover:underline">demolition in Sandton's</a> commercial nodes.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Site Clearance Roodepoort</h3>
                    <p className="text-muted-foreground mb-4">
                        A clean and clear site is the foundation of any successful construction or landscaping project. Our site clearance service is a complete solution that goes beyond basic rubble removal. We prepare your land by removing all unwanted materials, including demolition debris, vegetation, unwanted trees, old foundations, and surface-level concrete. Our team uses a combination of manual labour and heavy machinery like TLBs and excavators for maximum efficiency.
                    </p>
                    <p className="text-muted-foreground">
                        This service is essential for developers preparing a plot for a new build or for homeowners looking to do extensive landscaping. Our site clearance service ensures your property is completely free of obstructions and perfectly levelled, ready for surveyors and builders to begin their work. This comprehensive approach is a hallmark of our work, whether it's a large plot in Ruimsig or a smaller stand in Horizon. We also handle complex site clearance for <a href="/demolition-randburg" className="text-primary hover:underline">demolition in Randburg</a> and <a href="/demolition-midrand" className="text-primary hover:underline">demolition in Midrand</a>.
                    </p>
                </div>
            </div>
        </section>

        <section id="recent-projects" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Demolition Projects in Roodepoort</h2>
                <div className="max-w-4xl mx-auto space-y-4 text-center">
                    <p className="font-semibold text-lg">✔ Roodepoort – House demolition completed safely and on time</p>
                    <p className="font-semibold text-lg">✔ Florida – Interior strip-out for renovation project</p>
                    <p className="font-semibold text-lg">✔ Weltevreden Park – Site clearance for new development</p>
                </div>
            </div>
        </section>

        <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
            <div className="md:col-span-2">
               {partnerImage && <Image src={partnerImage.imageUrl} alt="Our Roodepoort demolition team planning a residential project" data-ai-hint="construction team" width={600} height={500} className="rounded-lg shadow-lg" />}
            </div>
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Your Trusted Demolition Partner in Roodepoort</h2>
                <p className="text-muted-foreground mb-4">Choosing Apex Demolitions means partnering with a team that values safety, integrity, and customer satisfaction. We are committed to upholding the highest standards on every job, from small residential tasks to large commercial clearings. Our local knowledge of Roodepoort ensures your project runs smoothly and complies with all regulations.</p>
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
          <h2 className="text-3xl font-bold">Need Demolition in Roodepoort Today?</h2>
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
