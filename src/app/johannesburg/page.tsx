import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demolition Services in Johannesburg",
  description: "Specialized demolition services for residential and commercial projects across Johannesburg, Sandton, Randburg, and more.",
};

const joburgServices = [
  "High-Rise Building Demolition",
  "Shopping Centre & Retail Strip-outs",
  "Residential Home Demolition",
  "Office Park Deconstruction",
  "Warehouse & Factory Dismantling",
  "Emergency Demolition Services",
];

export default function JohannesburgPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Demolition Services in Johannesburg</h1>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">
          Siya Demolitions is a premier provider of safe and efficient demolition services for the bustling metropolis of Johannesburg and its surrounding suburbs like Sandton, Randburg, and Soweto.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Expertise in the Jo'burg Area</h2>
          <p className="text-muted-foreground mb-6">
            We understand the unique challenges of working in a dense urban environment. Our team is equipped to handle complex logistics, strict regulations, and diverse project requirements specific to Johannesburg.
          </p>
          <div className="space-y-4">
            {joburgServices.map((service) => (
              <div key={service} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Get a Quote for Your Johannesburg Project</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Whether it's a small residential job or a large-scale commercial project, our team is ready to help. Contact us for a detailed, site-specific quotation.
            </p>
            <Button asChild className="w-full" size="lg">
              <Link href="/contact">Request Your Free Quote</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
