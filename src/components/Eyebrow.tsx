import React from "react";
import { Palette } from "@/types/Palette";
import clsx from "clsx";

type EyebrowPros = {
  blockPalette?: Palette;
  text: string;
};

export default function Eyebrow({ blockPalette, text }: EyebrowPros) {
  return (
    <div
      className={clsx("text-sm font-black uppercase md:text-base", {
        "text-grape-400": blockPalette !== "blue",
        "text-white": blockPalette === "blue",
      })}
    >
      {text}
    </div>
  );
}
