import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

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
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Our Story</h2>
                        <p className="text-muted-foreground">
                            Founded with a commitment to safety, efficiency, and reliability, Siya Demolitions Projects has grown to become a leading name in demolition and site preparation across Gauteng. Our team is our greatest asset, bringing years of experience and a dedication to excellence on every job site.
                        </p>
                        <p className="text-muted-foreground">
                            We believe in building strong relationships with our clients by delivering on our promises. From the initial consultation to the final site cleanup, we are your partners in ensuring your project starts on solid ground.
                        </p>
                    </div>
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <span className="text-accent font-bold mt-1">✓</span>
                                    <div><span className="font-semibold text-foreground">Safety First:</span> Uncompromising commitment to the safety of our team, clients, and the public.</div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-accent font-bold mt-1">✓</span>
                                     <div><span className="font-semibold text-foreground">Efficiency:</span> Utilizing modern equipment and techniques to complete projects on time and on budget.</div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-accent font-bold mt-1">✓</span>
                                     <div><span className="font-semibold text-foreground">Integrity:</span> Operating with honesty and transparency in all our dealings.</div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-accent font-bold mt-1">✓</span>
                                     <div><span className="font-semibold text-foreground">Customer Focus:</span> We listen to your needs and deliver tailored solutions.</div>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                 <div className="mt-16 text-center">
                    <h2 className="text-2xl font-semibold">Let's Build the Future Together</h2>
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
