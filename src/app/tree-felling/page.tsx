import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, MessageSquare, Mail, MapPin, Axe, Home, Building, ShieldCheck, HelpCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const treeServices = [
    "Full tree cutting and removal",
    "Controlled felling near buildings or walls",
    "Trimming & pruning of overgrown trees",
    "Emergency felling after storms or damage",
    "Land and property clearing"
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
    "Sandton", "Randburg", "Roodepoort", "Midrand", "Soweto", "Germiston", "Alberton", "Johannesburg CBD"
];

const faqs = [
    {
        question: "Do I need permission to cut down a tree in Johannesburg?",
        answer: "Depending on the tree species, size, and location — yes. We can advise and assist with any permissions if needed."
    },
    {
        question: "What happens after a tree is felled?",
        answer: "We provide full removal and clean-up, including trunk sections, branches, and debris."
    },
    {
        question: "Can you remove trees near walls or houses?",
        answer: "Yes — this is our specialty. We use controlled felling and rigging to keep surroundings safe."
    },
    {
        question: "Do you offer emergency or storm-damage tree removal?",
        answer: "Yes — based on availability, we assist with fallen or dangerous trees."
    }
];

export default function TreeFellingPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'treeCuttingBefore');
    const safetyImage = PlaceHolderImages.find(p => p.id === 'treeCuttingRopes');
    const cleanupImage = PlaceHolderImages.find(p => p.id === 'treeCuttingCleanup');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tree Felling Services in Johannesburg</h1>
        <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <Axe /> Safe, Controlled Tree Cutting & Removal
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
          Looking for safe and affordable tree felling in Johannesburg? At Siya Demolitions, we provide professional tree felling, cutting, trimming, and removal services for homes, offices, and development sites.
        </p>
        <Button size="lg" className="mt-6" asChild>
          <a href="tel:0784292760">
            <Phone className="mr-2 h-5 w-5" /> Call now to request your free quote
          </a>
        </Button>
      </section>

      {/* Services Section */}
      <section id="services" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Tree Felling Services Include</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
                {heroImage && <Image src={heroImage.imageUrl} alt={heroImage.description} data-ai-hint={heroImage.imageHint} width={600} height={400} className="rounded-lg shadow-lg" />}
            </div>
            <div className="space-y-3">
                {treeServices.map((service) => (
                    <div key={service} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground font-medium">{service}</span>
                    </div>
                ))}
                 <p className="text-sm text-muted-foreground pt-2">All services meet Johannesburg safety and environmental standards.</p>
            </div>
        </div>
      </section>
      
       {/* Safety Section */}
       <section id="safety" className="mb-16 bg-card p-8 rounded-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
                <h2 className="text-3xl font-bold mb-4">Safe & Controlled Tree Removal</h2>
                <p className="text-muted-foreground mb-4">Tree felling is high-risk work — but not with professionals on your side. Our Johannesburg crew uses the right techniques, ropes, and equipment to remove trees safely and precisely:</p>
                <ul className="space-y-2">
                    <li className="flex items-start gap-3"><Check className="text-accent" /> Controlled directional cutting</li>
                    <li className="flex items-start gap-3"><Check className="text-accent" /> Safe lowering away from structures</li>
                    <li className="flex items-start gap-3"><Check className="text-accent" /> Advanced safety gear and spotters</li>
                    <li className="flex items-start gap-3"><Check className="text-accent" /> Clean site left afterward</li>
                </ul>
            </div>
             <div>
                {safetyImage && <Image src={safetyImage.imageUrl} alt={safetyImage.description} data-ai-hint={safetyImage.imageHint} width={600} height={400} className="rounded-lg shadow-lg" />}
            </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section id="project-types" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Tree Services for Homes & Construction Sites</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Home className="h-6 w-6 text-accent" /> Residential Tree Services</CardTitle>
                </CardHeader>
                <CardContent>
                     <ul className="space-y-2">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Overgrown yard trees</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Trees near homes or garages</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Garden clean-up and branch trimming</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Emergency removals after storms</span></li>
                    </ul>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Building className="h-6 w-6 text-accent" /> Commercial / Development</CardTitle>
                </CardHeader>
                <CardContent>
                     <ul className="space-y-2">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Site clearing for new developments</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Removing trees before digging foundations</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Regular maintenance for property managers</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Tree root hazard removal</span></li>
                    </ul>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* Why Choose Us & Areas Section */}
      <section className="grid md:grid-cols-5 gap-8 mb-16">
        <div className="md:col-span-3">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><ShieldCheck /> Why Choose Siya for Tree Felling?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((reason) => (
                    <div key={reason} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1"/>
                        <span className="font-medium text-muted-foreground">{reason}</span>
                    </div>
                ))}
            </div>
             {cleanupImage && <Image src={cleanupImage.imageUrl} alt={cleanupImage.description} data-ai-hint={cleanupImage.imageHint} width={500} height={300} className="rounded-lg shadow-lg mt-6" />}
        </div>
        <div className="md:col-span-2">
            <Card className="shadow-lg h-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><MapPin/> Areas We Serve</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 text-muted-foreground">We offer tree felling and trimming across:</p>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {joburgAreas.map((area) => (
                        <li key={area} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-accent flex-shrink-0" />
                            <span className="font-medium">{area}</span>
                        </li>
                    ))}
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground italic">
                       Not sure if we service your neighbourhood? Just ask — we probably do!
                    </p>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
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
         Need reliable tree felling or land clearing? Let Siya Demolitions handle it — safely, efficiently, and affordably.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
                <a href="tel:0784292760"><Phone />Call today</a>
            </Button>
             <Button size="lg" variant="secondary" asChild>
                <Link href="/contact"><HelpCircle />Request a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact"><Mail />Book an Assessment</Link>
            </Button>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <span className="flex items-center gap-2"><Check /> Safe service</span>
            <span className="flex items-center gap-2"><Check /> Clean site guarantee</span>
            <span className="flex items-center gap-2"><Check /> Local Johannesburg company</span>
        </div>
      </section>
    </div>
  );
}
