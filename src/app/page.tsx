import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check, Phone, MessageSquare, Wrench, Trash2, Sparkles, Axe, Building, Award, Users, MapPin, ShieldCheck } from "lucide-react";
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
      absolute: "Siya Demolitions Projects | Demolition & Construction Gauteng",
  },
  description: "Siya Demolitions Projects provides professional demolition, rubble removal, site cleaning, tree felling, and construction services across Gauteng. Call 078 429 2760.",
};

const services = [
  {
    title: "Demolition Services",
    icon: <Wrench className="w-8 h-8 text-accent" />,
    description: "Expert demolition for any project, ensuring fast approvals and safe site prep for new construction.",
    link: "/services",
    buttonText: "Explore Demolition"
  },
  {
    title: "Rubble Removal",
    icon: <Trash2 className="w-8 h-8 text-accent" />,
    description: "Quickly clear all construction debris from your site, leaving it spotless, safe, and ready for the next phase.",
    link: "/services",
    buttonText: "Clear Your Site"
  },
  {
    title: "Site Cleaning",
    icon: <Sparkles className="w-8 h-8 text-accent" />,
    description: "Complete site cleaning services to prepare your property for handover or the next stage of development.",
    link: "/services",
    buttonText: "View Cleaning Details"
  },
  {
    title: "Tree Felling",
    icon: <Axe className="w-8 h-8 text-accent" />,
    description: "Professional tree felling to safely clear land, remove hazardous trees, and protect your property.",
    link: "/services",
    buttonText: "Learn About Felling"
  },
  {
    title: "Construction",
    icon: <Building className="w-8 h-8 text-accent" />,
    description: "From foundations to structural work, we provide a reliable start for your new building project.",
    link: "/services",
    buttonText: "See Construction Info"
  }
];

const serviceAreas = [ "Johannesburg", "Pretoria", "Sandton", "Soweto", "Randburg", "Midrand" ];

const whyChooseUs = [
    {
        icon: <Award className="w-8 h-8 text-accent"/>,
        title: "20+ Years of Experience",
        description: "Serving Gauteng since 2000, we have the expertise to handle any project, big or small."
    },
    {
        icon: <Users className="w-8 h-8 text-accent"/>,
        title: "Trusted Professionals",
        description: "Our skilled team is committed to safety, reliability, and exceeding client expectations."
    },
    {
        icon: <Check className="w-8 h-8 text-accent"/>,
        title: "Customer Satisfaction",
        description: "We prioritize clear communication and hassle-free service from start to finish."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-accent"/>,
        title: "Licensed & Insured",
        description: "Work with a fully compliant and insured team for complete peace of mind. Free quotes available."
    }
];

const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Demolition Services",
    "description": "Expert residential and commercial demolition across Gauteng, handled with precision to ensure a safe and compliant site ready for development.",
    "provider": { "@type": "Organization", "name": "Siya Demolitions Projects" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" },
    "url": "https://siyademolitions.co.za/services"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Rubble Removal",
    "description": "Fast and reliable rubble removal in Gauteng. We clear all construction debris to ensure a spotless, hazard-free job site.",
    "provider": { "@type": "Organization", "name": "Siya Demolitions Projects" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" },
    "url": "https://siyademolitions.co.za/services"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Site Cleaning",
    "description": "Thorough site cleaning to prepare your Gauteng property for its next phase, ensuring you're ready for excavation or building.",
    "provider": { "@type": "Organization", "name": "Siya Demolitions Projects" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" },
    "url": "https://siyademolitions.co.za/services"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Tree Felling",
    "description": "Safe and professional tree felling in Gauteng. We efficiently remove hazardous or unwanted trees to protect your property and clear land.",
    "provider": { "@type": "Organization", "name": "Siya Demolitions Projects" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" },
    "url": "https://siyademolitions.co.za/services"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Construction",
    "description": "Foundation and structural construction services in Gauteng, providing a solid and reliable start for your new building project.",
    "provider": { "@type": "Organization", "name": "Siya Demolitions Projects" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" },
    "url": "https://siyademolitions.co.za/services"
  }
];


export default function Home() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'homeHero');

  return (
    <>
      {servicesSchema.map((schema, index) => (
        <script
          key={`service-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white">
            {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    data-ai-hint={heroImage.imageHint}
                    fill
                    className="object-cover"
                    priority
                />
            )}
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-accent font-bold tracking-widest uppercase mb-4 animate-bounce">
                      Gauteng's Premier Demolition Experts
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Professional Demolition &amp; Construction Services in Gauteng</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-200">
                      With over 20 years of experience, Siya Demolitions Projects is your trusted partner for safe, efficient, and reliable demolition and construction services across Gauteng.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <a href="tel:0784292760">
                            <Phone />
                            Speak to an Expert Now
                            </a>
                        </Button>
                        <Button size="lg" variant="secondary" asChild>
                            <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">
                            <MessageSquare />
                            WhatsApp Us
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        {/* Services Highlights Section */}
        <section id="services" className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Core Services</h2>
                    <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">Comprehensive solutions for your demolition and construction needs in Gauteng.</p>
                </div>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                    {services.map((service) => (
                        <div key={service.title} className="text-center flex flex-col items-center p-6 rounded-lg bg-background hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="bg-accent/10 p-4 rounded-full mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                <Link href={service.link} className="hover:underline focus:underline">
                                    {service.title}
                                </Link>
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 flex-grow">{service.description}</p>
                            <Button variant="outline" asChild>
                                <Link href={service.link}>{service.buttonText}</Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="about" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">Your Trusted Partner in Demolition</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            At Siya Demolitions Projects, we don't just demolish—we clear the path for safe, reliable construction success. We are your reliable partners for making any project a success.
                        </p>
                         <div className="mt-8 grid sm:grid-cols-2 gap-6">
                            {whyChooseUs.map((item) => (
                                <div key={item.title} className="flex gap-4">
                                    <div className="flex-shrink-0">{item.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-semibold">{item.title}</h3>
                                        <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button size="lg" className="mt-8" asChild>
                            <Link href="/about">More About Us</Link>
                        </Button>
                    </div>
                    <div>
                        <Image src="https://picsum.photos/seed/about/600/500" alt="Construction team meeting" data-ai-hint="team meeting" width={600} height={500} className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>

        {/* Service Areas Section */}
        <section id="areas" className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h2 className="text-3xl md:text-4xl font-bold">Proudly Serving Residential & Commercial Clients Across Gauteng</h2>
                 <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">We proudly serve residential and commercial clients across the entire Gauteng province.</p>
                 <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {serviceAreas.map(area => (
                        <div key={area} className="bg-background border rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2 hover:bg-accent/10 transition-colors">
                            <MapPin className="w-4 h-4 text-accent"/>
                            {area === 'Johannesburg' || area === 'Pretoria' ? (
                                <Link href={`/${area.toLowerCase()}`} className="hover:underline">{area}</Link>
                            ) : (
                                area
                            )}
                        </div>
                    ))}
                     <div className="bg-background border rounded-full px-4 py-2 text-sm font-medium">...and more!</div>
                 </div>
                 <Button variant="secondary" className="mt-8" asChild>
                    <Link href="/service-areas">View All Service Areas</Link>
                 </Button>
            </div>
        </section>
        
        {/* Final CTA */}
        <section id="contact" className="py-12 md:py-20 bg-primary text-primary-foreground">
             <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold">Start Your Safe & Certified Demolition Today</h2>
                <p className="mt-2 max-w-xl mx-auto text-primary-foreground/80">
                    Contact us today for a free, no-obligation quote. We’re fully licensed & insured, and ready to assist with your demolition or construction project in Gauteng.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                        <a href="tel:0784292760">
                        <Phone />
                        Call Us
                        </a>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                        <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">
                        <MessageSquare />
                        WhatsApp Us
                        </a>
                    </Button>
                </div>
                <p className="mt-6 text-sm text-primary-foreground/70">Trusted by 500+ clients across Gauteng</p>
             </div>
        </section>
    </>
  );
}
