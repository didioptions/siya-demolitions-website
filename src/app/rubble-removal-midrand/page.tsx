
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Quote, Star, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
    {
        question: "How do you handle rubble removal in Midrand's secure estates like Waterfall?",
        answer: "We specialize in working within Midrand's premier secure estates. Our service is defined by professionalism and strict adherence to all Homeowners' Association (HOA) rules. We coordinate directly with estate management to ensure full compliance on work hours, noise levels, and vehicle access. Our teams use protective measures for paving and landscaping and operate with the discretion required in high-value communities, making us the go-to choice for rubble removal in Waterfall, Kyalami, and Carlswald."
    },
    {
        question: "Do you offer ongoing rubble removal for large development projects in Midrand?",
        answer: "Yes, we are a key partner for developers and contractors across Midrand's booming construction landscape. We provide reliable, scheduled rubble removal services to keep large-scale residential and commercial development sites clean, safe, and productive. Our scalable service, which includes builders rubble removal, ensures that waste is managed efficiently throughout your project timeline, preventing costly delays and safety hazards on your site."
    },
    {
        question: "How quickly can you clear a site in a suburb like Halfway House or Noordwyk?",
        answer: "We pride ourselves on providing a rapid-response rubble removal Johannesburg service. For most standard residential or commercial jobs in Midrand suburbs like Halfway House or Noordwyk, we can typically offer same-day rubble removal, subject to our schedule. We understand that debris can stall a project, which is why we prioritize urgent requests. For the fastest service, please call us directly or send a photo of the debris via WhatsApp for a quick estimate and scheduling."
    },
    {
        question: "Is your company licensed and insured for commercial waste removal in Midrand?",
        answer: "Absolutely. Apex Demolitions is a fully licensed waste carrier, compliant with all City of Johannesburg by-laws for commercial and construction waste management. Our operations are covered by comprehensive public liability insurance, which is crucial for giving you complete peace of mind when we work on your property. This legal compliance protects your business from any liability associated with illegal dumping and guarantees a professional service."
    }
];

export default function RubbleRemovalMidrandPage() {
    const servicesImage = PlaceHolderImages.find(p => p.id === 'siteCleaning');
    const clearedSiteImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rubble Removal Services Midrand</h1>
            <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
                In the fast-growing hub of Midrand, efficient and professional site management is key. We provide expert rubble removal services tailored for Midrand's unique mix of secure lifestyle estates, commercial developments, and residential properties. For urgent cleanups, ask about our same-day service.
            </p>
             <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="tel:0784292760"><Phone className="mr-2"/>Call for a Same-Day Quote</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                     <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare className="mr-2"/> WhatsApp for a Fast Quote</a>
                </Button>
            </div>
        </section>

        <section id="why-choose-us" className="mb-16 bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us for Rubble Removal in Midrand?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Estate Specialists</h3><p className="text-sm text-muted-foreground">Unmatched experience in complying with the high standards of Midrand's secure estates like Waterfall and Kyalami.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Developer's Partner</h3><p className="text-sm text-muted-foreground">We provide reliable, scalable services to keep large construction and development projects on schedule.</p></div></div>
                <div className="flex items-start gap-4"><Star className="text-accent h-6 w-6 mt-1 flex-shrink-0"/><div><h3 className="font-semibold">Fully Licensed & Insured</h3><p className="text-sm text-muted-foreground">Our comprehensive insurance and legal compliance provide complete peace of mind.</p></div></div>
            </div>
        </section>

         <section id="midrand-challenges" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Rubble Removal Challenges in Midrand Properties</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                Clearing waste in Midrand requires a contractor who understands the local environment. We specialize in navigating these specific challenges for a seamless service.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <Card>
                    <CardHeader><CardTitle>Secure Estate Regulations</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Midrand is home to many of Gauteng's premier lifestyle estates (like Waterfall and Kyalami). We are experts at working within strict HOA rules for access, noise, and site cleanliness, ensuring a disruption-free process for you and your neighbours.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>New Development Coordination</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">With constant new construction, our teams are skilled at coordinating with builders and developers. We can provide scheduled builders rubble removal for large sites, keeping your project timeline on track.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Mixed Waste Types</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">From soil and concrete after a <Link href="/swimming-pool-demolition-johannesburg" className="text-primary hover:underline">pool demolition</Link> to garden refuse from large stands in Blue Hills, we have the right equipment and disposal methods for every type of waste.</p></CardContent>
                </Card>
            </div>
        </section>

        <section id="recent-projects" className="py-12 md:py-20 bg-card rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Rubble Removal Jobs in Midrand</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader><CardTitle>Developer Site Clearing</CardTitle><p className="text-sm text-muted-foreground">Near Waterfall City</p></CardHeader>
                        <CardContent>
                            <p className="text-sm">Provided ongoing, scheduled removal of builders rubble for a large residential development. Our reliable daily service ensured the site remained safe and accessible for all trades, preventing costly delays over a 6-month project period.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Estate Renovation Cleanup</CardTitle><p className="text-sm text-muted-foreground">Carlswald Estate</p></CardHeader>
                        <CardContent>
                            <p className="text-sm">A homeowner required urgent removal of renovation debris from a high-end kitchen and bathroom remodel. Our team responded the same day, carefully clearing all tiles, concrete, and packaging while protecting the property's driveway and garden.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Garden & Soil Removal</CardTitle><p className="text-sm text-muted-foreground">Kyalami AH</p></CardHeader>
                        <CardContent>
                            <p className="text-sm">Cleared multiple truckloads of excess soil, rock, and vegetation from a large plot in Kyalami Agricultural Holdings after a major landscaping and earthworks project. Our team left the property clean and ready for the next phase.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section id="pricing" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Rubble Removal Prices in Midrand</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                    We offer transparent pricing for rubble removal in Midrand. The cost depends on the volume, material type, and site access, especially within secure estates.
                </p>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <Card><CardHeader><CardTitle>Small Load (1 Ton)</CardTitle><p className="text-muted-foreground text-sm">e.g., Garden refuse after a weekend cleanup.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R600</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Medium Load (4-Ton Truck)</CardTitle><p className="text-muted-foreground text-sm">e.g., Debris from a standard room renovation.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R1,300</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Large Load (10-Cube Tipper)</CardTitle><p className="text-muted-foreground text-sm">e.g., Builders rubble from a construction site.</p></CardHeader><CardContent><p className="text-3xl font-bold">from R2,400</p></CardContent></Card>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-8">*Disclaimer: Prices are a guideline. For a precise, fixed-price quote, we provide a free on-site assessment.</p>
            </div>
        </section>

        <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Areas We Cover in and Around Midrand</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">Our service covers all of Midrand's residential and commercial hubs. As the top rubble removal contractors in Midrand, our local teams have deep experience working in **Halfway House**, **Noordwyk**, and the many secure lifestyle estates in **Carlswald**, **Kyalami**, and **Blue Hills**. Whether you're a developer on a large site or a homeowner doing a renovation, we provide a fast, reliable service across the entire area, including all surrounding suburbs between <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">Johannesburg</Link> and Pretoria.</p>
        </section>

        <section id="faq" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">FAQ About Rubble Removal in Midrand</h2>
            <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="font-semibold text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </section>

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden">
            {clearedSiteImage && <Image src={clearedSiteImage.imageUrl} alt="Pristine site after rubble removal in Midrand" data-ai-hint="clean site midrand" fill className="object-cover opacity-20" />}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Get Your Midrand Site Cleared Today</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Contact Apex Demolitions for a professional quote on rubble removal for your Midrand estate, development, or commercial property. We also serve <Link href="/rubble-removal-sandton" className="text-primary-foreground underline hover:text-secondary">Sandton</Link> and <Link href="/rubble-removal-randburg" className="text-primary-foreground underline hover:text-secondary">Randburg</Link>.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild><a href="tel:0784292760"><Phone className="mr-2" /> Call for an Urgent Pickup</a></Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link href="/contact"><Mail className="mr-2" /> Get Your Free Quote</Link></Button>
                </div>
            </div>
        </section>
        <div className="mt-12 text-center">
            <Link href="/rubble-removal-johannesburg" className="text-sm text-muted-foreground hover:text-primary">Back to Rubble Removal Johannesburg</Link> | <Link href="/rubble-removal-services-johannesburg" className="text-sm text-muted-foreground hover:text-primary">All Johannesburg Services</Link>
        </div>
    </div>
  );
}
