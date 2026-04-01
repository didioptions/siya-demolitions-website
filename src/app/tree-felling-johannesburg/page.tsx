
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, MapPin, Quote, Axe, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mainSuburbs = [
    { name: "Sandton", href: "/tree-felling-sandton" },
    { name: "Randburg", href: "/tree-felling-randburg" },
    { name: "Roodepoort", href: "/tree-felling-roodepoort" },
    { name: "Midrand", href: "/tree-felling-midrand" },
    { name: "Germiston", href: "/tree-felling-germiston" },
];

const otherSuburbsText = "Fourways, Soweto, Alberton, Boksburg, Benoni, Kempton Park, Bedfordview, Edenvale, Bryanston, Rosebank, Northcliff, Melville, Linden, Parkhurst, and Greenside.";


const faqs = [
    { question: "How much does tree felling cost in Johannesburg?", answer: "The cost of tree felling in Johannesburg varies based on several factors, including the tree's size, height, and accessibility. The complexity of the job, such as proximity to buildings or power lines, also plays a role. We provide free, on-site assessments and detailed, no-obligation quotes to give you an accurate price." },
    { question: "Do I need a permit for tree felling in Johannesburg?", answer: "In most cases, you do not need a permit for trees on private residential property. However, certain indigenous trees are protected by law. As part of our service, we will advise you if a permit from the City of Johannesburg is required and can assist with the application process." },
    { question: "How do you ensure safety during tree removal?", answer: "Safety is our top priority. Our teams are fully trained and insured. We use professional-grade equipment and follow strict safety protocols, including sectional dismantling for large trees in confined spaces, to ensure no damage to your property or surrounding structures." },
    { question: "Do you also remove the tree stump?", answer: "Yes, we offer a complete service that includes stump grinding and removal. After the tree is felled, we can grind the stump down below ground level, allowing you to lay lawn, pave, or build over the area. This leaves your property completely clear and level." },
    { question: "How quickly can you remove a fallen or dangerous tree?", answer: "We offer an emergency tree felling service for urgent situations like storm-damaged or hazardous trees. This is part of our <a href='/same-day-rubble-removal-johannesburg' class='text-primary hover:underline'>same-day response capability</a>, which includes urgent cleanups. We prioritize these calls to ensure your property is made safe as quickly as possible. Please call us directly for the fastest response." }
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
    "serviceType": "Tree Felling Service",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Apex Demolitions"
    },
    "areaServed": {
        "@type": "City",
        "name": "Johannesburg"
    },
    "description": "Professional tree felling, tree removal, stump grinding, and site clearing services in Johannesburg. Licensed and insured contractors for residential and commercial properties.",
    "url": "https://apex-demolitions-website.vercel.app/tree-felling-johannesburg"
};


export default function TreeFellingJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'treeFelling');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const processImage = PlaceHolderImages.find(p => p.id === 'treeCuttingCleanup');

  return (
    <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
            <section className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Professional Tree Felling Contractors in Johannesburg</h1>
                <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                    <ShieldCheck /> Safe, Licensed & Insured Tree Removal Experts
                </p>
                <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                    As premier tree felling contractors in Johannesburg, Apex Demolitions Projects offers expert, safe, and reliable tree felling services. Tree removal is often the first critical step in land development, making way for new construction, <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link>, or landscaping projects. An overgrown or hazardous tree can pose a significant risk to your property. Our licensed and insured team provides professional solutions across all Johannesburg suburbs, including Sandton, Randburg, Roodepoort, and Soweto. From precision tree cutting in tight spaces to complete stump removal, we handle every aspect of the job, ensuring your property is left safe and clean. Same-day and urgent services are available across Johannesburg depending on project size and location.
                </p>
                 <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                        <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Free Quote</a>
                    </Button>
                    <Button size="lg" variant="secondary" asChild>
                       <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><Quote className="mr-2"/>WhatsApp for Fast Response</a>
                    </Button>
                </div>
            </section>
            
            <section className="bg-card border-b border-t mb-16">
              <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-4">
                    <div className="flex items-center justify-center gap-2 text-sm font-medium"><Check className="text-primary" /> Same-Day Service Available</div>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium"><Check className="text-primary" /> Experienced Operators</div>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium"><Check className="text-primary" /> Fast & Reliable</div>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium"><Check className="text-primary" /> Serving All Johannesburg Areas</div>
                </div>
              </div>
            </section>

            <section id="when-needed" className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">When is Tree Felling Necessary?</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">Understanding when to call a professional is key to maintaining a safe and beautiful property. We are typically called for:</p>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Hazardous & Dangerous Trees</h4><p className="text-sm text-muted-foreground">Trees that are dead, diseased, or have grown too close to your home, power lines, or boundary walls.</p></div></div>
                    <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Construction & Renovation</h4><p className="text-sm text-muted-foreground">Clearing space for a new building, home extension, swimming pool, or driveway.</p></div></div>
                    <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Storm Damage</h4><p className="text-sm text-muted-foreground">Urgent removal of fallen or broken trees after a highveld storm to ensure your property is safe.</p></div></div>
                    <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><div><h4 className="font-semibold">Overgrown & Problem Trees</h4><p className="text-sm text-muted-foreground">Trees with invasive root systems damaging foundations or trees that block all sunlight from your garden.</p></div></div>
                </div>
            </section>

            <section id="services" className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-12">Our Tree Felling Services in Johannesburg</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Axe /> Tree Cutting & Removal</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Safe felling and sectional dismantling of trees of all sizes, from large invasive species to smaller problematic trees.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Axe /> Stump Grinding & Removal</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Complete removal of stumps below ground level, leaving your site perfectly clear and ready for lawn or paving.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Axe /> Tree Pruning & Trimming</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Improving tree health, shape, and safety by expertly removing dead or overgrown branches.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Axe /> Vegetation & Site Clearing</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Preparing land for construction or landscaping by clearing all unwanted trees and bush as part of our full <Link href="/site-cleaning-johannesburg" className="text-primary hover:underline">site cleaning</Link> service.</p></CardContent></Card>
                </div>
            </section>
            
            <section className="mb-16 bg-card p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-center mb-8">Our Commitment to Safety, Professionalism & Your Property</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Licensed & Insured</h3><p className="text-sm text-muted-foreground">Full compliance and comprehensive insurance for your complete peace of mind.</p></div></div>
                    <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Safety First Approach</h3><p className="text-sm text-muted-foreground">We use advanced techniques like sectional dismantling and professional rigging to protect your property at all times.</p></div></div>
                    <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Experienced Team</h3><p className="text-sm text-muted-foreground">Our arborists are trained and experienced in handling complex and dangerous tree removals.</p></div></div>
                    <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Full Cleanup Service</h3><p className="text-sm text-muted-foreground">We don't just cut the tree; we remove all wood, branches, and debris from your property as part of our complete <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link> service.</p></div></div>
                    <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Affordable Pricing</h3><p className="text-sm text-muted-foreground">We provide competitive and transparent quotes with no hidden costs.</p></div></div>
                    <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Emergency Services</h3><p className="text-sm text-muted-foreground">We offer a fast response for storm-damaged or hazardous trees that pose an immediate threat.</p></div></div>
                </div>
                <div className="text-center mt-8">
                    <p className="text-sm text-muted-foreground">See our Google Reviews or <a href="https://g.page/r/CZ4yPlKY6ihdEAE/review" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">leave us a review</a> to hear what our clients say about our work.</p>
                </div>
            </section>
            
            <section className="mb-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Johannesburg Tree Felling Process</h2>
                        <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                            <li><span className="font-semibold text-foreground">Site Assessment:</span> We provide a free, on-site evaluation and a detailed, no-obligation quote.</li>
                            <li><span className="font-semibold text-foreground">Permit Check:</span> We advise if any permits are needed for protected trees.</li>
                            <li><span className="font-semibold text-foreground">Safety Preparation:</span> We secure the area and plan the felling path to protect your property.</li>
                            <li><span className="font-semibold text-foreground">Controlled Felling:</span> Our team uses sectional dismantling to safely bring the tree down piece by piece.</li>
                            <li><span className="font-semibold text-foreground">Debris Removal & Cleanup:</span> We chip smaller branches and remove all logs, leaving your site tidy.</li>
                            <li><span className="font-semibold text-foreground">Stump Grinding:</span> On request, we grind the stump below ground level for a perfectly flat finish.</li>
                        </ol>
                    </div>
                     <div>
                        {processImage && <div className="aspect-video relative"><Image src={processImage.imageUrl} alt="Cleaning up wood chips after tree felling in Johannesburg" data-ai-hint="wood chips cleanup" fill className="rounded-lg object-cover" /></div>}
                    </div>
                </div>
                <div className="text-center mt-8">
                     <p className="text-muted-foreground">We recently completed a project in Johannesburg, removing a large tree and preparing the site for the next phase, ensuring a clean and safe handover.</p>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">Tree Felling Services Across Johannesburg Suburbs</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                    We offer localized tree felling services across Johannesburg. Click on your suburb to learn more, or visit our <Link href="/tree-felling-services-johannesburg" className="text-primary hover:underline">main services hub</Link>.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    {mainSuburbs.map(suburb => (
                        <Button key={suburb.name} variant="outline" asChild>
                            <Link href={suburb.href}><MapPin className="mr-2" /> {suburb.name}</Link>
                        </Button>
                    ))}
                </div>
                <p className="text-center text-sm text-muted-foreground mt-8 max-w-4xl mx-auto">
                    Our service area also includes: {otherSuburbsText}
                </p>
            </section>

            <section id="faq" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">FAQ – Tree Felling Johannesburg</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
              <h2 className="text-3xl font-bold">Get a Free Tree Felling Quote in Johannesburg</h2>
              <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                For safe and professional tree removal, contact Apex Demolitions today. We serve all of Johannesburg with licensed and insured services.
              </p>
              <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                      <a href="tel:0784292760"><Phone />Call for a Fast Quote</a>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                      <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><Mail />WhatsApp for Fast Response</a>
                  </Button>
              </div>
            </section>
        </div>
    </>
  );
}
