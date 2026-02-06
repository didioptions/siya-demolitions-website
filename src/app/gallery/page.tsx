"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { useStorage, useAuth, useUser } from "@/firebase";
import { signInAnonymously } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL, listAll } from "firebase/storage";
import Image from "next/image";
import { Upload, ImageIcon } from "lucide-react";

export default function GalleryPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const storage = useStorage();
  const auth = useAuth();
  const { user, isUserLoading } = useUser();

  useEffect(() => {
    if (!isUserLoading && !user && auth) {
      signInAnonymously(auth).catch((err) => {
        console.error("Anonymous sign-in failed:", err);
        setError(`Authentication failed: ${err.message}`);
      });
    }
  }, [user, isUserLoading, auth]);

  // Fetch images from Firebase Storage
  useEffect(() => {
    const fetchImages = async () => {
      if (!storage) return;
      setIsLoading(true);
      const imagesRef = ref(storage, "gallery");
      try {
        const res = await listAll(imagesRef);
        const urls = await Promise.all(
          res.items.map((itemRef) => getDownloadURL(itemRef))
        );
        setImageUrls(urls.reverse()); // Show newest images first
        setError(null);
      } catch (err: any) {
        console.error("Error fetching images:", err);
        setError(`Could not load images: ${err.message}. Please try again later.`);
      } finally {
        setIsLoading(false);
      }
    };

    if (storage) {
      fetchImages();
    }
  }, [storage]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleUpload = () => {
    if (!file || !storage || !user) {
      setError("Please select a file and ensure you are authenticated.");
      return;
    }

    // Sanitize the file name to remove special characters that can cause issues.
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '_');
    const storageRef = ref(storage, `gallery/${Date.now()}-${sanitizedFileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error("Upload error:", error);
        // Provide a more detailed error message to help diagnose CORS or other issues.
        let errorMessage = `Upload failed: ${error.message}.`;
        if (error.code === 'storage/unknown') {
            errorMessage += ' This can be caused by a CORS configuration issue on your storage bucket. Please ensure your bucket is configured to accept requests from this domain.';
        }
        setError(errorMessage);
        setUploadProgress(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrls((prevUrls) => [downloadURL, ...prevUrls]);
          setError(null);
        });
        setFile(null);
        setUploadProgress(null);
      }
    );
  };

  const isUploadDisabled = !file || uploadProgress !== null || isUserLoading || !user;

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Our Work</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          A collection of our completed demolition, site clearing, and construction projects across Gauteng.
        </p>
      </div>

      <Card className="max-w-xl mx-auto mb-12 shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Upload New Image</h2>
          <div className="space-y-4">
            <Input type="file" accept="image/*" onChange={handleFileChange} className="file:text-primary-foreground" />
            {uploadProgress !== null && <Progress value={uploadProgress} className="w-full" />}
            <Button onClick={handleUpload} disabled={isUploadDisabled} className="w-full">
              <Upload className="mr-2 h-4 w-4" />
              {isUserLoading ? 'Authenticating...' : (uploadProgress !== null ? `Uploading... ${Math.round(uploadProgress ?? 0)}%` : "Upload Image")}
            </Button>
          </div>
          {error && <p className="text-destructive text-sm mt-4 text-center">{error}</p>}
        </CardContent>
      </Card>

      <div>
        {isLoading ? (
          <div className="text-center">
            <p>Loading gallery...</p>
          </div>
        ) : imageUrls.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {imageUrls.map((url) => (
              <div key={url} className="aspect-square relative overflow-hidden rounded-lg shadow-md group">
                <Image
                  src={url}
                  alt="Gallery image of a Siya Demolitions project"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        ) : (
          !error && (
            <div className="text-center py-16 border-2 border-dashed rounded-lg">
              <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">The Gallery is Empty</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Upload an image to get started.
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
