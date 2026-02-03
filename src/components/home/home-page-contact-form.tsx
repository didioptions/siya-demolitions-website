"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function HomePageContactForm() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would handle form submission here.
        alert("Form submitted! (This is a placeholder)");
    };

    return (
        <Card className="mt-12 max-w-2xl mx-auto text-left shadow-lg text-card-foreground">
            <CardHeader>
                <CardTitle className="text-card-foreground">Send Us a Message</CardTitle>
                <CardDescription>
                    Prefer to write? Fill out the form and we'll get back to you.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="home-name">Full Name</Label>
                            <Input id="home-name" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="home-email">Email Address</Label>
                            <Input id="home-email" type="email" placeholder="john.doe@example.com" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="home-message">Message</Label>
                        <Textarea id="home-message" placeholder="Tell us about your project..." rows={4} required />
                    </div>
                    <Button type="submit" className="w-full">Submit</Button>
                </form>
            </CardContent>
        </Card>
    );
}
