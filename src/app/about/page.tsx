import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
    const aboutImage = PlaceHolderImages.find(p => p.id === 'constructionServices');

    return (
        <div>
            <section className="relative w-full h-64 md:h-80">
                {aboutImage && (
                    <Image
                        src={aboutImage.imageUrl}
                        alt="Team working on a construction site"
                        data-ai-hint="team construction"
                        fill
                        className="object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold">About Siya Demolitions Projects</h1>
                    <p className="mt-2 text-lg text-gray-200 max-w-3xl">Your Trusted Partner in Demolition and Construction</p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-12 md:px-6 md:py-20">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h2 className="text-3xl font-bold text-center">Our Commitment to Excellence</h2>
                    <p className="text-muted-foreground text-lg">
                       Siya Demolitions Projects has been serving Gauteng since 2000. Our experienced team provides reliable demolition, rubble removal, site cleaning, tree felling, and construction services for residential, commercial, and industrial clients.
                    </p>
                    <p className="text-muted-foreground text-lg">
                       We prioritize safety, efficiency, and customer satisfaction on every project. With the right equipment and skilled professionals, we complete projects on time while maintaining clean and secure sites.
                    </p>
                    <p className="text-muted-foreground text-lg">
                        Our goal is to make demolition and construction projects hassle-free for our clients. Contact us today to learn how we can help with your next project.
                    </p>
                </div>
                 <div className="mt-16 text-center">
                    <h2 className="text-2xl font-semibold">Let's Get Started</h2>
                    <p className="mt-2 text-muted-foreground">
                        Contact us to discuss how we can help with your next project.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                        <a href="tel:0784292760">
                            <Phone />
                            Call Now
                        </a>
                        </Button>
                        <Button size="lg" variant="secondary" asChild>
                        <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">
                            <MessageSquare />
                            WhatsApp Now
                        </a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
