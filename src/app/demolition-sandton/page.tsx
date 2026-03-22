
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, ShieldCheck, Building, Home, Layers, Waves, Sparkles, Star, ArrowRight, MessageSquare, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
            As the leading **demolition contractors in Sandton**, Apex Demolitions provides a premium, specialized service tailored for Johannesburg's most exclusive properties. We understand the precision, discretion, and high standards required for **demolition in Sandton**, from large-scale **residential demolition** in Sandhurst to complex **commercial demolition** near the Sandton CBD. Our expertise in managing City of Johannesburg permits and strict estate protocols is unparalleled. 
          </p>
        </section>

        <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                <p className="text-lg text-muted-foreground">
                    We are the trusted **demolition contractors Sandton** architects and homeowners rely on for safe, compliant, and professional demolition services. Our extensive experience covers both large-scale **residential demolition** in suburbs like Morningside and Rivonia, and complex **commercial demolition** projects within the Sandton CBD. Our team is committed to delivering a superior service that respects the value of your property and the standards of your neighborhood. For any **building demolition Sandton** project, large or small, we are the insured, licensed, and reliable choice. We also offer same-day demolition services in Sandton for urgent projects.
                </p>
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

        <section id="demolition-process" className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Demolition Process in Sandton</h2>
                    <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">We follow a systematic, authority-compliant process to ensure every project is seamless, safe, and efficient from start to finish.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
                    <Card className="text-center"><CardHeader><CardTitle>1. Site Inspection & Planning</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">A thorough on-site assessment to provide a detailed quotation and project plan that respects all estate and municipal regulations.</p></CardContent></Card>
                    <Card className="text-center"><CardHeader><CardTitle>2. Planning & Permits</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We professionally manage all permit applications with the City of Johannesburg and liaise with estate management to ensure full legal compliance.</p></CardContent></Card>
                    <Card className="text-center"><CardHeader><CardTitle>3. Safe Demolition Work</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Our licensed team performs a controlled, surgical demolition using modern equipment and techniques to dismantle the structure safely.</p></CardContent></Card>
                    <Card className="text-center"><CardHeader><CardTitle>4. Rubble Removal & Cleanup</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">We clear all debris and transport it to licensed facilities, leaving your site spotless and ready for your builders.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section id="demolition-cost" className="py-12 md:py-16 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Understanding Demolition Costs in Sandton</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                    How much does demolition cost? While we offer **affordable demolition Sandton** solutions, the **demolition cost in Sandton** is influenced by the premium nature of the area. We provide transparent, detailed quotes that account for these unique factors.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card><CardHeader><CardTitle>Property Size & Complexity</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">The square meterage and complexity of the build (e.g., multi-story, deep foundations, difficult materials) are the primary cost drivers.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Access & Estate Rules</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Restricted work hours, noise limitations, and difficult access for heavy machinery in secure estates can influence the project timeline and cost.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Rubble Removal Volume</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">The total volume of debris that needs to be removed from the site and transported to registered disposal facilities will directly impact the final price.</p></CardContent></Card>
                </div>
            </div>
        </section>
        
        <section id="recent-projects" className="py-12 md:py-20 bg-background rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Demolition Projects in Sandton</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader><CardTitle>Luxury Home Demolition</CardTitle><p className="text-sm text-muted-foreground">Sandhurst</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Full demolition of a 5-bedroom luxury home to clear a prime plot for a new architectural masterpiece. The project required careful protection of champion trees and was completed in 5 days, with all rubble removed and the site left pristine.</p>
                            <div className="grid grid-cols-2 gap-2">
                                <div><p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Before</p><div className="aspect-video relative">{PlaceHolderImages.find(p=>p.id==='residentialDemolition') && <Image src={PlaceHolderImages.find(p=>p.id==='residentialDemolition')!.imageUrl} alt="Old luxury house in Sandhurst" data-ai-hint="luxury house" fill className="rounded-md object-cover" />}</div></div>
                                <div><p className="text-xs font-semibold uppercase text-muted-foreground mb-1">After</p><div className="aspect-video relative">{PlaceHolderImages.find(p=>p.id==='siteCleaningAfter') && <Image src={PlaceHolderImages.find(p=>p.id==='siteCleaningAfter')!.imageUrl} alt="Cleared plot in Sandhurst" data-ai-hint="clean site" fill className="rounded-md object-cover" />}</div></div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Office Interior Strip-Out</CardTitle><p className="text-sm text-muted-foreground">Rivonia</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Complete interior strip-out of two floors of an office building to prepare a 'white box' for a new corporate tenant. Work was completed out of hours to avoid disruption to other businesses, resulting in a perfectly clean and ready-to-fit space.</p>
                             <div className="grid grid-cols-2 gap-2">
                                <div><p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Before</p><div className="aspect-video relative">{PlaceHolderImages.find(p=>p.id==='interiorStripOut') && <Image src={PlaceHolderImages.find(p=>p.id==='interiorStripOut')!.imageUrl} alt="Dated office interior" data-ai-hint="old office" fill className="rounded-md object-cover" />}</div></div>
                                <div><p className="text-xs font-semibold uppercase text-muted-foreground mb-1">After</p><div className="aspect-video relative">{PlaceHolderImages.find(p=>p.id==='siteCleaning') && <Image src={PlaceHolderImages.find(p=>p.id==='siteCleaning')!.imageUrl} alt="Empty white box office" data-ai-hint="empty office" fill className="rounded-md object-cover" />}</div></div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Swimming Pool Removal</CardTitle><p className="text-sm text-muted-foreground">Morningside</p></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Removal of a large, old marbelite pool and extensive paving to create a larger, modern garden and entertainment area. The site was left perfectly level, compacted, and ready for new landscaping, transforming the client's backyard.</p>
                             <div className="grid grid-cols-2 gap-2">
                                <div><p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Before</p><div className="aspect-video relative">{PlaceHolderImages.find(p=>p.id==='poolDemoWork') && <Image src={PlaceHolderImages.find(p=>p.id==='poolDemoWork')!.imageUrl} alt="Old swimming pool in Morningside" data-ai-hint="old pool" fill className="rounded-md object-cover" />}</div></div>
                                <div><p className="text-xs font-semibold uppercase text-muted-foreground mb-1">After</p><div className="aspect-video relative">{PlaceHolderImages.find(p=>p.id==='poolDemoAfter') && <Image src={PlaceHolderImages.find(p=>p.id==='poolDemoAfter')!.imageUrl} alt="New lawn where pool was" data-ai-hint="green lawn" fill className="rounded-md object-cover" />}</div></div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        <section className="py-12 md:py-16 bg-card rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Areas We Serve in and Around Sandton</h2>
             <p className="mt-2 text-muted-foreground text-center max-w-3xl mx-auto mb-10">We provide elite **demolition services** across all of Sandton's prestigious suburbs. Our teams are the local experts for demolition, rubble removal, and site clearing in:</p>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-2">Sandhurst, Hyde Park & Inanda</h3>
                    <p className="text-sm text-muted-foreground">Specializing in luxury residential demolition, our teams work with precision and discretion to prepare plots for new architectural masterpieces, always protecting valuable trees and neighbouring properties.</p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-2">Morningside & Rivonia</h3>
                    <p className="text-sm text-muted-foreground">We are the trusted contractors for both residential and commercial projects, from home demolitions to office strip-outs, providing a fast and reliable service.</p>
                </div>
                 <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-2"><Link href="/demolition-bryanston" className="text-primary hover:underline">Bryanston</Link></h3>
                    <p className="text-sm text-muted-foreground">We are the premier demolition contractors for Bryanston's large residential stands and secure estates, handling everything from pool removals to full house demolitions with expert care.</p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-2">Sandton CBD, <Link href="/demolition-rosebank" className="text-primary hover:underline">Rosebank</Link> & Surrounds</h3>
                    <p className="text-sm text-muted-foreground">Our teams are experts in commercial demolition and strip-outs in the high-density urban environments of the Sandton CBD and Rosebank, working around business hours to minimize disruption.</p>
                </div>
            </div>
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
        </section>
        
        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg mt-16">
          <h2 className="text-3xl font-bold">Need Demolition Services in Sandton?</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            For urgent projects, we offer **same-day demolition services in Sandton**. Contact us for a fast, competitive, and no-obligation quote. Our Sandton team is ready to provide a professional assessment.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now for a Same-Day Quote</a></Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp Us</a></Button>
          </div>
          <p className="mt-4 text-xs text-primary-foreground/70">As the most trusted <Link href="/demolition-johannesburg" className="text-primary-foreground underline hover:text-secondary">demolition contractors in Johannesburg</Link>, we also serve <Link href="/demolition-randburg" className="text-primary-foreground underline hover:text-secondary">Demolition Randburg</Link> clients.</p>
        </section>
      </div>
    </>
  );
}
