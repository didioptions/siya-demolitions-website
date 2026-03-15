import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, MapPin, Quote, Tractor } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

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
    { question: "What types of equipment do you offer for plant hire in Johannesburg?", answer: "We offer a range of heavy machinery including TLBs, Bobcats, excavators, tipper trucks, and bulldozers suitable for various construction and demolition projects." },
    { question: "Does your plant hire include a certified operator?", answer: "Yes, all our plant hire services in Johannesburg include a fully certified and experienced operator to ensure safe and efficient work on your site." },
    { question: "Can I hire equipment for just one day?", answer: "Absolutely. We offer flexible hire periods, from a single day for small residential jobs to long-term hire for large construction projects." },
    { question: "How do you determine the cost of plant hire?", answer: "Pricing is based on the type of machine, the duration of the hire, and the location of the site. We provide clear, all-inclusive daily or long-term rates." },
    { question: "How quickly can you deliver machinery to a site in Johannesburg?", answer: "We pride ourselves on prompt service. We can often deliver equipment to sites across Johannesburg within 24-48 hours of confirming a booking." }
];

export default function PlantHireJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'plantHireTlb');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Plant Hire Services in Johannesburg</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                Get the right machinery for your project with professional plant hire in Johannesburg from SIMA Demolitions Projects. We provide reliable, well-maintained equipment with certified operators for construction, demolition, and earthmoving projects of all sizes.
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

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Plant Hire Fleet</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Bobcat for hire in Johannesburg" data-ai-hint="bobcat hire" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Tractor className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Excavators & TLBs:** For trenching, foundation digging, and earthmoving.</span></li>
                        <li className="flex items-start gap-3"><Tractor className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Bobcats / Compact Loaders:** Ideal for tight-access sites, levelling, and debris loading.</span></li>
                        <li className="flex items-start gap-3"><Tractor className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Tipper Trucks:** For efficient rubble and material transport.</span></li>
                        <li className="flex items-start gap-3"><Tractor className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Bulldozers & Graders:** For large-scale land clearing and site levelling.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose SIMA for Plant Hire in Johannesburg?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Operator Included</h3><p className="text-sm text-muted-foreground">All hires come with a certified, experienced operator for safety and efficiency.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Well-Maintained Fleet</h3><p className="text-sm text-muted-foreground">Our machinery is regularly serviced to prevent costly downtime on your site.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Flexible Hire Periods</h3><p className="text-sm text-muted-foreground">We offer daily, weekly, and long-term hire to suit your project's needs.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Competitive Rates</h3><p className="text-sm text-muted-foreground">Our pricing is transparent and affordable for all types of projects.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Full Insurance</h3><p className="text-sm text-muted-foreground">Our plant hire is fully insured for your complete peace of mind.</p></div></div>
                <div className="flex items-start gap-4"><Check className="text-accent h-6 w-6 mt-1"/><div><h3 className="font-semibold">Johannesburg-Wide Service</h3><p className="text-sm text-muted-foreground">We deliver and operate machinery across all Johannesburg suburbs.</p></div></div>
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
            Contact SIMA Demolitions for a reliable and affordable plant hire solution anywhere in Johannesburg.
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
  );
}
