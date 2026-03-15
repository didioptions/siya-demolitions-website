import { Button } from "@/components/ui/button";
import { Check, Phone, Mail, MapPin, Construction, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const suburbs = [
    { name: "Sandton", href: "/plant-hire-sandton" },
    { name: "Randburg", href: "/plant-hire-randburg" },
    { name: "Roodepoort", href: "/plant-hire-roodepoort" },
    { name: "Midrand", href: "/plant-hire-midrand" },
    { name: "Fourways", href: "/plant-hire-fourways" },
    { name: "Soweto", href: "/plant-hire-soweto" },
    { name: "Alberton", href: "/plant-hire-alberton" },
    { name: "Germiston", href: "/plant-hire-germiston" },
    { name: "Boksburg", href: "/plant-hire-boksburg" },
    { name: "Benoni", href: "/plant-hire-benoni" },
    { name: "Kempton Park", href: "/plant-hire-kempton-park" },
    { name: "Bedfordview", href: "/plant-hire-bedfordview" },
    { name: "Edenvale", href: "/plant-hire-edenvale" },
    { name: "Bryanston", href: "/plant-hire-bryanston" },
    { name: "Rosebank", href: "/plant-hire-rosebank" },
    { name: "Northcliff", href: "/plant-hire-northcliff" },
    { name: "Melville", href: "/plant-hire-melville" },
    { name: "Linden", href: "/plant-hire-linden" },
    { name: "Parkhurst", href: "/plant-hire-parkhurst" },
    { name: "Greenside", href: "/plant-hire-greenside" },
];

const services = [
    "TLB Hire with Operator",
    "Bobcat / Skid-Steer Loader Hire",
    "Excavator Hire (Various Sizes)",
    "Tipper Truck Hire (10-Cube)",
    "Bulldozer and Grader Hire",
    "Roller & Compactor Hire",
];

const faqs = [
    { question: "What types of equipment do you hire out?", answer: "We offer a comprehensive fleet including TLBs, Bobcats, excavators, tipper trucks, bulldozers, and rollers for various construction, demolition, and earthmoving tasks." },
    { question: "Do you deliver the equipment to the site?", answer: "Yes, we deliver all our hired machinery directly to your site anywhere in Johannesburg and surrounding areas, ensuring it arrives on time and ready to work." },
    { question: "Does the hire cost include an operator?", answer: "Yes, all our plant hire services include a fully certified, professional, and experienced operator to ensure the work is done safely and efficiently." },
    { question: "How long can I hire the equipment for?", answer: "We offer flexible hire periods, from single-day hires for small jobs to weekly or monthly hires for large-scale construction and development projects." },
    { question: "What areas in Johannesburg do you serve?", answer: "We serve all of Johannesburg and the greater Gauteng region, including Sandton, Randburg, Midrand, Soweto, and the East Rand. Contact us to confirm service for your specific location." }
];

export default function PlantHireServicesJohannesburgPage() {
    const partnerImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Comprehensive Plant Hire Services Across Johannesburg</h1>
        <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <Construction /> Your One-Stop Solution for Construction Machinery
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
            SIMA Demolitions Projects offers a complete range of professional plant hire services for any project, big or small, across every suburb of Johannesburg. Our fleet of well-maintained machinery, complete with certified operators, is ready to support your construction, demolition, or landscaping project. We are your reliable partner for getting the job done efficiently and safely.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <Button size="lg" asChild><a href="tel:0784292760"><Phone /> Call for Rates & Availability</a></Button>
          <Button size="lg" variant="secondary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
        </div>
      </section>

      <section className="grid md:grid-cols-5 gap-8 mb-16 items-center bg-card p-8 rounded-lg">
          <div className="md:col-span-3">
              <h2 className="text-3xl font-bold mb-6">Johannesburg's Trusted Plant Hire Team</h2>
              <p className="text-muted-foreground mb-4">Choosing SIMA for your plant hire means partnering with a team that values reliability, safety, and customer satisfaction. We are committed to providing the best equipment and service to keep your project moving.</p>
              <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3"><Check className="text-accent" /><span>**Reliable Equipment:** Our machinery is regularly serviced and maintained to prevent downtime.</span></li>
                  <li className="flex items-center gap-3"><Check className="text-accent" /><span>**Professional Operators:** All hires include a certified and experienced operator for safety and efficiency.</span></li>
                  <li className="flex items-center gap-3"><Check className="text-accent" /><span>**Competitive Pricing:** We offer transparent and affordable rates for all our equipment.</span></li>
                   <li className="flex items-center gap-3"><Check className="text-accent" /><span>**Fast Delivery:** Prompt delivery and collection service across all of Johannesburg.</span></li>
              </ul>
          </div>
          <div className="md:col-span-2">
             {partnerImage && <Image src={partnerImage.imageUrl} alt="Team of plant hire contractors in Johannesburg" data-ai-hint="construction team" width={600} height={500} className="rounded-lg shadow-lg" />}
          </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Plant Hire Fleet in Johannesburg</h2>
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
            Our teams provide fast and professional plant hire to every suburb of Johannesburg. Click on your area to learn more.
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
            <h2 className="text-3xl font-bold text-center mb-8">Our Johannesburg Plant Hire Process</h2>
            <ol className="space-y-4 max-w-2xl mx-auto text-muted-foreground">
                <li className="flex gap-4"><strong className="text-accent">1. Consultation:</strong> We help you select the right machine for your job and provide a clear quote.</li>
                <li className="flex gap-4"><strong className="text-accent">2. Scheduling:</strong> We arrange a delivery time that fits your project schedule.</li>
                <li className="flex gap-4"><strong className="text-accent">3. Delivery & Operation:</strong> Our operator arrives with the machine and performs the work safely and efficiently.</li>
                <li className="flex gap-4"><strong className="text-accent">4. Completion:</strong> We ensure the job is done to your satisfaction.</li>
                <li className="flex gap-4"><strong className="text-accent">5. Collection:</strong> We promptly collect the equipment from your site once the hire period is over.</li>
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
        <h2 className="text-3xl font-bold">Get a Free Plant Hire Quote Anywhere in Johannesburg</h2>
        <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
          No matter where your project is in Johannesburg, we're ready to supply the machinery you need. Contact us for a fast, competitive, and professional quote.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone />Call Now</a></Button>
          <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail />Request Quote Online</Link></Button>
        </div>
      </section>
    </div>
  );
}
