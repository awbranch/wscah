import React from "react";
import { DataCard as DataCardType } from "@/types/DataCard";
import { H2, Para } from "@/components/Typography";
import DataChart from "@/components/DataChart";
import { Palette } from "@/types/Palette";
import clsx from "clsx";

type DataCardProps = Omit<DataCardType, "_type" | "_key"> & {
  palette: Palette;
};

export default function DataCard({
  palette,
  title,
  text,
  units,
  data,
}: DataCardProps) {
  return (
    <div
      className={clsx("flex h-full flex-col justify-between rounded-lg p-10", {
        "bg-grape-500": palette === "blue",
        "bg-white": palette === "white",
        "bg-gray-100": palette === "gray",
      })}
    >
      <div className="h-full">
        <div className="flex flex-col gap-4">
          {title && (
            <H2
              className={clsx("my-0", {
                "text-grape-600": palette === "white" || palette === "gray",
                "text-white": palette === "blue",
              })}
            >
              {title}
            </H2>
          )}
          {title && text && (
            <hr
              className={clsx(
                "w-[26px] border-[3.5px] transition-all group-hover:w-[116px]",
                {
                  "border-carrot-500":
                    palette === "white" || palette === "gray",
                  "border-grape-300 group-hover:border-carrot-500":
                    palette === "blue",
                },
              )}
            />
          )}
          {text && (
            <Para
              className={clsx("my-0 font-medium", {
                "text-white": palette === "blue",
                "text-mushroom-600": palette === "white" || palette === "gray",
              })}
            >
              {text}
            </Para>
          )}
        </div>
      </div>
      <DataChart palette={palette} units={units} data={data} />
    </div>
  );
}
