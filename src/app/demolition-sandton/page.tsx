
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, Building, Home, Layers, Waves, Sparkles, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    { 
        question: "Are your demolition services available throughout Sandton?", 
        answer: "Yes, absolutely. Our team provides elite demolition services across all of Sandton's suburbs. We have dedicated teams regularly working in Sandhurst, Hyde Park, Morningside, Bryanston, Rivonia, and the Sandton CBD itself. We understand the unique requirements of each area, from navigating secure estates to managing logistics in busy commercial zones." 
    },
    { 
        question: "How do you handle demolitions in Sandton's exclusive, secure estates?", 
        answer: "This is our specialty. We have extensive experience working within Sandton's most exclusive secure estates. Our process begins with liaising directly with the estate management to understand all rules regarding work hours, noise levels, vehicle access, and site cleanliness. Our teams are professional, discreet, and work with the utmost respect for the community and its residents, ensuring a smooth, compliant, and disruption-free project." 
    },
    { 
        question: "Is your company insured for high-value properties?", 
        answer: "Yes. We carry comprehensive public liability insurance specifically designed for working on high-value residential and commercial properties. This provides our clients in Sandton with complete peace of mind, knowing their valuable assets, as well as neighbouring properties, are fully protected throughout the demolition process." 
    },
    { 
        question: "What is your process for demolishing a luxury home?", 
        answer: "Our process for luxury homes is meticulous. It begins with a thorough site assessment and planning phase, where we identify all elements to be protected (like mature trees or boundary walls). We then use a precision dismantling process, often breaking the structure down piece by piece to avoid damage. This is followed by a full <a href='/rubble-removal-sandton' class='text-primary hover:underline'>rubble removal</a> and <a href='/site-cleaning-sandton' class='text-primary hover:underline'>site cleaning</a> service, leaving the property pristine and ready for your new architectural vision." 
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
    const servicesImage = PlaceHolderImages.find(p => p.id === 'poolDemoHero');
    const processImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Demolition Contractors Sandton</h1>
          <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <ShieldCheck /> Sandton's Premier Luxury Home & Building Demolition Service
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            As the leading **demolition contractors in Sandton**, Apex Demolitions provides a premium, specialized service tailored for Johannesburg's most exclusive properties. We understand the precision, discretion, and high standards required for **demolition in Sandton**, from large-scale **residential demolition** in Sandhurst to complex **commercial demolition** near the Sandton CBD. Our expertise in managing City of Johannesburg permits and strict estate protocols is unparalleled. Whether you require a full **building demolition in Sandton** or a delicate interior strip-out, our professional team is the trusted partner for Sandton's discerning homeowners, architects, and developers. We also offer affordable demolition options and can provide same-day demolition services for urgent projects.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Private Consultation</a></Button>
            <Button size="lg" variant="secondary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
          </div>
        </section>

        <section id="types-of-demolition" className="mb-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Types of Demolition Services in Sandton</h2>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                    Our capabilities cover every kind of structural removal project required in Sandton, executed with the highest level of professionalism and care.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-3"><Home className="text-primary" /> Luxury Home Demolition</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Surgical dismantling of large and complex homes, with careful preservation of valuable trees and surrounding properties in Sandton's exclusive suburbs like Sandhurst and Bryanston.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-3"><Building className="text-primary" /> Commercial Demolition</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Expert demolition of office blocks, retail spaces, and older commercial buildings in the Sandton CBD and surrounding business nodes, making way for new high-rise developments.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-3"><Layers className="text-primary" /> Interior Demolition (Strip-Outs)</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Precision interior strip-outs for high-end office and retail space renovations. We prepare 'white box' spaces for new tenant installations with minimal disruption.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-3"><Waves className="text-primary" /> Swimming Pool Demolition</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Careful removal of architectural pools, tennis courts, and water features with minimal impact on established, high-value gardens. A key service for our <Link href="/swimming-pool-demolition-sandton" className="text-primary hover:underline">pool demolition Sandton</Link> clients.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-3"><Sparkles className="text-primary" /> Site Clearing & Rubble Removal</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">We leave your Sandton property pristine, perfectly prepared, and ready for your architects and construction team, with all waste managed by our expert <Link href="/rubble-removal-sandton" className="text-primary hover:underline">rubble removal in Sandton</Link> division.</p></CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle className="flex items-center gap-3"><ShieldCheck className="text-primary" /> Emergency Demolition</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">We offer a fast-response service for same-day and emergency demolition in Sandton for fire-damaged or structurally unsound buildings that pose an immediate risk.</p></CardContent>
                </Card>
            </div>
        </section>

        <section id="demolition-cost" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Understanding Demolition Cost in Sandton</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                The cost of demolition in Sandton is influenced by the premium nature of the area. We provide transparent, detailed quotes that account for these unique factors.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card><CardHeader><CardTitle>Property Size & Structure</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">The square meterage and complexity of the build (e.g., multi-story, deep foundations) are the primary cost drivers.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Access & Estate Rules</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Restricted work hours, noise limitations, and difficult access for heavy machinery in secure estates can influence the project timeline and cost.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Volume of Rubble</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">The amount of debris that needs to be removed and transported to disposal facilities will directly impact the final price.</p></CardContent></Card>
            </div>
        </section>

        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                     {processImage && <Image src={processImage.imageUrl} alt="Demolition contractors in a planning meeting for a Sandton project" data-ai-hint="construction planning" width={600} height={500} className="rounded-lg shadow-lg" />}
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Meticulous Demolition Process</h2>
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Consultation & Planning:</span> A thorough on-site assessment to provide a detailed quotation and project plan that respects all estate and municipal regulations.</li>
                        <li><span className="font-semibold text-foreground">Site & Asset Protection:</span> We secure the site perimeter and implement measures to protect valuable landscaping, paving, and adjacent structures.</li>
                        <li><span className="font-semibold text-foreground">Precision Demolition:</span> Our licensed team performs a controlled, surgical demolition using modern equipment and techniques to dismantle the structure safely.</li>
                        <li><span className="font-semibold text-foreground">Waste Management:</span> We sort materials for recycling and manage a full <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link> service.</li>
                        <li><span className="font-semibold text-foreground">Immaculate Cleanup:</span> The project is complete only when your site is left spotless, level, and ready for your builders.</li>
                    </ol>
                </div>
            </div>
        </section>

        <section id="recent-projects" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Demolition Projects in Sandton</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader><CardTitle>Luxury House Demolition</CardTitle><p className="text-sm text-muted-foreground">Sandhurst</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Full demolition of a 5-bedroom luxury home to clear a prime plot for a new architectural masterpiece. The project required careful protection of champion trees and was completed in 5 days.</p>
                            <div className="grid grid-cols-2 gap-2">
                                <div><p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Before</p><div className="aspect-video relative">{PlaceHolderImages.find(p=>p.id==='residentialDemolition') && <Image src={PlaceHolderImages.find(p=>p.id==='residentialDemolition')!.imageUrl} alt="Old luxury house in Sandhurst" data-ai-hint="luxury house" fill className="rounded-md object-cover" />}</div></div>
                                <div><p className="text-xs font-semibold uppercase text-muted-foreground mb-1">After</p><div className="aspect-video relative">{PlaceHolderImages.find(p=>p.id==='siteCleaningAfter') && <Image src={PlaceHolderImages.find(p=>p.id==='siteCleaningAfter')!.imageUrl} alt="Cleared plot in Sandhurst" data-ai-hint="clean site" fill className="rounded-md object-cover" />}</div></div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Office Interior Strip-Out</CardTitle><p className="text-sm text-muted-foreground">Sandton CBD</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Complete interior strip-out of two floors of an office building near Sandton City to prepare a 'white box' for a new corporate tenant. Work was completed out of hours to avoid disruption.</p>
                             <div className="grid grid-cols-2 gap-2">
                                <div><p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Before</p><div className="aspect-video relative">{PlaceHolderImages.find(p=>p.id==='interiorStripOut') && <Image src={PlaceHolderImages.find(p=>p.id==='interiorStripOut')!.imageUrl} alt="Dated office interior" data-ai-hint="old office" fill className="rounded-md object-cover" />}</div></div>
                                <div><p className="text-xs font-semibold uppercase text-muted-foreground mb-1">After</p><div className="aspect-video relative">{PlaceHolderImages.find(p=>p.id==='siteCleaning') && <Image src={PlaceHolderImages.find(p=>p.id==='siteCleaning')!.imageUrl} alt="Empty white box office" data-ai-hint="empty office" fill className="rounded-md object-cover" />}</div></div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Swimming Pool Removal</CardTitle><p className="text-sm text-muted-foreground">Morningside</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Removal of a large, old marbelite pool and extensive paving to create a larger, modern garden and entertainment area. The site was left perfectly level and ready for new landscaping.</p>
                             <div className="grid grid-cols-2 gap-2">
                                <div><p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Before</p><div className="aspect-video relative">{PlaceHolderImages.find(p=>p.id==='poolDemoWork') && <Image src={PlaceHolderImages.find(p=>p.id==='poolDemoWork')!.imageUrl} alt="Old swimming pool in Morningside" data-ai-hint="old pool" fill className="rounded-md object-cover" />}</div></div>
                                <div><p className="text-xs font-semibold uppercase text-muted-foreground mb-1">After</p><div className="aspect-video relative">{PlaceHolderImages.find(p=>p.id==='poolDemoAfter') && <Image src={PlaceHolderImages.find(p=>p.id==='poolDemoAfter')!.imageUrl} alt="New lawn where pool was" data-ai-hint="green lawn" fill className="rounded-md object-cover" />}</div></div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Areas We Serve in Sandton</h2>
             <p className="mt-2 text-muted-foreground text-center max-w-3xl mx-auto">We provide elite **demolition services** across all of Sandton's prestigious suburbs, including:</p>
            <div className="mt-8 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-card rounded-lg">
                    <h3 className="font-semibold">Sandhurst</h3>
                    <p className="text-xs text-muted-foreground">Premier home demolition.</p>
                </div>
                 <div className="p-4 bg-card rounded-lg">
                    <h3 className="font-semibold">Morningside</h3>
                    <p className="text-xs text-muted-foreground">Residential & complex demolition.</p>
                </div>
                <div className="p-4 bg-card rounded-lg">
                    <h3 className="font-semibold">Rivonia</h3>
                    <p className="text-xs text-muted-foreground">Commercial and residential clearing.</p>
                </div>
                <div className="p-4 bg-card rounded-lg">
                    <h3 className="font-semibold">Bryanston</h3>
                    <p className="text-xs text-muted-foreground">Luxury home and estate demolition.</p>
                </div>
            </div>
        </section>

        <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Sandton Demolition FAQs</h2>
            <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                           <div className="prose prose-sm max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Get a Free Demolition Quote in Sandton</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact us today to discuss your project. Our Sandton team is ready to provide a fast, competitive, and no-obligation quote for your demolition project. We are the trusted <Link href="/demolition-johannesburg" className="text-primary-foreground underline hover:text-secondary">demolition Johannesburg</Link> experts.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
          </div>
        </section>
      </div>
    </>
  );
}
