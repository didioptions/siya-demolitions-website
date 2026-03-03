import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, MessageSquare, Mail, MapPin, Axe, Home, Building, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const professionalServices = [
    "Full tree cutting and removal",
    "Controlled directional felling",
    "Sectional dismantling using ropes",
    "Removal of dangerous or leaning trees",
    "Safe cutting near homes and boundary walls",
];

const emergencyServices = [
    "Fallen tree removal",
    "Storm-damaged tree cutting",
    "Urgent hazard removal near homes",
    "Clearing access roads and driveways",
];

const residentialServices = [
    "Overgrown yard trees",
    "Trees too close to buildings",
    "Roots damaging paving or foundations",
    "Garden clean-ups",
    "Backyard tree removal",
];

const commercialServices = [
    "Site clearing before foundation digging",
    "Land preparation",
    "Bulk tree removal for developments",
    "Tree root hazard removal",
    "Maintenance for property managers",
];

const safetyProcess = [
    "Controlled directional cutting",
    "Rope-assisted sectional dismantling",
    "Professional-grade chainsaws",
    "Safety harness systems",
    "Spotters to ensure perimeter control",
];

const whyChooseUs = [
    "Safe, experienced teams",
    "Affordable, up-front pricing",
    "Local service in Johannesburg",
    "No mess left behind",
    "Emergency service available when possible",
    "Fully insured & reliable",
];

const joburgAreas = [
    "Sandton", "Soweto", "Midrand", "Randburg", "Roodepoort", "Germiston", "Alberton", "Johannesburg CBD",
    "Centurion", "Kempton Park", "Benoni", "Boksburg", "Brakpan", "Edenvale", "Nigel", "Springs"
];

const faqs = [
    {
        question: "Do I need permission to cut down a tree in Johannesburg?",
        answer: "In some cases, protected or heritage trees may require municipal approval before removal. It’s important to confirm regulations before cutting large or protected species. We can guide you on general compliance considerations when providing your quote."
    },
    {
        question: "What happens after a tree is felled?",
        answer: "After cutting, we remove branches and trunk sections. Cleanup is included unless otherwise specified. Stump removal or root grinding can also be discussed during quotation."
    },
    {
        question: "Can you remove trees near walls or houses?",
        answer: "Yes. Controlled sectional dismantling allows us to safely remove trees near buildings, fences, or tight areas without causing structural damage."
    },
    {
        question: "Do you offer emergency tree removal?",
        answer: "Yes. We assist with urgent tree removal when possible, especially after storms or high winds."
    }
];

export default function TreeFellingPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'treeCuttingBefore');
    const safetyImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const professionalImage = PlaceHolderImages.find(p => p.id === 'treeFelling');
    const emergencyImage = PlaceHolderImages.find(p => p.id === 'treeCuttingCleanup');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services in Johannesburg</h1>
        <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <Axe /> Safe, Controlled Tree Cutting & Removal in Johannesburg
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
          Looking for safe, professional, and affordable tree felling services in Johannesburg? SIMA Demolitions provides expert tree cutting, trimming, controlled removal, and land clearing solutions for residential, commercial, and development properties across Johannesburg and Gauteng.
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
          Tree removal is dangerous when handled incorrectly. Our trained, fully insured team uses professional equipment and controlled felling techniques to ensure safe removal without damage to nearby structures. Whether you need emergency tree removal after a storm or site clearing before a new development, we’ve got you covered.
        </p>
        <Button size="lg" className="mt-6" asChild>
          <a href="tel:0784292760">
            <Phone className="mr-2 h-5 w-5" /> Call now to request your free tree felling quote in Johannesburg.
          </a>
        </Button>
      </section>

      {/* Services Section */}
      <section id="services" className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
                {professionalImage && <Image src={professionalImage.imageUrl} alt="Professional tree felling in Johannesburg" data-ai-hint="tree felling johannesburg" width={600} height={400} className="rounded-lg shadow-lg" />}
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-4">Professional Tree Felling Johannesburg</h2>
                <p className="text-muted-foreground mb-4">Trees located near buildings, walls, driveways, or power lines require precision removal. Our tree felling Johannesburg service includes:</p>
                <ul className="space-y-2">
                    {professionalServices.map((service) => (
                        <li key={service} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground">{service}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-muted-foreground mt-4">We use advanced safety procedures to protect property and surrounding areas while completing the job efficiently.</p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
                <h2 className="text-3xl font-bold mb-4">Emergency Tree Removal Johannesburg</h2>
                <p className="text-muted-foreground mb-4">Storms and strong winds can cause trees to fall or become unstable. We provide emergency tree removal in Johannesburg when possible, including:</p>
                <ul className="space-y-2">
                    {emergencyServices.map((service) => (
                        <li key={service} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground">{service}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-muted-foreground mt-4">Fast action reduces further property damage and improves safety.</p>
            </div>
            <div>
                {emergencyImage && <Image src={emergencyImage.imageUrl} alt="Emergency tree removal after a storm in Johannesburg" data-ai-hint="storm damage tree" width={600} height={400} className="rounded-lg shadow-lg" />}
            </div>
        </div>
      </section>
      
       {/* Project Types Section */}
      <section id="project-types" className="mb-16 bg-card p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Tree Services for Homes & Construction Sites</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Home className="h-6 w-6 text-accent" /> Residential Tree Felling Services</CardTitle>
                </CardHeader>
                <CardContent>
                     <p className="text-muted-foreground mb-4">Homeowners trust us for safe tree removal and trimming, including:</p>
                     <ul className="space-y-2">
                        {residentialServices.map((service) => (
                             <li key={service} className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                                <span className="text-muted-foreground">{service}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-muted-foreground mt-4">We remove trees carefully and clean up afterward, leaving your property tidy and hazard-free.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Building className="h-6 w-6 text-accent" /> Commercial & Development Tree Removal</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">We support construction firms and developers across Johannesburg with:</p>
                     <ul className="space-y-2">
                         {commercialServices.map((service) => (
                             <li key={service} className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                                <span className="text-muted-foreground">{service}</span>
                            </li>
                         ))}
                    </ul>
                    <p className="text-muted-foreground mt-4">Tree felling often pairs directly with our <Link href="/site-cleaning" className="text-primary hover:underline">site cleaning</Link> and <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal services</Link>, creating a complete land preparation solution.</p>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
                <h2 className="text-3xl font-bold mb-4">Safe & Controlled Tree Removal Process</h2>
                <p className="text-muted-foreground mb-4">Tree felling is high-risk work — but safe in professional hands. Our crews use:</p>
                <ul className="space-y-2">
                  {safetyProcess.map(point => (
                    <li key={point} className="flex items-start gap-3">
                      <Check className="text-accent flex-shrink-0 mt-1 h-5 w-5" />
                      <span className="font-semibold text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">We assess every site before cutting to determine the safest removal method. Precision reduces risk. Insurance protects you. Experience protects your property.</p>
            </div>
             <div>
                {safetyImage && <Image src={safetyImage.imageUrl} alt={safetyImage.description} data-ai-hint={safetyImage.imageHint} width={600} height={400} className="rounded-lg shadow-lg" />}
            </div>
        </div>
      </section>

      {/* Cost Factors Section */}
      <section id="cost-factors" className="mb-16 bg-card p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">What Affects Tree Felling Costs in Johannesburg?</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
          Many clients ask how pricing works. The cost of tree cutting in Johannesburg depends on several key factors. We offer transparent, affordable tree felling quotes with no hidden fees.
        </p>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Tree Size & Height</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Large trees require more time, labor, and specialized safety equipment to dismantle safely.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Location & Proximity</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Trees near houses, walls, fences, or power lines need careful, sectional dismantling, which is more labor-intensive.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Site Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Limited access to backyards or difficult terrain may increase manual labour requirements for hauling debris.</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Root & Stump Removal</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Removing the trunk alone costs less than full stump grinding or root system excavation, which requires additional machinery.</p>
                </CardContent>
            </Card>
             <Card className="lg:col-span-2 md:col-span-1">
                <CardHeader>
                    <CardTitle className="text-lg">Emergency Urgency</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Urgent, same-day, or after-hours call-outs for storm-damaged trees may affect scheduling and costs due to immediate crew mobilization.</p>
                </CardContent>
            </Card>
        </div>
         <div className="text-center mt-6">
            <Button asChild>
                <Link href="/contact">Request a Free, Obligation-Free Quote</Link>
            </Button>
        </div>
      </section>

      {/* Safety & Legal Compliance */}
       <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold">Safety & Legal Compliance</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">Professional tree removal must follow safety standards in Johannesburg. Improper cutting can cause property damage, injury, insurance issues, or legal disputes. Our fully insured and trained teams ensure all tree felling operations meet safety expectations and environmental responsibility. We do the job right the first time.</p>
       </section>

      {/* Why Choose Us & Areas Section */}
      <section className="grid md:grid-cols-5 gap-8 mb-16">
        <div className="md:col-span-3 bg-card p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><ShieldCheck /> Why Choose SIMA for Tree Felling?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((reason) => (
                    <div key={reason} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1"/>
                        <span className="font-medium text-muted-foreground">{reason}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className="md:col-span-2">
            <Card className="shadow-lg h-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><MapPin/> Areas We Serve</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 text-muted-foreground">We offer tree felling and trimming across Johannesburg, including:</p>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {joburgAreas.map((area) => (
                        <li key={area} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-accent flex-shrink-0" />
                            <span className="font-medium">{area}</span>
                        </li>
                    ))}
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground italic">
                       If you’re unsure whether we service your area — contact us. We likely do.
                    </p>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions About Tree Felling</h2>
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

      {/* Final CTA Section */}
      <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
        <h2 className="text-3xl font-bold">Get a Free Quote for Tree Felling in Johannesburg</h2>
        <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
         Need reliable, professional tree felling services in Johannesburg? Let SIMA Demolitions handle it safely, efficiently, and affordably.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
                <a href="tel:0784292760"><Phone /> Call today</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact"><Mail /> Request a Quote</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
                 <Link href="/contact">
                    <Axe/> Book an Assessment
                </Link>
            </Button>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
            <span className="flex items-center gap-2"><Check /> Safe service</span>
            <span className="flex items-center gap-2"><Check /> Clean site guarantee</span>
            <span className="flex items-center gap-2"><Check /> Trusted across Johannesburg</span>
        </div>
      </section>
    </div>
  );
}
