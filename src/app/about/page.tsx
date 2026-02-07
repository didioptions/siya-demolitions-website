import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
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
                    <h1 className="text-4xl md:text-5xl font-bold">About SIMA Demolitions Projects</h1>
                    <p className="mt-2 text-lg text-gray-200 max-w-3xl">Your Trusted Partner in Demolition and Construction</p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-12 md:px-6 md:py-20">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h2 className="text-3xl font-bold text-center">Our Commitment to Excellence</h2>
                    <p className="text-muted-foreground text-lg">
                       SIMA Demolitions Projects has been serving Gauteng since 2000. Our experienced team provides reliable demolition, rubble removal, site cleaning, tree felling, and construction services for residential, commercial, and industrial clients.
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
                    <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                        <a href="tel:0784292760">
                            <Phone />
                            Call Now
                        </a>
                        </Button>
                        <Button size="lg" variant="secondary" asChild>
                        <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                            WhatsApp Now
                        </a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
