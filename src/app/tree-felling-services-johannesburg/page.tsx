import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, MapPin, Construction, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const suburbs = [
    { name: "Sandton", href: "/tree-felling-sandton" },
    { name: "Randburg", href: "/tree-felling-randburg" },
    { name: "Roodepoort", href: "/tree-felling-roodepoort" },
    { name: "Midrand", href: "/tree-felling-midrand" },
    { name: "Fourways", href: "/tree-felling-fourways" },
    { name: "Soweto", href: "/tree-felling-soweto" },
    { name: "Alberton", href: "/tree-felling-alberton" },
    { name: "Germiston", href: "/tree-felling-germiston" },
    { name: "Boksburg", href: "/tree-felling-boksburg" },
    { name: "Benoni", href: "/tree-felling-benoni" },
    { name: "Kempton Park", href: "/tree-felling-kempton-park" },
    { name: "Bedfordview", href: "/tree-felling-bedfordview" },
    { name: "Edenvale", href: "/tree-felling-edenvale" },
    { name: "Bryanston", href: "/tree-felling-bryanston" },
    { name: "Rosebank", href: "/tree-felling-rosebank" },
    { name: "Northcliff", href: "/tree-felling-northcliff" },
    { name: "Melville", href: "/tree-felling-melville" },
    { name: "Linden", href: "/tree-felling-linden" },
    { name: "Parkhurst", href: "/tree-felling-parkhurst" },
    { name: "Greenside", href: "/tree-felling-greenside" },
];

const services = [
    "Residential Tree Felling",
    "Commercial Tree Removal",
    "Stump Grinding & Removal",
    "Tree Trimming & Pruning",
    "Emergency Tree Services",
    "Vegetation & Site Clearing",
];

const faqs = [
    { question: "Are your tree felling teams insured?", answer: "Yes, absolutely. SIMA Demolitions Projects carries comprehensive public liability insurance to protect your property, our team, and the public. We are professional contractors, and safety is our foremost priority." },
    { question: "How do you handle large trees in confined spaces?", answer: "We specialize in complex tree removals. Our teams use a technique called sectional dismantling, where the tree is carefully taken apart piece by piece from the top down using ropes and specialized equipment. This prevents any damage to your home, garden, or neighboring properties." },
    { question: "What happens to the wood and branches after the tree is cut down?", answer: "Our service includes a full site cleanup. We chip smaller branches on-site (which can be left as mulch if you wish) and cut the larger logs into manageable sizes. We then remove all wood and debris from your property, leaving it clean and tidy." }
];

export default function TreeFellingServicesJohannesburgPage() {
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Comprehensive Tree Felling Services Across Johannesburg</h1>
        <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <Construction /> Your One-Stop Solution for Safe Tree Removal
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions Projects offers a complete range of expert tree felling services for every suburb of Johannesburg. Our licensed and insured teams are equipped to handle any job, from removing dangerous trees on residential properties to large-scale vegetation clearing for construction sites. We are your reliable partner for professional tree care, ensuring all work is done safely, efficiently, and with a thorough cleanup.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for a Free Assessment</a></Button>
          <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
        </div>
      </section>

      <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
          <div className="md:col-span-3">
              <h2 className="text-3xl font-bold mb-6">Johannesburg's Trusted Tree Felling Contractors</h2>
              <p className="text-muted-foreground mb-4">Choosing SIMA for your tree felling needs means opting for a team that prioritizes safety, professionalism, and customer satisfaction above all else.</p>
              <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3"><Check className="text-accent" /><span>Fully licensed and insured for your complete protection.</span></li>
                  <li className="flex items-center gap-3"><Check className="text-accent" /><span>Decades of experience in safe tree removal across Johannesburg.</span></li>
                  <li className="flex items-center gap-3"><Check className="text-accent" /><span>Commitment to thorough site cleanup after every job.</span></li>
                   <li className="flex items-center gap-3"><Check className="text-accent" /><span>Free, no-obligation quotes with transparent, competitive pricing.</span></li>
              </ul>
          </div>
          <div className="md:col-span-2">
             {partnerImage && <Image src={partnerImage.imageUrl} alt="Team of tree felling contractors in Johannesburg" data-ai-hint="arborist team" width={600} height={500} className="rounded-lg shadow-lg" />}
          </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Tree Felling Services in Johannesburg</h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
            {services.map((service) => (
                <div key={service} className="flex items-center gap-3 bg-card p-4 rounded-lg">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="font-medium">{service}</span>
                </div>
            ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Areas We Serve Across Johannesburg</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
            Our teams provide fast and professional tree felling services to every suburb of Johannesburg. Click your area to learn more.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
            {suburbs.map(suburb => (
                <Button key={suburb.name} variant="outline" asChild>
                    <Link href={suburb.href}>
                       <MapPin className="mr-2" /> {suburb.name}
                    </Link>
                </Button>
            ))}
        </div>
      </section>

       <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Our Johannesburg Tree Felling Process</h2>
            <ol className="space-y-4 max-w-2xl mx-auto text-muted-foreground">
                <li className="flex gap-4"><strong className="text-accent">1. Consultation:</strong> We provide a free, on-site assessment and a detailed quote.</li>
                <li className="flex gap-4"><strong className="text-accent">2. Safety Prep:</strong> We secure the area and plan the safest method for removal.</li>
                <li className="flex gap-4"><strong className="text-accent">3. Felling:</strong> Our expert team performs a controlled, sectional takedown of the tree.</li>
                <li className="flex gap-4"><strong className="text-accent">4. Cleanup:</strong> We chip branches, cut logs, and remove all debris from the site.</li>
                <li className="flex gap-4"><strong className="text-accent">5. Stump Removal:</strong> On request, we grind the stump to below ground level.</li>
            </ol>
        </section>

        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
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
        <h2 className="text-3xl font-bold">Get a Free Tree Felling Quote Anywhere in Johannesburg</h2>
        <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
          No matter where you are in Johannesburg, we're ready to help. Contact us for a fast, competitive, and professional quote for your tree removal project.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
          <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
        </div>
      </section>
    </div>
  );
}
