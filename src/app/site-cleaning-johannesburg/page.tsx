

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Sparkles, ShieldCheck, Home, Building, Factory, Trash2, ArrowRight, Quote, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Apex Demolitions",
    "image": "https://images.unsplash.com/photo-1584460715199-eebff7891315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGVtb2xpdion20Z0aW9uJTIwYnVpbGRpbmcm25fDB8fHx8MTc3MDA2NzI2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "url": "https://apex-demolitions-website.vercel.app/site-cleaning-johannesburg",
    "telephone": "078 429 2760",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Johannesburg",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Gauteng"
    }
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Site Cleaning Service",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Apex Demolitions"
    },
    "areaServed": {
        "@type": "City",
        "name": "Johannesburg"
    },
    "description": "Professional post-construction, residential, and commercial site cleaning services in Johannesburg. We handle everything from rubble removal and dust management to final handover cleaning.",
    "url": "https://apex-demolitions-website.vercel.app/site-cleaning-johannesburg"
};

const faqs = [
    {
        question: "What is construction site cleaning?",
        answer: "Construction site cleaning, or a 'builders clean,' is a heavy-duty service performed after construction or renovation. Unlike regular cleaning, it focuses on removing construction debris, fine dust, rubble, and packaging. The goal is to transform a hazardous worksite into a safe, clean space ready for the next phase of work or for client handover. This is a job for specialists, not domestic cleaners."
    },
    {
        question: "How long does it take to clean a site in Johannesburg?",
        answer: "The timeframe varies significantly based on the project. A standard post-renovation cleanup for a residential home can often be done in a single day, and we frequently offer same-day service. However, a full builders clean for a new large-scale construction site or a post-demolition cleanup might take several days. We provide a clear, accurate timeline with every free on-site assessment."
    },
    {
        question: "Is rubble removal included in your site cleaning service?",
        answer: "Yes, absolutely. Our site cleaning service is a comprehensive, all-in-one solution that includes the removal of all associated debris and rubble. As a licensed rubble removal company, we ensure all waste is loaded, transported, and disposed of legally and responsibly. This means you do not need to hire a separate contractor for rubble removal, saving you time and coordination hassles."
    },
    {
        question: "What areas in Johannesburg do you cover for site cleaning?",
        answer: "We proudly cover all of Johannesburg and the greater Gauteng region. Our teams are strategically located to provide fast and efficient service to all major suburbs. This includes the northern suburbs like Sandton and Randburg, the rapidly developing Midrand corridor, the West Rand including Roodepoort, Johannesburg South, Soweto, and the entire East Rand industrial basin."
    },
    {
        question: "What makes your service different from a regular cleaning company?",
        answer: "We are construction and demolition industry specialists, not a domestic cleaning service. Our teams are equipped and trained to handle heavy materials, fine construction dust, and potentially hazardous debris safely and efficiently. We understand the workflow and safety requirements of a building site and provide a robust, heavy-duty service that a regular cleaning company is not equipped to handle, ensuring your site is truly ready for its next phase."
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

const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, faqSchema]
};


export default function SiteCleaningJohannesburgPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'siteCleaningAfter');
    const processImage = PlaceHolderImages.find(p => p.id === 'siteCleaningWorker');
    const whyChooseImage = PlaceHolderImages.find(p => p.id === 'aboutSection');
    const bobcatImage = PlaceHolderImages.find(p => p.id === 'plantHireBobcat');


  return (
    <div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />

        <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white">
            {heroImage && <Image src={heroImage.imageUrl} alt="Pristine construction site after professional cleaning in Johannesburg" data-ai-hint="clean construction site" fill className="object-cover" priority />}
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <p className="text-accent font-semibold uppercase tracking-widest">FAST, RELIABLE, AND AFFORDABLE</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mt-2">Site Cleaning Johannesburg</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
                        Professional builders cleans, post-construction cleaning, and final handover preparation. We leave your site spotless, safe, and ready for action. Trusted across Johannesburg.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <a href="tel:0784292760"><Phone /> Call for a Free Quote</a>
                        </Button>
                        <Button size="lg" variant="secondary" asChild>
                            <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp for a Fast Response</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                 <h2 className="text-3xl md:text-4xl font-bold">Turn Your Messy Worksite into a Clean, Safe, and Productive Space</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    After the builders, renovators, or demolition crews have left, your site is often a chaotic mix of rubble, dust, offcuts, and packaging. This isn't just an eyesore—it's a safety hazard that halts progress. Professional site cleaning is the essential final step that transforms this mess into a pristine, hazard-free environment. This isn't a job for a regular cleaning service; it's a job for construction site cleaning specialists. As Johannesburg's leading site cleaning contractors, Apex Demolitions specializes in turning your worksite from chaos to completion, ensuring it's ready for inspection, handover, or the next phase of construction.
                </p>
            </div>
        </section>

        <section className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Comprehensive Site Cleaning Services</h2>
                    <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">We offer a complete range of cleaning and clearing solutions tailored to any project in Johannesburg. No job is too big or too small.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Building className="w-8 h-8 text-primary" /> Post-Construction Cleaning</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Our core service. We perform a deep clean of new builds or renovated areas, removing all construction debris, fine dust from surfaces, floors, and windows, and any leftover materials. We make your site ready for snagging and final inspection.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Sparkles className="w-8 h-8 text-primary" /> Final Handover Cleaning</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">The meticulous final clean before you hand over the keys. We ensure every surface is polished, floors are shining, and the property is presented in immaculate, move-in ready condition for your client.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Home className="w-8 h-8 text-primary" /> Residential Site Cleaning</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Perfect for homeowners after a renovation, extension, or garden project. We remove all building debris, clear away garden refuse, and ensure your home is spotless and ready to be enjoyed.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Trash2 className="w-8 h-8 text-primary" /> Rubble & Debris Removal</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Our service includes full <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link>. We load and legally dispose of all concrete, bricks, soil, wood, and mixed waste, so you don't need a separate contractor.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Factory className="w-8 h-8 text-primary" /> Commercial & Industrial Cleaning</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">From retail strip-outs to warehouse clear-outs in Johannesburg's industrial hubs. We handle heavy debris, commercial waste, and large-scale cleanups with minimal disruption to your operations.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><ShieldCheck className="w-8 h-8 text-primary" /> Site Safety Preparation</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Beyond cleaning, we prepare your site by removing hazards, clearing access ways, and ensuring it meets safety standards for the next phase of work or for public access.</p></CardContent></Card>
                </div>
                 <div className="text-center mt-12">
                    <Button size="lg" asChild><Link href="/contact">Get a Tailored Cleaning Plan <ArrowRight className="ml-2" /></Link></Button>
                </div>
            </div>
        </section>

        <section id="equipment-capability" className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                {bobcatImage && <div className="aspect-video relative"><Image src={bobcatImage.imageUrl} alt="Bobcat machine clearing heavy debris for site cleaning" data-ai-hint="bobcat clearing" fill className="rounded-lg object-cover shadow-lg" /></div>}
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Equipment & Site Clearance Capability</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  We are fully equipped to handle both small and large-scale site cleaning projects. Depending on the size and complexity of the job, we use the appropriate machinery to ensure efficient and fast results. This capability distinguishes us from standard cleaning companies and allows us to provide a true end-to-end site clearance solution.
                </p>
                <div className="mt-6">
                  <h3 className="font-semibold text-lg mb-3">Our equipment includes:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>**Bobcats:** For loading rubble and debris in tight or residential spaces.</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>**TLB Machines:** For larger site clearance jobs requiring bulk earthmoving and loading.</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>**Tipper Trucks:** For the efficient removal of bulk waste from any site.</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-card">
             <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Simple 4-Step Site Cleaning Process</h2>
                    <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">We make professional site cleaning straightforward, transparent, and efficient from start to finish.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Card><CardHeader><CardTitle>1. Site Assessment & Quote</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We visit your Johannesburg site to assess the scope of work and provide a detailed, fixed-price quote with no hidden costs.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>2. Planning & Scheduling</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We create a strategic cleaning plan and schedule the work at a time that suits your project timeline, ensuring minimal disruption.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>3. Cleaning & Clearing</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Our professional team arrives on time to sort, clear, and clean the entire site, removing all specified debris and waste.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>4. Final Disposal & Inspection</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">We transport all waste for legal, eco-friendly disposal and conduct a final walkthrough with you to ensure you are 100% satisfied.</p></CardContent></Card>
                </div>
            </div>
        </section>

        <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        {whyChooseImage && <Image src={whyChooseImage.imageUrl} alt="Apex Demolitions team planning a site cleaning project" data-ai-hint="construction team planning" width={600} height={500} className="rounded-lg shadow-lg" />}
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Apex Demolitions for Site Cleaning?</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            We are more than just cleaners; we are your partners in project success. We deliver a fast, safe, and professional service that Johannesburg's top builders and homeowners trust.
                        </p>
                         <div className="mt-8 grid gap-6">
                             <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">True One-Stop Solution</h3><p className="text-muted-foreground mt-1 text-sm">As experts in <Link href="/demolition-johannesburg" className="text-primary hover:underline">demolition</Link> and <Link href="/rubble-removal-johannesburg" className="text-primary hover:underline">rubble removal</Link>, we provide a seamless, integrated service from start to finish. No need to manage multiple contractors.</p></div></div>
                             <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">Fast & Reliable Turnaround</h3><p className="text-muted-foreground mt-1 text-sm">We understand that time is money. Our teams are punctual and efficient, with <Link href="/same-day-rubble-removal-johannesburg" className="text-primary hover:underline">same-day service available</Link> in many Johannesburg areas to keep your project moving without delays.</p></div></div>
                            <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">Experienced & Professional Crew</h3><p className="text-muted-foreground mt-1 text-sm">Our uniformed teams are trained, insured, and dedicated to delivering a high-quality service with a professional attitude. We respect your property and get the job done right the first time.</p></div></div>
                             <div className="flex gap-4 items-start"><Check className="w-8 h-8 text-primary mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold">Safe & Compliant Waste Disposal</h3><p className="text-muted-foreground mt-1 text-sm">We are a licensed waste carrier, ensuring all rubble and debris is disposed of legally and responsibly at registered facilities. This protects you from fines and is better for the environment.</p></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="safety-compliance" className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Safety & Compliance: Our Commitment</h2>
                    <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">
                        We don't just clean; we ensure your site is safe and fully compliant with all regulations.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-4">
                        <ShieldCheck className="text-accent h-8 w-8 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-xl">On-Site Safety Standards</h3>
                            <p className="text-muted-foreground">All site cleaning and clearance work is carried out in line with the highest safety standards. We ensure that all debris, dust, and construction waste is removed safely, reducing slip-and-trip hazards and preparing the property for safe occupation by your family or the next team of contractors.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Trash2 className="text-accent h-8 w-8 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-xl">Responsible Waste Disposal</h3>
                            <p className="text-muted-foreground">Our team follows proper handling procedures for all construction materials. As licensed waste carriers, we guarantee that all rubble and waste is transported to approved, registered facilities for responsible disposal, protecting you from fines and ensuring environmental compliance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="recent-projects" className="py-12 md:py-20 bg-background rounded-lg mb-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Site Cleaning Projects in Johannesburg</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader><CardTitle>Sandton (Construction Cleanup)</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm">Performed a final, meticulous builders clean on a new luxury home in a secure Sandton estate before handover. **Result:** An immaculate, handover-ready property that met the developer's high standards and delighted the new owners.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Midrand (Development Site)</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm">Provided ongoing weekly site cleaning and rubble removal for a large housing development. **Result:** Kept the site safe, productive, and accessible for all trades, preventing costly delays caused by waste buildup over a 12-month period.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Randburg (Renovation Cleanup)</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm">Conducted a deep clean after a major home renovation in Randburg. **Result:** All construction dust and debris were removed within a single day, allowing the family to move back into their spotless new space immediately.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section id="areas-we-serve" className="py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Comprehensive Site Cleaning Across Greater Johannesburg</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                        Our strategically located teams ensure a fast, reliable, and professional response, no matter where your project is. Our site clearance Johannesburg service is unparalleled, from the luxury estates of Sandton to the industrial hubs of the East Rand.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold text-xl mb-2"><Link href="/site-cleaning-sandton" className="hover:text-primary">Sandton</Link></h3>
                        <p className="text-muted-foreground text-sm">We provide elite post-construction cleaning for luxury homes and commercial properties, specializing in the high standards and strict rules of secure estates.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2"><Link href="/site-cleaning-randburg" className="hover:text-primary">Randburg</Link></h3>
                        <p className="text-muted-foreground text-sm">Our teams are experts at handling post-renovation cleanups for the area's many residential projects, managing everything from rubble to fine dust.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2"><Link href="/site-cleaning-midrand" className="hover:text-primary">Midrand</Link></h3>
                        <p className="text-muted-foreground text-sm">We offer scalable, ongoing site cleaning services for Midrand's large new housing and commercial developments, keeping major projects on schedule.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2"><Link href="/site-cleaning-roodepoort" className="hover:text-primary">Roodepoort</Link></h3>
                        <p className="text-muted-foreground text-sm">We are equipped to handle site cleaning on the West Rand's varied terrain, providing a reliable service for both residential and commercial clients.</p>
                    </div>
                </div>
                 <div className="text-center mt-12">
                    <Button asChild><Link href="/site-cleaning-services-johannesburg">Explore All Our Service Areas <ArrowRight className="ml-2" /></Link></Button>
                </div>
            </div>
        </section>

        <section id="faq" className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                      <p className="text-muted-foreground mt-2">{faq.answer}</p>
                    </div>
                  ))}
                </div>
            </div>
        </section>
        
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
             <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Ready for a Spotless, Safe, and Productive Site?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">
                    Don't let post-construction mess delay your project. Contact Apex Demolitions for a fast, free, no-obligation quote on professional site cleaning anywhere in Johannesburg. Our teams are on standby for same-day service in many areas!
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                        <a href="tel:0784292760"><Phone /> Call for a Quote for Site Cleaning</a>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                         <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp for Fast Site Cleaning</a>
                    </Button>
                </div>
             </div>
        </section>
    </div>
  );
}

