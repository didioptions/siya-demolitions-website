import Image from "next/image";
import { GalleryImages } from "@/lib/placeholder-images";
import { ImageIcon } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Our Work</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          A collection of our completed demolition, site clearing, and construction projects across Gauteng.
        </p>
      </div>

      <div>
        {GalleryImages && GalleryImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GalleryImages.map((image) => (
              <div key={image.id} className="aspect-square relative overflow-hidden rounded-lg shadow-md group">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        ) : (
            <div className="text-center py-16 border-2 border-dashed rounded-lg">
              <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">The Gallery is Empty</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ask me to add images to the gallery by editing the project files.
              </p>
            </div>
        )}
      </div>
    </div>
  );
}
