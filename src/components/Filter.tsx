"use client";

import { useRouter, useSearchParams } from "next/navigation";

import queryString from "query-string";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Color, Size } from "@/types/types";

interface FilterProps {
  valueKey: string;
  name: string;
  data: (Size | Color)[];
}

export default function Filter({ valueKey, name, data }: FilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = queryString.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = queryString.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <Separator className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter, index) => (
          <div key={index} className="flex items-center">
            <Button
              variant={selectedValue === filter.id ? "secondary" : "outline"}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
