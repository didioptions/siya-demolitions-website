import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, ShieldCheck, Home, Building, Factory, DollarSign, MapPin, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from "react";

const faqs = [
    {
        question: "Do you offer ongoing site cleaning maintenance for long-term projects in Johannesburg?",
        answer: "Yes, absolutely. Many of our clients are contractors and developers managing long-term construction projects across Johannesburg. We specialize in providing scheduled, ongoing site cleaning services to maintain a safe, organized, and productive work environment from start to finish. We can arrange for daily, weekly, or bi-weekly clean-ups tailored to your project's specific needs and timeline. This prevents the hazardous buildup of debris, ensures clear access for all tradespeople, and helps you adhere to safety regulations, ultimately saving time and money."
    },
    {
        question: "Do you clean sites after demolition projects?",
        answer: "Yes, post-demolition cleaning is one of our core services and a critical step in the redevelopment process. After a structure is taken down, the site is often left with a complex mix of heavy rubble, sharp materials, and fine dust. Our teams are trained to handle this environment safely and efficiently. We manage the entire process, from the initial separation of materials for recycling to the final removal of all debris. Our goal is to provide a seamless transition from demolition to a clean, level, and build-ready site, allowing your new construction to begin without delay."
    },
    {
        question: "Are your site cleaning crews insured and certified?",
        answer: "Yes, all SIMA Demolitions Projects teams are fully insured, and every member is trained according to strict safety compliance standards for work in Johannesburg. We carry comprehensive public liability insurance to protect your property and our personnel. Our commitment to safety and professionalism is non-negotiable. This ensures that you are working with a legitimate, responsible contractor, giving you complete peace of mind and protecting you from any liability associated with worksite accidents or improper waste handling."
    },
    {
        question: "Can you handle large-scale commercial and industrial site cleaning projects?",
        answer: "Yes. We have extensive experience and the necessary equipment to manage large-scale commercial and industrial site cleaning projects throughout Johannesburg and Gauteng. We regularly assist developers with cleanup for shopping centres, office parks, warehouses, and factory sites. Our service is scalable to handle high volumes of debris and can be scheduled to minimize disruption to your operations. Whether it's a one-off clear-out or ongoing maintenance, we are a trusted partner for major commercial and industrial players."
    },
    {
        question: "Is professional site cleaning worth it for smaller residential projects?",
        answer: "Yes, definitely. Even small residential renovations or landscaping projects can generate a surprising amount of waste and hazardous debris. Leftover materials like broken tiles, wood offcuts with nails, and piles of soil can be dangerous for your family and pets. Professional cleanup ensures all waste is removed safely and disposed of legally, protecting your property's value and preventing potential injuries. It provides a clean, safe space for you to enjoy your newly renovated home without the stress and risk of handling the cleanup yourself."
    },
    {
        question: "What's the difference between site cleaning and rubble removal?",
        answer: "While related, they are distinct services. Rubble removal, which you can learn about on our <a href='/rubble-removal-johannesburg' class='text-primary hover:underline'>Rubble Removal Johannesburg</a> page, focuses specifically on the bulk loading and transport of heavy materials like concrete, bricks, and soil. Site cleaning is a more comprehensive service. It includes the removal of general construction debris (wood, plastic, packaging), sweeping, organizing the site, and clearing hazards. Often, a project requires both. We can provide an integrated quote covering all aspects of your site clearing needs."
    }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer construction site cleaning in Johannesburg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide professional construction site cleaning services in Johannesburg, including debris removal, post-build cleanups, and ongoing contractor support."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide post-demolition cleanup services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our team handles post-demolition debris removal, site leveling, and preparation for redevelopment projects across Johannesburg."
      }
    },
    {
      "@type": "Question",
      "name": "Are your site cleaning teams licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our site cleaning crews are fully licensed, insured, and operate according to safety regulations in Johannesburg and Gauteng."
      }
    },
    {
      "@type": "Question",
      "name": "How much does site cleaning cost in Johannesburg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Site cleaning costs depend on debris volume, waste type, site access, and urgency. We offer free, transparent quotes with no hidden fees."
      }
    }
  ]
};

export default function SiteCleaningPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const constructionCleaningImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');
    const demolitionCleaningImage = PlaceHolderImages.find(p => p.id === 'siteCleaningBefore');

  return (
    <>
     <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Site Cleaning Services in Johannesburg</h1>
        <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <Sparkles /> Professional Construction Site Cleaning & Clearance in Johannesburg
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
          Keep your construction or demolition site clean, safe, and fully compliant with SIMA Demolitions’ professional site cleaning services in Johannesburg. We provide fast, reliable, and fully insured site clearing for residential, commercial, and industrial projects across Johannesburg and Gauteng.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
                <Link href="/contact"><Mail className="mr-2"/>Request a Free Cleaning Quote</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
                <a href="tel:0784292760">
                    <Phone className="mr-2 h-5 w-5" /> Call for an Urgent Cleanup
                </a>
            </Button>
        </div>
      </section>

      {/* Intro Section */}
       <section className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
                Whether you need post-construction cleaning, post-demolition debris removal, or ongoing contractor support, our experienced teams ensure your site is hazard-free, organized, and ready for the next stage of work. Messy sites cause delays. Unsafe debris increases liability. Poor cleanup affects handover deadlines. We solve all of it — professionally.
            </p>
            <p className="text-lg text-muted-foreground text-center mt-4">
                As a leading <Link href="/demolition-johannesburg" className="text-primary hover:underline">Johannesburg demolition</Link> and <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal company</Link>, we provide a complete, integrated solution for site preparation.
            </p>
            <div className="text-center mt-4">
                <Button variant="link" asChild>
                    <a href="tel:0784292760">
                        <Phone className="mr-2 h-5 w-5" /> Call us today for a free quote on site cleaning in Johannesburg.
                    </a>
                </Button>
            </div>
        </section>

        {/* Construction Site Cleaning Section */}
        <section id="construction-cleaning" className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                 <div>
                    <h2 className="text-3xl font-bold mb-4">Construction Site Cleaning Johannesburg</h2>
                    <p className="text-muted-foreground mb-4">
                        Construction projects in Johannesburg generate large volumes of waste — concrete pieces, bricks, packaging materials, timber offcuts, metal scraps, and general rubble. Our construction site cleaning Johannesburg service is designed to keep active building sites safe and operational. We work with builders, contractors, and developers to provide ongoing construction debris removal, final site cleaning before inspections, pre-handover cleanup services, and emergency cleanup after delays or weather damage.
                    </p>
                    <p className="text-muted-foreground">
                        Our teams clear walkways, remove trip hazards, and maintain organized zones so your project stays productive and compliant. We understand tight deadlines. Our crews respond quickly across areas including Sandton, Midrand, Randburg, and surrounding regions.
                    </p>
                 </div>
                 <div>
                    {constructionCleaningImage && <Image src={constructionCleaningImage.imageUrl} alt="A professional worker performing construction site cleaning in Johannesburg" data-ai-hint="worker cleaning site" width={600} height={400} className="rounded-lg shadow-lg" />}
                </div>
            </div>
        </section>

        {/* Post-Demolition Cleaning Section */}
        <section id="post-demolition-cleaning" className="mb-16 bg-card p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                    {demolitionCleaningImage && <Image src={demolitionCleaningImage.imageUrl} alt="A site being cleaned after a full demolition in Johannesburg" data-ai-hint="demolition site cleanup" width={600} height={400} className="rounded-lg shadow-lg" />}
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-4">Post-Demolition Cleaning Services</h2>
                    <p className="text-muted-foreground mb-4">
                        After demolition, Johannesburg sites are often left covered in broken materials, dust, and hazardous debris. Our post-demolition cleaning services in Johannesburg ensure your property is safe and ready for redevelopment. We handle concrete and masonry debris removal, structural material clearing, site leveling, and bulk waste removal in preparation for new construction. If you’ve used our <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition service</Link>, we seamlessly transition into full site cleanup, saving you time and coordination stress. This integrated approach strengthens safety, reduces risks, and keeps your project moving forward.
                    </p>
                </div>
            </div>
        </section>

      {/* Project Types Section */}
      <section id="project-types" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Residential & Commercial Site Cleaning</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Home className="h-6 w-6 text-accent" /> Residential Site Cleaning</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm">Home renovation projects, yard clearing, boundary wall removals, and property sale preparations often leave behind unwanted waste. Our residential site clean up contractors Johannesburg teams remove garden debris, building rubble, old paving, and garage debris, leaving your property clean, presentable, and compliant.</p>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Building className="h-6 w-6 text-accent" /> Commercial & Developer Site Cleaning</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm">Commercial projects require precision and reliability. We provide commercial site cleaning Johannesburg services for shopping centres, office developments in <Link href="/rubble-removal-sandton" className="text-primary hover:underline">Sandton</Link>, warehouses, and large land clearing projects. Developers rely on us for efficient large-scale waste clearing across Johannesburg and Gauteng.</p>
                </CardContent>
            </Card>
            <Card className="shadow-lg lg:col-span-1 md:col-span-2">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Factory className="h-6 w-6 text-accent" /> Industrial Site Cleaning Johannesburg</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm">Industrial and warehouse sites generate heavy, bulky waste. Our industrial site clearing Johannesburg teams are trained to handle large debris volumes while prioritizing safety compliance. We assist with factory site clean-outs, machinery area debris clearing, storage yard waste removal, and land clearing for redevelopment. Safety is non-negotiable. Our crews are trained, insured, and equipped to work within active industrial environments.</p>
                </CardContent>
            </Card>
        </div>
      </section>

        {/* Cost Factors Section */}
        <section id="cost-factors" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">What Affects Site Cleaning Costs in Johannesburg?</h2>
             <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
               Many clients ask what determines pricing for site cleaning in Johannesburg. Costs typically depend on a few key factors. We provide transparent quotes with no hidden costs.
            </p>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <p><strong>1. Volume of Debris:</strong> Large-scale construction waste requires more labor and transport.</p>
                    <p><strong>2. Type of Waste:</strong> Heavy concrete, soil, and masonry cost more to remove than light packaging waste.</p>
                    <p><strong>3. Site Accessibility:</strong> Tight urban spaces, inner-city properties, or limited vehicle access may increase operational time.</p>
                    <p><strong>4. Urgency:</strong> Same-day or emergency cleanups may require priority scheduling.</p>
                    <p><strong>5. Ongoing Contractor Support:</strong> Discounted rates may apply for ongoing construction site maintenance.</p>
                </div>
                 <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><DollarSign className="text-accent" /> Transparent, No-Obligation Quotes</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-sm text-muted-foreground">We provide a clear, detailed, and obligation-free quote before any work begins. This ensures you understand all costs involved, including labor, transport, and disposal fees, giving you full control over your project budget.</p>
                        <Button asChild className="mt-4"><Link href="/contact">Request a Free Quote</Link></Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

      {/* Why Choose Us & Areas Section */}
      <section className="grid md:grid-cols-5 gap-8 mb-16">
        <div className="md:col-span-3 bg-card p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><ShieldCheck /> Why Choose SIMA for Site Cleaning?</h2>
            <p className="text-muted-foreground mb-6">We combine demolition, rubble removal, and site cleaning expertise — making us a complete site preparation partner.</p>
            <ul className="grid sm:grid-cols-2 gap-4">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1"/><span>Johannesburg-based professional teams</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1"/><span>Fully licensed and insured</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1"/><span>Fast response times</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1"/><span>Affordable, transparent pricing</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1"/><span>Safety-first approach</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1"/><span>Trusted by contractors and developers</span></li>
            </ul>
        </div>
        <div className="md:col-span-2">
            <Card className="shadow-lg h-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><MapPin/> Areas We Serve in Johannesburg & Gauteng</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 text-muted-foreground">Our site cleaning teams cover major areas including:</p>
                    <ul className="columns-2 space-y-2">
                        <li><Link href="/rubble-removal-sandton" className="text-sm hover:text-primary">Sandton</Link></li>
                        <li><Link href="/rubble-removal-midrand" className="text-sm hover:text-primary">Midrand</Link></li>
                        <li><Link href="/rubble-removal-randburg" className="text-sm hover:text-primary">Randburg</Link></li>
                        <li><Link href="/rubble-removal-roodepoort" className="text-sm hover:text-primary">Roodepoort</Link></li>
                        <li>Soweto</li>
                        <li>Alberton</li>
                        <li>Germiston</li>
                        <li>Johannesburg CBD</li>
                        <li>Centurion</li>
                        <li>Kempton Park</li>
                        <li>Benoni</li>
                        <li>Boksburg</li>
                    </ul>
                     <p className="mt-4 text-sm text-muted-foreground italic">
                       Don’t see your area listed? Contact us — we likely serve your location across Gauteng.
                    </p>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* Safety & Environmental Responsibility */}
      <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold">Safety & Environmental Responsibility</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">Professional site cleaning services in Johannesburg must meet stringent safety and environmental standards. We prioritize responsible waste disposal, legal dumping compliance, hazard-free cleanup processes, and the safe handling of heavy materials. Improper dumping damages the environment and creates significant legal risks for property owners. Working with licensed professionals like SIMA protects your project, your reputation, and our community.</p>
       </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">FAQs About Site Cleaning in Johannesburg</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final CTA Section */}
      <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
        <h2 className="text-3xl font-bold">Keep Your Site Clean – Get a Free Cleaning Quote Today</h2>
        <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
         Looking for reliable site cleaning in Johannesburg? Let SIMA Demolitions handle the debris so you can focus on what matters — building, renovating, and delivering projects on time.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
                <a href="tel:0784292760"><Phone /> Call us today</a>
            </Button>
             <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact"><Mail /> Request a Quote</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
                 <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">
                    <MessageSquare/> Book a Clean-Up
                </a>
            </Button>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
            <span className="flex items-center gap-2"><Check /> Fast response.</span>
            <span className="flex items-center gap-2"><Check /> Safety-first service.</span>
            <span className="flex items-center gap-2"><Check /> Trusted across Johannesburg.</span>
        </div>
      </section>
    </div>
    </>
  );
}
