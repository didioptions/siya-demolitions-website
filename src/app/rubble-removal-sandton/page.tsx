import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, Trash2, ShieldCheck, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "How do you manage rubble removal within Sandton's secure and high-value estates?",
        answer: "Our teams are highly experienced in operating within Sandton's exclusive residential estates. We liaise directly with estate management to ensure full compliance with their rules regarding work hours, noise levels, and vehicle access. Our process is designed for discretion and minimal disruption. We use protective measures to safeguard existing high-end landscaping, paving, and adjacent structures. Our professional, uniformed teams and well-maintained vehicles reflect the high standards expected in these environments, ensuring a smooth and respectful service from start to finish."
    },
    {
        question: "What is the typical turnaround time for a rubble removal job in the Sandton area?",
        answer: "We prioritize efficiency to keep your project on schedule. For most residential and small commercial sites in Sandton, we can typically offer same-day or next-day service. For larger-scale commercial clearings or ongoing developer support, we establish a collection schedule that aligns with your project's timeline. Our goal is to prevent debris from becoming a bottleneck. By calling us early, we can ensure the fastest possible turnaround, mobilizing our local teams to clear your site promptly and professionally."
    },
    {
        question: "Is your rubble removal service licensed and compliant for work in Sandton?",
        answer: "Absolutely. SIMA Demolitions Projects is a fully licensed and insured service provider, adhering to all City of Johannesburg municipal by-laws and environmental regulations. This is particularly crucial in Sandton, where compliance is strictly monitored. We guarantee that 100% of the rubble we collect is transported to registered, compliant disposal and recycling facilities. Using our service protects you from the significant legal and financial risks associated with illegal dumping, ensuring your project is handled responsibly and professionally."
    },
    {
        question: "Can you handle large volumes of rubble from commercial construction sites in Sandton?",
        answer: "Yes, we are fully equipped to manage large-scale rubble removal for commercial projects, including office park developments, retail center renovations, and new builds in Sandton's commercial hubs. Our fleet includes various-sized tipper trucks to handle high volumes of concrete, steel, and mixed debris efficiently. We offer ongoing, scheduled site-clearing services for contractors and developers to ensure their sites remain safe, organized, and productive throughout the construction lifecycle. We are a reliable partner for maintaining a clean and efficient commercial work site."
    },
    {
        question: "What steps do you take to protect my property during the clearing process?",
        answer: "Protecting your high-value property is our top priority. Before loading begins, our site supervisor assesses the area to identify and protect vulnerable elements such as manicured lawns, paving, walls, and irrigation systems. We use boards or protective coverings where necessary and employ careful loading techniques to prevent damage. Our teams are trained to work with precision and respect for the property, ensuring that the only thing we remove is the rubble. The site is swept and left clean upon completion, maintaining the pristine condition of your Sandton property."
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


export default function RubbleRemovalSandtonPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const commercialImage = PlaceHolderImages.find(p => p.id === 'commercialDemolition');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    

  return (
    <>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        {/* Hero Section */}
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal & Site Clearing in Sandton</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <ShieldCheck /> Fast, Safe & Licensed Debris Removal for High-Value Properties
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request Site Clearance Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call Now</a>
                </Button>
            </div>
             {heroImage && <div className="mt-8 max-w-4xl mx-auto"><Image src={heroImage.imageUrl} alt="Professional rubble removal service in a Sandton residential area" data-ai-hint="rubble removal sandton" width={1200} height={600} className="rounded-lg shadow-lg" /></div>}
        </section>

        <section className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
                In Sandton, a clean, safe, and compliant construction or renovation site is non-negotiable. SIMA Demolitions Projects provides a premier rubble removal service tailored for the high standards of Sandton's residential and commercial properties. We understand the need for discretion, speed, and meticulous care. Whether clearing debris from a luxury home renovation in a secure estate or supporting a large-scale commercial development, our licensed and insured teams ensure your site is cleared professionally. We handle all waste in compliance with City of Johannesburg regulations, leaving your property immaculate and ready for its next phase.
            </p>
        </section>

        {/* Services in Sandton Section */}
        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Rubble Removal Services in Sandton</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card>
                    <CardHeader><CardTitle>Residential Rubble Removal</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground text-sm">Fast, discreet clearing for home renovations, landscaping projects, and small demolitions within Sandton's suburbs and secure estates.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Construction Debris Clearance</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground text-sm">Reliable, ongoing support for contractors and builders. We keep your new-build or renovation site clean, safe, and productive with scheduled collections.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Garden & Yard Waste</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground text-sm">Removal of soil, trees, and other organic waste from large-scale landscaping or land clearing projects, preparing your property for a new garden vision.</p></CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle>Developer & Commercial Support</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground text-sm">Large-volume rubble removal for commercial strip-outs, office park developments, and retail space renovations in Sandton's business district.</p></CardContent>
                </Card>
            </div>
        </section>
        
        {/* Local Project Approach Section */}
        <section id="approach" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">A Professional Approach for Sandton Properties</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="font-semibold text-xl mb-4">Discretion and Compliance in Secure Estates</h3>
                    <p className="text-muted-foreground mb-6">Working in Sandton requires more than just muscle; it requires professionalism. Our service is built around respecting the standards of your neighborhood.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Estate & HOA Compliance:** We coordinate with estate management to adhere to all rules on noise, timing, and access.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Property Protection:** We use protective measures to safeguard driveways, gardens, and walls during the loading process.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Efficient & Quiet Operation:** Our teams work quickly and professionally to minimize disruption to you and your neighbours.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Clean Finish:** We sweep and tidy the area after loading, ensuring your property is left in pristine condition.</span></li>
                    </ul>
                </div>
                 <div>
                    {commercialImage && <div className="aspect-video relative"><Image src={commercialImage.imageUrl} alt="Large-scale commercial rubble removal in Sandton" data-ai-hint="commercial site" fill className="rounded-lg object-cover" /></div>}
                </div>
            </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
             <div>
                <h2 className="text-3xl font-bold mb-4">Why Choose SIMA in Sandton?</h2>
                <p className="text-muted-foreground mb-6">When you need rubble removed in Sandton, you need a partner who is as professional and reliable as the standards you uphold. We are that partner.</p>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3"><ShieldCheck className="h-6 w-6 text-accent flex-shrink-0" /><div><h4 className="font-semibold">Local Sandton Experience</h4><p className="text-sm text-muted-foreground">We understand the logistics and high standards of working in areas like Bryanston, Morningside, and Rivonia.</p></div></div>
                    <div className="flex items-start gap-3"><ShieldCheck className="h-6 w-6 text-accent flex-shrink-0" /><div><h4 className="font-semibold">Licensed & Fully Insured</h4><p className="text-sm text-muted-foreground">Our comprehensive insurance protects your high-value property, providing complete peace of mind.</p></div></div>
                    <div className="flex items-start gap-3"><ShieldCheck className="h-6 w-6 text-accent flex-shrink-0" /><div><h4 className="font-semibold">Fast, Reliable Service</h4><p className="text-sm text-muted-foreground">We pride ourselves on punctuality and efficiency, ensuring your project timeline is respected.</p></div></div>
                    <div className="flex items-start gap-3"><ShieldCheck className="h-6 w-6 text-accent flex-shrink-0" /><div><h4 className="font-semibold">100% Compliant Disposal</h4><p className="text-sm text-muted-foreground">We protect you from liability by using only registered and environmentally-sound disposal sites.</p></div></div>
                </div>
            </div>
            <div>
                 <h2 className="text-3xl font-bold mb-4">Cost Factors for Sandton Rubble Removal</h2>
                 <p className="text-muted-foreground mb-4">Our quotes are transparent and tailored to your specific needs, based on:</p>
                 <ul className="space-y-4">
                    <li><strong className="block text-foreground">Volume & Type of Debris</strong><span className="text-muted-foreground text-sm">The total cubic meters and type of rubble (e.g., soil vs. concrete) determine the primary cost.</span></li>
                    <li><strong className="block text-foreground">Property Access & Logistics</strong><span className="text-muted-foreground text-sm">Ease of access for our trucks within estates or on busy roads can influence labour time.</span></li>
                    <li><strong className="block text-foreground">Number of Loads Required</strong><span className="text-muted-foreground text-sm">The total number of trips needed to clear your site completely.</span></li>
                 </ul>
            </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Sandton Rubble Removal: FAQs</h2>
            <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </section>

        {/* Internal Linking Section */}
        <section className="mb-16 text-center">
            <h2 className="text-2xl font-semibold">Explore Our Services in Johannesburg</h2>
            <p className="mt-2 text-muted-foreground">We offer a full range of demolition and site clearing services across the northern suburbs and greater Johannesburg.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg">Rubble Removal Johannesburg</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-sandton">Demolition in Sandton</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-randburg">Rubble Removal Randburg</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Demolition Services</Link></Button>
            </div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Immaculately cleared construction site in Sandton" data-ai-hint="clean site sandton" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Start Your Sandton Rubble Removal Project Today</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                    Contact us for a fast, professional, and no-obligation quote. Our Sandton team is ready to clear your site to the highest standard.
                </p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="/contact"><Quote className="mr-2" /> Get Your Free Quote</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                        <a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Pickup</a>
                    </Button>
                </div>
                 <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
                    <span className="flex items-center gap-2"><Check /> Licensed & Insured</span>
                    <span className="flex items-center gap-2"><Check /> Estate Work Specialists</span>
                    <span className="flex items-center gap-2"><Check /> Local Sandton Teams</span>
                </div>
            </div>
        </section>
      </div>
    </>
  );
}
