import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, MessageSquare, Mail, MapPin, Axe, Home, Building, ShieldCheck, DollarSign, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from "react";

const faqs = [
    {
        question: "Do I need permission to cut down a tree in Johannesburg?",
        answer: "In some cases, yes. The City of Johannesburg has regulations to protect certain indigenous or particularly large 'champion' trees. While most common residential and alien invasive species don't require a permit, it's crucial to be sure. As part of our service for tree felling in Johannesburg, we provide expert guidance based on the tree's species, size, and location. Our extensive experience across Johannesburg, from the leafy suburbs of Sandton to older areas in Randburg, means we are familiar with these local nuances. We help ensure your tree removal project remains fully compliant, protecting you from potential fines and legal issues. For very large or clearly protected trees, we can advise on the steps for council consultation."
    },
    {
        question: "What happens to all the wood and branches after a tree is felled?",
        answer: "Our standard tree felling service is a full-service solution, meaning we handle the complete cleanup. After the tree is safely on the ground, our team cuts the trunk and larger branches into manageable sections for efficient loading and transport. All smaller branches, leaves, and twigs are raked up and removed from the site. We leave your property clean, tidy, and hazard-free. For clients who wish to keep the wood for firewood, we are happy to cut it into smaller, usable logs for you. This process integrates perfectly with our expert <a href='/rubble-removal-johannesburg' class='text-primary hover:underline'>rubble removal Johannesburg</a> service, as all organic and non-organic waste is handled in a single, streamlined operation."
    },
    {
        question: "Can you safely remove a large tree that is very close to my house?",
        answer: "Absolutely. This is a core specialty and where professional expertise is non-negotiable for any tree removal Johannesburg project. For trees in confined spaces or growing directly over structures in areas like Sandton or Bryanston, we use a meticulous technique called sectional dismantling. Instead of felling the tree in one piece, our certified arborists use safety harnesses and advanced rigging to climb the tree and dismantle it from the top down. Each section is carefully cut and lowered to the ground in a controlled manner using ropes. This precision work prevents any impact or damage to your house, roof, boundary walls, or garden. It is the industry-standard method for safe residential tree removal in dense Johannesburg suburbs."
    },
    {
        question: "How much does affordable tree felling in Johannesburg typically cost?",
        answer: "There is no one-size-fits-all answer, as the cost of tree felling in Johannesburg depends on several key variables. A small, easily accessible tree may be quite affordable, while a giant tree leaning over a house will cost significantly more due to the risk and labour involved. The main factors are the tree's size and height, its location and proximity to structures, site accessibility for our teams and equipment in suburbs like Roodepoort, and the complexity of the job (e.g., sectional dismantling vs. straight felling). We provide free, detailed, and no-obligation quotes that break down all costs, ensuring you receive transparent and competitive pricing. Our goal is to offer affordable tree felling Johannesburg solutions without ever compromising on safety or professionalism."
    },
    {
        question: "Is your tree felling team insured for residential and commercial work?",
        answer: "Yes, 100%. SIMA Demolitions Projects is fully insured for all tree felling and demolition operations. We carry comprehensive public liability insurance that covers our work on both residential and commercial properties across Johannesburg. This is a critical aspect of our professional commitment and your protection. It means that in the unlikely event of an accident or damage to your property or a neighboring one, you are completely covered. We will gladly provide our certificate of insurance with your quote, giving you the confidence and peace of mind that you are working with a responsible, professional, and compliant contractor for any tree cutting Johannesburg project."
    },
    {
        question: "Do you offer emergency tree removal services in Johannesburg?",
        answer: "Yes, we provide an emergency tree removal Johannesburg service to address urgent and hazardous situations. Johannesburg's highveld storms can cause trees to fall on houses, block driveways in suburbs from Fourways to Alberton, or become dangerously unstable. We prioritize these emergency call-outs to dispatch a team as quickly as possible, often outside of standard business hours. The primary goal of our emergency service is to safely neutralize the immediate threat, remove the fallen tree or hazardous branches, clear access, and prevent further damage to your property. If you are facing a tree-related emergency, call us directly for the fastest possible response."
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

export default function TreeFellingPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'treeFelling');
    const safetyImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const professionalImage = PlaceHolderImages.find(p => p.id === 'treeCuttingBefore');
    const residentialImage = PlaceHolderImages.find(p => p.id === 'poolDemoAfter');

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services in Johannesburg</h1>
        <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <Axe /> Safe, Controlled Tree Cutting & Removal in Johannesburg
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
          Looking for safe, professional, and affordable tree felling services in Johannesburg? SIMA Demolitions provides expert tree cutting, trimming, controlled removal, and land clearing solutions for residential, commercial, and development properties across Johannesburg and Gauteng. Tree removal is dangerous when handled incorrectly. Our trained, fully insured team uses professional equipment and controlled felling techniques to ensure safe removal without damage to nearby structures.
        </p>
        <Button size="lg" className="mt-6" asChild>
          <a href="tel:0784292760">
            <Phone className="mr-2 h-5 w-5" /> Call now for your free tree felling quote.
          </a>
        </Button>
      </section>

       {/* Why Choose Us Section */}
       <section className="mb-16 bg-card p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose SIMA for Tree Felling in Johannesburg?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div><ShieldCheck className="mx-auto h-10 w-10 text-accent" /><h4 className="font-semibold text-lg mt-2">Fully Insured & Compliant</h4><p className="text-muted-foreground mt-1 text-sm">Comprehensive insurance covers all operations, protecting your property and providing peace of mind.</p></div>
            <div><Axe className="mx-auto h-10 w-10 text-accent" /><h4 className="font-semibold text-lg mt-2">Expertise in Difficult Removals</h4><p className="text-muted-foreground mt-1 text-sm">We specialize in safely dismantling large trees in confined spaces near buildings and walls.</p></div>
            <div><Phone className="mx-auto h-10 w-10 text-accent" /><h4 className="font-semibold text-lg mt-2">Emergency Service</h4><p className="text-muted-foreground mt-1 text-sm">We offer a rapid response service for storm-damaged or hazardous trees that pose an immediate risk.</p></div>
            <div><Check className="mx-auto h-10 w-10 text-accent" /><h4 className="font-semibold text-lg mt-2">Complete Site Cleanup</h4><p className="text-muted-foreground mt-1 text-sm">Our service includes the full removal of all wood and debris, leaving your property spotless.</p></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            <div>
                <h2 className="text-3xl font-bold mb-4">Professional Tree Felling Johannesburg</h2>
                <p className="text-muted-foreground mb-4">
                    Trees located near buildings, boundary walls, driveways, or power lines require precision, planning, and expert execution to remove safely. Our professional tree felling Johannesburg service is designed specifically for these complex scenarios in dense suburbs like Sandton. We don't just cut trees; we systematically dismantle them to eliminate risk. Our service includes a full site assessment, controlled directional felling for open spaces, and advanced rope-assisted sectional dismantling for tight quarters. We specialize in the safe removal of dangerous, dead, or leaning trees, ensuring every cut is made with the safety of your Johannesburg property as the top priority.
                </p>
            </div>
            <div>
                {professionalImage && <Image src={professionalImage.imageUrl} alt="A professional arborist performing tree felling in Johannesburg" data-ai-hint="tree felling johannesburg" width={600} height={400} className="rounded-lg shadow-lg" />}
            </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
             <div>
                {residentialImage && <Image src={residentialImage.imageUrl} alt="A clean residential garden in Johannesburg after tree removal" data-ai-hint="clean garden" width={600} height={400} className="rounded-lg shadow-lg" />}
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-4">Residential & Commercial Tree Removal</h2>
                <p className="text-muted-foreground mb-4">Whether you're a homeowner in a leafy suburb like Randburg or a developer clearing a commercial site in Midrand, our teams are equipped for the job. For our residential tree removal clients, we safely remove overgrown yard trees, trees with roots damaging foundations, and clear gardens for new landscaping. For our commercial partners, we provide bulk tree removal for large-scale land clearing, site preparation before construction, and ongoing property maintenance. This service often integrates with our <Link href="/site-cleaning" className="text-primary hover:underline">site cleaning</Link> and <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal services</Link> to offer a complete, one-stop solution for site preparation.</p>
            </div>
        </div>
      </section>
      
       {/* Process Section */}
       <section id="process" className="mb-16 bg-card p-8 rounded-lg">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold mb-4">Our Safe & Controlled Tree Removal Process</h2>
                <p className="text-muted-foreground mb-4">Tree felling is high-risk work that is only safe in professional hands. We follow a strict, field-tested process for every tree cutting Johannesburg project to guarantee the protection of property and personnel.</p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Site Assessment:** We first analyze the tree's condition, its lean, and the surrounding environment in areas like Germiston to determine the safest felling strategy.</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Controlled Dismantling:** For trees near structures, we use rope-assisted sectional dismantling, cutting the tree down piece by piece from the top.</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Professional Equipment:** Our crews use professional-grade chainsaws, safety harnesses, and rigging systems to ensure precision and safety.</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Perimeter Control:** We establish a secure perimeter and use spotters to ensure the area is clear and safe during the felling process.</span></li>
                </ul>
                <p className="mt-4 font-semibold text-foreground">Precision reduces risk. Insurance protects you. Experience protects your property.</p>
            </div>
            <div>
                {safetyImage && <Image src={safetyImage.imageUrl} alt="Arborist using safety ropes for sectional tree dismantling" data-ai-hint="arborist ropes" width={600} height={400} className="rounded-lg shadow-lg" />}
            </div>
        </div>
      </section>

      {/* Cost Factors Section */}
      <section id="cost-factors" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">What Affects Tree Felling Costs in Johannesburg?</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
          Many clients ask how pricing works for tree cutting in Johannesburg. The cost depends on several key factors that influence the complexity, risk, and time required for the job. We provide transparent, affordable tree felling quotes with no hidden fees by assessing the following:
        </p>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card><CardHeader><CardTitle className="text-lg">1. Tree Size & Height</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Larger, taller trees require significantly more time, labour, and specialized safety equipment to dismantle safely, making them more costly than smaller trees.</p></CardContent></Card>
            <Card><CardHeader><CardTitle className="text-lg">2. Location & Proximity</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Trees growing near houses, walls, fences, or power lines need careful, sectional dismantling, which is more labour-intensive and requires higher skill.</p></CardContent></Card>
            <Card><CardHeader><CardTitle className="text-lg">3. Site Accessibility</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Limited access to backyards in Roodepoort, steep slopes, or difficult terrain can increase manual labour requirements for carrying equipment and hauling debris.</p></CardContent></Card>
            <Card><CardHeader><CardTitle className="text-lg">4. Tree Health & Stability</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Dead or unstable trees are more dangerous and unpredictable, requiring extra precautions and potentially specialized equipment, which can affect the cost.</p></CardContent></Card>
            <Card><CardHeader><CardTitle className="text-lg">5. Stump & Root Removal</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Removing the trunk and branches costs less than full stump grinding or root system excavation, which requires additional machinery and time.</p></CardContent></Card>
            <Card><CardHeader><CardTitle className="text-lg">6. Emergency Urgency</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Urgent, same-day, or after-hours call-outs for storm-damaged trees in Kempton Park may affect scheduling and mobilization costs.</p></CardContent></Card>
        </div>
        <div className="text-center mt-12 bg-card p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold">Looking for Affordable Tree Felling in Johannesburg?</h3>
            <p className="text-muted-foreground mt-2">While we never compromise on safety, we are committed to providing competitive and transparent pricing. Contact us for a detailed, no-obligation quote to see how affordable professional tree removal can be.</p>
            <Button asChild size="lg" className="mt-4">
                <Link href="/contact"><Quote className="mr-2 h-5 w-5" /> Request a Free, Itemized Quote</Link>
            </Button>
        </div>
      </section>

      {/* Safety & Legal Compliance */}
       <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold">Safety, Insurance, and Legal Compliance</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">Professional tree removal in Johannesburg must adhere to strict safety standards. Improper cutting can cause catastrophic property damage, severe injury, and complex insurance or legal disputes. Our fully insured and trained teams ensure all tree felling operations meet safety expectations and environmental responsibilities. As part of a full-service <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition company</Link>, we understand compliance inside and out. We do the job right the first time, protecting you, your property, and our crew.</p>
       </section>
      
      {/* FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions About Tree Felling</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <div dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, '<br />') }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

       {/* Final CTA Section */}
       <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
        <h2 className="text-3xl font-bold">Get a Free Quote for Tree Felling in Johannesburg</h2>
        <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
         Need reliable, professional tree felling services in Johannesburg? Let SIMA Demolitions handle it safely, efficiently, and affordably. We are fully licensed and insured.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
                <a href="tel:0784292760"><Phone /> Call Today for a Quote</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact"><Mail /> Request an Assessment</Link>
            </Button>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
            <span className="flex items-center gap-2"><Check /> Safe Service Guaranteed</span>
            <span className="flex items-center gap-2"><Check /> Clean Site Promise</span>
            <span className="flex items-center gap-2"><Check /> Trusted Across Johannesburg</span>
        </div>
      </section>
    </div>
    </>
  );
}
