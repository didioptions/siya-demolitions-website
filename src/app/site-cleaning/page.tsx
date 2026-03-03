import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, ShieldCheck, Home, Building, Factory, DollarSign, MapPin, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from "react";

const faqs = [
    {
        question: "What's included in a standard construction site clean-up in Johannesburg?",
        answer: "A standard construction site clean-up service from SIMA Demolitions is a comprehensive process designed to leave your site safe, organised, and ready for the next phase. This typically includes the collection and removal of all loose construction debris, such as wood offcuts, drywall pieces, packaging materials, and scrap metal. We also handle the sweeping and clearing of dust and fine particles from surfaces. For larger projects, our service extends to the full removal of building rubble, soil, and concrete via our dedicated <a href='/rubble-removal-johannesburg' class='text-primary hover:underline'>rubble removal</a> teams. We ensure all walkways are clear, potential hazards are removed, and materials are sorted for responsible disposal, adhering strictly to Johannesburg's municipal standards."
    },
    {
        question: "How do you handle potentially hazardous materials found during a site clean?",
        answer: "Safety and compliance are our top priorities. If our team identifies materials suspected of being hazardous (e.g., asbestos sheeting, chemical containers, certain old paints), we immediately cease work in that specific area and inform the site manager. As a licensed contractor, we are trained to recognize these materials, but by law, their removal requires a specialized, certified abatement contractor. We assist our clients by recommending and helping coordinate with a certified hazardous material removal company in Johannesburg. This ensures that materials are handled, contained, and disposed of according to the strictest national safety and environmental regulations, protecting your site and your legal standing."
    },
    {
        question: "Is your site cleaning service compliant with Johannesburg's municipal codes?",
        answer: "Absolutely. Full compliance is a non-negotiable part of our service. SIMA Demolitions is a licensed and insured operator, and we adhere to all City of Johannesburg by-laws concerning waste management, transport, and disposal. Every piece of debris and rubble we remove from your site is transported to a registered, environmentally compliant landfill or recycling facility. This professional approach is crucial for our clients, as it protects them from the significant fines and legal issues associated with illegal dumping. We can provide a full paper trail, offering you complete peace of mind that your project is being managed responsibly."
    },
    {
        question: "How quickly can you start a site cleaning project in Johannesburg?",
        answer: "We pride ourselves on our rapid response times across Johannesburg. For most standard site cleaning and post-construction clean-up jobs, we can typically deploy a team within 24 to 48 hours. For urgent requests, we do our best to accommodate same-day service depending on crew availability. Our local Johannesburg-based teams are strategically positioned to provide fast and efficient service, whether your project is in <a href='/demolition-sandton' class='text-primary hover:underline'>Sandton</a>, Soweto, or the CBD. We recommend calling us directly to discuss your timeline so we can schedule your clean-up without delay and keep your project on track."
    },
    {
        question: "Do you offer ongoing site cleaning for long-term construction projects?",
        answer: "Yes, we specialize in providing ongoing, scheduled site cleaning support for contractors and developers managing long-term projects in Johannesburg. A consistently clean site is safer, more efficient, and presents a more professional image. We can arrange for daily, weekly, or bi-weekly clean-ups tailored to your project's needs. This service prevents the buildup of hazardous debris, ensures clear access for all tradespeople, and helps you maintain a productive work environment from start to finish. This continuous support is a key part of our service for commercial and residential developments."
    },
    {
        question: "How does professional site cleaning improve project safety and efficiency?",
        answer: "Professional site cleaning directly translates to a safer and more efficient construction project. A cluttered site is a major source of workplace accidents, including trips, falls, and injuries from sharp materials. By keeping walkways, access points, and work areas clear, we significantly reduce these risks. Efficiency is boosted because tradespeople can move freely and find materials easily without navigating around piles of debris. This saves time and reduces frustration. Furthermore, a clean site prevents damage to finished surfaces and allows for easier and more accurate inspections, ensuring your project runs smoothly and on schedule."
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

export default function SiteCleaningPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const constructionCleaningImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');
    const demolitionCleaningImage = PlaceHolderImages.find(p => p.id === 'siteCleaningBefore');
    const industrialCleaningImage = PlaceHolderImages.find(p => p.id === 'industrialDemolition');


  return (
    <>
     <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Site Cleaning Services in Johannesburg</h1>
        <p className="mt-4 text-lg text-accent font-semibold flex items-center justify-center gap-2">
            <Sparkles /> Professional Site Clearance for a Safer, More Productive Worksite
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
          A clean construction site is a safe and efficient one. SIMA Demolitions Projects provides expert site cleaning and post-construction cleanup services across Johannesburg. Our licensed and insured teams remove all forms of construction waste, demolition debris, and general site refuse, ensuring your project remains compliant, on schedule, and hazard-free.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
                <Link href="/contact"><Mail className="mr-2"/>Request a Free Cleaning Quote</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
                <a href="tel:0784292760">
                    <Phone className="mr-2 h-5 w-5" /> Call for an Urgent Cleanup
                </a>
            </Button>
        </div>
      </section>

      {/* Intro Section */}
       <section className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
                At SIMA Demolitions Projects, we understand that effective site management goes beyond major works like <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link> or construction. It requires diligent, professional site cleaning. A cluttered worksite in Johannesburg is not just unprofessional—it’s a direct threat to safety and project timelines. Our dedicated teams of site clean up contractors in Johannesburg provide a vital service for developers, builders, and property owners. We handle everything from post-construction cleaning to ongoing site maintenance, ensuring all debris is cleared promptly. By partnering with us, you ensure your site remains a productive, safe, and compliant environment from groundbreaking to handover.
            </p>
        </section>

        {/* Construction Site Cleaning Section */}
        <section id="construction-cleaning" className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                 <div>
                    <h2 className="text-3xl font-bold mb-4">Construction Site Cleaning Johannesburg</h2>
                    <p className="text-muted-foreground mb-4">
                        Maintaining a clean and organised construction site is essential for safety and productivity. Our construction site cleaning Johannesburg service is designed for builders and contractors who need a reliable partner to manage waste and debris throughout the building process. We prevent the accumulation of offcuts, packaging, and rubble that can create hazards and slow down work.
                    </p>
                    <p className="text-muted-foreground">
                        Our teams can be scheduled for regular clean-ups on a daily or weekly basis, ensuring walkways are always clear and work areas are free of obstruction. This ongoing support not only enhances safety but also improves the overall efficiency of your project, allowing different trades to work seamlessly. For a complete solution, our <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">Johannesburg rubble removal</Link> service can be integrated to handle heavy waste.
                    </p>
                 </div>
                 <div>
                    {constructionCleaningImage && <Image src={constructionCleaningImage.imageUrl} alt="A professional worker performing construction site cleaning in Johannesburg" data-ai-hint="worker cleaning site" width={600} height={400} className="rounded-lg shadow-lg" />}
                </div>
            </div>
        </section>

        {/* Post-Demolition Cleaning Section */}
        <section id="post-demolition-cleaning" className="mb-16 bg-card p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                    {demolitionCleaningImage && <Image src={demolitionCleaningImage.imageUrl} alt="A site being cleaned after a full demolition in Johannesburg" data-ai-hint="demolition site cleanup" width={600} height={400} className="rounded-lg shadow-lg" />}
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-4">Post-Demolition Cleaning Services</h2>
                    <p className="text-muted-foreground mb-4">
                        After a structure comes down, the real cleanup begins. Our post-demolition cleaning service is a critical step in preparing a site for new construction. Demolition creates a wide range of debris, from large chunks of concrete and brick to smaller, more hazardous materials like shattered glass and exposed rebar. Our teams are trained to handle this complex environment safely.
                    </p>
                    <p className="text-muted-foreground">
                        As leading <Link href="/demolition-johannesburg" className="text-primary hover:underline">site clean up contractors in Johannesburg</Link>, we manage the entire process, including separating materials for recycling and ensuring all waste is removed. We leave the site not just clear, but also safe and level, providing a perfect blank slate for excavation and foundation work to begin without delay.
                    </p>
                </div>
            </div>
        </section>

      {/* Project Types Section */}
      <section id="project-types" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Residential, Commercial & Industrial Site Cleaning</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Home className="h-6 w-6 text-accent" /> Residential Site Cleaning</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm">Perfect for homeowners and small builders, we clear debris from renovations, garden landscaping, and DIY projects. We leave your property spotless and safe for your family.</p>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Building className="h-6 w-6 text-accent" /> Commercial Site Cleaning</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm">We provide post-construction cleaning for commercial properties, including office parks in <Link href="/rubble-removal-sandton" className="text-primary hover:underline">Sandton</Link> and retail spaces in <Link href="/rubble-removal-randburg" className="text-primary hover:underline">Randburg</Link>, ensuring a professional handover to tenants or owners.</p>
                </CardContent>
            </Card>
            <Card className="shadow-lg lg:col-span-1 md:col-span-2">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Factory className="h-6 w-6 text-accent" /> Industrial Site Clearing</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm">Our teams are equipped for heavy-duty industrial site clearing in Johannesburg. We handle waste from factories and warehouses, adhering to strict safety and environmental protocols.</p>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* CTA Block */}
        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold">Keep Your Project Moving</h2>
            <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                Don't let site debris cause delays or accidents. Contact us for a fast, professional cleaning quote.
            </p>
            <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                    <a href="tel:0784292760"><Phone />Call for an Immediate Cleanup</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                    <Link href="/contact"><Mail />Get a Free Quote</Link>
                </Button>
            </div>
        </section>

        {/* Cost Factors Section */}
        <section id="cost-factors" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">What Affects Site Cleaning Costs in Johannesburg?</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><DollarSign className="text-accent" /> Volume and Type of Debris</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-sm text-muted-foreground">The primary cost factor is the amount and nature of the waste. Heavy, dense materials like concrete require more labour and transport capacity than light construction debris. We assess the volume in cubic meters to provide an accurate quote.</p></CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><DollarSign className="text-accent" /> Site Access and Location</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-sm text-muted-foreground">The accessibility of your Johannesburg site is key. Sites with easy truck access allow for faster, more efficient loading. Difficult access in dense areas or properties with narrow entry points may require more manual labour or specialized equipment, influencing the final cost.</p></CardContent>
                    </Card>
                </div>
                 <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><DollarSign className="text-accent" /> Project Scope and Urgency</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-sm text-muted-foreground">The scope of the project—whether it's a once-off post-construction cleanup or an ongoing maintenance contract—will affect pricing. Urgent or after-hours service requests may also incur additional charges. We provide clear, transparent pricing for all scenarios.</p></CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><DollarSign className="text-accent" /> Labour and Disposal Fees</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-sm text-muted-foreground">Our quotes are all-inclusive, covering the cost of our professional crew, transport to a licensed facility, and all municipal or private disposal fees. This ensures there are no hidden costs, giving you a clear and predictable budget for your site cleaning needs.</p></CardContent>
                    </Card>
                </div>
            </div>
        </section>

      {/* Why Choose Us & Areas Section */}
      <section className="grid md:grid-cols-5 gap-8 mb-16">
        <div className="md:col-span-3">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><ShieldCheck /> Why Choose SIMA for Site Cleaning?</h2>
            <p className="text-muted-foreground mb-6">We are more than just cleaners; we are your partners in maintaining a safe, compliant, and efficient worksite. Our professionalism and commitment to standards set us apart as the premier site clean up contractors in Johannesburg.</p>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1"/><span>**Fully Licensed & Insured:** Complete peace of mind knowing you're working with compliant professionals.</span></div>
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1"/><span>**Experienced Crews:** Our teams are trained in safety protocols and efficient cleaning techniques.</span></div>
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1"/><span>**Local Johannesburg Experts:** We understand local regulations and logistical challenges.</span></div>
                <div className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-1"/><span>**Eco-Friendly Disposal:** We prioritize recycling and use only registered disposal sites.</span></div>
            </div>
        </div>
        <div className="md:col-span-2">
            <Card className="shadow-lg h-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><MapPin/> Areas We Serve in Gauteng</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 text-muted-foreground">Our site cleaning teams operate across the entire Johannesburg region, including:</p>
                    <ul className="columns-2 space-y-2">
                        <li><Link href="/rubble-removal-sandton" className="text-sm hover:text-primary">Sandton</Link></li>
                        <li><Link href="/rubble-removal-midrand" className="text-sm hover:text-primary">Midrand</Link></li>
                        <li><Link href="/rubble-removal-randburg" className="text-sm hover:text-primary">Randburg</Link></li>
                        <li><Link href="/rubble-removal-roodepoort" className="text-sm hover:text-primary">Roodepoort</Link></li>
                        <li>Soweto</li>
                        <li>Alberton</li>
                        <li>Germiston</li>
                        <li>Johannesburg CBD</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">FAQs About Site Cleaning in Johannesburg</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final CTA Section */}
      <section className="text-center bg-card border-t border-b py-16">
        <h2 className="text-3xl font-bold">Get a Clean, Safe, and Compliant Site Today</h2>
        <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
         Contact the leading site clean up contractors in Johannesburg. Let SIMA Demolitions handle the mess, so you can focus on the build.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
                <a href="tel:0784292760"><Phone />Call for a Free Assessment</a>
            </Button>
             <Button size="lg" variant="secondary" asChild>
                <Link href="/contact"><Mail />Request a Quote Online</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
                 <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">
                    <MessageSquare/> WhatsApp for Info
                </a>
            </Button>
        </div>
      </section>
    </div>
    </>
  );
}
