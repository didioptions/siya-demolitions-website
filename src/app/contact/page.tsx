"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

// Note: This is a client component because of the form.
// No form submission logic is implemented as per the request.

export default function ContactPage() {
    const contactImage = PlaceHolderImages.find(p => p.id === 'contactPage');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would handle form submission here.
        alert("Form submitted! (This is a placeholder)");
    };

    return (
        <div>
            <section className="relative w-full h-64 md:h-80">
                {contactImage && (
                    <Image
                        src={contactImage.imageUrl}
                        alt={contactImage.description}
                        data-ai-hint={contactImage.imageHint}
                        fill
                        className="object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold">Contact SIMA Demolitions Projects</h1>
                    <p className="mt-2 text-lg text-gray-200 max-w-3xl">Need demolition, rubble removal, site cleaning, tree felling or construction services in Gauteng? Reach out today!</p>
                </div>
            </section>
            
            <section className="container mx-auto px-4 py-12 md:px-6 md:py-20">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Get a Fast Quote</h2>
                        <p className="text-muted-foreground mb-8">
                            For the quickest response, please call or WhatsApp us. We serve all of Gauteng and are ready to assist with your project needs.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-accent/10 p-3 rounded-full">
                                    <Phone className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <a href="tel:0784292760" className="text-muted-foreground hover:text-primary">078 429 2760</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-accent/10 p-3 rounded-full">
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6 text-accent"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">WhatsApp</h3>
                                    <a href="https://wa.me/2784292760" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">078 429 2760</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-accent/10 p-3 rounded-full">
                                    <MapPin className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Location</h3>
                                    <p className="text-muted-foreground">Serving all Gauteng areas</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle>Send Us a Message</CardTitle>
                            <CardDescription>
                                Alternatively, fill out the form below (optional) and we will get back to you.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" placeholder="John Doe" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" placeholder="john.doe@example.com" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="service">Service of Interest</Label>
                                    <Select>
                                        <SelectTrigger id="service">
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="residential">Residential Demolition</SelectItem>
                                            <SelectItem value="commercial">Commercial Demolition</SelectItem>
                                            <SelectItem value="industrial">Industrial Demolition</SelectItem>
                                            <SelectItem value="clearing">Site Clearing</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" placeholder="Tell us about your project..." rows={5} required />
                                </div>
                                <Button type="submit" className="w-full" size="lg">Submit Inquiry</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
