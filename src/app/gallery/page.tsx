import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Our Work</h1>
      <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
        Our gallery is currently being updated. Please check back soon to see photos of our professional demolition, site clearing, and rubble removal projects from across Johannesburg and Gauteng.
      </p>
      <div className="mt-8">
        <Button asChild>
          <Link href="/contact">
            Request a Quote
          </Link>
        </Button>
      </div>
    </div>
  );
}
