"use client";

import { CldImage } from "next-cloudinary";

import { Card, CardContent } from "@/components/ui/card";

import { cn } from "@/lib/utils";

import { Billboard as BillboardType } from "@/types/types";

interface BillboardProps {
  billboard: BillboardType;
}

export default function Billboard({ billboard }: BillboardProps) {
  return (
    <section>
      <Card className="relative">
        <CardContent className="p-0">
          <CldImage
            src={billboard.imagePublicId}
            alt=""
            width="960"
            height="640"
            className={cn(
              "aspect-square h-full w-full rounded-xl object-cover",
              "sm:aspect-[2.4/1]",
            )}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h2
              className={cn(
                "text-balance text-4xl font-bold leading-tight tracking-tighter text-white",
                "sm:max-w-xl",
                "md:text-6xl",
                "lg:leading-[1.1]",
              )}
            >
              {billboard.label}
            </h2>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
