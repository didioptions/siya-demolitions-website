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
        answer: "In Johannesburg, the need for permission depends on the tree. The City of Johannesburg has bylaws to protect certain indigenous, 'Champion', or heritage trees. While common alien invasive species like Syringa or Poplar generally don't require a permit, removing a large, old indigenous tree like a Stinkwood or Yellowwood almost certainly will. As part of our professional tree felling Johannesburg service, we provide expert guidance. We assess the tree's species, size, and location to determine if a council application is necessary. With our extensive experience across Johannesburg, from the large, established properties in Sandton to older suburbs in Randburg, we help ensure your project is fully compliant, protecting you from potential fines."
    },
    {
        question: "What happens to all the wood and branches after a tree is felled?",
        answer: "Our standard tree felling Johannesburg service is a comprehensive, all-inclusive solution. Once the tree is safely on the ground, our team processes it completely. The trunk and large limbs are cut into manageable sections, and all smaller branches and leaves are cleared. We then load and transport all organic material from your property, which integrates with our expert <a href='/rubble-removal-johannesburg' class='text-primary hover:underline'>rubble removal Johannesburg</a> services. Your property is left clean, tidy, and hazard-free. If you wish to keep the wood for firewood, we can cut it into smaller logs for you at your request. We also offer stump grinding services to remove the remaining stump, leaving the ground level and ready for new landscaping or construction."
    },
    {
        question: "Can you safely remove a large tree that is very close to my house?",
        answer: "Absolutely. This is a core specialty of our tree removal Johannesburg service and where professional expertise is non-negotiable. For trees in confined spaces or growing over structures in dense suburbs like Roodepoort or Alberton, we use a meticulous technique called sectional dismantling. Instead of felling the tree in one piece, our certified climbers use safety harnesses and advanced rigging to ascend the tree and cut it down in sections, from the top down. Each section is carefully controlled and lowered to the ground using ropes, preventing any impact on your house, roof, walls, or garden. This is the industry-standard method for safe residential tree removal and guarantees the protection of your valuable property."
    },
    {
        question: "Do you offer emergency tree removal services in Johannesburg?",
        answer: "Yes, we provide an emergency tree removal Johannesburg service for urgent situations. The highveld's powerful storms can cause trees to fall on homes, block driveways, or become dangerously unstable. We prioritize these emergency call-outs to dispatch a team as quickly as possible, often outside of standard business hours, to areas like Fourways, Kempton Park, and across the city. The goal of our emergency service is to safely neutralize the immediate threat, remove the fallen tree, clear access to your property, and prevent further damage. If you're facing a tree-related emergency, call us directly for the fastest possible response."
    },
    {
        question: "How much does affordable tree felling in Johannesburg typically cost?",
        answer: "The cost for affordable tree felling in Johannesburg is not one-size-fits-all, as it depends on several key factors. A small, easily accessible tree in an open yard will be far more affordable than a giant, complex tree leaning over a building. The primary variables are the tree's height and diameter, its proximity to structures (requiring more complex rigging), site accessibility for our equipment, and the overall risk involved. A tree that can be directionally felled is cheaper than one requiring sectional dismantling. We provide free, detailed, and no-obligation quotes that break down all costs, ensuring you receive transparent and competitive pricing for a safe, professional job."
    },
    {
        question: "Is stump removal included in the tree felling service?",
        answer: "Standard tree felling services typically include cutting the tree as low to the ground as is safely possible, but it does not automatically include removing the stump and its root system. Stump grinding or removal is a separate, specialized service that requires different machinery. We always discuss this during our quoting process. We highly recommend stump removal as it prevents the stump from becoming a tripping hazard, attracting pests like termites, or resprouting. We offer stump grinding as an add-on service to provide a complete tree removal solution, leaving your property perfectly clean and ready for its next use, whether that's new lawn, paving, or construction."
    }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Tree Felling Service",
  "provider": {
    "@type": "Organization",
    "name": "SIMA Demolitions Projects"
  },
  "areaServed": {
    "@type": "City",
    "name": "Johannesburg"
  },
  "description": "Professional and safe tree felling, tree removal, and site clearing services in Johannesburg. Licensed and insured for residential and commercial properties.",
  "url": "https://siya-demolitions-website--siya-demolitions-projects.europe-west4.hosted.app/tree-felling"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer.replace(/<a href='(.*?)' class='(.*?)'>(.*?)<\/a>/g, '$3') // Strip HTML for schema
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
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
                        Trees located near buildings, boundary walls, driveways, or power lines require precision, planning, and expert execution to remove safely. Our professional tree felling Johannesburg service is designed specifically for these complex scenarios in dense suburbs. We don't just cut trees; we systematically dismantle them to eliminate risk. Our service includes a full site assessment, controlled directional felling for open spaces, and advanced rope-assisted sectional dismantling for tight quarters. We specialize in the safe removal of dangerous, dead, or leaning trees, ensuring every cut is made with the safety of your Johannesburg property as the top priority.
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
                    <p className="text-muted-foreground mb-4">
                        Whether you're a homeowner in a leafy suburb like **Randburg** dealing with an overgrown garden, or a developer clearing a commercial site in **Midrand**, our teams are equipped for the job. For residential tree removal in Johannesburg, we safely remove problem trees with roots damaging foundations in **Roodepoort**, clear sightlines, or open up garden space. In townhouse complexes in **Fourways**, we work with Body Corporates to handle tree removals in confined common areas, ensuring minimal disruption.
                    </p>
                    <p className="text-muted-foreground">
                        For our commercial partners, we provide bulk tree removal for large-scale land clearing, site preparation before construction, and ongoing property maintenance. This service often integrates with our <Link href="/site-cleaning" className="text-primary hover:underline">site cleaning services Johannesburg</Link> and <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal Johannesburg</Link> to offer a complete, one-stop solution for site preparation. Developers in areas like **Sandton** and **Kempton Park** rely on us to efficiently clear all vegetation, including stumps and shrubs, ensuring the land is ready for excavation and foundation work. We handle the entire process, from the first cut to the final cleanup.
                    </p>
                </div>
            </div>
        </section>
      
       {/* Process Section */}
       <section id="process" className="mb-16 bg-card p-8 rounded-lg">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold mb-4">Our Safe & Controlled Tree Removal Process</h2>
                <p className="text-muted-foreground mb-4">Tree felling is high-risk work that is only safe in professional hands. We follow a strict, field-tested process for every tree cutting Johannesburg project to guarantee the protection of property and personnel, adhering to the principles of the Occupational Health and Safety (OHS) Act. Our reputation in demanding areas like **Sandton** and **Alberton** is built on this meticulous approach.</p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Site Assessment:** We analyze the tree's condition, its lean, and proximity to structures to determine the safest felling strategy, compliant with Johannesburg's urban environment.</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Controlled Dismantling:** For trees near structures, we use rope-assisted sectional dismantling. Our certified climbers ascend the tree and cut it down piece by piece, lowering each section safely to the ground using advanced rigging.</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Professional Equipment:** Our crews use professional-grade chainsaws, safety harnesses, rigging ropes, and personal protective equipment (PPE) to ensure precision and maximum safety.</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Perimeter Control:** We establish a secure work zone and use ground-based spotters to ensure the area is clear, a critical step in both residential and busy commercial settings like **Germiston**.</span></li>
                </ul>
            </div>
            <div>
                {safetyImage && <Image src={safetyImage.imageUrl} alt="Arborist using safety ropes for sectional tree dismantling" data-ai-hint="arborist ropes" width={600} height={400} className="rounded-lg shadow-lg" />}
            </div>
        </div>
      </section>

       <section id="stump-grinding" className="mb-16">
         <h2 className="text-3xl font-bold text-center mb-4">Stump Grinding & Root Removal: The Complete Solution</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
            Felling a tree is only half the job. A leftover stump can be an unsightly tripping hazard, attract pests like termites, and prevent you from using the area for new lawn or paving. We offer professional stump grinding services throughout Johannesburg to complete your tree removal project. Using high-powered stump grinders, we can grind the stump down to below ground level, allowing you to reclaim the space immediately. This service is essential for a clean, professional finish and is a crucial step before any new landscaping or construction.
        </p>
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
            <Card><CardHeader><CardTitle className="text-lg">5. Stump & Root Removal</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Removing the trunk and branches costs less than full stump grinding or root excavation, which requires additional machinery and time.</p></CardContent></Card>
            <Card><CardHeader><CardTitle className="text-lg">6. Emergency Urgency</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Urgent, same-day, or after-hours call-outs for storm-damaged trees may affect scheduling and mobilization costs.</p></CardContent></Card>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="text-center bg-card p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold">Looking for Affordable Tree Felling in Johannesburg?</h2>
        <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
            While we never compromise on safety, we are committed to providing competitive and transparent pricing. Contact us for a detailed, no-obligation quote to see how affordable professional tree removal can be.
        </p>
        <div className="mt-6">
            <Button asChild size="lg">
                <Link href="/contact"><Quote className="mr-2 h-5 w-5" /> Request a Free, Itemized Quote</Link>
            </Button>
            <p className="mt-2 text-sm text-muted-foreground font-semibold">Fully Licensed & Insured for Your Protection.</p>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section id="areas" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Areas We Provide Tree Felling in Johannesburg</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
            Our teams are mobile and provide fast, professional tree removal services across the greater Johannesburg metropolitan area. We have extensive experience working in a variety of suburbs, each with its unique challenges, from the large properties with established trees in **Sandton** and **Bryanston** to the denser, more complex residential areas of **Randburg** and **Roodepoort**. Whether it's land clearing for new developments in **Midrand** or handling problematic trees in **Alberton**, our local knowledge ensures a safe and efficient job every time.
        </p>
        <div className="max-w-5xl mx-auto p-6 bg-card rounded-lg">
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {["Sandton", "Randburg", "Midrand", "Roodepoort", "Alberton", "Germiston", "Fourways", "Kempton Park", "Soweto", "Edenvale", "Boksburg", "Johannesburg CBD"].map(area => (
                    <li key={area} className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span className="font-medium">{area}</span>
                    </li>
                ))}
            </ul>
            <p className="text-center text-sm text-muted-foreground mt-4 italic">If your location isn't listed, please contact us. We serve the entire Gauteng region and can likely assist with your project.</p>
        </div>
      </section>
      
      {/* Safety & Legal Compliance */}
       <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold">Safety, Insurance, and Legal Compliance</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">Professional tree removal in Johannesburg must adhere to strict safety standards and municipal by-laws. Improper cutting can cause catastrophic property damage, severe injury, and complex insurance or legal disputes. As a division of a leading <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition services Johannesburg</Link> company, we understand compliance inside and out. Our fully insured and trained teams ensure all tree felling operations meet national safety regulations and local environmental responsibilities. We do the job right the first time, protecting you, your property, and our crew from all foreseeable risks.</p>
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
