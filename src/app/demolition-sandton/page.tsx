

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, Building, Home, Layers, Waves, Sparkles, Star, ArrowRight, MessageSquare, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
    { 
        question: "How much does demolition cost in Sandton?", 
        answer: "The cost for demolition in Sandton is competitive but reflects the high standards required. A small structure might start from R20,000, while a full luxury house demolition can range from R60,000 to R150,000+. Factors include the property's size, materials (e.g., reinforced concrete), site access within secure estates, and the scope of site clearing. We provide a free, detailed on-site assessment to give you a transparent, fixed-price quote with no surprises."
    },
    { 
        question: "Do you offer same-day demolition in Sandton?", 
        answer: "For urgent situations, such as a fire-damaged or structurally unsound building, we offer a rapid-response emergency service. While a full demolition can't be completed in one day, we can be on-site the same day to assess, secure the property, and begin the teardown process immediately. Call us directly for our fastest response."
    },
    { 
        question: "How do you handle demolitions in Sandton's exclusive, secure estates?", 
        answer: "This is our specialty. We have extensive experience working within Sandton's most exclusive secure estates. Our process begins with liaising directly with the estate management to understand all rules regarding work hours, noise levels, vehicle access, and site cleanliness. Our teams are professional, discreet, and work with the utmost respect for the community and its residents, ensuring a smooth, compliant, and disruption-free project." 
    },
    { 
        question: "Is your company insured for high-value properties?", 
        answer: "Yes. We carry comprehensive public liability insurance specifically designed for working on high-value residential and commercial properties. This provides our clients in Sandton with complete peace of mind, knowing their valuable assets, as well as neighbouring properties, are fully protected throughout the demolition process." 
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

export default function DemolitionSandtonPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'residentialDemolition');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const processImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Sandton – Professional Demolition Contractors Near You</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Sandton's Premier Luxury Home & Building Demolition Service
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            As the leading **demolition contractors in Sandton**, Apex Demolitions provides a premium, specialized service for Johannesburg's most exclusive properties. We have extensive experience serving Sandton and nearby areas like Bryanston and Fourways, offering fast, reliable, and fully insured demolition services. Same-day and urgent services are available across Johannesburg depending on project size and location.
          </p>
        </section>

        <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Sandton's Premier Demolition Service</h2>
                <p className="mt-4 text-lg text-muted-foreground text-left">
                    We are the trusted **demolition contractors Sandton** architects and homeowners rely on for safe, compliant, and professional demolition services. Our extensive experience covers both large-scale **residential demolition** in suburbs like Morningside and Rivonia, and complex **commercial demolition** projects within the Sandton CBD. Our team is committed to delivering a superior service that respects the value of your property and the standards of your neighborhood. For any **building demolition Sandton** project, large or small, we are the insured, licensed, and reliable choice.
                </p>
            </div>
        </section>
        
        <section id="trust-block" className="bg-card border-b border-t mb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-4">
                <div className="flex items-center justify-center gap-2 text-sm font-medium"><Check className="text-primary" /> 15+ Years Experience</div>
                <div className="flex items-center justify-center gap-2 text-sm font-medium"><Check className="text-primary" /> Professional Teams</div>
                <div className="flex items-center justify-center gap-2 text-sm font-medium"><Check className="text-primary" /> Fully Equipped Machinery</div>
                <div className="flex items-center justify-center gap-2 text-sm font-medium"><Check className="text-primary" /> Legal Waste Disposal</div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-background text-center">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <h2 className="text-3xl font-bold">Leading Demolition Contractors in Sandton</h2>
                 <p className="mt-4 text-lg text-muted-foreground">
                    We are one of the most trusted demolition contractors in Sandton, delivering fast and professional services for residential, commercial, and construction projects. Our team works across Sandton, Bryanston, and Fourways, providing reliable demolition solutions tailored to each project.
                 </p>
                 <p className="mt-4 text-lg text-muted-foreground">
                    With years of experience and the right equipment, we handle everything from small home demolitions to large-scale site clearance projects efficiently and safely.
                 </p>
                 <div className="mt-6 text-xl font-bold text-foreground flex items-center justify-center gap-2 bg-card p-4 rounded-lg shadow-sm">
                    <p><strong>✔ Completed multiple demolition projects across Sandton and surrounding areas</strong></p>
                </div>
            </div>
        </section>

        <section id="types-of-demolition" className="py-12 md:py-16 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Types of Demolition Services in Sandton</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                        Our capabilities cover every kind of structural removal project required in Sandton, executed with the highest level of professionalism and care.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Home className="text-primary" /> Residential Demolition Sandton</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Surgical dismantling of large and complex luxury homes, with careful preservation of valuable trees and surrounding properties in Sandton's exclusive suburbs like Sandhurst and Bryanston.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Building className="text-primary" /> Commercial Demolition Sandton</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Expert demolition of office blocks, retail spaces, and older commercial buildings in the Sandton CBD and surrounding business nodes, making way for new high-rise developments.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Layers className="text-primary" /> Interior Demolition (Strip-Outs)</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Precision interior strip-outs for high-end office and retail space renovations. We prepare 'white box' spaces for new tenant installations with minimal disruption.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Waves className="text-primary" /> Swimming Pool Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Careful removal of architectural pools, tennis courts, and water features with minimal impact on established, high-value gardens. A key service for our <Link href="/swimming-pool-demolition-sandton" className="text-primary hover:underline">pool demolition Sandton</Link> clients.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Sparkles className="text-primary" /> Site Clearing & Rubble Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We leave your Sandton property pristine and ready for construction, with all waste managed by our expert <Link href="/rubble-removal-sandton" className="text-primary hover:underline">rubble removal in Sandton</Link> division.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><ShieldCheck className="text-primary" /> Emergency Demolition</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We offer a fast-response service for same-day and emergency demolition in Sandton for fire-damaged or structurally unsound buildings that pose an immediate risk.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section className="py-12 md:py-20 bg-background text-center">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <h2 className="text-3xl font-bold">Leading Demolition & Plant Hire Company in Johannesburg</h2>
                 <p className="mt-4 text-lg text-muted-foreground">
                    We are one of Johannesburg’s most trusted demolition and plant hire companies, handling projects across <Link href="/demolition-sandton" className="text-primary hover:underline">Sandton</Link>, <Link href="/demolition-randburg" className="text-primary hover:underline">Randburg</Link>, <Link href="/demolition-midrand" className="text-primary hover:underline">Midrand</Link>, and surrounding areas. From small residential jobs to large-scale construction projects, our team delivers reliable, fast, and professional service every time. Our commitment to quality, safety, and efficiency has made us a preferred choice for homeowners, builders, and businesses across Johannesburg.
                 </p>
                  <div className="mt-6 text-xl font-bold text-foreground flex items-center justify-center gap-2 bg-card p-4 rounded-lg shadow-sm">
                    <Check className="text-green-500 h-6 w-6" /> Successfully completed hundreds of demolition projects across Johannesburg.
                </div>
            </div>
        </section>
        
        <section id="recent-projects" className="py-12 md:py-20 bg-background rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Demolition Projects in Sandton</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader><CardTitle>✔ Sandton – Residential house demolition completed safely and on time</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Full demolition of a 5-bedroom luxury home to clear a prime plot for a new architectural masterpiece. The project required careful protection of champion trees and was completed in 5 days, with all rubble removed and the site left pristine.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>✔ Bryanston – Interior strip-out for renovation project</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Complete interior strip-out of two floors of an office building to prepare a 'white box' for a new corporate tenant. Work was completed out of hours to avoid disruption to other businesses, resulting in a perfectly clean and ready-to-fit space.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>✔ Fourways – Site clearance for new development</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Managed the demolition of an old warehouse on schedule to make way for a new logistics park. The project included the removal of deep foundations and extensive site clearing.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        <section className="py-12 md:py-16 bg-card rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Trusted Demolition Contractors in Sandton</h2>
             <p className="mt-2 text-muted-foreground text-center max-w-3xl mx-auto mb-10">We provide elite **demolition services** across all of Sandton's prestigious suburbs. Our teams are the local experts for demolition, rubble removal, and site clearing in Sandton, Bryanston, and Fourways.</p>
        </section>

        <section id="faq" className="py-12 md:py-16">
            <h2 className="text-3xl font-bold text-center mb-8">Sandton Demolition FAQs</h2>
            <div className="w-full max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                        <p className="font-semibold text-lg">{faq.question}</p>
                        <div className="text-muted-foreground mt-2" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </div>
                ))}
            </div>
             <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground">See our Google Reviews or <a href="https://g.page/r/CZ4yPlKY6ihdEAE/review" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">leave us a review</a> to hear what our clients say about our work.</p>
             </div>
        </section>
        
        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg mt-16">
          <h2 className="text-3xl font-bold">Need demolition in Sandton today?</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            For urgent projects, we offer **same-day demolition services in Sandton**. Contact us for a fast, competitive, and no-obligation quote. Our Sandton team is ready to provide a professional assessment.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call for a Quote</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp for Fast Response</a></Button>
          </div>
          <p className="mt-4 text-xs text-primary-foreground/70">As the most trusted <Link href="/demolition-johannesburg" className="text-primary-foreground underline hover:text-secondary">demolition contractors in Johannesburg</Link>, we also serve <Link href="/demolition-randburg" className="text-primary-foreground underline hover:text-secondary">Demolition Randburg</Link> clients.</p>
        </section>
      </div>
    </>
  );
}
