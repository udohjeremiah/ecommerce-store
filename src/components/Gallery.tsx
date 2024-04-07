"use client";

import { useState } from "react";

import { CldImage } from "next-cloudinary";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { cn } from "@/lib/utils";

import { Image } from "@/types/types";

interface GalleryProps {
  images: Image[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className={cn("order-2 space-y-8", "md:order-none")}>
      <Card>
        <CardContent className="p-0">
          <CldImage
            src={images[selectedImage].imagePublicId}
            alt=""
            width="960"
            height="640"
            priority
            className="aspect-square h-full w-full rounded-xl object-contain"
          />
        </CardContent>
      </Card>
      <div>
        <ul className="flex gap-2 overflow-x-auto">
          {images.map((image, index) => (
            <li key={index}>
              <Button
                variant="outline"
                className={cn(
                  "h-24 w-24 p-0",
                  selectedImage === index && "border-primary p-1",
                )}
                onClick={() => setSelectedImage(index)}
              >
                <CldImage
                  src={image.imagePublicId}
                  alt=""
                  width="96"
                  height="96"
                  priority
                  className={cn(
                    "aspect-square h-full w-full rounded-md object-contain",
                    "hover:scale-105",
                  )}
                />
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
