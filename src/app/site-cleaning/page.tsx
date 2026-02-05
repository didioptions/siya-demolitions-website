import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, MessageSquare, Mail, MapPin, Home, Building, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const whyChooseUs = [
    "Trusted by local contractors",
    "Fast, professional crews",
    "Licensed and insured",
    "Affordable + reliable quotes",
    "Friendly Johannesburg-based service",
];

const joburgAreas = [
    "Sandton", "Soweto", "Midrand", "Randburg", "Roodepoort", "Germiston", "Alberton", "Johannesburg CBD"
];

const faqs = [
    {
        question: "Do you offer maintenance cleanups?",
        answer: "Yes, we offer ongoing and scheduled services — daily, weekly, or as needed to keep your site consistently clean and safe."
    },
    {
        question: "Do you clean after demolition?",
        answer: "Absolutely. We specialize in post-demolition site cleanup and rubble disposal, ensuring a seamless transition from demolition to a build-ready site."
    },
    {
        question: "Are your crews insured and certified?",
        answer: "Yes, all our teams follow strict industry standards and are fully licensed and insured to operate on any site in Johannesburg."
    },
    {
        question: "Is it worth hiring pros for small sites?",
        answer: "Definitely. Even small sites can have significant safety hazards and cleanup challenges. We handle jobs of any size safely and efficiently, saving you time and risk."
    }
];

export default function SiteCleaningPage() {
    const beforeImage = PlaceHolderImages.find(p => p.id === 'siteCleaningBefore');
    const afterImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const workerImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');


  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Site Cleaning Services in Johannesburg</h1>
        <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <Sparkles /> Professional Site Clearance for a Safer, Smarter Job Site
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
          Keep your construction or demolition site clean, safe, and on schedule with Siya Demolitions’ professional site cleaning services in Johannesburg. We offer fast, reliable debris and waste clearing for residential, commercial, and industrial projects — ensuring every site is left compliant, hazard-free, and ready for the next phase of work.
        </p>
        <Button size="lg" className="mt-6" asChild>
          <a href="tel:0784292760">
            <Phone className="mr-2 h-5 w-5" /> Call us today for a free quote
          </a>
        </Button>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Complete Site Cleaning Solutions</h2>
        <div className="max-w-4xl mx-auto text-center bg-card p-8 rounded-lg shadow-lg">
            <p className="text-muted-foreground mb-6">We provide once-off cleanups and ongoing contractor support, including:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center gap-2"><Check className="text-accent" /> Construction site cleaning</div>
                <div className="flex flex-col items-center gap-2"><Check className="text-accent" /> Post-demolition cleaning</div>
                <div className="flex flex-col items-center gap-2"><Check className="text-accent" /> General site debris removal</div>
                <div className="flex flex-col items-center gap-2"><Check className="text-accent" /> Land and property clean-ups</div>
                <div className="flex flex-col items-center gap-2"><Check className="text-accent" /> Pre-handover site prep</div>
                <div className="flex flex-col items-center gap-2"><Check className="text-accent" /> Developer land prep</div>
            </div>
        </div>
      </section>
      
      {/* Before & After Section */}
       <section id="before-after" className="mb-16">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Safe & Efficient Site Clean-Ups</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">Messy sites cause delays, hazards, and lost productivity. Our teams provide fast debris removal, clear walkways, and improved site presentation for full safety compliance.</p>
        </div>
         <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
                {beforeImage && <Image src={beforeImage.imageUrl} alt={beforeImage.description} data-ai-hint={beforeImage.imageHint} width={600} height={400} className="rounded-lg shadow-lg mb-2" />}
                <p className="font-semibold text-center">Before: A site full of waste</p>
            </div>
            <div className="flex flex-col items-center">
                {afterImage && <Image src={afterImage.imageUrl} alt={afterImage.description} data-ai-hint={afterImage.imageHint} width={600} height={400} className="rounded-lg shadow-lg mb-2" />}
                <p className="font-semibold text-center">After: A clean and organized work site</p>
            </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section id="project-types" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Site Cleaning for All Project Types</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Home className="h-6 w-6 text-accent" /> Residential Cleaning Services</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Perfect for:</p>
                    <ul className="mt-2 space-y-2">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Renovation projects</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Yard and land clean-ups</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Property sales preparation</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Garage/boundary clearing</span></li>
                    </ul>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Building className="h-6 w-6 text-accent" /> Commercial / Construction Support</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Ideal for:</p>
                     <ul className="mt-2 space-y-2">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Builders and contractors</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Ongoing project maintenance</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Post-build or handover cleaning</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span className="text-muted-foreground">Developer land prep</span></li>
                    </ul>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* Why Choose Us & Areas Section */}
      <section className="grid md:grid-cols-5 gap-8 mb-16">
        <div className="md:col-span-3">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Check /> Why Choose Siya Demolitions?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((reason) => (
                    <div key={reason} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1"/>
                        <span className="font-medium text-muted-foreground">{reason}</span>
                    </div>
                ))}
            </div>
             {workerImage && <Image src={workerImage.imageUrl} alt={workerImage.description} data-ai-hint={workerImage.imageHint} width={500} height={300} className="rounded-lg shadow-lg mt-6" />}
        </div>
        <div className="md:col-span-2">
            <Card className="shadow-lg h-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><MapPin/> Areas We Serve in Johannesburg</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 text-muted-foreground">Our site cleaning teams cover:</p>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {joburgAreas.map((area) => (
                        <li key={area} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-accent flex-shrink-0" />
                            <span className="font-medium">{area}</span>
                        </li>
                    ))}
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground italic">
                       Don’t see your area listed? Get in touch — we likely service your location!
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
        <h2 className="text-3xl font-bold">Keep Your Site Clean – Get a Free Cleaning Quote Today</h2>
        <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
         Looking for reliable site cleaning in Johannesburg? Let Siya Demolitions handle the debris — so you can move forward fast.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
                <a href="tel:0784292760"><Phone />Call us today</a>
            </Button>
             <Button size="lg" variant="secondary" asChild>
                <Link href="/contact"><Sparkles />Request a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact"><Mail />Book a Clean-Up</Link>
            </Button>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <span className="flex items-center gap-2"><Check /> Quick response</span>
            <span className="flex items-center gap-2"><Check /> Safety-first cleanup</span>
            <span className="flex items-center gap-2"><Check /> Trusted in Johannesburg</span>
        </div>
      </section>
    </div>
  );
}
