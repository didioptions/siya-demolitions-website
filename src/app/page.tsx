import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
      absolute: "Siya Demolitions Projects | Demolition & Construction Gauteng",
  },
  description: "Siya Demolitions Projects provides professional demolition, rubble removal, site cleaning, tree felling and construction services across Gauteng. Call 078 429 2760.",
};

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12 md:px-6 md:py-20 text-center flex flex-col items-center justify-center flex-grow">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Professional Demolition &amp; Construction Services in Gauteng</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Welcome to Siya Demolitions Projects. We offer demolition, rubble removal, 
          site cleaning, tree felling, and construction services throughout Gauteng.
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
    </main>
  );
}
