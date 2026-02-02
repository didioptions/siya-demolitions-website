"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
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
                    <h1 className="text-4xl md:text-5xl font-bold">Contact Siya Demolitions Projects</h1>
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
                                    <MessageSquare className="h-6 w-6 text-accent" />
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
