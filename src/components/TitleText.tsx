import React from "react";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import { Palette } from "@/types/Palette";
import { twMerge } from "tailwind-merge";
import { userHeaderClasses } from "@/utils/globals";
import clsx from "clsx";

type TitleTextProps = {
  title: PortableTextBlock[];
  blockPalette?: Palette;
  alignment?: "left" | "center" | "right";
  textSize?: "md" | "lg" | "xl";
  balanceText?: boolean;
};

export default function TitleText({
  title,
  blockPalette,
  alignment,
  textSize = "lg",
  balanceText = false,
}: TitleTextProps) {
  return (
    <PortableText
      value={title}
      components={{
        block: {
          normal: ({ children }) => (
            <h1
              className={clsx(
                "leading-[120%]",
                {
                  "[text-wrap:balance]": balanceText,
                  "text-[32px] font-black md:text-6xl": textSize === "xl",
                  "text-[30px] font-black md:text-5xl": textSize === "lg",
                  "text-[25px] font-bold md:text-4xl": textSize === "md",
                  "text-left": alignment === "left",
                  "text-center": alignment === "center",
                  "text-right": alignment === "right",
                },
                userHeaderClasses[blockPalette || "white"],
              )}
            >
              {children}
            </h1>
          ),
        },
        marks: {
          "highlight-blue": ({ children }) => (
            <span className="bg-grape-400 px-[1px] text-white">{children}</span>
          ),
          "highlight-orange": ({ children }) => (
            <span className="bg-carrot-600 px-[1px] text-white">
              {children}
            </span>
          ),
          "highlight-green": ({ children }) => (
            <span className="bg-kale-600 px-[1px] text-white">{children}</span>
          ),
        },
      }}
    />
  );
}
