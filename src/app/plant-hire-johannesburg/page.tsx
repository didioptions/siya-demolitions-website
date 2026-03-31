
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, MapPin, Quote, Tractor } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const suburbs = [
    { name: "Sandton", href: "/plant-hire-sandton" }, { name: "Randburg", href: "/plant-hire-randburg" },
    { name: "Roodepoort", href: "/plant-hire-roodepoort" }, { name: "Midrand", href: "/plant-hire-midrand" },
    { name: "Fourways", href: "/plant-hire-fourways" }, { name: "Soweto", href: "/plant-hire-soweto" },
    { name: "Alberton", href: "/plant-hire-alberton" }, { name: "Germiston", href: "/plant-hire-germiston" },
    { name: "Boksburg", href: "/plant-hire-boksburg" }, { name: "Benoni", href: "/plant-hire-benoni" },
    { name: "Kempton Park", href: "/plant-hire-kempton-park" }, { name: "Bedfordview", href: "/plant-hire-bedfordview" },
    { name: "Edenvale", href: "/plant-hire-edenvale" }, { name: "Bryanston", href: "/plant-hire-bryanston" },
    { name: "Rosebank", href: "/plant-hire-rosebank" }, { name: "Northcliff", href: "/plant-hire-northcliff" },
    { name: "Melville", href: "/plant-hire-melville" }, { name: "Linden", href: "/plant-hire-linden" },
    { name: "Parkhurst", href: "/plant-hire-parkhurst" }, { name: "Greenside", href: "/plant-hire-greenside" },
];

const faqs = [
    { question: "What types of equipment do you offer for plant hire in Johannesburg?", answer: "We offer a wide range of heavy machinery for hire, including TLBs (Tractor-Loader-Backhoes), Bobcats (skid-steer loaders), various sizes of excavators, and tipper trucks for material transport. We can advise on the best machine for your specific job." },
    { question: "Does your plant hire in Johannesburg include a certified operator?", answer: "Yes, all our plant hire services come with a fully certified, experienced, and professional operator. This ensures the machinery is used safely and efficiently, saving you time and reducing risk on your site." },
    { question: "Can I hire equipment for just one day?", answer: "Absolutely. We offer flexible hire periods to suit projects of all sizes. You can hire our equipment for a single day for small residential jobs, or on a weekly or long-term basis for large construction projects. We tailor the hire agreement to your needs." },
    { question: "How quickly can you deliver machinery to a site in Johannesburg?", answer: "We pride ourselves on prompt and reliable service. Depending on availability and your location within Johannesburg, we can often deliver equipment to your site within 24 to 48 hours of a confirmed booking." },
    { question: "How do you determine the cost of plant hire?", answer: "Our pricing is transparent and competitive. The cost is typically based on a daily or weekly rate for the specific machine, which includes the operator. We provide a clear, all-inclusive quote upfront with no hidden costs." }
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

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Plant Hire",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Apex Demolitions"
    },
    "areaServed": {
        "@type": "City",
        "name": "Johannesburg"
    },
    "description": "Professional and affordable plant hire in Johannesburg. We offer TLBs, Bobcats, excavators, tipper trucks, and more, with certified operators for all construction, demolition, and earthmoving projects.",
    "url": "https://apex-demolitions-website.vercel.app/plant-hire-johannesburg"
};

export default function PlantHireJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'plantHireTlb');
    const bobcatImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');
    const residentialImage = PlaceHolderImages.find(p => p.id === 'plantHireResidential');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Professional Plant Hire in Johannesburg</h1>
             <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <Tractor /> Your Partner for Reliable Construction Machinery
            </p>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Unlike standard equipment rental companies, we provide plant hire as part of a full-service solution, supporting demolition, site clearance, and construction projects. As leading contractors, we understand that the right machinery is critical for project success. Our professional plant hire service provides contractors and homeowners with access to a fleet of powerful, well-maintained equipment, complete with certified operators. Our plant hire services are commonly used for <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition Johannesburg</Link>, <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal Johannesburg</Link>, and <Link href="/site-cleaning-johannesburg" className="text-primary hover:underline">site cleaning</Link> projects, ensuring full site clearance from start to finish.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for Availability & Rates</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Book Your Machinery</Link>
                </Button>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-4">Plant Hire Across Johannesburg</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto">We provide plant hire services across Johannesburg, including Sandton, Randburg, Midrand, and Roodepoort. Our equipment supports projects in both residential and commercial areas.</p>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Plant Hire Fleet for Johannesburg</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">We offer a range of powerful and versatile machinery to suit any project, from residential landscaping to large-scale construction.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <Card><CardHeader><CardTitle>TLB Hire</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">The ultimate multi-purpose machine. Ideal for trenching, foundation digging, loading rubble, and general earthworks. The workhorse of any Johannesburg construction site.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Bobcat Hire</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Compact, agile, and powerful. Our Bobcats (skid-steer loaders) are perfect for working in tight spaces, site leveling, and efficient loading of debris.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Excavator Hire</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">For heavy-duty jobs, our excavators provide the power needed for bulk earthworks, deep foundation digging, and larger-scale <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link> projects.</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Tipper Truck Hire</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">The essential support vehicle for any site. Our reliable tipper trucks are used for efficient transport of soil, building materials, and for bulk <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link>.</p></CardContent></Card>
            </div>
        </section>

        <section id="use-cases" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Plant Hire Is Used For</h2>
            <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg">
                <p className="text-center text-muted-foreground mb-6">Our equipment is commonly used for:</p>
                <ul className="space-y-3 text-muted-foreground grid grid-cols-1 sm:grid-cols-2">
                    <li className="flex items-center gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0" /> Demolition Projects</li>
                    <li className="flex items-center gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0" /> Swimming Pool Removal</li>
                    <li className="flex items-center gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0" /> Site Clearance</li>
                    <li className="flex items-center gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0" /> Construction Work</li>
                    <li className="flex items-center gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0" /> Rubble & Waste Removal</li>
                </ul>
                <p className="text-center text-sm text-muted-foreground mt-6">We provide the right machinery depending on your project size and requirements.</p>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex for Plant Hire in Johannesburg?</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">We are more than a rental company; we are your project partners. Our service is designed to be seamless, professional, and reliable.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Professional Operator Included</h3><p className="text-sm text-muted-foreground">All plant hire equipment can be provided with experienced operators, ensuring safe, efficient, and professional handling on-site.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Well-Maintained Fleet</h3><p className="text-sm text-muted-foreground">Our machinery is regularly serviced and inspected to prevent breakdowns and costly downtime.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Flexible Hire Periods</h3><p className="text-sm text-muted-foreground">We offer daily, weekly, and long-term hire options to suit your project's specific needs and budget.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Competitive, Clear Rates</h3><p className="text-sm text-muted-foreground">Our pricing is transparent and affordable, providing excellent value for projects of all sizes in Johannesburg.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Fully Insured Service</h3><p className="text-sm text-muted-foreground">Our comprehensive insurance gives you complete peace of mind when our equipment is on your property.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Johannesburg-Wide Delivery</h3><p className="text-sm text-muted-foreground">We deliver and operate machinery across all Johannesburg suburbs, from Midrand to Alberton.</p></div></div>
            </div>
        </section>
        
         <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Johannesburg Plant Hire Process</h2>
                    <p className="text-muted-foreground mb-6">We make hiring heavy machinery simple, professional, and efficient.</p>
                    <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Consultation & Booking:</span> Tell us about your project, and we'll recommend the right machine and provide a clear quote.</li>
                        <li><span className="font-semibold text-foreground">Site Delivery:</span> We deliver the equipment to your Johannesburg site on the agreed-upon date and time.</li>
                        <li><span className="font-semibold text-foreground">Operated Hire:</span> Our professional operator carries out the work efficiently and safely according to your instructions.</li>
                        <li><span className="font-semibold text-foreground">Project Support:</span> We ensure the machinery is productive for the full duration of the hire period, integrating with your other site activities.</li>
                        <li><span className="font-semibold text-foreground">Collection:</span> Once your project phase is complete, we arrange for the prompt collection of the equipment.</li>
                    </ol>
                </div>
                 <div>
                    {bobcatImage && <div className="aspect-video relative"><Image src={bobcatImage.imageUrl} alt="Bobcat hire for a construction site in Johannesburg" data-ai-hint="bobcat hire" fill className="rounded-lg object-cover" /></div>}
                </div>
            </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Plant Hire Across All Johannesburg Suburbs</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                We offer localized plant hire services across Johannesburg. Click on your suburb to learn more, or visit our <Link href="/plant-hire-services-johannesburg" className="text-primary hover:underline">main services hub</Link>.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                {suburbs.map(suburb => (
                    <Button key={suburb.name} variant="outline" asChild>
                        <Link href={suburb.href}><MapPin className="mr-2" /> {suburb.name}</Link>
                    </Button>
                ))}
            </div>
      </section>

        <section id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">FAQ – Plant Hire Johannesburg</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Book Your Construction Machinery Today</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Contact Apex Demolitions for a reliable and affordable plant hire solution anywhere in Johannesburg. Our team is ready to equip your project for success.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                  <a href="tel:0784292760"><Phone />Call to Book</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link href="/contact"><Mail />Request Rates</Link>
              </Button>
          </div>
        </section>
    </div>
    </>
  );
}
    