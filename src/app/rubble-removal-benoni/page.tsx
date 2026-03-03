import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, Trash2, ShieldCheck, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqs = [
    {
        question: "Do you offer same-day rubble removal in Benoni?",
        answer: "Yes, we strive to offer same-day or next-day service for rubble removal in Benoni, depending on our schedule and the size of your job. We understand the importance of keeping your project moving, so our local teams are positioned to provide rapid response across the East Rand. Whether you're in Rynfield or Farrarmere, we recommend calling us as early as possible to book the fastest possible collection for your construction debris or garden refuse."
    },
    {
        question: "What kind of waste can you clear from a property in Benoni?",
        answer: "Our Benoni rubble removal teams can handle a wide variety of non-hazardous waste. This includes standard construction rubble like bricks, concrete, and tiles, as well as mixed waste from demolitions, excess soil from excavations, and garden refuse from site clearing. We are equipped for both residential cleanups and large-scale commercial waste management. We ensure all materials are handled safely and disposed of in compliance with local Ekurhuleni regulations."
    },
    {
        question: "Is it necessary to use a licensed company for rubble removal in Benoni?",
        answer: "Absolutely. Using a licensed waste carrier like SIMA Demolitions is essential for any project in Benoni. It ensures that your rubble is disposed of legally at registered facilities, protecting you from potential fines associated with illegal dumping. Our compliance with all City of Ekurhuleni by-laws provides you with complete peace of mind, knowing your project is being managed responsibly and professionally from start to finish. We provide documentation upon request."
    }
];

export default function RubbleRemovalBenoniPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rubbleRemoval');
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal in Benoni, Johannesburg</h1>
            <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
                <ShieldCheck /> Fast, Licensed & Insured Site Clearing
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="/contact"><Quote className="mr-2"/>Request a Free Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for Quick Clearance</a>
                </Button>
            </div>
             {heroImage && <div className="mt-8 max-w-4xl mx-auto"><Image src={heroImage.imageUrl} alt="Rubble removal and site clearing in Benoni, Johannesburg" data-ai-hint="rubble removal benoni" width={1200} height={600} className="rounded-lg shadow-lg" /></div>}
        </section>

        <section className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
                Keep your Benoni construction or renovation project on track with professional rubble removal services from SIMA Demolitions Projects. We provide fast, reliable, and licensed site clearing for residential and commercial properties throughout Benoni. From garden refuse in Rynfield to construction debris in the CBD, our local teams ensure your site is left clean, safe, and ready for work. We are committed to full compliance with all City of Ekurhuleni waste regulations, offering you a hassle-free solution to debris management.
            </p>
        </section>

        <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Rubble Removal Services in Benoni</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    {servicesImage && <div className="aspect-video relative"><Image src={servicesImage.imageUrl} alt="Clearing a construction site in Benoni" data-ai-hint="site clearing benoni" fill className="rounded-lg object-cover" /></div>}
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4">Total Debris Management for Benoni</h3>
                    <p className="text-muted-foreground mb-4">We offer a complete range of services to keep your Benoni site clear and compliant.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Construction Debris Removal:** We efficiently clear bricks, concrete, wood, and other materials from building sites across Benoni.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Residential Cleanups:** Ideal for post-renovation or garden service cleanups in suburbs like Farrarmere and Lakefield.</span></li>
                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>**Developer & Contractor Services:** Ongoing, scheduled rubble removal to keep large development projects in Benoni moving forward.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose SIMA in Benoni?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div><h4 className="font-semibold text-lg">Local Benoni Experts</h4><p className="text-muted-foreground mt-2 text-sm">Our teams know Benoni's suburbs, ensuring prompt arrivals and efficient service every time.</p></div>
                <div><h4 className="font-semibold text-lg">Fully Compliant</h4><p className="text-muted-foreground mt-2 text-sm">We are licensed and adhere to all Ekurhuleni waste disposal regulations, protecting you from liability.</p></div>
                <div><h4 className="font-semibold text-lg">Affordable Quotes</h4><p className="text-muted-foreground mt-2 text-sm">We provide competitive, transparent pricing for all rubble removal jobs in Benoni, big or small.</p></div>
                <div><h4 className="font-semibold text-lg">Reliable & Professional</h4><p className="text-muted-foreground mt-2 text-sm">Count on our experienced, uniformed crews to get the job done right, leaving your site spotless.</p></div>
            </div>
        </section>
        
        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Benoni Rubble Removal FAQs</h2>
            <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </section>

        <section className="mb-16 text-center">
            <h2 className="text-2xl font-semibold">Proudly Serving the East Rand</h2>
            <p className="mt-2 text-muted-foreground">Our rubble removal network covers the entire East Rand. Explore our services in nearby hubs.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><Link href="/rubble-removal-johannesburg">Rubble Removal Johannesburg</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-boksburg">Boksburg Rubble Removal</Link></Button>
                <Button variant="outline" asChild><Link href="/rubble-removal-kempton-park">Kempton Park Services</Link></Button>
                <Button variant="outline" asChild><Link href="/demolition-johannesburg">Demolition Services</Link></Button>
            </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Cleared construction site in Benoni" data-ai-hint="clean site benoni" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Benoni Site Cleared Today</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                    Contact SIMA for a professional, no-obligation quote on rubble removal in Benoni. Let's get your site clean and ready for work.
                </p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><Link href="/contact"><Quote className="mr-2" /> Get Your Free Quote</Link></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Pickup</a></Button>
                </div>
            </div>
        </section>
      </div>
    </>
  );
}
