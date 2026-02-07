import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check, Phone, Wrench, Trash2, Sparkles, Axe, Building, Award, Users, MapPin, ShieldCheck, Quote, User, Waves, Tractor } from "lucide-react";
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: {
      absolute: "SIMA Demolitions Projects | Demolition & Construction Gauteng",
  },
  description: "SIMA Demolitions Projects provides professional demolition, rubble removal, site cleaning, tree felling, and construction services across Gauteng. Call 078 429 2760.",
};

const services = [
  {
    title: "Demolition Services",
    icon: <Wrench className="h-7 w-7 md:h-8 md:w-8 text-accent" />,
    description: "Professional demolition, rubble removal, and site preparation services in Gauteng. Trusted by commercial and residential clients across Johannesburg. Call now.",
    link: "/demolition-services",
    buttonText: "See Why Builders Trust Us"
  },
  {
    title: "Rubble Removal",
    icon: <Trash2 className="h-7 w-7 md:h-8 md:w-8 text-accent" />,
    description: "Quick and affordable rubble removal services in Johannesburg. We clear construction waste, debris, and site materials. Same-day service available. Call for a quote.",
    link: "/rubble-removal",
    buttonText: "Clear Your Site Fast with Us"
  },
  {
    title: "Site Cleaning",
    icon: <Sparkles className="h-7 w-7 md:h-8 md:w-8 text-accent" />,
    description: "Professional site cleaning services for construction and demolition projects in Johannesburg. Perfect for post-project cleanups and land preparation.",
    link: "/site-cleaning",
    buttonText: "Request Site Clearing"
  },
  {
    title: "Tree Felling",
    icon: <Axe className="h-7 w-7 md:h-8 md:w-8 text-accent" />,
    description: "Certified tree felling services in Johannesburg. Remove hazardous or unwanted trees safely with our experienced team. Residential and commercial service available.",
    link: "/tree-felling",
    buttonText: "Safely Remove Trees Today"
  },
  {
    title: "Swimming Pool Demolition",
    icon: <Waves className="h-7 w-7 md:h-8 md:w-8 text-accent" />,
    description: "Remove unwanted or damaged pools safely and efficiently. We offer partial or full swimming pool demolition in Johannesburg, including rubble removal and cleanup.",
    link: "/swimming-pool-demolition",
    buttonText: "Remove Your Pool"
  },
  {
    title: "Plant Hire",
    icon: <Tractor className="h-7 w-7 md:h-8 md:w-8 text-accent" />,
    description: "Reliable TLB and Bobcat hire with trained operators for excavation, trenching, and site preparation.",
    link: "/plant-hire",
    buttonText: "Book Your Machinery"
  }
];

const serviceAreas = [ "Johannesburg", "Pretoria", "Sandton", "Soweto", "Randburg", "Midrand" ];

const whyChooseUs = [
    {
        icon: <Award className="w-8 h-8 text-accent"/>,
        title: "20+ Years Combined Experience",
        description: "Serving Gauteng since 2000, we have the expertise to handle any project, big or small."
    },
    {
        icon: <Users className="w-8 h-8 text-accent"/>,
        title: "Trusted Professionals",
        description: "Our skilled team is committed to safety, reliability, and exceeding client expectations."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-accent"/>,
        title: "Licensed, Insured & Compliant",
        description: "Fully compliant for both residential & commercial projects, ensuring your complete peace of mind."
    },
    {
        icon: <Check className="w-8 h-8 text-accent"/>,
        title: "Customer Satisfaction",
        description: "We prioritize clear communication and hassle-free service from start to finish."
    }
];

const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Demolition Services",
    "description": "Expert residential and commercial demolition across Gauteng, handled with precision to ensure a safe and compliant site ready for development.",
    "provider": { "@type": "Organization", "name": "SIMA Demolitions Projects" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" },
    "url": "https://simademolitions.co.za/demolition-services"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Rubble Removal",
    "description": "Fast and reliable rubble removal in Gauteng. We clear all construction debris to ensure a spotless, hazard-free job site.",
    "provider": { "@type": "Organization", "name": "SIMA Demolitions Projects" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" },
    "url": "https://simademolitions.co.za/rubble-removal"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Site Cleaning",
    "description": "Thorough site cleaning to prepare your Gauteng property for its next phase, ensuring you're ready for excavation or building.",
    "provider": { "@type": "Organization", "name": "SIMA Demolitions Projects" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" },
    "url": "https://simademolitions.co.za/site-cleaning"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Tree Felling",
    "description": "Safe and professional tree felling in Gauteng. We efficiently remove hazardous or unwanted trees to protect your property and clear land.",
    "provider": { "@type": "Organization", "name": "SIMA Demolitions Projects" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" },
    "url": "https://simademolitions.co.za/tree-felling"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Swimming Pool Demolition",
    "description": "Safe and affordable swimming pool demolition in Gauteng, including rubble removal and site preparation for landscaping or new builds.",
    "provider": { "@type": "Organization", "name": "SIMA Demolitions Projects" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Gauteng" },
    "url": "https://simademolitions.co.za/swimming-pool-demolition"
  },
   {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Plant Hire",
    "description": "Affordable and reliable TLB and Bobcat hire with trained operators for excavation, trenching, and site preparation across Johannesburg.",
    "provider": { "@type": "Organization", "name": "SIMA Demolitions Projects" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Johannesburg" },
    "url": "https://simademolitions.co.za/plant-hire"
  }
];

const testimonials = [
    {
        quote: "SIMA Demolitions handled our site professionally and left it spotless. Highly recommended!",
        name: "Lindiwe M., Johannesburg",
        avatarUrl: "https://firebasestorage.googleapis.com/v0/b/siya-demolitions-projects.firebasestorage.app/o/lindiwe_cropped.jpg?alt=media&token=0cdacf1a-2277-4232-8ffb-023b86338945"
    },
    {
        quote: "Fast, reliable, and very professional. They cleared our rubble in record time. Will definitely use them again.",
        name: "John D., Pretoria",
        avatarUrl: "https://firebasestorage.googleapis.com/v0/b/siya-demolitions-projects.firebasestorage.app/o/John%20D%20Pretoria%20%20(1).jpg?alt=media&token=57eb9664-e323-465a-b761-cc4bd85027db"
    },
    {
        quote: "The team was fantastic. They took down an old structure for us safely and efficiently. Great service all around.",
        name: "Sarah P., Sandton"
    }
];


export default function Home() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'homeHero');
    const aboutImage = PlaceHolderImages.find(p => p.id === 'aboutSection');

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
                      With over 20 years of experience, SIMA Demolitions Projects is your trusted partner for safe, efficient, and reliable demolition and construction services across Gauteng.
                    </p>
                    <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <a href="tel:0784292760">
                            <Phone />
                            Speak to an Expert Now
                            </a>
                        </Button>
                        <Button size="lg" variant="secondary" asChild>
                            <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                            WhatsApp Us
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        {/* Highlights Bar */}
        <section className="py-6 bg-card border-y">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <Award className="h-10 w-10 text-accent flex-shrink-0" />
                        <div>
                            <p className="font-bold text-foreground uppercase">20+ Years Experience</p>
                            <p className="text-muted-foreground text-sm">Trusted by homeowners & contractors in Gauteng</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <ShieldCheck className="h-10 w-10 text-accent flex-shrink-0" />
                        <div>
                            <p className="font-bold text-foreground uppercase">Fully Licensed & Insured</p>
                            <p className="text-muted-foreground text-sm">Safety-compliant demolition experts</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <Users className="h-10 w-10 text-accent flex-shrink-0" />
                        <div>
                            <p className="font-bold text-foreground uppercase">500+ Projects Completed</p>
                            <p className="text-muted-foreground text-sm">Residential & Commercial Properties</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Services Highlights Section */}
        <section id="services" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Core Services</h2>
                    <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">Comprehensive solutions for your demolition and construction needs in Gauteng.</p>
                </div>
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div key={service.title} className="text-center flex flex-col items-center p-6 rounded-lg bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="bg-accent/10 p-4 rounded-full mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                <Link href={service.link} className="hover:underline focus:underline">
                                    {service.title}
                                </Link>
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 flex-grow">{service.description}</p>
                            <Button variant="outline" asChild className="w-full mt-auto">
                                <Link href={service.link}>{service.buttonText}</Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
                    <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">Real feedback from satisfied customers across Gauteng.</p>
                </div>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial: any) => (
                        <div key={testimonial.name} className="bg-background p-6 rounded-lg shadow-md flex flex-col">
                            <Quote className="w-8 h-8 text-accent mb-4" />
                            <p className="text-muted-foreground mb-4 flex-grow">"{testimonial.quote}"</p>
                            <div className="flex items-center gap-3 self-end mt-4">
                                <p className="font-semibold text-sm">{testimonial.name}</p>
                                <Avatar className="h-12 w-12">
                                    {testimonial.avatarUrl ? (
                                        <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                                    ) : (
                                        <AvatarFallback className="bg-accent/20">
                                            <User className="h-6 w-6 text-accent" />
                                        </AvatarFallback>
                                    )}
                                </Avatar>
                            </div>
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
                            At SIMA Demolitions Projects, we don't just demolish—we clear the path for safe, reliable construction success. We are your reliable partners for making any project a success.
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
                       {aboutImage && <Image src={aboutImage.imageUrl} alt={aboutImage.description} data-ai-hint={aboutImage.imageHint} width={600} height={500} className="rounded-lg shadow-lg" />}
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
                     <div className="bg-card border rounded-full px-4 py-2 text-sm font-medium">...and more!</div>
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
                    Get in touch for a free, no-obligation quote. We're fully licensed, insured, and ready to help you clear your site efficiently, safely, and professionally anywhere in Gauteng.
                </p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                        <a href="tel:0784292760">
                            <Phone />
                            Call Now
                        </a>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                        <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                            WhatsApp Us
                        </a>
                    </Button>
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="/contact">
                            <Quote />
                            Request a Free Quote
                        </Link>
                    </Button>
                </div>
             </div>
        </section>
    </>
  );
}
