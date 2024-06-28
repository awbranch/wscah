import React from "react";
import { Palette } from "@/types/Palette";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type EyebrowPros = {
  className?: string;
  blockPalette?: Palette;
  text: string;
};

export default function Eyebrow({
  className,
  blockPalette,
  text,
}: EyebrowPros) {
  return (
    <div
      className={twMerge(
        clsx(
          "text-sm font-black uppercase md:text-base",

          {
            "text-grape-400": blockPalette !== "blue",
            "text-white": blockPalette === "blue",
          },
        ),
        className,
      )}
    >
      {text}
    </div>
  );
}
